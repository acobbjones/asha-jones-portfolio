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

function HeroVisual() {
  // FIX 4: max-w increased from 480px to 560px, minHeight from 420px to 480px
  return (
    <div className="relative w-full max-w-[640px] mx-auto" style={{ perspective: "1000px", minHeight: "520px" }}>

      {/* Glow blob */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 55% 45%, rgba(232,213,240,0.5) 0%, rgba(240,210,230,0.2) 50%, transparent 70%)", filter: "blur(32px)", transform: "scale(1.2)" }} />

      {/* Floating secondary card — "Before" score */}
      <div
        className="absolute top-0 left-0 rounded-2xl p-4 z-10"
        style={{
          background: "rgba(255,255,255,0.65)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.8)",
          boxShadow: "0 8px 32px rgba(196,160,204,0.2)",
          transform: "rotateY(6deg) rotateX(-3deg) rotate(-4deg)",
          width: "160px",
        }}
      >
        <p className="text-[9px] font-bold uppercase tracking-widest text-[#7a6a82] mb-2" style={{ fontFamily: "Courier New, monospace" }}>Clarity Score</p>
        <div className="flex items-end gap-1 mb-2">
          <span className="text-2xl font-bold text-[#f5c2c7]" style={{ fontFamily: "Courier New, monospace" }}>42</span>
          <span className="text-xs text-[#7a6a82] mb-1">/100</span>
        </div>
        <div className="h-1.5 rounded-full w-full" style={{ background: "rgba(200,180,220,0.2)" }}>
          <div className="h-1.5 rounded-full" style={{ width: "42%", background: "#f5c2c7" }} />
        </div>
        <p className="text-[9px] text-[#7a6a82] mt-2">Needs improvement</p>
      </div>

      {/* Main audit card — center, 3D tilted */}
      <div
        className="absolute rounded-3xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.60)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.8)",
          boxShadow: "0 24px 60px rgba(196,160,204,0.35), 0 8px 20px rgba(196,160,204,0.2), inset 0 1px 0 rgba(255,255,255,0.9)",
          padding: "22px",
          transform: "rotateY(-6deg) rotateX(3deg)",
          transformStyle: "preserve-3d",
          width: "320px",
          top: "40px",
          left: "50%",
          marginLeft: "-160px",
          zIndex: 20,
        }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#f5c2c7]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#fde68a]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#bbf7d0]" />
          <div className="flex-1 h-5 rounded-full ml-1 flex items-center px-2" style={{ background: "rgba(200,180,220,0.2)", border: "1px solid rgba(200,180,220,0.3)" }}>
            <span className="text-[9px] text-[#7a6a82]" style={{ fontFamily: "Courier New, monospace" }}>yourwebsite.com</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-6 rounded-lg flex items-center gap-2 px-2" style={{ background: "rgba(200,180,220,0.15)", border: "1px solid rgba(200,180,220,0.2)" }}>
            <div className="w-8 h-1.5 rounded-full" style={{ background: "#c4a0cc" }} />
            <div className="flex gap-1 ml-auto">
              {[14, 11, 13].map((w, i) => (<div key={i} className="h-1.5 rounded-full" style={{ width: `${w}px`, background: "rgba(196,160,204,0.4)" }} />))}
            </div>
          </div>
          <div className="rounded-xl p-3 relative" style={{ background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 60%, #e8d5f0 100%)", minHeight: "70px" }}>
            <div className="w-3/4 h-2.5 rounded-full mb-1.5" style={{ background: "rgba(90,62,92,0.25)" }} />
            <div className="w-1/2 h-1.5 rounded-full mb-2" style={{ background: "rgba(90,62,92,0.15)" }} />
            <div className="w-16 h-5 rounded-full" style={{ background: "rgba(196,160,204,0.6)" }} />
            <div className="absolute top-1.5 right-2 flex items-start gap-1">
              <div className="text-[#c4a0cc] text-sm leading-none">↙</div>
              <div className="rounded-md px-1.5 py-0.5 text-[8px] font-bold" style={{ background: "#5a3e5c", color: "white", fontFamily: "Courier New, monospace" }}>CTA unclear</div>
            </div>
          </div>
          <div className="rounded-xl p-2.5" style={{ background: "rgba(232,213,240,0.3)", border: "1px dashed #c4a0cc" }}>
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[#c4a0cc] text-[9px]">✦</span>
              <span className="text-[8px] font-bold uppercase tracking-widest text-[#5a3e5c]" style={{ fontFamily: "Courier New, monospace" }}>Audit Report</span>
            </div>
            {["Hierarchy issue on hero", "CTA buried below fold", "Mobile nav unclear"].map((note, i) => (
              <div key={i} className="flex items-center gap-1.5 py-0.5 border-b border-[#c4a0cc]/20 last:border-0">
                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: i === 2 ? "#c4a0cc" : i === 1 ? "#f5c2c7" : "#fde68a" }} />
                <span className="text-[8px] text-[#5a3e5c]" style={{ fontFamily: "Courier New, monospace" }}>{note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating secondary card — Loom badge bottom right */}
      <div
        className="absolute bottom-16 right-0 rounded-2xl px-4 py-3 z-10"
        style={{
          background: "rgba(255,255,255,0.65)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.8)",
          boxShadow: "0 8px 32px rgba(196,160,204,0.2)",
          transform: "rotateY(-4deg) rotateX(2deg) rotate(3deg)",
          width: "180px",
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
          <p className="text-[9px] font-bold text-[#5a3e5c]" style={{ fontFamily: "Courier New, monospace" }}>Loom recorded</p>
        </div>
        <p className="text-[8px] text-[#7a6a82]" style={{ fontFamily: "Courier New, monospace" }}>15 min walkthrough</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-0.5">
            {[40, 55, 35, 60, 45, 50, 38].map((h, i) => (
              <div key={i} className="w-1.5 rounded-full" style={{ height: `${h * 0.3}px`, background: i < 4 ? "#c4a0cc" : "rgba(196,160,204,0.3)" }} />
            ))}
          </div>
          <span className="text-[8px] text-[#7a6a82]" style={{ fontFamily: "Courier New, monospace" }}>48hr</span>
        </div>
      </div>

      {/* Sparkles */}
      <span className="absolute top-2 right-[15%] text-[#c4a0cc] text-base rotate-12 pointer-events-none select-none z-30">✦</span>
      <span className="absolute bottom-[30%] left-[5%] text-[#f0d9e8] text-xs -rotate-6 pointer-events-none select-none z-30">✦</span>
      <span className="absolute top-[45%] right-[2%] text-[#e8d5f0] text-xs rotate-45 pointer-events-none select-none z-30">✦</span>

    </div>
  )
}

export default function UXAuditPage() {
  const courier = { fontFamily: "Courier New, monospace" }
  const mutedPurple = "#7a6a82"

  const auditItems = [
    "15–20 min Loom walkthrough of your site",
    "Top UX issues impacting clarity and conversion",
    "Clear, prioritized action steps",
    "Light messaging suggestions (where needed)",
    "Optional wireframe direction",
  ]

  const sprintTiers = [
    {
      title: "Homepage",
      price: "$1,500",
      desc: "A full redesign of your homepage — your most important page.",
      items: [
        "Homepage redesign (UX + UI)",
        "Improved layout, hierarchy, and flow",
        "Mobile optimization",
        "2 revision rounds",
      ],
      cta: "mailto:asha.cobbjones@gmail.com?subject=Design Sprint Inquiry — Homepage",
      popular: false,
    },
    {
      title: "Homepage + 1 Page",
      price: "$2,500",
      desc: "Homepage plus one additional page — ideal for adding a services or about page.",
      items: [
        "Homepage redesign (UX + UI)",
        "1 additional page redesign",
        "Improved layout, hierarchy, and flow",
        "Mobile optimization",
        "2 revision rounds",
      ],
      cta: "mailto:asha.cobbjones@gmail.com?subject=Design Sprint Inquiry — Homepage + 1 Page",
      popular: true,
    },
    {
      title: "Homepage + 2 Pages",
      price: "$3,500",
      desc: "Full clarity sprint across three pages — for a complete website overhaul.",
      items: [
        "Homepage redesign (UX + UI)",
        "2 additional page redesigns",
        "Improved layout, hierarchy, and flow",
        "Mobile optimization",
        "2 revision rounds",
        "Optional Framer implementation",
      ],
      cta: "mailto:asha.cobbjones@gmail.com?subject=Design Sprint Inquiry — Homepage + 2 Pages",
      popular: false,
    },
  ]

  const whoItIsFor = [
    "You're sending traffic, but your site isn't converting",
    "People land on your site and don't take action",
    "Your messaging feels unclear or too broad",
    "You know something is off, but can't pinpoint it",
  ]

  // FIX 3: step 02 shortened to one line
  const steps = [
    { num: "01", label: "Request an audit", desc: "Fill out a short form so I understand your site and goals." },
    { num: "02", label: "I record a Loom", desc: "I do a deep UX review and record a walkthrough of my findings." },
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
                <h1 className="text-5xl sm:text-6xl font-bold text-[#1F1F1F] mb-4 max-w-3xl leading-tight" style={courier}>
                  Your website<br />shouldn't be<br />confusing.
                </h1>
                <p className="text-lg sm:text-xl text-[#7B6B9E] max-w-xl mb-3 leading-relaxed">
                  UX audits and focused redesigns to help your site communicate clearly and convert.
                </p>
                <p className="text-sm text-[#7a6a82] max-w-xl mb-8 leading-relaxed italic">
                  In simple terms: I help you understand why your website isn't working — and exactly what to fix.
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
              <div className="hidden lg:flex items-center justify-center py-8">
                <HeroFadeUp><HeroVisual /></HeroFadeUp>
              </div>
            </div>
          </div>
        </section>

        <div id="details" className="max-w-5xl mx-auto px-6 py-16 space-y-16">

          {/* 1 — Who This Is For */}
          <FadeUp>
            <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-1 shadow-xl relative">
              <span className="absolute -top-3 right-[15%] text-[#f5e6d3] text-lg rotate-12 pointer-events-none select-none">✦</span>
              <div className="bg-white/95 rounded-2xl p-8 border-l-4 border-l-transparent group-hover:border-l-[#c4a0cc] transition-all duration-300">
                <h2 className="text-2xl font-bold text-[#1F1F1F] mb-6" style={courier}>Who This Is For</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {whoItIsFor.map((item, i) => (
                    <p
                      key={i}
                      className="text-sm text-[#374151] py-3 border-b border-[#e8d5f0]/60 sm:odd:pr-8 sm:even:pl-8 sm:even:border-l sm:even:border-l-[#e8d5f0]/60"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* 2 — How It Works */}
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

          {/* 3 — UX Audit Card — full width */}
          <FadeUp>
            <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-1 shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
              <span className="absolute -top-3 right-[8%] text-[#c4a0cc] text-lg rotate-12 pointer-events-none select-none z-10">✦</span>
              <div className="bg-white/95 rounded-2xl overflow-hidden border-l-4 border-l-transparent group-hover:border-l-[#c4a0cc] transition-all duration-300">
                <div className="px-8 pt-8 pb-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 50%, #e8d5f0 100%)" }}>
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                      <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7B6B9E] mb-2 block" style={courier}>Start here</span>
                      <h2 className="text-3xl font-bold text-[#1F1F1F]" style={courier}>UX Audit + Action Plan</h2>
                      <p className="text-sm text-[#7a6a82] mt-2 italic">{"I'll show you what's unclear, what's blocking users, and what to fix first."}</p>
                    </div>
                    {/* FIX 2: just $500, no $300 or sub-text range */}
                    <div className="flex-shrink-0 text-right">
                      <p className="text-4xl font-bold text-[#5a3e5c]" style={courier}>$500</p>
                      <p className="text-xs text-[#7a6a82] italic mt-1" style={courier}>Flat rate. No surprises.</p>
                    </div>
                  </div>
                </div>
                <div className="px-8 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
                  {auditItems.map((item, i) => (
                    <p key={i} className="text-sm text-[#374151] py-2.5 border-b border-[#e8d5f0]/60">
                      {item}
                    </p>
                  ))}
                </div>
                <div className="px-8 pb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-sm text-[#7B6B9E] italic" style={courier}>Delivered within 48–72 hours</p>
                  <a href="https://forms.gle/Spmj5KfBp7MxsF9t9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:underline" style={{ ...tier1Btn, ...courier }}>
                    Request a UX Audit →
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Sprint divider */}
          {/* FIX 1: text-sm → text-lg for heading, text-xs → text-sm for subtext */}
          <FadeUp>
            <div className="text-center space-y-2 relative">
              <span className="absolute -top-6 left-[30%] text-[#f5e6d3] text-sm rotate-12 pointer-events-none select-none">✦</span>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#e8d5f0]" />
                <p className="text-lg font-bold text-[#7B6B9E] px-4" style={courier}>Want help implementing the fixes?</p>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#e8d5f0]" />
              </div>
              <p className="text-sm text-[#7B6B9E]/70 italic">Choose a sprint tier below — each includes a full redesign of your core pages.</p>
            </div>
          </FadeUp>

          {/* 4 — 3 Sprint Cards */}
          <FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              {sprintTiers.map((tier, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col transition-all duration-300"
                  style={tier.popular ? { transform: "translateY(-8px)" } : {}}
                >
                  {tier.popular && (
                    <div className="text-center mb-2">
                      <span className="inline-block text-xs font-bold px-4 py-1 rounded-full" style={{ background: "#5a3e5c", color: "white", ...courier }}>
                        ✦ Most Popular
                      </span>
                    </div>
                  )}
                  <div
                    className="bg-white/20 backdrop-blur-md rounded-2xl p-1 shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col flex-1"
                    style={tier.popular
                      ? { border: "1.5px solid #c4a0cc", boxShadow: "0 8px 40px rgba(196,160,204,0.3)" }
                      : { border: "1px solid rgba(255,255,255,0.3)" }
                    }
                  >
                    <div className="bg-white/95 rounded-2xl overflow-hidden flex flex-col flex-1">
                      <div className="px-6 pt-6 pb-5" style={{
                        background: tier.popular
                          ? "linear-gradient(135deg, #e8d5f0 0%, #d4a8e0 50%, #c4a0cc 100%)"
                          : "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 50%, #e8d5f0 100%)"
                      }}>
                        <h3 className="text-lg font-bold text-[#1F1F1F] mb-3" style={courier}>{tier.title}</h3>
                        <p className="text-3xl font-bold text-[#5a3e5c]" style={courier}>{tier.price}</p>
                        <p className="text-xs text-[#7a6a82] italic mt-1" style={courier}>Flat rate. No surprises.</p>
                      </div>
                      <div className="px-6 py-5 flex flex-col flex-1">
                        <p className="text-sm text-[#7B6B9E] leading-relaxed mb-5">{tier.desc}</p>
                        <div className="flex-1">
                          {tier.items.map((item, j) => (
                            <p key={j} className="text-sm text-[#374151] py-2.5 border-b border-[#e8d5f0]/60 last:border-0">
                              {item}
                            </p>
                          ))}
                        </div>
                        <p className="text-xs text-[#7B6B9E] italic mt-5 mb-5" style={courier}>2-week turnaround from project start</p>
                        <a
                          href={tier.cta}
                          className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:underline"
                          style={tier.popular ? { ...tier1Btn, ...courier } : { ...tier2Btn, ...courier }}
                        >
                          Get In Touch →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* 5 — What is UX? */}
          <FadeUp>
            <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-1 shadow-xl relative">
              <span className="absolute -top-3 left-[20%] text-[#f5e6d3] text-sm rotate-12 pointer-events-none select-none">✦</span>
              <span className="absolute top-6 right-[5%] text-[#e8d5f0] text-xs -rotate-6 pointer-events-none select-none">✦</span>
              <div className="bg-white/95 rounded-2xl p-8 border-l-4 border-l-transparent group-hover:border-l-[#c4a0cc] transition-all duration-300">
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7B6B9E] mb-4 block" style={courier}>A quick explanation</span>
                <h2 className="text-2xl font-bold text-[#1F1F1F] mb-8" style={courier}>Not sure what UX means?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-[#1F1F1F]" style={courier}>What is UX (User Experience)?</h3>
                    <p className="text-sm text-[#4A4268] leading-relaxed">UX is how people feel when they use your website — can they find what they need? Do they trust you? Do they know what to do next?</p>
                    <p className="text-sm text-[#4A4268] leading-relaxed">When that experience breaks down, people leave. And when people leave, you lose business. Good UX makes it easy for visitors to understand what you offer and take action.</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-[#1F1F1F]" style={courier}>What is a UX audit?</h3>
                    <p className="text-sm text-[#4A4268] leading-relaxed">A UX audit is a focused review of your website that identifies what's unclear, what's getting in the way, and what to improve first.</p>
                    <p className="text-sm text-[#4A4268] leading-relaxed">Instead of guessing why your site isn't working, you get a clear, prioritized plan — so every change you make actually moves the needle.</p>
                  </div>
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
