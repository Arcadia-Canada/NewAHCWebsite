'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const colors = {
  primary: '#1C2B3A',
  accent: '#C8302A',
  warm: '#F7F3EE',
  white: '#FFFFFF',
  text: '#2D2D2D',
  textLight: '#6B7280',
  border: '#E5E0D8',
  surface: '#FAFAF8',
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const services = [
  { icon: '🧠', title: 'Dementia & Alzheimer\'s Home Care', desc: 'Safe, familiar support for loved ones living with cognitive decline — in their own home.', href: '/our-services/dementia-alzheimers-home-care/' },
  { icon: '⚡', title: 'Acquired Brain Injury Care', desc: 'Coordinated with your clinical team to support recovery and rebuilding independence.', href: '/our-services/acquired-brain-injury-home-care/' },
  { icon: '📈', title: 'Rehabilitation Support', desc: 'Goal-oriented home care that works alongside your OT, PT, and specialist team.', href: '/our-services/rehabilitation-support/' },
  { icon: '🏥', title: 'Hospital Discharge Support', desc: 'A safe, supported transition from hospital to home — coordinated from day one.', href: '/our-services/hospital-discharge-support/' },
  { icon: '💙', title: 'Palliative Home Care', desc: 'Comfort-focused care that preserves dignity and supports the whole family.', href: '/our-services/palliative-home-care/' },
  { icon: '📋', title: 'Case Management', desc: 'Coordinated oversight and planning so your loved one\'s care stays consistent and well-organized.', href: '/our-services/case-management/' },
];

const conditions: { label: string; slug: string }[] = [
  { label: 'Dementia', slug: 'dementia-care-at-home' },
  { label: 'Stroke Recovery', slug: 'stroke-recovery' },
  { label: 'Parkinson\'s', slug: 'parkinsons-support' },
  { label: 'Brain Injury', slug: 'acquired-brain-injury-support' },
  { label: 'Palliative Care', slug: 'palliative-serious-illness' },
  { label: 'Post-Hospital Recovery', slug: 'post-hospital-recovery' },
  { label: 'Frailty & Falls', slug: 'frailty-fall-prevention' },
  { label: 'Caregiver Burnout', slug: 'caregiver-burnout-support' },
];

const testimonials = [
  { quote: 'The day I made the telephone call to Arcadia was a day that changed my life. Once Rohit comes into your life, you are no longer alone trying to cope with the care of your loved ones.', name: 'Andrea H.', context: 'Family caregiver, Toronto' },
  { quote: 'My husband and I recently went on our first vacation in three years, because I was confident that my mother was in good hands. I am relieved, pleased and, above all, grateful.', name: 'Phyllis N., Ph.D.', context: 'Family caregiver, Toronto, ON' },
  { quote: 'Arcadia Home Care has exceeded all expectations. It\'s the fact that Arcadia is willing to go the extra distance for our family that really impresses me.', name: 'Dr. Michael B.', context: 'Power of Attorney, Toronto' },
  { quote: 'The team is highly professional, compassionate, and truly dedicated to providing quality care. They go above and beyond to meet individual needs.', name: 'Felixpina O.', context: '⭐⭐⭐⭐⭐ Google Review' },
];

const googleReviews = [
  { name: 'Janet Cuddy', rating: 5, text: 'I often needed to cover a shift with very short notice, or on the weekend, and I was always met with a helpful, positive response. They were a lifesaver. The PSWs assigned to my mother were marvellous — skilled, kind and dependable.', time: '1 month ago' },
  { name: 'Jennifer Kim', rating: 5, text: 'Their communication is outstanding — whenever I send an inquiry, they respond incredibly quickly. I\'ve honestly never worked with a business that gets back to clients this fast. Highly recommended!', time: '3 months ago' },
  { name: 'Alice Gomes', rating: 5, text: 'Through a 5+ year battle with dementia, the one thing that remained constant was the care and support provided by the team from Arcadia. Expectations were consistently exceeded. I would, without hesitation, recommend Arcadia.', time: '2 years ago' },
  { name: 'Dyan Tan', rating: 5, text: 'I\'ve been working with Arcadia Home Care for almost 10 years now. The people are genuinely good people who treat their clients as family. What I really love is the culture of respect, compassion and the feeling of HOME and FAMILY!', time: '3 months ago' },
  { name: 'Ross Hendin', rating: 5, text: 'We\'ve been trusting Arcadia for years with many of Allevio Healthcare\'s patients, and have always received great feedback. Thanks for taking such good care of our seniors!', time: '3 years ago' },
  { name: 'Julie Duffy', rating: 5, text: 'Arcadia Home Care was a life saver in a very difficult situation with an elderly family member. I can\'t thank them enough for their care, compassion and support.', time: '2 years ago' },
]

