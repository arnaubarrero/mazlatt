"use client"

import { Button } from "@/components/ui/button"
import { useLanguage, translations } from "@/hooks/use-language"
import { ArrowRight, Code, Brain, Zap, Sparkles, Cpu, Network } from "lucide-react"

export function HeroSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="absolute top-1/4 left-1/4 animate-bounce delay-300">
        <Cpu className="h-6 w-6 text-primary/30" />
      </div>
      <div className="absolute top-1/3 right-1/3 animate-bounce delay-700">
        <Network className="h-8 w-8 text-accent/40" />
      </div>
      <div className="absolute bottom-1/3 left-1/5 animate-bounce delay-500">
        <Sparkles className="h-5 w-5 text-primary/35" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-6 p-6 rounded-3xl bg-card/80 backdrop-blur-sm border-2 border-primary/20 shadow-2xl">
              <div className="relative">
                <Code className="h-10 w-10 text-primary animate-pulse" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping" />
              </div>
              <div className="relative">
                <Brain className="h-10 w-10 text-accent animate-pulse delay-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping delay-300" />
              </div>
              <div className="relative">
                <Zap className="h-10 w-10 text-primary animate-pulse delay-700" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping delay-700" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {t.hero.title}
            </span>
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
              {t.hero.subtitle}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground text-pretty mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            {t.hero.description}
          </p>

          <Button
            size="lg"
            className="gap-3 text-lg px-10 py-7 rounded-2xl bg-primary hover:bg-primary/90 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-primary/25 text-white font-semibold"
          >
            {t.hero.cta}
            <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105">
              <Code className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Software a Medida</h3>
              <p className="text-sm text-muted-foreground">Desarrollo personalizado</p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:transform hover:scale-105">
              <Brain className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Inteligencia Artificial</h3>
              <p className="text-sm text-muted-foreground">Soluciones inteligentes</p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105">
              <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Entrenamiento IA</h3>
              <p className="text-sm text-muted-foreground">Modelos optimizados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
