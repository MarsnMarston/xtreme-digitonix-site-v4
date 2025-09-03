
'use client'
import { Navbar, Footer } from '@/components/SharedLayout'
import { useState } from 'react'

export default function ContactPage(){
  const [form, setForm] = useState({ name:'', email:'', service:'', message:'' })
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle')
  const [error, setError] = useState<string>('')

  async function onSubmit(e: React.FormEvent){
    e.preventDefault()
    setError('')
    if(!form.name||!form.email||!form.service||!form.message){ setError('Please fill in all fields.'); return }
    setStatus('submitting')
    try{
      const res = await fetch('/api/contact',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form)})
      if(!res.ok) throw new Error('fail')
      setStatus('success'); setForm({name:'',email:'',service:'',message:''})
    }catch(e){ setStatus('error'); setError('Something went wrong. Please try again or email support@xtremedigitonix.com.') }
  }
  return (
    <div>
      <Navbar />
      <main className="bg-white">
        <section className="container py-12 max-w-3xl">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-zinc-700 mt-2">Fill this form and our team will get back to you.</p>
          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            <div><label className="text-sm">Full Name</label><input className="input mt-1" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></div>
            <div><label className="text-sm">Email</label><input type="email" className="input mt-1" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></div>
            <div><label className="text-sm">Service Name</label><select className="input mt-1" value={form.service} onChange={e=>setForm({...form,service:e.target.value})}><option value="">Select a service</option><option>Amazon Private Label Management</option><option>Amazon Wholesale Management</option><option>TikTok Shop Management</option></select></div>
            <div><label className="text-sm">Message</label><textarea rows={5} className="textarea mt-1" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} /></div>
            {error && <div className="text-sm text-red-600">{error}</div>}
            {status==='success' && <div className="text-sm text-green-700">Thanks! Your message was sent.</div>}
            <div className="flex gap-3"><button type="submit" className="btn-gold px-6 py-3 rounded-2xl" disabled={status==='submitting'}>{status==='submitting'?'Submitting…':'Submit'}</button><a href="mailto:support@xtremedigitonix.com" className="btn-outline px-6 py-3 rounded-2xl">Email Us</a></div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}
