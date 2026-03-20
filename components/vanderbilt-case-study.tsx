"use client"

// Vanderbilt University Navigation Case Study Component
import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"
import Link from "next/link"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"

export default function VanderbiltCaseStudy() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F3EF] via-[#E0D5C0] to-[#F5F3EF]">
      <Navigation />

      <div className="p-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* 1. Hero Section */}
          <div className="bg-[#CFAE70] rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <p className="text-sm text-[#CFAE70] mb-2" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                CASE STUDY
              </p>
              <h1
                className="text-4xl font-bold mb-4 text-[#946E24]"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Vanderbilt Big VU Navigation Project
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                Designing clarity inside one of higher education's most complex digital ecosystems
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-[#F5F3EF] text-[#946E24] px-4 py-2 rounded-full text-sm font-medium">
                  Associate Director of UX/UI
                </span>
                <span className="bg-[#FAF0E6] text-[#6B501A] px-4 py-2 rounded-full text-sm font-medium">6 months</span>
                <span className="bg-[#F5F3EF] text-[#6B501A] px-4 py-2 rounded-full text-sm font-medium">
                  Cross-functional team
                </span>
                <span className="bg-[#F5F3EF] text-[#946E24] px-4 py-2 rounded-full text-sm font-medium">
                  Figma, Analytics
                </span>
              </div>
            </div>
          </div>

          {/* 2. Hero Image */}
          <div className="bg-[#CFAE70] rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-4">
              <img 
                src="https://i.imgur.com/S9rSU8G.png" 
                alt="Solution 1 - Sticky Navigation with Dropdowns" 
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* 3. Context & Overview */}
          <div className="bg-[#CFAE70] rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-3xl font-bold mb-4 text-[#946E24]"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Context & Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vanderbilt's digital ecosystem is massive — hundreds of sites, each designed independently over time.
                Students, parents, faculty, and alumni described it the same way: <em>"It's easy to get lost."</em>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Simple tasks like finding admissions requirements, degree programs, or giving opportunities required too
                many clicks, too many guesses, and too many detours.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The goal of the Big VU Navigation Project was clear: Create a unified, scalable navigation framework
                that brings order, clarity, and consistency to every corner of Vanderbilt's web presence.
              </p>
            </div>
          </div>

          {/* My Role & Scope */}
          <div className="bg-[#CFAE70] rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-gradient-to-br from-[#F5F3EF] to-[#FAF0E6] rounded-lg p-8">
              <h2
                className="text-3xl font-bold mb-6 text-[#946E24]"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                My Role & Scope
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* What I Owned */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                    What I Owned:
                  </h3>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#CFAE70]">✓</span>
                      <span>Navigation strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#CFAE70]">✓</span>
                      <span>Final design decisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#CFAE70]">✓</span>
                      <span>Cross-functional coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#CFAE70]">✓</span>
                      <span>Student incentive coordination</span>
                    </li>
                  </ul>
                </div>

                {/* What I Influenced */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                    What I Influenced:
                  </h3>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#CFAE70]">→</span>
                      <span>Research methodology</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#CFAE70]">→</span>
                      <span>Data analytics approach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#CFAE70]">→</span>
                      <span>Content strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#CFAE70]">→</span>
                      <span>Technical requirements</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Who I Partnered With */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  Who I Partnered With:
                </h3>
                <p className="text-gray-700">
                  UX Researcher, Data & Analytics team, Digital Strategies, Marketing, School representatives
                </p>
              </div>
            </div>
          </div>

          {/* 4. The Real Problem */}
          <div className="bg-[#CFAE70] rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-3xl font-bold mb-6 text-[#946E24]"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                The Real Problem
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                Vanderbilt's website ecosystem suffered from fragmented user experiences that created significant
                friction across all user groups. This wasn't just about "confusing navigation" – it was a systemic
                problem affecting institutional goals and user success.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-5">
                <div>
                  <img 
                    src="/images/design-mode/b5vJpKL.png" 
                    alt="Usability testing showing navigation challenges" 
                    className="w-full rounded-lg"
                  />
                </div>
                
                <div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Inconsistent labels and navigation patterns across 8+ school websites</li>
                    <li>Fragmented content spread across multiple sub-sites with no unified taxonomy</li>
                    <li>No cohesive system serving students, faculty, or alumni simultaneously</li>
                    <li>Lack of clarity around core user journeys</li>
                    <li>Increased cognitive load causing users to "ping-pong" through pages</li>
                  </ul>
                </div>
              
              </div>
              <div className="bg-[#F5F3EF] border-l-4 border-[#CFAE70] p-6 rounded">
      <p className="text-gray-700 italic mb-2">
        "It's hard to get from [Owen] school site back to main site, if there was a way it would be easier – they open up a bunch of new tabs and information gets scattered, you don't know which tab has what"
      </p>
      <p className="text-gray-600 text-sm">— Julia, graduate student</p>
    </div>
            </div>
          </div>

          {/* 5. Constraints */}
          <div className="bg-[#CFAE70] rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-3xl font-bold mb-4 text-[#946E24]"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Constraints
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#F5F3EF] p-4 rounded-lg">
                  <h3
                    className="font-bold text-[#946E24] mb-2"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    Organizational
                  </h3>
                  <p className="text-gray-700 text-sm">Multiple audiences with conflicting needs</p>
                </div>
                <div className="bg-[#FAF0E6] p-4 rounded-lg">
                  <h3
                    className="font-bold text-[#6B501A] mb-2"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    Technical
                  </h3>
                  <p className="text-gray-700 text-sm">Decentralized content ownership across 8 schools</p>
                </div>
                <div className="bg-[#F5F3EF] p-4 rounded-lg">
                  <h3
                    className="font-bold text-[#6B501A] mb-2"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    Political
                  </h3>
                  <p className="text-gray-700 text-sm">Required stakeholder buy-in without formal authority</p>
                </div>
                <div className="bg-[#F5F3EF] p-4 rounded-lg">
                  <h3
                    className="font-bold text-[#946E24] mb-2"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    Timeline
                  </h3>
                  <p className="text-gray-700 text-sm">6-month window for modernization initiative</p>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Research Methodology */}
          <div className="bg-[#CFAE70] rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-3xl font-bold mb-6 text-[#946E24]"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Research Methodology
              </h2>
              <img 
                src="/images/design-mode/tOkpMYU.png" 
                alt="Three-part research methodology" 
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* 7. Key Findings */}
          <div className="bg-[#CFAE70] rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-3xl font-bold mb-6 text-[#946E24]"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Key Findings
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1: SUS Testing */}
                <div className="bg-gradient-to-br from-[#F5F3EF] to-[#FAF0E6] p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-[#CFAE70] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="text-5xl font-bold text-[#946E24] mb-2" style={{ fontFamily: "Courier New, Courier, monospace" }}>79</div>
                  <div className="font-bold text-gray-800 mb-1">Average SUS Score</div>
                  <div className="text-sm text-gray-600">Desktop usability testing</div>
                </div>

                {/* Card 2: User Research */}
                <div className="bg-gradient-to-br from-[#FAF0E6] to-[#F5F3EF] p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-[#CFAE70] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-5xl font-bold text-[#6B501A] mb-2" style={{ fontFamily: "Courier New, Courier, monospace" }}>153</div>
                  <div className="font-bold text-gray-800 mb-1">Survey Respondents</div>
                  <div className="text-sm text-gray-600">Current students, faculty, and staff</div>
                </div>

                {/* Card 3: Competitive Analysis */}
                <div className="bg-gradient-to-br from-[#F5F3EF] to-[#FAF0E6] p-6 rounded-lg text-center">
                  <div className="w-16 h-16 bg-[#946E24] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div className="text-5xl font-bold text-[#6B501A] mb-2" style={{ fontFamily: "Courier New, Courier, monospace" }}>8+</div>
                  <div className="font-bold text-gray-800 mb-1">Universities Analyzed</div>
                  <div className="text-sm text-gray-600">Yale, Stanford, Emory, Tulane + more</div>
                </div>
              </div>
            <div className="bg-[#F5F3EF] border-l-4 border-[#CFAE70] p-6 rounded mt-6 mx-8">
      <p className="text-gray-700 italic mb-2">
        "The search function is HORRIBLE. Truly. So many dead links, irrelevant results, and almost never the real thing I am looking for."
      </p>
      <p className="text-gray-600 text-sm">— Faculty member</p>
    </div>
          </div>
          </div>
          {/* 8. Design Strategy & Process */}
          <div className="bg-[#CFAE70] rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-3xl font-bold mb-6 text-[#946E24]"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Design Strategy & Process
              </h2>
              
              <p className="text-gray-700 mb-5">
                Based on research insights, we explored multiple navigation approaches to address different user needs and technical constraints.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                {/* Solution 2 */}
                <div>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <img 
                      src="/images/design-mode/lTtkA7o.png" 
                      alt="Solution 2 - Persona-based navigation" 
                      className="w-full rounded-lg"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Solution 2: Persona Pathways</h3>
                  <p className="text-sm text-gray-600">Addressed persona needs but required extensive restructuring.</p>
                </div>
                
                {/* Solution 3 */}
                <div>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <img 
                      src="/images/design-mode/QGy0skg.png" 
                      alt="Solution 3 - Search-first navigation" 
                      className="w-full rounded-lg"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Solution 3: Search-First</h3>
                  <p className="text-sm text-gray-600">Leveraged search behavior but required backend technical improvements.</p>
                </div>
              </div>
              
              <div className="mt-6 bg-[#F5F3EF] p-4 rounded-lg border-l-4 border-[#CFAE70]">
                <p className="text-gray-700 italic">
                  Solution 1 (sticky navigation with enhanced dropdowns) was ultimately selected for universal implementation as it improved discoverability and reduced navigation friction without requiring major backend changes.
                </p>
              </div>
            </div>
          </div>

          {/* 10. Key Decisions & Tradeoffs */}
          <div className="bg-[#CFAE70] rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-gradient-to-br from-[#F5F3EF] to-[#FAF0E6] rounded-lg p-8">
              <h2
                className="text-3xl font-bold mb-4 text-[#946E24]"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Key Decisions & Tradeoffs
              </h2>

              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  What We Prioritized:
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Unified navigation framework over school-specific customization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Persona-based pathways over generic mega-menus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Admissions and student pathways over internal faculty tools (phase 1)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Scalable pattern library over one-off custom solutions</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  What We Deprioritized/Killed:
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span>Custom navigation per school (would have broken cohesion)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span>Alumni pathways in phase 1 (too complex, required separate discovery)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span>Advanced filtering and search (added complexity for minimal gain)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span>Animated transitions (performance and accessibility risks)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  Why These Decisions Reduced Risk:
                </h3>
                <ul className="space-y-1 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#CFAE70]">→</span>
                    <span>Standardization enabled faster rollout across schools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CFAE70]">→</span>
                    <span>Persona pathways reduced cognitive load and improved task completion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CFAE70]">→</span>
                    <span>Pattern library approach ensured long-term maintainability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CFAE70]">→</span>
                    <span>Phased rollout allowed validation before full-scale implementation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 11. Outcomes & Impact */}
          <div className="bg-[#CFAE70] rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-3xl font-bold mb-6 text-[#946E24]"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Outcomes & Impact
              </h2>
              
              <img 
                src="/images/design-mode/aD93yHV.png" 
                alt="Outcome - Strategic design exploration to implementation" 
                className="w-full max-w-4xl mx-auto rounded-lg mb-8"
              />
              
              <div className="bg-[#F5F3EF] border-l-4 border-[#CFAE70] p-6 rounded mb-6">
                <p className="text-gray-700 italic mb-2">
                  "Quick guides for the win. If you don't know by now, I really like these quick guides."
                </p>
                <p className="text-gray-600 text-sm">— Shane, undergraduate student</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3
                    className="text-xl font-bold text-[#946E24] mb-3"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    Institutional Outcomes
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-xl text-green-500">✓</span>
                      <span>Research-backed navigation framework presented to leadership</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-xl text-green-500">✓</span>
                      <span>Stakeholder alignment across faculty, students, and leadership</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-xl text-green-500">✓</span>
                      <span>Scalable IA standards adopted for ongoing migrations</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3
                    className="text-xl font-bold text-[#6B501A] mb-3"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    UX Outcomes
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-xl text-green-500">✓</span>
                      <span>Shorter task completion times and clearer pathways</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-xl text-green-500">✓</span>
                      <span>Reduced navigation errors and "ping-pong" behavior</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-xl text-green-500">✓</span>
                      <span>Accessibility improvements meeting WCAG standards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 12. Reflection */}
          <div className="bg-[#CFAE70] rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-3xl font-bold mb-4 text-[#946E24]"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Reflection
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This project established a unified, user-centered navigation model designed to bring order and clarity
                to one of higher education's most complex digital ecosystems.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Looking back, I would have pushed harder for earlier stakeholder workshops with school leadership. While
                we achieved technical and UX alignment, earlier political buy-in could have accelerated adoption
                timelines and reduced resistance during rollout planning.
              </p>

              <div className="bg-[#F5F3EF] p-6 rounded-lg">
                <h3 className="font-bold text-[#6B501A] mb-3" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                  What this demonstrates about me:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#CFAE70]">•</span>
                    <span>I'm a UX leader who can guide research, IA, and cross-team alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CFAE70]">•</span>
                    <span>I thrive in complex ecosystems that require structure, clarity, and scalable thinking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CFAE70]">•</span>
                    <span>I balance user needs with political and technical realities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#CFAE70]">•</span>
                    <span>I build coalitions by listening, translating, and aligning perspectives</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 13. Footer Navigation */}
          <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-lg py-6 px-8 mt-12 shadow-lg max-w-lg mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-md mx-auto w-full">
              <Link
                href="/work"
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
                {"← Back to Work"}
              </Link>
              <Link
                href="/work/sold-by-stevannah"
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
                {"Sold by Stevannah →"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
