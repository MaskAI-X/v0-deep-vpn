import { Navigation } from "@/components/navigation"
import { LoginCard } from "@/components/login/login-card"
import { FloatingJellyfish } from "@/components/login/floating-jellyfish"

export const metadata = {
  title: "Login - DeepVPN",
  description: "Login to your DeepVPN account via Telegram or Anonymous Key.",
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden relative flex flex-col">
      {/* Aurora Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent rounded-full animate-aurora" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-teal-500/10 via-transparent to-transparent rounded-full animate-aurora" style={{ animationDelay: '-10s' }} />
      </div>

      {/* Floating Jellyfish Background */}
      <FloatingJellyfish />

      <Navigation />
      
      <div className="flex-1 flex items-center justify-center px-4 py-24">
        <LoginCard />
      </div>
    </main>
  )
}
