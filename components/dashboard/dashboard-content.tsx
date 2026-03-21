"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  Copy,
  Power,
  Shield,
  Globe,
  Eye,
  EyeOff,
  ChevronRight,
  Zap,
  Crown,
  Check,
  Settings,
  MessageCircle,
} from "lucide-react"

const servers = [
  { country: "United States", city: "New York", flag: "🇺🇸", latency: 32, load: 45 },
  { country: "Japan", city: "Tokyo", flag: "🇯🇵", latency: 89, load: 62 },
  { country: "Germany", city: "Frankfurt", flag: "🇩🇪", latency: 48, load: 38 },
  { country: "Singapore", city: "Singapore", flag: "🇸🇬", latency: 65, load: 55 },
  { country: "United Kingdom", city: "London", flag: "🇬🇧", latency: 56, load: 41 },
  { country: "Netherlands", city: "Amsterdam", flag: "🇳🇱", latency: 52, load: 35 },
]

export function DashboardContent() {
  const [isConnected, setIsConnected] = useState(false)
  const [selectedServer, setSelectedServer] = useState(servers[0])
  const [showDeviceId, setShowDeviceId] = useState(false)
  const [showAnonKey, setShowAnonKey] = useState(false)
  const [killSwitch, setKillSwitch] = useState(true)
  const [autoConnect, setAutoConnect] = useState(false)
  const [copied, setCopied] = useState(false)

  const usedData = 4.2 // GB
  const totalData = 10 // GB
  const dataPercentage = (usedData / totalData) * 100

  const handleCopyKey = () => {
    navigator.clipboard.writeText("dk_xxxx-xxxx-xxxx-xxxx")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Status Bar */}
        <div className="glass-card rounded-2xl p-4 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="px-3 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-medium">
              Free Plan
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">{usedData} GB</span> / {totalData} GB used this month
            </div>
          </div>
          {/* Progress Bar */}
          <div className="w-full md:w-64">
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full transition-all duration-500"
                style={{ width: `${dataPercentage}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Connection Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Connect Card */}
            <div className="glass-card rounded-3xl p-8">
              <div className="flex flex-col items-center">
                {/* Connection Button */}
                <button
                  onClick={() => setIsConnected(!isConnected)}
                  className={`w-40 h-40 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isConnected
                      ? "bg-gradient-to-br from-cyan-500 to-teal-500 glow-cyan"
                      : "bg-muted/50 hover:bg-muted"
                  }`}
                >
                  <Power
                    className={`w-16 h-16 transition-colors ${
                      isConnected ? "text-background" : "text-muted-foreground"
                    }`}
                  />
                </button>

                {/* Status Text */}
                <div className="mt-6 text-center">
                  <h2 className={`text-2xl font-bold ${isConnected ? "gradient-text" : "text-muted-foreground"}`}>
                    {isConnected ? "Connected" : "Disconnected"}
                  </h2>
                  {isConnected && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {selectedServer.flag} {selectedServer.city}, {selectedServer.country}
                    </p>
                  )}
                </div>

                {/* Connection Stats */}
                {isConnected && (
                  <div className="grid grid-cols-3 gap-6 mt-8 w-full max-w-sm">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Protocol</p>
                      <p className="text-sm font-medium text-foreground">VLESS Reality</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Latency</p>
                      <p className="text-sm font-medium text-foreground">{selectedServer.latency}ms</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">IP</p>
                      <p className="text-sm font-medium text-foreground">185.xxx.xxx.xx</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Server List */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-cyan-400" />
                Server Locations
              </h3>
              <div className="space-y-2">
                {servers.map((server) => (
                  <button
                    key={server.city}
                    onClick={() => setSelectedServer(server)}
                    className={`w-full p-4 rounded-xl flex items-center justify-between transition-all ${
                      selectedServer.city === server.city
                        ? "bg-cyan-500/20 border border-cyan-500/30"
                        : "bg-muted/30 hover:bg-muted/50 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{server.flag}</span>
                      <div className="text-left">
                        <p className="font-medium text-foreground">{server.country}</p>
                        <p className="text-sm text-muted-foreground">{server.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">{server.latency}ms</p>
                        <div className="flex items-center gap-1">
                          <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                server.load < 50 ? "bg-green-500" : server.load < 75 ? "bg-yellow-500" : "bg-red-500"
                              }`}
                              style={{ width: `${server.load}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">{server.load}%</span>
                        </div>
                      </div>
                      {selectedServer.city === server.city && (
                        <Check className="w-5 h-5 text-cyan-400" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Account Section */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                Account
              </h3>

              <div className="space-y-4">
                {/* Device ID */}
                <div>
                  <label className="text-xs text-muted-foreground">Device ID</label>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 bg-muted/50 rounded-lg px-3 py-2 font-mono text-sm">
                      {showDeviceId ? "dev_a1b2c3d4e5f6" : "dev_••••••••••••"}
                    </div>
                    <button
                      onClick={() => setShowDeviceId(!showDeviceId)}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showDeviceId ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Anonymous Key */}
                <div>
                  <label className="text-xs text-muted-foreground">Anonymous Key</label>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 bg-muted/50 rounded-lg px-3 py-2 font-mono text-sm">
                      {showAnonKey ? "dk_xxxx-xxxx-xxxx-xxxx" : "dk_••••-••••-••••-••••"}
                    </div>
                    <button
                      onClick={() => setShowAnonKey(!showAnonKey)}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showAnonKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={handleCopyKey}
                      className="p-2 text-muted-foreground hover:text-cyan-400 transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Linked Account */}
                <div>
                  <label className="text-xs text-muted-foreground">Linked Account</label>
                  <div className="flex items-center gap-2 mt-1 bg-muted/50 rounded-lg px-3 py-2">
                    <MessageCircle className="w-4 h-4 text-[#0088cc]" />
                    <span className="text-sm">Telegram Connected</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Settings Section */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-cyan-400" />
                Settings
              </h3>

              <div className="space-y-4">
                {/* Protocol */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">Protocol</p>
                    <p className="text-xs text-muted-foreground">VLESS Reality</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>

                {/* Kill Switch */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">Kill Switch</p>
                    <p className="text-xs text-muted-foreground">Block internet if VPN drops</p>
                  </div>
                  <Switch checked={killSwitch} onCheckedChange={setKillSwitch} />
                </div>

                {/* Auto Connect */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">Auto Connect</p>
                    <p className="text-xs text-muted-foreground">Connect on app launch</p>
                  </div>
                  <Switch checked={autoConnect} onCheckedChange={setAutoConnect} />
                </div>

                {/* Language */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">Language</p>
                    <p className="text-xs text-muted-foreground">English</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Pro Upgrade Card */}
            <div className="glass-card rounded-2xl p-6 border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-teal-500/10">
              <div className="flex items-center gap-2 mb-3">
                <Crown className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold gradient-text">Upgrade to Pro</h3>
              </div>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  Unlimited data
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  Priority servers
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  Up to 5 devices
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  24/7 support
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-background font-semibold">
                Upgrade Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
