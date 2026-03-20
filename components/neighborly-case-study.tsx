"use client"

import { useEffect } from "react"
import Link from "next/link"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"
import { Navigation } from "@/components/navigation"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"

export default function NeighborlyCaseStudy() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen" style={{ background: "var(--myspace-gradient-bg, linear-gradient(135deg, #E8E2F0 0%, #E2D4E8 50%, #C8D4E8 100%))" }}>
      <Navigation />

      {/* Content */}
      <div className="p-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Hero Card */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <h1
                className="text-4xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Neighborly
              </h1>
              <p className="text-xl text-gray-600 mb-4">Brand Identity & Community Platform Design</p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  Role: UX Designer
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Duration: Jan 2021 - Jan 2022
                </span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium">
                  Team: Remote collaboration
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 border border-orange-300 text-orange-500 rounded-full text-sm">
                  Brand Identity
                </span>
                <span className="px-3 py-1 border border-blue-300 text-blue-500 rounded-full text-sm">Community</span>
                <span className="px-3 py-1 border border-purple-300 text-purple-500 rounded-full text-sm">
                  Design Systems
                </span>
              </div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold mb-4"
style={{ fontFamily: "Courier New, Courier, monospace", color: "#5a3e5c" }}
              >
                Context
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Neighborly operated 18 home service brands (as of 2021) with inconsistent digital experiences and non-WCAG compliant colors across their entire portfolio. As the second in-house UX designer, I helped establish their first unified design system from the ground up.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This work started with a critical accessibility issue: Neighborly{"'"}s primary brand color failed WCAG 2.1 compliance standards across all digital properties.
              </p>
            </div>
          </div>

          {/* What I Did Section */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <h2
  className="text-2xl font-bold mb-4"
  style={{ fontFamily: "Courier New, Courier, monospace", color: "#5a3e5c" }}
>
  My Contributions
</h2>

              {/* Design System & Accessibility */}
              <div className="mb-6">
                <h3
                  className="text-lg font-bold text-gray-800 mb-3"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  Design System & Accessibility
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm leading-relaxed">
                  <li>Led color accessibility overhaul across all 18 brands, redesigning Neighborly{"'"}s primary blue to meet WCAG 2.1 AA standards</li>
                  <li>Created reusable component library (buttons, forms, typography) in Axure RP 10 used across multiple brand properties</li>
                  <li>Drove 40% of UI design decisions for components, colors, and typography standards</li>
                </ul>
              </div>

              {/* Brand-Specific Design Work */}
              <div className="mb-6">
                <h3
                  className="text-lg font-bold text-gray-800 mb-3"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  Brand-Specific Design Work
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm leading-relaxed">
                  <li>Designed UI for Five Star Painting, The Grounds Guys, Molly Maid, and neighborlybrands.com</li>
                  <li>Built 25+ screens including homepage, About Us, Our Brands, Careers, and International pages</li>
                  <li>Ensured visual consistency while maintaining individual brand identities</li>
                </ul>
              </div>

              {/* Cross-Functional Collaboration */}
              <div>
                <h3
                  className="text-lg font-bold text-gray-800 mb-3"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  Cross-Functional Collaboration
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm leading-relaxed">
                  <li>Worked daily with brand managers, product managers, developers, SEO specialists, and UX writers</li>
                  <li>Partnered with Usability Sciences research firm to establish user research strategy</li>
                  <li>Presented design recommendations to executive leadership</li>
                  <li>Organized brand architecture based on user data to optimize consumer navigation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Design Samples */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Courier New, Courier, monospace", color: "#5a3e5c" }}
              >
                Design Samples
              </h2>

              {/* Accessibility Color Redesign */}
              <div className="mb-6">
                <h3
                  className="text-lg font-bold text-gray-800 mb-3"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  Accessibility Color Redesign
                </h3>
                <img
                  src="https://i.imgur.com/q3KAwci.png"
                  alt="Neighborly primary blue color redesign from #407EC9 to #4377BD achieving WCAG 2.1 AA compliance"
                  className="w-full rounded-lg border border-gray-200 mb-3"
                />
                <p className="text-gray-600 text-sm italic">
                  {"Redesigned Neighborly's primary blue (#407EC9 → #4377BD) to meet WCAG 2.1 AA standards, achieving 4.55:1 contrast ratio and ensuring accessibility across all brand applications"}
                </p>
              </div>

              {/* Design System Implementation */}
              <div>
                <h3
                  className="text-lg font-bold text-gray-800 mb-3"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  Design System Implementation
                </h3>
                <img
                  src="https://i.imgur.com/MkRNW20.png"
                  alt="Scalable UI components built in Axure RP 10 deployed across multiple Neighborly brand properties"
                  className="w-full rounded-lg shadow-lg mb-3"
                />
                <p className="text-gray-600 text-sm italic">
                  {"Scalable UI components built in Axure RP 10, deployed across 5+ brand properties\u2014from individual modules to complete homepage experiences"}
                </p>
              </div>
            </div>
          </div>

          {/* Skills Demonstrated */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <h2
  className="text-2xl font-bold mb-4"
  style={{ fontFamily: "Courier New, Courier, monospace", color: "#5a3e5c" }}
>
  Skills Demonstrated
</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 rounded-lg" style={{ background: "rgba(232,213,240,0.2)" }}>
  <p className="font-bold" style={{ color: "#5a3e5c" }}>Design Systems</p>
  <p className="text-gray-600 text-sm">Component libraries</p>
</div>
<div className="text-center p-4 rounded-lg" style={{ background: "rgba(232,213,240,0.2)" }}>
  <p className="font-bold" style={{ color: "#5a3e5c" }}>Accessibility</p>
  <p className="text-gray-600 text-sm">WCAG 2.1 compliance</p>
</div>
<div className="text-center p-4 rounded-lg" style={{ background: "rgba(232,213,240,0.2)" }}>
  <p className="font-bold" style={{ color: "#5a3e5c" }}>Multi-Brand Components</p>
  <p className="text-gray-600 text-sm">Scalable patterns across 18 brands</p>
</div>
<div className="text-center p-4 rounded-lg" style={{ background: "rgba(232,213,240,0.2)" }}>
  <p className="font-bold" style={{ color: "#5a3e5c" }}>Research Strategy</p>
  <p className="text-gray-600 text-sm">Usability Sciences partnership</p>
</div>
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-lg py-6 px-8 mt-12 shadow-lg max-w-lg mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-md mx-auto w-full">
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
                {"← US Bank"}
              </Link>
              <Link
                href="/work/coca-cola"
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
                {"Coca-Cola →"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
