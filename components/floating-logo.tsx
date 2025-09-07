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
  // Eliminamos el cálculo de la opacidad

  return (
    <div
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
      style={{
        transform: `scale(${scale})`,
        opacity: 1,
      }}
    >
      <div className="text-6xl sm:text-8xl md:text-9xl font-bold text-primary/20 select-none">
        MAZLATT
      </div>
    </div>
  )
}
