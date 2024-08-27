import { S3Client } from '@aws-sdk/client-s3'
import { createPresignedPost } from '@aws-sdk/s3-presigned-post'
import { NextResponse } from 'next/server'

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

const ALLOWED_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'video/mp4',
  'video/mov',
  'video/avi',
  'video/mkv',
  'video/webm',
  'video/wmv',
  'video/mpg',
  'video/mpeg',
  'video/mp2',
  'video/mp2t',
  'video/mp2s',
  'video/mp2v',
  'video/mp3',
  'video/mp4',
  'video/mpeg',
  'video/mpg',
  'video/mpg4',
  'video/mpeg',
  'video/mpeg1',
  'video/mpeg2',
  'video/mpeg4',
  'video/mpg',
  'video/mpg4',
  'video/mpeg',
  'video/mpeg1',
  'video/mpeg2',
  'video/mpeg4',
  'video/quicktime',
  'video/x-matroska',
  'video/x-msvideo',
  'video/x-ms-wmv',
]
const MAX_FILE_SIZE = 1000000000 // 1 GB

export async function POST(request: Request) {
  try {
    const { filename, contentType, fileSize } = await request.json()

    // Validate file type
    if (!ALLOWED_FILE_TYPES.includes(contentType)) {
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 })
    }

    // Validate file size
    if (fileSize > MAX_FILE_SIZE) {
      return NextResponse.json({ error: 'File too large' }, { status: 400 })
    }

    const post = await createPresignedPost(s3Client, {
      Bucket: process.env.S3_BUCKET_NAME!,
      Key: filename,
      Conditions: [
        ['content-length-range', 0, MAX_FILE_SIZE],
        ['starts-with', '$Content-Type', contentType],
      ],
      Fields: {
        acl: 'public-read',
        'Content-Type': contentType,
      },
      Expires: 600, // Seconds before the presigned post expires. 3600 by default.
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error creating presigned URL', error)
    return NextResponse.json(
      { error: 'Error creating presigned URL' },
      { status: 500 }
    )
  }
}
