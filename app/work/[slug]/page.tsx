"use client"

import { useState } from "react"
import VanderbiltCaseStudy from "@/components/vanderbilt-case-study"
import StevannahCaseStudy from "@/components/stevannah-case-study"
import BlairCaseStudy from "@/components/blair-case-study"
import CSVStackCaseStudy from "@/components/csv-stack-case-study"
import USBankCaseStudy from "@/components/us-bank-case-study"
import CocaColaCaseStudy from "@/components/coca-cola-case-study"
import DeltaCaseStudy from "@/components/delta-case-study"
import NeighborlyCaseStudy from "@/components/neighborly-case-study"
import GiftsCaseStudy from "@/components/gifts-case-study"
import Link from "next/link"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"
import { ChevronDown } from "lucide-react"

// Case study data for other projects
const caseStudyData: Record<string, any> = {
  "sold-by-stevannah": {
    title: "Sold By Stevannah",
    subtitle: "Luxury Real Estate Website Design",
    tags: ["Freelance", "Real Estate", "Dark Mode"],
    role: "Lead Designer & Strategist",
    duration: "4 weeks",
    team: "Solo project",
    tools: "Figma, Webflow",
    overview:
      "A luxury real estate website for a Nashville-based realtor specializing in relocation clients. The design needed to feel premium while making complex relocation information easy to navigate.",
    problem:
      "Stevannah needed a website that could compete with established luxury real estate brands while serving a specific niche: out-of-state buyers relocating to Nashville.",
    outcomes: [
      "Launched site with AI-powered lead capture",
      "Dark mode design differentiates from competitors",
      "Mobile-first approach for on-the-go home searchers",
    ],
    reflection:
      "This project pushed me to balance luxury aesthetics with functional UX for a very specific user journey.",
    nextProject: { slug: "blair-school", title: "Blair School of Music" },
  },
  "blair-school": {
    title: "Blair School of Music Website Redesign",
    subtitle: "Academic Website Transformation",
    tags: ["Higher Ed", "Information Architecture", "Accessibility"],
    role: "Associate Director of UX/UI",
    duration: "8 months",
    team: "Cross-functional",
    tools: "Figma, Analytics",
    overview:
      "A comprehensive redesign of Vanderbilt's Blair School of Music website, focusing on prospective student journeys and event discovery.",
    problem:
      "The existing site had fragmented navigation, poor event visibility, and didn't reflect the school's prestigious reputation.",
    outcomes: [
      "Improved prospective student pathways",
      "Enhanced event discovery system",
      "Established color identity framework for all Vanderbilt schools",
    ],
    reflection:
      "This project taught me how to balance institutional requirements with creative expression in higher education contexts.",
    nextProject: { slug: "csv-stack-ai", title: "CSV Stack AI" },
  },
  "csv-stack-ai": {
    title: "CSV Stack AI",
    subtitle: "B2B SaaS Landing Page & Product Experience",
    tags: ["SaaS", "AI/ML", "Product Design"],
    role: "Lead Product Designer",
    duration: "3 weeks",
    team: "Founder + Designer",
    tools: "Figma, Framer",
    overview:
      "A landing page and early product experience for an AI-powered CSV data processing tool targeting data analysts and developers.",
    problem:
      "The founder needed to validate market interest and communicate a technical product's value proposition clearly to non-technical decision makers.",
    outcomes: [
      "Clear value proposition messaging",
      "Conversion-focused landing page",
      "Product demo flow for early adopters",
    ],
    reflection: "Working on an AI product pushed me to translate complex technical features into user benefits.",
    nextProject: null,
  },
  "us-bank": {
    title: "US Bank Case Study",
    subtitle: "Financial Services Website Redesign",
    tags: ["Banking", "User Experience", "Responsive Design"],
    role: "Senior UX/UI Designer",
    duration: "6 months",
    team: "Design Team",
    tools: "Adobe XD, Sketch",
    overview:
      "A redesign of US Bank's website to improve user experience, increase accessibility, and enhance the overall visual appeal.",
    problem:
      "US Bank's website needed a refresh to better meet the needs of modern users, including those with disabilities, and to align with the bank's new brand identity.",
    outcomes: [
      "Increased user engagement through improved navigation",
      "Enhanced accessibility features",
      "Boosted conversion rates with a streamlined design",
    ],
    reflection:
      "This project emphasized the importance of user-centered design and the impact of accessibility on user experience.",
    nextProject: null,
  },
  "coca-cola": {
    title: "Coca-Cola Case Study",
    subtitle: "Brand Identity Refresh",
    tags: ["Brand Identity", "Marketing", "Visual Design"],
    role: "Lead Designer",
    duration: "5 weeks",
    team: "Design Team",
    tools: "Adobe Illustrator, Photoshop",
    overview:
      "A brand identity refresh for Coca-Cola, focusing on modernizing its visual presence while maintaining its iconic elements.",
    problem:
      "Coca-Cola needed to update its brand identity to appeal to younger audiences and reflect current marketing trends.",
    outcomes: ["Modernized logo and color palette", "Updated packaging designs", "Revised advertising campaigns"],
    reflection: "This project highlighted the challenges and opportunities of rebranding a globally recognized brand.",
    nextProject: null,
  },
  delta: {
    title: "Delta Case Study",
    subtitle: "Airline Industry Transformation",
    tags: ["Travel", "User Experience", "Innovation"],
    role: "UX/UI Designer",
    duration: "10 weeks",
    team: "Design Team",
    tools: "Figma, Adobe XD",
    overview:
      "A transformation project for Delta Airlines to improve its mobile app experience and enhance user engagement.",
    problem:
      "Delta Airlines needed to modernize its mobile app to better serve the needs of frequent travelers and improve its competitive edge.",
    outcomes: [
      "Enhanced mobile app navigation",
      "Improved booking process with AI recommendations",
      "Increased user satisfaction and engagement",
    ],
    reflection: "This project taught me the importance of user research and innovation in the travel industry.",
    nextProject: { slug: "neighborly", title: "Neighborly Case Study" },
  },
  neighborly: {
    title: "Neighborly Case Study",
    subtitle: "Neighborhood Marketplace Redesign",
    tags: ["E-commerce", "Community", "User Experience"],
    role: "UX/UI Designer",
    duration: "12 weeks",
    team: "Design Team",
    tools: "Figma, Sketch",
    overview:
      "A redesign of Neighborly, a neighborhood marketplace platform, to improve user experience and increase community engagement.",
    problem:
      "Neighborly needed to enhance its platform to better connect local sellers with buyers and foster a stronger community spirit.",
    outcomes: [
      "Streamlined marketplace navigation",
      "Improved search functionality for local products",
      "Increased community interactions through social features",
    ],
    reflection:
      "This project emphasized the role of community in e-commerce and the importance of user-centric design.",
    nextProject: { slug: "gifts", title: "Gifts Case Study" },
  },
  gifts: {
    title: "Gifts Case Study",
    subtitle: "Personalized Gift Selection Platform",
    tags: ["E-commerce", "Personalization", "User Experience"],
    role: "UX/UI Designer",
    duration: "9 weeks",
    team: "Design Team",
    tools: "Figma, Adobe Illustrator",
    overview:
      "A platform for personalized gift selection, focusing on user experience and making gift-giving easier and more enjoyable.",
    problem: "The gift selection process was complex and time-consuming, leading to high user drop-off rates.",
    outcomes: [
      "Personalized gift recommendations based on user preferences",
      "Simplified gift selection process",
      "Increased user satisfaction and repeat usage",
    ],
    reflection:
      "This project highlighted the importance of personalization in e-commerce and the impact of user experience on engagement.",
    nextProject: null,
  },
}

