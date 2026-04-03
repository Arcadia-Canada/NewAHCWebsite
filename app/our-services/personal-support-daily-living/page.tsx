// app/our-services/personal-support-daily-living/page.tsx
// Consideration-stage service page
// Target keyword: "personal support worker toronto" / "PSW home care GTA"
// Persona: family who understands they need help with daily care — bathing, meals,
// personal hygiene — but has not yet defined the scope or found the right provider
// This is the broadest service page — the foundation underlying most of what Arcadia does
// Tone: warm and practical — this reader is often emotionally tired and just needs clarity
// Schema: Service + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Personal Support & Daily Living | PSW Care | Arcadia',
  description: 'Personal support and daily living assistance for older adults and individuals with complex needs in Toronto and the GTA. Arcadia\'s trained PSWs provide compassionate, dignified care — matched carefully to each client\'s routines, preferences, and personality.',
  alternates: { canonical: 'https://www.arcadiahomecare.ca/our-services/personal-support-daily-living/' },
}

const faqs = [
  {
    q: 'What does a Personal Support Worker actually do?',
    a: 'A PSW assists with the personal care and daily living tasks that a person can no longer manage safely or comfortably on their own — bathing, dressing, grooming, toileting, meal preparation, medication reminders, light housekeeping, and companionship. The scope of support depends on the individual\'s needs, and a good PSW adapts to the person\'s routines and preferences rather than imposing their own.',
  },
  {
    q: 'How does Arcadia match PSWs to clients?',
    a: 'Matching involves more than clinical compatibility. We consider personality, language, cultural background, and the specific nature of the person\'s care needs. For someone with dementia or a complex condition, the match involves additional clinical considerations. We take time to get it right, and we are transparent when a match is not working.',
  },
  {
    q: 'What happens if our PSW is unavailable or needs to be replaced?',
    a: 'We work hard to maintain caregiver consistency and minimize disruptions. When a change is unavoidable, we brief the replacement caregiver thoroughly on the client\'s routines, preferences, and any clinical considerations before they arrive — and we communicate with the family throughout. We do not send a stranger to the door without preparation.',
  },
  {
    q: 'Can Arcadia provide personal support for someone with dementia or a brain injury?',
    a: 'Yes — and this is one of our core areas of specialization. PSW support for someone with dementia or acquired brain injury requires specific training, patience, and a different approach to communication and routine than standard personal care. Arcadia\'s caregivers supporting these clients receive additional training and supervision appropriate to the complexity of the case.',
  },
  {
    q: 'How many hours of personal support does a typical client receive?',
    a: 'It varies widely. Some clients need a few hours a week — a morning routine three times a week, for example — while others need daily support or around-the-clock care. The right level depends on the person\'s needs, what family members can provide, and what publicly funded hours are available. A care assessment helps establish what is actually needed rather than defaulting to a generic package.',
  },
  {
    q: 'Is personal support covered by OHIP or Ontario Health atHome?',
    a: 'OHIP does not cover private home care directly. Ontario Health atHome provides publicly funded PSW hours for eligible clients, but the allocation is often limited and does not always match what the situation requires. Some extended health benefit plans and veterans\' benefits cover home care. Arcadia can help families understand what funding may be available before committing to private care.',
  },
]

