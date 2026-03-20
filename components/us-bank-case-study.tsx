"use client"

import { useEffect } from "react"
import Link from "next/link"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"
import { Navigation } from "@/components/navigation"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"

export default function USBankCaseStudy() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F5FF] via-[#F0EBF8] to-[#E8E0F0]">
      <Navigation />

      {/* Content with padding */}
      <div className="p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* 1. Hero Section */}
          <div className="bg-white/95 rounded-lg p-1 shadow-sm border border-white/30">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-gray-500" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  ARCHIVED PROJECT
                </span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">2021-2022</span>
              </div>

              <h1
                className="text-3xl font-bold text-[#5a3e5c] mb-2"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                U.S. Bank — Information Architecture for Financial Goal Tools
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Designing structure and clarity for one of America's largest financial institutions
              </p>

              <div className="flex gap-3 flex-wrap">
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm">
                  Role: Information Architect + UX Designer
                </span>
                <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm">Duration: 2021-2022</span>
                <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm">
                  Tools: Sketch, InVision, Figma
                </span>
              </div>

              <div className="flex gap-2 flex-wrap mt-4">
                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs">
                  Information Architecture
                </span>
                <span className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-xs">Journey Mapping</span>
                <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs">Financial Services</span>
              </div>
            </div>
          </div>

          {/* 2. Project Overview Section */}
          <div className="bg-white/95 rounded-lg p-1 shadow-sm border border-white/30">
            <div className="bg-white rounded-lg p-6">
              <h2
                className="text-2xl font-bold text-[#5a3e5c] mb-4"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Project Overview
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  As part of the U.S. Bank Goals Team, I was responsible for improving the structure, flow, and clarity
                  of several digital banking experiences that helped customers set financial goals, track progress, and
                  access the right tools for their financial well-being.
                </p>
                <p>
                  This work required balancing highly regulated financial content, the needs of multiple user segments
                  (Affluent, Mass Market, Gen Z, Boomers), and complex product offerings across U.S. Bank's digital
                  ecosystem.
                </p>
                <p>
                  The challenge was not simply UI — it was understanding how users think, how they navigate financial
                  tasks, and how to structure information to reduce confusion and support decision-making.
                </p>
              </div>
            </div>
          </div>

          {/* 3. My Contribution Section */}
          <div className="bg-white/95 rounded-lg p-1 shadow-sm border border-white/30">
            <div className="bg-white rounded-lg p-6">
              <h2
                className="text-2xl font-bold text-[#7a6a82] mb-4"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                My Contribution
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3
                    className="font-bold text-gray-800 mb-3"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    What I Owned
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Cross-segment customer journey mapping</li>
                    <li>• Information architecture flows for new features</li>
                    <li>• Competitive analysis to benchmark against top financial apps</li>
                    <li>• Low–mid fidelity prototyping in Sketch, InVision, and Figma</li>
                    <li>• Collaboration with product managers, researchers, and engineering</li>
                  </ul>
                </div>
                <div>
                  <h3
                    className="font-bold text-gray-800 mb-3"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    What I Delivered
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Clean IA flows that clarified tool relationships</li>
                    <li>✓ Simplified navigation hierarchy across multi-step tasks</li>
                    <li>✓ New labeling system to reduce confusion</li>
                    <li>✓ Prototypes exploring new pathways and interactions</li>
                    <li>✓ Collaborated with engineering on feasibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Design Approach Section */}
          <div className="bg-white/95 rounded-lg p-1 shadow-sm border border-white/30">
            <div className="bg-white rounded-lg p-6">
              <h2
                className="text-2xl font-bold text-[#7a6a82] mb-4"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Design Approach
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3
                    className="font-bold text-purple-700 mb-2"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    User Segmentation & Journey Mapping
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Created five detailed journey maps across Affluent Millennials, Mass Market Millennials, Gen Z, and
                    Baby Boomers to identify navigation friction and terminology confusion.
                  </p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3
                    className="font-bold text-pink-700 mb-2"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    Competitive Analysis
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Evaluated Ally Bank and competitor apps to understand how they structure financial tools and
                    communicate savings goals.
                  </p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h3
                    className="font-bold text-cyan-700 mb-2"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    Simplified Information Architecture
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Redesigned IA to ensure users could quickly understand available tools, start savings goals, track
                    progress, and find features aligned with their financial life.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3
                    className="font-bold text-purple-700 mb-2"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    Multi-Audience Structure
                  </h3>
                  <p className="text-gray-700 text-sm">
                    IA accounted for varying financial literacy levels, device behaviors, and motivation triggers across
                    diverse user segments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Design Samples Section */}
          <div className="bg-white/95 rounded-lg p-1 shadow-sm border border-white/30">
            <div className="bg-white rounded-lg p-6">
              <h2
                className="text-2xl font-bold text-[#5a3e5c] mb-6"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Design Samples
              </h2>

              {/* User Segmentation Research */}
              <div className="mb-8">
                <h3
                  className="text-lg font-bold text-gray-800 mb-3"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  User Segmentation Research
                </h3>
                <img
                  src="https://i.imgur.com/JgLAjYF.jpeg"
                  alt="User segmentation research analyzing Young Mass, Midlife Mass, Gen Z, and Boomer demographics"
                  className="w-full rounded-lg border border-gray-200 mb-3"
                />
                <p className="text-gray-600 text-sm leading-relaxed">
                  Analyzed multiple user segments (Young Mass, Midlife Mass, Gen Z, Boomers) to identify financial goals, behaviors, and navigation pain points across different demographics
                </p>
              </div>

              {/* Personalized Emergency Fund Experience */}
              <div>
                <h3
                  className="text-lg font-bold text-gray-800 mb-3"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  Personalized Emergency Fund Experience
                </h3>
                <img
                  src="https://i.imgur.com/aqFvTAj.png"
                  alt="Mobile experience providing personalized emergency fund guidance with actionable recommendations"
                  className="w-full rounded-lg border border-gray-200 mb-3"
                />
                <p className="text-gray-600 text-sm leading-relaxed">
                  Shipped mobile experience providing personalized emergency fund guidance. Through competitive analysis, we identified that competitors only offered generic guidance or worksheets - our solution used user data to provide actionable, personalized recommendations.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Reflection Section */}
          <div className="bg-white/95 rounded-lg p-1 shadow-sm border border-white/30">
            <div className="bg-cyan-50 rounded-lg p-6">
              <h2
                className="text-2xl font-bold text-[#7a6a82] mb-4"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Reflection
              </h2>
              <p className="italic text-lg text-gray-700 mb-4">
                "This project strengthened my ability to simplify complex systems and design IA that helps diverse users
                confidently navigate financial tools."
              </p>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-bold text-cyan-700 mb-3" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  What This Showcases About Me
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500">•</span>
                    Expertise in organizing complex information environments
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500">•</span>
                    Working in regulated industries with multiple constraints
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500">•</span>
                    Strong collaboration across product, engineering, and research
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500">•</span>
                    Ability to turn research + competitive insights into structured UX decisions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500">•</span>
                    Breadth across mapping, IA, prototyping, and strategy
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 7. Footer Navigation */}
          <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-lg py-6 px-8 mt-12 shadow-lg max-w-lg mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-md mx-auto w-full">
              <Link
                href="/work/delta"
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
                {"← Delta"}
              </Link>
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
                {"Neighborly →"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
