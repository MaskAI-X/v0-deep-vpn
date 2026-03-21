import { Navigation } from "@/components/navigation"
import { DashboardContent } from "@/components/dashboard/dashboard-content"

export const metadata = {
  title: "Dashboard - DeepVPN",
  description: "Manage your DeepVPN connection, view data usage, and configure settings.",
}

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden relative">
      {/* Aurora Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/8 via-transparent to-transparent rounded-full animate-aurora" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-teal-500/8 via-transparent to-transparent rounded-full animate-aurora" style={{ animationDelay: '-10s' }} />
      </div>

      <Navigation />
      <DashboardContent />
    </main>
  )
}