const locations = [
  { name: 'Toronto', sub: 'North York · Scarborough · Etobicoke', href: '/locations/toronto/' },
  { name: 'York Region', sub: 'Markham · Richmond Hill · Vaughan', href: '/locations/york-region/' },
  { name: 'Peel Region', sub: 'Mississauga · Brampton', href: '/locations/peel-region/' },
  { name: 'Durham Region', sub: 'Oshawa · Ajax · Whitby', href: '/locations/durham-region/' },
  { name: 'Halton Region', sub: 'Oakville · Burlington · Milton', href: '/locations/halton-region/' },
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

const TRUST_BAR_ITEMS = [
  { icon: '⭐', text: '5.0 Google Rating · 38 Reviews', isRating: true },
  { icon: '🏠', text: 'GTA Families Since 2005', isRating: false },
  { icon: '🩺', text: 'Clinical Care at Home', isRating: false },
  { icon: '📞', text: 'Available 7 Days a Week', isRating: false },
];

function TrustBar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const items = isHomePage ? TRUST_BAR_ITEMS.filter(item => !item.isRating) : TRUST_BAR_ITEMS;
  return (
    <div style={{ background: colors.warm, borderBottom: `1px solid ${colors.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 24px', display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
        {items.map(item => (
          <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500, color: colors.primary }}>
            <span>{item.icon}</span><span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StarRating() {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F4B400">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function GoogleReviewsWidget() {
  return (
    <section style={{ background: colors.warm, padding: '80px 24px', borderTop: `1px solid ${colors.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.accent, marginBottom: 12 }}>Google Reviews</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: colors.primary, marginBottom: 16 }}>
            Trusted by GTA Families
          </h2>
          {/* Rating summary */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: colors.white, border: `1px solid ${colors.border}`, borderRadius: 100, padding: '10px 24px' }}>
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 28, fontWeight: 700, color: colors.primary }}>5.0</span>
            <StarRating />
            <span style={{ fontSize: 13, color: colors.textLight, fontWeight: 500 }}>38 Google Reviews</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
        </div>

        {/* Review cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="reviews-grid-home">
          {googleReviews.map((review, i) => (
            <div key={i} style={{ background: colors.white, border: `1px solid ${colors.border}`, borderRadius: 14, padding: '24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: colors.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.white, fontSize: 14, fontWeight: 700, flexShrink: 0 }}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: colors.primary }}>{review.name}</div>
                    <div style={{ fontSize: 11, color: colors.textLight }}>{review.time}</div>
                  </div>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <StarRating />
              <p style={{ fontSize: 13.5, color: colors.text, lineHeight: 1.7, fontStyle: 'italic', flex: 1 }}>
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <a href="https://g.page/r/arcadiahomecare/review" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 14, fontWeight: 600, color: colors.accent, textDecoration: 'none', borderBottom: `2px solid ${colors.accent}`, paddingBottom: 2 }}>
            See All 38 Reviews on Google →
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .reviews-grid-home { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .reviews-grid-home { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function Hero() {
  return (
    <section style={{ background: colors.primary, paddingTop: 72, minHeight: '92vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, maxWidth: 1200, margin: '0 auto', padding: '80px 24px 60px', display: 'flex', alignItems: 'center', gap: 60, width: '100%' }} className="hero-grid">
        {/* Text */}
        <div style={{ flex: '1 1 55%' }}>
          <div style={{ display: 'inline-block', background: 'rgba(200,48,42,0.15)', border: '1px solid rgba(200,48,42,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 24 }}>
            <span style={{ color: '#E8867F', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Specialized Home Care · Toronto & GTA</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)', fontWeight: 600, lineHeight: 1.12, color: '#fff', marginBottom: 24, letterSpacing: '-0.01em' }}>
            Care That Understands<br />
            <span style={{ color: '#E8867F' }}>What Your Family<br />Is Going Through</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'rgba(255,255,255,0.75)', marginBottom: 36, maxWidth: 540, fontWeight: 300 }}>
            Arcadia brings clinical expertise and genuine compassion together — guiding families through dementia, brain injury, recovery, and complex aging at home. Serving the GTA since 2005.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16 }}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="tel:8449770050" style={{ background: colors.accent, color: '#fff', padding: '16px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 16, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.2s' }}
                onMouseOver={e => e.currentTarget.style.background = '#a82520'}
                onMouseOut={e => e.currentTarget.style.background = colors.accent}>
                📞 Call (844) 977-0050
              </a>
              <a href="/contact/" style={{ background: 'transparent', color: '#fff', padding: '16px 32px', borderRadius: 8, textDecoration: 'none', fontSize: 16, fontWeight: 600, border: '1.5px solid rgba(255,255,255,0.3)', transition: 'all 0.2s' }}
                onMouseOver={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }}
                onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}>
                Book a Free Consultation
              </a>
            </div>
            {/* Static Google rating badge — replaces Elfsight */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 100, padding: '8px 16px' }}>
              <StarRating />
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>5.0 · 38 Google Reviews</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="hero-image" style={{ flex: '1 1 40%', position: 'relative', maxWidth: 480 }}>
          <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}>
            <Image src="/images/image 43-08b42066-435w.webp" alt="Arcadia caregiver with senior client" width={480} height={520} priority style={{ width: '100%', height: 520, objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(28,43,58,0.3))' }} />
          </div>
          <a href="/referral-form/" style={{ position: 'absolute', bottom: -20, left: -20, background: '#fff', borderRadius: 12, padding: '16px 20px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', maxWidth: 220, display: 'block', textDecoration: 'none', color: 'inherit', transition: 'box-shadow 0.2s' }}
            onMouseOver={e => { e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.18)'; }}
            onMouseOut={e => { e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)'; }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: colors.accent, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Referral Ready</div>
            <div style={{ fontSize: 13, color: colors.primary, fontWeight: 500, lineHeight: 1.4 }}>We work with discharge planners, social workers & care teams</div>
            <span style={{ display: 'inline-block', marginTop: 8, fontSize: 12, color: colors.accent, fontWeight: 600 }}>Submit a Referral →</span>
          </a>
        </div>
      </div>
      <TrustBar />
    </section>
  );
}

function DifferenceSection() {
  const pillars = [
    { icon: '🩺', title: 'Clinical Insight', body: 'We understand dementia, acquired brain injury, rehabilitation, and complex aging. Our care is guided by clinical knowledge — not just caregiver availability.' },
    { icon: '🧭', title: 'Guided Care', body: 'From first call to first week of care, we walk with your family every step. No confusion. No handoffs. Just clear, consistent support.' },
    { icon: '🤝', title: 'Human Dignity', body: 'We match caregivers to the person — their routines, their preferences, their personality. Because dignity is in every detail of daily life.' },
  ];
  return (
    <section style={{ background: colors.surface, padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.accent, marginBottom: 12 }}>Why Arcadia Is Different</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: colors.primary, marginBottom: 16 }}>More Than a Caregiver Agency</h2>
          <p style={{ fontSize: 17, color: colors.textLight, maxWidth: 580, margin: '0 auto', lineHeight: 1.65 }}>Most home care agencies focus on staffing. Arcadia approaches care the way a clinical team would — while delivering the warmth families need at home.</p>
        </div>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }} className="pillar-grid">
          {pillars.map((p, i) => (
            <div key={i} style={{ flex: '1 1 280px', background: colors.white, borderRadius: 14, padding: '32px', border: `1px solid ${colors.border}`, transition: 'all 0.3s', cursor: 'default' }}
              onMouseOver={e => { e.currentTarget.style.boxShadow = '0 20px 40px rgba(28,43,58,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseOut={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <div style={{ fontSize: 40, marginBottom: 20 }}>{p.icon}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 22, fontWeight: 600, color: colors.primary, marginBottom: 12 }}>{p.title}</h3>
              <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.7 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section style={{ background: colors.white, padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.accent, marginBottom: 12 }}>What We Offer</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: colors.primary, marginBottom: 16 }}>Specialized Care for Complex Situations</h2>
          <p style={{ fontSize: 17, color: colors.textLight, maxWidth: 540, margin: '0 auto', lineHeight: 1.65 }}>Every service is designed around clinical understanding and human connection — not just availability.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="services-grid">
          {services.map((s, i) => (
            <a key={i} href={s.href} style={{ textDecoration: 'none' }}>
              <div style={{ background: colors.surface, borderRadius: 14, padding: '32px 28px', border: `1px solid ${colors.border}`, height: '100%', transition: 'all 0.3s', cursor: 'pointer' }}
                onMouseOver={e => { e.currentTarget.style.background = colors.primary; e.currentTarget.querySelectorAll('[data-text]').forEach(el => (el as HTMLElement).style.color = '#fff'); e.currentTarget.querySelectorAll('[data-sub]').forEach(el => (el as HTMLElement).style.color = 'rgba(255,255,255,0.65)'); e.currentTarget.querySelectorAll('[data-link]').forEach(el => { (el as HTMLElement).style.color = '#E8867F'; }); }}
                onMouseOut={e => { e.currentTarget.style.background = colors.surface; e.currentTarget.querySelectorAll('[data-text]').forEach(el => (el as HTMLElement).style.color = colors.primary); e.currentTarget.querySelectorAll('[data-sub]').forEach(el => (el as HTMLElement).style.color = colors.textLight); e.currentTarget.querySelectorAll('[data-link]').forEach(el => { (el as HTMLElement).style.color = colors.accent; }); }}>
                <span style={{ fontSize: 32, display: 'block', marginBottom: 16 }}>{s.icon}</span>
                <h3 data-text style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 19, fontWeight: 600, color: colors.primary, marginBottom: 10, lineHeight: 1.3, transition: 'color 0.3s' }}>{s.title}</h3>
                <p data-sub style={{ fontSize: 14, color: colors.textLight, lineHeight: 1.65, marginBottom: 16, transition: 'color 0.3s' }}>{s.desc}</p>
                <span data-link style={{ fontSize: 13, fontWeight: 600, color: colors.accent, transition: 'color 0.3s' }}>Learn More →</span>
              </div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="/our-services/" style={{ fontSize: 15, fontWeight: 600, color: colors.primary, textDecoration: 'none', borderBottom: `2px solid ${colors.accent}`, paddingBottom: 2 }}>View All 12 Services →</a>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { num: '01', title: 'One Conversation', body: 'Call or book online. We listen first. No pressure, no complex forms — just a real conversation about your loved one\'s situation.', img: '/images/image 41-435w.webp' },
    { num: '02', title: 'A Personalized Plan', body: 'We assess your loved one\'s needs and carefully match them with caregivers chosen for both their clinical skills and their personality.', img: '/images/image 77-435w.webp' },
    { num: '03', title: 'Care Begins', body: 'We coordinate everything — including publicly funded options and insurance — so your family can exhale and focus on what matters.', img: '/images/pexels-anna-shvets-5257342-scaled-640w.webp' },
  ];
  return (
    <section style={{ background: colors.warm, padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.accent, marginBottom: 12 }}>How It Works</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: colors.primary, marginBottom: 16 }}>Starting Care Is Simpler Than You Think</h2>
          <p style={{ fontSize: 17, color: colors.textLight, maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>We've guided hundreds of families through this. Here's how care starts with Arcadia.</p>
        </div>
        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }} className="steps-grid">
          {steps.map((s, i) => (
            <div key={i} style={{ flex: '1 1 280px', textAlign: 'center' }}>
              <div style={{ position: 'relative', marginBottom: 24 }}>
                <Image src={s.img} alt={s.title} width={435} height={220} style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 12, display: 'block' }} />
                <div style={{ position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)', background: colors.accent, color: '#fff', width: 44, height: 44, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, boxShadow: '0 4px 12px rgba(200,48,42,0.4)' }}>{s.num}</div>
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 21, fontWeight: 600, color: colors.primary, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14.5, color: colors.textLight, lineHeight: 1.7 }}>{s.body}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <a href="tel:8449770050" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: colors.primary, color: '#fff', padding: '18px 40px', borderRadius: 8, textDecoration: 'none', fontSize: 17, fontWeight: 700, transition: 'all 0.2s' }}
            onMouseOver={e => e.currentTarget.style.background = '#0f1a26'}
            onMouseOut={e => e.currentTarget.style.background = colors.primary}>
            <span>📞</span> Start the Conversation · (844) 977-0050
          </a>
          <p style={{ marginTop: 12, fontSize: 13, color: colors.textLight }}>No obligation. Just a real conversation about what your family needs.</p>
        </div>
      </div>
    </section>
  );
}

