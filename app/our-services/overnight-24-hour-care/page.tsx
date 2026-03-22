// app/our-services/overnight-24-hour-care/page.tsx
// Consideration-stage service page
// Target keyword: "overnight home care toronto" / "24 hour home care GTA"
// Persona A: family whose loved one needs nighttime supervision — wandering, falls,
// sundowning, palliative needs, or simply unsafe alone at night
// Persona B: exhausted family caregiver who is not sleeping because they are on alert
// Tone: practical, reassuring — this reader needs confidence, not persuasion
// Schema: Service + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Overnight & 24-Hour Home Care | Toronto & GTA | Arcadia Home Care',
  description: 'Overnight and 24-hour home care in Toronto and the GTA. Arcadia provides trained, consistent overnight caregivers for individuals who need nighttime supervision — and for family caregivers who need to sleep.',
  alternates: { canonical: 'https://arcadiahomecare.ca/our-services/overnight-24-hour-care/' },
}

const faqs = [
  {
    q: 'What is the difference between overnight care and 24-hour care?',
    a: 'Overnight care typically covers an evening-to-morning shift — usually around 10pm to 7am — providing supervision, safety monitoring, and assistance if the person wakes and needs help during the night. 24-hour care means continuous coverage around the clock, usually with two or more caregivers working in shifts. The right arrangement depends on how intensive the nighttime needs are and whether daytime support is also needed.',
  },
  {
    q: 'What does an overnight caregiver actually do during the night?',
    a: 'It depends on the person\'s needs. For some clients, the overnight caregiver is primarily present and alert — available if needed but not actively providing hands-on care through the night. For others — particularly those with dementia, palliative needs, or significant mobility challenges — the overnight caregiver may be assisting with toileting, repositioning, comfort care, or responding to distress multiple times during the night. We build the overnight plan around what the specific situation requires.',
  },
  {
    q: 'We have dementia-related nighttime wandering. Can Arcadia handle that?',
    a: 'Yes. Nighttime wandering is one of the most common reasons families contact Arcadia for overnight care. Our overnight caregivers for dementia clients are trained in safe redirection and de-escalation approaches — keeping the person calm and safe without confrontation or restraint. We also help families think through home environment adjustments that can reduce wandering risk alongside the caregiver presence.',
  },
  {
    q: 'I am the primary caregiver and I am not sleeping. How quickly can overnight support be arranged?',
    a: 'In most cases we can begin the process quickly after a first conversation — call us directly and we will give you an honest picture of what is possible. If the situation is urgent — if you are at a point where your own health is at risk from sleep deprivation — call us directly. We will prioritize the conversation and move as quickly as we can.',
  },
  {
    q: 'Can overnight care be part of a broader care plan that also includes daytime support?',
    a: 'Yes — and this is common. Many clients receive daytime personal support or companion care alongside overnight coverage. Arcadia coordinates the full care plan, ensures handover between day and night caregivers is clear, and maintains consistent communication with the family across all shifts.',
  },
  {
    q: 'How does Arcadia ensure overnight caregiver quality when family members are asleep?',
    a: 'Overnight caregivers are selected specifically for this work — the temperament and attentiveness required for overnight care is different from daytime caregiving. We brief them thoroughly before the first shift and conduct follow-up after initial nights. We also have clear protocols for what to do in an emergency — who to call, in what order, what to communicate to the family.',
  },
]

