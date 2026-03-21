"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { JellyfishIcon } from "../jellyfish-icon"
import { Key, MessageCircle } from "lucide-react"

export function LoginCard() {
  const [loginMethod, setLoginMethod] = useState<"telegram" | "key" | null>(null)
  const [anonymousKey, setAnonymousKey] = useState("")

  return (
    <div className="w-full max-w-md">
      <div className="glass-card rounded-3xl p-8 md:p-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-16 h-16 mb-4">
            <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse-glow" />
            <JellyfishIcon className="w-16 h-16 text-cyan-400 relative z-10" />
          </div>
          <h1 className="text-2xl font-bold gradient-text">Welcome Back</h1>
          <p className="text-muted-foreground text-sm mt-1">Sign in to your DeepVPN account</p>
        </div>

        {/* Login Methods */}
        <div className="space-y-4">
          {/* Telegram Login - Primary */}
          <Button
            className="w-full h-12 bg-[#0088cc] hover:bg-[#0077b5] text-white font-semibold flex items-center justify-center gap-3"
            onClick={() => setLoginMethod("telegram")}
          >
            <MessageCircle className="w-5 h-5" />
            Continue with Telegram
          </Button>

          {/* Anonymous Key */}
          {loginMethod === "key" ? (
            <div className="space-y-3">
              <div className="relative">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter your anonymous key"
                  value={anonymousKey}
                  onChange={(e) => setAnonymousKey(e.target.value)}
                  className="pl-11 h-12 bg-muted/50 border-cyan-500/20 focus:border-cyan-400 focus:ring-cyan-400/20"
                />
              </div>
              <Button
                className="w-full h-12 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-background font-semibold"
                disabled={!anonymousKey}
              >
                Recover Account
              </Button>
              <Button
                variant="ghost"
                className="w-full text-muted-foreground hover:text-foreground"
                onClick={() => setLoginMethod(null)}
              >
                Back to login options
              </Button>
            </div>
          ) : (
            <Button
              variant="outline"
              className="w-full h-12 border-cyan-500/30 text-foreground hover:bg-cyan-400/10 hover:border-cyan-400/50 flex items-center justify-center gap-3"
              onClick={() => setLoginMethod("key")}
            >
              <Key className="w-5 h-5 text-cyan-400" />
              Use Anonymous Key
            </Button>
          )}

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-cyan-500/20"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-card px-3 text-muted-foreground">Coming Soon</span>
            </div>
          </div>

          {/* Coming Soon Options */}
          <Button
            variant="outline"
            className="w-full h-12 border-muted/50 text-muted-foreground cursor-not-allowed opacity-50 flex items-center justify-center gap-3"
            disabled
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Sign in with Apple
          </Button>

          <Button
            variant="outline"
            className="w-full h-12 border-muted/50 text-muted-foreground cursor-not-allowed opacity-50 flex items-center justify-center gap-3"
            disabled
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign in with Google
          </Button>
        </div>

        {/* Note */}
        <div className="mt-8 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
          <p className="text-sm text-center text-muted-foreground">
            <span className="text-cyan-400 font-medium">No account needed!</span>
            {" "}Just download the app and start using DeepVPN immediately.
          </p>
        </div>
      </div>
    </div>
  )
}
