import axios from 'axios'
import React, { useRef, useState } from 'react'

interface FileUploadProps {
  onFileChange: (selectedFile: File | null) => void
  onUploadProgress: (progress: number) => void
  onUploadComplete: (url: string) => void
}

export default function FileUpload({
  onFileChange,
  onUploadProgress,
  onUploadComplete,
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = async (file: File) => {
    onFileChange(file)

    try {
      // Get the pre-signed URL
      const { data } = await axios.post('/api/upload', {
        filename: file.name,
        contentType: file.type,
        fileSize: file.size,
      })

      // Upload to S3
      const formData = new FormData()
      Object.entries(data.fields).forEach(([key, value]) => {
        formData.append(key, value as string)
      })
      formData.append('file', file)

      const uploadResponse = await axios.post(data.url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total!
          )
          onUploadProgress(percentCompleted)
        },
      })

      if (uploadResponse.status === 204) {
        // Construct the final URL without the extra slash
        const fileUrl = new URL(data.fields.key, data.url).href
        onUploadComplete(fileUrl)
      }
    } catch (error) {
      console.error('Error uploading file:', error)
      // Handle error (e.g., show error message to user)
    }
  }

  const onButtonClick = () => {
    inputRef.current?.click()
  }

  return (
    <div
      className={`relative p-4 w-full h-32 border-2 border-dashed rounded-lg ${
        dragActive ? 'border-blue-500' : 'border-gray-300'
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleChange}
        accept="image/*,video/*"
      />
      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center h-full"
      >
        <svg
          className="w-8 h-8 mb-2 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          ></path>
        </svg>
        <p className="text-sm text-gray-600">
          Drag and drop your file here, or click to select a file
        </p>
      </label>
      <button
        type="button"
        onClick={onButtonClick}
        className="absolute bottom-3 right-3 bg-blue-500 hover:bg-blue-600 text-white text-sm py-1 px-2 rounded"
      >
        Select File
      </button>
    </div>
  )
}
