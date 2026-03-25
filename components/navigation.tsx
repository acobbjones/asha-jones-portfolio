"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"

const caseStudies = [
  { href: "/work/vanderbilt-navigation", label: "Big VU Navigation" },
  { href: "/work/sold-by-stevannah", label: "Sold by Stevannah" },
  { href: "/work/blair-school", label: "Blair School of Music" },
  { href: "/work/csv-stack-ai", label: "CSV Stack" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isWorkOpen, setIsWorkOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobileWorkOpen, setIsMobileWorkOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsWorkOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
    setIsMobileWorkOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isMobileOpen])

  const isWorkPage = pathname.startsWith("/work") || pathname === "/more-work"

  const activePillStyle = {
    background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 50%, #e8d5f0 100%)",
    boxShadow: "0 2px 12px rgba(200,160,200,0.25)",
    border: "1px solid rgba(240,210,230,0.6)",
  }

  return (
    <>
      <div className="w-full mb-6 sticky top-0 z-50 px-6 pt-4">
        {/* Outer row: logo left, pill absolutely centered */}
        <div className="relative flex items-center w-full">

          {/* Logo — left anchored */}
          <Link href="/" scroll={true} className="flex items-center no-underline flex-shrink-0 z-10">
            <Image
              src="/images/logo-wordmark.png"
              alt="Asha Jones"
              width={200}
              height={80}
              className="hidden md:block h-16 w-auto object-contain"
            />
            <Image
              src="/images/logo-mark.png"
              alt="Asha Jones"
              width={48}
              height={48}
              className="block md:hidden h-12 w-auto object-contain"
            />
          </Link>

          {/* Nav pill — absolutely centered on desktop */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <div
              className="rounded-full px-4 py-2 flex items-center gap-2"
              style={{
                background: "rgba(255, 255, 255, 0.40)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.55)",
                boxShadow: "0 4px 24px rgba(180, 160, 200, 0.12), inset 0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              <nav
                className="flex items-center gap-2 relative"
                style={{ fontFamily: "Courier New, Courier, monospace" }}
              >
                <Link
                  href="/"
                  scroll={true}
                  className={cn(
                    "px-5 py-2 rounded-full transition-all cursor-pointer font-bold no-underline text-sm",
                    pathname === "/" ? "text-[#5a3e5c]" : "text-[#4a4458] hover:bg-black/10"
                  )}
                  style={{ fontFamily: "Courier New, Courier, monospace", ...(pathname === "/" && activePillStyle) }}
                >
                  Home
                </Link>

                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsWorkOpen(!isWorkOpen)}
                    onBlur={() => setTimeout(() => setIsWorkOpen(false), 200)}
                    className={cn(
                      "flex items-center gap-1 px-5 py-2 rounded-full font-bold transition-all cursor-pointer text-sm",
                      isWorkPage ? "text-[#5a3e5c]" : "text-[#4a4458] hover:bg-black/10"
                    )}
                    style={{ fontFamily: "Courier New, Courier, monospace", ...(isWorkPage && activePillStyle) }}
                  >
                    Work
                    <ChevronDown size={14} className={`transition-transform ${isWorkOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isWorkOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-2xl py-2 min-w-[240px] z-50"
                      style={{
                        background: "rgba(255,255,255,0.97)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        border: "1px solid rgba(255,255,255,0.6)",
                        boxShadow: "0 8px 32px rgba(180,160,200,0.18)",
                      }}
                    >
                      {caseStudies.map((study, index) => (
                        <Link
                          key={study.href}
                          href={study.href}
                          scroll={true}
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => setIsWorkOpen(false)}
                          className={cn(
                            "block px-4 py-2 text-[#4a4458] hover:text-[#5a3e5c] hover:bg-white/60 transition-all duration-200 text-sm no-underline hover:underline",
                            index === 0 && "rounded-t-xl"
                          )}
                          style={{ fontFamily: "Courier New, Courier, monospace" }}
                        >
                          {study.label}
                        </Link>
                      ))}
                      <div className="border-t border-[#e8d5f0]/60 my-2" />
                      <Link
                        href="/more-work"
                        scroll={true}
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => setIsWorkOpen(false)}
                        className="block px-4 py-2 text-[#7a6a82] hover:bg-white/60 rounded-b-xl hover:underline transition-all duration-200 text-sm italic no-underline"
                        style={{ fontFamily: "Courier New, Courier, monospace" }}
                      >
                        More Work
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/about"
                  scroll={true}
                  className={cn(
                    "px-5 py-2 rounded-full transition-all cursor-pointer font-bold no-underline text-sm",
                    pathname === "/about" ? "text-[#5a3e5c]" : "text-[#4a4458] hover:bg-black/10"
                  )}
                  style={{ fontFamily: "Courier New, Courier, monospace", ...(pathname === "/about" && activePillStyle) }}
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  scroll={true}
                  className={cn(
                    "px-5 py-2 rounded-full transition-all cursor-pointer font-bold no-underline text-sm",
                    pathname === "/contact" ? "text-[#5a3e5c]" : "text-[#4a4458] hover:bg-black/10"
                  )}
                  style={{ fontFamily: "Courier New, Courier, monospace", ...(pathname === "/contact" && activePillStyle) }}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>

          {/* Mobile: hamburger pill on the right */}
          <div
            className="md:hidden ml-auto rounded-full px-3 py-2"
            style={{
              background: "rgba(255, 255, 255, 0.40)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.55)",
              boxShadow: "0 4px 24px rgba(180, 160, 200, 0.12)",
            }}
          >
            <button
              className="flex items-center justify-center w-9 h-9 rounded-full transition-all hover:bg-black/10"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} color="#5a3e5c" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col"
          style={{
            background: "rgba(240, 230, 248, 0.92)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#e8d5f0]/60">
            <Link href="/" scroll={true} onClick={() => setIsMobileOpen(false)}>
              <Image
                src="/images/logo-mark.png"
                alt="Asha Jones"
                width={48}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/10 transition-all"
              aria-label="Close menu"
            >
              <X size={20} color="#5a3e5c" />
            </button>
          </div>

          <nav className="flex flex-col flex-1 px-6 py-4" style={{ fontFamily: "Courier New, Courier, monospace" }}>
            <Link
              href="/"
              scroll={true}
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center justify-between py-5 border-b border-[#e8d5f0]/60 no-underline"
            >
              <span className="text-2xl font-bold" style={{ color: pathname === "/" ? "#5a3e5c" : "#4a4458" }}>Home</span>
              {pathname === "/" && (
                <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "linear-gradient(135deg, #f5e6d3, #f0d9e8, #e8d5f0)", color: "#5a3e5c" }}>active</span>
              )}
            </Link>

            <div className="border-b border-[#e8d5f0]/60">
              <button onClick={() => setIsMobileWorkOpen(!isMobileWorkOpen)} className="w-full flex items-center justify-between py-5">
                <span className="text-2xl font-bold" style={{ color: isWorkPage ? "#5a3e5c" : "#4a4458" }}>Work</span>
                <div className="flex items-center gap-2">
                  {isWorkPage && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "linear-gradient(135deg, #f5e6d3, #f0d9e8, #e8d5f0)", color: "#5a3e5c" }}>active</span>
                  )}
                  <ChevronDown size={18} color="#5a3e5c" className={`transition-transform duration-300 ${isMobileWorkOpen ? "rotate-180" : ""}`} />
                </div>
              </button>
              {isMobileWorkOpen && (
                <div className="pb-4 space-y-1 pl-2">
                  {caseStudies.map((study) => (
                    <Link
                      key={study.href}
                      href={study.href}
                      scroll={true}
                      onClick={() => setIsMobileOpen(false)}
                      className="block py-3 text-base font-medium no-underline hover:underline border-b border-[#e8d5f0]/30 last:border-0"
                      style={{ color: pathname === study.href ? "#5a3e5c" : "#7a6a82" }}
                    >
                      {study.label}
                    </Link>
                  ))}
                  <Link href="/more-work" scroll={true} onClick={() => setIsMobileOpen(false)} className="block py-3 text-base italic no-underline hover:underline" style={{ color: "#7a6a82" }}>
                    More Work
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" scroll={true} onClick={() => setIsMobileOpen(false)} className="flex items-center justify-between py-5 border-b border-[#e8d5f0]/60 no-underline">
              <span className="text-2xl font-bold" style={{ color: pathname === "/about" ? "#5a3e5c" : "#4a4458" }}>About</span>
              {pathname === "/about" && (
                <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "linear-gradient(135deg, #f5e6d3, #f0d9e8, #e8d5f0)", color: "#5a3e5c" }}>active</span>
              )}
            </Link>

            <Link href="/contact" scroll={true} onClick={() => setIsMobileOpen(false)} className="flex items-center justify-between py-5 no-underline">
              <span className="text-2xl font-bold" style={{ color: pathname === "/contact" ? "#5a3e5c" : "#4a4458" }}>Contact</span>
              {pathname === "/contact" && (
                <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "linear-gradient(135deg, #f5e6d3, #f0d9e8, #e8d5f0)", color: "#5a3e5c" }}>active</span>
              )}
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
