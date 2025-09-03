
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
              <h1 className="text-4xl font-bold mb-4">Amazon Wholesale Management</h1>

<p className="text-zinc-700 leading-relaxed">Wholesale lets you add branded, high-demand products fast. We handle supplier outreach/approvals, pricing, and stock planning.</p>
<h2 className="text-2xl font-semibold mb-2 mt-6">Our Approach</h2>
<p className="text-zinc-700 leading-relaxed">We vet suppliers, negotiate terms, and monitor performance.</p>
<ul className="list-disc pl-6 space-y-2 text-zinc-700 mt-4">
  <li><strong>Product Research</strong> — find profitable wholesale lines.</li>
  <li><strong>Brand Approvals</strong> — secure approvals with distributors/brands.</li>
  <li><strong>Pricing Strategy</strong> — stay competitive while protecting margins.</li>
  <li><strong>Inventory & Replenishment</strong> — optimize turns and storage fees.</li>
</ul>

              <div className="mt-8"><Link href="/contact" className="btn-gold rounded-2xl px-6 py-3 text-lg">Book Free Consultation</Link></div>
            </div>
            <div className="order-first md:order-none">
              <Image src="/images/amz-wholesale.jpg" alt="Amazon Wholesale Illustration" width={1200} height={900} className="w-full rounded-2xl shadow" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
