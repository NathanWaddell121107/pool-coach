import { protos } from '@google-cloud/video-intelligence'

export type IAnnotateVideoResponse =
  protos.google.cloud.videointelligence.v1.IAnnotateVideoResponse
export type IVideoAnnotationResults =
  protos.google.cloud.videointelligence.v1.IVideoAnnotationResults
export type ILabelAnnotation =
  protos.google.cloud.videointelligence.v1.ILabelAnnotation
export type IObjectTrackingAnnotation =
  protos.google.cloud.videointelligence.v1.IObjectTrackingAnnotation
export type IPersonDetectionAnnotation =
  protos.google.cloud.videointelligence.v1.IPersonDetectionAnnotation
export type INormalizedBoundingBox =
  protos.google.cloud.videointelligence.v1.INormalizedBoundingBox
export type INormalizedVertex =
  protos.google.cloud.videointelligence.v1.INormalizedVertex

export interface BoundingBox {
  left?: number
  top?: number
  right?: number
  bottom?: number
}

export interface Landmark {
  name?: string
  point?: {
    x?: number
    y?: number
    z?: number
  }
}

export interface Frame {
  timeOffset: number
  boundingBox: BoundingBox
  landmarks?: Landmark[]
}

export interface ObjectAnnotation {
  name: string
  confidence: number
  frames: Frame[]
}

export interface PersonTrack {
  confidence: number
  frames: Frame[]
}

export interface PersonAnnotation {
  tracks: PersonTrack[]
}

export interface LabelAnnotation {
  name: string
  confidence: number
}

export interface Shot {
  startTime: number
  endTime: number
}

export interface ProcessedResults {
  labels: LabelAnnotation[]
  objects: ObjectAnnotation[]
  persons: PersonAnnotation[]
  shots?: Shot[]
  poolShots?: PoolShot[]
}

export interface PoolShot {
  timeOffset: number
  movement: number
}
