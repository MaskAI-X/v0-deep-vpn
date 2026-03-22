"use client"

import { useState, useEffect } from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

// Server locations with accurate lat/lng coordinates
const serverLocations = [
  { name: "Singapore", country: "SG", flag: "🇸🇬", coordinates: [103.8198, 1.3521] as [number, number], servers: 2 },
  { name: "Tokyo", country: "JP", flag: "🇯🇵", coordinates: [139.6917, 35.6895] as [number, number], servers: 1 },
  { name: "Seoul", country: "KR", flag: "🇰🇷", coordinates: [126.978, 37.5665] as [number, number], servers: 1 },
  { name: "Sydney", country: "AU", flag: "🇦🇺", coordinates: [151.2093, -33.8688] as [number, number], servers: 1 },
  { name: "Mumbai", country: "IN", flag: "🇮🇳", coordinates: [72.8777, 19.076] as [number, number], servers: 1 },
  { name: "São Paulo", country: "BR", flag: "🇧🇷", coordinates: [-46.6333, -23.5505] as [number, number], servers: 1 },
  { name: "Johannesburg", country: "ZA", flag: "🇿🇦", coordinates: [28.0473, -26.2041] as [number, number], servers: 1 },
  { name: "Hong Kong", country: "HK", flag: "🇭🇰", coordinates: [114.1694, 22.3193] as [number, number], servers: 1 },
  { name: "Dubai", country: "AE", flag: "🇦🇪", coordinates: [55.2708, 25.2048] as [number, number], servers: 1 },
  { name: "Taipei", country: "TW", flag: "🇹🇼", coordinates: [121.5654, 25.033] as [number, number], servers: 1 },
  { name: "Ho Chi Minh", country: "VN", flag: "🇻🇳", coordinates: [106.6297, 10.8231] as [number, number], servers: 1 },
  { name: "Kuala Lumpur", country: "MY", flag: "🇲🇾", coordinates: [101.6869, 3.139] as [number, number], servers: 1 },
  { name: "Ashburn", country: "US", flag: "🇺🇸", coordinates: [-77.4875, 39.0438] as [number, number], servers: 1 },
  { name: "Hillsboro", country: "US", flag: "🇺🇸", coordinates: [-122.989, 45.5229] as [number, number], servers: 1 },
  { name: "Nuremberg", country: "DE", flag: "🇩🇪", coordinates: [11.0767, 49.4521] as [number, number], servers: 1 },
  { name: "Helsinki", country: "FI", flag: "🇫🇮", coordinates: [24.9384, 60.1699] as [number, number], servers: 1 },
]

// Connection pairs for animated arcs
const connectionPairs = [
  { from: "Singapore", to: "Hong Kong" },
  { from: "Hong Kong", to: "Tokyo" },
  { from: "Tokyo", to: "Seoul" },
  { from: "Singapore", to: "Kuala Lumpur" },
  { from: "Singapore", to: "Ho Chi Minh" },
  { from: "Singapore", to: "Sydney" },
  { from: "Dubai", to: "Mumbai" },
  { from: "Nuremberg", to: "Helsinki" },
  { from: "Ashburn", to: "Hillsboro" },
  { from: "São Paulo", to: "Ashburn" },
  { from: "Hong Kong", to: "Taipei" },
  { from: "Nuremberg", to: "Dubai" },
]