// MySpace-styled case study component for other projects
function MySpaceCaseStudy({ study, slug }: { study: any; slug: string }) {
  const [isWorkOpen, setIsWorkOpen] = useState(false)

  const getFooterNav = () => {
    if (slug === "csv-stack-ai") {
      return {
        prev: { href: "/work/blair-school", label: "← Previous: Blair School of Music" },
        next: { href: "/more-work", label: "View More Work →" },
      }
    }
    return {
      prev: { href: "/work", label: "← Back to Work" },
      next: study.nextProject
        ? { href: `/work/${study.nextProject.slug}`, label: `Next: ${study.nextProject.title} →` }
        : null,
    }
  }

  const footerNav = getFooterNav()

  return (
    <div className="min-h-screen bg-transparent">
      <div className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 p-4">
        <nav
          className="flex justify-center items-center gap-6 text-white font-bold relative"
          style={{ fontFamily: "Courier New, Courier, monospace" }}
        >
          <Link
            href="/"
            className="px-6 py-2 rounded-full transition-all cursor-pointer text-white font-bold hover:bg-white/20 hover:backdrop-blur-sm no-underline hover:underline"
            style={{ fontFamily: "Courier New, Courier, monospace" }}
          >
            Home
          </Link>

          {/* Work Dropdown - Active state since we're on a case study */}
          <div className="relative">
            <button
              onClick={() => setIsWorkOpen(!isWorkOpen)}
              onBlur={() => setTimeout(() => setIsWorkOpen(false), 200)}
              className="flex items-center gap-1 px-6 py-2 rounded-full bg-white text-purple-700 font-bold transition-all cursor-pointer no-underline"
              style={{ fontFamily: "Courier New, Courier, monospace" }}
            >
              Work
              <ChevronDown size={16} className={`transition-transform ${isWorkOpen ? "rotate-180" : ""}`} />
            </button>

            {isWorkOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[250px] z-50">
                <Link
                  href="/work/vanderbilt-navigation"
                  onMouseDown={(e) => e.preventDefault()}
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 transition-colors text-sm no-underline"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  Big VU Navigation
                </Link>
                <Link
                  href="/work/sold-by-stevannah"
                  onMouseDown={(e) => e.preventDefault()}
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 transition-colors text-sm no-underline"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  Sold by Stevannah
                </Link>
                <Link
                  href="/work/blair-school"
                  onMouseDown={(e) => e.preventDefault()}
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 transition-colors text-sm no-underline"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  Blair School of Music
                </Link>
                <Link
                  href="/work/csv-stack-ai"
                  onMouseDown={(e) => e.preventDefault()}
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 transition-colors text-sm no-underline"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  CSV Stack
                </Link>
                <Link
                  href="/work/us-bank"
                  onMouseDown={(e) => e.preventDefault()}
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 transition-colors text-sm no-underline"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  US Bank Case Study
                </Link>
                <Link
                  href="/work/coca-cola"
                  onMouseDown={(e) => e.preventDefault()}
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 transition-colors text-sm no-underline"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  Coca-Cola Case Study
                </Link>
                <Link
                  href="/work/delta"
                  onMouseDown={(e) => e.preventDefault()}
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 transition-colors text-sm no-underline"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  Delta Case Study
                </Link>
                <Link
                  href="/work/neighborly"
                  onMouseDown={(e) => e.preventDefault()}
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 transition-colors text-sm no-underline"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  Neighborly Case Study
                </Link>
                <Link
                  href="/work/gifts"
                  onMouseDown={(e) => e.preventDefault()}
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 transition-colors text-sm no-underline"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  Gifts Case Study
                </Link>
                <div className="border-t border-gray-200 my-2"></div>
                <Link
                  href="/more-work"
                  onMouseDown={(e) => e.preventDefault()}
                  className="block px-4 py-2 text-gray-500 hover:bg-gray-50 transition-colors text-sm italic no-underline"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  More Work
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="px-6 py-2 rounded-full transition-all cursor-pointer text-white font-bold hover:bg-white/20 hover:backdrop-blur-sm no-underline hover:underline"
            style={{ fontFamily: "Courier New, Courier, monospace" }}
          >
            About
          </Link>

          <Link
            href="/contact"
            className="px-6 py-2 rounded-full transition-all cursor-pointer text-white font-bold hover:bg-white/20 hover:backdrop-blur-sm no-underline hover:underline"
            style={{ fontFamily: "Courier New, Courier, monospace" }}
          >
            Contact
          </Link>
        </nav>
      </div>

      <div className="p-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Hero Card */}
          <div className="bg-pink-400 rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h1
                className="text-4xl font-bold mb-4 text-gray-900"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                {study.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{study.subtitle}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Role: {study.role}
                </span>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                  Duration: {study.duration}
                </span>
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                  Team: {study.team}
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  Tools: {study.tools}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm text-white ${
                      index % 3 === 0 ? "bg-purple-500" : index % 3 === 1 ? "bg-pink-500" : "bg-cyan-500"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Overview Card */}
          <div className="bg-pink-400 rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold mb-4 text-purple-600"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed">{study.overview}</p>
            </div>
          </div>

          {/* Problem Card */}
          <div className="bg-pink-400 rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold mb-4 text-pink-600"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                The Problem
              </h2>
              <p className="text-gray-700 leading-relaxed">{study.problem}</p>
            </div>
          </div>

          {/* Outcomes Card */}
          <div className="bg-pink-400 rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold mb-4 text-cyan-600"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Outcomes
              </h2>
              <ul className="space-y-3">
                {study.outcomes.map((outcome: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Reflection Card */}
          <div className="bg-pink-400 rounded-lg p-1 shadow-xl mb-8">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold mb-4 text-purple-600"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Reflection
              </h2>
              <p className="text-gray-700 leading-relaxed">{study.reflection}</p>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="bg-pink-400 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <Link
                href={footerNav.prev.href}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform text-center w-full md:w-auto"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                {footerNav.prev.label}
              </Link>
              {footerNav.next && (
                <Link
                  href={footerNav.next.href}
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform text-center w-full md:w-auto"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  {footerNav.next.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Route to dedicated components for specific case studies
  if (slug === "vanderbilt-navigation") {
    return <VanderbiltCaseStudy />
  }

  if (slug === "sold-by-stevannah") {
    return <StevannahCaseStudy />
  }

  if (slug === "blair-school") {
    return <BlairCaseStudy />
  }

  if (slug === "csv-stack-ai") {
    return <CSVStackCaseStudy />
  }

  if (slug === "us-bank") {
    return <USBankCaseStudy />
  }

  if (slug === "coca-cola") {
    return <CocaColaCaseStudy />
  }

  if (slug === "delta") {
    return <DeltaCaseStudy />
  }

  if (slug === "neighborly") {
    return <NeighborlyCaseStudy />
  }

  if (slug === "gifts") {
    return <GiftsCaseStudy />
  }

  // For other case studies, use the MySpace-styled component
  const study = caseStudyData[slug]

  if (!study) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-cyan-300 p-8 flex items-center justify-center">
        <div className="bg-pink-400 rounded-lg p-1 shadow-xl">
          <div className="bg-white rounded-lg p-8 text-center">
            <h1
              className="text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Courier New, Courier, monospace" }}
            >
              Case Study Not Found
            </h1>
            <p className="text-gray-600 mb-6">The requested case study could not be found.</p>
            <Link
              href="/work"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform no-underline"
            >
              ← Back to Work
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return <MySpaceCaseStudy study={study} slug={slug} />
}
