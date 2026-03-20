"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"
import { Navigation } from "@/components/navigation"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"

export default function BlairCaseStudy() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <Navigation />

      {/* Main Content */}
      <main className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <div className="max-w-4xl mx-auto px-6 py-12">
          
          {/* 1. Title Card */}
          <div className="mb-12" style={{ background: "#AF73BB", borderRadius: "0.5rem", padding: "4px", boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)" }}>
            <div className="bg-white rounded-lg p-8">
              <p className="text-sm mb-2" style={{ fontFamily: "Courier New, Courier, monospace", color: "#AF73BB", fontWeight: "normal" }}>
                CASE STUDY
              </p>
              <h1
                className="text-4xl font-bold mb-4"
                style={{ fontFamily: "Courier New, Courier, monospace", color: "#7B4F8A" }}
              >
                Blair School of Music Website Redesign
              </h1>
              <p className="text-xl mb-6" style={{ color: "#6B7280" }}>
                Designing an accessible, student-centered digital experience for Vanderbilt's premier music school
              </p>
              <div className="flex flex-wrap gap-3 mb-3">
                <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "#E8D5F0", color: "#7B4F8A" }}>Role: Lead UX Designer</span>
                <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "#F0D9E8", color: "#8B5E9B" }}>Duration: 6 months</span>
                <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "#D4EEF0", color: "#3B8B8A" }}>Team: Cross-functional</span>
                <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: "#F5E6D3", color: "#8B6B4A" }}>Tools: Figma, Analytics</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-full text-sm font-medium text-white" style={{ background: "#AF73BB" }}>UX Research</span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium text-white" style={{ background: "#73BBB8" }}>Information Architecture</span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium text-white" style={{ background: "#E8A0B4" }}>Interaction Design</span>
                <span className="px-3 py-1.5 rounded-full text-sm font-medium" style={{ background: "#C99BD4", color: "#ffffff" }}>Responsive Design</span>
              </div>
            </div>
          </div>

          {/* 2. Hero Image */}
          <section className="mb-16">
            <div className="bg-purple-200 rounded-xl p-1 shadow-lg">
              <img 
                src="https://i.imgur.com/tCuChvZ.png" 
                alt="Xylophone performance at Blair School of Music showcasing the vibrant musical culture"
                className="w-full rounded-lg"
              />
            </div>
          </section>

          {/* 3. Context & Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Courier New, Courier, monospace" }}>
              Context & Overview
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Blair School of Music at Vanderbilt University needed a comprehensive website redesign to better serve prospective students, current students, faculty, and concert attendees. As the lead UX designer and researcher, I collaborated with stakeholders to reimagine the digital experience.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3" style={{ fontFamily: "Courier New, monospace" }}>Project Details</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Role:</strong> Lead UX Designer & Researcher</li>
                  <li><strong>Timeline:</strong> 6 months (2024)</li>
                  <li><strong>Team:</strong> Associate Dean, Communications Strategist, Web Development Team</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3" style={{ fontFamily: "Courier New, monospace" }}>Focus Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Information Architecture</li>
                  <li>User Research</li>
                  <li>Interaction Design</li>
                  <li>Visual Design</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-200 rounded-xl p-1 shadow-lg mb-6">
              <img 
                src="https://i.imgur.com/ePYbVNV.png" 
                alt="Results slide showing key metrics and outcomes from Blair website redesign"
                className="w-full rounded-lg"
              />
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-400">
              <h3 className="font-bold text-gray-900 mb-3" style={{ fontFamily: "Courier New, monospace" }}>The Challenge</h3>
              <p className="text-gray-700 mb-3">Blair's existing website struggled with:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Confusing navigation structure making it difficult to find key information</li>
                <li>Poor event discovery experience, especially for live performances</li>
                <li>Lack of mobile optimization</li>
                <li>Inconsistent visual identity across pages</li>
                <li>Low engagement with event pages despite high-quality programming</li>
              </ul>
            </div>
          </section>

          {/* 4. Pre-Project Contribution */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Courier New, Courier, monospace" }}>
              Pre-Project Contribution: Visual Identity Foundation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Before the website redesign project began, I had already established Blair's color identity framework as part of a broader brand refresh initiative. This foundational work became crucial for ensuring visual consistency across the new website.
            </p>
            <div className="bg-purple-200 rounded-xl p-1 shadow-lg mb-6">
              <img 
                src="https://i.imgur.com/RBxjORh.png" 
                alt="Blair School of Music color identity framework showing primary purple, cream, tan, gold, and dark brown palette"
                className="w-full rounded-lg"
              />
            </div>
            <p className="text-gray-700 leading-relaxed">
              The color system I developed emphasized Blair's signature purple while introducing complementary warm tones that reflected the school's welcoming, creative environment. This palette would guide all design decisions in the website redesign.
            </p>
          </section>

          {/* 5. Research */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Courier New, Courier, monospace" }}>
              Research
            </h2>
            <h3 className="text-xl font-semibold text-purple-600 mb-4" style={{ fontFamily: "Courier New, monospace" }}>
              Understanding User Needs & Business Goals
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              I conducted comprehensive research to understand both user needs and organizational priorities:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3">User Research Methods</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Stakeholder interviews with Associate Dean and communications team</li>
                  <li>User surveys with current students, prospective students, and concert attendees</li>
                  <li>Analytics review of existing site (12-month period, 2024)</li>
                  <li>Competitive analysis of peer music school websites</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-3">Key Findings</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>Navigation confusion:</strong> Users struggled to find admissions info</li>
                  <li><strong>Event discovery gap:</strong> Difficult to find live-streamed performances</li>
                  <li><strong>Mobile pain points:</strong> 40% of traffic was mobile with degraded experience</li>
                  <li><strong>Information hierarchy issues:</strong> Critical content buried deep</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-200 rounded-xl p-1 shadow-lg">
              <img 
                src="https://i.imgur.com/TAc1xMu.png" 
                alt="Strategy meetings with Blair stakeholders showing key discussion points on content prioritization, design direction, and video hero section"
                className="w-full rounded-lg"
              />
            </div>
          </section>

          {/* 6. Data Insights */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Courier New, Courier, monospace" }}>
              Data-Driven Insights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Analytics revealed critical patterns in user behavior that shaped our information architecture decisions. The top 5 pages accounted for over 175,000 views in a 12-month period, with the livestreams page ranking as the second most-visited destination after the homepage.
            </p>
            <div className="bg-purple-200 rounded-xl p-1 shadow-lg mb-6">
              <img 
                src="https://i.imgur.com/EyrLoKT.png" 
                alt="Horizontal bar chart showing top page views: Homepage 70,733 views, Livestreams 48,731 views, Admissions Apply 26,591 views, Admissions Programs 15,875 views, Admissions Visit 13,694 views"
                className="w-full rounded-lg"
              />
            </div>
            <p className="text-gray-700 leading-relaxed">
              This data confirmed that event content—particularly livestreams—was a major driver of engagement, validating our decision to prioritize the events experience in our redesign strategy.
            </p>
          </section>

          {/* 7. Design Strategy */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Courier New, Courier, monospace" }}>
              Design Strategy & Process
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Based on research insights, I developed a four-pronged design strategy to address user needs and business goals:
            </p>

            {/* Strategy 1 */}
            <div className="mb-12">
              <div className="border-l-4 border-purple-400 pl-6 mb-6">
                <h3 className="text-xl font-bold text-purple-700 mb-3" style={{ fontFamily: "Courier New, monospace" }}>
                  1. Navigation Re-Architecture
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I restructured the entire site navigation to create clear, intuitive pathways to critical content. The new information architecture reduced navigation depth and grouped related content logically.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>Flattened navigation hierarchy from 4-5 levels to maximum 3 levels</li>
                  <li>Created dedicated "Events" top-level navigation item</li>
                  <li>Consolidated admissions information under clear parent categories</li>
                  <li>Improved internal linking structure for better content discovery</li>
                </ul>
              </div>
              <div className="bg-purple-200 rounded-xl p-1 shadow-lg">
                <img 
                  src="https://i.imgur.com/JRJSXGp.png" 
                  alt="Redesigned sitemap showing Blair website information architecture with flattened navigation hierarchy"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Strategy 2 */}
            <div className="mb-12">
              <div className="border-l-4 border-pink-400 pl-6 mb-6">
                <h3 className="text-xl font-bold text-pink-700 mb-3" style={{ fontFamily: "Courier New, monospace" }}>
                  2. Events Experience Overhaul
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Recognizing that live-streamed performances were a major draw (48,731 page views), I designed an interactive venue selection and video streaming interface that dramatically improved event discovery and viewing experience.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Users can browse performance venues through an elegant carousel interface, then click to open a modal overlay with embedded video streaming, venue details, and related event information.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src="https://i.imgur.com/GgyctaE.png" 
                    alt="Live streaming interface design showing venue selection carousel and video playback modal overlay"
                    className="w-full h-full object-cover block"
                  />
                </div>
                <div className="rounded-xl shadow-lg overflow-hidden">
                  <video 
                    src="https://i.imgur.com/Sb2kccR.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>
            </div>

            {/* Strategy 3 */}
            <div className="mb-12">
              <div className="border-l-4 border-cyan-400 pl-6 mb-6">
                <h3 className="text-xl font-bold text-cyan-700 mb-3" style={{ fontFamily: "Courier New, monospace" }}>
                  3. Mobile-First, Accessible Design
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With 40% mobile traffic, I prioritized responsive design from the start. Every component was designed mobile-first, then progressively enhanced for larger screens.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>WCAG 2.1 AA compliance throughout</li>
                  <li>Keyboard navigation support for all interactive elements</li>
                  <li>Sufficient color contrast ratios (4.5:1 minimum)</li>
                  <li>Screen reader-friendly semantic HTML</li>
                  <li>Focus indicators on all interactive elements</li>
                </ul>
              </div>
              <div className="rounded-xl shadow-lg overflow-hidden max-w-md mx-auto">
                <img 
                  src="https://i.imgur.com/hTrCwqD.png" 
                  alt="Mobile responsive design mockups showing Blair School of Music website on smartphone screens"
                  className="w-full block"
                />
              </div>
            </div>

            {/* Strategy 4 */}
            <div className="mb-12">
              <div className="border-l-4 border-amber-400 pl-6">
                <h3 className="text-xl font-bold text-amber-700 mb-3" style={{ fontFamily: "Courier New, monospace" }}>
                  4. Visual Identity Integration
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I integrated the color identity framework I had previously developed, ensuring consistent visual language across all pages while allowing flexibility for different content types.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Typography scale based on modular scale (1.25 ratio)</li>
                  <li>Component library with buttons, cards, navigation elements</li>
                  <li>Consistent spacing system (8px base unit)</li>
                  <li>Blair purple (#AF73BB) used strategically for CTAs and emphasis</li>
                  <li>Warm neutrals for background and supporting elements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 8. Hypothesis */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Courier New, Courier, monospace" }}>
              Hypothesis
            </h2>
            <div className="bg-purple-200 rounded-xl p-1 shadow-lg">
              <img 
                src="https://i.imgur.com/vA8rmPd.png 
                alt="Project hypothesis slide outlining expected outcomes of the Blair website redesign"
                className="w-full rounded-lg"
              />
            </div>
          </section>

          {/* 9. Testing & Iteration */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Courier New, Courier, monospace" }}>
              Testing & Iteration
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              I conducted multiple rounds of usability testing throughout the design process to validate decisions and identify areas for improvement.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3" style={{ fontFamily: "Courier New, monospace" }}>Testing Methods</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Moderated usability testing with 8 participants</li>
                  <li>A/B testing of navigation structures</li>
                  <li>Accessibility testing with screen readers</li>
                  <li>Cross-browser and cross-device testing</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3" style={{ fontFamily: "Courier New, monospace" }}>Key Iterations</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>Navigation labels:</strong> "Events" tested better than "Performances"</li>
                  <li><strong>Venue carousel:</strong> Added hover states and clearer affordances</li>
                  <li><strong>Mobile menu:</strong> Redesigned hamburger menu structure</li>
                  <li><strong>Video modal:</strong> Added prominent close button</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
              <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "Courier New, monospace" }}>Validation</h3>
              <p className="text-gray-700">
                Testing confirmed that users could successfully complete key tasks <strong>40% faster</strong> with the new design, and navigation confidence scores increased significantly.
              </p>
            </div>
          </section>

          {/* 10. Solution */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Courier New, Courier, monospace" }}>
              Solution
            </h2>
            <div className="bg-purple-200 rounded-xl p-1 shadow-lg mb-6">
              <video autoPlay loop muted controls playsInline className="w-full rounded-lg">
                <source src="https://i.imgur.com/oUHyuJZ.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The final design delivers a cohesive, user-centered experience that addresses all identified pain points while showcasing Blair's vibrant musical community.
            </p>
          </section>

          {/* 11. Results & Impact */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Courier New, Courier, monospace" }}>
              Results & Impact
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The redesigned website launched in late 2024 and immediately showed positive results:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-bold text-purple-700 mb-3" style={{ fontFamily: "Courier New, monospace" }}>Quantitative Results</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">40%</span>
                    <span>reduction in time to complete key tasks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">48,731</span>
                    <span>livestream page views validated event-focused strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">40%</span>
                    <span>of users benefited from mobile optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">WCAG 2.1</span>
                    <span>AA accessibility compliance achieved</span>
                  </li>
                </ul>
              </div>
              <div className="bg-pink-50 rounded-lg p-6">
                <h3 className="font-bold text-pink-700 mb-3" style={{ fontFamily: "Courier New, monospace" }}>Qualitative Impact</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Stakeholders praised the clean, professional aesthetic</li>
                  <li>Users reported increased confidence in finding information</li>
                  <li>Event discovery improved with new streaming interface</li>
                  <li>Faculty appreciated easier content management</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 12. Reflection */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Courier New, Courier, monospace" }}>
              Reflection
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              This project reinforced the importance of data-driven decision making combined with qualitative user research. The analytics showing livestream page views as the second-most visited destination validated our focus on the events experience, but it was the usability testing that revealed exactly how to design that interface effectively.
            </p>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-6">
              <h3 className="font-bold text-gray-900 mb-4" style={{ fontFamily: "Courier New, monospace" }}>Key Learnings</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold">1.</span>
                  <span><strong>Start with data, validate with users:</strong> Analytics pointed to opportunities, but user research revealed the "why" behind the numbers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold">2.</span>
                  <span><strong>Design systems save time:</strong> Having the color identity framework established beforehand streamlined visual design decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold">3.</span>
                  <span><strong>Accessibility is not optional:</strong> Building accessibility in from the start was easier and more effective than retrofitting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 font-bold">4.</span>
                  <span><strong>Iteration is essential:</strong> The venue carousel went through 4 major iterations before we got the interaction right</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-400">
              <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "Courier New, monospace" }}>What I Would Do Differently</h3>
              <p className="text-gray-700">
                If I could start over, I would have conducted more extensive card sorting sessions earlier in the process to validate the information architecture before moving to high-fidelity design. While our final structure tested well, earlier validation could have saved iteration time.
              </p>
            </div>
          </section>

          {/* Navigation Footer */}
          <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-lg py-6 px-8 mt-12 shadow-lg max-w-lg mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-md mx-auto w-full">
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
                {"← Sold by Stevannah"}
              </Link>
              <Link
                href="/work/csv-stack-ai"
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
                {"CSV Stack →"}
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