export function ServerMapSection() {
  const [hoveredServer, setHoveredServer] = useState<string | null>(null)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 100)
    }, 80)
    return () => clearInterval(interval)
  }, [])

  const getServerByName = (name: string) => serverLocations.find((s) => s.name === name)

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Global Server Network</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            17 servers across 15 countries. Connect to the fastest server near you.
          </p>
        </div>

        <div className="relative">
          <div className="glass-card rounded-3xl p-4 md:p-8 overflow-hidden">
            <div className="relative aspect-[2/1] md:aspect-[2.2/1]">
              <ComposableMap
                projection="geoNaturalEarth1"
                projectionConfig={{
                  scale: 160,
                  center: [20, 10],
                }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <defs>
                  <radialGradient id="serverGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(0, 212, 255, 1)" />
                    <stop offset="40%" stopColor="rgba(0, 212, 255, 0.5)" />
                    <stop offset="100%" stopColor="rgba(0, 212, 255, 0)" />
                  </radialGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(0, 212, 255, 0.1)" />
                    <stop offset="50%" stopColor="rgba(0, 212, 255, 0.6)" />
                    <stop offset="100%" stopColor="rgba(0, 212, 255, 0.1)" />
                  </linearGradient>
                </defs>

                {/* Ocean background */}
                <rect x="-50" y="-50" width="1000" height="1000" fill="#050d1a" />

                {/* Countries/Land */}
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#0a1628"
                        stroke="#0e2240"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none", fill: "#0d1d35" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {/* Connection arcs */}
                {connectionPairs.map((pair, idx) => {
                  const from = getServerByName(pair.from)
                  const to = getServerByName(pair.to)
                  if (!from || !to) return null

                  return (
                    <Line
                      key={`arc-${idx}`}
                      from={from.coordinates}
                      to={to.coordinates}
                      stroke="rgba(0, 212, 255, 0.2)"
                      strokeWidth={1}
                      strokeLinecap="round"
                      style={{
                        filter: "url(#glow)",
                      }}
                    />
                  )
                })}

                {/* Animated traveling lights on arcs */}
                {connectionPairs.map((pair, idx) => {
                  const from = getServerByName(pair.from)
                  const to = getServerByName(pair.to)
                  if (!from || !to) return null

                  const progress = ((animationPhase + idx * 12) % 100) / 100
                  const x = from.coordinates[0] + (to.coordinates[0] - from.coordinates[0]) * progress
                  const y = from.coordinates[1] + (to.coordinates[1] - from.coordinates[1]) * progress

                  return (
                    <Marker key={`light-${idx}`} coordinates={[x, y]}>
                      <circle r={2} fill="rgba(0, 212, 255, 0.8)" filter="url(#glow)" />
                    </Marker>
                  )
                })}

                {/* Server markers */}
                {serverLocations.map((server, idx) => {
                  const isHovered = hoveredServer === server.name
                  const pulseScale = 1 + Math.sin((animationPhase + idx * 10) * 0.1) * 0.2

                  return (
                    <Marker
                      key={server.name}
                      coordinates={server.coordinates}
                      onMouseEnter={() => setHoveredServer(server.name)}
                      onMouseLeave={() => setHoveredServer(null)}
                    >
                      {/* Outer pulse ring */}
                      <circle
                        r={isHovered ? 18 : 12 * pulseScale}
                        fill="none"
                        stroke="rgba(0, 212, 255, 0.3)"
                        strokeWidth={1}
                        style={{
                          opacity: 0.5 + Math.sin((animationPhase + idx * 10) * 0.15) * 0.3,
                        }}
                      />
                      {/* Glow circle */}
                      <circle
                        r={isHovered ? 14 : 8}
                        fill="url(#serverGlow)"
                        style={{ opacity: isHovered ? 0.9 : 0.6 }}
                      />
                      {/* Main dot */}
                      <circle
                        r={isHovered ? 7 : 5}
                        fill="rgba(0, 212, 255, 1)"
                        filter={isHovered ? "url(#strongGlow)" : "url(#glow)"}
                        className="cursor-pointer transition-all duration-200"
                      />
                      {/* Center highlight */}
                      <circle r={isHovered ? 3 : 2} fill="white" style={{ opacity: 0.9 }} />

                      {/* Multi-server indicator */}
                      {server.servers > 1 && (
                        <text
                          x={10}
                          y={-5}
                          fontSize={10}
                          fill="rgba(0, 212, 255, 1)"
                          fontWeight="bold"
                          filter="url(#glow)"
                        >
                          x{server.servers}
                        </text>
                      )}

                      {/* Tooltip */}
                      {isHovered && (
                        <g>
                          <rect
                            x={-50}
                            y={-38}
                            width={100}
                            height={24}
                            rx={6}
                            fill="rgba(8, 12, 28, 0.95)"
                            stroke="rgba(0, 212, 255, 0.5)"
                            strokeWidth={1}
                          />
                          <text
                            y={-22}
                            textAnchor="middle"
                            fontSize={12}
                            fill="white"
                            fontFamily="system-ui, sans-serif"
                            fontWeight="500"
                          >
                            {server.flag} {server.name}
                          </text>
                        </g>
                      )}
                    </Marker>
                  )
                })}
              </ComposableMap>
            </div>
          </div>

          {/* Server location badges */}
          <div className="mt-8">
            <h3 className="text-sm font-medium text-muted-foreground mb-4 text-center">
              Server Locations
            </h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {serverLocations.map((server) => (
                <div
                  key={server.name}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all cursor-default ${
                    hoveredServer === server.name
                      ? "bg-cyan-500/20 border-cyan-500/50"
                      : "bg-secondary/50 border-border hover:border-cyan-500/30"
                  }`}
                  onMouseEnter={() => setHoveredServer(server.name)}
                  onMouseLeave={() => setHoveredServer(null)}
                >
                  <span className="text-base">{server.flag}</span>
                  <span className="text-xs md:text-sm text-foreground">{server.name}</span>
                  {server.servers > 1 && (
                    <span className="text-xs text-cyan-400">x{server.servers}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text">17</div>
            <div className="text-sm text-muted-foreground mt-1">Servers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text">15</div>
            <div className="text-sm text-muted-foreground mt-1">Countries</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text">99.9%</div>
            <div className="text-sm text-muted-foreground mt-1">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  )
}
