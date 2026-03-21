"use client"

import { Apple, Monitor, Smartphone, ComputerIcon as Windows } from "lucide-react"
import { Button } from "@/components/ui/button"

const platforms = [
  {
    name: "iOS",
    icon: Smartphone,
    available: true,
    badge: "App Store",
    requirements: [
      "iOS 15.0 or later",
      "Compatible with iPhone and iPad",
      "Requires 25 MB of storage",
    ],
    buttonText: "Download on App Store",
    href: "#",
  },
  {
    name: "macOS",
    icon: Apple,
    available: true,
    badge: "Direct Download",
    requirements: [
      "macOS 12.0 Monterey or later",
      "Apple Silicon & Intel supported",
      "Requires 45 MB of storage",
    ],
    buttonText: "Download for macOS",
    href: "#",
  },
  {
    name: "Android",
    icon: Smartphone,
    available: false,
    badge: "Coming Soon",
    requirements: [
      "Android 10.0 or later",
      "ARM64 and x86 supported",
      "Estimated Q2 2026",
    ],
    buttonText: "Notify Me",
    href: "#",
  },
  {
    name: "Windows",
    icon: Windows,
    available: false,
    badge: "Coming Soon",
    requirements: [
      "Windows 10 or later",
      "64-bit required",
      "Estimated Q3 2026",
    ],
    buttonText: "Notify Me",
    href: "#",
  },
]

export function PlatformCards() {
  return (
    <section className="relative py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          <span className="gradient-text">Choose Your Platform</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => {
            const Icon = platform.icon
            return (
              <div
                key={platform.name}
                className={`glass-card rounded-2xl p-6 transition-all duration-300 ${
                  platform.available
                    ? "hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10"
                    : "opacity-60"
                }`}
              >
                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      platform.available
                        ? "bg-gradient-to-br from-cyan-500/20 to-teal-500/20"
                        : "bg-muted/50"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        platform.available ? "text-cyan-400" : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{platform.name}</h3>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        platform.available
                          ? "bg-cyan-500/20 text-cyan-400"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {platform.badge}
                    </span>
                  </div>
                </div>

                {/* Requirements */}
                <ul className="space-y-2 mb-6">
                  {platform.requirements.map((req, index) => (
                    <li
                      key={index}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-cyan-400 mt-1">•</span>
                      {req}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Button
                  className={`w-full ${
                    platform.available
                      ? "bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-background font-semibold"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                  disabled={!platform.available}
                >
                  {platform.buttonText}
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
