"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { JellyfishIcon } from "./jellyfish-icon"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <JellyfishIcon className="w-8 h-8 text-cyan-400" />
          <span className="font-bold text-lg gradient-text">DeepVPN</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
            Features
          </a>
          <a href="#servers" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
            Servers
          </a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
            How It Works
          </a>
          <a href="#trust" className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
            Trust
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            size="sm"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-background font-semibold"
          >
            Download Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-xl p-6">
          <nav className="flex flex-col gap-4">
            <a
              href="#features"
              className="text-foreground hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#servers"
              className="text-foreground hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Servers
            </a>
            <a
              href="#how-it-works"
              className="text-foreground hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#trust"
              className="text-foreground hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Trust
            </a>
            <Button
              className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-background font-semibold"
            >
              Download Free
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
