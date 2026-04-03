// app/our-services/case-management/page.tsx
// Consideration-stage service page
// Target keyword: "home care case management toronto" / "care coordination services GTA"
// Persona A: family overwhelmed by coordinating multiple providers and navigating
// the healthcare system — often post-diagnosis or post-discharge
// Persona B: professional referring a complex client who needs coordination support
// Tone: confident, organized, practical — this reader needs someone who can
// take the wheel, not just assist from the passenger seat
// Schema: Service + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Case Management | Home Care Coordination | Arcadia',
  description: 'Care coordination and case management for complex home care situations in Toronto and the GTA. Arcadia helps families navigate the healthcare system, coordinate multiple providers, and build a care plan that actually holds together.',
  alternates: { canonical: 'https://www.arcadiahomecare.ca/our-services/case-management/' },
}

const faqs = [
  {
    q: 'What does a case manager actually do?',
    a: 'A case manager assesses the full situation — the person\'s medical needs, functional abilities, living environment, family support, and financial considerations — and builds a care plan that coordinates all the pieces. They communicate with the treating medical team, arrange and oversee home care providers, navigate publicly funded systems like Ontario Health atHome, and serve as the single point of contact for the family. When something changes — and it always does — the case manager adjusts the plan rather than leaving the family to figure it out.',
  },
  {
    q: 'How is case management different from just hiring a home care agency?',
    a: 'A home care agency provides care workers. A case manager coordinates care across multiple providers and systems — the family physician, specialist teams, Ontario Health atHome, private home care, and any other services involved. Case management is appropriate when the situation is complex enough that coordination itself has become a significant challenge, or when the family does not have the knowledge or bandwidth to manage that coordination themselves.',
  },
  {
    q: 'Who typically benefits most from case management?',
    a: 'Families navigating complex, multi-condition situations — particularly those involving dementia, acquired brain injury, or a combination of medical and functional needs. Families who are geographically distant from a parent or loved one. Families where the primary caregiver is also managing other significant responsibilities. And situations where multiple providers are involved but no one is taking overall responsibility for how the pieces fit together.',
  },
  {
    q: 'Can Arcadia provide case management alongside its home care services?',
    a: 'Yes — and this is a common arrangement. Arcadia\'s case manager can coordinate the full care plan, including Arcadia\'s own home care workers alongside any other services involved. Having case management and home care from the same provider can simplify communication and reduce the coordination burden on the family, though we can also provide case management independently for clients who use other home care providers.',
  },
  {
    q: 'Is case management covered by OHIP or Ontario Health atHome?',
    a: 'Ontario Health atHome provides care coordination services for eligible clients as part of publicly funded home care. However, the scope of publicly funded coordination is often limited — particularly for complex cases that require intensive ongoing management. Private case management fills the gaps where public coordination does not cover what the situation requires.',
  },
  {
    q: 'How does Arcadia\'s case manager communicate with our family?',
    a: 'We establish a communication rhythm at the outset — how often updates are provided, through what channel, and who in the family receives them. For families managing a situation from a distance, we can provide regular written summaries alongside direct phone contact. We also communicate proactively when something changes, rather than waiting for the family to check in.',
  },
]

const whatWeProvide = [
  {
    title: 'Comprehensive care assessment',
    body: 'A thorough assessment of the person\'s medical needs, functional abilities, living situation, and available support — the foundation for a care plan that reflects the full picture.',
  },
  {
    title: 'Care plan development',
    body: 'Building a coordinated care plan that identifies what support is needed, who provides it, how it fits together, and what publicly funded options are available to offset private costs.',
  },
  {
    title: 'Provider coordination',
    body: 'Managing the relationship between all care providers — home care workers, medical teams, therapists, and publicly funded services — so the family is not the relay point.',
  },
  {
    title: 'Ontario Health atHome navigation',
    body: 'Understanding what publicly funded care the person is entitled to, advocating for appropriate hours, and coordinating between publicly funded and private care so nothing falls through the gap.',
  },
  {
    title: 'Ongoing monitoring and adjustment',
    body: 'Regular review of how the care plan is working, with proactive adjustments as the situation changes — rather than waiting for a crisis to force a reassessment.',
  },
  {
    title: 'Family communication and support',
    body: 'Regular updates, clear explanations of what is happening and why, and a consistent point of contact for questions and concerns — particularly valuable for families managing a situation from a distance.',
  },
  {
    title: 'Crisis response and transition planning',
    body: 'When a hospitalization, decline, or unexpected event disrupts the care plan, the case manager coordinates the response and adjusts the plan for what comes next.',
  },
  {
    title: 'Insurance and funding navigation',
    body: 'For clients with insurance coverage, WSIB, or veterans\' benefits, the case manager helps navigate the documentation and processes required to access those funds.',
  },
]

