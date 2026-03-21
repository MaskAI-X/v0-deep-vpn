"use client"

import { JellyfishIcon } from "./jellyfish-icon"

export function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-cyan-950/20 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Company */}
          <div className="flex items-center gap-3">
            <JellyfishIcon className="w-10 h-10 text-cyan-400" />
            <div>
              <div className="font-bold text-lg gradient-text">DeepVPN</div>
              <div className="text-xs text-muted-foreground">by DeepRoot AI Pte Ltd</div>
            </div>
          </div>
          
          {/* Links */}
          <nav className="flex items-center gap-8">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
        
        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DeepRoot AI Pte Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Singapore UEN: 202XXXXXXX
          </p>
        </div>
      </div>
    </footer>
  )
}
