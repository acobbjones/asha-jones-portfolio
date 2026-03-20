"use client"

import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"
import { Navigation } from "@/components/navigation"

export default function StevannahCaseStudy() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <Navigation />

      <div className="p-8">
        className="text-3xl font-bold mb-4 text-gray-900"
          <div className="bg-rose-200 rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
<p className="text-sm text-pink-500 mb-2" style={{ fontFamily: "Courier New, Courier, monospace" }}>
  CASE STUDY
</p>
<h1
  className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
  style={{ fontFamily: "Courier New, Courier, monospace" }}
>
                Sold By Stevannah
              </h1>
              <p className="text-xl text-gray-900 mb-6">
                A Luxury Real Estate Website Designed for Trust, Clarity & Modern Storytelling
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: "#F8D4D4", color: "#926351" }}>
                  Role: UX Designer, Framer Builder, Brand Consultant
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: "#E4BEBA", color: "#926351" }}>
                  Duration: 8 weeks
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ background: "#CAA29A", color: "#ffffff" }}>
                  Team: Founder + Designer
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  Tools: Framer, Figma, Relume, Make.com, Google Sheets API
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-sm text-white font-medium" style={{ background: "#B08376" }}>UX Design</span>
                <span className="px-3 py-1 rounded-full text-sm text-white font-medium" style={{ background: "#926351" }}>Framer Builder</span>
                <span className="px-3 py-1 rounded-full text-sm text-white font-medium" style={{ background: "#CAA29A" }}>Brand Consultant</span>
              </div>
            </div>
          </div>

          <div className="bg-rose-200 rounded-lg p-1 shadow-xl mb-8 max-w-2xl mx-auto">
  <div className="bg-white rounded-lg p-2 aspect-square flex items-center justify-center">
    <img
      src="https://i.imgur.com/LBL1ZFm.png"
      alt="Sold by Stevannah Logo"
      className="w-3/4 h-auto rounded-lg"
    />
  </div>
</div>

          <div className="bg-rose-200 rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
  className="text-3xl font-bold mb-6 text-gray-900"
  style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Context & Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sold By Stevannah is a luxury real estate website designed to establish trust, simplify the relocation
                process, and create a memorable digital brand for a Charlotte-based realtor targeting high-net-worth
                clients.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When Stevannah approached me, she had no professional website to showcase her brand identity, luxury
                positioning, or relocation expertise — making it difficult to stand out in a competitive market.
              </p>
              <p className="text-gray-700 font-medium mb-3">Her goals:</p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li className="flex items-start gap-2">
                  <span className="ext-[#B08376]">•</span>
                  <span>A polished site to attract high-end clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="ext-[#B08376]">•</span>
                  <span>A way to simplify relocations for newcomers to Charlotte</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="ext-[#B08376]">•</span>
                  <span>A strong brand identity to compete in the saturated real estate market</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-rose-200 rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
  className="text-3xl font-bold mb-6 text-gray-900"
  style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                The Real Problem
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Stevannah Middleton, a luxury realtor specializing in Charlotte relocations, needed a digital presence
                that matched her premium service offering. Her existing online presence lacked the sophistication and
                strategic UX needed to convert high-intent buyers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The challenge wasn't just creating a "nice looking" website — it was establishing credibility, building
                trust with luxury clients, and creating a seamless relocation experience that differentiated her from
                competitors using generic real estate templates.
              </p>
            </div>
          </div>

          <div className="bg-rose-200 rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
  className="text-3xl font-bold mb-6 text-gray-900"
  style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Constraints
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#FCE8F0] rounded-lg p-4">
                  <p className="font-semibold text-[#926351] mb-1">Timeline</p>
                  <p className="text-gray-600 text-sm">
                    Quick timeline required efficient design decisions without sacrificing quality
                  </p>
                </div>
                <div className="bg-[#F5EAE8] rounded-lg p-4">
                  <p className="font-semibold text-pink-800 mb-1">Budget</p>
                  <p className="text-gray-600 text-sm">
                    Modest budget meant strategic prioritization of features and functionality
                  </p>
                </div>
                <div className="bg-[#EDE8E6] rounded-lg p-4">
                  <p className="font-semibold text-[#926351] mb-1">Technical</p>
                  <p className="text-gray-600 text-sm">
                    Built in Framer with optimization challenges (nested links, responsiveness warnings)
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-800 mb-1">Brand Balance</p>
                  <p className="text-gray-600 text-sm">
                    Balancing Stevannah's preference for dark mode with UX accessibility best practices
                  </p>
                </div>
                <div className="bg-[#FCE8F0] rounded-lg p-4 md:col-span-2">
                  <p className="font-semibold text-[#926351] mb-1">Scope</p>
                  <p className="text-gray-600 text-sm">
                    Solo designer responsible for brand strategy, UX design, and frontend development
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-rose-200 rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
  className="text-3xl font-bold mb-6 text-gray-900"
  style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                My Role & Process
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                I partnered with Stevannah as UX Designer, Framer Builder, and Brand Consultant, leading the project
                end-to-end.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#FCE8F0] rounded-lg p-4">
                  <h3
                    className="font-bold text-[#926351] mb-3"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    What I Owned
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="ext-[#B08376]">✓</span>
                      <span>End-to-end UX and visual design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="ext-[#B08376]">✓</span>
                      <span>Brand identity development and direction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="ext-[#B08376]">✓</span>
                      <span>Frontend development in Framer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="ext-[#B08376]">✓</span>
                      <span>AI contact form integration with Google Sheets</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#F5EAE8] rounded-lg p-4">
                  <h3
                    className="font-bold text-pink-800 mb-3"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    What I Influenced
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500">→</span>
                      <span>Business strategy and positioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500">→</span>
                      <span>Content architecture and relocation workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500">→</span>
                      <span>Technical implementation decisions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="font-bold text-gray-900 mb-4" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                Process
              </h3>

              <div className="mb-6 border-l-4 pl-4" style={{ borderColor: "#CAA29A" }}>
                <h4 className="font-bold mb-2" style={{ color: "#926351" }}>1. Discovery & Brand Definition</h4>
                <p className="text-gray-700 text-sm mb-3">
                  We started by unpacking what Sold by Stevannah is as a brand: Warm. Confident. Luxury-forward. A
                  realtor with real personality — not a cookie-cutter template.
                </p>
                <p className="text-gray-600 text-sm mb-2">My discovery process included:</p>
                <ul className="text-gray-600 text-sm space-y-1 ml-4">
                  <li>• Competitor and market analysis</li>
                  <li>• Visual direction exploration</li>
                  <li>• Clarifying her tone, audience, and relocation workflows</li>
                </ul>
              </div>
              {/* IMAGE 2: Brand Kit Typography */}
