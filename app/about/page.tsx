// app/about/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import { colors, fonts, trustItems } from '@/components/arcadia-colors'

export const metadata: Metadata = {
  title: 'Our Caregivers | Arcadia Home Care | Toronto & GTA',
  description: 'Meet the Arcadia Home Care team. Rigorously screened, continuously trained, and carefully matched to every client. Serving Toronto and the GTA since 2005.',
  alternates: { canonical: 'https://www.arcadiahomecare.ca/about/' },
}

const caregiverQuotes = [
  { quote: 'Great place to work at! They take good care of their employees as well as their clients. One of the best home care companies I have worked for.', name: 'Tenzin D' },
  { quote: "I have worked for Arcadia for the last 4 months and I love that I have the freedom to choose my clients that fit my availability. I've already recommended them to everyone that has asked me where I work.", name: 'Alex P' },
  { quote: 'Wonderful and compassionate team to work with always having the best interests of staff. Highly professional and the pay is okay. Great place to work.', name: 'Oyin O' },
  { quote: 'All staff members are highly professional. Quality of care, communication and services. Safe and confidential environment is provided to everyone. Very caring and respectful towards staff and clients.', name: 'Sapna S' },
  { quote: "I have worked for this company for almost a year now as a nursing student/PSW. Hands down one of the best management teams which takes good care of employees. Pay rate is competitive and they work with your schedule.", name: 'Saatvik A' },
  { quote: 'It has been a pleasure working at Arcadia Home Care. They work with my availability and allow a flexible schedule. The management team is very supportive and keep open communication.', name: 'AKP' },
  { quote: "I have been working with Arcadia since September 2019 and the administration are very professional and supportive. When it comes to scheduling, there is nothing impossible. They look out for their employees' welfare as well as the clients.", name: 'Elaine A' },
  { quote: "Arcadia Home Care has gained a reputation that offers a variety of services. Most of its staff has complex experience and training. It is especially rewarding to have the chance to work with Arcadia and grow with opportunities and potentials.", name: 'Patricia S' },
  { quote: "Working for Arcadia Home Care is a pleasure. They make it their priority to work with your schedule. The staff is very supportive and willing to help out in any way they can. I would definitely recommend this company to anyone who wants to work full time or part time.", name: 'Tianna H' },
]

const screeningItems = [
  { icon: '🔍', title: 'Rigorous Screening', body: 'Every caregiver undergoes a thorough application process, reference checks, and Vulnerable Sector Police Check before joining the Arcadia team.' },
  { icon: '🎓', title: 'Continuous Training', body: 'Caregivers receive high-quality orientation and ongoing education to stay current with best practices in dementia, brain injury, and complex care.' },
  { icon: '🤝', title: 'Careful Matching', body: 'We match caregivers to clients based on clinical fit, personality, language, and cultural background — not just availability.' },
  { icon: '🌍', title: 'Multilingual Team', body: 'Our caregivers speak Tagalog, Hindi, Farsi, Portuguese, Italian, Mandarin, and more — ensuring care that respects language and culture.' },
  { icon: '📋', title: 'Clinically Supervised', body: 'All care is overseen by our Clinical Director and Client Care Manager, ensuring consistent quality across every client file.' },
  { icon: '💼', title: 'Above-Average Retention', body: 'Our caregivers stay with Arcadia because they experience that we genuinely care for our staff — just as we care for our clients.' },
]

