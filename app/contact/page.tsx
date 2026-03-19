"use client"

import type React from "react"
import { useState } from "react"
import { MySpaceLayout } from "@/components/myspace-layout"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Linkedin, Instagram, Send, CheckCircle2 } from "lucide-react"
import { FadeUp, HeroFadeUp } from "@/components/scroll-animations"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })

  // Honeypot field for bot detection
  const [honeypot, setHoneypot] = useState("")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Basic input sanitization
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/[<>]/g, '') // Remove angle brackets
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // If honeypot is filled, silently reject (bot detected)
    if (honeypot) {
      setSubmitted(true)
      return
    }

    setIsSubmitting(true)

    // Sanitize all inputs before submission
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      projectType: sanitizeInput(formData.projectType),
      message: sanitizeInput(formData.message),
    }

    // Simulate form submission with sanitized data
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", projectType: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <MySpaceLayout fluid>
      <div className="min-h-screen">
        <section className="w-full bg-transparent border-b border-purple-100">
          <div className="max-w-[1200px] mx-auto px-6 py-[70px]">
            <HeroFadeUp>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#7B6B9E] mb-4 block">Contact</span>
              <h1 className="font-display text-5xl sm:text-6xl font-bold text-[#1F1F1F] mb-4 max-w-4xl">
                Let's build something thoughtful.
              </h1>
              <p className="text-lg sm:text-xl text-[#7B6B9E] max-w-2xl">
                Open to full-time UX roles, contract engagements, and meaningful design conversations.
              </p>
            </HeroFadeUp>
          </div>
        </section>

        {/* Main content */}
        <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
          {/* SECTION: "Get In Touch" */}
          <FadeUp><div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-1 shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="bg-white/95 rounded-2xl p-8 md:p-10 text-center border-l-4 border-l-transparent group-hover:border-l-[#c4a0cc] transition-all duration-300">
              <div className="max-w-3xl mx-auto space-y-4">
                <h2 className="font-display text-3xl font-bold text-[#1F1F1F]">Get In Touch</h2>
                <p className="text-[#374151] text-lg leading-relaxed">
                  {"I'm currently exploring full-time UX opportunities at companies building products that matter. Whether you're a hiring manager, recruiter, or potential collaborator — I'd love to connect."}
                </p>
              </div>
            </div>
          </div></FadeUp>

          {/* CONTACT FORM SECTION */}
          <FadeUp><div id="contact-form">
            <Card className="p-8 md:p-10 bg-transparent border border-purple-100 border-l-4 border-l-transparent hover:border-l-[#c4a0cc] rounded-2xl shadow-[0px_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300">
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#1F1F1F]">Message Sent!</h3>
                  <p className="text-[#7B6B9E] text-lg">
                    Incredible — thanks for reaching out! I’ll get back to you soon.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 border-purple-200 text-[#7B6B9E] hover:bg-[#7B6B9E]/5"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Honeypot field - hidden from users, visible to bots */}
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#1F1F1F] font-medium">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white border-purple-200 focus:border-[#E057A0] focus:ring-[#E057A0]/20 h-12 rounded-lg"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#1F1F1F] font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white border-purple-200 focus:border-[#E057A0] focus:ring-[#E057A0]/20 h-12 rounded-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="text-[#1F1F1F] font-medium">
                      Reason for Reaching Out
                    </Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) => handleSelectChange("projectType", value)}
                    >
                      <SelectTrigger className="bg-white border-purple-200 focus:border-[#E057A0] focus:ring-[#E057A0]/20 h-12 rounded-lg">
                        <SelectValue placeholder="Select a reason" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time-role">Full-Time Role</SelectItem>
                        <SelectItem value="contract">{"Contract / Freelance"}</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="just-saying-hi">Just Saying Hi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#1F1F1F] font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-white border-purple-200 focus:border-[#E057A0] focus:ring-[#E057A0]/20 rounded-lg resize-none p-4"
                      placeholder="Tell me about the role or what you're working on — or just say hello."
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-full px-8 py-4 font-bold shadow-sm transition-all duration-200 active:-translate-y-0.5 text-sm w-full md:w-auto flex items-center justify-center gap-2"
                      style={{ background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 50%, #e8d5f0 100%)", color: "#5a3e5c", border: "1px solid rgba(240,210,230,0.6)", boxShadow: "0 2px 12px rgba(200,160,200,0.2)" }}
                      onMouseEnter={e => {
                        const span = e.currentTarget.querySelector('span');
                        if (span) span.style.textDecoration = "underline";
                      }}
                      onMouseLeave={e => {
                        const span = e.currentTarget.querySelector('span');
                        if (span) span.style.textDecoration = "none";
                      }}
                    >
                      {isSubmitting ? (
                        <span style={{ fontFamily: "Courier New, Courier, monospace", textDecoration: "none" }}>Sending...</span>
                      ) : (
                        <>
                          <span style={{ fontFamily: "Courier New, Courier, monospace", textDecoration: "none" }}>Send Message</span>
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div></FadeUp>

          {/* OPTIONAL ALT-CONTACTS SECTION */}
          <FadeUp><div className="text-center space-y-6">
            <div className="space-y-2">
              <h3 className="font-display text-2xl font-bold text-[#1F1F1F]">Prefer Email?</h3>
              <p className="text-[#7B6B9E]">
                You can reach me directly at:{" "}
                <a
                  href="mailto:asha.cobbjones@gmail.com"
                  className="inline-block px-3 py-1 rounded-full font-medium transition-all hover:underline hover:opacity-90"
style={{ background: "rgba(232,213,240,0.3)", color: "#5a3e5c" }}
                >
                  asha.cobbjones@gmail.com
                </a>
              </p>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/ashacobb-jones/"
                target="_blank" rel="noopener noreferrer"
                rel="noopener noreferrer"
                className="transition-colors p-2 rounded-full hover:bg-[#b3a2bb]/40"
                style={{ color: "#7a6a82" }}
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank" rel="noopener noreferrer"
                rel="noopener noreferrer"
                className="transition-colors p-2 rounded-full hover:bg-[#b3a2bb]/40"
                style={{ color: "#7a6a82" }}
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div></FadeUp>

          {/* TOUCH OF PERSONALITY */}
          <FadeUp><div className="text-center pt-8 border-t border-purple-100">
            <p className="text-sm text-[#7B6B9E]/80 italic">
              PS: I check my email often — so feel free to reach out anytime
            </p>
          </div></FadeUp>
        </div>
      </div>
    </MySpaceLayout>
  )
}
