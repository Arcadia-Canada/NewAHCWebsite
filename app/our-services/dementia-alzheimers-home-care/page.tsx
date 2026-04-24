// app/our-services/dementia-alzheimers-home-care/page.tsx
// Consideration-stage service page
// Target keyword: "dementia home care agency toronto" / "alzheimers home care toronto"
// Persona: family who understands the condition, has decided home care is the path,
// and is now evaluating Arcadia as a provider — comparing, assessing trust
// Distinct from condition page: Arcadia's specific approach, caregivers, process,
// what to expect, how to start — not a general explanation of dementia
// Schema: Service + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/ui/AnimatedHero'
import { getServiceImages } from '@/lib/serviceImages'
import ServiceMidImage from '@/components/ui/ServiceMidImage'

const images = getServiceImages('dementia-alzheimers')

export const metadata: Metadata = {
  title: "Dementia & Alzheimer's Home Care Toronto | Arcadia Home Care",
  description: "Specialized dementia and Alzheimer's home care in Toronto and the GTA. Arcadia has provided clinically guided, compassionate dementia care since 2005 — matching families with trained, consistent caregivers who understand what this kind of care actually requires.",
  alternates: { canonical: 'https://www.arcadiahomecare.ca/our-services/dementia-alzheimers-home-care/' },
}

const faqs = [
  {
    q: 'How does Arcadia train caregivers specifically for dementia and Alzheimer\'s care?',
    a: 'Arcadia\'s dementia caregivers receive training in dementia-specific communication techniques, behaviour management strategies, safe home environments, and person-centred care approaches. Training is ongoing — not just at onboarding — and is supplemented by supervision from our Clinical Director. We also match caregivers to clients based on personality, language, and temperament, not just availability.',
  },
  {
    q: 'How does caregiver matching work for someone with dementia?',
    a: 'Matching for dementia care involves more than clinical compatibility. We consider the person\'s history, preferences, cultural background, language, and the specific way their dementia presents. We also factor in temperament — some people with dementia respond well to a calm, quiet presence; others do better with someone more engaging and active. We take time to understand the individual before making a match, and we are transparent when a match is not working.',
  },
  {
    q: 'What happens when a caregiver is unavailable or needs to be replaced?',
    a: 'We work hard to maintain consistency and minimize caregiver changes, because we know how disruptive changes are for someone with dementia. When a change is unavoidable, we introduce the new caregiver with an overlap visit where possible, brief the incoming caregiver thoroughly on the client\'s routines and preferences, and communicate clearly with the family throughout.',
  },
  {
    q: 'Can Arcadia provide care for someone with dementia who also has other medical conditions?',
    a: 'Yes. Many Arcadia clients have complex needs — dementia alongside diabetes, heart conditions, mobility limitations, or palliative needs. Our Clinical Director reviews care plans for complex cases, and we coordinate with the family physician and any other providers involved. We do not offer nursing care, but we work effectively alongside nurses and other clinical team members.',
  },
  {
    q: 'How do you handle aggressive or challenging behaviour?',
    a: 'Behavioural changes in dementia — including agitation, resistance to care, verbal or physical outbursts — are clinical symptoms, not character traits. Our caregivers are trained to respond calmly, avoid escalation, and use redirection and validation techniques rather than confrontation or restraint. If a behavioural pattern is persistent or escalating, we flag it to the family and the clinical team rather than simply managing it in isolation.',
  },
  {
    q: 'What does dementia home care cost, and is any of it covered by OHIP or insurance?',
    a: 'OHIP does not cover private home care directly, but Ontario Health atHome provides publicly funded PSW and nursing hours for eligible clients — which can reduce the hours of private care needed. Some extended health benefit plans and veterans\' benefits cover home care. Cost depends on the level of care, hours, and whether an RSW or PSW is most appropriate. We provide transparent pricing and are happy to help families understand what funding may be available before they commit to anything.',
  },
]

