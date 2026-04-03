// app/our-services/acquired-brain-injury-home-care/page.tsx
// Consideration-stage service page
// Target keyword: "acquired brain injury home care toronto" / "ABI rehabilitation support GTA"
// Persona A: family who has read the ABI condition page and is now evaluating Arcadia
// Persona B: case manager, OT, insurance adjuster looking to refer a client
// Both audiences served — professional pathway visible but not dominant
// Schema: Service + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Acquired Brain Injury Home Care Toronto | Arcadia Home Care',
  description: 'Specialized acquired brain injury home care and community rehabilitation support in Toronto and the GTA. Arcadia has served ABI clients for over 16 years — working alongside rehabilitation teams, case managers, and insurers to support recovery at home.',
  alternates: { canonical: 'https://www.arcadiahomecare.ca/our-services/acquired-brain-injury-home-care/' },
}

const faqs = [
  {
    q: 'What qualifications do Arcadia\'s Rehabilitation Support Workers have?',
    a: 'Arcadia\'s RSWs hold post-secondary education in rehabilitation, kinesiology, disability studies, or a related field. All undergo a thorough screening process including reference checks and Vulnerable Sector Police Check. They receive in-house orientation and ongoing training, and work under the supervision of our RSW Manager — who has over fifteen years of field experience in ABI rehabilitation.',
  },
  {
    q: 'How does Arcadia work with our existing rehabilitation team?',
    a: 'We operate as part of the treating team, not independently of it. Our RSWs implement community rehabilitation programs developed by occupational therapists, physiotherapists, speech-language pathologists, and other professionals. We communicate regularly with case managers and treating clinicians, document observations that are clinically relevant, and flag changes in the client\'s presentation promptly rather than managing them in isolation.',
  },
  {
    q: 'Can Arcadia provide both RSW and PSW support for the same client?',
    a: 'Yes. Many ABI clients need both — RSW support for community rehabilitation goals and PSW support for personal care and daily living. Arcadia can coordinate both within a single care plan, with clear delineation of roles and consistent communication between team members.',
  },
  {
    q: 'How does Arcadia handle the funding and documentation requirements for insurance-funded ABI care?',
    a: 'Arcadia is familiar with the documentation requirements for auto insurance (SABS), WSIB, and other funded programs. We provide detailed service records, progress notes, and any other documentation the insurer or case manager requires. We are experienced working within funded care budgets and in communicating with adjusters and case managers directly when that is helpful to the family.',
  },
  {
    q: 'What happens if a client\'s ABI rehabilitation goals change or progress plateaus?',
    a: 'Our RSW Manager monitors progress across all ABI cases and initiates conversations with the treating team and family when goals need to be revised. We do not continue a program that is not producing results without flagging it. Families and case managers deserve honest information about how things are going, and Arcadia provides that consistently.',
  },
  {
    q: 'Does Arcadia support ABI clients with behavioural or mental health challenges?',
    a: 'Yes. Personality changes, impulsivity, irritability, emotional lability, depression, and anxiety are common after ABI and can be among the most challenging aspects for families and care teams to manage. Our RSWs are trained to work with these presentations in a structured, consistent way — using approaches aligned with the overall rehabilitation plan and in close coordination with the treating team.',
  },
]

const whatWeProvide = [
  {
    title: 'Community rehabilitation programs',
    body: 'Implementing structured programs developed by OTs, physiotherapists, and other treating professionals — focused on the client\'s specific functional and independence goals.',
  },
  {
    title: 'Cognitive strategy support',
    body: 'Helping clients use compensatory strategies for memory, attention, executive function, and cognitive fatigue — in the context of real daily life, not a clinical setting.',
  },
  {
    title: 'Personal care and daily living',
    body: 'PSW-level support for personal hygiene, meal preparation, medication reminders, and household tasks — calibrated to the client\'s current abilities and rehabilitation goals.',
  },
  {
    title: 'Mobility and physical support',
    body: 'Assistance with transfers, movement, prescribed exercises, and community outings — in alignment with the physiotherapy program.',
  },
  {
    title: 'Behavioural and emotional support',
    body: 'Working with personality changes, impulsivity, anxiety, and emotional lability in a structured way consistent with the treating team\'s approach.',
  },
  {
    title: 'Social reintegration and community access',
    body: 'Supporting the client to re-engage with community settings, social situations, and activities — progressively and with appropriate support.',
  },
  {
    title: 'Family guidance and caregiver relief',
    body: 'Educating family members on ABI and effective interaction strategies, and providing respite so family caregivers can maintain their own wellbeing.',
  },
  {
    title: 'Documentation and team communication',
    body: 'Detailed progress notes, session records, and regular communication with case managers, treating clinicians, and insurers.',
  },
]

