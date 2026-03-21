"use client"

import { Download, Wifi, ShieldCheck } from "lucide-react"

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download",
    description: "Get DeepVPN from the App Store or download directly for macOS. Installation takes less than a minute.",
  },
  {
    icon: Wifi,
    step: "02",
    title: "Connect",
    description: "Open the app and tap connect. We automatically select the fastest server for you.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Browse Safely",
    description: "Your connection is now encrypted. Browse, stream, and download with complete privacy.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative py-24 px-4">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get protected in three simple steps. No account needed.
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
              )}
              
              <div className="text-center group">
                {/* Step number */}
                <div className="text-6xl md:text-7xl font-bold text-secondary/50 mb-4 transition-colors group-hover:text-cyan-500/30">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center border border-cyan-500/30 mx-auto">
                    <step.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