<div className="my-8">
  <img
    src="https://i.imgur.com/w1l1ByH.png"
    alt="Typography System - Black Mango and Playfair Display"
    className="w-3/4 mx-auto h-auto rounded-lg shadow-md"
  />
</div>
              <div className="mb-6 border-l-4 pl-4" style={{ borderColor: "#E4BEBA" }}>
                <h4 className="font-bold mb-2" style={{ color: "#926351" }}>2. UX Strategy & Site Architecture</h4>
                <p className="text-gray-700 text-sm mb-3">I created a simple, clean structure with:</p>
                <ul className="text-gray-600 text-sm space-y-1 ml-4 mb-3">
                  <li>• A Resources dropdown for relocation support</li>
                  <li>• A Compass Profile CTA for instant trust</li>
                  <li>• Clear pathways across Services → About → Contact</li>
                </ul>
                <p className="text-gray-700 text-sm italic">
                  The UX goal: Reduce friction. Build trust. Make decisions easy.
                </p>
              </div>
{/* IMAGE 4: Sitemap */}
<div className="my-8">
  <img
    src="https://i.imgur.com/WPq5Zi4.png"
    alt="Information Architecture and Sitemap"
    className="w-2/3 mx-auto h-auto rounded-lg shadow-md"
  />
</div>
{/* IMAGE 5: Wireframes - Side by Side Gallery */}
<div className="my-8">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="flex flex-col items-center">
      <img
        src="https://i.imgur.com/4nxjOdC.png"
        alt="Home Page Wireframe"
        className="w-full h-auto rounded-lg shadow-md"
      />
      <p className="text-sm text-gray-600 mt-2 font-medium">Home</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src="https://i.imgur.com/iAAr8D2.png"
        alt="About Page Wireframe"
        className="w-full h-auto rounded-lg shadow-md"
      />
      <p className="text-sm text-gray-600 mt-2 font-medium">About Us</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src="https://i.imgur.com/CiEdhmP.png"
        alt="Services Page Wireframe"
        className="w-full h-auto rounded-lg shadow-md"
      />
      <p className="text-sm text-gray-600 mt-2 font-medium">Services</p>
    </div>
    <div className="flex flex-col items-center">
      <img
        src="https://i.imgur.com/tNmR1dm.png"
        alt="Contact Page Wireframe"
        className="w-full h-auto rounded-lg shadow-md"
      />
      <p className="text-sm text-gray-600 mt-2 font-medium">Contact Us</p>
    </div>
  </div>
