
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Xtreme Digitonix — Amazon & TikTok Shop Management',
  description: 'E-commerce account management for Amazon Private Label, Amazon Wholesale, and TikTok Shop.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
