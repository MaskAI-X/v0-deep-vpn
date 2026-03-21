"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { JellyfishIcon } from "./jellyfish-icon"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <JellyfishIcon className="w-8 h-8 text-cyan-400" />
          <span className="font-bold text-lg gradient-text">DeepVPN</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm transition-colors ${
              isActive("/") ? "text-cyan-400" : "text-muted-foreground hover:text-cyan-400"
            }`}
          >
            Home
          </Link>
          <Link
            href="/download"
            className={`text-sm transition-colors ${
              isActive("/download") ? "text-cyan-400" : "text-muted-foreground hover:text-cyan-400"
            }`}
          >
            Download
          </Link>
          <Link
            href="/#features"
            className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#servers"
            className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
          >
            Servers
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-cyan-400 hover:bg-cyan-400/10"
            >
              Login
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button
              size="sm"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-background font-semibold"
            >
              Dashboard
            </Button>
          </Link>
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
            <Link
              href="/"
              className={`py-2 transition-colors ${
                isActive("/") ? "text-cyan-400" : "text-foreground hover:text-cyan-400"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/download"
              className={`py-2 transition-colors ${
                isActive("/download") ? "text-cyan-400" : "text-foreground hover:text-cyan-400"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download
            </Link>
            <Link
              href="/#features"
              className="text-foreground hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#servers"
              className="text-foreground hover:text-cyan-400 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Servers
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-cyan-500/20">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-400/10"
                >
                  Login
                </Button>
              </Link>
              <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-background font-semibold">
                  Dashboard
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
