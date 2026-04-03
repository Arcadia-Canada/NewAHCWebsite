// app/our-services/hospital-discharge-support/page.tsx
// Consideration-stage service page
// Target keyword: "hospital discharge home care toronto" / "post discharge home care GTA"
// Persona A: family mid-discharge, time-pressured, needs care arranged quickly
// Persona B: discharge planner, social worker, or case manager placing a patient
// Tone: practical, fast-moving, confidence-building — this reader needs clarity not warmth
// Schema: Service + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hospital Discharge Support | Home Care After Hospital | Toronto & GTA | Arcadia Home Care',
  description: 'Home care support arranged quickly after hospital discharge in Toronto and the GTA. Arcadia helps families and discharge teams put the right care in place within 24–48 hours — helping reduce the risk of complications and avoidable returns to hospital and making the transition home safe.',
  alternates: { canonical: 'https://www.arcadiahomecare.ca/our-services/hospital-discharge-support/' },
}

const faqs = [
  {
    q: 'How quickly can Arcadia arrange care after a hospital discharge?',
    a: 'In most cases, within 24 to 48 hours of a first conversation. We understand that hospital discharges move quickly and that families often have very little time to plan. If the situation is urgent, call us directly — we will do our best to move at the pace the discharge requires.',
  },
  {
    q: 'What information does Arcadia need to arrange post-discharge care?',
    a: 'The basics: the person\'s name and address, the reason for hospitalization and any relevant diagnoses, what support they will need at home, their expected discharge date, and a contact for the family or discharge team. If there are specific clinical considerations — wound care requirements, mobility restrictions, medication changes — we need to know those too. The more context we have, the better the care plan we can build.',
  },
  {
    q: 'Will Ontario Health atHome provide support after discharge? Do we still need private care?',
    a: 'Ontario Health atHome coordinates publicly funded home care following discharge, but the hours allocated are often limited and may not begin immediately. Many families use private home care to fill the gap between discharge and the start of publicly funded services, or to supplement the hours that funding provides. Arcadia works alongside Ontario Health atHome — not instead of it — and can help families understand what they are entitled to.',
  },
  {
    q: 'Can Arcadia support someone coming home with complex needs — dementia, ABI, or palliative?',
    a: 'Yes. Post-discharge support for clients with complex underlying conditions requires more than standard home care. Arcadia specializes in dementia, acquired brain injury, and palliative care, and our discharge support for these clients is built around the specific clinical requirements of each condition. We do not treat a dementia-complicated discharge the same as a routine post-surgical recovery.',
  },
  {
    q: 'What is the risk of not having support in place at discharge?',
    a: 'The first days and weeks after hospital discharge are often the period when risk is highest in a person\'s recovery. Gaps in supervision, missed medications, falls, inadequate nutrition, and undetected infections are among the most common contributors to readmission. Having the right support in place from day one — even for a limited number of hours — can help reduce those risks.',
  },
  {
    q: 'How does Arcadia coordinate with the hospital discharge team?',
    a: 'Discharge planners and social workers can refer directly to Arcadia using our professional referral form or by phone. We respond promptly, gather the clinical information we need, and communicate back to the discharge team about the plan in place. We also coordinate with Ontario Health atHome and any other providers involved in the person\'s care.',
  },
]

const whatWeProvide = [
  {
    title: 'Rapid care arrangement',
    body: 'Care in place within 24–48 hours of contact in most cases. We move at the pace the discharge requires.',
  },
  {
    title: 'Personal care and hygiene',
    body: 'Assistance with bathing, dressing, and grooming — the daily activities most often unsafe or exhausting in the first days and weeks after hospital.',
  },
  {
    title: 'Medication management',
    body: 'Consistent prompting at the right times, monitoring for side effects, and flagging concerns to family or the medical team before they become problems.',
  },
  {
    title: 'Mobility and fall prevention',
    body: 'Safe movement support, transfer assistance, and fall risk reduction — particularly important in the first week when fatigue and deconditioning are highest.',
  },
  {
    title: 'Wound care monitoring',
    body: 'Observing surgical sites or wounds for signs of infection and communicating changes promptly to family or the care team.',
  },
  {
    title: 'Meal preparation and nutrition',
    body: 'Preparing appropriate meals and monitoring intake — recovery depends on nutrition, and many patients leave hospital with reduced appetite or specific dietary requirements.',
  },
  {
    title: 'Transportation to follow-up appointments',
    body: 'Accompanying the person to follow-up appointments — often the first practical challenge after discharge and one of the most important for continuity of care.',
  },
  {
    title: 'Overnight and 24-hour coverage',
    body: 'When continuous supervision is needed — in the first nights home, or for clients with complex conditions — Arcadia can provide overnight and around-the-clock care.',
  },
]

