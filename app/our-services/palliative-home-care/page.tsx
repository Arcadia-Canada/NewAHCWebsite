// app/our-services/palliative-home-care/page.tsx
// Consideration-stage service page
// Target keyword: "palliative home care toronto" / "palliative care support at home GTA"
// Persona: family already in palliative care system, evaluating Arcadia as a provider
// for supplemental or primary private support — not looking for an explanation of
// what palliative care is
// Tone: quietest service page on the site — no urgency pressure, no sales energy
// The question this page answers: can Arcadia provide the right care for this situation?
// Schema: Service + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Palliative Home Care | Toronto & GTA | Arcadia Home Care',
  description: 'Private palliative home care support in Toronto and the GTA. Arcadia provides compassionate, clinically guided care alongside the palliative team — filling the gaps in publicly funded hours so your loved one can remain at home with consistent support and dignity.',
  alternates: { canonical: 'https://www.arcadiahomecare.ca/our-services/palliative-home-care/' },
}

const faqs = [
  {
    q: 'How does Arcadia work with our existing palliative care team?',
    a: 'We work alongside the palliative care nurse, physician, and any other providers already involved — not instead of them. Our caregivers follow the comfort plan established by the clinical team, communicate changes promptly, and document what they observe so that the treating team has an accurate picture of the person\'s condition between visits. Coordination is active, not nominal.',
  },
  {
    q: 'What hours can Arcadia provide for palliative support?',
    a: 'We provide care seven days a week, including evenings, overnights, and around-the-clock coverage when needed. The hours we provide are built around the gaps in the current care plan — whether that means a few mornings a week, overnight coverage, or full-time presence as the situation requires.',
  },
  {
    q: 'Can Arcadia support someone who wants to remain at home through the end of life?',
    a: 'Yes — and this is some of the most meaningful work we do. Supporting a person to remain at home through end of life requires consistent presence, good communication between all care providers, caregivers who are experienced and compassionate in this setting, and a family that feels genuinely supported. Arcadia can help provide that support, in coordination with the palliative care team.',
  },
  {
    q: 'How do Arcadia\'s caregivers approach end-of-life care?',
    a: 'Our caregivers in palliative situations are selected for their experience, temperament, and genuine capacity to be present in difficult circumstances. They are not there to perform tasks and leave — they are there to provide comfort, presence, and practical support in a way that respects the person\'s dignity and the family\'s wishes. We brief caregivers thoroughly on the comfort plan, the person\'s history and preferences, and any clinical considerations before they begin.',
  },
  {
    q: 'What is the difference between what Ontario Health atHome provides and what Arcadia provides?',
    a: 'Ontario Health atHome coordinates publicly funded palliative care — nursing visits, some PSW hours, and access to a palliative care team. That foundation is meaningful, but the hours allocated rarely match what a family needs around the clock. Arcadia fills the gaps — overnight, on weekends, between nursing visits, and as the care needs increase toward the end of life. We work alongside the public system, not as a replacement for it.',
  },
  {
    q: 'What support does Arcadia provide for family caregivers in palliative situations?',
    a: 'Family caregivers in palliative situations carry an enormous weight — practically, emotionally, and often without adequate acknowledgement. Arcadia provides scheduled respite so family members can rest, sleep, and have time away from caregiving without the person being alone. We also support family members in understanding what to expect at each stage and help connect them with bereavement resources when the time comes.',
  },
]

