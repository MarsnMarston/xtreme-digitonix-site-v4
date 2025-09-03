
'use client'
import { Navbar, Footer } from '@/components/SharedLayout'
import Link from 'next/link'
import Image from 'next/image'

export default function Page(){
  return (
    <div>
      <Navbar />
      <main className="bg-white">
        <section className="container pt-16 pb-8 text-center">
          <h1 className="text-5xl font-bold leading-tight">Your Partner in <span className="underline decoration-softgold decoration-4 underline-offset-4">Amazon & TikTok Shop Growth</span></h1>
          <p className="mt-6 text-lg text-zinc-700 max-w-3xl mx-auto">We manage your ecommerce accounts with strategies that maximize sales, build brand value, and simplify operations.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="btn-gold rounded-2xl px-6 py-3 text-lg">Book Free Consultation</Link>
            <Link href="/services" className="btn-outline rounded-2xl px-6 py-3 text-lg">Explore Services</Link>
          </div>
        </section>
        <section className="container py-12">
          <h2 className="text-3xl font-bold text-center mb-6">The Importance of Ecommerce</h2>
          <p className="text-zinc-700 leading-relaxed text-center max-w-4xl mx-auto">Ecommerce helps brands reach global audiences, scale faster, diversify revenue, and stay competitive.</p>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <Image src="/images/home-01.jpg" alt="Ecommerce Illustration 1" width={1200} height={800} className="rounded-2xl shadow" />
            <Image src="/images/home-02.jpg" alt="Ecommerce Illustration 2" width={1200} height={800} className="rounded-2xl shadow" />
            <Image src="/images/home-03.jpg" alt="Ecommerce Illustration 3" width={1200} height={800} className="rounded-2xl shadow" />
          </div>
        </section>
        <section className="bg-zinc-50 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-6">Why Choose Xtreme Digitonix?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-2xl shadow"><h3 className="text-xl font-semibold mb-2">Expertise Across Platforms</h3><p className="text-zinc-700">Amazon Private Label, Amazon Wholesale, and TikTok Shop with proven results.</p></div>
              <div className="p-6 bg-white rounded-2xl shadow"><h3 className="text-xl font-semibold mb-2">Data-Driven Results</h3><p className="text-zinc-700">Analytics and market insights that deliver measurable ROI.</p></div>
              <div className="p-6 bg-white rounded-2xl shadow"><h3 className="text-xl font-semibold mb-2">Dedicated Support</h3><p className="text-zinc-700">Transparent communication and tailored strategies.</p></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
