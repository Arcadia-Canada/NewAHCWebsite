// app/our-services/rehabilitation-support/page.tsx
// Consideration-stage service page
// Target keyword: "rehabilitation support home care toronto" / "rehabilitation support worker GTA"
// Persona A: family post-discharge from rehab, trying to maintain gains at home
// Persona B: OT, case manager, or insurer looking to place a client for community rehab
// Broader scope than ABI page — covers stroke, surgery, work injury, mental health, spinal cord
// Schema: Service + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/ui/AnimatedHero'

export const metadata: Metadata = {
  title: 'Rehabilitation Support | Toronto & GTA | Arcadia',
  description: 'Community rehabilitation support for individuals recovering from brain injury, stroke, surgery, work-related injury, or serious illness in Toronto and the GTA. Arcadia\'s trained RSWs work under clinical supervision to help clients rebuild independence at home.',
  alternates: { canonical: 'https://www.arcadiahomecare.ca/our-services/rehabilitation-support/' },
}

const faqs = [
  {
    q: 'What conditions does rehabilitation support at home cover?',
    a: 'Arcadia\'s Rehabilitation Support Workers support clients recovering from or living with a wide range of conditions — including acquired brain injury, stroke, spinal cord injury, work-related injury or illness, serious mental health diagnoses, and complex post-surgical recovery. The common thread is that the person has rehabilitation goals that require consistent support in their home and community environment, not just assistance with daily tasks.',
  },
  {
    q: 'What is the difference between a Rehabilitation Support Worker and a Personal Support Worker?',
    a: 'A Personal Support Worker assists with daily living tasks — personal care, meals, household management. A Rehabilitation Support Worker is trained to implement community rehabilitation programs under the supervision of licensed health professionals, with the goal of helping the client build or rebuild specific functional capabilities. RSW support is goal-directed and clinically supervised. PSW support is maintenance-oriented. Many clients benefit from both.',
  },
  {
    q: 'Does the client need an existing rehabilitation team in place before engaging Arcadia?',
    a: 'Not necessarily. Some clients come to us with an established team — an OT, physiotherapist, case manager — and we implement their program. Others come to us at an earlier stage, and we can help coordinate a referral to appropriate clinical services while providing support in the meantime. We work with whatever is in place and help fill the gaps.',
  },
  {
    q: 'How does Arcadia coordinate with our OT, physiotherapist, or case manager?',
    a: 'We operate as part of the treating team. Our RSWs implement programs developed by the treating professionals, document progress accurately, and communicate changes in the client\'s presentation promptly. We attend case conferences where appropriate and provide whatever reporting the team or insurer requires. Coordination is active, not nominal.',
  },
  {
    q: 'Is rehabilitation support covered by insurance or WSIB in Ontario?',
    a: 'It depends on the cause of the injury or illness. Work-related injuries may be covered by WSIB. Motor vehicle accidents may be covered under Ontario\'s auto insurance system (SABS). Some private extended health plans cover community rehabilitation support. Arcadia is familiar with these systems and can help families and case managers understand what documentation and processes are involved.',
  },
  {
    q: 'How long does community rehabilitation support typically last?',
    a: 'Duration varies significantly depending on the condition, the rehabilitation goals, and the person\'s rate of progress. Some clients receive intensive support for a defined post-discharge period; others benefit from ongoing maintenance support over a longer term. Arcadia does not lock families into fixed contracts — we build plans around the clinical situation and adjust as things change.',
  },
]

const whatWeProvide = [
  {
    title: 'Community rehabilitation program implementation',
    body: 'Implementing structured programs developed by OTs, physiotherapists, SLPs, and other treating professionals — in the client\'s real environment, not a clinical setting.',
  },
  {
    title: 'Cognitive strategy support',
    body: 'Helping clients use compensatory strategies for memory, attention, executive function, and cognitive fatigue in the context of daily life.',
  },
  {
    title: 'Mobility and physical support',
    body: 'Assisting with transfers, prescribed exercises, mobility in the home and community, and building safe movement confidence progressively.',
  },
  {
    title: 'Activities of daily living',
    body: 'Supporting independence in personal care, meal preparation, household management, and community access — calibrated to the client\'s current abilities and rehabilitation goals.',
  },
  {
    title: 'Social and community reintegration',
    body: 'Supporting the client to re-engage with community settings, social situations, and meaningful activities — building confidence and participation progressively.',
  },
  {
    title: 'Behavioural and emotional support',
    body: 'Working with anxiety, depression, emotional lability, impulsivity, and other presentations common after injury or illness — in alignment with the clinical team\'s approach.',
  },
  {
    title: 'Family education and guidance',
    body: 'Helping family members understand the condition, interact effectively with their loved one, and manage their own wellbeing alongside the caregiving role.',
  },
  {
    title: 'Documentation and team communication',
    body: 'Detailed session notes, progress reports, and regular communication with case managers, treating clinicians, and insurers.',
  },
]

