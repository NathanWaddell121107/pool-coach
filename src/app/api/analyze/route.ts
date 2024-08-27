import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { Storage } from '@google-cloud/storage'
import {
  VideoIntelligenceServiceClient,
  protos,
} from '@google-cloud/video-intelligence'
import { Long } from '@google-cloud/video-intelligence/build/protos/protos'
import fs from 'fs'
import { NextResponse } from 'next/server'
import os from 'os'
import path from 'path'
import {
  Frame,
  IAnnotateVideoResponse,
  ILabelAnnotation,
  INormalizedBoundingBox,
  INormalizedVertex,
  IObjectTrackingAnnotation,
  IPersonDetectionAnnotation,
  IVideoAnnotationResults,
  ObjectAnnotation,
  PoolShot,
  ProcessedResults,
} from '../../../types/VideoAnalysisTypes'

const videoIntelligenceClient = new VideoIntelligenceServiceClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
})

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

const storage = new Storage({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
})

const GCS_BUCKET_NAME = process.env.GCS_BUCKET_NAME!

async function downloadFromS3AndUploadToGCS(fileUrl: string): Promise<string> {
  const bucketName = process.env.S3_BUCKET_NAME!
  const key = new URL(fileUrl).pathname.slice(1) // Remove leading '/'

  const command = new GetObjectCommand({ Bucket: bucketName, Key: key })
  const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 })

  const response = await fetch(signedUrl)
  const arrayBuffer = await response.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'video-analysis-'))
  const tempFilePath = path.join(tempDir, 'temp-video.mp4')
  fs.writeFileSync(tempFilePath, buffer)

  const gcsFileName = `temp-${Date.now()}.mp4`
  await storage.bucket(GCS_BUCKET_NAME).upload(tempFilePath, {
    destination: gcsFileName,
  })

  fs.unlinkSync(tempFilePath)
  fs.rmdirSync(tempDir)

  return `gs://${GCS_BUCKET_NAME}/${gcsFileName}`
}

async function analyzeVideo(inputUri: string): Promise<IAnnotateVideoResponse> {
  const [operation] = await videoIntelligenceClient.annotateVideo({
    inputUri: inputUri,
    features: [
      protos.google.cloud.videointelligence.v1.Feature.LABEL_DETECTION,
      protos.google.cloud.videointelligence.v1.Feature.OBJECT_TRACKING,
      protos.google.cloud.videointelligence.v1.Feature.PERSON_DETECTION,
    ],
    videoContext: {
      labelDetectionConfig: {
        labelDetectionMode:
          protos.google.cloud.videointelligence.v1.LabelDetectionMode
            .FRAME_MODE,
        stationaryCamera: false,
      },
      personDetectionConfig: {
        includeAttributes: true,
        includePoseLandmarks: true,
      },
    },
  })

  const [response] = await operation.promise()
  return response
}

function processAnalysisResults(
  response: IAnnotateVideoResponse
): ProcessedResults {
  const annotationResults = response.annotationResults?.[0] || {}
  const labels = annotationResults.shotLabelAnnotations || []
  const objects = annotationResults.objectAnnotations || []
  const persons = annotationResults.personDetectionAnnotations || []

  return {
    labels: labels.map((label: ILabelAnnotation) => ({
      name: label.entity?.description || '',
      confidence: label.frames?.[0]?.confidence || 0,
    })),
    objects: objects.map((object: IObjectTrackingAnnotation) => ({
      name: object.entity?.description || '',
      confidence: object.segment?.confidence || 0,
      frames:
        object.frames?.map((frame) => ({
          timeOffset: convertToNumber(frame.timeOffset),
          boundingBox: frame.normalizedBoundingBox || {},
        })) || [],
    })),
    persons: persons.map((person: IPersonDetectionAnnotation) => ({
      tracks:
        person.tracks?.map((track) => ({
          confidence: track.confidence || 0,
          frames:
            track.timestampedObjects?.map((obj) => ({
              timeOffset: convertToNumber(obj.timeOffset),
              boundingBox: obj.normalizedBoundingBox || {},
              landmarks:
                obj.landmarks?.map((landmark) => ({
                  name: landmark.name || '',
                  point: landmark.point || {},
                })) || [],
            })) || [],
        })) || [],
    })),
  }
}

function convertToNumber(
  timeOffset: string | number | Long | null | undefined
): number {
  if (typeof timeOffset === 'number') {
    return timeOffset
  } else if (typeof timeOffset === 'string') {
    return parseFloat(timeOffset)
  } else if (timeOffset instanceof Long) {
    return timeOffset.toNumber()
  }
  return 0
}

function detectPoolShots(results: ProcessedResults): PoolShot[] {
  const poolShots: PoolShot[] = []
  const cueBallMovements = results.objects.filter(
    (obj: ObjectAnnotation) => obj.name === 'Cue Ball'
  )

  cueBallMovements.forEach((cueBall: ObjectAnnotation) => {
    cueBall.frames.forEach((frame: Frame, index: number) => {
      if (index > 0) {
        const prevFrame = cueBall.frames[index - 1]
        const movement = Math.sqrt(
          Math.pow(
            (frame.boundingBox.left || 0) - (prevFrame.boundingBox.left || 0),
            2
          ) +
            Math.pow(
              (frame.boundingBox.top || 0) - (prevFrame.boundingBox.top || 0),
              2
            )
        )
        if (movement > 0.1) {
          poolShots.push({
            timeOffset: frame.timeOffset,
            movement,
          })
        }
      }
    })
  })

  return poolShots
}

export async function POST(request: Request) {
  try {
    const { fileUrl } = await request.json()
    console.log('Analyzing file:', fileUrl)

    const inputUri = fileUrl.startsWith('gs://')
      ? fileUrl
      : await downloadFromS3AndUploadToGCS(fileUrl)
    console.log('Input URI:', inputUri)

    console.log('Starting video analysis...')
    const analysisResponse = await analyzeVideo(inputUri)
    console.log('Video analysis complete')

    const processedResults = processAnalysisResults(analysisResponse)
    console.log('Processed results:', JSON.stringify(processedResults, null, 2))

    const poolShots = detectPoolShots(processedResults)
    console.log('Detected pool shots:', poolShots)

    if (inputUri.startsWith(`gs://${GCS_BUCKET_NAME}`)) {
      await storage
        .bucket(GCS_BUCKET_NAME)
        .file(path.basename(inputUri))
        .delete()
      console.log('Temporary GCS file deleted')
    }

    return NextResponse.json({ results: { ...processedResults, poolShots } })
  } catch (error) {
    console.error('Error analyzing video:', error)
    return NextResponse.json(
      { error: 'Error analyzing video', details: (error as Error).message },
      { status: 500 }
    )
  }
}
