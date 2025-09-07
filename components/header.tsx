"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage, translations } from "@/hooks/use-language"
import { Menu, X } from "lucide-react"

export function Header() {
  const { language } = useLanguage()
  const t = translations[language]
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Mazlatt
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#home"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
              >
                {t.nav.home}
              </Link>
              <Link
                href="#services"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
              >
                {t.nav.services}
              </Link>
              <Link
                href="#about"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
              >
                {t.nav.about}
              </Link>
              <Link
                href="#portfolio"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
              >
                {t.nav.portfolio}
              </Link>
              <Link
                href="#contact"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
              >
                {t.nav.contact}
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              <LanguageSelector />
              <ThemeToggle />

              {/* Mobile menu button */}
              <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />

          {/* Menu panel */}
          <div className="fixed top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b shadow-xl">
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <Link
                href="#home"
                className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link
                href="#services"
                className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.services}
              </Link>
              <Link
                href="#about"
                className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.about}
              </Link>
              <Link
                href="#portfolio"
                className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.portfolio}
              </Link>
              <Link
                href="#contact"
                className="text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
