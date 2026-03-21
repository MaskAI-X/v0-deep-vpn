"use client"

const serverLocations = [
  { name: "United States", x: 22, y: 40, servers: 3 },
  { name: "Canada", x: 20, y: 28, servers: 1 },
  { name: "United Kingdom", x: 47, y: 32, servers: 2 },
  { name: "Germany", x: 51, y: 33, servers: 2 },
  { name: "Netherlands", x: 50, y: 31, servers: 1 },
  { name: "France", x: 48, y: 36, servers: 1 },
  { name: "Singapore", x: 76, y: 55, servers: 2 },
  { name: "Japan", x: 85, y: 38, servers: 2 },
  { name: "Australia", x: 85, y: 72, servers: 1 },
  { name: "South Korea", x: 82, y: 38, servers: 1 },
  { name: "Hong Kong", x: 79, y: 45, servers: 1 },
  { name: "Brazil", x: 32, y: 65, servers: 1 },
  { name: "India", x: 70, y: 48, servers: 1 },
]

export function ServerMapSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Global Server Network</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            17 servers across 13 countries. Connect to the fastest server near you.
          </p>
        </div>
        
        {/* Map Container */}
        <div className="relative aspect-[2/1] max-w-4xl mx-auto">
          {/* World Map SVG */}
          <svg
            viewBox="0 0 100 50"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Simplified world map outline */}
            <defs>
              <filter id="mapGlow">
                <feGaussianBlur stdDeviation="0.3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Continents as simplified paths */}
            <g fill="none" stroke="rgba(0,210,210,0.2)" strokeWidth="0.15" filter="url(#mapGlow)">
              {/* North America */}
              <path d="M5 20 Q15 15 25 18 Q30 20 32 25 Q28 30 25 35 Q20 38 15 35 Q8 32 5 28 Q3 24 5 20" />
              {/* South America */}
              <path d="M25 45 Q30 42 32 48 Q35 55 32 62 Q28 68 25 65 Q22 58 23 52 Q24 48 25 45" />
              {/* Europe */}
              <path d="M42 22 Q48 20 55 22 Q58 25 56 30 Q52 35 48 33 Q44 30 42 26 Q41 24 42 22" />
              {/* Africa */}
              <path d="M45 35 Q52 33 55 40 Q58 48 55 55 Q50 60 45 55 Q42 48 43 42 Q44 38 45 35" />
              {/* Asia */}
              <path d="M55 18 Q70 15 85 20 Q92 25 90 35 Q85 42 75 45 Q65 48 58 42 Q52 35 55 25 Q55 20 55 18" />
              {/* Australia */}
              <path d="M78 58 Q85 55 92 58 Q95 62 93 68 Q88 72 82 70 Q78 66 78 62 Q78 60 78 58" />
            </g>
            
            {/* Connection lines between servers */}
            <g stroke="rgba(0,210,210,0.1)" strokeWidth="0.08">
              {serverLocations.map((loc, i) => (
                serverLocations.slice(i + 1, i + 3).map((target, j) => (
                  <line
                    key={`line-${i}-${j}`}
                    x1={loc.x}
                    y1={loc.y}
                    x2={target.x}
                    y2={target.y}
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))
              ))}
            </g>
            
            {/* Server location dots */}
            {serverLocations.map((location, index) => (
              <g key={location.name}>
                {/* Outer glow ring */}
                <circle
                  cx={location.x}
                  cy={location.y}
                  r="1.5"
                  fill="none"
                  stroke="rgba(0,210,210,0.3)"
                  strokeWidth="0.1"
                  className="animate-ping"
                  style={{ 
                    animationDuration: '2s',
                    animationDelay: `${index * 150}ms`,
                    transformOrigin: `${location.x}px ${location.y}px`
                  }}
                />
                {/* Main dot */}
                <circle
                  cx={location.x}
                  cy={location.y}
                  r="0.8"
                  fill="rgba(0,210,210,0.8)"
                  className="animate-pulse"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
                {/* Inner bright core */}
                <circle
                  cx={location.x}
                  cy={location.y}
                  r="0.3"
                  fill="white"
                  fillOpacity="0.9"
                />
              </g>
            ))}
          </svg>
          
          {/* Floating location labels - shown on hover in real app */}
          <div className="absolute bottom-0 left-0 right-0 flex flex-wrap justify-center gap-2 mt-8">
            {serverLocations.slice(0, 6).map((location) => (
              <span
                key={location.name}
                className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-secondary/50 border border-border"
              >
                {location.name}
              </span>
            ))}
            <span className="text-xs text-cyan-400 px-2 py-1">
              +7 more
            </span>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text">17</div>
            <div className="text-sm text-muted-foreground mt-1">Servers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold gradient-text">13</div>
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