function ConditionsSection() {
  return (
    <section style={{ background: colors.primary, padding: '80px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(200,48,42,0.9)', marginBottom: 12 }}>Conditions We Support</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 600, color: '#fff', marginBottom: 16 }}>We Understand Complex Conditions</h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto 48px', lineHeight: 1.65 }}>Every care plan starts with understanding your loved one's specific condition, not just their tasks.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }} className="conditions-grid">
          {conditions.map(c => (
            <a key={c.slug} href={`/conditions/${c.slug}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 100, padding: '10px 22px', color: 'rgba(255,255,255,0.85)', fontSize: 14, fontWeight: 500, transition: 'all 0.2s', cursor: 'pointer' }}
                onMouseOver={e => { e.currentTarget.style.background = colors.accent; e.currentTarget.style.borderColor = colors.accent; e.currentTarget.style.color = '#fff'; }}
                onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; }}>
                {c.label}
              </div>
            </a>
          ))}
        </div>
        <a href="/conditions/" style={{ display: 'inline-block', marginTop: 36, fontSize: 14, fontWeight: 600, color: '#E8867F', textDecoration: 'none', borderBottom: '1px solid rgba(200,48,42,0.4)', paddingBottom: 2 }}>View All Conditions →</a>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
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
              <div style={{ fontSize: 72, color: colors.accent, lineHeight: 0.8, marginBottom: 16, fontFamily: 'Georgia, serif' }}>"</div>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', fontWeight: 400, lineHeight: 1.65, color: colors.primary, fontStyle: 'italic', marginBottom: 24 }}>{t.quote}</p>
              <div style={{ fontWeight: 700, color: colors.primary, fontSize: 15 }}>{t.name}</div>
              <div style={{ color: colors.textLight, fontSize: 13, marginTop: 4 }}>{t.context}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 48 }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ width: active === i ? 28 : 8, height: 8, borderRadius: 100, background: active === i ? colors.accent : colors.border, border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReferralSection() {
  return (
    <section style={{ background: colors.surface, padding: '80px 24px', borderTop: `1px solid ${colors.border}`, borderBottom: `1px solid ${colors.border}` }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 60, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(200,48,42,0.08)', border: '1px solid rgba(200,48,42,0.2)', borderRadius: 100, padding: '5px 14px', marginBottom: 16 }}>
            <span style={{ color: colors.accent, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>For Referring Professionals</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 600, color: colors.primary, marginBottom: 16, lineHeight: 1.25 }}>A Partner You Can Refer With Confidence</h2>
          <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.7, marginBottom: 28 }}>Arcadia works closely with hospital discharge planners, social workers, OTs, and specialist physicians across the GTA. We accept complex referrals and provide clear, timely communication back to your team.</p>
          <a href="/referral-form/" style={{ display: 'inline-block', background: colors.primary, color: '#fff', padding: '14px 28px', borderRadius: 8, textDecoration: 'none', fontSize: 15, fontWeight: 600, transition: 'all 0.2s' }}
            onMouseOver={e => e.currentTarget.style.background = '#0f1a26'}
            onMouseOut={e => e.currentTarget.style.background = colors.primary}>
            Submit a Referral →
          </a>
        </div>
        <div style={{ flex: '1 1 280px', background: colors.white, borderRadius: 12, padding: '32px', border: `1px solid ${colors.border}` }}>
          <h4 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 18, fontWeight: 600, color: colors.primary, marginBottom: 20 }}>We work with:</h4>
          {['Hospital discharge planners', 'Social workers & case managers', 'Occupational therapists', 'Geriatricians & neurologists', 'Long-term care transition teams', 'Retirement home coordinators'].map(r => (
            <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ color: colors.accent, fontSize: 16, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: 14, color: colors.text }}>{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationsSection() {
  return (
    <section style={{ background: colors.white, padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.accent, marginBottom: 12 }}>Where We Serve</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: colors.primary, marginBottom: 16 }}>Serving Families Across the GTA</h2>
          <p style={{ fontSize: 16, color: colors.textLight, maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>From downtown Toronto to Halton Region — local care, regional expertise.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }} className="locations-grid">
          {locations.map((l, i) => (
            <a key={i} href={l.href} style={{ textDecoration: 'none' }}>
              <div style={{ background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: 12, padding: '28px 20px', textAlign: 'center', transition: 'all 0.3s' }}
                onMouseOver={e => { e.currentTarget.style.background = colors.primary; e.currentTarget.querySelectorAll('*').forEach(el => { if ((el as HTMLElement).dataset.title) (el as HTMLElement).style.color = '#fff'; if ((el as HTMLElement).dataset.sub) (el as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }); }}
                onMouseOut={e => { e.currentTarget.style.background = colors.surface; e.currentTarget.querySelectorAll('*').forEach(el => { if ((el as HTMLElement).dataset.title) (el as HTMLElement).style.color = colors.primary; if ((el as HTMLElement).dataset.sub) (el as HTMLElement).style.color = colors.textLight; }); }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>📍</div>
                <div data-title style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 17, color: colors.primary, marginBottom: 6, transition: 'color 0.3s' }}>{l.name}</div>
                <div data-sub style={{ fontSize: 12, color: colors.textLight, lineHeight: 1.5, transition: 'color 0.3s' }}>{l.sub}</div>
              </div>
            </a>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: 28, fontSize: 13, color: colors.textLight }}>
          Don&apos;t see your area? <a href="tel:8449770050" style={{ color: colors.accent, fontWeight: 600, textDecoration: 'none' }}>Call us</a> — we may still serve you.
        </p>
      </div>
    </section>
  );
}

function CTASection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append('access_key', '3f35a2f5-9c08-4e4c-9a5e-b9a56f24314d');
    payload.append('name', form.name);
    payload.append('phone', form.phone);
    payload.append('email', form.email);
    payload.append('message', form.message);
    payload.append('subject', 'Homepage consultation request — Arcadia Home Care');
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: payload,
      headers: { Accept: 'application/json' },
    });
    if (res.ok) setSent(true);
  };
  return (
    <section style={{ background: colors.primary, padding: '96px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 80, alignItems: 'flex-start', flexWrap: 'wrap' }} className="cta-grid">
          <div style={{ flex: '1 1 340px' }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(200,48,42,0.9)', marginBottom: 12 }}>Get In Touch</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 600, color: '#fff', marginBottom: 20, lineHeight: 1.2 }}>It Starts With One Conversation</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 40 }}>There&apos;s no obligation. Just a real conversation about your family&apos;s situation and how we can help — clinical expertise and genuine care, from the first call.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <a href="tel:8449770050" style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none' }}>
                <div style={{ width: 48, height: 48, background: colors.accent, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>📞</div>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Call Us</div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>(844) 977-0050</div>
                </div>
              </a>
              <a href="mailto:info@arcadiahomecare.ca" style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none' }}>
                <div style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>✉️</div>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Email</div>
                  <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>info@arcadiahomecare.ca</div>
                </div>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>🕐</div>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Hours</div>
                  <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>Mon–Fri, 9:00AM – 5:00PM</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: '1 1 380px', background: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: '40px', border: '1px solid rgba(255,255,255,0.1)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 24, color: '#fff', marginBottom: 12 }}>Thank you!</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.65 }}>We&apos;ll be in touch shortly. If your matter is urgent, please call us at (844) 977-0050.</p>
              </div>
            ) : (
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
                      <input type={f.type} required={f.required} value={form[f.id as keyof typeof form]} onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                        style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, color: '#fff', fontSize: 15, outline: 'none', transition: 'border-color 0.2s', fontFamily: "'DM Sans', system-ui, sans-serif" }}
                        onFocus={e => e.target.style.borderColor = colors.accent}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>How can we help? <span style={{ fontWeight: 400, textTransform: 'none', color: 'rgba(255,255,255,0.35)' }}>(optional)</span></label>
                    <textarea rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, color: '#fff', fontSize: 15, outline: 'none', resize: 'none', fontFamily: "'DM Sans', system-ui, sans-serif", transition: 'border-color 0.2s' }}
                      onFocus={e => e.target.style.borderColor = colors.accent}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'} />
                  </div>
                  <button type="submit" style={{ background: colors.accent, color: '#fff', padding: '15px', borderRadius: 8, border: 'none', fontSize: 16, fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s', fontFamily: "'DM Sans', system-ui, sans-serif" }}
                    onMouseOver={e => e.currentTarget.style.background = '#a82520'}
                    onMouseOut={e => e.currentTarget.style.background = colors.accent}>
                    Book a Free Consultation
                  </button>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textAlign: 'center', lineHeight: 1.5 }}>No obligation. We&apos;ll call you to discuss your family&apos;s situation.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <Hero />
      <DifferenceSection />
      <ServicesSection />
      <ProcessSection />
      <ConditionsSection />
      <TestimonialsSection />
      <GoogleReviewsWidget />
      <ReferralSection />
      <LocationsSection />
      <CTASection />
    </main>
  );
}