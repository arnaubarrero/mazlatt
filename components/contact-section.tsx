"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage, translations } from "@/hooks/use-language"
import { Send, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const { language } = useLanguage()
  const t = translations[language]
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    // Here you would typically handle the form submission
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance mb-4">{t.contact.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t.contact.subtitle}</p>
          </div>

          <div className="grid gap-12 max-w-[800px] mx-auto">
            <Card className="border-0 shadow-xl bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-center text-2xl">{t.contact.sendMessage}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6 mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        {t.contact.name}
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="bg-background/50 border-2 focus:border-primary transition-colors h-12"
                        placeholder={t.contact.namePlaceholder}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        {t.contact.email}
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="bg-background/50 border-2 focus:border-primary transition-colors h-12"
                        placeholder={t.contact.emailPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      {t.contact.subject}
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      className="bg-background/50 border-2 focus:border-primary transition-colors h-12"
                      placeholder={t.contact.subjectPlaceholder}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      {t.contact.message}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="bg-background/50 border-2 focus:border-primary transition-colors resize-none"
                      placeholder={t.contact.messagePlaceholder}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2 h-12 text-white font-semibold bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    {t.contact.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
