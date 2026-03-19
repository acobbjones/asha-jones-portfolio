import type { ReactNode } from "react"
import { Navigation } from "./navigation"

interface MySpaceLayoutProps {
  children: ReactNode
  showNavigation?: boolean
  fluid?: boolean
}

export function MySpaceLayout({ children, showNavigation = true, fluid = false }: MySpaceLayoutProps) {
  return (
    <div className="min-h-screen bg-transparent">
      {showNavigation && <Navigation />}
      <main className={fluid ? "w-full" : "max-w-6xl mx-auto p-4 sm:p-6"}>{children}</main>
    </div>
  )
}

export default MySpaceLayout
