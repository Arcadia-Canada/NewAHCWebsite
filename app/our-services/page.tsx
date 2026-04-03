'use client'

import { colors, fonts, phone, trustItems, arcBtn, hoverPrimary, hoverOutline } from '@/components/arcadia-colors'

const services = [
  { icon: '🧠', title: "Dementia & Alzheimer's Home Care", desc: 'Safe, familiar support for loved ones living with cognitive decline — in the comfort of their own home.', href: '/our-services/dementia-alzheimers-home-care/', tag: 'Most Requested' },
  { icon: '⚡', title: 'Acquired Brain Injury Home Care', desc: 'Coordinated with your clinical team to support recovery and rebuild independence after brain injury.', href: '/our-services/acquired-brain-injury-home-care/', tag: null },
  { icon: '📈', title: 'Rehabilitation Support', desc: 'Goal-oriented home care that works alongside your OT, PT, and specialist team.', href: '/our-services/rehabilitation-support/', tag: null },
  { icon: '🏥', title: 'Hospital Discharge Support', desc: 'A safe, supported transition from hospital to home — coordinated from day one.', href: '/our-services/hospital-discharge-support/', tag: null },
  { icon: '💙', title: 'Palliative Home Care', desc: 'Comfort-focused care that preserves dignity and supports the whole family through serious illness.', href: '/our-services/palliative-home-care/', tag: null },
  { icon: '🤝', title: 'Personal Support & Daily Living', desc: 'Hands-on help with bathing, dressing, meals, and daily routines — delivered with respect and warmth.', href: '/our-services/personal-support-daily-living/', tag: null },
  { icon: '☕', title: 'Companion Care', desc: 'Meaningful company, conversation, and engagement for seniors who need connection as much as care.', href: '/our-services/companion-care/', tag: null },
  { icon: '🌿', title: 'Respite Care', desc: 'Relief for family caregivers — scheduled or emergency coverage so you can rest without worry.', href: '/our-services/respite-care/', tag: 'For Families' },
  { icon: '🌙', title: 'Overnight & 24-Hour Care', desc: 'Around-the-clock support for individuals who need continuous supervision and assistance.', href: '/our-services/overnight-24-hour-care/', tag: null },
  { icon: '📋', title: 'Case Management', desc: 'A vital link between your loved one, your family, and every professional involved in their care.', href: '/our-services/case-management/', tag: null },
  { icon: '🏠', title: 'Light Housekeeping', desc: 'A clean, safe home environment — because where someone lives is part of how they feel.', href: '/our-services/light-housekeeping/', tag: null },
  { icon: '📦', title: 'Downsizing & Transition Support', desc: 'Practical, compassionate help navigating a move — decluttering, organizing, and transitioning with dignity.', href: '/our-services/downsizing-transition-support/', tag: null },
]

