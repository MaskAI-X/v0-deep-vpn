"use client"

import { JellyfishIcon } from "../jellyfish-icon"

export function DownloadHero() {
  return (
    <section className="relative pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Floating Jellyfish */}
        <div className="relative mx-auto w-24 h-24 mb-8 animate-float">
          <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl animate-pulse-glow" />
          <JellyfishIcon className="w-24 h-24 text-cyan-400 relative z-10" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text text-glow">Download DeepVPN</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
          Get started in seconds. No registration. No credit card. Just download, connect, and browse securely.
        </p>

        {/* QR Code Section */}
        <div className="glass-card rounded-2xl p-6 inline-block">
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center">
              {/* QR Code Placeholder */}
              <svg viewBox="0 0 100 100" className="w-28 h-28">
                <rect x="5" y="5" width="25" height="25" fill="#0a0e27" />
                <rect x="10" y="10" width="15" height="15" fill="white" />
                <rect x="13" y="13" width="9" height="9" fill="#0a0e27" />
                
                <rect x="70" y="5" width="25" height="25" fill="#0a0e27" />
                <rect x="75" y="10" width="15" height="15" fill="white" />
                <rect x="78" y="13" width="9" height="9" fill="#0a0e27" />
                
                <rect x="5" y="70" width="25" height="25" fill="#0a0e27" />
                <rect x="10" y="75" width="15" height="15" fill="white" />
                <rect x="13" y="78" width="9" height="9" fill="#0a0e27" />
                
                <rect x="35" y="5" width="5" height="5" fill="#0a0e27" />
                <rect x="45" y="5" width="5" height="5" fill="#0a0e27" />
                <rect x="55" y="5" width="5" height="5" fill="#0a0e27" />
                <rect x="35" y="15" width="5" height="5" fill="#0a0e27" />
                <rect x="50" y="15" width="5" height="5" fill="#0a0e27" />
                
                <rect x="35" y="35" width="30" height="30" fill="#0a0e27" />
                <rect x="40" y="40" width="20" height="20" fill="white" />
                <rect x="45" y="45" width="10" height="10" fill="#0a0e27" />
                
                <rect x="5" y="35" width="5" height="5" fill="#0a0e27" />
                <rect x="15" y="40" width="5" height="5" fill="#0a0e27" />
                <rect x="5" y="50" width="5" height="5" fill="#0a0e27" />
                <rect x="20" y="55" width="5" height="5" fill="#0a0e27" />
                
                <rect x="70" y="40" width="5" height="5" fill="#0a0e27" />
                <rect x="80" y="35" width="5" height="5" fill="#0a0e27" />
                <rect x="90" y="50" width="5" height="5" fill="#0a0e27" />
                <rect x="75" y="55" width="5" height="5" fill="#0a0e27" />
                
                <rect x="70" y="70" width="25" height="25" fill="#0a0e27" opacity="0.3" />
                <rect x="75" y="75" width="5" height="5" fill="#0a0e27" />
                <rect x="85" y="80" width="5" height="5" fill="#0a0e27" />
                <rect x="80" y="90" width="5" height="5" fill="#0a0e27" />
              </svg>
            </div>
            <p className="text-sm text-muted-foreground">Scan to download on mobile</p>
          </div>
        </div>
      </div>
    </section>
  )
}
