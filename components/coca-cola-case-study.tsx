"use client"

import { useEffect } from "react"
import Link from "next/link"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"
import { Navigation } from "@/components/navigation"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"

export default function CocaColaCaseStudy() {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F5FF] via-[#F0EBF8] to-[#E8E0F0]">
      <Navigation />

      {/* Content with padding */}
      <div className="p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* 1. HERO SECTION */}
          <div className="bg-white/95 rounded-lg p-1 shadow-sm border border-white/30">
            <div className="bg-white rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-gray-500" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  ARCHIVED PROJECT
                </span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">2020</span>
              </div>

              <h1 className="text-3xl font-bold text-[#5a3e5c] mb-2" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                Coca-Cola
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Accessibility-Focused POS Redesign
              </p>

              <div className="flex gap-3 flex-wrap mb-4">
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm">
                  UX Designer + Accessibility Advocate
                </span>
                <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm">2020</span>
                <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm">ADA Compliance</span>
              </div>

              <div className="flex gap-2 flex-wrap">
                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs">Accessibility</span>
                <span className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-xs">ADA Compliance</span>
                <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs">Kiosk Design</span>
                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs">WCAG</span>
              </div>
            </div>
          </div>

          {/* 2. CONTEXT SECTION */}
          <div className="bg-white/95 rounded-lg p-1 shadow-sm border border-white/30">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#5a3e5c] mb-4" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                Context
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Coca-Cola Freestyle needed to ensure their Point of Sale system was accessible for users with visual impairments, including rare blindness conditions. As Digital Production Designer, I led accessibility-focused redesign efforts, conducting research that included working directly with users who had visual impairments to inform our design solutions.
              </p>
              <img
                src="https://i.imgur.com/Pgbs6JU.png"
                alt="Coca-Cola Freestyle machines showing different size variations of the beverage dispensing system"
                className="w-full rounded-lg shadow-lg mt-4 mb-2"
              />
              <p className="text-gray-600 text-sm italic text-center">
                The Coca-Cola Freestyle family of beverage dispensing machines
              </p>
            </div>
          </div>

          {/* 3. MY CONTRIBUTIONS SECTION */}
          <div className="bg-white/95 rounded-lg p-1 shadow-sm border border-white/30">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#7a6a82] mb-6" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                My Contributions
              </h2>

              {/* Accessibility-Focused Design */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  Accessibility-Focused Design
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm leading-relaxed">
                  <li>Led UX redesign of Point of Sale system to meet accessibility standards for users with visual impairments</li>
                  <li>Conducted user research including direct collaboration with visually impaired users to inform design decisions</li>
                  <li>Created high-contrast interfaces, voice-enabled features, and inclusive design patterns</li>
                  <li>Developed user personas based on real users to guide design strategy</li>
                  <li>Explored audio features for severe visual impairments but hardware limitations required alternative approach</li>
                  <li>Optimized for WCAG 2.0 standards: high-contrast dark UI with large white text and generous touch targets</li>
                </ul>
              </div>

              {/* Design & Prototyping */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  {"Design & Prototyping"}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm leading-relaxed">
                  <li>Created 500+ clickable prototypes to improve user experience for 800K Coca-Cola Freestyle consumers</li>
                  <li>Delivered workflows, wireframes, digital assets, and proof-of-concepts</li>
                  <li>Developed design specifications and guidelines for cross-functional teams</li>
                </ul>
              </div>

              {/* Cross-Functional Collaboration */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  Cross-Functional Collaboration
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm leading-relaxed">
                  <li>Worked daily with Product Managers, Engineers, Researchers, and UX Leadership within Freestyle Software Department</li>
                  <li>Utilized JIRA and InVision to optimize project management and design processes</li>
                  <li>Used Sketch and Abstract for UI design work and version control</li>
                  <li>Drove meaningful innovation through collaborative design thinking</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. DESIGN SAMPLES SECTION */}
          <div className="bg-white/95 rounded-lg p-1 shadow-sm border border-white/30">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#5a3e5c] mb-6" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                Design Samples
              </h2>

              {/* Understanding Visual Impairments */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  Understanding Visual Impairments
                </h3>
                <img
                  src="https://i.imgur.com/f2MSIxR.png"
                  alt="Understanding how different visual impairments affect the user experience for the POS system"
                  className="w-full rounded-lg shadow-lg mb-3"
                />
                <p className="text-gray-600 text-sm italic">
                  Understanding how different visual impairments affect the user experience was critical to designing an accessible Point of Sale system
                </p>
              </div>

              {/* Proposed Accessibility Controls */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  Proposed Accessibility Controls
                </h3>
                <img
                  src="https://i.imgur.com/jSrssJK.png"
                  alt="Customizable text size and color adjustment controls for personalized accessibility options"
                  className="w-full rounded-lg shadow-lg mb-3"
                />
                <p className="text-gray-600 text-sm italic">
                  Designed customizable text size and color adjustment controls to give users personalized accessibility options. While not implemented due to hardware constraints, this solution demonstrated the potential for user-controlled accessibility features.
                </p>
              </div>

              {/* Shipped Accessible Interface */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  Shipped Accessible Interface
                </h3>
                <img
                  src="https://i.imgur.com/63mRS4G.png"
                  alt="Dark mode home screen of Coca-Cola Freestyle showing all beverage brands with high-contrast design and ADA accessibility button"
                  className="w-full rounded-lg shadow-lg mb-3"
                />
                <p className="text-gray-600 text-sm italic">
                  Final dark mode interface featuring high-contrast design, large touch targets, and dedicated ADA accessibility controls - shipped to 800K+ users across Coca-Cola Freestyle machines
                </p>
              </div>
            </div>
          </div>

          {/* 5. SKILLS DEMONSTRATED SECTION */}
          <div className="bg-white/95 rounded-lg p-1 shadow-sm border border-white/30">
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Courier New, Courier, monospace", color: "#5a3e5c" }}>
                Skills Demonstrated
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="text-center p-4 rounded-lg" style={{ background: "rgba(232,213,240,0.2)" }}>
  <p className="font-bold" style={{ color: "#5a3e5c" }}>Inclusive Design</p>
  <p className="text-gray-600 text-sm">WCAG 2.0 compliance</p>
</div>
<div className="text-center p-4 rounded-lg" style={{ background: "rgba(232,213,240,0.2)" }}>
  <p className="font-bold" style={{ color: "#5a3e5c" }}>User Research</p>
  <p className="text-gray-600 text-sm">Accessibility testing</p>
</div>
<div className="text-center p-4 rounded-lg" style={{ background: "rgba(232,213,240,0.2)" }}>
  <p className="font-bold" style={{ color: "#5a3e5c" }}>Rapid Prototyping</p>
  <p className="text-gray-600 text-sm">500+ prototypes</p>
</div>
<div className="text-center p-4 rounded-lg" style={{ background: "rgba(232,213,240,0.2)" }}>
  <p className="font-bold" style={{ color: "#5a3e5c" }}>Enterprise UX</p>
  <p className="text-gray-600 text-sm">800K users</p>
</div>
              </div>
            </div>
          </div>

          {/* 9. FOOTER NAVIGATION */}
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
