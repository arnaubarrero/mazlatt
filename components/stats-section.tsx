"use client"

import { useLanguage, translations } from "@/hooks/use-language"
import { DollarSign, Clock, Shield, Headphones } from "lucide-react"

export function StatsSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    {
      icon: DollarSign,
      title: t.stats.competitivePrices,
      description: t.stats.competitivePricesDesc,
    },
    {
      icon: Shield,
      title: t.stats.quality,
      description: t.stats.qualityDesc,
    },
    {
      icon: Headphones,
      title: t.stats.support7days,
      description: t.stats.support7daysDesc,
    },
    {
      icon: Clock,
      title: t.stats.fastDelivery,
      description: t.stats.fastDeliveryDesc,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t.stats.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.stats.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mx-auto mb-6 p-4 rounded-2xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
