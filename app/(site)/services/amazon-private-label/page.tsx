
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
              <h1 className="text-4xl font-bold mb-4">Amazon Private Label Management</h1>

<p className="text-zinc-700 leading-relaxed">Amazon is the global ecommerce leader with millions of active shoppers. With Xtreme Digitonix's private label management, you can leverage its infrastructure, FBA, and ads to maximize sales potential.</p>
<h2 className="text-2xl font-semibold mb-2 mt-6">Our Approach</h2>
<p className="text-zinc-700 leading-relaxed">We use market research, competitive analysis, and creative optimization to position your brand for growth.</p>
<ul className="list-disc pl-6 space-y-2 text-zinc-700 mt-4">
  <li><strong>Product Research</strong> — identify high-demand opportunities with strong margins.</li>
  <li><strong>Listing Optimization</strong> — keywords, A+ content, and visuals that convert.</li>
  <li><strong>PPC Advertising</strong> — efficient campaigns to scale profitably.</li>
  <li><strong>Inventory Management</strong> — avoid stockouts & excess fees.</li>
  <li><strong>Brand Protection</strong> — monitoring & enforcement.</li>
</ul>

              <div className="mt-8"><Link href="/contact" className="btn-gold rounded-2xl px-6 py-3 text-lg">Book Free Consultation</Link></div>
            </div>
            <div className="order-first md:order-none">
              <Image src="/images/amz-private-label.jpg" alt="Amazon Private Label Illustration" width={1200} height={900} className="w-full rounded-2xl shadow" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
