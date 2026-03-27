// app/our-services/respite-care/page.tsx
// Consideration-stage service page
// Target keyword: "respite care for caregivers toronto" / "home respite care GTA"
// Persona: family caregiver who has decided they need relief and is evaluating
// whether Arcadia can provide it reliably — not looking to be convinced they need help
// Tone: direct, warm, no guilt — speaks to the caregiver as the client
// Schema: Service + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Respite Care for Family Caregivers | Toronto & GTA | Arcadia Home Care',
  description: 'Respite care for family caregivers in Toronto and the GTA. Arcadia provides reliable, consistent relief — so caregivers can rest, work, and attend to their own lives knowing their loved one is well cared for.',
  alternates: { canonical: 'https://arcadiahomecare.ca/our-services/respite-care/' },
}

const faqs = [
  {
    q: 'How is respite care different from regular home care?',
    a: 'The goal is the same — providing quality care for the person at home — but the primary beneficiary of respite care is the family caregiver, not just the care recipient. Respite care is specifically structured to give the caregiver defined, reliable time away. That means consistent scheduling, a caregiver who can be trusted to manage independently, and clear communication so the family member can actually step away rather than remaining on alert.',
  },
  {
    q: 'How many hours of respite do caregivers typically need?',
    a: 'There is no universal answer, and the right amount is whatever allows the caregiver to genuinely recover rather than just pause. Some caregivers need a few hours a week to sleep, exercise, or have unscheduled time. Others benefit from longer blocks — full days or overnights — to manage work, travel, or their own health. A care assessment helps establish what would actually make a difference rather than defaulting to the minimum.',
  },
  {
    q: 'My parent refuses to let anyone else provide care. How do we handle that?',
    a: 'This is one of the most common challenges in arranging respite care, and it is worth exploring approaches that make accepting help more manageable. Approaches that tend to work better than direct persuasion include introducing the respite caregiver gradually, framing visits as companionship before they become care, and choosing someone whose personality is a genuine match. Our team has navigated this many times and can help you think through what might work.',
  },
  {
    q: 'Can Arcadia provide overnight respite care?',
    a: 'Yes. Overnight respite — particularly for caregivers who are not sleeping properly because they are monitoring or attending to a loved one at night — is one of the most impactful forms of relief. Arcadia provides overnight care seven days a week, and can arrange around-the-clock coverage for caregivers who need longer breaks.',
  },
  {
    q: 'How does Arcadia ensure the person receiving care is safe while I am away?',
    a: 'We select and brief the respite caregiver specifically for the situation — the person\'s routines, preferences, any clinical considerations, and what to do if something unexpected happens. We check in with both the caregiver and the family after initial visits, and we communicate proactively if anything changes. The goal is that the family member can step away without the nagging worry that they are the only safety net.',
  },
  {
    q: 'Is respite care covered by any public funding in Ontario?',
    a: 'Ontario Health atHome provides some publicly funded respite hours for eligible family caregivers, though the allocation is often limited. The Ministry of Health also funds certain caregiver support programs. Arcadia can help families understand what publicly funded options may be available alongside private respite care.',
  },
]

const whatWeProvide = [
  {
    title: 'Scheduled weekly respite',
    body: 'Consistent, recurring visits on a defined schedule — the same caregiver, at the same time — so the family member has something reliable to plan around.',
  },
  {
    title: 'Overnight respite care',
    body: 'Overnight coverage so the family caregiver can sleep uninterrupted. One of the most impactful forms of relief for caregivers who are monitoring or attending to a loved one through the night.',
  },
  {
    title: 'Extended day or weekend coverage',
    body: 'Longer blocks of time — full days, weekends — for caregivers who need to manage work, travel, medical appointments, or their own rest without time pressure.',
  },
  {
    title: 'Emergency or short-notice respite',
    body: 'When an unexpected situation requires a caregiver to be away — illness, family emergency, work obligation — Arcadia can often arrange coverage on short notice.',
  },
  {
    title: 'Personal care and daily support',
    body: 'Full personal support during the respite period — bathing, meals, medication reminders, companionship, and any other daily care the person requires.',
  },
  {
    title: 'Supervision and safety monitoring',
    body: 'Attentive presence during the visit, particularly for individuals who require supervision due to dementia, fall risk, or other conditions.',
  },
]

