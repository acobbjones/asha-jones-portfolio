"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"
import { Check } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"

export default function DeltaCaseStudy() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = (x / rect.width) * 100
    setSliderPosition(percent)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX)
    }
    const handleMouseUp = () => setIsDragging(false)
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, handleMove])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F5FF] via-[#F0EBF8] to-[#E8E0F0]">
      <Navigation />

      {/* Content */}
      <div className="p-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Hero Card */}
          <div className="bg-white/95 rounded-lg p-1 shadow-sm border border-white/30">
            <div className="bg-white rounded-lg p-8">
              <h1
                className="text-4xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Delta Airlines
              </h1>
              <p className="text-xl text-gray-600 mb-4">SkyMiles Profile & UI Component Design</p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  Role: Senior UX/UI Designer
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Duration: Jan 2022 - Sep 2022
                </span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
                  Team: Cross-functional
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border border-red-300 text-red-600 rounded-full text-sm">Aviation</span>
                <span className="px-3 py-1 border border-blue-300 text-blue-600 rounded-full text-sm">
                  Design Systems
                </span>
                <span className="px-3 py-1 border border-cyan-300 text-cyan-600 rounded-full text-sm">
                  Enterprise UX
                </span>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-white/95 rounded-lg p-1 shadow-sm border border-white/30">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold text-[#5a3e5c] mb-4"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Context
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Delta, I contributed to the SkyMiles profile experience and worked on core UI components used across
                Delta's digital properties. This project involved working within enterprise-scale design systems and
                collaborating with cross-functional teams including engineering, product, and brand.
              </p>
              <p className="text-gray-600 italic">
                Due to NDA restrictions, specific visuals and detailed metrics cannot be shared. This case study focuses
                on my role, approach, and general outcomes.
              </p>
            </div>
          </div>

          {/* What I Did Section */}
          <div className="bg-white/95 rounded-lg p-1 shadow-sm border border-white/30">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold text-[#7a6a82] mb-4"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                My Contributions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-5">
                  <h3 className="font-bold text-red-800 mb-3">SkyMiles Profile</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-red-500 mt-0.5" />
                      <span>Redesigned profile dashboard for improved usability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-red-500 mt-0.5" />
                      <span>Improved miles visibility and status tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-red-500 mt-0.5" />
                      <span>Streamlined account management flows</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-5">
                  <h3 className="font-bold text-blue-800 mb-3">Design System Components</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-500 mt-0.5" />
                      <span>Created reusable UI components for delta.com</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-500 mt-0.5" />
                      <span>Documented component specifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-500 mt-0.5" />
                      <span>Collaborated on accessibility standards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Modal Redesign */}
          <div className="bg-white/95 rounded-lg p-1 shadow-sm border border-white/30">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold text-[#5a3e5c] mb-6"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Profile Modal Redesign
              </h2>

              {/* Before/After Slider */}
              <div
                ref={containerRef}
                className="relative aspect-video rounded-lg border border-gray-200 cursor-col-resize overflow-hidden select-none"
                onMouseDown={(e) => {
                  setIsDragging(true)
                  handleMove(e.clientX)
                }}
                onTouchStart={(e) => {
                  setIsDragging(true)
                  handleMove(e.touches[0].clientX)
                }}
                onTouchMove={(e) => {
                  if (isDragging) handleMove(e.touches[0].clientX)
                }}
                onTouchEnd={() => setIsDragging(false)}
              >
                {/* After Image (background - new design on right) */}
                <div className="absolute inset-0">
                  <img
                    src="https://i.imgur.com/wX3Z5Ei.png"
                    alt="After: Redesigned Delta profile modal with improved hierarchy"
                    className="absolute inset-0 w-full h-full object-contain bg-gray-50"
                    draggable={false}
                  />
                  <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    After
                  </span>
                </div>

                {/* Before Image (clipped overlay - old design on left) */}
                <div
                  className="absolute inset-0 z-10"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img
                    src="https://i.imgur.com/fWscbpJ.png"
                    alt="Before: Original Delta profile modal design"
                    className="absolute inset-0 w-full h-full object-contain bg-gray-50"
                    draggable={false}
                  />
                  <span className="absolute top-3 left-3 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Before
                  </span>
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 z-20"
                  style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
                >
                  <div className="w-1 h-full bg-white shadow-xl" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center gap-1">
                    <div className="w-0.5 h-4 bg-gray-400 rounded-full" />
                    <div className="w-0.5 h-4 bg-gray-400 rounded-full" />
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm italic text-center mt-4 mb-6">
                Drag the slider to compare before and after designs
              </p>

              {/* Key Improvements */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  Key Improvements
                </h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  <li>Simplified decision pathways for profile name mismatches</li>
                  <li>Enhanced visual hierarchy and readability</li>
                  <li>Improved error state messaging and user guidance</li>
                  <li>{"Consistent with Delta's design system standards"}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Demonstrated */}
          <div className="bg-white/95 rounded-lg p-1 shadow-sm border border-white/30">
            <div className="bg-white rounded-lg p-8">
              <h2
  className="text-2xl font-bold mb-4"
  style={{ fontFamily: "Courier New, Courier, monospace", color: "#5a3e5c" }}
>
  Skills Demonstrated
</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              <div className="text-center p-4 rounded-lg" style={{ background: "rgba(232,213,240,0.2)" }}>
  <p className="font-bold" style={{ color: "#5a3e5c" }}>Enterprise UX</p>
  <p className="text-gray-600 text-sm">Large-scale systems</p>
</div>
<div className="text-center p-4 rounded-lg" style={{ background: "rgba(232,213,240,0.2)" }}>
  <p className="font-bold" style={{ color: "#5a3e5c" }}>Design Systems</p>
  <p className="text-gray-600 text-sm">Component-based design</p>
</div>
<div className="text-center p-4 rounded-lg" style={{ background: "rgba(232,213,240,0.2)" }}>
  <p className="font-bold" style={{ color: "#5a3e5c" }}>Collaboration</p>
  <p className="text-gray-600 text-sm">Cross-functional teams</p>
</div>
<div className="text-center p-4 rounded-lg" style={{ background: "rgba(232,213,240,0.2)" }}>
  <p className="font-bold" style={{ color: "#5a3e5c" }}>Accessibility</p>
  <p className="text-gray-600 text-sm">WCAG compliance</p>
</div>
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-lg py-6 px-8 mt-12 shadow-lg max-w-lg mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-md mx-auto w-full">
              <Link
                href="/more-work"
                scroll={true}
                style={{ 
                  background: "none",
                  fontFamily: "Courier New, Courier, monospace",
                  fontWeight: "bold",
                  color: "#9a8aa2",
                  fontSize: "1rem",
                  textDecoration: "none",
                  transition: "color 0.2s"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "#5a3e5c"
                  e.currentTarget.style.textDecoration = "underline"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "#9a8aa2"
                  e.currentTarget.style.textDecoration = "none"
                }}
              >
                {"← Back to Archives"}
              </Link>
              <Link
                href="/work/us-bank"
                scroll={true}
                style={{ 
                  background: "none",
                  fontFamily: "Courier New, Courier, monospace",
                  fontWeight: "bold",
                  color: "#9a8aa2",
                  fontSize: "1rem",
                  textDecoration: "none",
                  transition: "color 0.2s"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "#5a3e5c"
                  e.currentTarget.style.textDecoration = "underline"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "#9a8aa2"
                  e.currentTarget.style.textDecoration = "none"
                }}
              >
                {"US Bank →"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
