"use client"

import { useState, useEffect } from "react"

const serverLocations = [
  { name: "Singapore", country: "SG", flag: "🇸🇬", x: 76.5, y: 52, servers: 2 },
  { name: "Tokyo", country: "JP", flag: "🇯🇵", x: 85.5, y: 36, servers: 1 },
  { name: "Seoul", country: "KR", flag: "🇰🇷", x: 82, y: 36, servers: 1 },
  { name: "Sydney", country: "AU", flag: "🇦🇺", x: 90, y: 72, servers: 1 },
  { name: "Mumbai", country: "IN", flag: "🇮🇳", x: 64, y: 44, servers: 1 },
  { name: "São Paulo", country: "BR", flag: "🇧🇷", x: 30, y: 66, servers: 1 },
  { name: "Johannesburg", country: "ZA", flag: "🇿🇦", x: 54, y: 70, servers: 1 },
  { name: "Hong Kong", country: "HK", flag: "🇭🇰", x: 79, y: 44, servers: 1 },
  { name: "Dubai", country: "AE", flag: "🇦🇪", x: 58, y: 42, servers: 1 },
  { name: "Taipei", country: "TW", flag: "🇹🇼", x: 81, y: 42, servers: 1 },
  { name: "Ho Chi Minh", country: "VN", flag: "🇻🇳", x: 76, y: 48, servers: 1 },
  { name: "Kuala Lumpur", country: "MY", flag: "🇲🇾", x: 74, y: 54, servers: 1 },
  { name: "Ashburn", country: "US", flag: "🇺🇸", x: 22, y: 38, servers: 1 },
  { name: "Hillsboro", country: "US", flag: "🇺🇸", x: 12, y: 34, servers: 1 },
  { name: "Nuremberg", country: "DE", flag: "🇩🇪", x: 48, y: 30, servers: 1 },
  { name: "Helsinki", country: "FI", flag: "🇫🇮", x: 52, y: 22, servers: 1 },
]

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
]

// Dot matrix world map - each string is a row, 'x' = land, '.' = water
const worldMapDots = `
............................................................................................
............................................................................................
....................xxxxxxx.................................................................
.................xxxxxxxxxxxxxxxxx.....xxx..................................................
...........x....xxxxxxxxxxxxxxxxxxxxx.xxxxx.....xx.......xxxxxxxx...........................
..........xx...xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.xxxx....xxxxxxxxxxxx.........................
.........xxx..xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.xxxx......................
........xxxx..xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx...xxx......................
.......xxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx......xx......................
.......xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx....xxx.....................
......xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx..xxxx....xxxx............
.....xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.xxxxx..xxxxxx...........
.....xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx........
....xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.......
....xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx......
...xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx......
...xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx......
..xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx......
..xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.....
..xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.....
..xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.....
...xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.....
...xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.....
...xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx......
....xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.......
.....xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx........
......xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.........
........xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx...........
..........xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx............
............xxxxxxxxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx..............
..............xxxxxxxxxxxxxxxx.....xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx................
................xxxxxxxxxxxx........xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx..................
..................xxxxxxxxx...........xxxxxxxxxxxxxxxxxxxxxxxxxxxx..xxxx....................
....................xxxxxx..............xxxxxxxxxxxxxxxxxxxxxxxxx...........................
......................xxx.................xxxxxxxxxxxxxxxxxxxxxx............................
.......................x...................xxxxxxxxxxxxxxxxxxx..............................
........................................xxxxxxxxxxxxxxx.....................................
.......................................xxxxxxxxxxxxxx.......................................
.......................................xxxxxxxxxxxxx........................................
........................................xxxxxxxxxxxx........................................
.........................................xxxxxxxxxxx........................................
..........................................xxxxxxxxx.........................................
...........................................xxxxxxxx.........................................
............................................xxxxxx..........................................
.............................................xxxxx..........................................
..............................................xxxx..........................................
...............................................xxx..........................................
...............................................xx...........................................
................................................x...........................................
............................................................................................
`

