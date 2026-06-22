'use client'

import { useState } from 'react'

const colors = {
  primary: '#1C2B3A',
  accent: '#C8302A',
}

export default function CTAForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const payload = new FormData()
    payload.append('access_key', '3f35a2f5-9c08-4e4c-9a5e-b9a56f24314d')
    payload.append('name', form.name)
    payload.append('phone', form.phone)
    payload.append('email', form.email)
    payload.append('message', form.message)
    payload.append('subject', 'Homepage consultation request \u2014 Arcadia Home Care')
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: payload,
      headers: { Accept: 'application/json' },
    })
    if (res.ok) {
      setSent(true)
      if (typeof window !== 'undefined' && typeof (window as { gtag?: Function }).gtag === 'function') {
        ;(window as { gtag?: Function }).gtag!('event', 'generate_lead', { form_name: 'homepage_cta' })
      }
    }
  }

  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>&#x2705;</div>
        <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 24, color: '#fff', marginBottom: 12 }}>Thank you!</h3>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.65 }}>We&apos;ll be in touch shortly. If your matter is urgent, please call us at (844) 977-0050.</p>
      </div>
    )
  }

  return (
    <>
      <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, fontWeight: 600, color: '#fff', marginBottom: 24 }}>Book a Free Consultation</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          { id: 'name', label: 'Full Name', type: 'text', required: true },
          { id: 'phone', label: 'Phone Number', type: 'tel', required: true },
          { id: 'email', label: 'Email Address', type: 'email', required: true },
        ].map(f => (
          <div key={f.id}>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{f.label}</label>
            <input
              type={f.type}
              required={f.required}
              value={form[f.id as keyof typeof form]}
              onChange={e => setForm({ ...form, [f.id]: e.target.value })}
              className="hp-cta-input"
              style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, color: '#fff', fontSize: 15, outline: 'none', transition: 'border-color 0.2s', fontFamily: "'DM Sans', system-ui, sans-serif" }}
            />
          </div>
        ))}
        <div>
          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>How can we help? <span style={{ fontWeight: 400, textTransform: 'none', color: 'rgba(255,255,255,0.35)' }}>(optional)</span></label>
          <textarea
            rows={3}
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            className="hp-cta-input"
            style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, color: '#fff', fontSize: 15, outline: 'none', resize: 'none', fontFamily: "'DM Sans', system-ui, sans-serif", transition: 'border-color 0.2s' }}
          />
        </div>
        <button type="submit" className="hp-cta-submit" style={{ background: colors.accent, color: '#fff', padding: '15px', borderRadius: 8, border: 'none', fontSize: 16, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
          Book a Free Consultation
        </button>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textAlign: 'center', lineHeight: 1.5 }}>No obligation. We&apos;ll call you to discuss your family&apos;s situation.</p>
      </form>
    </>
  )
}