export default function OurServicesPage() {
  return (
    <>
      <style>{`
        .services-page { font-family: ${fonts.body}; background: ${colors.white}; }
        .services-hero { background: ${colors.primary}; padding: 72px 24px 64px; text-align: center; }
        .services-hero-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: ${colors.accent}; margin-bottom: 14px; }
        .services-hero h1 { font-family: ${fonts.display}; font-size: clamp(2.2rem, 5vw, 3.8rem); font-weight: 600; color: ${colors.white}; line-height: 1.15; margin-bottom: 16px; }
        .services-hero p { font-size: 17px; color: rgba(255,255,255,0.65); max-width: 520px; margin: 0 auto 32px; line-height: 1.7; font-weight: 300; }
        .services-hero-ctas { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
        .trust-strip { background: ${colors.warm}; border-bottom: 1px solid ${colors.border}; padding: 12px 24px; display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; }
        .trust-item { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 500; color: ${colors.primary}; }
        .services-grid-section { max-width: 1200px; margin: 0 auto; padding: 72px 24px 96px; }
        .services-grid-section h2 { font-family: ${fonts.display}; font-size: clamp(1.6rem, 3vw, 2.2rem); color: ${colors.primary}; margin-bottom: 8px; }
        .services-grid-section > p { font-size: 15px; color: ${colors.textLight}; margin-bottom: 48px; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .services-grid { grid-template-columns: 1fr; } }
        .service-card { position: relative; background: ${colors.surface}; border: 1px solid ${colors.border}; border-radius: 14px; padding: 28px 26px 24px; text-decoration: none; display: flex; flex-direction: column; transition: all 0.25s ease; overflow: hidden; }
        .service-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: ${colors.accent}; transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease; }
        .service-card:hover { background: ${colors.white}; border-color: ${colors.accent}; box-shadow: 0 12px 40px rgba(28,43,58,0.12); transform: translateY(-3px); }
        .service-card:hover::before { transform: scaleX(1); }
        .service-card:hover .card-arrow { transform: translateX(4px); color: ${colors.accent}; }
        .card-tag { display: inline-block; background: rgba(200,48,42,0.08); color: ${colors.accent}; font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 10px; border-radius: 100px; margin-bottom: 14px; align-self: flex-start; border: 1px solid rgba(200,48,42,0.2); }
        .card-icon { font-size: 32px; margin-bottom: 14px; display: block; line-height: 1; }
        .card-title { font-family: ${fonts.display}; font-size: 19px; font-weight: 600; color: ${colors.primary}; margin-bottom: 10px; line-height: 1.3; }
        .card-desc { font-size: 13.5px; color: ${colors.textLight}; line-height: 1.65; flex: 1; margin-bottom: 20px; }
        .card-footer { display: flex; align-items: center; justify-content: space-between; padding-top: 16px; border-top: 1px solid ${colors.border}; }
        .card-link { font-size: 13px; font-weight: 700; color: ${colors.accent}; text-transform: uppercase; letter-spacing: 0.05em; }
        .card-arrow { font-size: 18px; color: ${colors.accent}; transition: all 0.2s; font-weight: 300; }
        .services-cta-banner { background: ${colors.primary}; padding: 64px 24px; text-align: center; }
        .services-cta-banner h2 { font-family: ${fonts.display}; font-size: clamp(1.8rem, 3.5vw, 2.6rem); color: ${colors.white}; margin-bottom: 14px; }
        .services-cta-banner p { font-size: 16px; color: rgba(255,255,255,0.6); max-width: 480px; margin: 0 auto 32px; line-height: 1.7; }
        .referral-strip { background: ${colors.warm}; border-top: 1px solid ${colors.border}; padding: 36px 24px; text-align: center; }
        .referral-strip p { font-size: 15px; color: ${colors.primary}; margin-bottom: 14px; }
        .referral-strip a { display: inline-block; background: ${colors.primary}; color: ${colors.white}; padding: 11px 24px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 700; transition: all 0.2s; }
        .referral-strip a:hover { background: #0f1a26; }
      `}</style>

      <div className="services-page">

        {/* Hero */}
        <section className="services-hero">
          <p className="services-hero-eyebrow">What We Offer</p>
          <h1>Specialized Care for<br />Complex Situations</h1>
          <p>Every service is built around clinical understanding — not just availability. We match care to the person, not the other way around.</p>
          <div className="services-hero-ctas">
            <a href={phone.tel} style={arcBtn.primary} onMouseOver={hoverPrimary.over} onMouseOut={hoverPrimary.out}>📞 Call {phone.display}</a>
            <a href="/contact" style={arcBtn.outline} onMouseOver={hoverOutline.over} onMouseOut={hoverOutline.out}>Book a Free Consultation</a>
          </div>
        </section>

        {/* Trust strip */}
        <div className="trust-strip">
          {trustItems.map(item => (
            <div key={item.text} className="trust-item">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Grid */}
        <section className="services-grid-section">
          <h2>All 12 Services</h2>
          <p>Not sure which service fits your situation? <a href={phone.tel} style={{ color: colors.accent, fontWeight: 600 }}>Call us</a> — we&apos;ll guide you.</p>
          <div className="services-grid">
            {services.map((s) => (
              <a key={s.href} href={s.href} className="service-card">
                {s.tag && <span className="card-tag">{s.tag}</span>}
                <span className="card-icon">{s.icon}</span>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-desc">{s.desc}</p>
                <div className="card-footer">
                  <span className="card-link">Learn More</span>
                  <span className="card-arrow">→</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="services-cta-banner">
          <h2>Not Sure Where to Start?</h2>
          <p>One conversation is all it takes. We&apos;ll help you understand what your loved one needs and how Arcadia can help.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={phone.tel} style={arcBtn.primary} onMouseOver={hoverPrimary.over} onMouseOut={hoverPrimary.out}>📞 Call {phone.display}</a>
            <a href="/contact" style={arcBtn.outline} onMouseOver={hoverOutline.over} onMouseOut={hoverOutline.out}>Book a Free Consultation</a>
          </div>
        </section>

        {/* Referral strip */}
        <div className="referral-strip">
          <p><strong>Referring a patient?</strong> We work closely with discharge planners, social workers, and specialist teams across the GTA.</p>
          <a href="/referral-form">Submit a Professional Referral →</a>
        </div>

      </div>
    </>
  )
}