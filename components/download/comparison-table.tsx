"use client"

import { Check, X, Minus } from "lucide-react"

const vpnComparison = [
  {
    feature: "Price",
    deepvpn: "Free",
    nordvpn: "$12.99/mo",
    expressvpn: "$12.95/mo",
    surfshark: "$12.95/mo",
  },
  {
    feature: "No Logs Policy",
    deepvpn: true,
    nordvpn: true,
    expressvpn: true,
    surfshark: true,
  },
  {
    feature: "Registration Required",
    deepvpn: false,
    nordvpn: true,
    expressvpn: true,
    surfshark: true,
  },
  {
    feature: "VLESS Reality Protocol",
    deepvpn: true,
    nordvpn: false,
    expressvpn: false,
    surfshark: false,
  },
  {
    feature: "Hysteria2 Protocol",
    deepvpn: true,
    nordvpn: false,
    expressvpn: false,
    surfshark: false,
  },
  {
    feature: "RAM-Only Servers",
    deepvpn: true,
    nordvpn: true,
    expressvpn: true,
    surfshark: "partial",
  },
  {
    feature: "Open Source Client",
    deepvpn: true,
    nordvpn: false,
    expressvpn: false,
    surfshark: false,
  },
  {
    feature: "Kill Switch",
    deepvpn: true,
    nordvpn: true,
    expressvpn: true,
    surfshark: true,
  },
]

function renderValue(value: boolean | string) {
  if (value === true) {
    return <Check className="w-5 h-5 text-cyan-400" />
  }
  if (value === false) {
    return <X className="w-5 h-5 text-red-400/70" />
  }
  if (value === "partial") {
    return <Minus className="w-5 h-5 text-yellow-400/70" />
  }
  return <span className="text-sm font-medium">{value}</span>
}

export function ComparisonTable() {
  return (
    <section className="relative py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          <span className="gradient-text">Why DeepVPN?</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          See how DeepVPN compares to other popular VPN services
        </p>

        {/* Desktop Table */}
        <div className="hidden md:block glass-card rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-cyan-500/20">
                  <th className="text-left p-4 text-muted-foreground font-medium">Feature</th>
                  <th className="p-4 text-center">
                    <span className="gradient-text font-bold">DeepVPN</span>
                  </th>
                  <th className="p-4 text-center text-muted-foreground font-medium">NordVPN</th>
                  <th className="p-4 text-center text-muted-foreground font-medium">ExpressVPN</th>
                  <th className="p-4 text-center text-muted-foreground font-medium">Surfshark</th>
                </tr>
              </thead>
              <tbody>
                {vpnComparison.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={index !== vpnComparison.length - 1 ? "border-b border-cyan-500/10" : ""}
                  >
                    <td className="p-4 text-foreground">{row.feature}</td>
                    <td className="p-4">
                      <div className="flex justify-center">{renderValue(row.deepvpn)}</div>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center">{renderValue(row.nordvpn)}</div>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center">{renderValue(row.expressvpn)}</div>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center">{renderValue(row.surfshark)}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {vpnComparison.map((row) => (
            <div key={row.feature} className="glass-card rounded-xl p-4">
              <h3 className="font-medium text-foreground mb-3">{row.feature}</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-cyan-400">DeepVPN</span>
                  {renderValue(row.deepvpn)}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">NordVPN</span>
                  {renderValue(row.nordvpn)}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">ExpressVPN</span>
                  {renderValue(row.expressvpn)}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Surfshark</span>
                  {renderValue(row.surfshark)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
