"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage, type Language } from "@/hooks/use-language"

const languages = {
  es: { name: "Español", flag: "🇪🇸" },
  en: { name: "English", flag: "🇺🇸" },
  fr: { name: "Français", flag: "🇫🇷" },
  uk: { name: "Українська", flag: "🇺🇦" },
  ru: { name: "Русский", flag: "🇷🇺" },
}

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <span className="text-lg">{languages[language].flag}</span>
          <span className="hidden sm:inline">{languages[language].name}</span>
          <span className="sm:hidden">{language.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {Object.entries(languages).map(([code, { name, flag }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code as Language)}
            className="gap-3 cursor-pointer hover:bg-primary/10"
          >
            <span className="text-lg">{flag}</span>
            <span className="font-medium">{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
