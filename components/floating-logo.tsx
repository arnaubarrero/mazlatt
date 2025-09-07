"use client"

import { useEffect, useState } from "react"

export function FloatingLogo() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scale = Math.min(1 + scrollY * 0.001, 3)
  const opacity = Math.max(0.1, 1 - scrollY * 0.002)

  return (
    <div
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
      }}
    >
      <div className="text-6xl sm:text-8xl md:text-9xl font-bold text-primary/10 select-none">MAZLATT</div>
    </div>
  )
}
