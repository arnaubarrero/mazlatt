"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage, type Language } from "@/hooks/use-language"

const languages = {
  es: { name: "Español", flag: "/flags/images.png" },
  en: { name: "English", flag: "/flags/uk.svg" },
  fr: { name: "Français", flag: "/flags/Flag_of_France.svg.webp" },
  uk: { name: "Українська", flag: "/flags/Flag_of_Ukraine.svg.webp" },
  ru: { name: "Русский", flag: "/flags/Flag_of_Russia.svg" },
}

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <img
            src={languages[language].flag}
            alt={language}
            className="w-5 h-5 rounded-full object-cover"
          />
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
            <img
              src={flag}
              alt={code}
              className="w-5 h-5 rounded-full object-cover"
            />
            <span className="font-medium">{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
