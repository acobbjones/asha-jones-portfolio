"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import { MySpaceLayout } from "@/components/myspace-layout"
import { ArrowRight } from "lucide-react"


const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: "1.1M+", label: "Users Impacted" },
  { value: "8", label: "Projects" },
  { value: "5", label: "Industries" },
]

const originStory = [
  {
    phase: "The Beginning",
    year: "Growing Up",
    // Full copy for desktop
    content:
      "I've always been a quintessential millennial — I grew up inside technology. GameBoy. AOL Instant Messenger. MySpace layouts I coded myself. Long before I knew UX was a career, I was already doing it — obsessing over how digital experiences felt, and quietly redesigning every interface I touched.",
    // Short copy for mobile
    mobileContent:
      "I grew up obsessing over digital experiences — coding MySpace layouts before I even knew UX was a career.",
  },
  {
    phase: "The Pivot",
    year: "Post-Howard",
    content:
      "I studied French Literature at Howard University — which taught me more about communication, culture, and human nuance than any design course could. After graduating, I landed a contract with Google, working as a brand ambassador for Google Cardboard. Watching people experience something new and delightful for the first time lit something in me. I knew I wanted to work in tech. I just didn't know where yet.",
    mobileContent:
      "French Lit at Howard taught me human nuance. A Google contract showed me what delight looks like. I knew tech was next.",
  },
  {
    phase: "Finding UX",
    year: "Atlanta Era",
    content:
      "I stayed in Atlanta after Google because I could feel the tech boom coming — and I was right. After a lot of research, I discovered user experience design and it clicked immediately. While working full-time at a nonprofit, I enrolled in General Assembly's UX bootcamp part-time. Eventually I quit my job, went full-time, and three months later landed at Coca-Cola as a Digital Production Designer. That was the start.",
    mobileContent:
      "Discovered UX in Atlanta, quit my nonprofit job, enrolled at General Assembly, and landed at Coca-Cola three months later.",
  },
  {
    phase: "Where I Am Now",
    year: "Present",
    content:
      "Today I'm a Senior UX Designer with 8+ years of experience across enterprise, education, fintech, and emerging tech. I've designed for 1.1M+ users, led cross-functional teams, and built systems that scale. I'm currently exploring what's next — AI agents, voice design, and the intersections of technology that don't have names yet.",
    mobileContent:
      "8+ years, 1.1M+ users, enterprise to emerging tech. Now exploring AI agents, voice design, and what comes next.",
  },
]

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Every project starts with a conversation. I run discovery calls to understand the real problem, not just the stated one — then document findings in a project brief to align stakeholders before a single pixel is touched.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "I synthesize research into clear direction. User flows, IA maps, and alignment sessions happen here. This is where I make sure we're solving the right problem in the right order.",
  },
  {
    number: "03",
    title: "Design & Iterate",
    description:
      "First iterations are built in Figma or through vibecoding, then presented and refined through collaborative feedback loops. I'm as comfortable in rapid sprints as I am in longer design cycles — the process adapts to the project.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Handoffs include detailed specs, design system components, and documentation that dev teams can actually use. I stay involved through implementation because great UX doesn't end at the design file.",
  },
]

const experience = [
  {
    role: "Founder & Lead UX Designer",
    company: "The Golden Hour Agency",
    period: "June 2024 – Present",
    highlight: "Human-centered design, UX/UI, and innovative digital solutions",
  },
  {
    role: "Associate Director, UX/UI Design",
    company: "Vanderbilt University",
    period: "Oct 2022 – March 2024",
    highlight: "Led strategic UX overhaul for 8 major university websites",
  },
  {
    role: "Senior UX/UI Designer",
    company: "Delta Airlines",
    period: "Jan 2022 – Sep 2022",
    highlight: "Delta Vacations booking flows + in-flight Wi-Fi portal",
  },
  {
    role: "UX Design Architect",
    company: "US Bank",
    period: "Sep 2021 – Jan 2022",
    highlight: "Cross-segment customer journey maps + IA for financial products",
  },
  {
    role: "UX Designer",
    company: "Neighborly",
    period: "Jan 2021 – Sep 2021",
    highlight: "Design system + 25+ screens for home services platform",
  },
  {
    role: "Digital Production Designer",
    company: "Coca-Cola",
    period: "Oct 2019 – Sep 2020",
    highlight: "500+ prototypes for Freestyle kiosk UX serving 800K consumers",
  },
]