const whatWeProvide = [
  {
    title: 'Nighttime supervision and safety monitoring',
    body: 'Attentive presence through the night — monitoring for changes, responding to needs, and ensuring the person is safe without being woken unnecessarily.',
  },
  {
    title: 'Toileting and repositioning assistance',
    body: 'Helping the person get up safely during the night, assisting with toileting, and repositioning for comfort — particularly important for individuals with mobility limitations or skin breakdown risk.',
  },
  {
    title: 'Dementia and wandering support',
    body: 'Calm, trained response to nighttime confusion, agitation, and wandering — using redirection and reassurance approaches that keep the person safe without escalation.',
  },
  {
    title: 'Palliative and comfort care overnight',
    body: 'Consistent presence and comfort support through the night for individuals in palliative care — so neither the person nor the family is alone in the hours when a clinical team is unavailable.',
  },
  {
    title: 'Sleep restoration for family caregivers',
    body: 'Overnight coverage specifically so the family member can sleep uninterrupted — often one of the most practical forms of caregiver relief and one of the least used.',
  },
  {
    title: '24-hour continuous coverage',
    body: 'Around-the-clock care with coordinated caregiver shifts — for situations where the level of need requires someone present at all times.',
  },
  {
    title: 'Emergency response readiness',
    body: 'Clear protocols for medical emergencies during the night — who to call, how to communicate with the family, and what steps to take while waiting for assistance.',
  },
  {
    title: 'Handover to daytime team',
    body: 'A clear, structured handover at the end of every overnight shift — so the daytime caregiver or family member knows exactly what happened and what to watch for.',
  },
]