const whatWeProvide = [
  {
    title: 'Overnight and 24-hour presence',
    body: 'Consistent overnight coverage so the person is never alone and family caregivers can sleep. Around-the-clock care when the situation requires it.',
  },
  {
    title: 'Personal care and comfort',
    body: 'Assistance with bathing, positioning, hygiene, and skin care — provided gently, at the person\'s pace, with attention to comfort and dignity above all else.',
  },
  {
    title: 'Companionship and presence',
    body: 'Sitting with the person, reading aloud, playing music, or simply being there in silence. Presence matters and is something the clinical team cannot always provide.',
  },
  {
    title: 'Meal support and hydration',
    body: 'Preparing foods that are appetizing and manageable, monitoring intake, and sitting with the person during meals — adapting as appetite and swallowing ability change.',
  },
  {
    title: 'Comfort medication reminders',
    body: 'Prompting comfort medications at the right times and observing for changes in pain, breathing, or distress — communicating promptly with the palliative care team when something shifts.',
  },
  {
    title: 'Mobility and repositioning',
    body: 'Assisting with movement, repositioning for comfort, and ensuring the person is not left in a position that causes distress or skin breakdown.',
  },
  {
    title: 'Respite for family caregivers',
    body: 'Scheduled, reliable relief so family members can rest, attend to their own lives, and be a family member rather than a caregiver for defined periods.',
  },
  {
    title: 'Support through the final stage',
    body: 'Experienced, compassionate presence through end-of-life care — working alongside the palliative team to ensure the person\'s final days are as peaceful, comfortable, and dignified as possible.',
  },
]