const whatWeProvide = [
  {
    title: 'Personal care and daily routines',
    body: 'Bathing, dressing, grooming, and hygiene assistance — provided at a pace and in a sequence that respects the person\'s established routines. Dementia caregivers know that routine is not a preference, it is a clinical need.',
  },
  {
    title: 'Dementia-specific communication',
    body: 'Validation therapy, gentle redirection, and communication approaches that reduce anxiety and agitation rather than escalate it. The ability to stay calm and connected when someone is confused or distressed is one of the most important skills a dementia caregiver can have.',
  },
  {
    title: 'Medication reminders',
    body: 'Consistent prompting at the right times, monitoring for missed doses, and communicating changes to the family or care team.',
  },
  {
    title: 'Meals and nutrition',
    body: 'Preparing appropriate meals, sitting with the person during mealtimes, monitoring intake, and adapting to changes in appetite and swallowing ability.',
  },
  {
    title: 'Supervision and safety',
    body: 'Monitoring for wandering, unsafe behaviours, and home hazards — and maintaining a safe, calm, predictable environment that reduces confusion and risk.',
  },
  {
    title: 'Meaningful engagement',
    body: 'Tailored activities, music, reminiscence, walks, and conversation that keeps the person engaged and connected — based on what they have always enjoyed, not a generic activity program.',
  },
  {
    title: 'Overnight and 24-hour care',
    body: 'When nighttime supervision becomes necessary — whether for wandering, sundowning, or safety — Arcadia provides overnight and round-the-clock care. Continuity between day and night caregivers is built into the care plan.',
  },
  {
    title: 'Respite for family caregivers',
    body: 'Scheduled, consistent relief so family caregivers can rest, work, and maintain their own wellbeing. This is part of the care plan, not an afterthought.',
  },
]

export default function DementiaAlzheimersHomeCarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': "Dementia & Alzheimer's Home Care",
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
              'description': "Specialized dementia and Alzheimer's home care for families in Toronto and the GTA.",
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
                { '@type': 'ListItem', 'position': 3, 'name': "Dementia & Alzheimer's Home Care", 'item': 'https://www.arcadiahomecare.ca/our-services/dementia-alzheimers-home-care/' },
              ],
            },
          ]),
        }}
      />

      <style>{`
        .service-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }

        .service-eyebrow {
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #C8302A; margin-bottom: 14px;
        }
        .btn-red {
          background: #C8302A; color: #fff; padding: 14px 28px;
          border-radius: 8px; font-size: 15px; font-weight: 700;
          text-decoration: none; transition: all 0.2s;
          box-shadow: 0 8px 20px rgba(200,48,42,0.3);
          display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-red:hover { background: #a82520; transform: translateY(-2px); }
        .btn-outline {
          background: transparent; color: #fff; padding: 14px 28px;
          border-radius: 8px; font-size: 15px; font-weight: 700;
          text-decoration: none; border: 1.5px solid rgba(255,255,255,0.35);
          transition: all 0.2s;
          display: inline-flex; align-items: center;
        }
        .btn-outline:hover { background: rgba(255,255,255,0.1); }

        /* Breadcrumb */
        .breadcrumb {
          background: #F7F3EE; border-bottom: 1px solid #E5E0D8;
          padding: 12px 24px; font-size: 13px; color: #6B7280;
        }
        .breadcrumb-inner { max-width: 1100px; margin: 0 auto; }
        .breadcrumb a { color: #1C2B3A; text-decoration: none; font-weight: 600; }
        .breadcrumb a:hover { color: #C8302A; }
        .breadcrumb span { margin: 0 8px; }

        /* Body layout */
        .service-body { max-width: 1100px; margin: 0 auto; padding: 72px 24px; display: grid; grid-template-columns: 1fr 320px; gap: 64px; align-items: start; }
        @media (max-width: 900px) { .service-body { grid-template-columns: 1fr; } }

        .service-article h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 600; color: #1C2B3A; line-height: 1.25; margin: 48px 0 16px;
        }
        .service-article h2:first-child { margin-top: 0; }
        .service-article p {
          font-size: 1rem; color: #4B5563; line-height: 1.85; margin-bottom: 18px;
        }
        .service-article a {
          color: #C8302A; font-weight: 600; text-decoration: underline;
          text-decoration-color: rgba(200,48,42,0.3); text-underline-offset: 3px;
          transition: text-decoration-color 0.15s;
        }
        .service-article a:hover { text-decoration-color: #C8302A; }

        /* What we provide grid */
        .provides-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0 32px; }
        @media (max-width: 640px) { .provides-grid { grid-template-columns: 1fr; } }
        .provides-card {
          background: #FAFAF8; border: 1px solid #E5E0D8;
          border-radius: 12px; padding: 20px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .provides-card:hover { border-color: #C8302A; box-shadow: 0 6px 20px rgba(28,43,58,0.08); }
        .provides-card-title { font-size: 14px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
        .provides-card-title::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #C8302A; flex-shrink: 0; }
        .provides-card-body { font-size: 0.875rem; color: #6B7280; line-height: 1.7; }

        /* Process steps */
        .process-steps { display: flex; flex-direction: column; gap: 0; margin: 24px 0 32px; }
        .process-step { display: flex; gap: 20px; padding: 24px 0; border-bottom: 1px solid #E5E0D8; }
        .process-step:last-child { border-bottom: none; }
        .process-num {
          width: 40px; height: 40px; border-radius: 50%;
          background: #1C2B3A; color: #fff;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.1rem; font-weight: 600;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .process-content { flex: 1; }
        .process-title { font-size: 15px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; }
        .process-body { font-size: 0.9rem; color: #6B7280; line-height: 1.7; }

        /* Differentiators */
        .diff-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin: 24px 0 32px; }
        .diff-card {
          background: #FAFAF8; border: 1px solid #E5E0D8;
          border-left: 4px solid #C8302A; border-radius: 0 12px 12px 0; padding: 20px 24px;
        }
        .diff-card-title { font-size: 15px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; }
        .diff-card-body { font-size: 0.9rem; color: #6B7280; line-height: 1.7; }

        /* Mid CTA */
        .mid-cta { background: #1C2B3A; border-radius: 14px; padding: 32px; margin: 40px 0; }
        .mid-cta h3 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.5rem; font-weight: 600; color: #fff; margin-bottom: 8px;
        }
        .mid-cta p { font-size: 0.9rem; color: rgba(255,255,255,0.65); margin-bottom: 20px; line-height: 1.7; }
        .mid-cta-phone {
          font-size: 1.5rem; font-weight: 700; color: #C8302A;
          text-decoration: none; display: block; margin-bottom: 12px;
        }

        /* FAQ */
        .faq-section { margin-top: 48px; }
        .faq-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 12px; }
        .faq-section h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 600; color: #1C2B3A; margin-bottom: 28px;
        }
        .faq-item { border-bottom: 1px solid #E5E0D8; padding: 20px 0; }
        .faq-q { font-size: 1rem; font-weight: 700; color: #1C2B3A; margin-bottom: 10px; line-height: 1.5; }
        .faq-a { font-size: 0.9375rem; color: #4B5563; line-height: 1.8; }

        /* Sidebar */
        .service-sidebar { position: sticky; top: 100px; }
        .sidebar-cta { background: #1C2B3A; border-radius: 14px; padding: 28px; text-align: center; margin-bottom: 20px; }
        .sidebar-cta h3 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.3rem; font-weight: 600; color: #fff; margin-bottom: 8px;
        }
        .sidebar-cta p { font-size: 0.875rem; color: rgba(255,255,255,0.6); margin-bottom: 16px; line-height: 1.65; }
        .sidebar-phone { font-size: 1.2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 12px; }
        .btn-red-sm {
          background: #C8302A; color: #fff; padding: 11px 20px;
          border-radius: 8px; font-size: 13px; font-weight: 700;
          text-decoration: none; display: inline-flex; align-items: center; transition: background 0.2s;
        }
        .btn-red-sm:hover { background: #a82520; }
        .sidebar-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 14px; padding: 28px; margin-bottom: 20px; }
        .sidebar-card-title { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #C8302A; margin-bottom: 16px; }
        .sidebar-link {
          display: flex; align-items: center; gap: 8px;
          font-size: 14px; font-weight: 600; color: #1C2B3A;
          text-decoration: none; padding: 10px 0;
          border-bottom: 1px solid #F0EBE3; transition: color 0.15s;
        }
        .sidebar-link:last-child { border-bottom: none; }
        .sidebar-link:hover { color: #C8302A; }
        .sidebar-link::before { content: '→'; color: #C8302A; font-size: 13px; }

        /* Related section */
        .related-section { background: #F7F3EE; border-top: 1px solid #E5E0D8; padding: 56px 24px; }
        .related-inner { max-width: 1100px; margin: 0 auto; }
        .related-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 10px; }
        .related-inner h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 600; color: #1C2B3A; margin-bottom: 28px;
        }
        .related-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        @media (max-width: 768px) { .related-grid { grid-template-columns: 1fr; } }
        .related-card {
          background: #fff; border: 1px solid #E5E0D8; border-radius: 12px;
          padding: 22px; text-decoration: none; transition: border-color 0.2s, box-shadow 0.2s;
        }
        .related-card:hover { border-color: #C8302A; box-shadow: 0 6px 20px rgba(28,43,58,0.08); }
        .related-card-type { font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #C8302A; margin-bottom: 8px; }
        .related-card-title { font-size: 15px; font-weight: 700; color: #1C2B3A; line-height: 1.4; }
        .related-card-arrow { font-size: 13px; color: #C8302A; margin-top: 10px; display: block; }

        /* Bottom CTA */
        .bottom-cta { background: #1C2B3A; padding: 80px 24px; text-align: center; }
        .bottom-cta h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600; color: #fff; max-width: 680px;
          margin: 0 auto 14px; line-height: 1.2;
        }
        .bottom-cta p { color: rgba(255,255,255,0.65); font-size: 1rem; max-width: 500px; margin: 0 auto 32px; line-height: 1.8; }
        .bottom-cta-phone { font-size: 2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 20px; font-family: 'Cormorant Garamond', Georgia, serif; }
        .cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
      `}</style>

      <main className="service-page">

        {/* Hero */}
        <AnimatedHero
          eyebrow="Our Services · Toronto & GTA"
          title="Dementia & Alzheimer's Home Care"
          subtitle="Arcadia has specialized in dementia and Alzheimer's home care since 2005 — not as one service among many, but as a core clinical focus. We match families with trained, consistent caregivers who understand what this kind of care actually requires."
          imageSrc="/images/services/dementia-alzheimers.webp"
          imageAlt="An older adult and a younger woman sit together at a wooden table, smiling as they look at a laptop; she gently assists with a card and notebook nearby in a bright home setting"
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

        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="breadcrumb-inner">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/our-services/">Our Services</Link><span>›</span>
            Dementia & Alzheimer's Home Care
          </div>
        </nav>

        {/* Body + Sidebar */}
        <div className="service-body">
          <article className="service-article">

            <h2>What Arcadia's dementia home care actually involves</h2>
            <p>
              Dementia care at home is not personal care with a dementia label on it.
              It requires caregivers who understand how dementia affects behaviour,
              communication, and daily function — and who can adapt their approach
              as the condition progresses. It requires consistency, because familiar
              faces and routines are not a preference for someone with dementia, they
              are a clinical necessity. And it requires oversight — someone who can
              see the bigger picture and adjust the care plan as things change.
            </p>
            <p>
              Arcadia provides all three. Here is what a dementia care engagement
              typically includes:
            </p>

            <div className="provides-grid">
              {whatWeProvide.map((item, i) => (
                <div key={i} className="provides-card">
                  <div className="provides-card-title">{item.title}</div>
                  <div className="provides-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            <h2>How the Arcadia dementia care process works</h2>
            <p>
              Getting dementia care right requires more than sending a caregiver to
              an address. Here is how Arcadia approaches it from the first conversation
              through to ongoing care:
            </p>

            <div className="process-steps">
              {[
                {
                  num: '1',
                  title: 'Initial conversation — no assessment form required',
                  body: 'We start with a phone or in-person conversation. We listen to what is happening, what has been tried, what matters to the family and the person with dementia. This is not a sales call. It is a clinical intake — and it helps us understand whether and how we can help before anyone commits to anything.',
                },
                {
                  num: '2',
                  title: 'Care assessment in the home',
                  body: 'A member of our clinical team visits the home to assess the person\'s current function, the home environment, the family\'s situation, and the specific challenges being faced. The assessment informs a care plan that is built around the individual — not a template.',
                },
                {
                  num: '3',
                  title: 'Caregiver matching',
                  body: 'We select caregivers based on clinical fit, personality, language, cultural background, and temperament. For dementia care especially, this takes time and care. We brief the caregiver thoroughly on the person before the first visit — their history, preferences, routines, and how their dementia presents.',
                },
                {
                  num: '4',
                  title: 'Care begins — with close monitoring',
                  body: 'The first two weeks are the most important. We check in regularly with both the family and the caregiver, and we are prepared to adjust quickly if something is not working. The goal is a stable, trusted care relationship — not a placement that gets set and forgotten.',
                },
                {
                  num: '5',
                  title: 'Ongoing review as the condition progresses',
                  body: 'Dementia changes over time. Our Clinical Director reviews care plans regularly, and we initiate conversations with families when we see changes that suggest the plan needs to evolve. Families should not have to figure out that the care level has changed — we tell them.',
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

            {/* Mid CTA */}
            <div className="mid-cta">
              <h3>Ready to talk about care for your family?</h3>
              <p>
                No forms, no obligation. A conversation with our team helps
                clarify what level of support would make the biggest difference —
                and whether Arcadia is the right fit.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">
                Book a Free Consultation
              </Link>
            </div>

            <h2>What makes Arcadia different for dementia care</h2>
            <p>
              There are many home care providers in Toronto and the GTA. Here is
              what distinguishes Arcadia specifically for dementia and Alzheimer's care:
            </p>

            <div className="diff-grid">
              {[
                {
                  title: 'Dementia specialization since 2005 — not a sideline',
                  body: 'Arcadia was founded specifically to serve families navigating dementia and acquired brain injury. It is not a general home care agency that also offers dementia care. That specialization is reflected in how caregivers are trained, how care plans are built, and the clinical oversight that sits behind every case.',
                },
                {
                  title: 'Clinical oversight — not just scheduling',
                  body: 'Every Arcadia care plan for a dementia client is reviewed by our Clinical Director. Care is supervised, not just coordinated. When a caregiver flags a change in the client\'s behaviour or function, it goes to someone with the clinical knowledge to interpret it and act on it.',
                },
                {
                  title: 'Consistency as a clinical priority',
                  body: 'We build schedules around continuity and work hard to maintain it. Caregiver changes are managed carefully — with overlap visits, thorough briefings, and clear communication with the family. We know what changes cost someone with dementia, and we treat that knowledge seriously.',
                },
                {
                  title: 'Honest family communication throughout',
                  body: 'Families working with Arcadia do not have to wonder what is happening. We communicate proactively — when the care is going well and when something needs to change. We also tell families honestly when a situation has moved beyond what home care can safely support.',
                },
                {
                  title: 'A team that has been doing this for a long time',
                  body: 'Arcadia\'s growth has come almost entirely through word-of-mouth referrals from families and health professionals. That kind of sustained trust is built over 20 years of doing this work consistently well — not from a marketing budget.',
                },
              ].map((item, i) => (
                <div key={i} className="diff-card">
                  <div className="diff-card-title">{item.title}</div>
                  <div className="diff-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            <ServiceMidImage src={images.midImage} alt={images.midAlt} />

            <h2>Dementia and Alzheimer's home care across Toronto and the GTA</h2>
            <p>
              Arcadia provides dementia and Alzheimer's home care across{' '}
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
              and maximize publicly funded care, and to bridge the gaps where
              public funding does not cover what the situation requires. For families
              who are new to the Ontario system, our team can walk you through how
              it works and what to expect.
            </p>
            <p>
              If you are a health professional looking to refer a patient for
              dementia home care, our{' '}
              <Link href="/referral-form/">professional referral form</Link>{' '}
              is the fastest route.
            </p>

            {/* FAQ */}
            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions families ask before starting dementia home care</h2>
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
              <Link href="/conditions/dementia-care-at-home/" className="sidebar-link">Dementia & Alzheimer's Care</Link>
              <Link href="/conditions/caregiver-burnout-support/" className="sidebar-link">Caregiver Burnout Support</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Services</div>
              <Link href="/our-services/respite-care/" className="sidebar-link">Respite Care</Link>
              <Link href="/our-services/overnight-24-hour-care/" className="sidebar-link">Overnight & 24-Hour Care</Link>
              <Link href="/our-services/companion-care/" className="sidebar-link">Companion Care</Link>
              <Link href="/our-services/case-management/" className="sidebar-link">Case Management</Link>
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
            <h2>Related conditions and resources</h2>
            <div className="related-grid">
              {[
                { type: 'Condition', title: "Dementia & Alzheimer's Care", href: '/conditions/dementia-care-at-home/' },
                { type: 'Service', title: 'Respite Care', href: '/our-services/respite-care/' },
                { type: 'Resource', title: 'Dementia & Memory Care Guides', href: '/resources/dementia-memory-care/' },
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
          <h2>Dementia care at home works. The difference is in who provides it.</h2>
          <p>
            A conversation with our team helps you understand whether Arcadia is
            the right fit — and what care for your family would actually look like.
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
