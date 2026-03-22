"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Copy,
  Shield,
  Eye,
  EyeOff,
  Check,
  Crown,
  Zap,
  Calendar,
  Smartphone,
  User,
  MessageCircle,
  Send,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Mail,
} from "lucide-react"

const loginHistory = [
  { date: "Mar 22, 2026", device: "iPhone 15 Pro", method: "Telegram", location: "Singapore" },
  { date: "Mar 20, 2026", device: "MacBook Pro", method: "Anonymous Key", location: "Singapore" },
  { date: "Mar 18, 2026", device: "iPhone 15 Pro", method: "Telegram", location: "Tokyo, Japan" },
  { date: "Mar 15, 2026", device: "iPad Air", method: "Telegram", location: "Singapore" },
]

const dataUsageChart = [
  { day: "Mon", usage: 0.8 },
  { day: "Tue", usage: 1.2 },
  { day: "Wed", usage: 0.5 },
  { day: "Thu", usage: 0.9 },
  { day: "Fri", usage: 0.4 },
  { day: "Sat", usage: 0.3 },
  { day: "Sun", usage: 0.1 },
]

const faqItems = [
  {
    question: "How do I get more free data?",
    answer: "You can earn bonus data through daily check-ins in the app and completing simple tasks. Most users never run out of data with our generous 10GB monthly allowance plus daily bonuses."
  },
  {
    question: "Can I use DeepVPN on multiple devices?",
    answer: "Free users can use DeepVPN on 1 device. Upgrade to Pro to use on up to 5 devices simultaneously."
  },
  {
    question: "How do I recover my account on a new device?",
    answer: "Use your Anonymous Key to recover your account. You can find it in the Linked Accounts section. Keep it safe - it's the only way to recover your account without Telegram."
  },
  {
    question: "What happens if I run out of data?",
    answer: "When your monthly data is exhausted, you can wait for the next month's reset, earn bonus data through daily check-ins, or upgrade to Pro for unlimited data."
  },
]

