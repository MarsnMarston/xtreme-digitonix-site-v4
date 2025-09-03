
'use client'
import { Navbar, Footer } from '@/components/SharedLayout'
import Link from 'next/link'
import Image from 'next/image'

export default function ServicesPage() {
  return (
    <div>
      <Navbar />
      <main className="container py-12">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-2 text-zinc-600">Comprehensive e-commerce management tailored to your brand.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href="/services/amazon-private-label" className="card overflow-hidden hover:shadow-lg">
            <Image src="/images/amz-private-label.jpg" alt="Amazon Private Label" width={1200} height={600} className="w-full h-40 object-cover" />
            <div className="p-6"><h3 className="text-lg font-semibold">Amazon Private Label Management</h3><p className="text-sm text-zinc-600 mt-2">Product research, branding, A+ content, PPC & growth.</p></div>
          </Link>
          <Link href="/services/amazon-wholesale" className="card overflow-hidden hover:shadow-lg">
            <Image src="/images/amz-wholesale.jpg" alt="Amazon Wholesale" width={1200} height={600} className="w-full h-40 object-cover" />
            <div className="p-6"><h3 className="text-lg font-semibold">Amazon Wholesale Management</h3><p className="text-sm text-zinc-600 mt-2">Supplier approvals, inventory, listings & performance.</p></div>
          </Link>
          <Link href="/services/tiktok-shop" className="card overflow-hidden hover:shadow-lg">
            <Image src="/images/tiktok-shop.jpg" alt="TikTok Shop" width={1200} height={600} className="w-full h-40 object-cover" />
            <div className="p-6"><h3 className="text-lg font-semibold">TikTok Shop Management</h3><p className="text-sm text-zinc-600 mt-2">Shop setup, content, ads & community growth.</p></div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
