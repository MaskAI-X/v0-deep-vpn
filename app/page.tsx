import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ServerMapSection } from "@/components/server-map-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TrustSection } from "@/components/trust-section"
import { Footer } from "@/components/footer"

export default function DeepVPNLandingPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      <HeroSection />
      
      <section id="features">
        <FeaturesSection />
      </section>
      
      <section id="servers">
        <ServerMapSection />
      </section>
      
      <section id="how-it-works">
        <HowItWorksSection />
      </section>
      
      <section id="trust">
        <TrustSection />
      </section>
      
      <Footer />
    </main>
  )
}
