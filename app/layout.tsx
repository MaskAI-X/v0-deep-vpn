import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'DeepVPN - Your Privacy. Your Freedom.',
  description: 'Free, fast, secure VPN. No registration. No logs. Ever. Military-grade encryption with VLESS Reality + Hysteria2 protocols.',
  keywords: ['VPN', 'privacy', 'security', 'free VPN', 'no logs', 'encryption'],
  authors: [{ name: 'DeepRoot AI Pte Ltd' }],
  generator: 'Next.js',
}

export const viewport: Viewport = {
  themeColor: '#0a0f1c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