export default function AboutPage() {
  return (
    <>
      <style>{`
        .about-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }
        .about-hero { background: #1C2B3A; padding: 96px 24px 80px; text-align: center; }
        .about-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 16px; }
        .about-hero h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 600; color: #fff; line-height: 1.15; max-width: 760px; margin: 0 auto 20px; }
        .about-hero p { font-size: 1.1rem; color: rgba(255,255,255,0.72); max-width: 600px; margin: 0 auto; line-height: 1.75; }
        .intro-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 14px; }
        .screening-bg { background: #F7F3EE; border-top: 1px solid #E5E0D8; border-bottom: 1px solid #E5E0D8; }
        .screening-section { max-width: 1200px; margin: 0 auto; padding: 80px 24px; }
        .screening-section h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 600; color: #1C2B3A; text-align: center; margin-bottom: 48px; line-height: 1.2; }
        .screening-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        @media (max-width: 768px) { .screening-grid { grid-template-columns: 1fr; } }
        .screening-card { background: #fff; border: 1px solid #E5E0D8; border-radius: 14px; padding: 28px; transition: box-shadow 0.2s, border-color 0.2s; }
        .screening-card:hover { box-shadow: 0 8px 32px rgba(28,43,58,0.1); border-color: #C8302A; }
        .screening-icon { font-size: 28px; margin-bottom: 14px; }
        .screening-title { font-size: 15px; font-weight: 700; color: #1C2B3A; margin-bottom: 8px; }
        .screening-body { font-size: 0.9rem; color: #6B7280; line-height: 1.7; }
        .quotes-section { max-width: 1200px; margin: 0 auto; padding: 80px 24px; }
        .quotes-section h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 600; color: #1C2B3A; text-align: center; margin-bottom: 48px; line-height: 1.2; }
        .quotes-grid { columns: 3; column-gap: 20px; }
        @media (max-width: 900px) { .quotes-grid { columns: 2; } }
        @media (max-width: 560px) { .quotes-grid { columns: 1; } }
        .quote-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 12px; padding: 24px; break-inside: avoid; margin-bottom: 20px; }
        .quote-mark { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 48px; color: #C8302A; line-height: 0.8; display: block; margin-bottom: 10px; }
        .quote-text { font-size: 0.9375rem; color: #2D2D2D; line-height: 1.7; font-style: italic; margin-bottom: 14px; }
        .quote-name { font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #C8302A; }
        .join-section { background: #1C2B3A; text-align: center; padding: 80px 24px; }
        .join-section h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; color: #fff; max-width: 640px; margin: 0 auto 16px; line-height: 1.2; }
        .join-section p { color: rgba(255,255,255,0.7); font-size: 1rem; max-width: 480px; margin: 0 auto 36px; line-height: 1.75; }
        .join-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
      `}</style>

      <main className="about-page">

        {/* Hero */}
        <section className="about-hero">
          <p className="about-eyebrow">Our Caregivers</p>
          <h1>The Most Critical Part of Our Service Is Our Caregivers.</h1>
          <p>They are the face of Arcadia. That&apos;s why we spend so much care ensuring they are the best they can be — screened rigorously, trained continuously, and matched thoughtfully.</p>
        </section>

        {/* Trust strip */}
        <div style={{ background: colors.warm, borderBottom: `1px solid ${colors.border}`, padding: '12px 24px', display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
          {trustItems.map(item => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500, color: colors.primary }}>
              <span>{item.icon}</span><span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Leadership link strip */}
        <div style={{ background: colors.white, borderBottom: `1px solid ${colors.border}`, padding: '20px 24px', textAlign: 'center' }}>
          <p style={{ fontSize: 14, color: colors.textLight, marginBottom: 12 }}>Learn about our mission, vision, and the people who lead Arcadia</p>
          <a href="/about/leadership/" style={{ background: colors.primary, color: colors.white, padding: '10px 22px', borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>Meet Our Leadership Team →</a>
        </div>

        {/* Intro — full width centred */}
        <section style={{ background: colors.white, padding: '80px 24px' }}>
          <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
            <p className="intro-eyebrow">Who We Look For</p>
            <h2 style={{ fontFamily: fonts.display, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 600, color: colors.primary, lineHeight: 1.2, marginBottom: 20 }}>
              Qualified People With a Sincere Passion for Helping Others
            </h2>
            <p style={{ fontSize: '1rem', color: '#4B5563', lineHeight: 1.8, marginBottom: 16 }}>
              During our thorough and rigorous screening of applicants, we look for people who bring both the clinical knowledge and the human warmth that exceptional care requires. That gives us — and you — confidence in the care we provide for your loved one.
            </p>
            <p style={{ fontSize: '1rem', color: '#4B5563', lineHeight: 1.8, marginBottom: 48 }}>
              To ensure our caregivers can deliver the best quality care, they receive continuous training and support. At Arcadia, we carefully pair clients with caregivers who can best meet their needs — both from a service perspective and as a suitable personality match.
            </p>
            {/* Stats row */}
            <div style={{ display: 'flex', gap: 0, justifyContent: 'center', flexWrap: 'wrap', borderTop: `1px solid ${colors.border}`, borderBottom: `1px solid ${colors.border}` }}>
              {[
                { num: '2005', label: 'Year Founded' },
                { num: '5.0★', label: 'Google Rating · 38 Reviews' },
                { num: '7', label: 'Days a Week' },
                { num: '20+', label: 'Years Serving GTA Families' },
              ].map((stat, i) => (
                <div key={i} style={{ flex: '1 1 160px', padding: '32px 16px', borderRight: i < 3 ? `1px solid ${colors.border}` : 'none', textAlign: 'center' }}>
                  <div style={{ fontFamily: fonts.display, fontSize: '2.8rem', fontWeight: 700, color: colors.accent, lineHeight: 1 }}>{stat.num}</div>
                  <div style={{ fontSize: 13, color: colors.textLight, fontWeight: 600, marginTop: 6 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screening standards */}
        <div className="screening-bg">
          <div className="screening-section">
            <p className="intro-eyebrow" style={{ textAlign: 'center' }}>Our Standards</p>
            <h2>Rigorously Screened. Continuously Trained. Thoughtfully Matched.</h2>
            <div className="screening-grid">
              {screeningItems.map((item, i) => (
                <div key={i} className="screening-card">
                  <div className="screening-icon">{item.icon}</div>
                  <div className="screening-title">{item.title}</div>
                  <div className="screening-body">{item.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Caregiver quote wall */}
        <div className="quotes-section">
          <p className="intro-eyebrow" style={{ textAlign: 'center' }}>From Our Team</p>
          <h2>What Our Caregivers Say About Working at Arcadia</h2>
          <div className="quotes-grid">
            {caregiverQuotes.map((q, i) => (
              <div key={i} className="quote-card">
                <span className="quote-mark">&ldquo;</span>
                <p className="quote-text">{q.quote}</p>
                <span className="quote-name">{q.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Join team CTA */}
        <section className="join-section">
          <p className="intro-eyebrow" style={{ color: 'rgba(200,48,42,0.9)' }}>Join Our Team</p>
          <h2>Want to Be Part of the Arcadia Family?</h2>
          <p>We&apos;re always looking for PSWs, RNs, RPNs, and Rehabilitation Support Workers who share our commitment to clinical excellence and human dignity.</p>
          <div className="join-actions">
            <Link href="/careers/" className="arc-btn-primary">
              View Open Roles
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/pre-hire/" className="arc-btn-outline">Complete Pre-Hire Form</Link>
          </div>
        </section>

      </main>
    </>
  )
}