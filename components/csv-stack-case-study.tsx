"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"
import { Navigation } from "@/components/navigation"

export default function CSVStackCaseStudy() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50">
      <Navigation />

      {/* Content with padding */}
      <div className="p-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* 1. Hero Section */}
          <div className="bg-blue-500 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <p
                className="text-sm text-blue-500 mb-2"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                CASE STUDY
              </p>
              <h1
                className="text-4xl font-bold text-blue-600 mb-4"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                CSV Stack AI
              </h1>
              <p className="text-xl text-gray-700 mb-6">
                Branding & Homepage Design for a Computer Software Validation (CSV) Platform
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Role: Brand & UX Designer
                </span>
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                  Duration: 4 weeks
                </span>
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                  Team: Solo Designer
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  Tools: Figma
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Brand Identity</span>
                <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm">Homepage Design</span>
                <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm">AI / SaaS</span>
              </div>
            </div>
          </div>

          {/* Browser Window Mockup */}
          <div className="my-12">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gray-100 rounded-lg shadow-2xl overflow-hidden border-4 border-blue-500">
                {/* Browser Header */}
                <div className="bg-gray-200 px-4 py-3 flex items-center gap-2 border-b border-gray-300">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-white rounded mx-4 px-3 py-1 text-sm text-gray-600 flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>csv-stack.framer.website</span>
                  </div>
                </div>
                {/* Browser Content - GIF */}
                <div className="bg-white">
                  <img
                    src="https://i.imgur.com/YqMaVQp.gif"
                    alt="CSV Stack website demo showing homepage hero, features, compliance standards, and blog sections"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Context & Overview */}
          <div className="bg-blue-500 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold mb-4 text-blue-600"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Context & Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CSV Stack AI is a SaaS platform focused on{" "}
                <strong>Computer Software Validation (CSV) for regulated industries</strong> like biotech,
                pharmaceuticals, and life sciences. The product helps organizations comply with FDA 21 CFR Part 11 and
                other regulatory frameworks by automating validation processes that are traditionally tedious and
                error-prone.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The founder approached me to establish a cohesive visual identity for the brand and to design the
                homepage — their first impression and primary conversion tool.
              </p>
              <p className="text-gray-700 font-medium mb-3">Goals:</p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>Create a modern, trustworthy brand identity for a technical B2B product</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>Design a homepage that clearly communicates the product's value proposition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>Balance technical credibility with approachability</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. The Real Problem */}
          <div className="bg-blue-500 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold mb-4 text-cyan-600"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                The Real Problem
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Computer Software Validation is a highly specialized, compliance-heavy domain. The target audience —
                quality assurance managers, regulatory specialists, and IT leaders in life sciences — are
                detail-oriented, skeptical of overpromises, and often overwhelmed by complex, outdated tools.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The challenge was to create a brand and homepage that felt{" "}
                <strong>modern and innovative (AI-powered)</strong> while still conveying{" "}
                <strong>trust, compliance, and reliability</strong> — qualities essential for this audience.
              </p>
            </div>
          </div>

          {/* 4. Constraints */}
          <div className="bg-blue-500 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold mb-4 text-cyan-600"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Constraints
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="font-semibold text-blue-800 mb-1">Timeline</p>
                  <p className="text-gray-600 text-sm">
                    4-week sprint for brand identity and homepage — tight but focused
                  </p>
                </div>
                <div className="bg-cyan-50 rounded-lg p-4">
                  <p className="font-semibold text-cyan-800 mb-1">Scope</p>
                  <p className="text-gray-600 text-sm">
                    Brand foundations + homepage only; full product design was out of scope
                  </p>
                </div>
                <div className="bg-cyan-50 rounded-lg p-4">
                  <p className="font-semibold text-cyan-800 mb-1">Audience</p>
                  <p className="text-gray-600 text-sm">
                    Highly technical, compliance-focused users who are skeptical of "marketing fluff"
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-800 mb-1">Brand Balance</p>
                  <p className="text-gray-600 text-sm">
                    Needed to feel innovative (AI) while maintaining regulatory credibility
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4b. Brand Development Process */}
          <div className="bg-blue-500 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-3xl font-bold mb-6 text-blue-600"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Brand Development Process
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                I developed CSV Stack{"'"}s brand identity through an iterative process—presenting multiple color and logo directions before landing on the True Blue palette and final logo system. This provided a cohesive visual foundation for the website and future marketing materials.
              </p>
              <img src="https://i.imgur.com/9QKFbKC.png" alt="CSV Stack brand identity showing True Blue color palette, logo variations, and applications in website header and business materials" className="w-full max-w-4xl mx-auto rounded-lg shadow-lg my-8" />
            </div>
          </div>

          {/* 4c. Design System */}
          <div className="bg-blue-500 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-3xl font-bold mb-6 text-blue-600"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Design System
              </h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                To ensure consistency across all digital touchpoints, I created a comprehensive style guide covering colors, typography, buttons, and UI components.
              </p>

              {/* Style Guide */}
              <div className="mb-8">
                <h3
                  className="text-lg font-bold text-gray-800 mb-3"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  Style Guide
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  The style guide defines the complete visual language—from color swatches and hex codes to button states and UI component examples. This ensures the brand can scale consistently as CSV Stack grows.
                </p>
                <img src="https://i.imgur.com/djEWA9e.png" alt="CSV Stack style guide showing True Blue color palette with hex codes, button states, and UI component examples" className="w-full max-w-4xl mx-auto rounded-lg shadow-lg my-6" />
              </div>

              {/* Typography System */}
              <div>
                <h3
                  className="text-lg font-bold text-gray-800 mb-3"
                  style={{ fontFamily: "Courier New, Courier, monospace" }}
                >
                  Typography System
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  The typography system pairs Neue Einstellung (clean, modern sans-serif) for primary content with Red Hat Display for accent elements, creating a professional yet approachable tone.
                </p>
                <img src="https://i.imgur.com/6XbUZc9.png" alt="Typography system pairing Neue Einstellung sans-serif for primary content with Red Hat Display for accent elements" className="w-full max-w-4xl mx-auto rounded-lg shadow-lg my-6" />
              </div>
            </div>
          </div>

          {/* 4d. Website Design - Sticky Scroll Layout */}
          <div className="bg-blue-500 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Column - Sticky */}
                <div className="md:sticky md:top-24 h-fit">
                  <h2
                    className="text-3xl font-bold mb-6 text-blue-600"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Website Design
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    Rather than building from scratch, I selected and customized a Framer template that aligned with CSV Stack{"'"}s needs—allowing us to launch quickly while maintaining design quality and brand consistency.
                  </p>

                  {/* Template Selection & Customization */}
                  <div className="mb-8">
                    <h3
                      className="text-lg font-bold text-gray-800 mb-3"
                      style={{ fontFamily: "Courier New, Courier, monospace" }}
                    >
                      Template Selection & Customization
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      I evaluated multiple templates based on structure, flexibility, and alignment with compliance software needs. The selected template provided a strong foundation, which I customized with CSV Stack{"'"}s brand identity, colors, and content strategy.
                    </p>
                  </div>

                  {/* Blog Design */}
                  <div className="mb-8">
                    <h3
                      className="text-lg font-bold text-gray-800 mb-3"
                      style={{ fontFamily: "Courier New, Courier, monospace" }}
                    >
                      Blog Design
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      The blog was designed to position CSV Stack as a thought leader in compliance. The blog homepage features a gradient hero section, category filters, and clean card layouts that make complex compliance topics accessible and scannable.
                    </p>
                  </div>

                  {/* Error Handling */}
                  <div>
                    <h3
                      className="text-lg font-bold text-gray-800 mb-3"
                      style={{ fontFamily: "Courier New, Courier, monospace" }}
                    >
                      Error Handling
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Even the 404 error page maintains brand consistency and user experience, turning a potential frustration into an on-brand moment.
                    </p>
                  </div>
                </div>

                {/* Right Column - Scrolling Images */}
                <div className="space-y-12">
                  <div>
                    <img src="https://i.imgur.com/Fo0QYcs.png" alt="CSV Stack homepage hero section featuring AI-powered validation messaging and clear call-to-action" className="w-full rounded-lg shadow-lg" />
                  </div>
                  <div>
                    <img src="https://i.imgur.com/tksCj6e.png" alt="Homepage features section showcasing core product outputs including protocols, reports, and traceability matrices" className="w-full rounded-lg shadow-lg" />
                  </div>
                  <div>
                    <img src="https://i.imgur.com/hr8wDBL.png" alt="Blog page with gradient hero section, category filters, and clean card layouts for compliance content" className="w-full rounded-lg shadow-lg" />
                  </div>
                  <div>
                    <img src="https://i.imgur.com/BeUiPdr.png" alt="404 error page maintaining brand consistency with blue gradient and user-friendly messaging" className="w-full rounded-lg shadow-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5. My Role & Process */}
          <div className="bg-blue-500 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold mb-4 text-blue-600"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                My Role & Process
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                I served as the sole designer on this project, responsible for brand identity development and homepage
                design.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3
                    className="font-bold text-blue-800 mb-3"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    What I Owned
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✓</span>
                      <span>Brand identity (logo, color palette, typography)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✓</span>
                      <span>Homepage UX and visual design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✓</span>
                      <span>Content hierarchy and messaging structure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✓</span>
                      <span>Design system foundations</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-cyan-50 rounded-lg p-4">
                  <h3
                    className="font-bold text-cyan-800 mb-3"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    What I Influenced
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500">→</span>
                      <span>Product positioning and value proposition messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500">→</span>
                      <span>Target audience prioritization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500">→</span>
                      <span>Content strategy direction</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="font-bold text-gray-900 mb-4" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                Process
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-bold text-blue-700 mb-2">1. Discovery & Research</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    I started by understanding the CSV/validation space, competitive landscape, and target audience
                    needs.
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1 ml-4">
                    <li>• Interviewed the founder about product vision and audience</li>
                    <li>• Analyzed competitor websites in the validation/compliance space</li>
                    <li>• Researched design patterns in B2B SaaS and regulated industries</li>
                  </ul>
                </div>

                <div className="border-l-4 border-cyan-400 pl-4">
                  <h4 className="font-bold text-cyan-700 mb-2">2. Brand Identity Development</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    I developed a brand system that balances innovation with trustworthiness.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Palette className="w-5 h-5 text-cyan-500" />
                      <span className="text-gray-600 text-sm">Color palette: Blues + warm accents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Type className="w-5 h-5 text-cyan-500" />
                      <span className="text-gray-600 text-sm">Typography: Clean, modern sans-serif</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layout className="w-5 h-5 text-cyan-500" />
                      <span className="text-gray-600 text-sm">Logo: Geometric, tech-forward mark</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-cyan-500" />
                      <span className="text-gray-600 text-sm">Voice: Confident, clear, helpful</span>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-cyan-400 pl-4">
                  <h4 className="font-bold text-cyan-700 mb-2">3. Homepage Design</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    I designed the homepage to serve as the primary conversion tool, focusing on:
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1 ml-4">
                    <li>• Clear value proposition above the fold</li>
                    <li>• Feature sections that address specific pain points</li>
                    <li>• Social proof and credibility indicators</li>
                    <li>• Multiple, well-placed CTAs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Design Highlights */}
          <div className="bg-blue-500 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold mb-6 text-cyan-600"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Design Highlights
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-5 border-l-4 border-blue-500">
                  <h3
                    className="font-bold text-blue-800 mb-2"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    Brand Identity System
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Created a cohesive visual identity that communicates innovation and reliability:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Primary Blue</span>
                    <span className="bg-blue-400 text-white px-3 py-1 rounded text-xs">Secondary Blue</span>
                    <span className="bg-amber-500 text-white px-3 py-1 rounded text-xs">Accent Warm</span>
                    <span className="bg-gray-800 text-white px-3 py-1 rounded text-xs">Neutrals</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-white rounded-lg p-5 border-l-4 border-cyan-500">
                  <h3
                    className="font-bold text-cyan-800 mb-2"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    Homepage Hero
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Designed a hero section that immediately communicates the product's value: "AI-powered validation
                    for regulated industries." Clear headline, supporting subtext, and prominent CTA.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-white rounded-lg p-5 border-l-4 border-cyan-500">
                  <h3
                    className="font-bold text-cyan-800 mb-2"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    Feature Sections
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">Structured feature sections to address key pain points:</p>
                  <ul className="text-gray-600 text-sm space-y-1 ml-4">
                    <li>• Automation of tedious validation tasks</li>
                    <li>• Compliance with FDA 21 CFR Part 11</li>
                    <li>• Reduction in audit preparation time</li>
                    <li>• Integration with existing workflows</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-5 border-l-4 border-gray-500">
                  <h3
                    className="font-bold text-gray-800 mb-2"
                    style={{ fontFamily: "Courier New, Courier, monospace" }}
                  >
                    Trust & Credibility
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Included social proof elements: client logos, testimonials, compliance certifications, and "trusted
                    by" sections to build credibility with skeptical enterprise buyers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Key Decisions */}
          <div className="bg-blue-500 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold mb-6 text-blue-600"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Key Decisions & Tradeoffs
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-bold text-green-800 mb-3 text-sm">What We Prioritized</h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Clarity over cleverness in messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Trust signals and social proof</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Clean, professional aesthetics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Mobile-responsive design</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-5">
                  <h3 className="font-bold text-red-800 mb-3 text-sm">What We Simplified</h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✗</span>
                      <span>Complex animations (kept interactions subtle)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✗</span>
                      <span>Trendy design patterns (prioritized timelessness)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">✗</span>
                      <span>Dense technical content (saved for docs)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-5">
                  <h3 className="font-bold text-blue-800 mb-3 text-sm">Why These Choices</h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">→</span>
                      <span>Target audience values substance over flash</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">→</span>
                      <span>Regulated industries expect professionalism</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">→</span>
                      <span>Timeless design reduces future rework</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 8. Outcomes */}
          <div className="bg-blue-500 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold mb-6 text-cyan-600"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Outcomes & Impact
              </h2>

              <p className="text-gray-600 italic mb-6">
                Since this was a pre-launch project, outcomes are based on stakeholder feedback and project deliverables
                rather than live metrics.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-lg p-5">
                  <h3 className="font-bold text-blue-800 mb-3">Deliverables</h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Complete brand identity system (logo, colors, typography, guidelines)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Responsive homepage design with all sections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Design system foundations for future pages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Asset library and component documentation</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-cyan-50 rounded-lg p-5">
                  <h3 className="font-bold text-cyan-800 mb-3">Stakeholder Feedback</h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Brand identity approved without major revisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Homepage messaging validated with target users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Design positioned product as "credible and modern"</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg p-6 border-l-4 border-cyan-500">
                <p className="text-gray-700 italic mb-2">
                  "The brand feels exactly right — professional enough for enterprise buyers, but modern enough to
                  communicate that we're doing something innovative."
                </p>
                <p className="text-gray-500 text-sm">— Founder, CSV Stack AI</p>
              </div>
            </div>
          </div>

          {/* 9. Reflection */}
          <div className="bg-blue-500 rounded-lg p-1 shadow-xl">
            <div className="bg-white rounded-lg p-8">
              <h2
                className="text-2xl font-bold mb-4 text-blue-600"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                Reflection
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This project reinforced the importance of understanding audience context deeply. Designing for regulated
                industries requires a different approach than consumer products — trust and clarity trump novelty.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300 italic">
                If I had more time, I would have conducted user testing with actual QA managers and regulatory
                specialists to validate the messaging hierarchy and conversion flow assumptions.
              </p>

              <h3 className="font-bold text-gray-900 mb-3" style={{ fontFamily: "Courier New, Courier, monospace" }}>
                What this shows about me:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">★</span>
                  <span>Ability to translate complex technical products into clear visual communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">★</span>
                  <span>Brand identity skills that balance innovation with credibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">★</span>
                  <span>Understanding of B2B and enterprise audience needs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-lg py-6 px-8 mt-12 shadow-lg max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full px-4">
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
                {"← Blair School of Music"}
              </Link>
              <Link
                href="/more-work"
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
                {"View Archived Work →"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
