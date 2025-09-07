"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage, translations } from "@/hooks/use-language"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const testimonials = [
    {
      name: t.testimonials.client1.name,
      content: t.testimonials.client1.content,
      rating: 5,
      avatar: "/professional-headshot.png",
    },
    {
      name: t.testimonials.client2.name,
      content: t.testimonials.client2.content,
      rating: 5,
      avatar: "/business-executive.png",
    },
    {
      name: t.testimonials.client3.name,
      content: t.testimonials.client3.content,
      rating: 5,
      avatar: "/startup-founder.png",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t.testimonials.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.testimonials.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-accent/5"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