export default function HospitalDischargeSupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': 'Hospital Discharge Support',
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
              'description': 'Rapid home care arrangement following hospital discharge in Toronto and the GTA. Arcadia helps families and discharge teams put safe, appropriate care in place within 24–48 hours.',
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
                { '@type': 'ListItem', 'position': 3, 'name': 'Hospital Discharge Support', 'item': 'https://www.arcadiahomecare.ca/our-services/hospital-discharge-support/' },
              ],
            },
          ]),
        }}
      />

      <style>{`
        .service-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }

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

        /* Urgent banner */
        .urgent-banner { background: rgba(200,48,42,0.08); border-bottom: 1px solid rgba(200,48,42,0.2); padding: 14px 24px; }
        .urgent-banner-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
        .urgent-dot { width: 8px; height: 8px; border-radius: 50%; background: #C8302A; flex-shrink: 0; }
        .urgent-text { font-size: 14px; color: #1C2B3A; line-height: 1.5; }
        .urgent-text strong { font-weight: 700; }
        .urgent-text a { color: #C8302A; font-weight: 700; text-decoration: none; }
        .urgent-text a:hover { text-decoration: underline; }

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
        .provides-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 12px; padding: 20px; transition: border-color 0.2s, box-shadow 0.2s; }
        .provides-card:hover { border-color: #C8302A; box-shadow: 0 6px 20px rgba(28,43,58,0.08); }
        .provides-card-title { font-size: 14px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
        .provides-card-title::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #C8302A; flex-shrink: 0; }
        .provides-card-body { font-size: 0.875rem; color: #6B7280; line-height: 1.7; }

        /* Complex conditions callout */
        .complex-callout { background: #F7F3EE; border: 1px solid #E5E0D8; border-left: 4px solid #1C2B3A; border-radius: 0 12px 12px 0; padding: 24px 28px; margin: 32px 0; }
        .complex-callout-title { font-size: 14px; font-weight: 700; color: #1C2B3A; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.06em; }
        .complex-links { display: flex; flex-wrap: wrap; gap: 8px; }
        .complex-link { background: #fff; border: 1px solid #E5E0D8; border-radius: 100px; padding: 6px 14px; font-size: 13px; font-weight: 600; color: #1C2B3A; text-decoration: none; transition: all 0.15s; }
        .complex-link:hover { border-color: #C8302A; color: #C8302A; }

        .process-steps { display: flex; flex-direction: column; gap: 0; margin: 24px 0 32px; }
        .process-step { display: flex; gap: 20px; padding: 24px 0; border-bottom: 1px solid #E5E0D8; }
        .process-step:last-child { border-bottom: none; }
        .process-num { width: 40px; height: 40px; border-radius: 50%; background: #1C2B3A; color: #fff; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .process-content { flex: 1; }
        .process-title { font-size: 15px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; }
        .process-body { font-size: 0.9rem; color: #6B7280; line-height: 1.7; }

        .mid-cta { background: #1C2B3A; border-radius: 14px; padding: 32px; margin: 40px 0; }
        .mid-cta h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.5rem; font-weight: 600; color: #fff; margin-bottom: 8px; }
        .mid-cta p { font-size: 0.9rem; color: rgba(255,255,255,0.65); margin-bottom: 20px; line-height: 1.7; }
        .mid-cta-phone { font-size: 1.5rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 12px; }

        .faq-section { margin-top: 48px; }
        .faq-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 12px; }
        .faq-section h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.6rem, 2.5vw, 2.2rem); font-weight: 600; color: #1C2B3A; margin-bottom: 28px; }
        .faq-item { border-bottom: 1px solid #E5E0D8; padding: 20px 0; }
        .faq-q { font-size: 1rem; font-weight: 700; color: #1C2B3A; margin-bottom: 10px; line-height: 1.5; }
        .faq-a { font-size: 0.9375rem; color: #4B5563; line-height: 1.8; }

        .service-sidebar { position: sticky; top: 100px; }
        .sidebar-cta { background: #1C2B3A; border-radius: 14px; padding: 28px; text-align: center; margin-bottom: 20px; }
        .sidebar-cta h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.3rem; font-weight: 600; color: #fff; margin-bottom: 8px; }
        .sidebar-cta p { font-size: 0.875rem; color: rgba(255,255,255,0.6); margin-bottom: 16px; line-height: 1.65; }
        .sidebar-phone { font-size: 1.2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 12px; }
        .btn-red-sm { background: #C8302A; color: #fff; padding: 11px 20px; border-radius: 8px; font-size: 13px; font-weight: 700; text-decoration: none; display: block; text-align: center; transition: background 0.2s; }
        .btn-red-sm:hover { background: #a82520; }
        .sidebar-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 14px; padding: 28px; margin-bottom: 20px; }
        .sidebar-card-title { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #C8302A; margin-bottom: 16px; }
        .sidebar-link { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: #1C2B3A; text-decoration: none; padding: 10px 0; border-bottom: 1px solid #F0EBE3; transition: color 0.15s; }
        .sidebar-link:last-child { border-bottom: none; }
        .sidebar-link:hover { color: #C8302A; }
        .sidebar-link::before { content: '→'; color: #C8302A; font-size: 13px; }

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
        .related-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 10px; }
        .related-inner h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 600; color: #1C2B3A; margin-bottom: 28px; }
        .related-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        @media (max-width: 768px) { .related-grid { grid-template-columns: 1fr; } }
        .related-card { background: #fff; border: 1px solid #E5E0D8; border-radius: 12px; padding: 22px; text-decoration: none; transition: border-color 0.2s, box-shadow 0.2s; }
        .related-card:hover { border-color: #C8302A; box-shadow: 0 6px 20px rgba(28,43,58,0.08); }
        .related-card-type { font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #C8302A; margin-bottom: 8px; }
        .related-card-title { font-size: 15px; font-weight: 700; color: #1C2B3A; line-height: 1.4; }
        .related-card-arrow { font-size: 13px; color: #C8302A; margin-top: 10px; display: block; }

        .bottom-cta { background: #1C2B3A; padding: 80px 24px; text-align: center; }
        .bottom-cta h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; color: #fff; max-width: 680px; margin: 0 auto 14px; line-height: 1.2; }
        .bottom-cta p { color: rgba(255,255,255,0.65); font-size: 1rem; max-width: 500px; margin: 0 auto 32px; line-height: 1.8; }
        .bottom-cta-phone { font-size: 2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 20px; font-family: 'Cormorant Garamond', Georgia, serif; }
        .cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
      `}</style>

      <main className="service-page">

        {/* Hero */}
        <section className="service-hero">
          <div className="service-hero-inner">
            <div>
              <p className="service-eyebrow">Our Services · Toronto & GTA</p>
              <h1>Hospital Discharge Support</h1>
              <p>
                Hospitals discharge patients when they are medically stable —
                not necessarily when they are ready to manage at home alone.
                Arcadia helps families and discharge teams put the right care
                in place quickly, so the transition home is safe from day one.
              </p>
              <div className="hero-actions">
                <a href="tel:8449770050" className="btn-red">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 2.5C2 8.299 5.701 12 11.5 12l.5-2.5-2.5-.5-.5 1c-2-1-3-2-4-4l1-.5L5.5 3 3 2.5z" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round"/>
                  </svg>
                  Call (844) 977-0050
                </a>
                <Link href="/contact/" className="btn-outline">Book a Free Consultation</Link>
              </div>
            </div>
            <div className="hero-trust">
              {[
                { icon: '⚡', title: 'Care arranged within 24–48 hours', body: 'We move at the pace the discharge requires. Call us directly for urgent situations.' },
                { icon: '🏥', title: 'Experienced with complex discharge cases', body: 'Including dementia, ABI, stroke, palliative, and post-surgical clients.' },
                { icon: '🔗', title: 'Coordinates with Ontario Health atHome', body: 'We work alongside publicly funded care — not instead of it.' },
                { icon: '📋', title: 'Direct referral pathway for professionals', body: 'Discharge planners and social workers can refer directly. We respond promptly.' },
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

        {/* Urgent banner */}
        <div className="urgent-banner">
          <div className="urgent-banner-inner">
            <div className="urgent-dot" />
            <p className="urgent-text">
              <strong>Discharge happening soon?</strong> Call us now at{' '}
              <a href="tel:8449770050">(844) 977-0050</a> or{' '}
              <Link href="/referral-form/" style={{ color: '#C8302A', fontWeight: 700, textDecoration: 'none' }}>
                submit a referral
              </Link>{' '}
              — we can typically have care in place within 24–48 hours.
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="breadcrumb-inner">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/our-services/">Our Services</Link><span>›</span>
            Hospital Discharge Support
          </div>
        </nav>

        {/* Body + Sidebar */}
        <div className="service-body">
          <article className="service-article">

            <h2>What post-discharge home care involves</h2>
            <p>
              The first days and weeks at home after a hospital stay are the period
              when the right support makes the most difference — and when the absence
              of it carries the most risk. A well-structured discharge care plan
              addresses both the practical and clinical needs of the transition,
              reducing the likelihood of a return to hospital and giving families
              confidence that the person is safe at home.
            </p>
            <p>
              Here is what Arcadia's post-discharge support typically includes:
            </p>

            <div className="provides-grid">
              {whatWeProvide.map((item, i) => (
                <div key={i} className="provides-card">
                  <div className="provides-card-title">{item.title}</div>
                  <div className="provides-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            <h2>Complex discharge situations — when underlying conditions are involved</h2>
            <p>
              Post-discharge care for someone with an underlying condition requires
              more than standard home care. A patient being discharged with dementia,
              acquired brain injury, or a palliative diagnosis has clinical needs that
              go significantly beyond what a general PSW or companion can manage.
              Arcadia's specialization in these conditions means that complex discharge
              cases are handled with the clinical depth they require.
            </p>

            <div className="complex-callout">
              <div className="complex-callout-title">We specialize in complex discharge cases involving</div>
              <div className="complex-links">
                <Link href="/conditions/dementia-care-at-home/" className="complex-link">Dementia</Link>
                <Link href="/conditions/dementia-care-at-home/" className="complex-link">Dementia & Alzheimer's Care</Link>
                <Link href="/conditions/acquired-brain-injury-support/" className="complex-link">Acquired Brain Injury</Link>
                <Link href="/conditions/stroke-recovery/" className="complex-link">Stroke</Link>
                <Link href="/conditions/palliative-serious-illness/" className="complex-link">Palliative & Serious Illness</Link>
                <Link href="/conditions/frailty-fall-prevention/" className="complex-link">Frailty & Fall Risk</Link>
              </div>
            </div>

            {/* Mid CTA */}
            <div className="mid-cta">
              <h3>Discharge happening in the next 24–48 hours?</h3>
              <p>
                Call us now. We will ask the right questions, move quickly,
                and have a care plan in place before your loved one arrives home.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">
                Book a Free Consultation
              </Link>
            </div>

            <h2>How Arcadia arranges post-discharge care</h2>

            <div className="process-steps">
              {[
                {
                  num: '1',
                  title: 'First call — gather the essentials',
                  body: 'We need the basics: who is being discharged, why they were admitted, what support they will need at home, and when they are leaving. The more clinical detail you can share, the better the plan we can build. If a discharge planner or social worker is involved, we can coordinate directly with them.',
                },
                {
                  num: '2',
                  title: 'Care plan built around the discharge situation',
                  body: 'We build a care plan based on the specific needs of the discharge — not a template. For straightforward post-surgical recovery, that may mean daily personal care and medication reminders. For a complex discharge involving dementia or ABI, it means a clinically informed plan that accounts for the full picture.',
                },
                {
                  num: '3',
                  title: 'Caregiver matched and briefed before arrival',
                  body: 'We select a caregiver appropriate to the situation, brief them thoroughly on the person\'s needs and history, and ensure they are prepared for what they will encounter at home — not discovering it for the first time on arrival.',
                },
                {
                  num: '4',
                  title: 'Care begins — with close monitoring in the first week',
                  body: 'The first week is the most vulnerable period. We check in with both the family and the caregiver frequently and respond quickly if something is not right. Our goal is that no gap in care goes unaddressed for longer than necessary.',
                },
                {
                  num: '5',
                  title: 'Ongoing adjustment as recovery progresses',
                  body: 'Post-discharge care needs change over time. As the person recovers, the level of support required typically decreases. We adjust the plan accordingly — and we communicate honestly when things are not progressing as expected.',
                },
              ].map((step, i) => (
                <div key={i} className="process-step">
                  <div className="process-num">{step.num}</div>
                  <div className="process-content">
                    <div className="process-title">{step.title}</div>
                    <div className="process-body">{step.body}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2>Understanding publicly funded vs private post-discharge care</h2>
            <p>
              Ontario Health atHome coordinates publicly funded home care following
              hospital discharge — including nursing, PSW hours, and therapy services.
              For most families, this is a meaningful foundation. But the hours
              allocated are often limited, and the first funded visit may not happen
              immediately after discharge.
            </p>
            <p>
              Private home care fills those gaps — in the first days when publicly
              funded care has not yet started, on days and at hours when funded
              support is not scheduled, and when the overall level of support
              provided does not match what safe recovery actually requires.
            </p>
            <p>
              Arcadia works alongside Ontario Health atHome across{' '}
              <Link href="/locations/toronto/">Toronto</Link>,{' '}
              <Link href="/locations/toronto/north-york-home-care/">North York</Link>,{' '}
              <Link href="/locations/toronto/scarborough-home-care/">Scarborough</Link>,{' '}
              <Link href="/locations/toronto/etobicoke-home-care/">Etobicoke</Link>,{' '}
              <Link href="/locations/york-region/markham-home-care/">Markham</Link>,{' '}
              <Link href="/locations/york-region/richmond-hill-home-care/">Richmond Hill</Link>, and{' '}
              <Link href="/locations/peel-region/mississauga-home-care/">Mississauga</Link>.
              Our team can help families understand what public funding may be available and what private support may be needed to fill the gap.
            </p>

            {/* FAQ */}
            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions families and professionals ask about discharge support</h2>
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <div className="faq-q">{faq.q}</div>
                  <div className="faq-a">{faq.a}</div>
                </div>
              ))}
            </div>

          </article>

          {/* Sidebar */}
          <aside className="service-sidebar">
            <div className="sidebar-cta">
              <h3>Need care arranged quickly?</h3>
              <p>We can typically be in place within 24–48 hours of a first call.</p>
              <a href="tel:8449770050" className="sidebar-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red-sm">Book a Free Consultation</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">For Professionals</div>
              <Link href="/referral-form/" className="sidebar-link">Submit a Referral</Link>
              <Link href="/contact/" className="sidebar-link">Contact Our Team</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Conditions</div>
              <Link href="/conditions/post-hospital-recovery/" className="sidebar-link">Post-Hospital Recovery</Link>
              <Link href="/conditions/stroke-recovery/" className="sidebar-link">Stroke Recovery</Link>
              <Link href="/conditions/dementia-care-at-home/" className="sidebar-link">Dementia Care at Home</Link>
              <Link href="/conditions/frailty-fall-prevention/" className="sidebar-link">Frailty & Fall Prevention</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Services</div>
              <Link href="/our-services/rehabilitation-support/" className="sidebar-link">Rehabilitation Support</Link>
              <Link href="/our-services/personal-support-daily-living/" className="sidebar-link">Personal Support & Daily Living</Link>
              <Link href="/our-services/overnight-24-hour-care/" className="sidebar-link">Overnight & 24-Hour Care</Link>
              <Link href="/our-services/respite-care/" className="sidebar-link">Respite Care</Link>
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
              <h2>Referring a Patient for Post-Discharge Home Care</h2>
              <p>
                Discharge planners, social workers, and clinical teams can refer
                patients directly to Arcadia for post-discharge home care. We respond
                promptly, move quickly when timing is tight, and communicate clearly
                with the sending team about the plan in place.
              </p>
              <p>
                We are familiar with the discharge processes at major GTA hospital
                networks and work regularly with Ontario Health atHome coordinators.
              </p>
              <div className="pro-actions">
                <Link href="/referral-form/" className="btn-white">Submit a Referral</Link>
                <a href="tel:8449770050" className="btn-outline-white">(844) 977-0050</a>
              </div>
            </div>
            <div className="pro-details">
              {[
                { title: 'What we need from a referral', body: 'Patient name and address, reason for admission, relevant diagnoses, expected discharge date, support needs at home, family contact, and any clinical or safety considerations.' },
                { title: 'What you can expect from us', body: 'Response within one business day — sooner for urgent discharges. A care plan built around the specific discharge situation. Clear communication back to the sending team.' },
                { title: 'Complex discharge cases', body: 'We are experienced with patients discharged with dementia, ABI, stroke, palliative needs, and significant frailty. These cases receive the same clinical depth as our specialized condition care.' },
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
            <h2>Related conditions and services</h2>
            <div className="related-grid">
              {[
                { type: 'Condition', title: 'Post-Hospital Recovery', href: '/conditions/post-hospital-recovery/' },
                { type: 'Service', title: 'Rehabilitation Support', href: '/our-services/rehabilitation-support/' },
                { type: 'Service', title: 'Overnight & 24-Hour Care', href: '/our-services/overnight-24-hour-care/' },
                { type: 'Resource', title: 'Navigating Home Care Guides', href: '/resources/' },
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

        {/* Bottom CTA */}
        <section className="bottom-cta">
          <p className="service-eyebrow" style={{ textAlign: 'center', color: '#C8302A' }}>Get Started</p>
          <h2>The first days home after hospital are often the most vulnerable. Let's make sure they go well.</h2>
          <p>
            Whether discharge is tomorrow or next week, a conversation now
            gives you more options and more confidence in what comes next.
          </p>
          <a href="tel:8449770050" className="bottom-cta-phone">(844) 977-0050</a>
          <div className="cta-actions">
            <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            <Link href="/referral-form/" className="btn-outline">Submit a Professional Referral</Link>
          </div>
        </section>

      </main>
    </>
  )
}