export function ServerMapSection() {
  const [hoveredServer, setHoveredServer] = useState<string | null>(null)
  const [animationOffset, setAnimationOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationOffset((prev) => (prev + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const getServerByName = (name: string) => serverLocations.find(s => s.name === name)

  const generateCurvedPath = (fromX: number, fromY: number, toX: number, toY: number) => {
    const midX = (fromX + toX) / 2
    const midY = (fromY + toY) / 2
    const dx = toX - fromX
    const dy = toY - fromY
    const dist = Math.sqrt(dx * dx + dy * dy)
    const curvature = Math.min(dist * 0.3, 15)
    const perpX = -dy / dist * curvature
    const perpY = dx / dist * curvature
    const ctrlX = midX + perpX
    const ctrlY = midY + perpY
    return `M ${fromX} ${fromY} Q ${ctrlX} ${ctrlY} ${toX} ${toY}`
  }

  const rows = worldMapDots.trim().split('\n')
  const dotSize = 0.8
  const dotSpacing = 2

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
              <svg
                viewBox="0 0 200 100"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(0, 212, 255, 0.4)" />
                    <stop offset="100%" stopColor="rgba(0, 212, 255, 0)" />
                  </radialGradient>
                  <radialGradient id="serverGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(0, 212, 255, 1)" />
                    <stop offset="40%" stopColor="rgba(0, 212, 255, 0.6)" />
                    <stop offset="100%" stopColor="rgba(0, 212, 255, 0)" />
                  </radialGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(0, 212, 255, 0.1)" />
                    <stop offset="50%" stopColor="rgba(0, 212, 255, 0.4)" />
                    <stop offset="100%" stopColor="rgba(0, 212, 255, 0.1)" />
                  </linearGradient>
                </defs>

                {/* Dot matrix world map */}
                <g opacity="0.6">
                  {rows.map((row, rowIndex) => (
                    row.split('').map((char, colIndex) => {
                      if (char === 'x') {
                        const x = (colIndex / row.length) * 200
                        const y = (rowIndex / rows.length) * 100
                        return (
                          <circle
                            key={`${rowIndex}-${colIndex}`}
                            cx={x}
                            cy={y}
                            r={dotSize}
                            fill="rgba(0, 180, 220, 0.35)"
                          />
                        )
                      }
                      return null
                    })
                  ))}
                </g>

                {/* Connection arcs */}
                {connectionPairs.map((pair, idx) => {
                  const from = getServerByName(pair.from)
                  const to = getServerByName(pair.to)
                  if (!from || !to) return null

                  const pathD = generateCurvedPath(from.x * 2, from.y, to.x * 2, to.y)
                  const pathLength = 100
                  const offset = ((animationOffset + idx * 15) % 100) / 100 * pathLength

                  return (
                    <g key={`line-${idx}`}>
                      {/* Base arc */}
                      <path
                        d={pathD}
                        fill="none"
                        stroke="rgba(0, 212, 255, 0.15)"
                        strokeWidth="0.3"
                      />
                      {/* Animated traveling light */}
                      <path
                        d={pathD}
                        fill="none"
                        stroke="url(#lineGradient)"
                        strokeWidth="0.8"
                        strokeDasharray={`8 ${pathLength - 8}`}
                        strokeDashoffset={-offset}
                        filter="url(#glow)"
                        strokeLinecap="round"
                      />
                    </g>
                  )
                })}

                {/* Server location dots */}
                {serverLocations.map((server, idx) => {
                  const isHovered = hoveredServer === server.name
                  const x = server.x * 2
                  const y = server.y
                  const pulseDelay = idx * 0.2

                  return (
                    <g
                      key={server.name}
                      onMouseEnter={() => setHoveredServer(server.name)}
                      onMouseLeave={() => setHoveredServer(null)}
                      className="cursor-pointer"
                      style={{ transform: `translate(${x}px, ${y}px)` }}
                    >
                      {/* Outer pulse ring */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isHovered ? 6 : 4}
                        fill="none"
                        stroke="rgba(0, 212, 255, 0.4)"
                        strokeWidth="0.3"
                        className="animate-ping"
                        style={{
                          animationDuration: "2s",
                          animationDelay: `${pulseDelay}s`,
                          transformOrigin: `${x}px ${y}px`,
                        }}
                      />
                      {/* Glow circle */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isHovered ? 5 : 3}
                        fill="url(#serverGlow)"
                        opacity={isHovered ? 0.8 : 0.5}
                      />
                      {/* Main dot */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isHovered ? 2.5 : 1.8}
                        fill="rgba(0, 212, 255, 1)"
                        filter={isHovered ? "url(#strongGlow)" : "url(#glow)"}
                        className="transition-all duration-200"
                      />
                      {/* Center highlight */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isHovered ? 1 : 0.6}
                        fill="white"
                        opacity="0.9"
                      />
                      
                      {/* Multi-server indicator */}
                      {server.servers > 1 && (
                        <text
                          x={x + 3}
                          y={y - 2}
                          fontSize="3"
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
                            x={x - 18}
                            y={y - 14}
                            width="36"
                            height="9"
                            rx="2"
                            fill="rgba(8, 12, 28, 0.95)"
                            stroke="rgba(0, 212, 255, 0.5)"
                            strokeWidth="0.3"
                          />
                          <text
                            x={x}
                            y={y - 7.5}
                            textAnchor="middle"
                            fontSize="4"
                            fill="white"
                            fontFamily="system-ui, sans-serif"
                          >
                            {server.flag} {server.name}
                          </text>
                        </g>
                      )}
                    </g>
                  )
                })}
              </svg>
            </div>
          </div>

          {/* Server location badges */}
          <div className="mt-8">
            <h3 className="text-sm font-medium text-muted-foreground mb-4 text-center">Server Locations</h3>
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
