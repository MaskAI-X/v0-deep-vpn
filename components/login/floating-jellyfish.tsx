"use client"

import { JellyfishIcon } from "../jellyfish-icon"

export function FloatingJellyfish() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Large background jellyfish */}
      <div
        className="absolute opacity-10 animate-float"
        style={{
          top: "10%",
          left: "5%",
          animationDelay: "0s",
          animationDuration: "8s",
        }}
      >
        <JellyfishIcon className="w-48 h-48 text-cyan-400" />
      </div>

      <div
        className="absolute opacity-5 animate-float"
        style={{
          top: "60%",
          right: "10%",
          animationDelay: "2s",
          animationDuration: "10s",
        }}
      >
        <JellyfishIcon className="w-64 h-64 text-teal-400" />
      </div>

      <div
        className="absolute opacity-8 animate-float"
        style={{
          bottom: "20%",
          left: "15%",
          animationDelay: "4s",
          animationDuration: "7s",
        }}
      >
        <JellyfishIcon className="w-32 h-32 text-cyan-300" />
      </div>

      {/* Small accent jellyfish */}
      <div
        className="absolute opacity-15 animate-float"
        style={{
          top: "30%",
          right: "25%",
          animationDelay: "1s",
          animationDuration: "6s",
        }}
      >
        <JellyfishIcon className="w-20 h-20 text-cyan-400" />
      </div>

      <div
        className="absolute opacity-10 animate-float"
        style={{
          top: "70%",
          left: "40%",
          animationDelay: "3s",
          animationDuration: "9s",
        }}
      >
        <JellyfishIcon className="w-24 h-24 text-teal-300" />
      </div>
    </div>
  )
}
