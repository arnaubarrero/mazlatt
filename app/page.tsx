import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingLogo } from "@/components/floating-logo"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <FloatingLogo />
      <Header />
      <main className="relative z-10">
        <section id="home">
          <HeroSection />
        </section>
        <StatsSection />
        <section id="services">
          <ServicesSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="portfolio">
          <PortfolioSection />
        </section>
        <TestimonialsSection />
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}
