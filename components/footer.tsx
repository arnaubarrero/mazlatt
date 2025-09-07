"use client"

import Link from "next/link"
import { useLanguage, translations } from "@/hooks/use-language"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl">Mazlatt</span>
            </div>
            <p className="text-muted-foreground text-pretty leading-relaxed">{t.footer.description}</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">{t.nav.services}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>{t.services.software.title}</li>
              <li>{t.services.ai.title}</li>
              <li>{t.services.training.title}</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Social</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Mazlatt. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