</div>
              <div className="border-l-4 pl-4" style={{ borderColor: "#B08376" }}>
                <h4 className="font-bold mb-2" style={{ color: "#926351" }}>3. Visual Design & Framer Development</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Stevannah wanted dark mode, rose gold, and subtle elegance. I translated that into a cohesive luxury
                  palette:
                </p>
                <div className="flex gap-3 mb-3">
                  <span className="bg-gray-800 text-white px-3 py-1 rounded text-xs">Deep charcoal</span>
                  <span className="bg-pink-300 text-gray-800 px-3 py-1 rounded text-xs">Rose gold accents</span>
                  <span className="bg-amber-100 text-gray-800 px-3 py-1 rounded text-xs">Soft cream & pink</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{/* IMAGE 3: UI Elements */}
<div className="my-8">
  <img
    src="https://i.imgur.com/MPBoUst.png"
    alt="UI Design System - Buttons and Input Components"
    className="w-2/3 mx-auto h-auto rounded-lg shadow-md"
  />
</div>I crafted:</p>
                <ul className="text-gray-600 text-sm space-y-1 ml-4">
                  <li>• Custom iconography</li>
                  <li>• Scroll-triggered storytelling moments</li>
                  <li>• A looping video hero on the About page</li>
                  <li>• Clean micro-interactions for an elevated feel</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-rose-200 rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
  className="text-3xl font-bold mb-6 text-gray-900"
  style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Design Highlights
              </h2>

              <div className="space-y-6">
                <div className="rounded-lg p-5 border-l-4" style={{ background: "linear-gradient(to right, #FCE8F0, white)", borderColor: "#CAA29A" }}>
                  <h3
                    className="font-bold mb-2"
                    style={{ fontFamily: "Courier New, Courier, monospace", color: "#926351" }}
                  >
                    Navigation with Intention
                  </h3>
                  <p className="text-gray-700 text-sm">
                    A minimal structure featuring a Resources dropdown and Compass CTA button to make services clear and
                    actionable.
                  </p>
                </div>
{/* IMAGE 6: Home Page Responsive - Navigation Focus */}
<div className="my-8">
  <div className="overflow-hidden rounded-lg shadow-lg" style={{ maxHeight: '700px' }}>
    <img
      src="https://i.imgur.com/hG7Cfid.png"
      alt="Home Page Navigation - Responsive Design Across Desktop, Tablet, and Mobile"
      className="w-full h-auto"
      style={{ objectFit: 'cover', objectPosition: 'top' }}
    />
  </div>
</div>
                <div className="rounded-lg p-5 border-l-4" style={{ background: "linear-gradient(to right, #F8D4D4, white)", borderColor: "#E4BEBA" }}>
                  <h3
                    className="font-bold mb-2"
                    style={{ fontFamily: "Courier New, Courier, monospace", color: "#926351" }}
                  >
                    Responsive Hero Storytelling
                  </h3>
                  <p className="text-gray-700 text-sm">
                    The About page features a looping video with overlaid text and CTA. Designing this to adapt across
                    tablet and mobile was a technical challenge I solved through careful spacing, scaling, and overlay
                    adjustments.
                  </p>
                </div>
                {/* IMAGE 7: About Page Responsive */}
<div className="my-8">
  <img
    src="https://i.imgur.com/4DIVaNq.png"
    alt="About Page - Responsive Design Across Desktop, Tablet, and Mobile"
    className="w-full h-auto rounded-lg shadow-lg"
  />
</div>
                
                <div className="rounded-lg p-5 border-l-4" style={{ background: "linear-gradient(to right, #EDE8E6, white)", borderColor: "#B08376" }}>
                  <h3
                    className="font-bold mb-2"
                    style={{ fontFamily: "Courier New, Courier, monospace", color: "#926351" }}
                  >
                    AI-Powered Contact Form
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Instead of a static form, I integrated an AI agent connected to Google Sheets. This allowed:
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1 ml-4">
                    <li>• Automated lead capture + organization for Stevannah's database</li>
                    <li>• Instant, personalized confirmation messages to build client trust</li>
                    <li>• A scalable backend for future CRM integrations</li>
                  </ul>
                </div>
                {/* IMAGE 8: Contact Page Responsive */}
<div className="my-8">
  <div className="overflow-hidden rounded-lg shadow-lg" style={{ maxHeight: '700px' }}>
    <img
      src="https://i.imgur.com/5ZJsfr1.png"
      alt="Contact Page - Responsive Design with AI-Powered Form"
      className="w-full h-auto"
      style={{ objectFit: 'cover', objectPosition: 'top' }}
    />
  </div>
