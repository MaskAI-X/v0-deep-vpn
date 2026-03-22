"use client"

import { useState } from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const serverLocations = [
  { name: "Singapore", country: "SG", flag: "🇸🇬", coordinates: [103.8198, 1.3521], servers: 2 },
  { name: "Singapore 2", country: "SG", flag: "🇸🇬", coordinates: [103.85, 1.32], servers: 0, hidden: true },
  { name: "Tokyo", country: "JP", flag: "🇯🇵", coordinates: [139.6917, 35.6895], servers: 1 },
  { name: "Seoul", country: "KR", flag: "🇰🇷", coordinates: [126.978, 37.5665], servers: 1 },
  { name: "Sydney", country: "AU", flag: "🇦🇺", coordinates: [151.2093, -33.8688], servers: 1 },
  { name: "Mumbai", country: "IN", flag: "🇮🇳", coordinates: [72.8777, 19.076], servers: 1 },
  { name: "São Paulo", country: "BR", flag: "🇧🇷", coordinates: [-46.6333, -23.5505], servers: 1 },
  { name: "Johannesburg", country: "ZA", flag: "🇿🇦", coordinates: [28.0473, -26.2041], servers: 1 },
  { name: "Hong Kong", country: "HK", flag: "🇭🇰", coordinates: [114.1694, 22.3193], servers: 1 },
  { name: "Dubai", country: "AE", flag: "🇦🇪", coordinates: [55.2708, 25.2048], servers: 1 },
  { name: "Taipei", country: "TW", flag: "🇹🇼", coordinates: [121.5654, 25.033], servers: 1 },
  { name: "Ho Chi Minh", country: "VN", flag: "🇻🇳", coordinates: [106.6297, 10.8231], servers: 1 },
  { name: "Kuala Lumpur", country: "MY", flag: "🇲🇾", coordinates: [101.6869, 3.139], servers: 1 },
  { name: "Ashburn", country: "US", flag: "🇺🇸", coordinates: [-77.4875, 39.0438], servers: 1 },
  { name: "Hillsboro", country: "US", flag: "🇺🇸", coordinates: [-122.9365, 45.5229], servers: 1 },
  { name: "Nuremberg", country: "DE", flag: "🇩🇪", coordinates: [11.0767, 49.4521], servers: 1 },
  { name: "Helsinki", country: "FI", flag: "🇫🇮", coordinates: [24.9384, 60.1699], servers: 1 },
]

const visibleServers = serverLocations.filter(s => !s.hidden)

const connectionLines = [
  { from: "Singapore", to: "Hong Kong" },
  { from: "Hong Kong", to: "Tokyo" },
  { from: "Tokyo", to: "Seoul" },
  { from: "Singapore", to: "Kuala Lumpur" },
  { from: "Kuala Lumpur", to: "Ho Chi Minh" },
  { from: "Singapore", to: "Sydney" },
  { from: "Dubai", to: "Mumbai" },
  { from: "Nuremberg", to: "Helsinki" },
  { from: "Ashburn", to: "Hillsboro" },
  { from: "São Paulo", to: "Ashburn" },
]

export function ServerMapSection() {
  const [hoveredServer, setHoveredServer] = useState<string | null>(null)

  const getCoordinates = (name: string) => {
    const server = serverLocations.find(s => s.name === name)
    return server?.coordinates || [0, 0]
  }

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
            <div className="relative aspect-[2/1] md:aspect-[2.5/1]">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 120,
                  center: [60, 20],
                }}
                style={{ width: "100%", height: "100%" }}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="rgba(0, 180, 200, 0.08)"
                        stroke="rgba(0, 210, 255, 0.15)"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none", fill: "rgba(0, 180, 200, 0.12)" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {connectionLines.map((line, idx) => (
                  <Line
                    key={idx}
                    from={getCoordinates(line.from)}
                    to={getCoordinates(line.to)}
                    stroke="rgba(0, 210, 255, 0.2)"
                    strokeWidth={1}
                    strokeLinecap="round"
                    className="animate-pulse"
                    style={{ animationDelay: `${idx * 200}ms` }}
                  />
                ))}

                {visibleServers.map((server, idx) => (
                  <Marker
                    key={server.name}
                    coordinates={server.coordinates as [number, number]}
                    onMouseEnter={() => setHoveredServer(server.name)}
                    onMouseLeave={() => setHoveredServer(null)}
                  >
                    <g className="cursor-pointer">
                      <circle
                        r={12}
                        fill="rgba(0, 210, 255, 0.15)"
                        className="animate-ping"
                        style={{
                          animationDuration: "2s",
                          animationDelay: `${idx * 150}ms`,
                        }}
                      />
                      <circle
                        r={6}
                        fill="rgba(0, 210, 255, 0.8)"
                        stroke="rgba(255, 255, 255, 0.5)"
                        strokeWidth={1}
                        className="transition-all duration-200"
                        style={{
                          filter: hoveredServer === server.name ? "drop-shadow(0 0 8px rgba(0, 210, 255, 0.8))" : "drop-shadow(0 0 4px rgba(0, 210, 255, 0.5))",
                          transform: hoveredServer === server.name ? "scale(1.3)" : "scale(1)",
                        }}
                      />
                      <circle
                        r={2}
                        fill="white"
                        fillOpacity={0.9}
                      />
                    </g>

                    {hoveredServer === server.name && (
                      <g>
                        <rect
                          x={-45}
                          y={-45}
                          width={90}
                          height={30}
                          rx={6}
                          fill="rgba(10, 15, 30, 0.95)"
                          stroke="rgba(0, 210, 255, 0.3)"
                          strokeWidth={1}
                        />
                        <text
                          textAnchor="middle"
                          y={-25}
                          style={{
                            fontFamily: "system-ui",
                            fontSize: "11px",
                            fill: "white",
                            fontWeight: 500,
                          }}
                        >
                          {server.flag} {server.name}
                        </text>
                      </g>
                    )}
                  </Marker>
                ))}
              </ComposableMap>
            </div>
          </div>

          </div>
      </div>
    </section>
  )
}