export default function ABIHomeCarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': 'Acquired Brain Injury Home Care',
              'provider': {
                '@type': 'LocalBusiness',
                'name': 'Arcadia Home Care',
                'telephone': '+18449770050',
                'address': {
                  '@type': 'PostalAddress',
                  'streetAddress': '302 Bay Street',
                  'addressLocality': 'Toronto',
                  'addressRegion': 'ON',
                  'postalCode': 'M5X 1A1',
                  'addressCountry': 'CA',
                },
              },
              'areaServed': 'Toronto, Ontario, Canada',
              'description': 'Specialized acquired brain injury home care and community rehabilitation support for clients and families in Toronto and the GTA.',
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
                { '@type': 'ListItem', 'position': 3, 'name': 'Acquired Brain Injury Home Care', 'item': 'https://www.arcadiahomecare.ca/our-services/acquired-brain-injury-home-care/' },
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
        .btn-outline { background: transparent; color: #fff; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; border: 1.5px solid rgba(255,255,255,0.35); transition: all 0.2s; }
        .btn-outline:hover { background: rgba(255,255,255,0.1); }

        .hero-trust { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 14px; padding: 28px; }
        .trust-item { display: flex; align-items: flex-start; gap: 12px; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .trust-item:last-child { border-bottom: none; padding-bottom: 0; }
        .trust-item:first-child { padding-top: 0; }
        .trust-icon { font-size: 20px; flex-shrink: 0; margin-top: 2px; }
        .trust-text-title { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 2px; }
        .trust-text-body { font-size: 13px; color: rgba(255,255,255,0.55); line-height: 1.5; }

        /* Professional referral banner */
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
        .provides-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 12px; padding: 20px; transition: border-color 0.2s, box-shadow 0.2s; }
        .provides-card:hover { border-color: #C8302A; box-shadow: 0 6px 20px rgba(28,43,58,0.08); }
        .provides-card-title { font-size: 14px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
        .provides-card-title::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #C8302A; flex-shrink: 0; }
        .provides-card-body { font-size: 0.875rem; color: #6B7280; line-height: 1.7; }

        .process-steps { display: flex; flex-direction: column; gap: 0; margin: 24px 0 32px; }
        .process-step { display: flex; gap: 20px; padding: 24px 0; border-bottom: 1px solid #E5E0D8; }
        .process-step:last-child { border-bottom: none; }
        .process-num { width: 40px; height: 40px; border-radius: 50%; background: #1C2B3A; color: #fff; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .process-content { flex: 1; }
        .process-title { font-size: 15px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; }
        .process-body { font-size: 0.9rem; color: #6B7280; line-height: 1.7; }

        .diff-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin: 24px 0 32px; }
        .diff-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-left: 4px solid #C8302A; border-radius: 0 12px 12px 0; padding: 20px 24px; }
        .diff-card-title { font-size: 15px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; }
        .diff-card-body { font-size: 0.9rem; color: #6B7280; line-height: 1.7; }

        /* Professional section */
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
              <h1>Acquired Brain Injury Home Care</h1>
              <p>
                Arcadia has provided specialized ABI home care and community
                rehabilitation support in Toronto and the GTA for over 16 years.
                We work alongside rehabilitation teams, case managers, and insurers
                to support recovery at home — with trained RSWs, clinical supervision,
                and a care process built around the individual.
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
                { icon: '🧠', title: 'ABI specialization for over 16 years', body: 'Longstanding ABI home care experience in Toronto and the GTA. Several of our RSWs have longstanding tenure with Arcadia.' },
                { icon: '👩‍⚕️', title: 'RSW Manager with 15+ years of ABI experience', body: 'All RSW cases supervised by a qualified clinician — not just coordinated by a scheduler.' },
                { icon: '📋', title: 'Experienced with auto insurance and WSIB', body: 'Familiar with SABS, WSIB, and other funded care systems. Documentation handled.' },
                { icon: '🤝', title: 'Active team coordination', body: 'We work with OTs, physiotherapists, SLPs, and case managers — not alongside them in theory, but in practice.' },
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

        {/* Professional referral banner */}
        <div className="pro-banner">
          <div className="pro-banner-inner">
            <p className="pro-banner-text">
              <strong>Case manager or health professional?</strong> Refer directly using our{' '}
              <Link href="/referral-form/" style={{ color: '#C8302A', fontWeight: 700, textDecoration: 'none' }}>
                professional referral form
              </Link>{' '}
              or call us at{' '}
              <a href="tel:8449770050">(844) 977-0050</a>.
              We respond promptly and communicate clearly with the sending team.
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="breadcrumb-inner">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/our-services/">Our Services</Link><span>›</span>
            Acquired Brain Injury Home Care
          </div>
        </nav>

        {/* Body + Sidebar */}
        <div className="service-body">
          <article className="service-article">

            <h2>What Arcadia's ABI home care actually involves</h2>
            <p>
              ABI home care is not personal care with a brain injury label on it.
              It requires workers who understand how acquired brain injury affects
              cognition, behaviour, communication, and daily function — and who can
              implement structured rehabilitation programs in a real home environment,
              not just assist with tasks. It requires clinical supervision, because
              the goals and methods of ABI rehabilitation require ongoing professional
              oversight. And it requires active coordination with the treating team,
              because community rehabilitation is usually strongest when it is connected to the clinical team rather than operating separately from it.
            </p>
            <p>
              Here is what an Arcadia ABI care engagement typically includes:
            </p>

            <div className="provides-grid">
              {whatWeProvide.map((item, i) => (
                <div key={i} className="provides-card">
                  <div className="provides-card-title">{item.title}</div>
                  <div className="provides-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            <h2>RSWs and PSWs — understanding the distinction</h2>
            <p>
              Not all ABI clients need the same type of worker, and the distinction matters.
            </p>
            <p>
              A <strong>Personal Support Worker (PSW)</strong> provides assistance with
              personal care, daily living tasks, and household management. PSW support
              is appropriate for ABI clients who need daily living assistance but whose
              primary rehabilitation goals are being addressed elsewhere.
            </p>
            <p>
              A <strong>Rehabilitation Support Worker (RSW)</strong> is trained to
              implement community rehabilitation programs under the supervision of
              licensed health professionals. RSW support is appropriate when the
              client has active rehabilitation goals — rebuilding cognitive strategies,
              generalizing therapy gains to real environments, managing behavioural
              challenges, and working toward greater independence in specific functional areas.
            </p>
            <p>
              Many ABI clients benefit from both. Arcadia can coordinate{' '}
              <Link href="/our-services/rehabilitation-support/">RSW support</Link>{' '}
              and{' '}
              <Link href="/our-services/personal-support-daily-living/">PSW support</Link>{' '}
              within a single care plan, with clear role delineation and consistent
              communication across the team.
            </p>

            {/* Mid CTA */}
            <div className="mid-cta">
              <h3>Not sure whether RSW or PSW support is right?</h3>
              <p>
                A{' '}
                <Link href="/how-care-starts/care-assessment/" style={{ color: '#C8302A', fontWeight: 600 }}>
                  care assessment
                </Link>{' '}
                helps clarify that. Our clinical team can review the situation,
                the rehabilitation goals, and the existing care plan — and recommend
                the most appropriate type of support.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red" style={{ display: 'inline-block' }}>
                Book a Free Consultation
              </Link>
            </div>

            <h2>How Arcadia's ABI care process works</h2>

            <div className="process-steps">
              {[
                {
                  num: '1',
                  title: 'Initial conversation — with the family, case manager, or both',
                  body: 'We start with a conversation about the client\'s situation, the rehabilitation goals, the existing care team, and what gaps the family or case manager is trying to address. We listen before we propose.',
                },
                {
                  num: '2',
                  title: 'Clinical review and care assessment',
                  body: 'Our RSW Manager reviews the available clinical information and, where appropriate, conducts a home visit to assess the client\'s current function, environment, and support needs. We coordinate with the treating team to understand the rehabilitation goals and any parameters the care plan should work within.',
                },
                {
                  num: '3',
                  title: 'RSW or PSW selection and matching',
                  body: 'We select workers based on clinical fit, experience, personality, and the specific demands of the case. For ABI clients with behavioural presentations, matching is particularly careful — the wrong temperament can undermine a rehabilitation program that is otherwise well designed.',
                },
                {
                  num: '4',
                  title: 'Program implementation and monitoring',
                  body: 'Care begins with close oversight from our RSW Manager. Progress is documented and communicated to the treating team and case manager on a schedule that meets their requirements. We flag changes in the client\'s presentation promptly rather than managing them in isolation.',
                },
                {
                  num: '5',
                  title: 'Ongoing review and adjustment',
                  body: 'ABI rehabilitation is not static. Goals change, progress occurs, and sometimes progress plateaus. Our RSW Manager monitors all cases and initiates honest conversations with the team and family when the plan needs to evolve.',
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

            <h2>What distinguishes Arcadia for ABI care</h2>

            <div className="diff-grid">
              {[
                {
                  title: '16 years of ABI specialization — with continuity to show for it',
                  body: 'Arcadia has been providing ABI home care in the GTA since 2005. A number of our RSWs have been with us from the beginning — an unusual level of continuity in this field, and a meaningful indicator of program quality and organizational culture.',
                },
                {
                  title: 'RSW supervision by a qualified clinician',
                  body: 'All Arcadia RSW cases are supervised by our RSW Manager, who has over fifteen years of field experience in ABI rehabilitation. Supervision is active and ongoing — not nominal. Care plans are reviewed regularly, worker performance is monitored, and clinical concerns are addressed promptly.',
                },
                {
                  title: 'Experience navigating funded care systems',
                  body: 'Arcadia is familiar with the documentation and communication requirements of auto insurance (SABS), WSIB, and other funded care programs. We work effectively within funded budgets and provide the service records, progress notes, and case communications that adjusters and case managers require.',
                },
                {
                  title: 'Genuine team coordination — not just parallel service delivery',
                  body: 'We communicate actively with case managers, OTs, physiotherapists, SLPs, and other treating team members. We do not simply show up and do our hours — we are part of the rehabilitation process, and we treat that role seriously.',
                },
              ].map((item, i) => (
                <div key={i} className="diff-card">
                  <div className="diff-card-title">{item.title}</div>
                  <div className="diff-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            <h2>ABI home care across Toronto and the GTA</h2>
            <p>
              Arcadia provides ABI home care and community rehabilitation support across{' '}
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
              <h2>Questions families and professionals ask about ABI home care</h2>
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
              <div className="sidebar-card-title">For Professionals</div>
              <Link href="/referral-form/" className="sidebar-link">Submit a Referral</Link>
              <Link href="/contact/" className="sidebar-link">Contact Our Team</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Conditions</div>
              <Link href="/conditions/acquired-brain-injury-support/" className="sidebar-link">Acquired Brain Injury</Link>
              <Link href="/conditions/stroke-recovery/" className="sidebar-link">Stroke Recovery</Link>
              <Link href="/conditions/post-hospital-recovery/" className="sidebar-link">Post-Hospital Recovery</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Services</div>
              <Link href="/our-services/rehabilitation-support/" className="sidebar-link">Rehabilitation Support</Link>
              <Link href="/our-services/personal-support-daily-living/" className="sidebar-link">Personal Support & Daily Living</Link>
              <Link href="/our-services/hospital-discharge-support/" className="sidebar-link">Hospital Discharge Support</Link>
              <Link href="/our-services/respite-care/" className="sidebar-link">Respite Care</Link>
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

        {/* Professional section */}
        <section className="pro-section">
          <div className="pro-inner">
            <div>
              <p className="pro-eyebrow">For Health Professionals</p>
              <h2>Referring an ABI Client to Arcadia</h2>
              <p>
                Case managers, occupational therapists, physiotherapists, social workers,
                insurance adjusters, and hospital discharge teams can refer ABI clients
                directly to Arcadia. We respond promptly, communicate clearly with the
                sending team, and provide the documentation and coordination the funded
                care system requires.
              </p>
              <div className="pro-actions">
                <Link href="/referral-form/" className="btn-white">Submit a Referral</Link>
                <a href="tel:8449770050" className="btn-outline-white">(844) 977-0050</a>
              </div>
            </div>
            <div className="pro-details">
              {[
                { title: 'What we need from a referral', body: 'Diagnosis, current functional status, existing care team, rehabilitation goals, funding source, and any behavioural or clinical considerations the assigned RSW should know about.' },
                { title: 'What you can expect from us', body: 'A response within one business day. A clinical review of the referral. A care plan that aligns with the rehabilitation goals established by the treating team. Regular progress communication on the schedule you need.' },
                { title: 'Documentation we provide', body: 'Session notes, progress reports, functional observations, and any other documentation required by the insurer or case management team.' },
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
                { type: 'Condition', title: 'Acquired Brain Injury Support', href: '/conditions/acquired-brain-injury-support/' },
                { type: 'Service', title: 'Rehabilitation Support', href: '/our-services/rehabilitation-support/' },
                { type: 'Condition', title: 'Stroke Recovery', href: '/conditions/stroke-recovery/' },
                { type: 'Resource', title: 'Brain Injury & Rehabilitation Guides', href: '/resources/brain-injury-rehabilitation/' },
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
          <h2>Effective ABI home care depends on the right structure, oversight, and coordination.</h2>
          <p>
            Whether you are a family navigating a discharge or a professional
            looking to refer a client, a conversation with our team is the right starting point.
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
