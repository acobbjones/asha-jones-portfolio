"use client"

import Link from "next/link"
import { FadeUp, HeroFadeUp } from "@/components/scroll-animations"
import { MySpaceLayout } from "@/components/myspace-layout"

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

function AuditPreviewCard() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      <span className="absolute -top-4 left-[10%] text-[#c4a0cc] text-xl rotate-12 pointer-events-none select-none">✦</span>
      <span className="absolute top-[20%] -right-4 text-[#f0d9e8] text-sm -rotate-6 pointer-events-none select-none">✦</span>
      <span className="absolute bottom-[15%] -left-3 text-[#f5e6d3] text-xs rotate-45 pointer-events-none select-none">✦</span>
      <span className="absolute -bottom-3 right-[20%] text-[#e8d5f0] text-base rotate-6 pointer-events-none select-none">✦</span>
      <div className="absolute inset-0 rounded-3xl blur-3xl opacity-40 pointer-events-none" style={{ background: "radial-gradient(ellipse at 60% 40%, #e8d5f0 0%, #f0d9e8 40%, transparent 70%)", transform: "scale(1.15)" }} />
      <div className="relative rounded-3xl overflow-hidden" style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 8px 40px rgba(196,160,204,0.2), inset 0 1px 0 rgba(255,255,255,0.8)", padding: "28px" }}>
        <div className="flex items-center gap-2 mb-5">
          <div className="w-3 h-3 rounded-full bg-[#f5c2c7]" />
          <div className="w-3 h-3 rounded-full bg-[#fde68a]" />
          <div className="w-3 h-3 rounded-full bg-[#bbf7d0]" />
          <div className="flex-1 h-6 rounded-full ml-2 flex items-center px-3" style={{ background: "rgba(200,180,220,0.2)", border: "1px solid rgba(200,180,220,0.3)" }}>
            <span className="text-[10px] text-[#7a6a82]" style={{ fontFamily: "Courier New, monospace" }}>yourwebsite.com</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-7 rounded-lg flex items-center gap-2 px-3" style={{ background: "rgba(200,180,220,0.15)", border: "1px solid rgba(200,180,220,0.2)" }}>
            <div className="w-12 h-2 rounded-full" style={{ background: "#c4a0cc" }} />
            <div className="flex gap-2 ml-auto">
              {[20, 16, 18, 14].map((w, i) => (<div key={i} className="h-2 rounded-full" style={{ width: `${w}px`, background: "rgba(196,160,204,0.4)" }} />))}
            </div>
          </div>
          <div className="rounded-xl p-4 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 60%, #e8d5f0 100%)", minHeight: "90px" }}>
            <div className="w-3/4 h-3 rounded-full mb-2" style={{ background: "rgba(90,62,92,0.25)" }} />
            <div className="w-1/2 h-2 rounded-full mb-3" style={{ background: "rgba(90,62,92,0.15)" }} />
            <div className="w-20 h-6 rounded-full" style={{ background: "rgba(196,160,204,0.6)" }} />
            <div className="absolute top-2 right-3 flex items-start gap-1">
              <div className="text-[#c4a0cc] text-lg leading-none" style={{ fontFamily: "Courier New, monospace" }}>↙</div>
              <div className="rounded-lg px-2 py-1 text-[9px] font-bold leading-tight max-w-[80px]" style={{ background: "#5a3e5c", color: "white", fontFamily: "Courier New, monospace" }}>CTA unclear</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg p-3 relative" style={{ background: "rgba(240,210,230,0.2)", border: "1px solid rgba(200,180,220,0.25)" }}>
              <div className="w-full h-2 rounded-full mb-1.5" style={{ background: "rgba(196,160,204,0.4)" }} />
              <div className="w-4/5 h-2 rounded-full mb-1.5" style={{ background: "rgba(196,160,204,0.3)" }} />
              <div className="w-3/5 h-2 rounded-full" style={{ background: "rgba(196,160,204,0.2)" }} />
              <div className="absolute -top-2 -right-2 rounded-full w-5 h-5 flex items-center justify-center text-[9px] font-bold" style={{ background: "#f5c2c7", color: "#5a3e5c" }}>!</div>
            </div>
            <div className="rounded-lg p-3 relative" style={{ background: "rgba(240,210,230,0.2)", border: "1px solid rgba(200,180,220,0.25)" }}>
              <div className="w-full h-2 rounded-full mb-1.5" style={{ background: "rgba(196,160,204,0.4)" }} />
              <div className="w-3/5 h-2 rounded-full mb-1.5" style={{ background: "rgba(196,160,204,0.3)" }} />
              <div className="w-4/5 h-2 rounded-full" style={{ background: "rgba(196,160,204,0.2)" }} />
              <div className="absolute -top-2 -right-2 rounded-full w-5 h-5 flex items-center justify-center text-[9px] font-bold" style={{ background: "#bbf7d0", color: "#166534" }}>✓</div>
            </div>
          </div>
          <div className="rounded-xl p-3" style={{ background: "rgba(232,213,240,0.3)", border: "1px dashed #c4a0cc" }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#c4a0cc] text-xs">✦</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#5a3e5c]" style={{ fontFamily: "Courier New, monospace" }}>Audit Report</span>
            </div>
            {["Hierarchy issue on hero", "CTA buried below fold", "Mobile nav unclear"].map((note, i) => (
              <div key={i} className="flex items-center gap-2 py-1 border-b border-[#c4a0cc]/20 last:border-0">
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: i === 2 ? "#c4a0cc" : i === 1 ? "#f5c2c7" : "#fde68a" }} />
                <span className="text-[10px] text-[#5a3e5c]" style={{ fontFamily: "Courier New, monospace" }}>{note}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: "rgba(196,160,204,0.15)", border: "1px solid rgba(196,160,204,0.3)" }}>
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-[10px] font-bold text-[#5a3e5c]" style={{ fontFamily: "Courier New, monospace" }}>Loom walkthrough recorded</span>
            </div>
            <span className="text-[10px] text-[#7a6a82]" style={{ fontFamily: "Courier New, monospace" }}>48hr delivery</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function UXAuditPage() {
  const courier = { fontFamily: "Courier New, monospace" }
  const mutedPurple = "#7a6a82"
  const star = <span style={{ color: "#c4a0cc" }}>✦ </span>

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
          <span className="absolute top-10 left-[5%] text-[#f5e6d3] text-lg rotate-12 pointer-events-none select-none opacity-70">✦</span>
          <span className="absolute bottom-12 left-[20%] text-[#f0d9e8] text-xs rotate-45 pointer-events-none select-none opacity-60">✦</span>
          <span className="absolute top-1/3 left-[42%] text-[#e8d5f0] text-sm -rotate-6 pointer-events-none select-none opacity-50">✦</span>
          <div className="max-w-[1200px] mx-auto px-6 py-[70px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <HeroFadeUp>
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7B6B9E] mb-4 block" style={courier}>Services</span>
                <h1 className="text-5xl sm:text-6xl font-bold text-[#1F1F1F] mb-6 max-w-3xl leading-tight" style={courier}>
                  Your website<br />shouldn't be<br />confusing.
                </h1>
                <p className="text-lg sm:text-xl text-[#7B6B9E] max-w-xl mb-8 leading-relaxed">
                  UX audits and focused redesigns to help your site communicate clearly and convert.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://forms.gle/Spmj5KfBp7MxsF9t9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:underline" style={{ ...tier1Btn, ...courier }}>
                    Get a Quick UX Review
                  </a>
                  <a href="#details" className="inline-flex items-center px-8 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:underline" style={{ ...courier, color: mutedPurple, border: "1px solid rgba(200,180,220,0.4)", background: "rgba(255,255,255,0.5)" }}>
                    View Details
                  </a>
                </div>
              </HeroFadeUp>
              <div className="hidden lg:flex items-center justify-center">
                <HeroFadeUp><AuditPreviewCard /></HeroFadeUp>
              </div>
            </div>
          </div>
        </section>

        <div id="details" className="max-w-5xl mx-auto px-6 py-16 space-y-16">

          {/* Services Grid */}
          <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ alignItems: "stretch" }}>

              {/* UX Audit Card */}
              <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-1 shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col">
                <span className="absolute -top-3 -right-2 text-[#c4a0cc] text-lg rotate-12 pointer-events-none select-none z-10">✦</span>
                <div className="bg-white/95 rounded-2xl p-8 flex flex-col flex-1 border-l-4 border-l-transparent group-hover:border-l-[#c4a0cc] transition-all duration-300">
                  {/* Title + price */}
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-2xl font-bold text-[#1F1F1F]" style={courier}>
                      UX Audit +<br />Action Plan
                    </h2>
                    <div className="flex flex-col items-end gap-1 ml-4 flex-shrink-0">
                      <span className="text-sm font-bold px-3 py-1 rounded-full" style={{ background: "rgba(232,213,240,0.4)", color: "#5a3e5c", ...courier }}>$300–$500</span>
                      <span className="text-sm text-[#7B6B9E] italic" style={courier}>Flat rate. No surprises.</span>
                    </div>
                  </div>
                  {/* Description with inline star */}
                  <p className="text-[#5a3e5c] text-sm font-medium leading-relaxed mb-6">
                    {star}{"I'll show you exactly what's unclear, what's getting in the way, and what to fix first — so you can make improvements that actually move the needle."}
                  </p>
                  {/* Bullets */}
                  <ul className="space-y-3 mb-6 flex-1">
                    {auditBullets.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#374151]">
                        <span style={{ color: "#c4a0cc", flexShrink: 0, marginTop: "2px" }}>✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-[#7B6B9E] mb-6 italic" style={courier}>Delivered within 48–72 hours</p>
                  <a href="https://forms.gle/Spmj5KfBp7MxsF9t9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:underline" style={{ ...tier1Btn, ...courier }}>
                    Request a UX Audit →
                  </a>
                </div>
              </div>

              {/* Design Sprint Card */}
              <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-1 shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col">
                <span className="absolute -top-2 left-[40%] text-[#f0d9e8] text-sm -rotate-6 pointer-events-none select-none z-10">✦</span>
                <div className="bg-white/95 rounded-2xl p-8 flex flex-col flex-1 border-l-4 border-l-transparent group-hover:border-l-[#c4a0cc] transition-all duration-300">
                  {/* Title + price */}
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-2xl font-bold text-[#1F1F1F]" style={courier}>
                      Design Sprint
                    </h2>
                    <div className="flex flex-col items-end gap-1 ml-4 flex-shrink-0">
                      <span className="text-sm font-bold px-3 py-1 rounded-full" style={{ background: "rgba(232,213,240,0.4)", color: "#5a3e5c", ...courier }}>$1,500–$3,500</span>
                      <span className="text-sm text-[#7B6B9E] italic" style={courier}>Flat rate. No surprises.</span>
                    </div>
                  </div>
                  {/* Description with inline star */}
                  <p className="text-[#7B6B9E] text-sm leading-relaxed mb-6">
                    {star}If you want help implementing improvements, I offer a focused sprint to redesign your core page and get it right.
                  </p>
                  {/* Bullets */}
                  <ul className="space-y-3 mb-6 flex-1">
                    {sprintBullets.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#374151]">
                        <span style={{ color: "#c4a0cc", flexShrink: 0, marginTop: "2px" }}>✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-[#7B6B9E] mb-6 italic" style={courier}>2-week turnaround from project start</p>
                  <a href="mailto:asha.cobbjones@gmail.com?subject=Design Sprint Inquiry" className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:underline" style={{ ...tier2Btn, ...courier }}>
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

          {/* Proof */}
          <FadeUp>
            <div className="text-center space-y-4 relative">
              <span className="absolute -top-4 left-[20%] text-[#f5e6d3] text-sm rotate-12 pointer-events-none select-none">✦</span>
              <span className="absolute -bottom-2 right-[18%] text-[#e8d5f0] text-xs -rotate-6 pointer-events-none select-none">✦</span>
              <p className="text-[#7B6B9E] text-lg">Want to see my work?</p>
              <Link href="/work" scroll={true} className="inline-flex items-center px-8 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:underline no-underline" style={{ ...tier2Btn, ...courier }}>
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
                <h2 className="text-3xl font-bold text-[#1F1F1F] mb-3" style={courier}>Let's improve your site.</h2>
                <p className="text-[#7B6B9E] mb-8 max-w-md mx-auto leading-relaxed">
                  If you're interested, reach out via email or request a quick review. I'll get back to you within 24 hours.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="https://forms.gle/Spmj5KfBp7MxsF9t9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:underline" style={{ ...tier1Btn, ...courier }}>
                    Get a Quick UX Review →
                  </a>
                  <a href="mailto:asha.cobbjones@gmail.com" className="inline-flex items-center px-8 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:underline" style={{ ...courier, color: mutedPurple, border: "1px solid rgba(200,180,220,0.4)", background: "rgba(255,255,255,0.5)" }}>
                    Email Me
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Urgency */}
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
