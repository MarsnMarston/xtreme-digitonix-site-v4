
'use client'
import Image from 'next/image'
import { Navbar, Footer } from '@/components/SharedLayout'

export default function AboutPage(){
  return (
    <div>
      <Navbar />
      <main className="bg-white">
        <section>
          <Image src="/images/about-us-banner.jpg" alt="About Us Banner" width={1920} height={600} className="w-full max-h-[420px] object-cover" />
        </section>
        <section className="container py-12 space-y-8">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-zinc-700">Xtreme Digitonix is an ecommerce account management agency based in Karachi, Pakistan. We specialize in Amazon (PL + Wholesale) and TikTok Shop growth.</p>
          <div><h2 className="text-2xl font-semibold mb-2">Our Mission</h2><p className="text-zinc-700">To empower ecommerce businesses with the tools, insights, and strategies they need to scale profitably on Amazon and TikTok.</p></div>
          <div><h2 className="text-2xl font-semibold mb-2">Our Values</h2><ul className="list-disc pl-6 space-y-2 text-zinc-700"><li>Integrity & transparency</li><li>Results & excellence</li><li>Innovation & learning</li><li>Client-first mindset</li></ul></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
