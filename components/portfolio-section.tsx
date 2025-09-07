"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage, translations } from "@/hooks/use-language"

export function PortfolioSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const projects = [
    {
      title: t.portfolio.project1.title,
      description: t.portfolio.project1.description,
      extendedDescription: t.portfolio.project1.extendedDescription,
      image: "/ai-dashboard-interface.jpg",
    },
    {
      title: t.portfolio.project2.title,
      description: t.portfolio.project2.description,
      extendedDescription: t.portfolio.project2.extendedDescription,
      image: "/computer-vision-analysis.png",
    },
    {
      title: t.portfolio.project3.title,
      description: t.portfolio.project3.description,
      extendedDescription: t.portfolio.project3.extendedDescription,
      image: "/modern-web-application.png",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t.portfolio.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.portfolio.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-card/50 backdrop-blur"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.extendedDescription}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
