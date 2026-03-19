"use client"

import { useEffect } from "react"
import { MySpaceLayout } from "@/components/myspace-layout"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"

const featuredCaseStudies = [
  {
    id: "vanderbilt-navigation",
    year: "2024",
    title: "Big VU Navigation — Unified Ecosystem Framework",
    subheading: "Unifying a fragmented digital ecosystem across 13,000+ users.",
    summary:
      "Led navigation strategy and IA for 8 Vanderbilt websites — aligning cross-functional teams, defining design documentation standards, and creating a scalable system that serves students, faculty, and staff.",
    image: "https://i.imgur.com/BZ1sH9M.png",
    roles: ["UX Strategy", "Research Oversight", "Information Architecture", "Leadership"],
  },
  {
    id: "sold-by-stevannah",
    year: "2025",
    title: "Sold By Stevannah — Luxury Real Estate Website",
    subheading: "Brand-forward UX for a Charlotte luxury real estate business.",
    summary:
      "Designed an AI-enhanced, dark-mode website that converts high-end relocation clients — balancing aesthetic sophistication with lead capture strategy.",
    image: "https://i.imgur.com/O6dIEAL.png",
    roles: ["UX Strategy", "Product Design", "Brand Identity", "Framer Build"],
  },
  {
    id: "blair-school",
    year: "2024",
    title: "Blair School of Music — Website Redesign",
    subheading: "Balancing institutional standards with a music school's creative identity.",
    summary:
      "Redesigned Blair's web presence within Vanderbilt's CMS — improving event discovery, prospective student journeys, and WCAG AA accessibility across the site.",
    image: "https://i.imgur.com/FXSQqlJ.png",
    roles: ["UX Lead", "IA", "Content Strategy", "Higher Ed Design"],
  },
  {
    id: "csv-stack-ai",
    year: "2025",
    title: "CSV Stack AI — SaaS Landing Experience",
    subheading: "Making CSV compliance software feel approachable without dumbing it down.",
    summary:
      "Designed the brand and landing experience for an FDA-regulated pharma/biotech platform — translating dense validation concepts into clear, conversion-focused UX for engineers and executives alike.",
    image: "https://i.imgur.com/dkIgm4p.png",
    roles: ["Product Design", "UX Strategy", "Content Architecture", "Web Design"],
  },
]

const archiveProjects = [
  {
    id: "delta",
    title: "Delta Airlines",
    subheading: "SkyMiles Profile & UI Component Design — Jan 2022 - Sep 2022",
    summary: "Interactive before/after redesign of SkyMiles profile modal with accessibility improvements",
    image: "https://i.imgur.com/f7inBIe.png",
    href: "/work/delta",
  },
  {
    id: "us-bank",
    title: "U.S. Bank",
    subheading: "Information Architecture for Financial Goal Tools — Sep 2021 - Jan 2022",
    summary: "Designed structure and clarity for digital banking experiences across multiple user segments",
    image: "https://i.imgur.com/vmt3sfb.png",
    href: "/work/us-bank",
  },
]

