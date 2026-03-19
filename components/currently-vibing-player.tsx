"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function CurrentlyVibingPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration] = useState(240) // 4 minutes example
  const [showTooltip, setShowTooltip] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Simulate progress
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, duration])

  const handlePlayPause = () => {
    if (!hasInteracted) {
      setHasInteracted(true)
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 3000)
    }

    try {
      // Attempt to interact with iframe for playback
      if (iframeRef.current) {
        const iframe = iframeRef.current
        // Send message to iframe to control playback
        iframe.contentWindow?.postMessage(
          {
            method: isPlaying ? "pause" : "play",
          },
          "*",
        )
      }
      setIsPlaying(!isPlaying)
    } catch (error) {
      console.log("[v0] Playback interaction error:", error)
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 3000)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const progress = (currentTime / duration) * 100

  return (
    <Card className="p-4 border-2 border-primary/20 relative" style={{ backgroundColor: "#fdf0dc" }}>
      <h3 className="font-retro text-lg font-bold text-primary mb-3 flex items-center gap-2">Currently Vibing To</h3>

      <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        <iframe
          ref={iframeRef}
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameBorder="0"
          height="450"
          style={{ width: "100%", maxWidth: "660px", overflow: "hidden", borderRadius: "10px" }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/playlist/the-vibes-of-course/pl.u-9N9L24pTaebXm8"
          title="Apple Music Player"
        />
      </div>

      {showTooltip && (
        <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-retro animate-in fade-in slide-in-from-top-2 z-10">
          Tap to enable sound 🎶
        </div>
      )}

      {/* Custom Player UI - matches Lo-Fi Hip Hop Radio design exactly */}
      <div className="space-y-3">
        <div className="text-center">
          <p className="font-retro text-sm font-bold text-primary">The Vibes of Course</p>
          <p className="font-retro text-xs text-muted-foreground">Various Artists • The Vibes of Course</p>
        </div>

        {/* Album Art Placeholder - same design as Lo-Fi player */}
        <div className="w-20 h-20 mx-auto rounded-lg border-2 border-primary/20 bg-gradient-to-br from-pink-200 to-blue-200 flex items-center justify-center">
          {/* removed Music icon */}
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button
            size="sm"
            variant="outline"
            onClick={handlePlayPause}
            className="w-10 h-10 rounded-full border-2 sparkle-hover bg-transparent"
            style={{ borderColor: "#e46aa3", backgroundColor: isPlaying ? "#e46aa3" : "transparent" }}
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" style={{ color: isPlaying ? "white" : "#e46aa3" }} />
            ) : (
              <Play className="w-4 h-4" style={{ color: "#e46aa3" }} />
            )}
          </Button>
        </div>

        {/* Progress Bar - exact same styling as Lo-Fi player */}
        <div className="space-y-2">
          <div className="w-full bg-primary/20 rounded-full h-2 overflow-hidden">
            <div
              className="h-2 rounded-full transition-all duration-1000 ease-linear"
              style={{
                width: `${progress}%`,
                backgroundColor: "#e46aa3",
              }}
            ></div>
          </div>
          <div className="flex justify-between text-xs font-retro" style={{ color: "#a1a1aa" }}>
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Retro Status - matches Lo-Fi player */}
        <div className="text-center">
          <p className="text-xs font-retro text-muted-foreground">{isPlaying ? "🎶 Vibing..." : "⏸️ Paused"}</p>
        </div>
      </div>
    </Card>
  )
}
