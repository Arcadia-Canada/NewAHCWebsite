'use client'

import { useState, useEffect } from 'react'

const colors = {
  primary: '#1C2B3A',
  accent: '#C8302A',
  white: '#FFFFFF',
  textLight: '#6B7280',
  border: '#E5E0D8',
}

const testimonials = [
  { quote: 'The day I made the telephone call to Arcadia was a day that changed my life. Once Rohit comes into your life, you are no longer alone trying to cope with the care of your loved ones.', name: 'Andrea H.', context: 'Family caregiver, Toronto' },
  { quote: 'My husband and I recently went on our first vacation in three years, because I was confident that my mother was in good hands. I am relieved, pleased and, above all, grateful.', name: 'Phyllis N., Ph.D.', context: 'Family caregiver, Toronto, ON' },
  { quote: 'Arcadia Home Care has exceeded all expectations. It\'s the fact that Arcadia is willing to go the extra distance for our family that really impresses me.', name: 'Dr. Michael B.', context: 'Power of Attorney, Toronto' },
  { quote: 'The team is highly professional, compassionate, and truly dedicated to providing quality care. They go above and beyond to meet individual needs.', name: 'Felixpina O.', context: '\u2B50\u2B50\u2B50\u2B50\u2B50 Google Review' },
]

export default function TestimonialsCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % testimonials.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section style={{ background: colors.white, padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.accent, marginBottom: 12 }}>What Families Say</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: colors.primary }}>Families Across the GTA Trust Arcadia</h2>
        </div>
        <div style={{ maxWidth: 820, margin: '0 auto 48px', textAlign: 'center', position: 'relative', minHeight: 180 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ position: i === 0 ? 'relative' : 'absolute', top: 0, left: 0, right: 0, opacity: active === i ? 1 : 0, transition: 'opacity 0.8s ease', pointerEvents: active === i ? 'auto' : 'none' }}>
              <div style={{ fontSize: 72, color: colors.accent, lineHeight: 0.8, marginBottom: 16, fontFamily: 'Georgia, serif' }}>&ldquo;</div>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', fontWeight: 400, lineHeight: 1.65, color: colors.primary, fontStyle: 'italic', marginBottom: 24 }}>{t.quote}</p>
              <div style={{ fontWeight: 700, color: colors.primary, fontSize: 15 }}>{t.name}</div>
              <div style={{ color: colors.textLight, fontSize: 13, marginTop: 4 }}>{t.context}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 48 }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} aria-label={`Show testimonial ${i + 1}`} style={{ width: active === i ? 28 : 8, height: 8, borderRadius: 100, background: active === i ? colors.accent : colors.border, border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
          ))}
        </div>
      </div>
    </section>
  )
}
