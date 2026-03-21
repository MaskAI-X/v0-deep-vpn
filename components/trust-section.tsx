"use client"

import { Building2, FileText, Server } from "lucide-react"

const trustItems = [
  {
    icon: Building2,
    title: "DeepRoot AI Pte Ltd",
    subtitle: "Singapore Registered",
    description: "A legitimate company operating under Singapore's robust legal framework for technology businesses.",
  },
  {
    icon: FileText,
    title: "PDPA Compliant",
    subtitle: "No Mandatory Logging",
    description: "Singapore's Personal Data Protection Act does not require VPN providers to log user activity.",
  },
  {
    icon: Server,
    title: "RAM-Only Servers",
    subtitle: "Zero Disk Storage",
    description: "All servers run entirely in RAM. Data is physically impossible to store or retrieve after reboot.",
  },
]

export function TrustSection() {
  return (
    <section className="relative py-24 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Built on Trust</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparency is our foundation. Here's why you can trust DeepVPN with your privacy.
          </p>
        </div>
        
        {/* Trust Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="glass-card rounded-2xl p-8 text-center group hover:border-cyan-400/40 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center border border-cyan-500/30 mx-auto">
                  <item.icon className="w-8 h-8 text-cyan-400" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-1 text-foreground group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              <div className="text-sm text-cyan-400/80 font-medium mb-4">
                {item.subtitle}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Additional Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-cyan-500/30">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Independently audited • Open-source protocols • Community trusted
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
