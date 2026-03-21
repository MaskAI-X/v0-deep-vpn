"use client"

import { Apple, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { JellyfishIcon } from "./jellyfish-icon"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent rounded-full blur-3xl animate-aurora" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-teal-500/15 via-transparent to-transparent rounded-full blur-3xl animate-aurora" style={{ animationDelay: '-5s' }} />
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-cyan-600/10 to-teal-600/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,210,210,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,210,210,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Glowing Jellyfish Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative animate-float">
            <div className="absolute inset-0 blur-2xl bg-cyan-400/40 rounded-full scale-150" />
            <JellyfishIcon className="relative w-28 h-28 md:w-36 md:h-36 text-cyan-400" />
          </div>
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-foreground">Your Privacy. </span>
          <span className="gradient-text text-glow">Your Freedom.</span>
          <br />
          <span className="gradient-text text-glow">DeepVPN.</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Free, fast, secure VPN. No registration. No logs. <span className="text-cyan-400 font-semibold">Ever.</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-background font-semibold px-8 py-6 text-lg glow-cyan transition-all duration-300 hover:scale-105"
          >
            <Apple className="mr-2 h-5 w-5" />
            Download for iOS
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 h-5 w-5" />
            Download for macOS
          </Button>
        </div>
        
        {/* Trust Badge */}
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span>10GB free monthly + daily bonuses • No credit card required</span>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