export default function RespiteCarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': 'Respite Care',
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
              'description': 'Respite care for family caregivers in Toronto and the GTA — reliable, consistent relief so caregivers can rest and attend to their own lives.',
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
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arcadiahomecare.ca/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Our Services', 'item': 'https://arcadiahomecare.ca/our-services/' },
                { '@type': 'ListItem', 'position': 3, 'name': 'Respite Care', 'item': 'https://arcadiahomecare.ca/our-services/respite-care/' },
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

        /* What real relief looks like */
        .relief-list { background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 14px; padding: 28px 32px; margin: 24px 0 32px; list-style: none; }
        .relief-list li { font-size: 0.9375rem; color: #4B5563; line-height: 1.7; padding: 8px 0 8px 22px; position: relative; border-bottom: 1px solid #E5E0D8; }
        .relief-list li:last-child { border-bottom: none; }
        .relief-list li::before { content: ''; position: absolute; left: 0; top: 16px; width: 7px; height: 7px; border-radius: 50%; background: #C8302A; opacity: 0.6; }

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
              <h1>Respite Care for Family Caregivers</h1>
              <p>
                You have been managing a lot, for a long time. Respite care gives
                you defined, reliable time away — knowing the person you care for
                is with someone capable, consistent, and well-briefed. Not a pause
                where you are still mentally on duty. Actual relief.
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
                { icon: '📅', title: 'Consistent, scheduled relief', body: 'The same caregiver, on a reliable schedule — so you have something you can actually plan around.' },
                { icon: '🌙', title: 'Overnight care available', body: 'Overnight respite so you can sleep without monitoring. Seven days a week.' },
                { icon: '⚡', title: 'Short-notice coverage when needed', body: 'When an unexpected situation requires you to be away, we do our best to arrange coverage quickly.' },
                { icon: '🧠', title: 'Complex condition experience', body: 'Respite caregivers for clients with dementia, ABI, and palliative needs — not just general care situations.' },
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
            Respite Care
          </div>
        </nav>

        {/* Body + Sidebar */}
        <div className="service-body">
          <article className="service-article">

            <h2>What respite care actually means</h2>
            <p>
              Respite care is home care with a specific purpose: giving the family
              caregiver time away that is genuinely restorative rather than just
              logistically covered. The distinction matters. A caregiver who steps
              out while remaining mentally on duty — checking their phone, worrying
              about what is happening at home — has not rested. They have just
              changed location.
            </p>
            <p>
              What makes respite care work is reliability. The same caregiver, on
              a consistent schedule, who knows the person well enough to handle
              the visit independently. Arcadia builds respite arrangements around
              that standard — because without it, the relief tends to be partial rather than genuine.
            </p>

            <h2>What real relief looks like</h2>
            <p>
              Caregivers describe what they need from respite in very practical terms.
              Here is what families most often tell us they are trying to get back:
            </p>

            <ul className="relief-list">
              <li>Sleep — uninterrupted, without one ear open for sounds from the other room</li>
              <li>A full working day without having to leave early or take calls</li>
              <li>Time to attend to their own medical or dental appointments</li>
              <li>A weekend away — even a single night — without the logistics of coverage falling back on them</li>
              <li>Time with their own children, partner, or friends without divided attention</li>
              <li>Space to grieve, process, or simply exist outside the role of caregiver for a few hours</li>
              <li>Confidence that if something happens while they are away, someone capable is there</li>
            </ul>

            <h2>What Arcadia's respite care includes</h2>

            <div className="provides-grid">
              {whatWeProvide.map((item, i) => (
                <div key={i} className="provides-card">
                  <div className="provides-card-title">{item.title}</div>
                  <div className="provides-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            <h2>Respite care for complex situations</h2>
            <p>
              Arranging respite for someone with dementia, acquired brain injury,
              or a palliative diagnosis requires more than finding an available
              caregiver. It requires someone who understands the specific condition,
              who can manage behavioural or clinical presentations without calling
              the family, and who has been properly briefed on what the person
              needs and how they respond.
            </p>
            <p>
              Arcadia provides respite care for families navigating{' '}
              <Link href="/conditions/dementia-care-at-home/">dementia</Link>,{' '}
              <Link href="/conditions/acquired-brain-injury-support/">acquired brain injury</Link>,{' '}
              <Link href="/conditions/palliative-serious-illness/">palliative illness</Link>, and{' '}
              <Link href="/conditions/frailty-fall-prevention/">significant frailty</Link> —
              with the same clinical oversight and caregiver preparation that
              applies to our other specialized services. Caregivers assigned to
              complex respite situations are selected specifically for that work,
              not pulled from a general roster.
            </p>
            <p>
              For caregivers who need overnight coverage specifically, our{' '}
              <a href="/our-services/overnight-24-hour-care/" style={{ color: '#C8302A', fontWeight: 600, textDecoration: 'underline' }}>overnight and 24-hour care</a>
              {' '}page explains how that works in practice.
            </p>
            <p>
              If you are experiencing caregiver exhaustion beyond the need for
              occasional relief, our page on{' '}
              <Link href="/conditions/caregiver-burnout-support/">caregiver burnout support</Link>{' '}
              and our{' '}
              <Link href="/resources/family-caregiver-support/">family caregiver support guides</Link>{' '}
              may also be useful.
            </p>

            {/* Mid CTA */}
            <div className="mid-cta">
              <h3>Ready to arrange reliable relief?</h3>
              <p>
                A{' '}
                <Link href="/how-care-starts/care-assessment/" style={{ color: '#C8302A', fontWeight: 600 }}>
                  care assessment
                </Link>{' '}
                helps establish what schedule and type of respite would actually
                make a difference — and whether any publicly funded options are
                available to supplement private care.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">
                Book a Free Consultation
              </Link>
            </div>

            <h2>How Arcadia arranges respite care</h2>
            <p>
              The process for arranging respite care follows the same steps as any
              Arcadia engagement — a first conversation, a care assessment, careful
              caregiver matching, and close follow-up in the first weeks. For respite
              specifically, the matching step is critical: the caregiver needs to be
              someone the person accepts willingly enough that the family member can
              actually leave without a difficult departure.
            </p>
            <p>
              We also pay attention to the handover. A good respite arrangement
              includes a clear briefing for the caregiver, a reliable communication
              channel for anything that needs to be flagged, and a consistent
              post-visit update to the family. The caregiver should never be the last
              to know if something has changed — and neither should the family member
              who stepped away trusting that things were in hand.
            </p>

            <h2>Respite care across Toronto and the GTA</h2>
            <p>
              Arcadia provides respite care across{' '}
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
              <h2>Questions caregivers ask about respite care</h2>
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
              <div className="sidebar-card-title">For Caregivers</div>
              <Link href="/conditions/caregiver-burnout-support/" className="sidebar-link">Caregiver Burnout Support</Link>
              <Link href="/resources/family-caregiver-support/" className="sidebar-link">Family Caregiver Guides</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Conditions</div>
              <Link href="/conditions/dementia-care-at-home/" className="sidebar-link">Dementia Care at Home</Link>
              <Link href="/conditions/palliative-serious-illness/" className="sidebar-link">Palliative & Serious Illness</Link>
              <Link href="/conditions/frailty-fall-prevention/" className="sidebar-link">Frailty & Fall Prevention</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Services</div>
              <Link href="/our-services/overnight-24-hour-care/" className="sidebar-link">Overnight & 24-Hour Care</Link>
              <Link href="/our-services/companion-care/" className="sidebar-link">Companion Care</Link>
              <Link href="/our-services/personal-support-daily-living/" className="sidebar-link">Personal Support & Daily Living</Link>
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
            <h2>Related services and support</h2>
            <div className="related-grid">
              {[
                { type: 'Service', title: 'Overnight & 24-Hour Care', href: '/our-services/overnight-24-hour-care/' },
                { type: 'Condition', title: 'Caregiver Burnout Support', href: '/conditions/caregiver-burnout-support/' },
                { type: 'Service', title: 'Companion Care', href: '/our-services/companion-care/' },
                { type: 'Resource', title: 'Family Caregiver Support Guides', href: '/resources/family-caregiver-support/' },
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
          <h2>You deserve time away that actually feels like time away.</h2>
          <p>
            A conversation with our team helps clarify what respite care
            would look like for your situation — and what it would take
            to make it genuinely useful.
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
