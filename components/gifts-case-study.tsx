"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Check } from "lucide-react"

export default function GiftsCaseStudy() {
  const [isWorkOpen, setIsWorkOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-cyan-300">
      {/* Navigation */}
      <div className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 p-4 sticky top-0 z-50">
        <nav className="flex justify-center gap-6 font-bold" style={{ fontFamily: "Courier New, Courier, monospace" }}>
          <Link
            href="/"
            scroll={true}
            className="text-white px-6 py-2 rounded-full transition-all cursor-pointer no-underline hover:underline hover:bg-white/20 hover:backdrop-blur-sm"
          >
            Home
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsWorkOpen(!isWorkOpen)}
              onBlur={() => setTimeout(() => setIsWorkOpen(false), 200)}
              className="flex items-center gap-1 px-6 py-2 rounded-full font-bold transition-all cursor-pointer no-underline bg-white text-purple-700"
              style={{ fontFamily: "Courier New, Courier, monospace" }}
            >
              Work
              <ChevronDown size={16} className={`transition-transform ${isWorkOpen ? "rotate-180" : ""}`} />
            </button>
            {isWorkOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[250px] z-50">
                <Link
                  href="/work/vanderbilt-navigation"
                  scroll={true}
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 no-underline"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  Big VU Navigation
                </Link>
                <Link
                  href="/work/sold-by-stevannah"
                  scroll={true}
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 no-underline"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  Sold by Stevannah
                </Link>
                <Link
                  href="/work/blair-school"
                  scroll={true}
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 no-underline"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  Blair School of Music
                </Link>
                <Link
                  href="/work/csv-stack-ai"
                  scroll={true}
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 no-underline"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  CSV Stack AI
                </Link>
                <div className="border-t border-gray-200 my-2" />
                <Link
                  href="/more-work"
                  scroll={true}
                  className="block px-4 py-2 text-gray-500 hover:bg-gray-50 italic no-underline"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  More Work
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/about"
            scroll={true}
            className="text-white px-6 py-2 rounded-full transition-all cursor-pointer no-underline hover:underline hover:bg-white/20 hover:backdrop-blur-sm"
          >
            About
          </Link>
          <Link
            href="/contact"
            scroll={true}
            className="text-white px-6 py-2 rounded-full transition-all cursor-pointer no-underline hover:underline hover:bg-white/20 hover:backdrop-blur-sm"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Hero Card */}
          <div className="bg-pink-400 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <h1
                className="text-4xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                GIFTS, Inc.
              </h1>
              <p className="text-xl text-gray-600 mb-4">Non-Profit Digital Experience & Donor Engagement Platform</p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Role: UX Designer
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Duration: March 2016 - Dec 2020
                </span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
                  Team: Remote collaboration
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border border-green-300 text-green-500 rounded-full text-sm">
                  Non-Profit
                </span>
                <span className="px-3 py-1 border border-purple-300 text-purple-500 rounded-full text-sm">
                  UX Bootcamp Project
                </span>
                <span className="px-3 py-1 border border-blue-300 text-blue-500 rounded-full text-sm">
                  Accessibility
                </span>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-pink-400 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold text-purple-600 mb-4"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Context
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                GIFTS, Inc. (Grandparents In For The Struggle) is a nonprofit organization supporting grandparents who
                are raising their grandchildren. This project was part of my UX bootcamp experience, where I worked to
                redesign their digital presence and improve donor engagement.
              </p>
              <p className="text-gray-600 italic">
                This was a foundational project in my UX career that taught me the importance of designing for
                accessibility and emotional resonance with underserved audiences.
              </p>
            </div>
          </div>

          {/* What I Did Section */}
          <div className="bg-pink-400 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold text-pink-600 mb-4"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                My Contributions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-bold text-green-800 mb-3">Website Redesign</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Complete site redesign with WCAG 2.1 AA compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Improved information architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Emotional design for older demographics</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-5">
                  <h3 className="font-bold text-blue-800 mb-3">Donor Experience</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-500 mt-0.5" />
                      <span>Simplified donation flow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-500 mt-0.5" />
                      <span>Impact storytelling integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-blue-500 mt-0.5" />
                      <span>Clear calls-to-action</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Demonstrated */}
          <div className="bg-pink-400 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold text-cyan-600 mb-4"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Skills Demonstrated
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <p className="font-bold text-purple-700">Accessibility</p>
                  <p className="text-gray-600 text-sm">WCAG compliance</p>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-lg">
                  <p className="font-bold text-pink-700">Emotional Design</p>
                  <p className="text-gray-600 text-sm">User empathy</p>
                </div>
                <div className="text-center p-4 bg-cyan-50 rounded-lg">
                  <p className="font-bold text-cyan-700">Non-Profit</p>
                  <p className="text-gray-600 text-sm">Mission-driven work</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="font-bold text-gray-700">User Research</p>
                  <p className="text-gray-600 text-sm">Stakeholder interviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-lg py-6 px-8 mt-12 shadow-lg max-w-lg mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-md mx-auto w-full">
              <Link
                href="/work/neighborly"
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
                {"← Neighborly"}
              </Link>
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
                {"Back to Archives →"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