export default function AboutPage() {
  const [activeStory, setActiveStory] = useState(0)
  const storyRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = storyRefs.current.map((ref, index) => {
      if (!ref) return null
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStory(index)
            }
          })
        },
        { threshold: 0.3, rootMargin: "-20% 0px -20% 0px" }
      )
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((obs) => obs?.disconnect())
    }
  }, [])

  return (
    <MySpaceLayout fluid>
      <div className="min-h-screen">

        {/* SECTION 1: Hero */}
        <section className="w-full bg-transparent pt-12 pb-0">
          <div className="max-w-[1200px] mx-auto px-6">

            <HeroFadeUp>
              <div className="mb-8">
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7B6B9E] mb-4 block">
                  About Asha
                </span>
                <h1
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1F1F1F] mb-4 leading-tight"
                  style={{ fontFamily: "Courier New, monospace" }}
                >
                  Who is{" "}
                  <span
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    style={{ color: "#7a6a82", fontFamily: "Courier New, monospace" }}
                  >
                    Asha?
                  </span>
                </h1>
                <p className="text-lg text-[#7B6B9E] max-w-xl">
                  Senior UX Designer &middot; Open to full-time roles
                </p>
              </div>
            </HeroFadeUp>

            {/* Hero image — fixed background position for mobile */}
            <div className="w-full rounded-3xl overflow-hidden relative" style={{ height: "65vh", minHeight: "480px" }}>
              <div
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{
                  backgroundImage: "url('https://i.imgur.com/KTblNms.png')",
                  backgroundPosition: "30% 20%",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm overflow-hidden py-5 marquee-fade">
                <div className="flex animate-marquee whitespace-nowrap">
                  {[...Array(4)].flatMap(() => [
                    { value: "8+", label: "Years of Experience" },
                    { value: "1.1M+", label: "Users Impacted" },
                    { value: "8", label: "Projects" },
                    { value: "5", label: "Industries" },
                  ]).map((stat, index) => (
                    <div key={index} className="flex items-center gap-3 mx-8 flex-shrink-0">
                      <span className="text-white/30 text-lg">/</span>
                      <span className="text-white font-bold text-xl" style={{ fontFamily: "Courier New, monospace" }}>
                        {stat.value}
                      </span>
                      <span className="text-white/50 text-sm tracking-widest uppercase">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Philosophy Quote */}
        <section className="w-full py-20 px-6 bg-transparent">
          <div className="max-w-[900px] mx-auto">
            <FadeUp>
              <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-1 shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="bg-white/95 rounded-2xl px-10 py-10 border-l-4 border-l-transparent group-hover:border-l-[#c4a0cc] transition-all duration-300">
                  <p
                    className="text-2xl sm:text-3xl font-bold text-[#1F1F1F] leading-relaxed mb-6"
                    style={{ fontFamily: "Courier New, monospace" }}
                  >
                    {"\"I design from instinct, taste, research, and a deep belief that "}
                    <span style={{ color: "#7a6a82", fontFamily: "Courier New, monospace", fontSize: "inherit", fontStyle: "italic" }}>
                      the best experiences make people feel something.
                    </span>
                    {"\""}
                  </p>
                  <p className="text-xs text-[#7B6B9E] tracking-widest uppercase">{"— Asha Cobb-Jones"}</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* SECTION 3: Origin Story */}
        <section className="w-full bg-transparent">
          <div className="max-w-[1200px] mx-auto px-6 py-20">
            <FadeUp>
              <div className="text-center mb-16">
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7B6B9E] mb-3 block">
                  / Origin Story (01)
                </span>
                <h2
                  className="text-4xl md:text-5xl font-bold text-[#1F1F1F]"
                  style={{ fontFamily: "Courier New, monospace" }}
                >
                  How I got here.
                </h2>
              </div>
            </FadeUp>

            {/* MOBILE: simple stacked cards, no sticky scroll, short copy */}
            <div className="flex flex-col gap-6 lg:hidden">
              {originStory.map((story, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8E4F0] shadow-sm">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase mb-1 block" style={{ color: "#7a6a82" }}>
                    {story.year}
                  </span>
                  <h3 className="text-xl font-bold text-[#1F1F1F] mb-3" style={{ fontFamily: "Courier New, monospace" }}>
                    {story.phase}
                  </h3>
                  <p className="text-[#4A4268] text-base leading-relaxed">{story.mobileContent}</p>
                </div>
              ))}
            </div>

            {/* DESKTOP: sticky scroll layout unchanged */}
            <div className="hidden lg:grid grid-cols-2 gap-12 items-start">
              {/* Left — Scrollable story */}
              <div className="space-y-0">
                {originStory.map((story, index) => (
                  <div
                    key={index}
                    ref={(el) => { storyRefs.current[index] = el }}
                    className={"flex flex-col justify-center py-16 border-b border-purple-100 last:border-0 " + (index === 0 ? "min-h-[110vh]" : "min-h-[70vh]")}
                  >
                    <span className="text-xs font-bold tracking-[0.2em] uppercase mb-2 block" style={{ color: "#7a6a82" }}>
                      {story.year}
                    </span>
                    <h3
                      className="text-2xl font-bold text-[#1F1F1F] mb-4"
                      style={{ fontFamily: "Courier New, monospace" }}
                    >
                      {story.phase}
                    </h3>
                    <p className="text-[#4A4268] text-lg leading-relaxed">{story.content}</p>
                  </div>
                ))}
              </div>

              {/* Right — Sticky visual */}
              <div className="sticky top-24 h-[70vh]">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl relative">
                  <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                    {originStory.map((_, index) => (
                      <div
                        key={index}
                        className={"w-1.5 h-8 rounded-full transition-all duration-500 " + (activeStory === index ? "bg-pink-400" : "bg-white/30")}
                      />
                    ))}
                  </div>
                  <img
                    src={
                      activeStory === 0
                        ? "https://i.imgur.com/9fDbsTm.jpeg"
                        : activeStory === 1
                        ? "https://i.imgur.com/mGcy5O0.gif"
                        : activeStory === 2
                        ? "https://i.imgur.com/KRwXKgQ.png"
                        : "https://i.imgur.com/35ZDjGt.png"
                    }
                    alt="Origin story background"
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                    style={activeStory === 3 ? { objectPosition: "center 30%" } : undefined}
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6">
                      <p className="text-white font-bold text-xl mb-1" style={{ fontFamily: "Courier New, monospace" }}>
                        {originStory[activeStory].phase}
                      </p>
                      <p className="text-white/60 text-sm">{originStory[activeStory].year}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Process */}
        <section className="w-full py-20 px-6 bg-transparent">
          <div className="max-w-[1100px] mx-auto">
            <FadeUp>
              <div className="text-center mb-12">
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7B6B9E] mb-3 block">
                  / How I Work (02)
                </span>
                <h2
                  className="text-4xl md:text-5xl font-bold text-[#1F1F1F]"
                  style={{ fontFamily: "Courier New, monospace" }}
                >
                  My Process
                </h2>
                <p className="text-[#7a6a82] mt-4 max-w-2xl mx-auto text-base leading-relaxed">
                  {"The Double Diamond and design thinking methodology is still my foundation. AI just raised the ceiling on what's possible in each phase."}
                </p>
              </div>
            </FadeUp>

            {/* Double Diamond Diagrams — hidden on mobile, visible on md+ */}
            <div className="hidden md:flex flex-col md:flex-row justify-center items-start gap-8 mb-16">
              {/* Traditional Diamond */}
              <div className="flex-1 max-w-[680px]">
                <p className="text-xs font-bold tracking-widest uppercase text-[#7a6a82] mb-2 text-center">Traditional</p>
                <svg width="100%" viewBox="0 0 680 360">
                  <defs><marker id="arr1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></marker></defs>
                  <line x1="80" y1="50" x2="80" y2="310" stroke="#c4a0cc" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5"/>
                  <line x1="230" y1="50" x2="230" y2="310" stroke="#c4a0cc" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5"/>
                  <line x1="380" y1="50" x2="380" y2="310" stroke="#c4a0cc" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5"/>
                  <line x1="530" y1="50" x2="530" y2="310" stroke="#c4a0cc" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5"/>
                  <line x1="668" y1="50" x2="668" y2="310" stroke="#c4a0cc" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5"/>
                  <polygon points="80,170 230,60 380,170 230,280" fill="#e8d5f0" stroke="#c4a0cc" strokeWidth="1"/>
                  <text fontFamily="Courier New" fontSize="14" fontWeight="bold" x="230" y="170" textAnchor="middle" dominantBaseline="central" fill="#5a3e5c">Problem space</text>
                  <polygon points="380,170 530,60 668,170 530,280" fill="#f5e6d3" stroke="#d4b896" strokeWidth="1"/>
                  <text fontFamily="Courier New" fontSize="14" fontWeight="bold" x="524" y="170" textAnchor="middle" dominantBaseline="central" fill="#5a3e5c">Solution space</text>
                  <circle cx="380" cy="170" r="9" fill="#06B6D4"/>
                  <text fontSize="12" x="380" y="200" textAnchor="middle" fill="#06B6D4">A well-defined</text>
                  <text fontSize="12" x="380" y="215" textAnchor="middle" fill="#06B6D4">problem</text>
                  <line x1="88" y1="130" x2="168" y2="68" stroke="#7a6a82" strokeWidth="1.5" markerEnd="url(#arr1)" fill="none"/>
                  <line x1="292" y1="68" x2="372" y2="130" stroke="#7a6a82" strokeWidth="1.5" markerEnd="url(#arr1)" fill="none"/>
                  <text fontSize="12" x="185" y="38" textAnchor="middle" fill="#7a6a82">Solving the right problem</text>
                  <text fontSize="12" x="80" y="330" textAnchor="middle" fill="#9a8aa2">Discover</text>
                  <text fontSize="12" x="230" y="330" textAnchor="middle" fill="#9a8aa2">Define</text>
                  <text fontSize="12" x="380" y="330" textAnchor="middle" fill="#9a8aa2">Develop</text>
                  <text fontSize="12" x="530" y="330" textAnchor="middle" fill="#9a8aa2">Deliver</text>
                </svg>
              </div>

              {/* AI-Evolved Diamond */}
              <div className="flex-1 max-w-[680px]">
                <p className="text-xs font-bold tracking-widest uppercase text-[#7a6a82] mb-2 text-center">AI-evolved</p>
                <svg width="100%" viewBox="0 0 680 360">
                  <defs><marker id="arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></marker></defs>
                  <line x1="80" y1="50" x2="80" y2="310" stroke="#c4a0cc" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5"/>
                  <line x1="200" y1="50" x2="200" y2="310" stroke="#c4a0cc" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5"/>
                  <line x1="320" y1="50" x2="320" y2="310" stroke="#c4a0cc" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5"/>
                  <line x1="500" y1="50" x2="500" y2="310" stroke="#c4a0cc" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5"/>
                  <line x1="668" y1="50" x2="668" y2="310" stroke="#c4a0cc" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.5"/>
                  <polygon points="80,170 200,110 320,170 200,230" fill="#e8d5f0" stroke="#c4a0cc" strokeWidth="1"/>
                  <text fontFamily="Courier New" fontSize="13" fontWeight="bold" x="200" y="163" textAnchor="middle" dominantBaseline="central" fill="#5a3e5c">Problem space</text>
                  <text fontSize="11" x="200" y="179" textAnchor="middle" dominantBaseline="central" fill="#9a8aa2">AI-accelerated</text>
                  <polygon points="320,170 500,55 668,170 500,285" fill="#f5e6d3" stroke="#d4b896" strokeWidth="1.5"/>
                  <text fontFamily="Courier New" fontSize="14" fontWeight="bold" x="494" y="163" textAnchor="middle" dominantBaseline="central" fill="#5a3e5c">Solution space</text>
                  <text fontSize="12" x="494" y="181" textAnchor="middle" dominantBaseline="central" fill="#7a6a82">Human creativity reigns</text>
                  <circle cx="320" cy="170" r="9" fill="#06B6D4"/>
                  <text fontSize="12" x="320" y="200" textAnchor="middle" fill="#06B6D4">A well-defined</text>
                  <text fontSize="12" x="320" y="215" textAnchor="middle" fill="#06B6D4">problem</text>
                  <text fontSize="12" x="200" y="82" textAnchor="middle" fill="#06B6D4">✦ AI deepens and accelerates</text>
                  <text fontSize="12" x="200" y="97" textAnchor="middle" fill="#06B6D4">problem space exploration</text>
                  <line x1="88" y1="148" x2="148" y2="118" stroke="#7a6a82" strokeWidth="1.5" markerEnd="url(#arr2)" fill="none"/>
                  <line x1="252" y1="118" x2="312" y2="148" stroke="#7a6a82" strokeWidth="1.5" markerEnd="url(#arr2)" fill="none"/>
                  <text fontSize="12" x="80" y="330" textAnchor="middle" fill="#9a8aa2">Discover</text>
                  <text fontSize="12" x="200" y="330" textAnchor="middle" fill="#9a8aa2">Define</text>
                  <text fontSize="12" x="320" y="330" textAnchor="middle" fill="#9a8aa2">Develop</text>
                  <text fontSize="12" x="500" y="330" textAnchor="middle" fill="#9a8aa2">Deliver</text>
                </svg>
              </div>
            </div>

            {/* Process Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <FadeUp>
                <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-1 shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="bg-white/95 rounded-2xl p-8 h-full flex flex-col border-l-4 border-l-transparent group-hover:border-l-[#c4a0cc] transition-all duration-300">
                    <p className="text-5xl font-bold mb-4 leading-none" style={{ fontFamily: "Courier New, monospace", color: "#c4a0cc" }}>01</p>
                    <h3 className="text-xl font-bold text-[#1F1F1F] mb-3" style={{ fontFamily: "Courier New, monospace" }}>Discover</h3>
                    <p className="text-[#4A4268] text-sm leading-relaxed mb-6">
                      {"I start every project with real conversations — not assumptions. Discovery is about understanding the human behind the problem. AI helps me go deeper faster, but the empathy and curiosity? That's trained instinct."}
                    </p>
                    <div className="rounded-2xl overflow-hidden border border-purple-100 shadow-sm mt-auto">
                      <img src="https://i.imgur.com/O1ks0fL.png" alt="Discover phase" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp>
                <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-1 shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="bg-white/95 rounded-2xl p-8 h-full flex flex-col border-l-4 border-l-transparent group-hover:border-l-[#c4a0cc] transition-all duration-300">
                    <p className="text-5xl font-bold mb-4 leading-none" style={{ fontFamily: "Courier New, monospace", color: "#c4a0cc" }}>02</p>
                    <h3 className="text-xl font-bold text-[#1F1F1F] mb-3" style={{ fontFamily: "Courier New, monospace" }}>Define</h3>
                    <p className="text-[#4A4268] text-sm leading-relaxed mb-6">
                      {"This phase looks different every time — and that's the point. A PRD, an executive with a vision, or proper research — a senior designer reads the room and adapts. AI has earned its place here, but how and when depends on the project. When it doesn't fit, I trust my experience."}
                    </p>
                    <div className="rounded-2xl overflow-hidden border border-purple-100 shadow-sm mt-auto">
                      <img src="https://i.imgur.com/koFurpV.png" alt="Define phase" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp>
                <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-1 shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="bg-white/95 rounded-2xl p-8 h-full flex flex-col border-l-4 border-l-transparent group-hover:border-l-[#c4a0cc] transition-all duration-300">
                    <p className="text-5xl font-bold mb-4 leading-none" style={{ fontFamily: "Courier New, monospace", color: "#c4a0cc" }}>03</p>
                    <h3 className="text-xl font-bold text-[#1F1F1F] mb-3" style={{ fontFamily: "Courier New, monospace" }}>Develop</h3>
                    <p className="text-[#4A4268] text-sm leading-relaxed mb-6">
                      {"Ideas get real here. I sketch, prototype, and iterate fast — using AI to expand possibilities and vibe-code early concepts. But taste, intuition, and knowing what's actually worth building? Still human."}
                    </p>
                    <div className="rounded-2xl overflow-hidden border border-purple-100 shadow-sm mt-auto">
                      <img src="https://i.imgur.com/RMnps8j.png" alt="Develop phase" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp>
                <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-1 shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="bg-white/95 rounded-2xl p-8 h-full flex flex-col border-l-4 border-l-transparent group-hover:border-l-[#c4a0cc] transition-all duration-300">
                    <p className="text-5xl font-bold mb-4 leading-none" style={{ fontFamily: "Courier New, monospace", color: "#c4a0cc" }}>04</p>
                    <h3 className="text-xl font-bold text-[#1F1F1F] mb-3" style={{ fontFamily: "Courier New, monospace" }}>Deliver</h3>
                    <p className="text-[#4A4268] text-sm leading-relaxed mb-6">
                      {"A handoff isn't the finish line — I stay involved through implementation. Detailed specs, design system components, documentation dev teams can actually use. And yes, I QA too. Someone has to."}
                    </p>
                    <div className="rounded-2xl overflow-hidden border border-purple-100 shadow-sm mt-auto">
                      <img src="https://i.imgur.com/be2ZxBZ.png" alt="Deliver phase" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* SECTION 5: Bento Grid */}
        <section className="w-full py-20 px-6 bg-transparent">
          <div className="max-w-[1100px] mx-auto">
            <FadeUp>
              <div className="text-center mb-16">
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7B6B9E] mb-3 block">
                  / What I Bring (03)
                </span>
                <h2
                  className="text-4xl md:text-5xl font-bold text-[#1F1F1F]"
                  style={{ fontFamily: "Courier New, monospace" }}
                >
                  Signature Moves
                </h2>
              </div>
            </FadeUp>

            {/* MOBILE: simple stacked cards */}
            <div className="flex flex-col gap-4 md:hidden">
              {/* Clarity in Complexity */}
              <div
                className="rounded-2xl p-6 flex flex-col justify-end shadow-xl relative overflow-hidden"
                style={{
                  backgroundImage: "linear-gradient(rgba(45, 31, 61, 0.65), rgba(45, 31, 61, 0.65)), url('/images/Liquid-Metal-Background-12.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "180px",
                }}
              >
                <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: "Courier New, monospace" }}>
                  Clarity in Complexity
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {"Fragmented systems, competing priorities, impossible timelines — I untangle all of it and design something beautiful that people actually want to use."}
                </p>
              </div>

              {/* Howard */}
              <div className="bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-sm border border-[#E8E4F0]">
                <img
                  src="https://i.imgur.com/rC4Lql2.png"
                  alt="Howard University"
                  className="mb-3"
                  style={{ width: "80px", objectFit: "contain", mixBlendMode: "multiply" }}
                />
                <p className="text-[#7a6a82] text-sm text-center" style={{ fontFamily: "Courier New, monospace" }}>{"BA · French Literature · 2015"}</p>
              </div>

              {/* Remote */}
              <div className="rounded-2xl p-5 flex flex-col justify-center shadow-sm border border-[rgba(240,210,230,0.6)] relative" style={{ background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 50%, #e8d5f0 100%)" }}>
                <span className="absolute top-3 right-3 text-[#5a3e5c]/60 text-lg">📍</span>
                <h3 className="text-[#5a3e5c] font-bold text-lg mb-2" style={{ fontFamily: "Courier New, monospace" }}>Remote by choice.</h3>
                <p className="text-[#7a6a82] text-sm leading-relaxed">NYC, Raleigh, or DMV when the work calls.</p>
              </div>

              {/* I Work Best When */}
              <div
                className="rounded-2xl p-5 flex flex-col gap-2 shadow-sm"
                style={{ background: "rgba(255,255,255,0.80)", border: "2px solid #c4a0cc", boxShadow: "0 0 12px rgba(196,160,204,0.3)" }}
              >
                <div className="flex items-center gap-2">
                  <p className="text-xs font-bold tracking-widest uppercase text-[#7a6a82]" style={{ fontFamily: "Courier New, monospace" }}>I Work Best When</p>
                  <span className="text-base rotate-12">☕</span>
                </div>
                <p className="text-[#5a3e5c] text-sm leading-relaxed">{"Full creative range, a little trust, good snacks, and an almond milk latte. That's the formula."}</p>
              </div>

              {/* My Tools */}
              <div className="bg-[#2d1f3d] rounded-2xl p-5 flex flex-col shadow-xl">
                <p className="text-xs font-bold tracking-widest uppercase text-white/90 mb-4" style={{ fontFamily: "Courier New, monospace" }}>My Tools</p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: "Figma", src: "https://cdn.simpleicons.org/figma/ffffff" },
                    { name: "Framer", src: "https://cdn.simpleicons.org/framer/ffffff" },
                    { name: "v0", src: "https://cdn.simpleicons.org/vercel/ffffff" },
                    { name: "Notion", src: "https://cdn.simpleicons.org/notion/ffffff" },
                    { name: "Claude", src: "https://cdn.simpleicons.org/anthropic/ffffff" },
                    { name: "n8n", src: "https://cdn.simpleicons.org/n8n/ffffff" },
                  ].map((tool) => (
                    <div key={tool.name} className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}>
                        <img src={tool.src} alt={tool.name} className="w-7 h-7" />
                      </div>
                      <span className="text-white/90 text-xs font-medium" style={{ fontFamily: "Courier New, monospace" }}>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Currently Into */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 flex flex-col gap-3 shadow-sm border border-[#E8E4F0]">
                <p className="text-xs font-bold tracking-widest uppercase text-[#7B6B9E]" style={{ fontFamily: "Courier New, monospace" }}>Currently Into</p>
                <div className="flex flex-wrap gap-2">
                  {["Vibecoding", "AI Agents", "Hot Sculpt", "Voice Design", "Peptides", "The Body Keeps the Score"].map((item) => (
                    <span key={item} className="text-xs bg-[#2d1f3d] text-white/90 px-3 py-1.5 rounded-full font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* DESKTOP: original bento grid */}
            <FadeUp className="relative hidden md:grid grid-cols-6 gap-4 auto-rows-[140px]">
              <span className="absolute -top-3 left-[30%] text-[#f5e6d3] text-lg rotate-12 z-20 pointer-events-none">✦</span>
              <span className="absolute top-[45%] right-[5%] text-[#f0d9e8] text-sm -rotate-6 z-20 pointer-events-none">✦</span>
              <span className="absolute bottom-[15%] left-[48%] text-[#e8d5f0] text-base rotate-45 z-20 pointer-events-none">✦</span>

              <div
                className="col-span-2 row-span-2 rounded-2xl p-6 flex flex-col justify-end shadow-xl relative overflow-hidden hover:-translate-y-1 transition-all duration-300"
                style={{
                  backgroundImage: "linear-gradient(rgba(45, 31, 61, 0.65), rgba(45, 31, 61, 0.65)), url('/images/Liquid-Metal-Background-12.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <span className="absolute top-4 right-4 text-[24px] rotate-12" style={{ color: "#f5e6d3" }}>✦</span>
                <span className="absolute top-12 right-12 text-[18px] -rotate-6" style={{ color: "#f5e6d3" }}>✦</span>
                <span className="absolute top-6 left-6 text-[32px] rotate-45" style={{ color: "#f5e6d3" }}>✦</span>
                <h3 className="text-white font-bold text-xl mb-3 relative z-10" style={{ fontFamily: "Courier New, monospace" }}>Clarity in Complexity</h3>
                <p className="text-white/90 text-sm leading-relaxed relative z-10">{"Fragmented systems, competing priorities, impossible timelines — I untangle all of it and design something beautiful that people actually want to use."}</p>
              </div>

              <div className="col-span-2 bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-sm border border-[#E8E4F0] relative hover:-translate-y-1 transition-all duration-300">
                <img src="https://i.imgur.com/rC4Lql2.png" alt="Howard University" className="mb-3" style={{ width: "80px", objectFit: "contain", mixBlendMode: "multiply" }} />
                <p className="text-[#7a6a82] text-sm text-center" style={{ fontFamily: "Courier New, monospace" }}>{"BA · French Literature · 2015"}</p>
              </div>

              <div className="col-span-2 rounded-2xl p-5 flex flex-col justify-center shadow-sm border border-[rgba(240,210,230,0.6)] relative hover:-translate-y-1 transition-all duration-300" style={{ background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 50%, #e8d5f0 100%)" }}>
                <span className="absolute top-3 right-3 text-[#5a3e5c]/60 text-lg">📍</span>
                <h3 className="text-[#5a3e5c] font-bold text-lg mb-2" style={{ fontFamily: "Courier New, monospace" }}>Remote by choice.</h3>
                <p className="text-[#7a6a82] text-sm leading-relaxed">NYC, Raleigh, or DMV when the work calls.</p>
              </div>

              <div className="col-span-2 rounded-2xl p-5 flex flex-col justify-between shadow-sm relative hover:-translate-y-1 transition-all duration-300" style={{ background: "rgba(255,255,255,0.80)", border: "2px solid #c4a0cc", boxShadow: "0 0 12px rgba(196,160,204,0.3)" }}>
                <div className="flex items-center gap-2">
                  <p className="text-xs font-bold tracking-widest uppercase text-[#7a6a82]" style={{ fontFamily: "Courier New, monospace" }}>I Work Best When</p>
                  <span className="text-base rotate-12">☕</span>
                </div>
                <p className="text-[#5a3e5c] text-sm leading-relaxed mt-2 mb-auto">{"Full creative range, a little trust, good snacks, and an almond milk latte. That's the formula."}</p>
              </div>

              <div className="col-span-2 row-span-2 bg-[#2d1f3d] rounded-2xl p-5 flex flex-col shadow-xl relative z-10 hover:-translate-y-1 transition-all duration-300">
                <p className="text-xs font-bold tracking-widest uppercase text-white/90 mb-4" style={{ fontFamily: "Courier New, monospace" }}>My Tools</p>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {[
                    { name: "Figma", src: "https://cdn.simpleicons.org/figma/ffffff" },
                    { name: "Framer", src: "https://cdn.simpleicons.org/framer/ffffff" },
                    { name: "v0", src: "https://cdn.simpleicons.org/vercel/ffffff" },
                    { name: "Notion", src: "https://cdn.simpleicons.org/notion/ffffff" },
                    { name: "Claude", src: "https://cdn.simpleicons.org/anthropic/ffffff" },
                    { name: "n8n", src: "https://cdn.simpleicons.org/n8n/ffffff" },
                  ].map((tool) => (
                    <div key={tool.name} className="flex flex-col items-center gap-1.5">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)" }}>
                        <img src={tool.src} alt={tool.name} className="w-7 h-7" />
                      </div>
                      <span className="text-white/90 text-xs font-medium" style={{ fontFamily: "Courier New, monospace" }}>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-4 bg-white/80 backdrop-blur-sm rounded-2xl p-5 flex flex-col justify-center gap-3 shadow-sm border border-[#E8E4F0] relative hover:-translate-y-1 transition-all duration-300">
                <div className="relative">
                  <p className="text-xs font-bold tracking-widest uppercase text-[#7B6B9E]" style={{ fontFamily: "Courier New, monospace" }}>Currently Into</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Vibecoding", "AI Agents", "Hot Sculpt", "Voice Design", "Peptides", "The Body Keeps the Score"].map((item) => (
                    <span key={item} className="text-xs bg-[#2d1f3d] text-white/90 px-3 py-1.5 rounded-full font-medium">{item}</span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* SECTION 6: Experience Timeline */}
        <section className="w-full py-20 px-6 bg-transparent">
          <div className="max-w-[1000px] mx-auto">
            <FadeUp>
              <div className="text-center mb-16">
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7B6B9E] mb-3 block">
                  / The Journey (04)
                </span>
                <h2
                  className="text-4xl md:text-5xl font-bold text-[#1F1F1F]"
                  style={{ fontFamily: "Courier New, monospace" }}
                >
                  Experience
                </h2>
              </div>
            </FadeUp>

            {/* MOBILE: clean single-column timeline */}
            <div className="flex flex-col gap-6 md:hidden">
              {[
                { role: "Founder & Lead UX Designer", company: "The Golden Hour Agency", period: "June 2024 – Present", highlight: "Human-centered design, UX/UI, and innovative digital solutions" },
                { role: "Associate Director, UX/UI Design", company: "Vanderbilt University", period: "Oct 2022 – March 2024", highlight: "Led strategic UX overhaul for 8 major university websites" },
                { role: "Senior UX/UI Designer", company: "Delta Airlines", period: "Jan 2022 – Sep 2022", highlight: "Delta Vacations booking flows + in-flight Wi-Fi portal" },
                { role: "UX Design Architect", company: "US Bank", period: "Sep 2021 – Jan 2022", highlight: "Cross-segment customer journey maps + IA for financial products" },
                { role: "UX Designer", company: "Neighborly", period: "Jan 2021 – Sep 2021", highlight: "Design system + 25+ screens for home services platform" },
                { role: "Digital Production Designer", company: "Coca-Cola", period: "Oct 2019 – Sep 2020", highlight: "500+ prototypes for Freestyle kiosk UX serving 800K consumers" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold self-start" style={{ background: "linear-gradient(135deg, #f5e6d3, #f0d9e8, #e8d5f0)", color: "#5a3e5c", fontFamily: "Courier New, monospace" }}>
                    {item.period}
                  </span>
                  <h3 className="font-bold text-lg text-[#1F1F1F]" style={{ fontFamily: "Courier New, monospace" }}>{item.role}</h3>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#E8E4F0] shadow-sm">
                    <p className="text-[#7a6a82] text-sm font-medium mb-1">{item.company}</p>
                    <p className="text-[#4A4268] text-sm">{item.highlight}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* DESKTOP: zigzag timeline unchanged */}
            <StaggerReveal className="relative hidden md:block">
              {/* Entry 1: Golden Hour Agency */}
              <div className="grid grid-cols-[1fr_40px_1fr] items-start gap-4 mb-16 relative">
                <span className="absolute -top-2 left-[45%] text-[#f5e6d3] text-sm rotate-12">✦</span>
                <div className="relative flex flex-col items-end">
                  <div className="relative inline-block pb-20 pl-16">
                    <img src="https://i.imgur.com/eKHdyfe.png" className="absolute bottom-0 left-0 w-28 h-28 opacity-20 z-0" alt="" />
                    <span className="relative z-10 px-4 py-1.5 rounded-full text-xs font-bold inline-block" style={{ background: "linear-gradient(135deg, #f5e6d3, #f0d9e8, #e8d5f0)", color: "#5a3e5c", fontFamily: "Courier New, monospace" }}>June 2024 – Present</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="absolute top-6 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#c4a0cc] opacity-40" style={{ height: "calc(100% + 64px)" }} />
                  <div className="w-3 h-3 rounded-full bg-[#c4a0cc] z-10" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1F1F1F] mb-2" style={{ fontFamily: "Courier New, monospace" }}>Founder & Lead UX Designer</h3>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8E4F0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <p className="text-[#7a6a82] text-sm font-medium mb-1">The Golden Hour Agency</p>
                    <p className="text-[#4A4268] text-sm">Human-centered design, UX/UI, and innovative digital solutions</p>
                  </div>
                </div>
              </div>

              {/* Entry 2: Vanderbilt */}
              <div className="grid grid-cols-[1fr_40px_1fr] items-start gap-4 mb-16 relative">
                <span className="absolute top-8 right-[10%] text-[#e8d5f0] text-xs -rotate-6">✦</span>
                <div className="md:text-right">
                  <h3 className="font-bold text-lg text-[#1F1F1F] mb-2" style={{ fontFamily: "Courier New, monospace" }}>Associate Director, UX/UI Design</h3>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8E4F0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <p className="text-[#7a6a82] text-sm font-medium mb-1">Vanderbilt University</p>
                    <p className="text-[#4A4268] text-sm">Led strategic UX overhaul for 8 major university websites</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="absolute top-6 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#c4a0cc] opacity-40" style={{ height: "calc(100% + 64px)" }} />
                  <div className="w-3 h-3 rounded-full bg-[#c4a0cc] z-10" />
                </div>
                <div className="relative flex flex-col items-start">
                  <div className="relative inline-block pb-20 pr-16">
                    <img src="https://i.imgur.com/P0bmOd9.png" className="absolute bottom-0 right-0 w-28 h-28 opacity-20 z-0" alt="" />
                    <span className="relative z-10 px-4 py-1.5 rounded-full text-xs font-bold inline-block" style={{ background: "linear-gradient(135deg, #f5e6d3, #f0d9e8, #e8d5f0)", color: "#5a3e5c", fontFamily: "Courier New, monospace" }}>Oct 2022 – March 2024</span>
                  </div>
                </div>
              </div>

              {/* Entry 3: Delta */}
              <div className="grid grid-cols-[1fr_40px_1fr] items-start gap-4 mb-16 relative">
                <span className="absolute top-1/2 left-[30%] text-[#f0d9e8] text-[10px] rotate-45">✦</span>
                <div className="relative flex flex-col items-end">
                  <div className="relative inline-block pb-20 pl-16">
                    <img src="https://i.imgur.com/019ucuM.png" className="absolute bottom-0 left-0 w-28 h-28 opacity-20 z-0" alt="" />
                    <span className="relative z-10 px-4 py-1.5 rounded-full text-xs font-bold inline-block" style={{ background: "linear-gradient(135deg, #f5e6d3, #f0d9e8, #e8d5f0)", color: "#5a3e5c", fontFamily: "Courier New, monospace" }}>Jan 2022 – Sep 2022</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="absolute top-6 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#c4a0cc] opacity-40" style={{ height: "calc(100% + 64px)" }} />
                  <div className="w-3 h-3 rounded-full bg-[#c4a0cc] z-10" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1F1F1F] mb-2" style={{ fontFamily: "Courier New, monospace" }}>Senior UX/UI Designer</h3>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8E4F0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <p className="text-[#7a6a82] text-sm font-medium mb-1">Delta Airlines</p>
                    <p className="text-[#4A4268] text-sm">Delta Vacations booking flows + in-flight Wi-Fi portal</p>
                  </div>
                </div>
              </div>

              {/* Entry 4: US Bank */}
              <div className="grid grid-cols-[1fr_40px_1fr] items-start gap-4 mb-16 relative">
                <span className="absolute -top-3 right-[15%] text-[#f5e6d3] text-sm rotate-12">✦</span>
                <div className="md:text-right">
                  <h3 className="font-bold text-lg text-[#1F1F1F] mb-2" style={{ fontFamily: "Courier New, monospace" }}>UX Design Architect</h3>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8E4F0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <p className="text-[#7a6a82] text-sm font-medium mb-1">US Bank</p>
                    <p className="text-[#4A4268] text-sm">Cross-segment customer journey maps + IA for financial products</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="absolute top-6 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#c4a0cc] opacity-40" style={{ height: "calc(100% + 64px)" }} />
                  <div className="w-3 h-3 rounded-full bg-[#c4a0cc] z-10" />
                </div>
                <div className="relative flex flex-col items-start">
                  <div className="relative inline-block pb-20 pr-16">
                    <img src="https://i.imgur.com/CTIZIT4.png" className="absolute bottom-0 right-0 w-28 h-28 opacity-20 z-0" alt="" />
                    <span className="relative z-10 px-4 py-1.5 rounded-full text-xs font-bold inline-block" style={{ background: "linear-gradient(135deg, #f5e6d3, #f0d9e8, #e8d5f0)", color: "#5a3e5c", fontFamily: "Courier New, monospace" }}>Sep 2021 – Jan 2022</span>
                  </div>
                </div>
              </div>

              {/* Entry 5: Neighborly */}
              <div className="grid grid-cols-[1fr_40px_1fr] items-start gap-4 mb-16 relative">
                <span className="absolute bottom-4 left-[40%] text-[#e8d5f0] text-xs -rotate-12">✦</span>
                <div className="relative flex flex-col items-end">
                  <div className="relative inline-block pb-20 pl-16">
                    <img src="https://i.imgur.com/Z4nlmPW.png" className="absolute bottom-0 left-0 w-28 h-28 opacity-20 z-0" alt="" />
                    <span className="relative z-10 px-4 py-1.5 rounded-full text-xs font-bold inline-block" style={{ background: "linear-gradient(135deg, #f5e6d3, #f0d9e8, #e8d5f0)", color: "#5a3e5c", fontFamily: "Courier New, monospace" }}>Jan 2021 – Sep 2021</span>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="absolute top-6 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#c4a0cc] opacity-40" style={{ height: "calc(100% + 64px)" }} />
                  <div className="w-3 h-3 rounded-full bg-[#c4a0cc] z-10" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1F1F1F] mb-2" style={{ fontFamily: "Courier New, monospace" }}>UX Designer</h3>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8E4F0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <p className="text-[#7a6a82] text-sm font-medium mb-1">Neighborly</p>
                    <p className="text-[#4A4268] text-sm">Design system + 25+ screens for home services platform</p>
                  </div>
                </div>
              </div>

              {/* Entry 6: Coca-Cola */}
              <div className="grid grid-cols-[1fr_40px_1fr] items-start gap-4 mb-16 relative">
                <span className="absolute top-2 left-[5%] text-[#f0d9e8] text-[10px] rotate-45">✦</span>
                <span className="absolute -bottom-2 right-[20%] text-[#f5e6d3] text-xs -rotate-6">✦</span>
                <div className="md:text-right">
                  <h3 className="font-bold text-lg text-[#1F1F1F] mb-2" style={{ fontFamily: "Courier New, monospace" }}>Digital Production Designer</h3>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8E4F0] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <p className="text-[#7a6a82] text-sm font-medium mb-1">Coca-Cola</p>
                    <p className="text-[#4A4268] text-sm">500+ prototypes for Freestyle kiosk UX serving 800K consumers</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#c4a0cc] z-10" />
                </div>
                <div className="relative flex flex-col items-start">
                  <div className="relative inline-block pb-20 pr-16">
                    <img src="https://i.imgur.com/OORP0h7.png" className="absolute bottom-0 right-0 w-28 h-28 opacity-20 z-0" alt="" />
                    <span className="relative z-10 px-4 py-1.5 rounded-full text-xs font-bold inline-block" style={{ background: "linear-gradient(135deg, #f5e6d3, #f0d9e8, #e8d5f0)", color: "#5a3e5c", fontFamily: "Courier New, monospace" }}>Oct 2019 – Sep 2020</span>
                  </div>
                </div>
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* SECTION 7: CTA */}
        <section className="w-full py-20 px-6" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(255,255,255,0.3)" }}>
          <div className="max-w-[800px] mx-auto text-center">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Courier New, monospace", color: "#5a3e5c" }}>
                Want to work together?
              </h2>
              <p className="mb-10 max-w-md mx-auto" style={{ color: "#7a6a82" }}>
                {"I'm always open to new opportunities, collaborations, or just a good design conversation."}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://drive.google.com/uc?export=download&id=1uxzTJJR4Bauqo_W9MkSiixViFqwMMtbE" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <button className="rounded-full px-8 py-3 font-bold transition-all duration-200 border active:-translate-y-0.5" style={{ borderColor: "#5a3e5c", color: "#5a3e5c", background: "transparent" }}>
                    <span
                      onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
                      onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
                      style={{ fontFamily: "Courier New, monospace", textDecoration: "none" }}
                    >
                      Download Resume
                    </span>
                  </button>
                </a>
                <Link href="/contact" style={{ textDecoration: "none" }}>
                  <button className="rounded-full px-8 py-3 font-bold transition-all duration-200 flex items-center gap-2 active:-translate-y-0.5" style={{ background: "#e8d5f0", color: "#5a3e5c", border: "1.5px solid #c4a0cc", boxShadow: "0 2px 10px rgba(196,160,204,0.25)" }}>
                    <span
                      onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
                      onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
                      style={{ textDecoration: "none" }}
                    >
                      {"Let's Talk"}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

      </div>
    </MySpaceLayout>
  )
}