export default function WorkPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <MySpaceLayout fluid>
      <div className="min-h-screen">
        <section className="w-full bg-transparent border-b border-[#7B6B9E]/10">
          <div className="max-w-[1200px] mx-auto px-6 py-[70px]">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7B6B9E] mb-4 block">
              Selected Work
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-[#1F1F1F] mb-4 max-w-4xl">
              Designing systems that scale — and experiences that feel human.
            </h1>
            <p className="text-lg sm:text-xl text-[#7B6B9E] max-w-2xl">
              A selection of research-driven projects across enterprise, education, and emerging tech.
            </p>
          </div>
        </section>

        {/* Case Studies Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
          <div className="text-center space-y-4 animate-fade-in-up">
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-[#1F1F1F]">My Work</h1>
            <p className="text-lg sm:text-xl text-[#7B6B9E] max-w-3xl mx-auto leading-relaxed">
              {"A curated selection of UX, product, and brand design I've crafted over the years — filtered for clarity, impact, and good storytelling."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredCaseStudies.map((study, index) => (
              <Link
                key={study.id}
                href={`/work/${study.id}`}
                scroll={true}
                className="group block animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, textDecoration: "none" }}
              >
                <Card
                  className="overflow-hidden border border-[#7B6B9E]/20 border-l-4 border-l-transparent hover:border-l-[#c4a0cc] bg-transparent shadow-[0px_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:border-[#7B6B9E]/40 h-full rounded-2xl"
                  style={{ textDecoration: "none" }}
                >
                  {/* Hero Image */}
                  <div className="relative h-[400px] overflow-hidden">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105 group-hover:translate-y-[-4px]"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4" style={{ textDecoration: "none" }}>
                    {/* Year label */}
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7B6B9E] mb-1">
                      {study.year} &middot; Case Study
                    </p>

                    <h2 className="font-display text-2xl font-bold text-[#1F1F1F]" style={{ textDecoration: "none" }}>
                      {study.title}
                    </h2>

                    <p className="font-medium leading-relaxed" style={{ color: "#7a6a82", textDecoration: "none" }}>
                      {study.subheading}
                    </p>

                    {/* Role badges */}
                    <div className="flex flex-wrap gap-2">
                      {study.roles.map((role) => (
                        <Badge
                          key={role}
                          variant="secondary"
                          className="bg-[#A4D1E6]/20 text-[#1F1F1F] border border-[#A4D1E6]/40 font-normal text-xs px-3 py-1 rounded-full"
                        >
                          {role}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-[#7B6B9E] text-sm leading-relaxed" style={{ textDecoration: "none" }}>
                      {study.summary}
                    </p>

                    {/* CTA Button */}
                    <div className="pt-2">
                      <span
                        className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 active:-translate-y-0.5"
                        style={{ background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 50%, #e8d5f0 100%)", color: "#5a3e5c", border: "1px solid rgba(240,210,230,0.6)", boxShadow: "0 2px 12px rgba(200,160,200,0.2)", textDecoration: "none" }}
                        onMouseEnter={e => (e.currentTarget.querySelector('span')!.style.textDecoration = "underline")}
                        onMouseLeave={e => (e.currentTarget.querySelector('span')!.style.textDecoration = "none")}
                      >
                        <span style={{ fontFamily: "Courier New, Courier, monospace", textDecoration: "none" }}>View Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Archive Section */}
          <div className="space-y-8 pt-12 border-t border-[#7B6B9E]/20">
            <div className="space-y-2">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1F1F1F]">Archive Projects</h2>
              <p className="text-[#7B6B9E] max-w-2xl">
                Earlier work that shaped my approach to systems thinking, accessibility, and enterprise UX.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {archiveProjects.map((project, index) => (
                <Link
                  key={project.id}
                  href={project.href}
                  scroll={true}
                  className="group block animate-fade-in-up transition-transform hover:scale-[1.02] cursor-pointer"
                  style={{ animationDelay: `${(index + 4) * 100}ms`, textDecoration: "none" }}
                >
                  <Card className="overflow-hidden border border-[#7B6B9E]/15 border-l-4 border-l-transparent hover:border-l-[#c4a0cc] bg-[#F5F5F0] shadow-[0px_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0px_4px_12px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 h-full rounded-xl">
                    {/* Small hero image */}
                    <div className="relative h-48 overflow-hidden bg-[#E8E8E0]">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-102"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-3">
                      <h3 className="font-display text-xl font-bold text-[#1F1F1F]">{project.title}</h3>
                      <p className="text-[#7B6B9E] text-sm font-medium leading-relaxed">{project.subheading}</p>
                      <p className="text-[#7B6B9E] text-sm leading-relaxed">{project.summary}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* View Archived Work CTA */}
          <div className="flex justify-center pt-12">
            <Link
              href="/more-work"
              scroll={true}
              className="px-6 py-3 rounded-full font-bold transition-all duration-200 active:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 50%, #e8d5f0 100%)", color: "#5a3e5c", border: "1px solid rgba(240,210,230,0.6)", boxShadow: "0 2px 12px rgba(200,160,200,0.2)", textDecoration: "none" }}
            >
              <span
                onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
                style={{ textDecoration: "none", fontFamily: "Courier New, Courier, monospace" }}
              >View Archived Work</span>
            </Link>
          </div>
        </div>
      </div>
    </MySpaceLayout>
  )
}