</div>

                <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-5 border-l-4 border-gray-500">
                  <h3
                    className="font-bold text-gray-800 mb-2"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    Signature UX Touches
                  </h3>
                  <ul className="text-gray-600 text-sm space-y-1 ml-4">
                    <li>• Custom icons paired with benefits in "Why Choose Stevannah?"</li>
                    <li>• Scroll-driven animations inspired by Breve's storytelling layouts</li>
                    <li>• Micro-interactions for subtle elegance without distraction</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-rose-200 rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
  className="text-3xl font-bold mb-6 text-gray-900"
  style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Key Decisions & Tradeoffs
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#F0EAE8] rounded-lg p-5">
                  <h3
                    className="font-bold text-[#926351] mb-3 text-sm"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    What We Prioritized
                  </h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#B08376]">✓</span>
                      <span>Dark mode luxury aesthetic over traditional bright real estate sites</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B08376]">✓</span>
                      <span>AI-powered lead capture over basic contact forms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B08376]">✓</span>
                      <span>Relocation resources architecture over property listings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B08376]">✓</span>
                      <span>Mobile-first responsive design over desktop-only optimization</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#FCE8F0] rounded-lg p-5">
                  <h3
                    className="font-bold text-red-800 mb-3 text-sm"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    What We Simplified/Killed
                  </h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✗</span>
                      <span>Complex property search functionality (not the core value prop)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✗</span>
                      <span>Multi-page navigation (consolidated into strategic dropdown)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✗</span>
                      <span>Excessive animations (kept only what enhanced storytelling)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#EDE8E6] rounded-lg p-5">
                  <h3
                    className="font-bold text-[#926351] mb-3 text-sm"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    Why These Reduced Risk
                  </h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#B08376]">→</span>
                      <span>Dark mode differentiated her from competitors while maintaining accessibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B08376]">→</span>
                      <span>
                        AI contact form provided competitive advantage — not just collecting leads, but intelligently
                        managing them
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B08376]">→</span>
                      <span>Focus on relocation expertise positioned her as a specialist, not generalist</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-rose-200 rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
  className="text-3xl font-bold mb-6 text-gray-900"
  style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Outcomes & Impact
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#FCE8F0] rounded-lg p-5">
                  <h3
                    className="font-bold text-[#926351] mb-3"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    Business Outcomes
                  </h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#B08376]">✓</span>
                      <span>Delivered a luxury, mobile-first website that elevates Stevannah's brand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B08376]">✓</span>
                      <span>
                        AI-enhanced contact form gave her a competitive edge — not just collecting leads, but
                        intelligently managing them
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B08376]">✓</span>
                      <span>Created a visually cohesive identity rooted in elegance + clarity</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#EDE8E6] rounded-lg p-5">
                  <h3
                    className="font-bold text-[#926351] mb-3"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    UX Outcomes
                  </h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[#B08376]">✓</span>
                      <span>
                        Simplified user flows for relocation clients through intuitive navigation and resource placement
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B08376]">✓</span>
                      <span>Responsive design works seamlessly across desktop, tablet, and mobile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#B08376]">✓</span>
                      <span>
                        Resources + Compass CTA flow became a proud moment — proof that UX clarity and visual elegance
                        can go hand in hand
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg p-6 border-l-4" style={{ background: "linear-gradient(to right, #FCE8F0, #F5EAE8)", borderColor: "#CAA29A" }}>
                <p className="italic mb-2" style={{ color: "#1F1F1F" }}>
                  {"\"This website exceeded every expectation I had. The design, the animations, the feel of it — everything was elevated. You really outdid yourself with this one.\""}
                </p>
                <p className="text-sm" style={{ color: "#B08376" }}>— Stevannah Middleton, Owner, Sold by Stevannah</p>
              </div>
            </div>
          </div>

          <div className="bg-rose-200 rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
  className="text-3xl font-bold mb-6 text-gray-900"
  style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Reflection
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This project transformed a realtor's vision into a luxury, AI-enhanced digital presence that balances
                elegance with usability.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300 italic">
                Looking back, I would have conducted more formal user testing with prospective buyers to validate the
                relocation workflow assumptions. While the client feedback was positive and the design achieved its
                goals, quantitative data on user behavior would have strengthened the case for future iterations and
                feature prioritization.
              </p>

              <h3 className="font-bold text-gray-900 mb-3" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                What this shows about me:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span style={{ color: "#CAA29A" }}>★</span>
                  <span>Ability to combine UX clarity + modern branding with AI-driven functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#CAA29A" }}>★</span>
                  <span>Technical versatility — building beyond visuals into scalable digital systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: "#CAA29A" }}>★</span>
                  <span>
                    A forward-thinking mindset: preparing small businesses to compete with enterprise-level digital
                    experiences
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Navigation Footer */}
          <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-lg py-6 px-8 mt-12 shadow-lg max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full px-4">
              <Link
                href="/work/vanderbilt-navigation"
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
                {"← Big VU Navigation"}
              </Link>
              <Link
                href="/work/blair-school"
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
                {"Blair School of Music →"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
