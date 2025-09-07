"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage, translations } from "@/hooks/use-language"
import { Users, Award, Clock, Globe, Zap, Cpu } from "lucide-react"

export function AboutSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    {
      icon: Users,
      title: t.about.team.title,
      description: t.about.team.description,
    },
    {
      icon: Award,
      title: t.about.quality.title,
      description: t.about.quality.description,
    },
    {
      icon: Clock,
      title: t.about.experience.title,
      description: t.about.experience.description,
    },
    {
      icon: Globe,
      title: t.about.global.title,
      description: t.about.global.description,
    },
  ]

  return (
    <section id="about" className="py-20 backdrop-blur-sm bg-white/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-primary/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t.about.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.about.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10"
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 p-3 rounded-2xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-3xl blur-sm"></div>
          <div className="relative bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
            <div className="text-center mb-8">
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-primary/20">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{t.about.mission.title}</h3>
                <div className="p-3 rounded-full bg-accent/20">
                  <Cpu className="h-8 w-8 text-accent" />
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-6">
                {t.about.mission.description}
              </p>
              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
                <p className="text-base text-foreground/80 leading-relaxed">{t.about.automation.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
