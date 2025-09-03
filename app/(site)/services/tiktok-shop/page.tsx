
'use client'
import Image from 'next/image'
import { Navbar, Footer } from '@/components/SharedLayout'
import Link from 'next/link'

export default function ServicePage(){
  return (
    <div>
      <Navbar />
      <main className="bg-white text-zinc-900">
        <section className="container py-12 space-y-10">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="text-4xl font-bold mb-4">TikTok Shop Management</h1>

<p className="text-zinc-700 leading-relaxed">TikTok Shop combines entertainment with shopping. We build content, optimize shops, and run paid + organic strategies that convert.</p>
<h2 className="text-2xl font-semibold mb-2 mt-6">Key Services</h2>
<ul className="list-disc pl-6 space-y-2 text-zinc-700 mt-4">
  <li>Shop setup & design</li>
  <li>Product research & sourcing</li>
  <li>Content production & live shopping</li>
  <li>Ads optimization & reporting</li>
  <li>Community engagement & support handling</li>
</ul>

              <div className="mt-8"><Link href="/contact" className="btn-gold rounded-2xl px-6 py-3 text-lg">Book Free Consultation</Link></div>
            </div>
            <div className="order-first md:order-none">
              <Image src="/images/tiktok-shop.jpg" alt="TikTok Shop Illustration" width={1200} height={900} className="w-full rounded-2xl shadow" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
