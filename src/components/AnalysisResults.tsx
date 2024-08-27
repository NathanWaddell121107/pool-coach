import React, { useCallback, useEffect, useRef } from 'react'
import { testPoolData } from '../lib/testPoolData'

interface AnalysisResultsProps {
  results: {
    labels: Array<{ name: string; confidence: number }>
    objects: Array<{
      name: string
      confidence: number
      frames: Array<{
        timeOffset: { low: number; high: number; unsigned: boolean }
        boundingBox: any
      }>
    }>
    persons: Array<{
      tracks: Array<{
        confidence: number
        frames: Array<any>
      }>
    }>
    shots: Array<{
      startTime: { low: number; high: number; unsigned: boolean }
      endTime: { low: number; high: number; unsigned: boolean }
    }>
    poolShots: Array<{ timeOffset: number; movement: number }>
  }
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ results }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const drawTimeline = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      const width = ctx.canvas.width
      const height = ctx.canvas.height
      const totalDuration = results.shots[results.shots.length - 1].endTime.low

      console.log('Total Duration:', totalDuration)

      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = '#e0e0e0'
      ctx.fillRect(0, 0, width, height)

      results.shots.forEach((shot, index) => {
        const startX = (shot.startTime.low / totalDuration) * width
        const endX = (shot.endTime.low / totalDuration) * width
        console.log(
          `Shot ${index + 1}: startTime=${shot.startTime.low}, endTime=${shot.endTime.low}, startX=${startX}, endX=${endX}`
        )
        ctx.fillStyle = index % 2 === 0 ? '#4a90e2' : '#45aaf2'
        ctx.fillRect(startX, 0, endX - startX, height)

        // Add text labels for start and end times
        ctx.fillStyle = '#000'
        ctx.font = '12px Arial'
        ctx.fillText(
          `Start: ${shot.startTime.low}s`,
          startX + 5,
          height / 2 - 5
        )
        ctx.fillText(`End: ${shot.endTime.low}s`, endX - 50, height / 2 - 5)
      })

      // Draw pool shots
      results.poolShots.forEach((shot, index) => {
        const x = (shot.timeOffset / totalDuration) * width
        ctx.fillStyle = '#ff0000'
        ctx.fillRect(x, 0, 2, height)
        ctx.fillText(`Shot ${index + 1}`, x + 5, height / 2 - 5)
      })
    },
    [results]
  )

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      if (ctx) {
        drawTimeline(ctx)
      }
    }
  }, [drawTimeline, results])

  const calculateAverageShot = () => {
    const totalTime = results.shots.reduce(
      (sum, shot) => sum + (shot.endTime.low - shot.startTime.low),
      0
    )
    return (totalTime / results.shots.length).toFixed(2)
  }

  const getMostFrequentObject = () => {
    const objectCounts = results.objects.reduce(
      (acc, obj) => {
        acc[obj.name] = (acc[obj.name] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )
    return Object.entries(objectCounts).sort((a, b) => b[1] - a[1])[0][0]
  }

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Video Analysis Results</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Game Overview</h3>
        <p>Total shots: {results.shots.length}</p>
        <p>Average shot duration: {calculateAverageShot()} seconds</p>
        <p>Most frequently detected object: {getMostFrequentObject()}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Shot Timeline</h3>
        <canvas
          ref={canvasRef}
          width={600}
          height={50}
          className="w-full border border-gray-300"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Detected Objects</h3>
        <ul className="list-disc pl-5">
          {results.objects.slice(0, 5).map((obj, index) => (
            <li key={index}>
              {obj.name} (Confidence: {(obj.confidence * 100).toFixed(2)}%)
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Player Movement</h3>
        <p>
          Number of tracked movements:{' '}
          {results.persons.reduce(
            (sum, person) => sum + person.tracks.length,
            0
          )}
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Basic Insights</h3>
        <ul className="list-disc pl-5">
          <li>
            Your average shot time is {calculateAverageShot()} seconds. A
            consistent pre-shot routine can improve your accuracy.
          </li>
          <li>
            The most frequently detected object was &quot;
            {getMostFrequentObject()}&quot;. Ensure you&apos;re maintaining
            proper focus on the cue ball and object balls.
          </li>
          <li>
            We tracked{' '}
            {results.persons.reduce(
              (sum, person) => sum + person.tracks.length,
              0
            )}{' '}
            distinct movements. Minimizing unnecessary movement can lead to more
            consistent shots.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AnalysisResults
