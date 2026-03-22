"use client"

import { useState, useEffect } from "react"
import { Mail, UserPlus, MessageCircle, Share2, Users, Star, Award, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  const [isWorkOpen, setIsWorkOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [activePanel, setActivePanel] = useState("vanderbilt-navigation")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const topProjects = [
    { id: 1, name: "Big VU Nav", href: "/work/vanderbilt-navigation", logo: "https://i.imgur.com/AlGkbfy.png" },
    { id: 2, name: "Stevannah", href: "/work/sold-by-stevannah", logo: "https://i.imgur.com/k8fQ3G1.png" },
    { id: 3, name: "Blair School", href: "/work/blair-school", logo: "https://i.imgur.com/ugKfb42.png" },
    { id: 4, name: "CSV Stack", href: "/work/csv-stack-ai", logo: "https://i.imgur.com/XKGR9YL.png" },
    { id: 5, name: "US Bank", href: "/work/us-bank", logo: "https://i.imgur.com/AI9WqsI.png" },
    { id: 6, name: "Coca-Cola", href: "/work/coca-cola", logo: "https://i.imgur.com/CDeCUfv.png" },
    { id: 7, name: "Delta", href: "/work/delta", logo: "https://i.imgur.com/pbO7RwH.png" },
    { id: 8, name: "Neighborly", href: "/work/neighborly", logo: "https://i.imgur.com/1zJsfDl.png" },
  ]

  const featuredProjects = [
    {
      id: "vanderbilt-navigation",
      year: "2024",
      title: "Vanderbilt University — Big VU Navigation Redesign",
      subtitle: "Led Vanderbilt's navigation through innovative ecosystem design",
      description: "Unified the digital experience for 13,000+ Vanderbilt students, faculty, and staff through strategic navigation design.",
      mainImage: "from-[#F5F3EF] via-[#E0D5C0] to-[#CFAE70]",
      tags: [
        { name: "Higher Ed", bg: "bg-yellow-100", text: "text-yellow-800" },
        { name: "Navigation Design", bg: "bg-blue-100", text: "text-blue-800" },
      ],
      impact: "Increased engagement through refined visual hierarchy",
    },
    {
      id: "sold-by-stevannah",
      year: "2025",
      title: "Sold by Stevannah — Luxury Real Estate Website",
      subtitle: "Creating an elegant digital presence for luxury real estate",
      description: "Designed a luxury real estate website for Nashville's high-end market — AI-powered lead capture, dark mode aesthetics, sophisticated visuals.",
      mainImage: "from-[#F8D4D4] via-[#E4BEBA] to-[#CAA29A]",
      tags: [
        { name: "Real Estate", bg: "bg-pink-100", text: "text-pink-800" },
        { name: "Dark Design", bg: "bg-purple-100", text: "text-purple-800" },
        { name: "Branding", bg: "bg-orange-100", text: "text-orange-800" },
      ],
      impact: "Increased engagement through sophisticated design",
    },
    {
      id: "blair-school",
      year: "2024",
      title: "Blair School of Music — Website Redesign",
      subtitle: "Bringing Vanderbilt's premier music school to life digitally",
      description: "Redesigned Blair's website balancing Vanderbilt's brand with Blair's creative culture — accessibility and student discovery at the core.",
      mainImage: "from-[#f3e8ff] via-[#e9d5ff] to-[#d8b4fe]",
      tags: [
        { name: "Education", bg: "bg-purple-100", text: "text-purple-800" },
        { name: "Information Design", bg: "bg-blue-100", text: "text-blue-800" },
        { name: "WCAG AA", bg: "bg-pink-100", text: "text-pink-800" },
      ],
      impact: "Creative accessibility showcase",
    },
    {
      id: "csv-stack-ai",
      year: "2025",
      title: "CSV Stack AI — SaaS Landing Experience",
      subtitle: "Human-centered UX for a technical AI product",
      description: "Designed the brand and web experience for a CSV compliance platform — making complex validation concepts clear for engineers and decision-makers.",
      mainImage: "from-[#4a6d8c] via-[#6b8fa8] to-[#8bafc7]",
      tags: [
        { name: "SaaS", bg: "bg-blue-100", text: "text-blue-800" },
        { name: "AI Product", bg: "bg-purple-100", text: "text-purple-800" },
        { name: "Conversions", bg: "bg-cyan-100", text: "text-cyan-800" },
      ],
      impact: "Clarity in complexity through smart UX",
    },
  ]

  const comments = [
    {
      avatar: "from-purple-400 to-pink-400",
      name: "Deborah Farese — Sr. Director of Digital Experience, Vanderbilt",
      date: "Posted on October 3, 2024",
      text: "Asha brought a level of strategic thinking to our navigation redesign that I didn't expect. She didn't just solve the UX problem — she helped us see the bigger picture across the entire ecosystem. Incredibly collaborative and always advocating for the user.",
    },
    {
      avatar: "from-blue-400 to-purple-500",
      name: "Albert Crews — Exec. Director of Strategy & Marketing, Vanderbilt",
      date: "Posted on September 18, 2024",
      text: "Working with Asha on the Big VU project was a masterclass in cross-functional design leadership. She navigated complex stakeholder needs with grace and delivered a visual system that actually scaled. She's the kind of designer who makes the whole team better.",
    },
    {
      avatar: "from-cyan-400 to-purple-400",
      name: "Shahee Parker — CEO & Founder, CSV Stack",
      date: "Posted on August 7, 2024",
      text: "Asha translated something really technical into something people actually want to use. She asked the right questions, pushed back when needed, and delivered a landing experience that speaks to both our technical users and the execs holding the budget. Huge value-add.",
    },
    {
      avatar: "from-pink-400 to-orange-400",
      name: "Stevannah Middleton — Owner, Sold by Stevannah",
      date: "Posted on July 22, 2024",
      text: "I came to Asha with a vision and she exceeded it. My site looks exactly like the brand I've been building — luxurious, warm, and unforgettable. Clients comment on it constantly. If you need someone who truly listens AND delivers, she's your girl.",
    },
    {
      avatar: "from-green-400 to-cyan-500",
      name: "Brian Amador — UX Lead, Neighborly",
      date: "Posted on May 14, 2024",
      text: "Asha is the real deal. Her accessibility work on the Neighborly redesign was thorough, thoughtful, and genuinely moved the needle for our users. She brought strong design system thinking and made sure nothing slipped through the cracks. Would work with her again in a heartbeat.",
    },
  ]

  const cardShell = "bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-1 shadow-xl"
  const cardInner = "bg-white/95 rounded-lg p-4"

  const projectImage = (id: string) => {
    if (id === "vanderbilt-navigation") return "https://i.imgur.com/qreL6eJ.png"
    if (id === "sold-by-stevannah") return "https://i.imgur.com/8O417Sy.png"
    if (id === "csv-stack-ai") return "https://i.imgur.com/W5rPp7h.png"
    return "https://i.imgur.com/FSCVOEt.png"
  }

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url('https://i.imgur.com/4zPg5S3.jpeg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(200, 200, 210, 0.70)" }}
      />
      <div className="relative">
        <Navigation />

        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* LEFT SIDEBAR */}
              <div className="lg:col-span-1 space-y-4">

                {/* Profile Card */}
                <div className={cardShell}>
                  <div className={cardInner}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 relative">
                        <div className="w-[220px] rounded-lg overflow-hidden border-4 border-[#e8d5f0] bg-white p-2 rotate-2 hover:rotate-0 transition-transform duration-300">
                          <Image
                            src="https://i.imgur.com/nxG1hjN.png"
                            alt="Asha Cobb-Jones"
                            width={200}
                            height={600}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                        <span className="absolute -top-2 -right-2 text-2xl text-[#c4a0cc]">✦</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl font-bold" style={{ fontFamily: "Courier New, monospace", color: "#5a3e5c" }}>
                          Asha Cobb-Jones
                        </h2>
                        <p className="text-xs text-gray-500 mt-1">HARRISBURG $ 4EVER, now BROOKLYN</p>
                        <p className="text-xs text-gray-500">new york, Pennsylvania, United States</p>
                        <p className="text-xs text-gray-400 mt-2">Profile Views: <span className="font-bold text-gray-600">1810</span></p>
                        <p className="text-xs text-gray-400">Last Login: 2/20/2026</p>
                      </div>
                    </div>
                    <div className="text-center mt-3 text-xs">
                      <span className="text-gray-500">View My: </span>
                      <a href="https://www.linkedin.com/in/ashacobb-jones/" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: "#6b7fd4" }}>LinkedIn</a>
                      <span className="text-gray-300"> | </span>
                      <a href="https://drive.google.com/uc?export=download&id=1uxzTJJR4Bauqo_W9MkSiixViFqwMMtbE" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: "#6b7fd4" }}>Resume</a>
                      <span className="text-gray-300"> | </span>
                      <Link href="/work" className="hover:underline" style={{ color: "#6b7fd4" }}>Portfolio</Link>
                    </div>
                  </div>
                </div>

                {/* Contacting Section */}
                <div className={cardShell}>
                  <div className={cardInner}>
                    <h3 className="font-bold mb-3" style={{ fontFamily: "Courier New, monospace", fontSize: "1.1rem", color: "#5a3e5c", lineHeight: 1.4 }}>
                      Contacting Asha Cobb-Jones
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        { href: "/contact", icon: <Mail size={14} />, label: "Send Message", external: false },
                        { href: "https://www.linkedin.com/in/ashacobb-jones/", icon: <UserPlus size={14} />, label: "Connect on LinkedIn", external: true },
                        { href: "mailto:asha.cobbjones@gmail.com", icon: <MessageCircle size={14} />, label: "Email Me", external: true },
                        { href: "https://www.linkedin.com/in/ashacobb-jones/", icon: <Share2 size={14} />, label: "Share Profile", external: true },
                        { href: "/work", icon: <Star size={14} />, label: "View My Work", external: false },
                        { href: "/about", icon: <Users size={14} />, label: "About Me", external: false },
                        { href: "/work", icon: <Award size={14} />, label: "Case Studies", external: false },
                        { href: "https://drive.google.com/uc?export=download&id=1uxzTJJR4Bauqo_W9MkSiixViFqwMMtbE", icon: <Download size={14} />, label: "Download Resume", external: true },
                      ].map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          download={item.label === "Download Resume" ? true : undefined}
                          className="flex items-center gap-2 hover:underline"
                          style={{ color: "#6b7fd4" }}
                        >
                          {item.icon} {item.label}
                        </a>
                      ))}
                    </div>
                    <p className="text-xs mt-3 text-center" style={{ color: "#6b7fd4" }}>www.myspace.com/ashacobbjonesux</p>
                    <Link
                      href="/contact"
                      className="block w-full mt-3 py-2 rounded-full font-bold text-sm text-center transition-all duration-200 active:-translate-y-0.5"
                      style={{ background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 50%, #e8d5f0 100%)", color: "#5a3e5c", border: "1px solid rgba(240,210,230,0.6)", boxShadow: "0 2px 12px rgba(200,160,200,0.2)", textDecoration: "none" }}
                    >
                      <span
                        onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
                        onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
                        style={{ textDecoration: "none" }}
                      >
                        Send Message
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Asha's Details */}
                <div className={cardShell}>
                  <div className={cardInner}>
                    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "Courier New, monospace", color: "#5a3e5c" }}>
                      Asha's Details
                    </h3>
                    <div className="space-y-2 text-xs">
                      {[
                        { label: "Status", value: "Designing experiences" },
                        { label: "Here for", value: "UX strategy + systems" },
                        { label: "Hometown", value: "Harrisburg, PA + open to NC, DC, or NYC 🗽" },
                        { label: "Zodiac", value: "Aries ♈" },
                        { label: "Coffee or Tea", value: "Lattes and Green Tea!" },
                        { label: "Occupation", value: "Senior UX Designer" },
                      ].map((item) => (
                        <div key={item.label}>
                          <span className="font-medium" style={{ color: "#7a6a82" }}>{item.label}:</span>{" "}
                          <span className="text-gray-600">{item.value}</span>
                        </div>
                      ))}
                      <div>
                        <span className="font-medium" style={{ color: "#7a6a82" }}>Influences:</span>{" "}
                        <span className="text-gray-600">The Neptunes + N.E.R.D. 🖖🏽, Jadakiss, Biggie, Tupac, Coldplay, Missy + Timbaland, Kanye West, John Mayer, Queen, My Chemical Romance, Jodeci, Al Green, David Ruffin, Prince, Michael, Q tip, Tribe Called Quest, and all hip hop from the 80s until about 1999...then shit started goin down hill lol</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className={cardShell}>
                  <div className={cardInner}>
                    <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "Courier New, monospace", color: "#5a3e5c" }}>
                      Most Curious & Creative
                    </h3>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-400 text-white">Curious</span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold border" style={{ color: "#7a6a82", borderColor: "#e8d5f0", background: "rgba(240,210,230,0.2)" }}>Creative</span>
                    </div>
                  </div>
                </div>

                {/* Currently Vibing To */}
                <div className={cardShell}>
                  <div className={cardInner}>
                    <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "Courier New, monospace", color: "#5a3e5c" }}>
                      🎵 Currently Vibing To
                    </h3>
                    <div className="rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="166"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1145373478&color=%23c4a0cc&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
                      />
                    </div>
                  </div>
                </div>

                {/* Top 8 Projects */}
                <div className={cardShell}>
                  <div className={cardInner}>
                    <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "Courier New, monospace", color: "#5a3e5c" }}>
                      Top 8 Projects
                    </h3>
                    <div className="grid grid-cols-4 gap-2">
                      {topProjects.map((project) => (
                        <Link key={project.id} href={project.href} scroll={true} className="flex flex-col items-center no-underline">
                          <div className="w-full aspect-square rounded-lg bg-white cursor-pointer hover:scale-110 transition-transform flex items-center justify-center overflow-hidden" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.10)" }}>
                            <img src={project.logo} alt={project.name} className="w-full h-full object-contain p-1" />
                          </div>
                          <p className="text-[10px] text-gray-500 text-center mt-1 leading-tight">{project.name}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Design Friends */}
                <div className={cardShell}>
                  <div className={cardInner}>
                    <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "Courier New, monospace", color: "#5a3e5c" }}>
                      Design Friends
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Deborah", "Albert", "Brian", "Stevannah", "Shahee"].map((friend) => (
                        <a key={friend} href="#" className="text-sm hover:underline" style={{ color: "#6b7fd4" }}>
                          {friend}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT CONTENT AREA */}
              <div className="lg:col-span-2 space-y-6">

                {/* Welcome Card */}
                <HeroFadeUp>
                  <div className={cardShell}>
                    <div className="bg-white/95 rounded-lg p-8">
                      <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: "Courier New, monospace", color: "#5a3e5c" }}>
                        Welcome to My Digital Space!
                      </h1>
                      <p className="text-lg font-bold text-gray-600 mb-4">Where pixels meet purpose and users come first</p>
                      <p className="text-gray-500 mb-6">
                        I'm a designer with a love for storytelling, interaction, and creating digital spaces that feel both expressive and intentional. I care deeply about the user, the integrity of good design, and the measurable impact great UX has on a business.This portfolio is a window into my work, my process, and the way I see design. Remote-friendly and open to relocating to NYC/NJ, NC, or the Washington DC area.
                      </p>
                      <Link
                        href="/work"
                        scroll={true}
                        className="inline-flex items-center gap-1 px-6 py-2 rounded-full font-bold transition-all duration-200 text-sm active:-translate-y-0.5"
                        style={{ background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 50%, #e8d5f0 100%)", color: "#5a3e5c", border: "1px solid rgba(240,210,230,0.6)", boxShadow: "0 2px 12px rgba(200,160,200,0.2)", textDecoration: "none" }}
                      >
                        <span style={{ textDecoration: "none" }} onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")} onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}>View My Work →</span>
                      </Link>
                    </div>
                  </div>
                </HeroFadeUp>

                {/* Featured Case Studies */}
                <FadeUp>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold" style={{ fontFamily: "Courier New, monospace", color: "#5a3e5c" }}>
                      Featured Case Studies
                    </h2>

                    {/* MOBILE: fully expanded stacked cards, no accordion */}
                    <div className="flex flex-col gap-4 md:hidden">
                      {featuredProjects.map((project) => (
                        <div key={project.id} className={cardShell}>
                          <div className="bg-white/95 rounded-lg overflow-hidden">
                            <div className="h-44 overflow-hidden">
                              <img
                                src={projectImage(project.id)}
                                alt={project.title}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                            <div className="p-4 space-y-2">
                              <p className="text-xs text-gray-400 uppercase tracking-widest">{project.year} · Case Study</p>
                              <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: "Courier New, monospace" }}>{project.title}</h3>
                              <p className="font-medium text-sm" style={{ color: "#7a6a82" }}>{project.subtitle}</p>
                              <p className="text-gray-500 text-sm">{project.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                  <span key={tag.name} className={"px-2 py-1 rounded text-xs font-medium " + tag.bg + " " + tag.text}>{tag.name}</span>
                                ))}
                              </div>
                              <Link
                                href={"/work/" + project.id}
                                scroll={true}
                                className="inline-block mt-2 px-4 py-2 rounded-full text-sm font-bold no-underline"
                                style={{
                                  background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 50%, #e8d5f0 100%)",
                                  color: "#5a3e5c",
                                  border: "1px solid rgba(240,210,230,0.6)",
                                }}
                              >
                                View Case Study →
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* DESKTOP: horizontal accordion */}
                    <div className="hidden md:block">
                      <div className={cardShell}>
                        <div className="flex gap-2 rounded-lg overflow-hidden h-[500px]">
                          {featuredProjects.map((project) => {
                            const isActive = activePanel === project.id
                            return (
                              <div
                                key={project.id}
                                className={
                                  "relative overflow-hidden rounded-lg transition-all duration-500 ease-in-out " +
                                  (isActive ? "flex-[4]" : "flex-[0.4] cursor-pointer hover:brightness-110")
                                }
                                onClick={() => !isActive && setActivePanel(project.id)}
                              >
                                {!isActive && (
                                  <div className={"w-full h-full bg-gradient-to-br " + project.mainImage + " flex items-center justify-center"}>
                                    <span
                                      className="font-bold text-sm whitespace-nowrap"
                                      style={{ fontFamily: "Courier New, monospace", color: "#5a3e5c", writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                                    >
                                      {project.title}
                                    </span>
                                  </div>
                                )}
                                {isActive && (
                                  <div className="flex h-full w-full">
                                    <div className="w-3/5 h-full relative flex-shrink-0 overflow-hidden">
                                      <img
                                        src={projectImage(project.id)}
                                        alt={project.title}
                                        className="object-cover w-full h-full"
                                      />
                                    </div>
                                    <div className="w-2/5 bg-white/95 p-4 overflow-y-auto flex flex-col justify-between text-sm">
                                      <div className="space-y-3">
                                        <p className="text-xs text-gray-400 uppercase tracking-widest">{project.year} · Case Study</p>
                                        <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: "Courier New, monospace" }}>{project.title}</h3>
                                        <p className="font-medium" style={{ color: "#7a6a82" }}>{project.subtitle}</p>
                                        <p className="text-gray-500 text-sm">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                          {project.tags.map((tag) => (
                                            <span key={tag.name} className={"px-2 py-1 rounded text-xs font-medium " + tag.bg + " " + tag.text}>{tag.name}</span>
                                          ))}
                                        </div>
                                        <p className="text-gray-500 text-xs">Impact: {project.impact}</p>
                                      </div>
                                      <Link
                                        href={"/work/" + project.id}
                                        scroll={true}
                                        className="inline-block mt-4 px-4 py-2 rounded-full text-sm font-bold w-fit no-underline transition-all"
                                        style={{
                                          background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 50%, #e8d5f0 100%)",
                                          color: "#5a3e5c",
                                          border: "1px solid rgba(240,210,230,0.6)",
                                        }}
                                      >
                                        View Case Study →
                                      </Link>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                  </div>
                </FadeUp>

                {/* Latest Update */}
                <FadeUp>
                  <div className={cardShell}>
                    <div className="bg-white/95 rounded-lg p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-xl font-bold" style={{ fontFamily: "Courier New, monospace", color: "#5a3e5c" }}>Latest Update</h3>
                        <span className="text-xs text-gray-400">February 2026</span>
                      </div>
                      <p className="text-gray-500 mb-4">
                        {"Lately I've been deep in the world of vibecoding — building real interfaces through conversation and iteration, which honestly feels like the most natural extension of design thinking I've found yet. I'm also exploring AI agents and voice design, because the next frontier of UX isn't just screens. It's systems that think, speak, and respond. Excited to see where this takes me. 👀"}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        <span className="px-2 py-1 rounded text-xs bg-pink-50 text-pink-600">Vibecoding</span>
                        <span className="px-2 py-1 rounded text-xs bg-purple-50 text-purple-600">AI Agents</span>
                        <span className="px-2 py-1 rounded text-xs bg-blue-50 text-blue-500">Voice Design</span>
                        <span className="px-2 py-1 rounded text-xs bg-gray-50 text-gray-500">What's Next</span>
                      </div>
                    </div>
                  </div>
                </FadeUp>

                {/* Comments */}
                <FadeUp>
                  <div className={cardShell}>
                    <div className="bg-white/95 rounded-lg p-6">
                      <h2 className="text-2xl font-bold text-center mb-6" style={{ fontFamily: "Courier New, monospace", color: "#5a3e5c" }}>
                        Comments
                      </h2>
                      <StaggerReveal className="space-y-4">
                        {comments.map((comment, index) => (
                          <StaggerItem key={index}>
                            <div className="flex gap-4 p-4 rounded-lg transition-colors" style={{ background: "rgba(240,210,230,0.15)" }}>
                              <div className="w-16 h-16 rounded-lg flex-shrink-0 overflow-hidden bg-purple-50">
                                <img
                                  src={
                                    index === 0 ? "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale" :
                                    index === 1 ? "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=Brown&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Brown" :
                                    index === 2 ? "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Black" :
                                    index === 3 ? "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairMiaWallace&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Pink&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Brown" :
                                    "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=CollarSweater&clotheColor=PastelBlue&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Light"
                                  }
                                  alt={comment.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-bold text-sm" style={{ fontFamily: "Courier New, monospace", color: "#5a3e5c" }}>{comment.name}</p>
                                <p className="text-xs text-gray-400 mb-2">{comment.date}</p>
                                <p className="text-gray-500 text-sm">{comment.text}</p>
                              </div>
                            </div>
                          </StaggerItem>
                        ))}
                      </StaggerReveal>
                    </div>
                  </div>
                </FadeUp>

              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full border-t border-white/20 py-6" style={{ background: "rgba(255,255,255,0.10)", backdropFilter: "blur(8px)" }}>
          <p className="text-center text-sm" style={{ fontFamily: "Courier New, monospace", color: "#4a4458" }}>
            Made with love and nostalgia
          </p>
        </div>
      </div>
    </div>
  )
}