export default function CaseManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': 'Case Management',
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
              'description': 'Care coordination and case management for complex home care situations in Toronto and the GTA.',
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
                { '@type': 'ListItem', 'position': 3, 'name': 'Case Management', 'item': 'https://www.arcadiahomecare.ca/our-services/case-management/' },
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

        /* Pro referral banner */
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

        /* When case management helps */
        .signals-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 24px 0 32px; }
        @media (max-width: 600px) { .signals-grid { grid-template-columns: 1fr; } }
        .signal-card { background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 10px; padding: 18px 20px; }
        .signal-card-title { font-size: 14px; font-weight: 700; color: #1C2B3A; margin-bottom: 4px; }
        .signal-card-body { font-size: 0.875rem; color: #6B7280; line-height: 1.65; }

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
              <h1>Case Management & Care Coordination</h1>
              <p>
                Complex care situations rarely fail because the right services do not
                exist. They often struggle because no one is coordinating the pieces. Arcadia's
                case management service gives families a single, knowledgeable point of
                contact who keeps track of how the care plan holds together —
                and keeps it working as the situation changes.
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
                { icon: '🗂️', title: 'Single point of contact', body: 'One person who knows the full picture — not a rotating cast of coordinators who each know only their piece.' },
                { icon: '🔗', title: 'Coordinates across all providers', body: 'Medical teams, Ontario Health atHome, private home care, therapists — we help manage the relationships so the coordination burden does not fall entirely on the family.' },
                { icon: '🌍', title: 'Remote family support', body: 'Regular updates and a consistent contact point for families managing a situation from a distance.' },
                { icon: '🔄', title: 'Proactive adjustment', body: 'We monitor and adjust the care plan as the situation changes — rather than waiting for a crisis to prompt a review.' },
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

        {/* Pro referral banner */}
        <div className="pro-banner">
          <div className="pro-banner-inner">
            <p className="pro-banner-text">
              <strong>Referring a complex case?</strong> Use our{' '}
              <Link href="/referral-form/" style={{ color: '#C8302A', fontWeight: 700, textDecoration: 'none' }}>
                professional referral form
              </Link>{' '}
              or call{' '}
              <a href="tel:8449770050">(844) 977-0050</a>.
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="breadcrumb-inner">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/our-services/">Our Services</Link><span>›</span>
            Case Management
          </div>
        </nav>

        {/* Body + Sidebar */}
        <div className="service-body">
          <article className="service-article">

            <h2>When coordination becomes the problem</h2>
            <p>
              Most families do not start out needing a case manager. They start out
              managing — doctor's appointments, home care visits, medication changes,
              conversations with the hospital discharge team, phone calls to Ontario
              Health atHome. For a while, they hold it together.
            </p>
            <p>
              Then the situation gets more complex. A hospitalization creates a new
              set of providers. A condition progresses and the care plan that worked
              six months ago no longer fits. A family member who was coordinating
              everything moves away or hits their own limit. And suddenly the question
              is not just what care is needed, but who is responsible for making sure
              it all works.
            </p>
            <p>
              Case management is the answer to that question. It is appropriate when
              the coordination of care has itself become a full-time job — and the
              family is not equipped, or simply not available, to do that job well.
            </p>

            <h2>Signs a case manager would help</h2>

            <div className="signals-grid">
              {[
                { title: 'Multiple providers with no one coordinating them', body: 'A family physician, specialist, home care agency, and therapist who each know their piece but not the whole — and whose plans sometimes conflict.' },
                { title: 'A complex diagnosis requiring specialized navigation', body: 'Dementia, acquired brain injury, or a combination of serious conditions that require someone who understands the clinical landscape, not just the logistics.' },
                { title: 'Geographically distant family', body: 'Adult children who live in another city or country and cannot be the day-to-day coordinator — but need to trust that someone with oversight is in place.' },
                { title: 'Publicly funded care that is not working as expected', body: 'Gaps between what Ontario Health atHome provides and what the situation requires — and a family that does not know how to navigate the system to address them.' },
                { title: 'A recent hospitalization or significant change', body: 'A discharge that has created new providers, new medications, and new care needs — all arriving at once without a plan for how they fit together.' },
                { title: 'Family caregiver at capacity', body: 'The person who has been coordinating everything is exhausted, overwhelmed, or no longer able to manage the volume and complexity of what is required.' },
              ].map((item, i) => (
                <div key={i} className="signal-card">
                  <div className="signal-card-title">{item.title}</div>
                  <div className="signal-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            <h2>What Arcadia's case management includes</h2>

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
              <h3>Not sure whether case management is what you need?</h3>
              <p>
                A conversation with our team helps clarify whether the situation
                calls for case management, a specific home care service, or a
                combination of both. There is no obligation.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">
                Book a Free Consultation
              </Link>
            </div>

            <h2>How Arcadia's case management process works</h2>

            <div className="process-steps">
              {[
                {
                  num: '1',
                  title: 'Full situation assessment',
                  body: 'We start with a comprehensive assessment of the person\'s medical situation, functional abilities, living environment, existing care plan, and family support. We also assess what is currently not working — where the gaps are, where coordination is failing, and what the family\'s priorities are for improvement.',
                },
                {
                  num: '2',
                  title: 'Care plan development',
                  body: 'Based on the assessment, we develop a care plan that identifies what support is needed, who provides it, what publicly funded options are available, and how the pieces fit together. The plan is shared with the family and, where appropriate, with the treating medical team.',
                },
                {
                  num: '3',
                  title: 'Provider coordination and setup',
                  body: 'We arrange and coordinate all the services in the plan — contacting existing providers, arranging new ones, navigating Ontario Health atHome processes, and establishing clear lines of communication between everyone involved.',
                },
                {
                  num: '4',
                  title: 'Ongoing monitoring',
                  body: 'Regular check-ins with care providers, the family, and where appropriate the medical team. We are looking for gaps, changes, and early warning signs — not just confirming that the scheduled visits happened.',
                },
                {
                  num: '5',
                  title: 'Proactive adjustment',
                  body: 'When something changes — a health event, a provider change, a shift in the person\'s needs — we adjust the plan proactively rather than waiting for the family to identify the problem. This is what distinguishes active case management from passive coordination.',
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

            <h2>Case management for families navigating specific conditions</h2>
            <p>
              Case management is particularly valuable when the underlying condition
              is complex enough that coordination requires clinical knowledge, not
              just organizational skill. Arcadia provides case management for families
              navigating{' '}
              <Link href="/conditions/dementia-care-at-home/">dementia</Link> and{' '}
              <Link href="/conditions/dementia-care-at-home/">Dementia & Alzheimer's Care</Link>,{' '}
              <Link href="/conditions/acquired-brain-injury-support/">acquired brain injury</Link>,{' '}
              <Link href="/conditions/post-hospital-recovery/">complex post-discharge situations</Link>, and{' '}
              <Link href="/conditions/palliative-serious-illness/">palliative and serious illness</Link>.
            </p>
            <p>
              For families who are also experiencing significant caregiver strain,
              our page on{' '}
              <Link href="/conditions/caregiver-burnout-support/">caregiver burnout support</Link>{' '}
              and our{' '}
              <Link href="/resources/navigating-home-care/">navigating home care guides</Link>{' '}
              are worth reading alongside this one.
            </p>

            <h2>Case management across Toronto and the GTA</h2>
            <p>
              Arcadia provides case management across{' '}
              <Link href="/locations/toronto/">Toronto</Link>,{' '}
              <Link href="/locations/toronto/north-york-home-care/">North York</Link>,{' '}
              <Link href="/locations/toronto/scarborough-home-care/">Scarborough</Link>,{' '}
              <Link href="/locations/toronto/etobicoke-home-care/">Etobicoke</Link>,{' '}
              <Link href="/locations/york-region/markham-home-care/">Markham</Link>,{' '}
              <Link href="/locations/york-region/richmond-hill-home-care/">Richmond Hill</Link>, and{' '}
              <Link href="/locations/peel-region/mississauga-home-care/">Mississauga</Link>.
              We are familiar with the Ontario Health atHome system across all of
              these regions and with the referral and coordination processes at
              major GTA hospital networks.
            </p>

            {/* FAQ */}
            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions families ask about case management</h2>
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
              <p>No obligation. We listen first and help clarify what is needed.</p>
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
              <Link href="/conditions/dementia-care-at-home/" className="sidebar-link">Dementia Care at Home</Link>
              <Link href="/conditions/acquired-brain-injury-support/" className="sidebar-link">Acquired Brain Injury</Link>
              <Link href="/conditions/post-hospital-recovery/" className="sidebar-link">Post-Hospital Recovery</Link>
              <Link href="/conditions/caregiver-burnout-support/" className="sidebar-link">Caregiver Burnout Support</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Services</div>
              <Link href="/our-services/hospital-discharge-support/" className="sidebar-link">Hospital Discharge Support</Link>
              <Link href="/our-services/dementia-alzheimers-home-care/" className="sidebar-link">Dementia & Alzheimer's Care</Link>
              <Link href="/our-services/rehabilitation-support/" className="sidebar-link">Rehabilitation Support</Link>
              <Link href="/our-services/personal-support-daily-living/" className="sidebar-link">Personal Support & Daily Living</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">How Care Starts</div>
              <Link href="/how-care-starts/" className="sidebar-link">Overview</Link>
              <Link href="/how-care-starts/care-assessment/" className="sidebar-link">Care Assessment</Link>
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
              <h2>Referring a Complex Case for Case Management</h2>
              <p>
                Hospital social workers, discharge planners, physicians, and other
                professionals can refer complex clients directly to Arcadia for
                case management. We respond promptly, conduct a thorough assessment,
                and communicate clearly with the referring team about the plan in place.
              </p>
              <div className="pro-actions">
                <Link href="/referral-form/" className="btn-white">Submit a Referral</Link>
                <a href="tel:8449770050" className="btn-outline-white">(844) 977-0050</a>
              </div>
            </div>
            <div className="pro-details">
              {[
                { title: 'Situations we handle well', body: 'Complex multi-condition cases, dementia with behavioural challenges, ABI rehabilitation coordination, geographically distant families, and situations where existing coordination has broken down.' },
                { title: 'What you can expect from us', body: 'A response from our team as quickly as we can manage. A thorough assessment. A care plan shared with the referring team. Regular communication updates as the situation evolves.' },
                { title: 'How we work with existing teams', body: 'We coordinate with, not around, existing clinical teams. Our case managers communicate actively with treating physicians, specialists, and Ontario Health atHome coordinators.' },
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
            <h2>Related services and resources</h2>
            <div className="related-grid">
              {[
                { type: 'Service', title: 'Hospital Discharge Support', href: '/our-services/hospital-discharge-support/' },
                { type: 'Condition', title: 'Caregiver Burnout Support', href: '/conditions/caregiver-burnout-support/' },
                { type: 'Condition', title: 'Post-Hospital Recovery', href: '/conditions/post-hospital-recovery/' },
                { type: 'Resource', title: 'Navigating Home Care Guides', href: '/resources/navigating-home-care/' },
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
          <h2>Complex situations need someone who can see the whole picture and keep it together.</h2>
          <p>
            A conversation with our team helps clarify whether case management
            is what the situation needs — and what that would look like in practice.
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
