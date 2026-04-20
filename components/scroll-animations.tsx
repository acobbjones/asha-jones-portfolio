"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ReactNode } from "react"

// Respect prefers-reduced-motion
const useAnimationProps = () => {
  const shouldReduceMotion = useReducedMotion()
  return { shouldReduceMotion }
}

// Fade Up - the default animation
export function FadeUp({ 
  children, 
  delay = 0,
  className = "" 
}: { 
  children: ReactNode
  delay?: number
  className?: string 
}) {
  const { shouldReduceMotion } = useAnimationProps()
  
  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ 
        duration: shouldReduceMotion ? 0 : 0.6, 
        ease: "easeOut",
        delay: shouldReduceMotion ? 0 : delay 
      }}
    >
      {children}
    </motion.div>
  )
}

// Stagger Reveal - for grouped content
export function StaggerReveal({ 
  children, 
  className = "",
  staggerDelay = 0.08
}: { 
  children: ReactNode
  className?: string
  staggerDelay?: number
}) {
  const { shouldReduceMotion } = useAnimationProps()
  
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

// Stagger Item - child of StaggerReveal
export function StaggerItem({ 
  children, 
  className = "" 
}: { 
  children: ReactNode
  className?: string 
}) {
  const { shouldReduceMotion } = useAnimationProps()
  
  return (
    <motion.div
      className={className}
      variants={{
        hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: "easeOut"
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}

// Soft Pop - for personality moments only
export function SoftPop({ 
  children, 
  delay = 0,
  className = "" 
}: { 
  children: ReactNode
  delay?: number
  className?: string 
}) {
  const { shouldReduceMotion } = useAnimationProps()
  
  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97, y: 8 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ 
        duration: shouldReduceMotion ? 0 : 0.5, 
        ease: "easeOut",
        delay: shouldReduceMotion ? 0 : delay 
      }}
    >
      {children}
    </motion.div>
  )
}

// Hero animation - immediate fade up on load (not scroll triggered)
export function HeroFadeUp({ 
  children, 
  delay = 0,
  className = "" 
}: { 
  children: ReactNode
  delay?: number
  className?: string 
}) {
  const { shouldReduceMotion } = useAnimationProps()
  
  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: shouldReduceMotion ? 0 : 0.6, 
        ease: "easeOut",
        delay: shouldReduceMotion ? 0 : delay 
      }}
    >
      {children}
    </motion.div>
  )
}
