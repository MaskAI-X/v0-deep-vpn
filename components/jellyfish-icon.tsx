"use client"

interface JellyfishIconProps {
  className?: string
}

export function JellyfishIcon({ className }: JellyfishIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Glow filter */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
        </linearGradient>
        <radialGradient id="innerGlow" cx="50%" cy="30%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Main dome/bell */}
      <ellipse
        cx="50"
        cy="35"
        rx="32"
        ry="28"
        fill="url(#bodyGradient)"
        filter="url(#glow)"
      />
      
      {/* Inner glow on dome */}
      <ellipse
        cx="50"
        cy="30"
        rx="20"
        ry="15"
        fill="url(#innerGlow)"
      />
      
      {/* Dome rim */}
      <path
        d="M18 40 Q50 55 82 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeOpacity="0.6"
        fill="none"
      />
      
      {/* Tentacles */}
      <g opacity="0.7" filter="url(#glow)">
        {/* Left tentacles */}
        <path
          d="M25 45 Q20 60 25 75 Q30 85 25 95"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '0s' }}
        />
        <path
          d="M32 48 Q28 65 35 80 Q40 90 32 98"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '0.3s' }}
        />
        
        {/* Center tentacles */}
        <path
          d="M42 50 Q38 70 45 85 Q50 95 42 100"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '0.6s' }}
        />
        <path
          d="M50 52 Q50 75 50 90 Q50 98 50 100"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '0.1s' }}
        />
        <path
          d="M58 50 Q62 70 55 85 Q50 95 58 100"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '0.4s' }}
        />
        
        {/* Right tentacles */}
        <path
          d="M68 48 Q72 65 65 80 Q60 90 68 98"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '0.7s' }}
        />
        <path
          d="M75 45 Q80 60 75 75 Q70 85 75 95"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '0.2s' }}
        />
      </g>
      
      {/* Small dots/particles */}
      <circle cx="35" cy="28" r="2" fill="white" fillOpacity="0.8" />
      <circle cx="60" cy="32" r="1.5" fill="white" fillOpacity="0.6" />
      <circle cx="45" cy="38" r="1" fill="white" fillOpacity="0.5" />
    </svg>
  )
}