export default function RehabilitationSupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': 'Rehabilitation Support',
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
              'description': 'Community rehabilitation support for individuals recovering from brain injury, stroke, surgery, or serious illness in Toronto and the GTA.',
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
                { '@type': 'ListItem', 'position': 3, 'name': 'Rehabilitation Support', 'item': 'https://www.arcadiahomecare.ca/our-services/rehabilitation-support/' },
              ],
            },
          ]),
        }}
      />

      <style>{`
        .service-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }

        .service-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 14px; }
        .btn-red { background: #C8302A; color: #fff; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; transition: all 0.2s; box-shadow: 0 8px 20px rgba(200,48,42,0.3); display: inline-flex; align-items: center; gap: 8px; }
        .btn-red:hover { background: #a82520; transform: translateY(-2px); }
        .btn-outline { background: transparent; color: #fff; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; border: 1.5px solid rgba(255,255,255,0.35); transition: all 0.2s; display: inline-flex; align-items: center; }
        .btn-outline:hover { background: rgba(255,255,255,0.1); }

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

        /* Conditions served pills */
        .conditions-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 20px 0 32px; }
        @media (max-width: 640px) { .conditions-grid { grid-template-columns: repeat(2, 1fr); } }
        .condition-pill { background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 100px; padding: 8px 16px; font-size: 13px; font-weight: 600; color: #1C2B3A; text-align: center; text-decoration: none; transition: all 0.15s; }
        .condition-pill:hover { border-color: #C8302A; color: #C8302A; background: rgba(200,48,42,0.04); }

        .provides-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0 32px; }
        @media (max-width: 640px) { .provides-grid { grid-template-columns: 1fr; } }
        .provides-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 12px; padding: 20px; transition: border-color 0.2s, box-shadow 0.2s; }
        .provides-card:hover { border-color: #C8302A; box-shadow: 0 6px 20px rgba(28,43,58,0.08); }
        .provides-card-title { font-size: 14px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
        .provides-card-title::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #C8302A; flex-shrink: 0; }
        .provides-card-body { font-size: 0.875rem; color: #6B7280; line-height: 1.7; }

        /* RSW vs PSW comparison */
        .comparison-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0 32px; }
        @media (max-width: 600px) { .comparison-grid { grid-template-columns: 1fr; } }
        .comparison-card { border-radius: 12px; padding: 24px; }
        .comparison-card.rsw { background: #1C2B3A; }
        .comparison-card.psw { background: #FAFAF8; border: 1px solid #E5E0D8; }
        .comparison-label { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 10px; }
        .comparison-card.rsw .comparison-label { color: #C8302A; }
        .comparison-card.psw .comparison-label { color: #6B7280; }
        .comparison-title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.3rem; font-weight: 600; margin-bottom: 12px; }
        .comparison-card.rsw .comparison-title { color: #fff; }
        .comparison-card.psw .comparison-title { color: #1C2B3A; }
        .comparison-list { list-style: none; padding: 0; margin: 0; }
        .comparison-list li { font-size: 0.875rem; line-height: 1.65; padding: 5px 0 5px 16px; position: relative; }
        .comparison-card.rsw .comparison-list li { color: rgba(255,255,255,0.7); }
        .comparison-card.psw .comparison-list li { color: #6B7280; }
        .comparison-list li::before { content: ''; position: absolute; left: 0; top: 11px; width: 6px; height: 6px; border-radius: 50%; }
        .comparison-card.rsw .comparison-list li::before { background: #C8302A; }
        .comparison-card.psw .comparison-list li::before { background: #9CA3AF; }

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
        <AnimatedHero
          eyebrow="Our Services · Toronto & GTA"
          title="Rehabilitation Support at Home"
          subtitle="Recovery from injury or serious illness does not end when inpatient rehabilitation ends. The work of rebuilding independence happens at home, in real environments, with real demands. Arcadia's trained Rehabilitation Support Workers help clients apply and generalize their rehabilitation gains in the community — under clinical supervision and in coordination with the treating team."
          imageSrc="/images/services/rehabilitation.webp"
          imageAlt="A younger man stands beside an older man seated in an armchair, both looking toward a bright window as he gestures supportively in a sunlit living room"
        >
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="tel:8449770050" className="btn-red">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2.5C2 8.299 5.701 12 11.5 12l.5-2.5-2.5-.5-.5 1c-2-1-3-2-4-4l1-.5L5.5 3 3 2.5z" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round"/>
              </svg>
              Call (844) 977-0050
            </a>
            <Link href="/contact/" className="btn-outline">Book a Free Consultation</Link>
          </div>
        </AnimatedHero>

        {/* Professional referral banner */}
        <div className="pro-banner">
          <div className="pro-banner-inner">
            <p className="pro-banner-text">
              <strong>OT, case manager, or health professional?</strong> Refer directly using our{' '}
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
            Rehabilitation Support
          </div>
        </nav>

        {/* Body + Sidebar */}
        <div className="service-body">
          <article className="service-article">

            <h2>Who rehabilitation support is for</h2>
            <p>
              Rehabilitation support at home is appropriate for individuals who have
              active rehabilitation goals — not just daily living needs — and who
              benefit from consistent, structured support in their home and community
              environment. Arcadia's RSWs work with clients recovering from or living with:
            </p>

            <div className="conditions-grid">
              {[
                { label: 'Acquired Brain Injury', href: '/conditions/acquired-brain-injury-support/' },
                { label: 'Stroke', href: '/conditions/stroke-recovery/' },
                { label: 'Spinal Cord Injury', href: '/conditions/post-hospital-recovery/' },
                { label: 'Complex Post-Surgical Recovery', href: '/conditions/post-hospital-recovery/' },
              ].map((item, i) => (
                <Link key={i} href={item.href} className="condition-pill">{item.label}</Link>
              ))}
            </div>

            <p>
              If you are unsure whether rehabilitation support or personal support
              is more appropriate, our{' '}
              <Link href="/how-care-starts/care-assessment/">care assessment</Link>{' '}
              process helps clarify that based on the client's specific goals
              and current function.
            </p>

            <h2>RSW support vs PSW support — understanding the distinction</h2>
            <p>
              The most common question families and referral sources ask is whether
              their situation calls for an RSW, a PSW, or both. Here is a plain
              explanation of the difference:
            </p>

            <div className="comparison-grid">
              <div className="comparison-card rsw">
                <div className="comparison-label">Rehabilitation Support Worker</div>
                <div className="comparison-title">Goal-directed. Clinically supervised.</div>
                <ul className="comparison-list">
                  <li>Implements programs from OTs, PTs, SLPs</li>
                  <li>Works toward specific functional goals</li>
                  <li>Supervised by qualified RSW Manager</li>
                  <li>Documents progress and communicates with team</li>
                  <li>Supports cognitive strategy use and community reintegration</li>
                  <li>Appropriate when active rehab goals exist</li>
                </ul>
              </div>
              <div className="comparison-card psw">
                <div className="comparison-label">Personal Support Worker</div>
                <div className="comparison-title">Task-focused. Maintenance-oriented.</div>
                <ul className="comparison-list">
                  <li>Assists with personal care and daily living</li>
                  <li>Supports meals, hygiene, household tasks</li>
                  <li>Provides companionship and supervision</li>
                  <li>Offers respite for family caregivers</li>
                  <li>Does not implement clinical rehab programs</li>
                  <li>Appropriate alongside or following RSW support</li>
                </ul>
              </div>
            </div>

            <p>
              Many clients need both. Arcadia can coordinate RSW and{' '}
              <Link href="/our-services/personal-support-daily-living/">PSW support</Link>{' '}
              within a single care plan, with clear role delineation and consistent
              team communication.
            </p>

            <h2>What rehabilitation support can include</h2>

            <div className="provides-grid">
              {whatWeProvide.map((item, i) => (
                <div key={i} className="provides-card">
                  <div className="provides-card-title">{item.title}</div>
                  <div className="provides-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            {/* Mid CTA */}
            <div className="mid-cta">
              <h3>Not sure what level or type of support is needed?</h3>
              <p>
                A conversation with our clinical team helps clarify whether RSW,
                PSW, or a combination is most appropriate — and what a realistic
                care plan would look like given the client's goals and situation.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">
                Book a Free Consultation
              </Link>
            </div>

            <h2>How Arcadia's rehabilitation support process works</h2>

            <div className="process-steps">
              {[
                {
                  num: '1',
                  title: 'Initial conversation — with family, case manager, or both',
                  body: 'We start by listening. We want to understand the client\'s situation, the rehabilitation goals, the existing care team, and what gaps are not currently being addressed. We do not propose a solution until we understand the problem.',
                },
                {
                  num: '2',
                  title: 'Clinical review and coordination with the treating team',
                  body: 'Our RSW Manager reviews the available clinical information and coordinates with the OT, physiotherapist, or case manager to understand the rehabilitation goals and parameters. Where a home visit is appropriate, we conduct one.',
                },
                {
                  num: '3',
                  title: 'RSW selection and matching',
                  body: 'We match based on clinical fit, experience with the specific condition, personality, and — for clients with behavioural presentations — temperament. The quality of the match is one of the most significant variables in rehabilitation support outcomes.',
                },
                {
                  num: '4',
                  title: 'Program implementation with active oversight',
                  body: 'Our RSW Manager monitors all cases closely, particularly in the first weeks. Progress is documented and communicated to the treating team on a schedule that meets their requirements. Changes in the client\'s presentation are flagged promptly.',
                },
                {
                  num: '5',
                  title: 'Ongoing review and honest adjustment',
                  body: 'Rehabilitation goals evolve. Our RSW Manager initiates conversations with the team and family when the plan needs to change — including when progress has plateaued and the approach needs to be reconsidered.',
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

            <h2>Rehabilitation support across Toronto and the GTA</h2>
            <p>
              Arcadia provides rehabilitation support across{' '}
              <Link href="/locations/toronto/">Toronto</Link>,{' '}
              <Link href="/locations/toronto/north-york-home-care/">North York</Link>,{' '}
              <Link href="/locations/toronto/scarborough-home-care/">Scarborough</Link>,{' '}
              <Link href="/locations/toronto/etobicoke-home-care/">Etobicoke</Link>,{' '}
              <Link href="/locations/york-region/markham-home-care/">Markham</Link>,{' '}
              <Link href="/locations/york-region/richmond-hill-home-care/">Richmond Hill</Link>, and{' '}
              <Link href="/locations/peel-region/mississauga-home-care/">Mississauga</Link>.
              We are familiar with the discharge processes and referral pathways
              at major GTA rehabilitation centres and hospital networks.
            </p>

            {/* FAQ */}
            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions families and professionals ask about rehabilitation support</h2>
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
              <p>No obligation. We listen first and help clarify what support is needed.</p>
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
              <Link href="/our-services/acquired-brain-injury-home-care/" className="sidebar-link">ABI Home Care</Link>
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
              <h2>Referring a Client for Rehabilitation Support</h2>
              <p>
                Occupational therapists, physiotherapists, case managers, social workers,
                and discharge teams can refer clients directly to Arcadia for community
                rehabilitation support. We respond promptly, coordinate with the treating
                team, and provide the documentation the funded care system requires.
              </p>
              <div className="pro-actions">
                <Link href="/referral-form/" className="btn-white">Submit a Referral</Link>
                <a href="tel:8449770050" className="btn-outline-white">(844) 977-0050</a>
              </div>
            </div>
            <div className="pro-details">
              {[
                { title: 'What we need from a referral', body: 'Diagnosis, current functional status, rehabilitation goals, existing care team contacts, funding source, and any clinical or behavioural considerations the assigned RSW should know.' },
                { title: 'What you can expect from us', body: 'Response within one business day. Clinical review of the referral. A care plan aligned with the treating team\'s goals. Regular progress communication on the schedule you need.' },
                { title: 'Documentation provided', body: 'Session notes, progress reports, functional observations, and any reporting required by the insurer, WSIB, or case management team.' },
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
            <h2>Related services and conditions</h2>
            <div className="related-grid">
              {[
                { type: 'Service', title: 'Acquired Brain Injury Home Care', href: '/our-services/acquired-brain-injury-home-care/' },
                { type: 'Condition', title: 'Acquired Brain Injury Support', href: '/conditions/acquired-brain-injury-support/' },
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
          <h2>Rehabilitation at home is strongest when the right structure, support, and oversight are in place.</h2>
          <p>
            Whether you are a family navigating recovery or a professional
            looking to refer a client, a conversation with our team
            is the right starting point.
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
