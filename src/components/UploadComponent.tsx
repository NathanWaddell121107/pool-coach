'use client'

import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import FileUpload from '../components/FileUpload'
import { testPoolData } from '../lib/testPoolData'
import AnalysisResults from './AnalysisResults'

// Add this function at the top of your file, outside the component
function formatResultData(data: any): string {
  return `
Analysis Results:
${JSON.stringify(data, null, 2)}

Labels:
${data.results.labels.map((label: any) => `- ${label.name}: ${(label.confidence * 100).toFixed(2)}%`).join('\n')}

Objects:
${data.results.objects.map((obj: any) => `- ${obj.name}: ${(obj.confidence * 100).toFixed(2)}% (${obj.frames.length} frames)`).join('\n')}

Persons:
${data.results.persons.map((person: any, index: number) => `- Person ${index + 1}: ${person.tracks.length} tracks`).join('\n')}

Shots:
${data.results.shots.map((shot: any, index: number) => `- Shot ${index + 1}: ${shot.startTime}s to ${shot.endTime}s`).join('\n')}
`
}

export default function UploadComponent() {
  const [file, setFile] = useState<File | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [analyzing, setAnalyzing] = useState(false)
  const [analysisResults, setAnalysisResults] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = useCallback((selectedFile: File | null) => {
    setFile(selectedFile)
    setAnalysisResults(null)
    setError(null)
  }, [])

  const handleUploadProgress = useCallback((progress: number) => {
    setUploadProgress(progress)
  }, [])

  const handleUploadComplete = useCallback(async (url: string) => {
    setAnalyzing(true)

    try {
      const analysisResponse = await axios.post('/api/analyze', {
        fileUrl: url,
      })
      console.log('Analysis complete. Response:', analysisResponse.data)

      setAnalysisResults(analysisResponse.data)

      // Log formatted result data
      console.log(formatResultData(analysisResponse.data))
    } catch (error) {
      console.error('Error:', error)
      setError(
        error instanceof Error ? error.message : 'An unknown error occurred'
      )
    } finally {
      setAnalyzing(false)
      setUploadProgress(0)
    }
  }, [])

  // For testing purposes, use the testPoolData
  useEffect(() => {
    setAnalysisResults(testPoolData)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Upload Your Pool Game</h1>
      <FileUpload
        onFileChange={handleFileChange}
        onUploadProgress={handleUploadProgress}
        onUploadComplete={handleUploadComplete}
      />
      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="mt-4">
          <p>Upload Progress: {uploadProgress}%</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        </div>
      )}
      {analyzing && (
        <div className="mt-4 flex items-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500 mr-3"></div>
          <p>Analyzing video...</p>
        </div>
      )}
      {error && <div className="mt-4 text-red-500">{error}</div>}
      {analysisResults && <AnalysisResults results={analysisResults.results} />}
    </div>
  )
}
