"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { FadeUp, HeroFadeUp, StaggerReveal, StaggerItem } from "@/components/scroll-animations"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { Navigation } from "@/components/navigation"

const caseStudies = [
  { href: "/work/vanderbilt-navigation", label: "Big VU Navigation" },
  { href: "/work/sold-by-stevannah", label: "Sold by Stevannah" },
  { href: "/work/blair-school", label: "Blair School of Music" },
  { href: "/work/csv-stack-ai", label: "CSV Stack" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isWorkOpen, setIsWorkOpen] = useState(false)
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

  const isWorkPage = pathname.startsWith("/work") || pathname === "/more-work"

  return (
    <div className="w-full mb-6 sticky top-0 z-50 px-4 pt-4">
      {/* Frosted glass nav bar — pill shaped, floats over texture */}
      <div
        className="mx-auto max-w-xl rounded-full px-4 py-2 flex justify-center items-center gap-2"
        style={{
          background: "rgba(255, 255, 255, 0.40)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.55)",
          boxShadow: "0 4px 24px rgba(180, 160, 200, 0.12), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        <nav
          className="flex justify-center items-center gap-2 relative"
          style={{ fontFamily: "Courier New, Courier, monospace" }}
        >
          {/* Home */}
          <Link
            href="/"
            scroll={true}
            className={cn(
              "px-5 py-2 rounded-full transition-all cursor-pointer font-bold no-underline text-sm",
              pathname === "/"
                ? "text-[#5a3e5c]"
                : "text-[#4a4458] hover:bg-black/10"
            )}
            style={{
              fontFamily: "Courier New, Courier, monospace",
              ...(pathname === "/" && {
                background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 50%, #e8d5f0 100%)",
                boxShadow: "0 2px 12px rgba(200,160,200,0.25)",
                border: "1px solid rgba(240,210,230,0.6)",
              }),
            }}
          >
            Home
          </Link>

          {/* Work Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsWorkOpen(!isWorkOpen)}
              onBlur={() => setTimeout(() => setIsWorkOpen(false), 200)}
              className={cn(
                "flex items-center gap-1 px-5 py-2 rounded-full font-bold transition-all cursor-pointer text-sm",
                isWorkPage ? "text-[#5a3e5c]" : "text-[#4a4458] hover:bg-black/10"
              )}
              style={{
                fontFamily: "Courier New, Courier, monospace",
                ...(isWorkPage && {
                  background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 50%, #e8d5f0 100%)",
                  boxShadow: "0 2px 12px rgba(200,160,200,0.25)",
                  border: "1px solid rgba(240,210,230,0.6)",
                }),
              }}
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

          {/* About */}
          <Link
            href="/about"
            scroll={true}
            className={cn(
              "px-5 py-2 rounded-full transition-all cursor-pointer font-bold no-underline text-sm",
              pathname === "/about"
                ? "text-[#5a3e5c]"
                : "text-[#4a4458] hover:bg-black/10"
            )}
            style={{
              fontFamily: "Courier New, Courier, monospace",
              ...(pathname === "/about" && {
                background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 50%, #e8d5f0 100%)",
                boxShadow: "0 2px 12px rgba(200,160,200,0.25)",
                border: "1px solid rgba(240,210,230,0.6)",
              }),
            }}
          >
            About
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            scroll={true}
            className={cn(
              "px-5 py-2 rounded-full transition-all cursor-pointer font-bold no-underline text-sm",
              pathname === "/contact"
                ? "text-[#5a3e5c]"
                : "text-[#4a4458] hover:bg-black/10"
            )}
            style={{
              fontFamily: "Courier New, Courier, monospace",
              ...(pathname === "/contact" && {
                background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 50%, #e8d5f0 100%)",
                boxShadow: "0 2px 12px rgba(200,160,200,0.25)",
                border: "1px solid rgba(240,210,230,0.6)",
              }),
            }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  )
}
