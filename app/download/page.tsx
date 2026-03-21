import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DownloadHero } from "@/components/download/download-hero"
import { PlatformCards } from "@/components/download/platform-cards"
import { ComparisonTable } from "@/components/download/comparison-table"

export const metadata = {
  title: "Download DeepVPN - Free VPN for iOS & macOS",
  description: "Download DeepVPN for iOS and macOS. Free, fast, secure VPN with no registration required.",
}

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden relative">
      {/* Aurora Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent rounded-full animate-aurora" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-teal-500/10 via-transparent to-transparent rounded-full animate-aurora" style={{ animationDelay: '-10s' }} />
      </div>

      <Navigation />
      <DownloadHero />
      <PlatformCards />
      <ComparisonTable />
      <Footer />
    </main>
  )
}
