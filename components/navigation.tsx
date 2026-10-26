"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [showLogo, setShowLogo] = useState(true)
  const [menuVisible, setMenuVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowLogo(window.scrollY < 150)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      requestAnimationFrame(() => requestAnimationFrame(() => setMenuVisible(true)))
    } else {
      setMenuVisible(false)
    }
  }, [isMobileOpen])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [isMobileOpen])

  const handleCloseMenu = () => {
    setMenuVisible(false)
    setTimeout(() => setIsMobileOpen(false), 350)
  }

  const isWorkPage = pathname.startsWith("/work") || pathname === "/more-work"

  const activePillStyle = {
    background: "linear-gradient(135deg, #f5e6d3 0%, #f0d9e8 50%, #e8d5f0 100%)",
    boxShadow: "0 2px 12px rgba(200,160,200,0.25)",
    border: "1px solid rgba(240,210,230,0.6)",
  }

  const courierFont = { fontFamily: "Courier New, Courier, monospace" }

  return (
    <>
      <div className="w-full mb-6 sticky top-0 z-50 px-6 pt-4">
        <div className="relative flex items-center w-full">

          {/* Logo */}
          <Link
            href="/"
            scroll={true}
            className="flex items-center no-underline flex-shrink-0 z-10 transition-all duration-300"
            style={{
              opacity: showLogo ? 1 : 0,
              pointerEvents: showLogo ? "auto" : "none",
              transform: showLogo ? "translateY(0)" : "translateY(-6px)",
            }}
          >
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
              width={56}
              height={56}
              className="block md:hidden h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav pill — absolutely centered */}
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
              <nav className="flex items-center gap-2 relative" style={courierFont}>

                <Link
                  href="/"
                  scroll={true}
                  className={cn(
                    "px-5 py-2 rounded-full transition-all cursor-pointer font-bold no-underline text-sm hover:underline",
                    pathname === "/" ? "text-[#5a3e5c]" : "text-[#4a4458] hover:bg-black/10"
                  )}
                  style={{ ...courierFont, textDecorationColor: "var(--myspace-purple)", ...(pathname === "/" && activePillStyle) }}
                >
                  Home
                </Link>

                <Link
                  href="/work"
                  scroll={true}
                  className={cn(
                    "flex items-center gap-1 px-5 py-2 rounded-full font-bold transition-all cursor-pointer text-sm hover:underline",
                    isWorkPage ? "text-[#5a3e5c]" : "text-[#4a4458] hover:bg-black/10"
                  )}
                  style={{ ...courierFont, textDecorationColor: "var(--myspace-purple)", ...(isWorkPage && activePillStyle) }}
                >
                  Work
                </Link>

                <Link
                  href="/about"
                  scroll={true}
                  className={cn(
                    "px-5 py-2 rounded-full transition-all cursor-pointer font-bold no-underline text-sm hover:underline",
                    pathname === "/about" ? "text-[#5a3e5c]" : "text-[#4a4458] hover:bg-black/10"
                  )}
                  style={{ ...courierFont, textDecorationColor: "var(--myspace-purple)", ...(pathname === "/about" && activePillStyle) }}
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  scroll={true}
                  className={cn(
                    "px-5 py-2 rounded-full transition-all cursor-pointer font-bold no-underline text-sm hover:underline",
                    pathname === "/contact" ? "text-[#5a3e5c]" : "text-[#4a4458] hover:bg-black/10"
                  )}
                  style={{ ...courierFont, textDecorationColor: "var(--myspace-purple)", ...(pathname === "/contact" && activePillStyle) }}
                >
                  Contact
                </Link>

              </nav>
            </div>
          </div>

          {/* Mobile: hamburger pill */}
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
        <>
          <div
            className="fixed inset-0 z-[99]"
            style={{
              background: "rgba(90, 62, 92, 0.15)",
              backdropFilter: "blur(4px)",
              opacity: menuVisible ? 1 : 0,
              transition: "opacity 350ms ease",
            }}
            onClick={handleCloseMenu}
          />

          <div
            className="fixed top-0 right-0 h-full z-[100] flex flex-col"
            style={{
              width: "80%",
              maxWidth: "360px",
              background: "rgba(245, 238, 252, 0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderLeft: "1px solid rgba(200, 180, 220, 0.3)",
              transform: menuVisible ? "translateX(0)" : "translateX(100%)",
              transition: "transform 350ms cubic-bezier(0.32, 0.72, 0, 1)",
            }}
          >
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-[#e8d5f0]/60">
              <Link href="/" scroll={true} onClick={handleCloseMenu}>
                <Image
                  src="/images/logo-mark.png"
                  alt="Asha Jones"
                  width={56}
                  height={56}
                  className="h-14 w-auto object-contain"
                />
              </Link>
              <button
                onClick={handleCloseMenu}
                className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/10 transition-all"
                aria-label="Close menu"
              >
                <X size={20} color="#5a3e5c" />
              </button>
            </div>

            <nav className="flex flex-col flex-1 px-6 py-4 overflow-y-auto" style={courierFont}>

              <Link
                href="/"
                scroll={true}
                onClick={handleCloseMenu}
                className="flex items-center justify-between py-5 border-b border-[#e8d5f0]/60 no-underline hover:underline"
                style={{ textDecorationColor: "var(--myspace-purple)" }}
              >
                <span className="text-2xl font-bold" style={{ color: pathname === "/" ? "#5a3e5c" : "#4a4458", ...courierFont }}>
                  Home
                </span>
                {pathname === "/" && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "linear-gradient(135deg, #f5e6d3, #f0d9e8, #e8d5f0)", color: "#5a3e5c" }}>
                    active
                  </span>
                )}
              </Link>

              <Link
                href="/work"
                scroll={true}
                onClick={handleCloseMenu}
                className="flex items-center justify-between py-5 border-b border-[#e8d5f0]/60 no-underline hover:underline"
                style={{ textDecorationColor: "var(--myspace-purple)" }}
              >
                <span className="text-2xl font-bold" style={{ color: isWorkPage ? "#5a3e5c" : "#4a4458", ...courierFont }}>
                  Work
                </span>
                {isWorkPage && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "linear-gradient(135deg, #f5e6d3, #f0d9e8, #e8d5f0)", color: "#5a3e5c" }}>
                    active
                  </span>
                )}
              </Link>

              <Link
                href="/about"
                scroll={true}
                onClick={handleCloseMenu}
                className="flex items-center justify-between py-5 border-b border-[#e8d5f0]/60 no-underline hover:underline"
                style={{ textDecorationColor: "var(--myspace-purple)" }}
              >
                <span className="text-2xl font-bold" style={{ color: pathname === "/about" ? "#5a3e5c" : "#4a4458", ...courierFont }}>
                  About
                </span>
                {pathname === "/about" && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "linear-gradient(135deg, #f5e6d3, #f0d9e8, #e8d5f0)", color: "#5a3e5c" }}>
                    active
                  </span>
                )}
              </Link>

              <Link
                href="/contact"
                scroll={true}
                onClick={handleCloseMenu}
                className="flex items-center justify-between py-5 border-b border-[#e8d5f0]/60 no-underline hover:underline"
                style={{ textDecorationColor: "var(--myspace-purple)" }}
              >
                <span className="text-2xl font-bold" style={{ color: pathname === "/contact" ? "#5a3e5c" : "#4a4458", ...courierFont }}>
                  Contact
                </span>
                {pathname === "/contact" && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "linear-gradient(135deg, #f5e6d3, #f0d9e8, #e8d5f0)", color: "#5a3e5c" }}>
                    active
                  </span>
                )}
              </Link>

            </nav>
          </div>
        </>
      )}
    </>
  )
}
