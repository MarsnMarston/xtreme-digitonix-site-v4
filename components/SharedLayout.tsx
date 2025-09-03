
'use client'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar(){
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-zinc-200">
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/images/xtreme-digitonix-logo.png" alt="Xtreme Digitonix Logo" width={40} height={40} className="rounded" />
          <span className="font-semibold tracking-tight">Xtreme Digitonix</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link href="/contact" className="btn-gold rounded-2xl">Book a Discovery Call</Link>
      </div>
    </header>
  )
}

export function Footer(){
  return (
    <footer className="py-10 bg-zinc-50">
      <div className="container grid md:grid-cols-3 gap-8">
        <div>
          <Image src="/images/xtreme-digitonix-logo.png" alt="Xtreme Digitonix Logo" width={60} height={60} className="rounded" />
          <p className="text-sm text-zinc-700 mt-3">E-commerce account management for TikTok Shop and Amazon. Built in Karachi, serving brands worldwide.</p>
        </div>
        <div className="text-sm text-zinc-800">
          <p className="font-semibold">Services</p>
          <ul className="mt-2 space-y-1">
            <li><Link href="/services/amazon-private-label">Amazon Private Label</Link></li>
            <li><Link href="/services/amazon-wholesale">Amazon Wholesale</Link></li>
            <li><Link href="/services/tiktok-shop">TikTok Shop</Link></li>
          </ul>
        </div>
        <div className="text-sm text-zinc-800">
          <p className="font-semibold">Contact</p>
          <ul className="mt-2 space-y-1">
            <li><a href="mailto:support@xtremedigitonix.com">support@xtremedigitonix.com</a></li>
            <li><a href="mailto:sales@xtremedigitonix.com">sales@xtremedigitonix.com</a></li>
            <li><a href="mailto:mfaizan@xtremedigitonix.com">mfaizan@xtremedigitonix.com</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-xs text-center text-zinc-500">© {new Date().getFullYear()} Xtreme Digitonix. All rights reserved.</div>
    </footer>
  )
}