export default function PalliativeHomeCarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': 'Palliative Home Care',
              'provider': {
                '@type': 'LocalBusiness',
                'name': 'Arcadia Home Care',
                'telephone': '+18449770050',
                'address': {
                  '@type': 'PostalAddress',
                  'streetAddress': '302 Bay St.',
                  'addressLocality': 'Toronto',
                  'addressRegion': 'ON',
                  'postalCode': 'M5H 0B6',
                  'addressCountry': 'CA',
                },
              },
              'areaServed': 'Toronto, Ontario, Canada',
              'description': 'Private palliative home care support in Toronto and the GTA — compassionate, clinically coordinated care that fills the gaps in publicly funded hours.',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': faqs.map(faq => ({
                '@type': 'Question',
                'name': faq.q,
                'acceptedAnswer': { '@type': 'Answer', 'text': faq.a },
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.arcadiahomecare.ca/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Our Services', 'item': 'https://www.arcadiahomecare.ca/our-services/' },
                { '@type': 'ListItem', 'position': 3, 'name': 'Palliative Home Care', 'item': 'https://www.arcadiahomecare.ca/our-services/palliative-home-care/' },
              ],
            },
          ]),
        }}
      />

      <style>{`
        .service-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }

        /* Hero — slightly quieter than other service pages */
        .service-hero { background: #1C2B3A; padding: 96px 24px 80px; }
        .service-hero-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 360px; gap: 64px; align-items: center; }
        @media (max-width: 900px) { .service-hero-inner { grid-template-columns: 1fr; } }
        .service-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 14px; }
        .service-hero h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 600; color: #fff; line-height: 1.15; margin-bottom: 20px; }
        .service-hero p { font-size: 1.05rem; color: rgba(255,255,255,0.72); line-height: 1.8; margin-bottom: 32px; }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-red { background: #C8302A; color: #fff; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; transition: all 0.2s; box-shadow: 0 8px 20px rgba(200,48,42,0.3); display: inline-flex; align-items: center; gap: 8px; }
        .btn-red:hover { background: #a82520; transform: translateY(-2px); }
        .btn-outline { background: transparent; color: #fff; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; border: 1.5px solid rgba(255,255,255,0.35); transition: all 0.2s; display: inline-flex; align-items: center; }
        .btn-outline:hover { background: rgba(255,255,255,0.1); }

        .hero-trust { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 14px; padding: 28px; }
        .trust-item { display: flex; align-items: flex-start; gap: 12px; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .trust-item:last-child { border-bottom: none; padding-bottom: 0; }
        .trust-item:first-child { padding-top: 0; }
        .trust-icon { font-size: 20px; flex-shrink: 0; margin-top: 2px; }
        .trust-text-title { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 2px; }
        .trust-text-body { font-size: 13px; color: rgba(255,255,255,0.55); line-height: 1.5; }

        /* Professional banner — quieter cream version for this page */
        .pro-banner { background: #F7F3EE; border-bottom: 1px solid #E5E0D8; padding: 14px 24px; }
        .pro-banner-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
        .pro-banner-text { font-size: 14px; color: #1C2B3A; line-height: 1.5; }
        .pro-banner-text strong { font-weight: 700; }
        .pro-banner-text a { color: #C8302A; font-weight: 700; text-decoration: none; }
        .pro-banner-text a:hover { text-decoration: underline; }

        .breadcrumb { background: #F7F3EE; border-bottom: 1px solid #E5E0D8; padding: 12px 24px; font-size: 13px; color: #6B7280; }
        .breadcrumb-inner { max-width: 1100px; margin: 0 auto; }
        .breadcrumb a { color: #1C2B3A; text-decoration: none; font-weight: 600; }
        .breadcrumb a:hover { color: #C8302A; }
        .breadcrumb span { margin: 0 8px; }

        .service-body { max-width: 1100px; margin: 0 auto; padding: 72px 24px; display: grid; grid-template-columns: 1fr 320px; gap: 64px; align-items: start; }
        @media (max-width: 900px) { .service-body { grid-template-columns: 1fr; } }

        .service-article h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.6rem, 2.5vw, 2.2rem); font-weight: 600; color: #1C2B3A; line-height: 1.25; margin: 48px 0 16px; }
        .service-article h2:first-child { margin-top: 0; }
        .service-article p { font-size: 1rem; color: #4B5563; line-height: 1.85; margin-bottom: 18px; }
        .service-article a { color: #C8302A; font-weight: 600; text-decoration: underline; text-decoration-color: rgba(200,48,42,0.3); text-underline-offset: 3px; transition: text-decoration-color 0.15s; }
        .service-article a:hover { text-decoration-color: #C8302A; }

        .provides-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0 32px; }
        @media (max-width: 640px) { .provides-grid { grid-template-columns: 1fr; } }
        .provides-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 12px; padding: 20px; transition: border-color 0.2s; }
        .provides-card:hover { border-color: #1C2B3A; }
        .provides-card-title { font-size: 14px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
        .provides-card-title::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #C8302A; flex-shrink: 0; }
        .provides-card-body { font-size: 0.875rem; color: #6B7280; line-height: 1.7; }

        .diff-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin: 24px 0 32px; }
        .diff-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-left: 4px solid #1C2B3A; border-radius: 0 12px 12px 0; padding: 20px 24px; }
        .diff-card-title { font-size: 15px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; }
        .diff-card-body { font-size: 0.9rem; color: #6B7280; line-height: 1.7; }

        /* Quiet mid CTA — cream version for palliative */
        .mid-cta { background: #F7F3EE; border: 1px solid #E5E0D8; border-left: 4px solid #1C2B3A; border-radius: 0 14px 14px 0; padding: 32px; margin: 40px 0; }
        .mid-cta h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.5rem; font-weight: 600; color: #1C2B3A; margin-bottom: 8px; }
        .mid-cta p { font-size: 0.9rem; color: #6B7280; margin-bottom: 20px; line-height: 1.7; }
        .mid-cta-phone { font-size: 1.5rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 12px; }

        .faq-section { margin-top: 48px; }
        .faq-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 12px; }
        .faq-section h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.6rem, 2.5vw, 2.2rem); font-weight: 600; color: #1C2B3A; margin-bottom: 28px; }
        .faq-item { border-bottom: 1px solid #E5E0D8; padding: 20px 0; }
        .faq-q { font-size: 1rem; font-weight: 700; color: #1C2B3A; margin-bottom: 10px; line-height: 1.5; }
        .faq-a { font-size: 0.9375rem; color: #4B5563; line-height: 1.8; }

        /* Sidebar — quieter for palliative */
        .service-sidebar { position: sticky; top: 100px; }
        .sidebar-cta { background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 14px; padding: 28px; text-align: center; margin-bottom: 20px; }
        .sidebar-cta h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.3rem; font-weight: 600; color: #1C2B3A; margin-bottom: 8px; }
        .sidebar-cta p { font-size: 0.875rem; color: #6B7280; margin-bottom: 16px; line-height: 1.65; }
        .sidebar-phone { font-size: 1.2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 12px; }
        .btn-navy-sm { background: #1C2B3A; color: #fff; padding: 11px 20px; border-radius: 8px; font-size: 13px; font-weight: 700; text-decoration: none; display: block; text-align: center; transition: background 0.2s; }
        .btn-navy-sm:hover { background: #0f1a26; }
        .sidebar-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 14px; padding: 28px; margin-bottom: 20px; }
        .sidebar-card-title { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #6B7280; margin-bottom: 16px; }
        .sidebar-link { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: #1C2B3A; text-decoration: none; padding: 10px 0; border-bottom: 1px solid #F0EBE3; transition: color 0.15s; }
        .sidebar-link:last-child { border-bottom: none; }
        .sidebar-link:hover { color: #C8302A; }
        .sidebar-link::before { content: '→'; color: #6B7280; font-size: 13px; }

        .pro-section { background: #1C2B3A; padding: 56px 24px; }
        .pro-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
        @media (max-width: 768px) { .pro-inner { grid-template-columns: 1fr; } }
        .pro-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(200,48,42,0.9); margin-bottom: 12px; }
        .pro-section h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.6rem, 2.5vw, 2.2rem); font-weight: 600; color: #fff; margin-bottom: 16px; line-height: 1.2; }
        .pro-section p { font-size: 0.9625rem; color: rgba(255,255,255,0.65); line-height: 1.8; margin-bottom: 16px; }
        .pro-details { display: flex; flex-direction: column; gap: 16px; }
        .pro-detail { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 18px 20px; }
        .pro-detail-title { font-size: 13px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .pro-detail-body { font-size: 0.875rem; color: rgba(255,255,255,0.55); line-height: 1.6; }
        .btn-white { background: #fff; color: #1C2B3A; padding: 13px 22px; border-radius: 8px; font-size: 14px; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; }
        .btn-white:hover { background: #F7F3EE; }
        .btn-outline-white { background: transparent; color: #fff; padding: 13px 22px; border-radius: 8px; font-size: 14px; font-weight: 700; text-decoration: none; border: 1.5px solid rgba(255,255,255,0.3); display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; }
        .btn-outline-white:hover { background: rgba(255,255,255,0.08); }
        .pro-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 24px; }

        .related-section { background: #F7F3EE; border-top: 1px solid #E5E0D8; padding: 56px 24px; }
        .related-inner { max-width: 1100px; margin: 0 auto; }
        .related-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #6B7280; margin-bottom: 10px; }
        .related-inner h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 600; color: #1C2B3A; margin-bottom: 28px; }
        .related-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        @media (max-width: 768px) { .related-grid { grid-template-columns: 1fr; } }
        .related-card { background: #fff; border: 1px solid #E5E0D8; border-radius: 12px; padding: 22px; text-decoration: none; transition: border-color 0.2s; }
        .related-card:hover { border-color: #1C2B3A; }
        .related-card-type { font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #6B7280; margin-bottom: 8px; }
        .related-card-title { font-size: 15px; font-weight: 700; color: #1C2B3A; line-height: 1.4; }
        .related-card-arrow { font-size: 13px; color: #6B7280; margin-top: 10px; display: block; }

        /* Bottom CTA — quieter version */
        .bottom-cta { background: #1C2B3A; padding: 80px 24px; text-align: center; }
        .bottom-cta h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; color: #fff; max-width: 680px; margin: 0 auto 14px; line-height: 1.2; }
        .bottom-cta p { color: rgba(255,255,255,0.65); font-size: 1rem; max-width: 500px; margin: 0 auto 32px; line-height: 1.8; }
        .bottom-cta-phone { font-size: 1.8rem; font-weight: 700; color: rgba(255,255,255,0.9); text-decoration: none; display: block; margin-bottom: 20px; font-family: 'Cormorant Garamond', Georgia, serif; }
        .cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .btn-white-lg { background: #fff; color: #1C2B3A; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; }
        .btn-white-lg:hover { background: #F7F3EE; }
        .btn-outline-white-lg { background: transparent; color: #fff; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; border: 1.5px solid rgba(255,255,255,0.35); display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; }
        .btn-outline-white-lg:hover { background: rgba(255,255,255,0.08); }
      `}</style>

      <main className="service-page">

        {/* Hero */}
        <section className="service-hero">
          <div className="service-hero-inner">
            <div>
              <p className="service-eyebrow">Our Services · Toronto & GTA</p>
              <h1>Palliative Home Care</h1>
              <p>
                When a loved one is living with a serious or life-limiting illness,
                the care they receive at home matters deeply. Arcadia provides
                compassionate, clinically coordinated palliative support — filling
                the gaps in publicly funded hours so your loved one can remain
                at home with consistent presence, comfort, and dignity.
              </p>
              <div className="hero-actions">
                <a href="tel:8449770050" className="btn-red">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 2.5C2 8.299 5.701 12 11.5 12l.5-2.5-2.5-.5-.5 1c-2-1-3-2-4-4l1-.5L5.5 3 3 2.5z" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round"/>
                  </svg>
                  Call (844) 977-0050
                </a>
                <Link href="/contact/" className="btn-outline">Talk to Our Team</Link>
              </div>
            </div>
            <div className="hero-trust">
              {[
                { icon: '🕯️', title: 'Experienced in end-of-life home care', body: 'Our caregivers in palliative situations are selected for experience, temperament, and genuine capacity to be present in this setting.' },
                { icon: '🔗', title: 'Works alongside your palliative care team', body: 'We follow the comfort plan and communicate with the clinical team — not independently of it.' },
                { icon: '🌙', title: 'Overnight and 24-hour coverage available', body: 'Consistent presence when it matters most, including through the night and around the clock when needed.' },
                { icon: '💙', title: 'Support for family caregivers too', body: 'Scheduled respite so family members can rest, attend to their lives, and be present when it counts.' },
              ].map((item, i) => (
                <div key={i} className="trust-item">
                  <span className="trust-icon">{item.icon}</span>
                  <div>
                    <div className="trust-text-title">{item.title}</div>
                    <div className="trust-text-body">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional banner */}
        <div className="pro-banner">
          <div className="pro-banner-inner">
            <p className="pro-banner-text">
              <strong>Palliative care team or health professional?</strong> Refer directly using our{' '}
              <Link href="/referral-form/" style={{ color: '#C8302A', fontWeight: 700, textDecoration: 'none' }}>
                professional referral form
              </Link>{' '}
              or call us at{' '}
              <a href="tel:8449770050">(844) 977-0050</a>.
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="breadcrumb-inner">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/our-services/">Our Services</Link><span>›</span>
            Palliative Home Care
          </div>
        </nav>

        {/* Body + Sidebar */}
        <div className="service-body">
          <article className="service-article">

            <h2>What Arcadia's palliative home care involves</h2>
            <p>
              Palliative home care is not a standard service delivered in a standard
              way. The needs of someone in the early stages of a serious illness are
              different from those of someone in the final weeks of life,
              and the people providing care need both clinical competence and the
              human capacity to be present without agenda in difficult circumstances.
            </p>
            <p>
              Arcadia's palliative support is built around what the family and care
              team identify as the greatest gaps in the current plan. Here is what
              it typically includes:
            </p>

            <div className="provides-grid">
              {whatWeProvide.map((item, i) => (
                <div key={i} className="provides-card">
                  <div className="provides-card-title">{item.title}</div>
                  <div className="provides-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            <h2>How Arcadia works with your existing palliative team</h2>
            <p>
              Private home care in a palliative situation only works well when it
              is properly connected to the clinical team. Arcadia's caregivers follow
              the comfort plan established by the palliative nurse and physician,
              communicate changes in the person's condition promptly, and document
              what they observe between clinical visits.
            </p>
            <p>
              Families should not have to carry most of the communication burden between Arcadia and
              the palliative care team. We coordinate directly with the team —
              and we make sure everyone involved has the information they need
              to provide consistent care. Families who need overnight coverage or consistent respite can read more about our{' '}
              <a href="/our-services/overnight-24-hour-care/" style={{ color: '#C8302A', fontWeight: 600, textDecoration: 'underline' }}>overnight and 24-hour care</a>
              {' '}and{' '}
              <a href="/our-services/respite-care/" style={{ color: '#C8302A', fontWeight: 600, textDecoration: 'underline' }}>respite care</a>
              {' '}services.
            </p>

            {/* Quiet mid CTA */}
            <div className="mid-cta">
              <h3>We are here when you are ready to talk</h3>
              <p>
                No forms to fill before you call. Just a conversation about
                what is happening and what additional support might look like —
                at whatever pace feels right.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">
                Talk to Our Team
              </Link>
            </div>

            <h2>What families should look for in a palliative home care provider</h2>
            <p>
              Not every home care provider is suited to palliative care. Here is
              what families should expect — and ask about — when evaluating
              any provider for this kind of support:
            </p>

            <div className="diff-grid">
              {[
                {
                  title: 'Caregivers with genuine experience in this setting',
                  body: 'End-of-life care requires a specific temperament — the ability to be present with grief, to work quietly and without agenda, and to provide comfort without false reassurance. Ask any provider directly whether the caregivers they assign to palliative situations have experience in this setting. Any provider worth working with will answer that question honestly.',
                },
                {
                  title: 'Clear coordination with the palliative care team',
                  body: 'The private caregiver needs to know the comfort plan, understand what symptoms to watch for, and know how to reach the palliative nurse or physician quickly when something changes. Ask how the provider communicates with the clinical team — and what they do when something shifts at 2am.',
                },
                {
                  title: 'Flexibility as needs change',
                  body: 'The support that is right today may not be right in three weeks. A good provider adjusts hours, caregivers, and the nature of support as the illness progresses — without requiring families to renegotiate everything from scratch. Ask how the provider handles care plan changes and whether they initiate those conversations or wait to be asked.',
                },
                {
                  title: 'Genuine support for family caregivers, not just the person who is ill',
                  body: 'Family caregivers in palliative situations carry an enormous weight. Ask what the provider does to ensure family members can actually rest — not just that a caregiver is present in theory, but that the family member can genuinely step away when that caregiver is there.',
                },
              ].map((item, i) => (
                <div key={i} className="diff-card">
                  <div className="diff-card-title">{item.title}</div>
                  <div className="diff-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            <h2>Understanding publicly funded palliative care in Ontario</h2>
            <p>
              Ontario Health atHome coordinates publicly funded palliative care in
              the community — nursing visits, some PSW hours, and access to a
              palliative care team. For families who are not yet connected to this
              system, a referral can be made through the family physician or
              specialist.
            </p>
            <p>
              The publicly funded hours rarely match what a family needs around the
              clock — particularly overnight, on weekends, and as the illness
              progresses toward its final stage. Private home care fills those gaps.
              Arcadia works alongside Ontario Health atHome, not as a replacement
              for it, across{' '}
              <Link href="/locations/toronto/">Toronto</Link>,{' '}
              <Link href="/locations/toronto/north-york-home-care/">North York</Link>,{' '}
              <Link href="/locations/toronto/scarborough-home-care/">Scarborough</Link>,{' '}
              <Link href="/locations/toronto/etobicoke-home-care/">Etobicoke</Link>,{' '}
              <Link href="/locations/york-region/markham-home-care/">Markham</Link>,{' '}
              <Link href="/locations/york-region/richmond-hill-home-care/">Richmond Hill</Link>, and{' '}
              <Link href="/locations/peel-region/mississauga-home-care/">Mississauga</Link>.
            </p>

            {/* FAQ */}
            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions families ask about palliative home care</h2>
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <div className="faq-q">{faq.q}</div>
                  <div className="faq-a">{faq.a}</div>
                </div>
              ))}
            </div>

          </article>

          {/* Sidebar — quieter treatment */}
          <aside className="service-sidebar">
            <div className="sidebar-cta">
              <h3>We are here when you need us</h3>
              <p>
                No forms before you call. Just a conversation,
                at whatever pace feels right.
              </p>
              <a href="tel:8449770050" className="sidebar-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-navy-sm">Talk to Our Team</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">For Professionals</div>
              <Link href="/referral-form/" className="sidebar-link">Submit a Referral</Link>
              <Link href="/contact/" className="sidebar-link">Contact Our Team</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Conditions</div>
              <Link href="/conditions/palliative-serious-illness/" className="sidebar-link">Palliative & Serious Illness</Link>
              <Link href="/conditions/caregiver-burnout-support/" className="sidebar-link">Caregiver Burnout Support</Link>
              <Link href="/conditions/dementia-care-at-home/" className="sidebar-link">Dementia Care at Home</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Services</div>
              <Link href="/our-services/overnight-24-hour-care/" className="sidebar-link">Overnight & 24-Hour Care</Link>
              <Link href="/our-services/respite-care/" className="sidebar-link">Respite Care</Link>
              <Link href="/our-services/companion-care/" className="sidebar-link">Companion Care</Link>
              <Link href="/our-services/personal-support-daily-living/" className="sidebar-link">Personal Support & Daily Living</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Serving Your Area</div>
              <Link href="/locations/toronto/" className="sidebar-link">Toronto</Link>
              <Link href="/locations/toronto/north-york-home-care/" className="sidebar-link">North York</Link>
              <Link href="/locations/toronto/scarborough-home-care/" className="sidebar-link">Scarborough</Link>
              <Link href="/locations/toronto/etobicoke-home-care/" className="sidebar-link">Etobicoke</Link>
              <Link href="/locations/york-region/markham-home-care/" className="sidebar-link">Markham</Link>
              <Link href="/locations/peel-region/mississauga-home-care/" className="sidebar-link">Mississauga</Link>
            </div>
          </aside>
        </div>

        {/* Professional section */}
        <section className="pro-section">
          <div className="pro-inner">
            <div>
              <p className="pro-eyebrow">For Health Professionals</p>
              <h2>Referring a Patient for Palliative Home Support</h2>
              <p>
                Palliative care teams, hospital social workers, and discharge planners
                can refer patients directly to Arcadia for supplementary home care
                support. We respond promptly, communicate clearly with the sending
                team, and adapt our support as the clinical situation changes.
              </p>
              <div className="pro-actions">
                <Link href="/referral-form/" className="btn-white">Submit a Referral</Link>
                <a href="tel:8449770050" className="btn-outline-white">(844) 977-0050</a>
              </div>
            </div>
            <div className="pro-details">
              {[
                { title: 'What we need from a referral', body: 'Patient name and address, diagnosis and prognosis if available, current palliative care team contacts, specific support needs and gaps, and any clinical or comfort-plan considerations the assigned caregiver should know.' },
                { title: 'What you can expect from us', body: 'Prompt response from our team. A caregiver selected and briefed specifically for palliative care. Clear communication with the sending team about the plan in place and any changes that occur.' },
                { title: 'What we do not do', body: 'We do not provide nursing care. Our role is to fill the practical and presence gaps in the existing palliative care plan — not to replace the clinical team.' },
              ].map((item, i) => (
                <div key={i} className="pro-detail">
                  <div className="pro-detail-title">{item.title}</div>
                  <div className="pro-detail-body">{item.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="related-section">
          <div className="related-inner">
            <p className="related-eyebrow">You May Also Find Helpful</p>
            <h2>Related support and resources</h2>
            <div className="related-grid">
              {[
                { type: 'Condition', title: 'Palliative & Serious Illness', href: '/conditions/palliative-serious-illness/' },
                { type: 'Service', title: 'Overnight & 24-Hour Care', href: '/our-services/overnight-24-hour-care/' },
                { type: 'Condition', title: 'Caregiver Burnout Support', href: '/conditions/caregiver-burnout-support/' },
                { type: 'Resource', title: 'Family Caregiver Support Guides', href: '/resources/family-caregiving-guides/' },
              ].map((item, i) => (
                <Link key={i} href={item.href} className="related-card">
                  <div className="related-card-type">{item.type}</div>
                  <div className="related-card-title">{item.title}</div>
                  <span className="related-card-arrow">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA — quietest on the site */}
        <section className="bottom-cta">
          <p className="service-eyebrow" style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>Get Support</p>
          <h2>We can help make sure the support at home matches what this time requires.</h2>
          <p>
            A conversation costs nothing and carries no obligation.
            We will listen to what is happening and help you understand
            what additional support could look like.
          </p>
          <a href="tel:8449770050" className="bottom-cta-phone">(844) 977-0050</a>
          <div className="cta-actions">
            <Link href="/contact/" className="btn-white-lg">Talk to Our Team</Link>
            <Link href="/referral-form/" className="btn-outline-white-lg">Submit a Professional Referral</Link>
          </div>
        </section>

      </main>
    </>
  )
}