export function DashboardContent() {
  const [showAnonKey, setShowAnonKey] = useState(false)
  const [showDeviceId, setShowDeviceId] = useState(false)
  const [copiedKey, setCopiedKey] = useState(false)
  const [copiedDeviceId, setCopiedDeviceId] = useState(false)
  const [feedback, setFeedback] = useState("")
  const [feedbackSent, setFeedbackSent] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const usedData = 4.2
  const totalData = 10
  const dataPercentage = (usedData / totalData) * 100
  const maxUsage = Math.max(...dataUsageChart.map(d => d.usage))

  const handleCopyKey = () => {
    navigator.clipboard.writeText("dk_a8f2-c4e1-9b3d-4433")
    setCopiedKey(true)
    setTimeout(() => setCopiedKey(false), 2000)
  }

  const handleCopyDeviceId = () => {
    navigator.clipboard.writeText("D4F2-8A1C-E3B9-0C4")
    setCopiedDeviceId(true)
    setTimeout(() => setCopiedDeviceId(false), 2000)
  }

  const handleSubmitFeedback = () => {
    if (feedback.trim()) {
      setFeedbackSent(true)
      setFeedback("")
      setTimeout(() => setFeedbackSent(false), 3000)
    }
  }

  return (
    <div className="pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Account Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage your DeepVPN account and subscription</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="glass-card rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <Crown className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-sm text-muted-foreground">Current Plan</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground">Free</span>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-medium">Active</span>
            </div>
          </div>

          <div className="glass-card rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-teal-400" />
              </div>
              <span className="text-sm text-muted-foreground">Data Usage</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold text-foreground">{usedData} GB</span>
                <span className="text-sm text-muted-foreground">/ {totalData} GB</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full transition-all duration-500"
                  style={{ width: `${dataPercentage}%` }}
                />
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-sm text-muted-foreground">Devices</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-foreground">1</span>
              <span className="text-sm text-muted-foreground">/ 5 active</span>
            </div>
          </div>

          <div className="glass-card rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-sm text-muted-foreground">Account Status</span>
            </div>
            <div className="text-foreground">
              <span className="text-sm">Active since</span>
              <p className="text-lg font-semibold">March 2026</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                Linked Accounts
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0088cc]/20 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-[#0088cc]" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Telegram</p>
                      <p className="text-sm text-muted-foreground">@deepvpn_user</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-green-400 text-sm">
                    <Check className="w-4 h-4" /> Linked
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl opacity-60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Apple ID</p>
                      <p className="text-sm text-muted-foreground">Not linked</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" disabled className="text-muted-foreground">
                    Coming Soon
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl opacity-60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Google</p>
                      <p className="text-sm text-muted-foreground">Not linked</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" disabled className="text-muted-foreground">
                    Coming Soon
                  </Button>
                </div>

                <div className="border-t border-border pt-4 mt-4">
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-muted-foreground">Anonymous Key</label>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 bg-muted/50 rounded-lg px-3 py-2 font-mono text-sm">
                          {showAnonKey ? "dk_a8f2-c4e1-9b3d-4433" : "dk_****-****-****-4433"}
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
                          {copiedKey ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground">Device ID</label>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 bg-muted/50 rounded-lg px-3 py-2 font-mono text-sm">
                          {showDeviceId ? "D4F2-8A1C-E3B9-0C4" : "D4F2-****-****-0C4"}
                        </div>
                        <button
                          onClick={() => setShowDeviceId(!showDeviceId)}
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {showDeviceId ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                        <button
                          onClick={handleCopyDeviceId}
                          className="p-2 text-muted-foreground hover:text-cyan-400 transition-colors"
                        >
                          {copiedDeviceId ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-cyan-400" />
                Activity Log
              </h3>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Data Usage (Last 7 Days)</h4>
                <div className="flex items-end justify-between gap-2 h-24">
                  {dataUsageChart.map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className="w-full bg-gradient-to-t from-cyan-500 to-teal-500 rounded-t-sm transition-all hover:from-cyan-400 hover:to-teal-400"
                        style={{ height: `${(item.usage / maxUsage) * 100}%`, minHeight: "4px" }}
                      />
                      <span className="text-xs text-muted-foreground">{item.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Recent Logins</h4>
                <div className="space-y-2">
                  {loginHistory.map((login, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg text-sm">
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-4 h-4 text-muted-foreground" />
                        <div>
                          <p className="text-foreground">{login.device}</p>
                          <p className="text-xs text-muted-foreground">{login.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground">{login.date}</p>
                        <p className="text-xs text-cyan-400">{login.method}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Support & Feedback</h3>

              <div className="mb-6">
                <label className="text-sm text-muted-foreground mb-2 block">Send us your feedback</label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Tell us what you think or report an issue..."
                  className="w-full h-24 bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 resize-none"
                />
                <div className="flex items-center justify-between mt-3">
                  <a
                    href="mailto:support@deepvpn.app"
                    className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    <Mail className="w-4 h-4" />
                    support@deepvpn.app
                  </a>
                  <Button
                    onClick={handleSubmitFeedback}
                    disabled={!feedback.trim() || feedbackSent}
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-background"
                  >
                    {feedbackSent ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Frequently Asked Questions</h4>
                <div className="space-y-2">
                  {faqItems.map((item, idx) => (
                    <div key={idx} className="border border-border rounded-xl overflow-hidden">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/30 transition-colors"
                      >
                        <span className="text-sm font-medium text-foreground">{item.question}</span>
                        {expandedFaq === idx ? (
                          <ChevronUp className="w-4 h-4 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-muted-foreground" />
                        )}
                      </button>
                      {expandedFaq === idx && (
                        <div className="px-4 pb-4 text-sm text-muted-foreground">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6 border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-teal-500/10">
              <div className="flex items-center gap-2 mb-4">
                <Crown className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-semibold gradient-text">Upgrade to Pro</h3>
              </div>
              
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-foreground">$4.99</span>
                <span className="text-muted-foreground">/month</span>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  Unlimited data
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  Up to 5 devices
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  Priority servers
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  24/7 premium support
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  No ads, ever
                </li>
              </ul>

              <Button className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-background font-semibold">
                Upgrade Now
              </Button>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Current Plan Details</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Plan</span>
                  <span className="text-foreground font-medium">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monthly Data</span>
                  <span className="text-foreground font-medium">10 GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Devices</span>
                  <span className="text-foreground font-medium">1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Servers</span>
                  <span className="text-foreground font-medium">All (17)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Daily Bonus</span>
                  <span className="text-cyan-400 font-medium">Available</span>
                </div>
              </div>

              <div className="border-t border-border mt-4 pt-4">
                <p className="text-xs text-muted-foreground">
                  Data resets on the 1st of each month. Earn bonus data through daily check-ins in the app.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Billing History</h3>
              
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground text-sm">No billing history</p>
                <p className="text-xs text-muted-foreground mt-1">You&apos;re on the free plan</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
              
              <div className="space-y-2">
                <a
                  href="/download"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/30 transition-colors group"
                >
                  <span className="text-sm text-foreground">Download App</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-cyan-400" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/30 transition-colors group"
                >
                  <span className="text-sm text-foreground">Privacy Policy</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-cyan-400" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/30 transition-colors group"
                >
                  <span className="text-sm text-foreground">Terms of Service</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-cyan-400" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/30 transition-colors group text-red-400"
                >
                  <span className="text-sm">Delete Account</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
