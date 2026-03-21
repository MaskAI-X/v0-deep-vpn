"use client"

import { Shield, Zap, Lock, Globe, Gift, Power } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Zero-Log Policy",
    description: "We never track, store, or share your online activity. Your privacy is absolute.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "17 optimized servers across 13 countries. Ultra-low latency for seamless browsing.",
  },
  {
    icon: Lock,
    title: "Military-Grade Encryption",
    description: "VLESS Reality + Hysteria2 protocols. The most advanced encryption available.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Access content worldwide. Bypass geo-restrictions with servers spanning continents.",
  },
  {
    icon: Gift,
    title: "Free Forever",
    description: "3GB monthly data absolutely free. No hidden costs, no premium upsells.",
  },
  {
    icon: Power,
    title: "Kill Switch",
    description: "Automatic protection if connection drops. Your real IP never gets exposed.",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative py-24 px-4">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Why Choose DeepVPN?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Built for privacy enthusiasts who demand uncompromising security without sacrificing speed.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/40"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-4 relative">
                <div className="absolute inset-0 bg-cyan-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center border border-cyan-500/30">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
