import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"
import { CommentsSection } from "@/components/comments-section"

export function MainContent() {
  const featuredProjects = [
    {
      id: "vanderbilt-navigation",
      year: "2023",
      category: "Case Study",
      title: "Vanderbilt University — Big VU Navigation Redesign",
      subtitle: "Unifying a fractured digital ecosystem through research-driven navigation design",
      description:
        "A redesign of Vanderbilt's multi-site navigation system, built to reduce user confusion and create a scalable, intuitive information architecture across departments.",
      image: "/university-website-navigation-interface.jpg",
      tags: ["UX Research", "Information Architecture", "Higher Ed", "Navigation Design"],
      stats: {
        duration: "4 months",
        team: "Cross-functional team",
        highlight: "Reduced 'hunt & peck' behaviors",
      },
    },
    {
      id: "sold-by-stevannah",
      year: "2023",
      category: "Case Study",
      title: "Sold by Stevannah – Luxury Real Estate Website",
      subtitle: "Creating an elegant digital presence for luxury real estate",
      description:
        "Designed and built a luxury real estate website emphasizing accessibility, brand cohesion, and responsive design for relocations and high-end buyers.",
      image: "/luxury-real-estate-website.png",
      tags: ["UX/UI Design", "Web Design", "Accessibility"],
      stats: {
        duration: "3 months",
        team: "Solo designer",
        highlight: "Increased engagement",
      },
    },
    {
      id: "blair-school",
      year: "2023",
      category: "Case Study",
      title: "Blair School of Music — Website Redesign",
      subtitle: "Bringing artistic identity and accessibility to Vanderbilt's digital ecosystem",
      description:
        "A structured redesign of Blair's website using a new CMS, accessibility standards, and balanced visual identity—improving navigation clarity and modernizing the experience for students, parents, and faculty.",
      image: "/music-school-website-interface.jpg",
      tags: ["Web Design", "Accessibility", "Higher Ed", "Information Architecture"],
      stats: {
        duration: "5 months",
        team: "Faculty + student collaboration",
        highlight: "Clearer, simplified IA",
      },
    },
    {
      id: "csv-stack-ai",
      year: "2024",
      category: "Case Study",
      title: "CSV Stack AI — SaaS Landing Experience",
      subtitle: "Designing clarity for a technical AI product through conversion-led UX",
      description:
        "A landing page and onboarding flow redesign for an AI SaaS product, focused on simplifying technical value and improving developer acquisition.",
      image: "/ai-saas-landing-page-interface.jpg",
      tags: ["SaaS", "Web Design", "Conversion UX", "Onboarding"],
      stats: {
        duration: "2 months",
        team: "Founder + Designer",
        highlight: "Improved clarity in concept testing",
      },
    },
  ]

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <Card className="p-8 bg-gradient-to-r from-card to-muted border-2 border-primary/20 retro-border">
        <div className="text-center space-y-4">
          <h1 className="font-display text-4xl font-bold text-primary">Welcome to My Digital Space!</h1>
          <p className="text-lg text-foreground font-retro">Where pixels meet purpose and users come first ✨</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a UX designer passionate about creating meaningful digital experiences. With 5+ years in the field, I
            specialize in user research, interaction design, and turning complex problems into simple, delightful
            solutions.
          </p>
          <Link href="/work" className="link-sparkle">
            {" "}
            {/* added link-sparkle class */}
            <Button className="sparkle-hover font-retro">
              View My Work <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </Card>

      {/* Featured Projects */}
      <div className="space-y-6">
        <div className="relative inline-block">
          <h2 className="font-display text-2xl font-bold text-primary">Featured Case Studies</h2>
          <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-blue-400 to-yellow-400 rounded-full"></div>
        </div>

        {featuredProjects.map((project, index) => (
          <Card
            key={project.id}
            className="group p-0 bg-[#FFF7ED] border border-[#7A5C58]/30 shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1"
            style={{ borderRadius: "16px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-0">
              {/* Project Image - Left Side */}
              <div className="relative h-64 md:h-full rounded-l-2xl overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Project Details - Right Side */}
              <div className="p-8 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Year + Category */}
                  <p className="text-sm font-medium text-[#7A5C58] tracking-wide">
                    {project.year} • {project.category}
                  </p>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-[#1F1F1F] leading-tight">{project.title}</h3>

                  {/* Subtitle in Pink */}
                  <p className="text-base font-medium text-[#E057A0] leading-relaxed">{project.subtitle}</p>

                  {/* Summary Paragraph */}
                  <p className="text-[#1F1F1F]/80 text-sm leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="px-3 py-1 text-xs font-medium bg-[#F7D8B8] text-[#7A5C58] border border-[#7A5C58]/20 rounded-full hover:bg-[#E057A0]/10 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats Row */}
                  {project.stats && (
                    <div className="flex flex-wrap gap-6 pt-2 text-sm text-[#7A5C58]">
                      <div>
                        <span className="font-semibold">Duration:</span> {project.stats.duration}
                      </div>
                      <div>
                        <span className="font-semibold">Team:</span> {project.stats.team}
                      </div>
                      <div className="text-[#E057A0] font-medium">{project.stats.highlight}</div>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <div className="flex items-center justify-start pt-4">
                  <Link href={`/work/${project.id}`}>
                    <Button
                      size="lg"
                      className="font-medium bg-[#E057A0] hover:bg-[#E057A0]/90 text-white transition-all duration-300 group-hover:shadow-lg rounded-full px-6"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Comments Section */}
      <CommentsSection />
    </div>
  )
}