const whatWeProvide = [
  {
    title: 'Bathing and personal hygiene',
    body: 'Assistance with bathing, showering, oral care, and personal grooming — provided with sensitivity to the person\'s dignity, privacy, and established routines.',
  },
  {
    title: 'Dressing and grooming',
    body: 'Help selecting and putting on clothing, managing fastenings, and maintaining the personal presentation that matters to the individual.',
  },
  {
    title: 'Toileting and continence support',
    body: 'Discreet, respectful assistance with toileting and continence management — one of the most sensitive aspects of personal care, handled with consistent dignity.',
  },
  {
    title: 'Meal preparation and eating',
    body: 'Preparing nutritious meals appropriate to the person\'s preferences and any dietary restrictions, and sitting with them during mealtimes.',
  },
  {
    title: 'Medication reminders',
    body: 'Prompting medications at the right times and monitoring for missed doses or changes — communicated to family or the care team when relevant.',
  },
  {
    title: 'Mobility and transfers',
    body: 'Assistance with moving around the home, getting in and out of bed or chairs, and reducing fall risk during daily activities.',
  },
  {
    title: 'Light housekeeping',
    body: 'Maintaining a clean, safe, and organized living environment — vacuuming, laundry, dishes, and the everyday tasks that keep a home functional.',
  },
  {
    title: 'Companionship and engagement',
    body: 'Conversation, activities, music, walks, and consistent human presence — particularly important for individuals who live alone or have limited social contact.',
  },
]

export default function PersonalSupportDailyLivingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': 'Personal Support & Daily Living',
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
              'description': 'Personal support and daily living assistance for older adults and individuals with complex needs in Toronto and the GTA.',
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
                { '@type': 'ListItem', 'position': 3, 'name': 'Personal Support & Daily Living', 'item': 'https://www.arcadiahomecare.ca/our-services/personal-support-daily-living/' },
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

        /* Dignity callout */
        .dignity-callout { background: #F7F3EE; border: 1px solid #E5E0D8; border-left: 4px solid #C8302A; border-radius: 0 12px 12px 0; padding: 24px 28px; margin: 32px 0; }
        .dignity-callout p { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.15rem; font-style: italic; color: #1C2B3A; line-height: 1.75; margin: 0; }

        /* Condition-specific cards */
        .condition-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0 32px; }
        @media (max-width: 600px) { .condition-cards { grid-template-columns: 1fr; } }
        .condition-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 12px; padding: 20px; text-decoration: none; transition: border-color 0.2s, box-shadow 0.2s; }
        .condition-card:hover { border-color: #C8302A; box-shadow: 0 6px 20px rgba(28,43,58,0.08); }
        .condition-card-label { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #C8302A; margin-bottom: 6px; }
        .condition-card-title { font-size: 15px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; }
        .condition-card-body { font-size: 0.875rem; color: #6B7280; line-height: 1.6; }

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
              <h1>Personal Support & Daily Living</h1>
              <p>
                The most personal kind of care — bathing, dressing, meals, and the
                daily routines that keep someone comfortable, safe, and themselves
                at home. Arcadia's PSWs are carefully matched to each client and
                trained to provide this care with the consistency and dignity it requires.
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
                { icon: '🤝', title: 'Careful caregiver matching', body: 'We match on personality, language, cultural background, and the specific nature of each person\'s care needs — not just availability.' },
                { icon: '🩺', title: 'Clinically supervised care', body: 'Personal support plans can involve added clinical review for clients with complex conditions.' },
                { icon: '🔄', title: 'Consistency as a priority', body: 'We work hard to maintain the same caregiver — because routine and familiarity matter for the people we care for.' },
                { icon: '📞', title: 'Available 7 days a week', body: 'Morning, afternoon, evening, and overnight support available every day.' },
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

        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="breadcrumb-inner">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/our-services/">Our Services</Link><span>›</span>
            Personal Support & Daily Living
          </div>
        </nav>

        {/* Body + Sidebar */}
        <div className="service-body">
          <article className="service-article">

            <h2>What personal support and daily living assistance involves</h2>
            <p>
              Personal support is the most intimate kind of care — and the kind
              that requires the most trust. Helping someone bathe, dress, and manage
              their personal hygiene is not a task that can be done well by just
              anyone. It requires patience, sensitivity, and a genuine respect for
              the person's dignity and established routines.
            </p>
            <p>
              Arcadia's approach to personal support starts with understanding the
              individual — how they have always done things, what matters to them,
              what they find difficult to accept help with, and what kind of person
              they respond well to. The care plan follows from that understanding,
              not from a template.
            </p>

            <p>
              Personal care is the most intimate kind of support — and the kind where the quality of the match between caregiver and client matters most. Arcadia approaches it that way.
            </p>

            <h2>What personal support can include</h2>

            <div className="provides-grid">
              {whatWeProvide.map((item, i) => (
                <div key={i} className="provides-card">
                  <div className="provides-card-title">{item.title}</div>
                  <div className="provides-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            <h2>Personal support for clients with complex conditions</h2>
            <p>
              Personal support for someone with dementia, acquired brain injury,
              Parkinson's, or significant frailty is not the same as personal support
              for someone recovering from a routine procedure. The approach, the
              communication, the patience required, and the clinical awareness are
              all different. Arcadia's caregivers supporting clients with complex
              conditions receive additional training and clinical oversight specific
              to those conditions.
            </p>

            <div className="condition-cards">
              {[
                {
                  label: 'Dementia & Alzheimer\'s',
                  title: 'Personal support for cognitive conditions',
                  body: 'Routine, familiarity, and calm communication are essential. Our caregivers are trained in dementia-specific approaches.',
                  href: '/conditions/dementia-care-at-home/',
                },
                {
                  label: 'Acquired Brain Injury',
                  title: 'Personal support post-ABI',
                  body: 'Calibrated to rehabilitation goals, coordinated with the treating team, and sensitive to cognitive and behavioural changes.',
                  href: '/conditions/acquired-brain-injury-support/',
                },
                {
                  label: 'Frailty & Fall Risk',
                  title: 'Personal support with fall prevention',
                  body: 'Supervision during high-risk daily activities, mobility assistance, and environment awareness to reduce fall risk.',
                  href: '/conditions/frailty-fall-prevention/',
                },
                {
                  label: 'Post-Hospital Recovery',
                  title: 'Personal support after discharge',
                  body: 'Structured around the recovery plan, with close monitoring and clear communication to the family and care team.',
                  href: '/conditions/post-hospital-recovery/',
                },
              ].map((item, i) => (
                <Link key={i} href={item.href} className="condition-card">
                  <div className="condition-card-label">{item.label}</div>
                  <div className="condition-card-title">{item.title}</div>
                  <div className="condition-card-body">{item.body}</div>
                </Link>
              ))}
            </div>

            {/* Mid CTA */}
            <div className="mid-cta">
              <h3>Not sure what level of support is needed?</h3>
              <p>
                A{' '}
                <Link href="/how-care-starts/care-assessment/" style={{ color: '#C8302A', fontWeight: 600 }}>
                  care assessment
                </Link>{' '}
                helps establish what is actually required — not a generic package,
                but a plan built around your specific situation.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">
                Book a Free Consultation
              </Link>
            </div>

            <h2>How Arcadia's personal support process works</h2>

            <div className="process-steps">
              {[
                {
                  num: '1',
                  title: 'First conversation — understanding the situation',
                  body: 'We start by listening. We want to understand the person\'s daily routines, what they can manage independently, what they need help with, what matters to them, and what kind of person they tend to respond well to. This conversation shapes everything that follows.',
                },
                {
                  num: '2',
                  title: 'Care assessment in the home',
                  body: 'A member of our team visits the home to assess the person\'s current function, the home environment, and any specific clinical considerations. For clients with dementia, ABI, or other complex conditions, this assessment involves additional clinical review.',
                },
                {
                  num: '3',
                  title: 'Caregiver matching',
                  body: 'We select a caregiver based on clinical compatibility, personality, language, cultural background, and the specific demands of the situation. For personal care especially, the match matters — an incompatible caregiver can make receiving help harder rather than easier.',
                },
                {
                  num: '4',
                  title: 'Care begins — with close follow-up',
                  body: 'We check in with both the family and the caregiver in the first two weeks to ensure the match is working and the care plan reflects the reality of daily life — not just what was discussed in assessment.',
                },
                {
                  num: '5',
                  title: 'Ongoing review as needs evolve',
                  body: 'Personal support needs change over time — as conditions progress, as function changes, as the family\'s situation changes. We review care plans regularly and adjust proactively rather than waiting to be asked.',
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

            <h2>Personal support across Toronto and the GTA</h2>
            <p>
              Arcadia provides personal support and daily living assistance across{' '}
              <Link href="/locations/toronto/">Toronto</Link>,{' '}
              <Link href="/locations/toronto/north-york-home-care/">North York</Link>,{' '}
              <Link href="/locations/toronto/scarborough-home-care/">Scarborough</Link>,{' '}
              <Link href="/locations/toronto/etobicoke-home-care/">Etobicoke</Link>,{' '}
              <Link href="/locations/york-region/markham-home-care/">Markham</Link>,{' '}
              <Link href="/locations/york-region/richmond-hill-home-care/">Richmond Hill</Link>, and{' '}
              <Link href="/locations/peel-region/mississauga-home-care/">Mississauga</Link>.
            </p>
            <p>
              We work alongside Ontario Health atHome to help families understand
              what publicly funded PSW hours may be available, and to provide private
              support where the publicly funded allocation does not meet the full need.
              Our team speaks a range of languages including Tagalog, Hindi, Farsi,
              Mandarin, Portuguese, and Italian — and we match caregivers accordingly
              where language is a consideration.
            </p>

            {/* FAQ */}
            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions families ask about personal support</h2>
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
              <h3>Talk to our team</h3>
              <p>No obligation. We listen first and help you understand your options.</p>
              <a href="tel:8449770050" className="sidebar-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red-sm">Book a Free Consultation</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Conditions</div>
              <Link href="/conditions/dementia-care-at-home/" className="sidebar-link">Dementia Care at Home</Link>
              <Link href="/conditions/frailty-fall-prevention/" className="sidebar-link">Frailty & Fall Prevention</Link>
              <Link href="/conditions/post-hospital-recovery/" className="sidebar-link">Post-Hospital Recovery</Link>
              <Link href="/conditions/caregiver-burnout-support/" className="sidebar-link">Caregiver Burnout Support</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Services</div>
              <Link href="/our-services/companion-care/" className="sidebar-link">Companion Care</Link>
              <Link href="/our-services/respite-care/" className="sidebar-link">Respite Care</Link>
              <Link href="/our-services/overnight-24-hour-care/" className="sidebar-link">Overnight & 24-Hour Care</Link>
              <Link href="/our-services/light-housekeeping/" className="sidebar-link">Light Housekeeping</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">How Care Starts</div>
              <Link href="/how-care-starts/" className="sidebar-link">Overview</Link>
              <Link href="/how-care-starts/care-assessment/" className="sidebar-link">Care Assessment</Link>
              <Link href="/how-care-starts/matching-caregivers/" className="sidebar-link">Caregiver Matching</Link>
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

        {/* Related */}
        <section className="related-section">
          <div className="related-inner">
            <p className="related-eyebrow">You May Also Find Helpful</p>
            <h2>Related services and conditions</h2>
            <div className="related-grid">
              {[
                { type: 'Service', title: 'Companion Care', href: '/our-services/companion-care/' },
                { type: 'Service', title: 'Respite Care', href: '/our-services/respite-care/' },
                { type: 'Condition', title: 'Dementia Care at Home', href: '/conditions/dementia-care-at-home/' },
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
          <h2>Personal care works best when the caregiver is the right fit and the routines are consistent.</h2>
          <p>
            A conversation with our team helps clarify what that looks like
            for your specific situation — and whether Arcadia is the right fit.
          </p>
          <a href="tel:8449770050" className="bottom-cta-phone">(844) 977-0050</a>
          <div className="cta-actions">
            <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            <Link href="/how-care-starts/" className="btn-outline">See How Care Starts</Link>
          </div>
        </section>

      </main>
    </>
  )
}