export default function OvernightCare24HourPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': 'Overnight & 24-Hour Home Care',
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
              'description': 'Overnight and 24-hour home care in Toronto and the GTA — trained, consistent caregivers for nighttime supervision and around-the-clock support.',
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
                { '@type': 'ListItem', 'position': 3, 'name': 'Overnight & 24-Hour Care', 'item': 'https://arcadiahomecare.ca/our-services/overnight-24-hour-care/' },
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

        /* Two-column reasons */
        .reasons-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 24px 0 32px; }
        @media (max-width: 640px) { .reasons-grid { grid-template-columns: 1fr; } }
        .reason-card { background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 10px; padding: 18px 20px; }
        .reason-card-title { font-size: 14px; font-weight: 700; color: #1C2B3A; margin-bottom: 4px; }
        .reason-card-body { font-size: 0.875rem; color: #6B7280; line-height: 1.65; }

        .provides-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0 32px; }
        @media (max-width: 640px) { .provides-grid { grid-template-columns: 1fr; } }
        .provides-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 12px; padding: 20px; transition: border-color 0.2s, box-shadow 0.2s; }
        .provides-card:hover { border-color: #C8302A; box-shadow: 0 6px 20px rgba(28,43,58,0.08); }
        .provides-card-title { font-size: 14px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
        .provides-card-title::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #C8302A; flex-shrink: 0; }
        .provides-card-body { font-size: 0.875rem; color: #6B7280; line-height: 1.7; }

        /* Overnight vs 24hr comparison */
        .compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0 32px; }
        @media (max-width: 600px) { .compare-grid { grid-template-columns: 1fr; } }
        .compare-card { border-radius: 12px; padding: 24px; }
        .compare-card.overnight { background: #1C2B3A; }
        .compare-card.full { background: #FAFAF8; border: 1px solid #E5E0D8; }
        .compare-label { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 8px; }
        .compare-card.overnight .compare-label { color: #C8302A; }
        .compare-card.full .compare-label { color: #6B7280; }
        .compare-title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.2rem; font-weight: 600; margin-bottom: 12px; }
        .compare-card.overnight .compare-title { color: #fff; }
        .compare-card.full .compare-title { color: #1C2B3A; }
        .compare-list { list-style: none; padding: 0; margin: 0; }
        .compare-list li { font-size: 0.875rem; line-height: 1.65; padding: 5px 0 5px 16px; position: relative; }
        .compare-card.overnight .compare-list li { color: rgba(255,255,255,0.7); }
        .compare-card.full .compare-list li { color: #6B7280; }
        .compare-list li::before { content: ''; position: absolute; left: 0; top: 11px; width: 6px; height: 6px; border-radius: 50%; }
        .compare-card.overnight .compare-list li::before { background: #C8302A; }
        .compare-card.full .compare-list li::before { background: #9CA3AF; }

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
              <h1>Overnight & 24-Hour Home Care</h1>
              <p>
                Some situations require someone to be present through the night.
                Whether it is a loved one who needs nighttime supervision, or a
                family caregiver who has not slept properly in weeks, Arcadia
                provides trained, consistent overnight care — seven days a week,
                across Toronto and the GTA.
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
                { icon: '🌙', title: 'Overnight care 7 days a week', body: 'Evening-to-morning coverage available every night of the week, including weekends and holidays.' },
                { icon: '🔄', title: '24-hour continuous coverage', body: 'Around-the-clock care with coordinated shifts for situations that require someone present at all times.' },
                { icon: '🧠', title: 'Experienced with complex nighttime needs', body: 'Including dementia wandering, palliative care, fall risk, and clients who require hands-on care through the night.' },
                { icon: '😴', title: 'Caregiver sleep restoration', body: 'Overnight coverage specifically so exhausted family caregivers can sleep without monitoring.' },
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
            Overnight & 24-Hour Care
          </div>
        </nav>

        {/* Body + Sidebar */}
        <div className="service-body">
          <article className="service-article">

            <h2>When overnight care becomes necessary</h2>
            <p>
              Overnight care is not always arranged in advance. Many families reach
              this point after a specific event — a fall in the night, a wandering
              episode, a medical change — that makes it clear that leaving someone
              alone through the hours from midnight to morning is no longer safe.
              Others arrive here more gradually, after months of interrupted sleep
              have taken their toll on a family caregiver who has been doing double
              duty as a nighttime monitor.
            </p>
            <p>
              Both are valid reasons to need overnight support, and both deserve
              a reliable response. Here are the most common situations that bring
              families to overnight care:
            </p>

            <div className="reasons-grid">
              {[
                { title: 'Dementia-related nighttime wandering', body: 'Nocturnal wandering is one of the most common and most dangerous aspects of mid-to-late stage dementia. Overnight supervision addresses it directly.' },
                { title: 'Sundowning and nighttime agitation', body: 'Anxiety, confusion, and distress that worsens in the evening — common in dementia — often requires a calm, trained presence through the night.' },
                { title: 'Fall risk during nighttime bathroom trips', body: 'Trips to the bathroom when drowsy and in the dark are among the most common times older adults fall. An overnight caregiver supervises those transitions.' },
                { title: 'Post-discharge recovery', body: 'The first nights home after a hospital stay can be among the more vulnerable — when fatigue, new medications, and unfamiliar routines all coincide.' },
                { title: 'Palliative care at home', body: 'Consistent presence through the night for individuals in palliative care — so the person and the family are never alone in those hours.' },
                { title: 'Family caregiver sleep deprivation', body: 'When the person providing daytime care is also on alert at night, their own health deteriorates. Overnight relief restores the capacity to keep going.' },
              ].map((item, i) => (
                <div key={i} className="reason-card">
                  <div className="reason-card-title">{item.title}</div>
                  <div className="reason-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            <h2>Overnight care vs 24-hour care — understanding the difference</h2>
            <p>
              The right arrangement depends on the intensity of the nighttime needs
              and whether daytime support is also required. Here is a plain
              comparison:
            </p>

            <div className="compare-grid">
              <div className="compare-card overnight">
                <div className="compare-label">Overnight Care</div>
                <div className="compare-title">Evening to morning. One shift.</div>
                <ul className="compare-list">
                  <li>Typically 10pm–7am or similar</li>
                  <li>One caregiver covers the night</li>
                  <li>Supervision, safety, and assistance as needed</li>
                  <li>Caregiver may sleep lightly if needs are minimal</li>
                  <li>Right for: fall risk, wandering, caregiver sleep restoration</li>
                </ul>
              </div>
              <div className="compare-card full">
                <div className="compare-label">24-Hour Care</div>
                <div className="compare-title">Around the clock. Coordinated shifts.</div>
                <ul className="compare-list">
                  <li>Two or more caregivers in rotating shifts</li>
                  <li>Continuous presence at all hours</li>
                  <li>Handover between shifts with clear briefing</li>
                  <li>Caregiver is always alert and available</li>
                  <li>Right for: intensive needs, palliative, complex conditions</li>
                </ul>
              </div>
            </div>

            <h2>What overnight and 24-hour care includes</h2>

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
              <h3>Situation urgent? Call us directly.</h3>
              <p>
                If you are at a point where overnight support is needed quickly —
                following a fall, a wandering episode, or because you simply cannot
                continue without sleep — call us. We will move as quickly as the
                situation requires.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">
                Book a Free Consultation
              </Link>
            </div>

            <h2>What to expect from Arcadia's overnight caregivers</h2>
            <p>
              Overnight caregiving requires a specific temperament — attentiveness
              without intrusiveness, calm in the face of nighttime distress, and
              the judgment to know when to act and when to let someone rest. Not
              every caregiver is suited to overnight work, and Arcadia selects
              overnight caregivers specifically for this role.
            </p>
            <p>
              Before the first overnight shift, the caregiver is briefed thoroughly
              on the person's routines, what typically happens during the night,
              any clinical considerations, and the emergency protocol. The first
              few nights are monitored closely — we check in with both the caregiver
              and the family to ensure the arrangement is working as intended.
            </p>
            <p>
              For overnight care involving{' '}
              <Link href="/conditions/dementia-care-at-home/">dementia</Link> or{' '}
              <Link href="/conditions/acquired-brain-injury-support/">acquired brain injury</Link>,
              caregivers receive additional preparation specific to those conditions.
              For{' '}
              <Link href="/our-services/palliative-home-care/">palliative overnight care</Link>,
              we coordinate with the palliative care team to ensure the overnight
              caregiver is working within the established comfort plan.
            </p>
            <p>
              Family caregivers who need overnight relief as part of a broader
              respite arrangement can read more about how Arcadia structures{' '}
              <Link href="/our-services/respite-care/">respite care</Link>.
            </p>

            <h2>Overnight and 24-hour care across Toronto and the GTA</h2>
            <p>
              Arcadia provides overnight and 24-hour home care across{' '}
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
              <h2>Questions families ask about overnight and 24-hour care</h2>
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
              <div className="sidebar-card-title">Related Conditions</div>
              <Link href="/conditions/dementia-care-at-home/" className="sidebar-link">Dementia Care at Home</Link>
              <Link href="/conditions/palliative-serious-illness/" className="sidebar-link">Palliative & Serious Illness</Link>
              <Link href="/conditions/frailty-fall-prevention/" className="sidebar-link">Frailty & Fall Prevention</Link>
              <Link href="/conditions/caregiver-burnout-support/" className="sidebar-link">Caregiver Burnout Support</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Services</div>
              <Link href="/our-services/respite-care/" className="sidebar-link">Respite Care</Link>
              <Link href="/our-services/palliative-home-care/" className="sidebar-link">Palliative Home Care</Link>
              <Link href="/our-services/dementia-alzheimers-home-care/" className="sidebar-link">Dementia & Alzheimer's Care</Link>
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
            <h2>Related services and conditions</h2>
            <div className="related-grid">
              {[
                { type: 'Service', title: 'Respite Care', href: '/our-services/respite-care/' },
                { type: 'Service', title: 'Palliative Home Care', href: '/our-services/palliative-home-care/' },
                { type: 'Condition', title: 'Dementia Care at Home', href: '/conditions/dementia-care-at-home/' },
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
          <h2>Nights should not be the hardest part.</h2>
          <p>
            Whether the need is nighttime supervision, caregiver sleep restoration,
            or around-the-clock coverage, a conversation with our team helps
            clarify what arrangement would actually work.
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
