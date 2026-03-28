"use client"

import Link from "next/link"
import { FadeUp, HeroFadeUp } from "@/components/scroll-animations"
import { MySpaceLayout } from "@/components/myspace-layout"

// Button style tokens
const tier1Btn = {
  background: "#e8d5f0",
  color: "#5a3e5c",
  border: "1.5px solid #c4a0cc",
  boxShadow: "0 2px 10px rgba(196,160,204,0.25)",
}

const tier2Btn = {
  background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 50%, #e8d5f0 100%)",
  color: "#5a3e5c",
  border: "1px solid rgba(240,210,230,0.6)",
  boxShadow: "0 2px 12px rgba(200,160,200,0.2)",
}

export default function UXAuditPage() {
  const courier = { fontFamily: "Courier New, monospace" }
  const mutedPurple = "#7a6a82"

  const auditBullets = [
    "15–20 min Loom walkthrough of your site",
    "Top UX issues impacting clarity and conversion",
    "Clear, prioritized action steps",
    "Light messaging suggestions (where needed)",
    "Optional wireframe direction",
  ]

  const sprintBullets = [
    "1 core page redesign (homepage or landing page)",
    "UX + UI improvements",
    "Improved layout, hierarchy, and flow",
    "Mobile optimization",
    "2 revision rounds",
    "Optional Framer implementation",
  ]

  const whoItIsFor = [
    "You're sending traffic, but your site isn't converting",
    "People land on your site and don't take action",
    "Your messaging feels unclear or too broad",
    "You know something is off, but can't pinpoint it",
  ]

  const steps = [
    { num: "01", label: "Request an audit", desc: "Fill out a short form so I understand your site and goals." },
    { num: "02", label: "I review your site and identify key friction points", desc: "I do a deep UX review and record a Loom walkthrough." },
    { num: "03", label: "You get an action plan", desc: "A clear, prioritized document delivered within 48–72 hours." },
    { num: "04", label: "Optional sprint", desc: "Want help implementing? We can move into a design sprint." },
  ]

  return (
    <MySpaceLayout fluid>
      <div className="min-h-screen">

        {/* Hero */}
        <section className="w-full border-b border-purple-100 bg-transparent relative overflow-hidden">
          {/* Sparkles */}
          <span className="absolute top-8 left-[8%] text-[#f5e6d3] text-2xl rotate-12 pointer-events-none select-none">✦</span>
          <span className="absolute top-16 right-[12%] text-[#e8d5f0] text-lg -rotate-6 pointer-events-none select-none">✦</span>
          <span className="absolute bottom-10 left-[30%] text-[#f0d9e8] text-sm rotate-45 pointer-events-none select-none">✦</span>
          <span className="absolute bottom-6 right-[25%] text-[#f5e6d3] text-xs -rotate-12 pointer-events-none select-none">✦</span>
          <span className="absolute top-1/2 left-[55%] text-[#e8d5f0] text-base rotate-6 pointer-events-none select-none">✦</span>

          <div className="max-w-[1200px] mx-auto px-6 py-[70px]">
            <HeroFadeUp>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7B6B9E] mb-4 block" style={courier}>
                Services
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold text-[#1F1F1F] mb-6 max-w-3xl leading-tight" style={courier}>
                Your website<br />shouldn't be<br />confusing.
              </h1>
              <p className="text-lg sm:text-xl text-[#7B6B9E] max-w-2xl mb-8 leading-relaxed">
                UX audits and focused redesigns to help your site communicate clearly and convert.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* Tier 1 — primary revenue CTA */}
                <a
                  href="https://forms.gle/Spmj5KfBp7MxsF9t9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:underline"
                  style={{ ...tier1Btn, ...courier }}
                >
                  Get a Quick UX Review
                </a>
                {/* Tier 2 — secondary */}
                <a
                  href="#details"
                  className="inline-flex items-center px-8 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:underline"
                  style={{ ...courier, color: mutedPurple, border: "1px solid rgba(200,180,220,0.4)", background: "rgba(255,255,255,0.5)" }}
                >
                  View Details
                </a>
              </div>
            </HeroFadeUp>
          </div>
        </section>

        <div id="details" className="max-w-5xl mx-auto px-6 py-16 space-y-16">

          {/* Services Grid */}
          <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* UX Audit Card */}
              <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-1 shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
                {/* Sparkle */}
                <span className="absolute -top-3 -right-2 text-[#c4a0cc] text-lg rotate-12 pointer-events-none select-none z-10">✦</span>
                <div className="bg-white/95 rounded-2xl p-8 h-full flex flex-col border-l-4 border-l-transparent group-hover:border-l-[#c4a0cc] transition-all duration-300">
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-2">
                      <h2 className="text-2xl font-bold text-[#1F1F1F]" style={courier}>
                        UX Audit +<br />Action Plan
                      </h2>
                      <div className="flex flex-col items-end gap-1 ml-4 flex-shrink-0">
                        <span className="text-sm font-bold px-3 py-1 rounded-full" style={{ background: "rgba(232,213,240,0.4)", color: "#5a3e5c", ...courier }}>
                          $300–$500
                        </span>
                        <span className="text-xs text-[#7B6B9E] italic" style={courier}>Flat rate. No surprises.</span>
                      </div>
                    </div>
                    <p className="text-[#7B6B9E] text-sm leading-relaxed mb-2">
                      A focused review of your website to identify what's unclear, what's getting in the way, and what to improve first.
                    </p>
                    <p className="text-[#5a3e5c] text-sm font-medium leading-relaxed">
                      {"I'll show you exactly what's unclear, what's getting in the way, and what to fix first."}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-6 flex-1">
                    {auditBullets.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#374151]">
                        <span style={{ color: "#c4a0cc", flexShrink: 0, marginTop: "2px" }}>✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-[#7B6B9E] mb-6 italic" style={courier}>
                    Delivered within 48–72 hours
                  </p>
                  {/* Tier 1 */}
                  <a
                    href="https://forms.gle/Spmj5KfBp7MxsF9t9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:underline"
                    style={{ ...tier1Btn, ...courier }}
                  >
                    Request a UX Audit →
                  </a>
                </div>
              </div>

              {/* Design Sprint Card */}
              <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-1 shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
                <span className="absolute -top-2 left-[40%] text-[#f0d9e8] text-sm -rotate-6 pointer-events-none select-none z-10">✦</span>
                <div className="bg-white/95 rounded-2xl p-8 h-full flex flex-col border-l-4 border-l-transparent group-hover:border-l-[#c4a0cc] transition-all duration-300">
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-2">
                      <h2 className="text-2xl font-bold text-[#1F1F1F]" style={courier}>
                        2-Week Website<br />Clarity Sprint
                      </h2>
                      <div className="flex flex-col items-end gap-1 ml-4 flex-shrink-0">
                        <span className="text-sm font-bold px-3 py-1 rounded-full" style={{ background: "rgba(232,213,240,0.4)", color: "#5a3e5c", ...courier }}>
                          $1,500–$3,500
                        </span>
                        <span className="text-xs text-[#7B6B9E] italic" style={courier}>Flat rate. No surprises.</span>
                      </div>
                    </div>
                    <p className="text-[#7B6B9E] text-sm leading-relaxed">
                      If you want help implementing improvements, I offer a focused sprint to redesign your core page.
                    </p>
                  </div>
                  <ul className="space-y-3 mb-6 flex-1">
                    {sprintBullets.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#374151]">
                        <span style={{ color: "#c4a0cc", flexShrink: 0, marginTop: "2px" }}>✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-[#7B6B9E] mb-6 italic" style={courier}>
                    2-week turnaround from project start
                  </p>
                  {/* Tier 2 */}
                  <a
                    href="mailto:asha.cobbjones@gmail.com?subject=Design Sprint Inquiry"
                    className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:underline"
                    style={{ ...tier2Btn, ...courier }}
                  >
                    Get In Touch →
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Who This Is For */}
          <FadeUp>
            <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-1 shadow-xl relative">
              <span className="absolute -top-3 right-[15%] text-[#f5e6d3] text-lg rotate-12 pointer-events-none select-none">✦</span>
              <span className="absolute bottom-4 left-[5%] text-[#e8d5f0] text-xs -rotate-6 pointer-events-none select-none">✦</span>
              <div className="bg-white/95 rounded-2xl p-8 border-l-4 border-l-transparent group-hover:border-l-[#c4a0cc] transition-all duration-300">
                <h2 className="text-2xl font-bold text-[#1F1F1F] mb-6" style={courier}>Who This Is For</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whoItIsFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#374151]">
                      <span style={{ color: "#c4a0cc", flexShrink: 0, marginTop: "2px" }}>✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>

          {/* How It Works */}
          <FadeUp>
            <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-1 shadow-xl relative">
              <span className="absolute top-4 right-[8%] text-[#f0d9e8] text-base rotate-45 pointer-events-none select-none">✦</span>
              <div className="bg-white/95 rounded-2xl p-8 border-l-4 border-l-transparent group-hover:border-l-[#c4a0cc] transition-all duration-300">
                <h2 className="text-2xl font-bold text-[#1F1F1F] mb-8" style={courier}>How It Works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {steps.map((step, i) => (
                    <div key={i} className="space-y-2">
                      <p className="text-3xl font-bold" style={{ color: "#e8d5f0", ...courier }}>{step.num}</p>
                      <p className="font-bold text-sm text-[#1F1F1F]" style={courier}>{step.label}</p>
                      <p className="text-xs text-[#7B6B9E] leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Proof Section */}
          <FadeUp>
            <div className="text-center space-y-4 relative">
              <span className="absolute -top-4 left-[20%] text-[#f5e6d3] text-sm rotate-12 pointer-events-none select-none">✦</span>
              <span className="absolute -bottom-2 right-[18%] text-[#e8d5f0] text-xs -rotate-6 pointer-events-none select-none">✦</span>
              <p className="text-[#7B6B9E] text-lg">Want to see my work?</p>
              {/* Tier 2 */}
              <Link
                href="/work"
                scroll={true}
                className="inline-flex items-center px-8 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:underline no-underline"
                style={{ ...tier2Btn, ...courier }}
              >
                View Portfolio →
              </Link>
            </div>
          </FadeUp>

          {/* Final CTA */}
          <FadeUp>
            <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-1 shadow-xl relative">
              <span className="absolute -top-3 left-[10%] text-[#f5e6d3] text-xl rotate-12 pointer-events-none select-none">✦</span>
              <span className="absolute top-6 right-[6%] text-[#e8d5f0] text-sm -rotate-6 pointer-events-none select-none">✦</span>
              <span className="absolute bottom-6 left-[45%] text-[#f0d9e8] text-xs rotate-45 pointer-events-none select-none">✦</span>
              <div className="bg-white/95 rounded-2xl p-10 text-center border-l-4 border-l-transparent group-hover:border-l-[#c4a0cc] transition-all duration-300">
                <h2 className="text-3xl font-bold text-[#1F1F1F] mb-3" style={courier}>
                  Let's improve your site.
                </h2>
                <p className="text-[#7B6B9E] mb-8 max-w-md mx-auto leading-relaxed">
                  If you're interested, reach out via email or request a quick review. I'll get back to you within 24 hours.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  {/* Tier 1 */}
                  <a
                    href="https://forms.gle/Spmj5KfBp7MxsF9t9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:underline"
                    style={{ ...tier1Btn, ...courier }}
                  >
                    Get a Quick UX Review →
                  </a>
                  {/* Tier 2 */}
                  <a
                    href="mailto:asha.cobbjones@gmail.com"
                    className="inline-flex items-center px-8 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:underline"
                    style={{ ...courier, color: mutedPurple, border: "1px solid rgba(200,180,220,0.4)", background: "rgba(255,255,255,0.5)" }}
                  >
                    Email Me
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Urgency footer note */}
          <FadeUp>
            <div className="text-center pt-4 border-t border-purple-100 relative">
              <span className="absolute -top-3 right-[30%] text-[#f5e6d3] text-sm rotate-6 pointer-events-none select-none">✦</span>
              <p className="text-sm text-[#7B6B9E]/80 italic">
                Audits are limited each month to keep turnaround times fast. Grab your spot early.
              </p>
            </div>
          </FadeUp>

        </div>
      </div>
    </MySpaceLayout>
  )
}
