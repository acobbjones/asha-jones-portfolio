"use client"

import { useEffect } from "react"
import Link from "next/link"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"
import { Plane, Users, Landmark, Accessibility } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"

const archivedProjects = [
  {
    year: "2022",
    name: "Delta Air Lines – Vacations & Wi-Fi UX",
    slug: "delta",
    description: "Improved digital experiences for Delta Vacations booking flows and in-flight Wi-Fi connection interfaces. Focused on reducing friction in travel-related digital touchpoints.",
    tags: [
      { name: "Travel", bg: "bg-purple-100", text: "text-purple-800" },
      { name: "Booking Flows", bg: "bg-pink-100", text: "text-pink-800" },
      { name: "Enterprise", bg: "bg-blue-100", text: "text-blue-800" },
    ],
    role: "UX Designer",
    contribution: "Streamlined vacation booking flow, reducing steps from 8 to 5",
    icon: Plane,
  },
  {
    year: "2021-2022",
    name: "US Bank – Information Architecture",
    slug: "us-bank",
    description: "Designed cross-segment customer journeys and structural flows.",
    subtext: "Early-career IA work informing large-scale financial product experiences.",
    tags: [
      { name: "IA", bg: "bg-blue-100", text: "text-blue-800" },
      { name: "UX", bg: "bg-purple-100", text: "text-purple-800" },
    ],
    role: "UX Designer",
    contribution: "Designed cross-segment customer journeys and structural flows",
    icon: Landmark,
  },
  {
    year: "2020-2021",
    name: "Neighborly – Design System & UI Patterns",
    slug: "neighborly",
    description: "Designed UI patterns and contributed to a design system for service-based home improvement brands. Created reusable components for scheduling, service selection, and customer communication.",
    tags: [
      { name: "Design Systems", bg: "bg-purple-100", text: "text-purple-800" },
      { name: "Service Design", bg: "bg-pink-100", text: "text-pink-800" },
      { name: "B2C", bg: "bg-orange-100", text: "text-orange-800" },
    ],
    role: "UX Designer",
    contribution: "Built scalable UI component library used across 5 brand properties",
    icon: Users,
  },
  {
    year: "2019-2020",
    name: "Coca-Cola ADA Freestyle UI",
    slug: "coca-cola",
    description: "Accessibility-first redesign for a national kiosk system.",
    subtext: "UI upgrades guided by ADA compliance, improved target sizes, and contrast.",
    tags: [
      { name: "Accessibility", bg: "bg-green-100", text: "text-green-800" },
      { name: "UI", bg: "bg-red-100", text: "text-red-800" },
    ],
    role: "UX Designer",
    contribution: "ADA-compliant kiosk redesign with improved target sizes and contrast",
    icon: Accessibility,
  },
]

const cardShell = "bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-1 shadow-xl"
const cardInner = "bg-white/95 rounded-lg p-6"

export default function MoreWorkPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />

      <div className="p-8">
        <div className="max-w-5xl mx-auto space-y-6">

          {/* Header */}
          <div className={cardShell}>
            <div className="bg-white/95 rounded-lg p-8">
              <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "Courier New, Courier, monospace", color: "#5a3e5c" }}>
                More Work
              </h1>
              <p className="text-lg" style={{ color: "#7a6a82" }}>Additional projects that shaped my journey as a designer</p>
            </div>
          </div>

          {/* Why Archived */}
          <div className={cardShell}>
            <div className="bg-white/95 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "Courier New, Courier, monospace", color: "#5a3e5c" }}>
                Why These Projects Are Archived
              </h3>
              <p className="text-sm" style={{ color: "#7a6a82" }}>
                While these projects were pivotal in my growth as a designer, they represent earlier work or different contexts. My featured case studies better reflect my current senior-level strategic thinking and end-to-end design capabilities.
              </p>
            </div>
          </div>

          {/* Archived Projects */}
          {archivedProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              scroll={true}
              className="block transition-transform hover:scale-[1.02] cursor-pointer no-underline"
            >
              <div className={cardShell}>
                <div className="bg-white/95 rounded-lg p-6" style={{ borderLeft: "4px solid transparent" }}
                  onMouseEnter={e => (e.currentTarget.style.borderLeft = "4px solid #e8d5f0")}
                  onMouseLeave={e => (e.currentTarget.style.borderLeft = "4px solid transparent")}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-lg flex items-center justify-center"
                        style={{ background: "linear-gradient(135deg, #e8d5f0 0%, #f0d9e8 100%)" }}>
                        <project.icon className="w-10 h-10" style={{ color: "#5a3e5c" }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 rounded text-xs font-medium" style={{ background: "rgba(200,200,210,0.2)", color: "#7a6a82" }}>
                          ARCHIVED
                        </span>
                        <span className="text-sm" style={{ color: "#9a8aa2" }}>{project.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Courier New, Courier, monospace", color: "#3a2e3c" }}>
                        {project.name}
                      </h3>
                      <p className="mb-2" style={{ color: "#7a6a82" }}>{project.description}</p>
                      {project.subtext && (
                        <p className="text-sm italic mb-4" style={{ color: "#9a8aa2" }}>{project.subtext}</p>
                      )}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag.name} className={`px-3 py-1 rounded-full text-xs font-medium ${tag.bg} ${tag.text}`}>
                            {tag.name}
                          </span>
                        ))}
                      </div>
                      <div className="text-sm" style={{ color: "#9a8aa2" }}>
                        <p><span className="font-medium" style={{ color: "#7a6a82" }}>Role:</span> {project.role}</p>
                        <p><span className="font-medium" style={{ color: "#7a6a82" }}>Key Contribution:</span> {project.contribution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Back to Work */}
          <div className="flex justify-center pt-4">
  <Link
  href="/work"
  scroll={true}
  className="px-6 py-3 rounded-full font-bold transition-all duration-200 active:-translate-y-0.5"
  style={{ background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 50%, #e8d5f0 100%)", color: "#5a3e5c", border: "1px solid rgba(240,210,230,0.6)", boxShadow: "0 2px 12px rgba(200,160,200,0.2)", fontFamily: "Courier New, Courier, monospace", textDecoration: "none" }}
>
  <span
    onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
    onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
    style={{ textDecoration: "none", fontFamily: "Courier New, Courier, monospace" }}
  >
    ← Back to Work
  </span>
</Link>
</div>
        </div>
      </div>
    </div>
  )
}
