// app/how-care-starts/matching-caregivers/page.tsx
// Decision-stage page — step 4 in the How Care Starts funnel
// Target keyword: "home care caregiver matching toronto" / "how home care agencies match caregivers"
// Persona: family who has completed the assessment and is now focused on the most
// personal question — who is actually going to be in the home with their parent
// Tone: confident, specific, honest — this reader needs to trust the process
// Schema: Service + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Caregiver Matching | How Care Starts | Arcadia Home Care Toronto',
  description: 'How Arcadia matches caregivers to clients in Toronto and the GTA. A careful, considered process — not a scheduling decision. We match on clinical fit, personality, language, cultural background, and the specific demands of each situation.',
  alternates: { canonical: 'https://www.arcadiahomecare.ca/how-care-starts/matching-caregivers/' },
}

export default function CaregiverMatchingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': 'Caregiver Matching',
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
              'description': 'Careful, considered caregiver matching for home care clients in Toronto and the GTA — clinical fit, personality, language, and cultural background all considered.',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.arcadiahomecare.ca/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'How Care Starts', 'item': 'https://www.arcadiahomecare.ca/how-care-starts/' },
                { '@type': 'ListItem', 'position': 3, 'name': 'Caregiver Matching', 'item': 'https://www.arcadiahomecare.ca/how-care-starts/matching-caregivers/' },
              ],
            },
          ]),
        }}
      />

      <style>{`
        .page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }

        .hero { background: #1C2B3A; padding: 96px 24px 80px; }
        .hero-inner { max-width: 760px; margin: 0 auto; text-align: center; }
        .eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 14px; }
        .hero h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 600; color: #fff; line-height: 1.15; margin-bottom: 20px; }
        .hero p { font-size: 1.05rem; color: rgba(255,255,255,0.72); line-height: 1.8; max-width: 600px; margin: 0 auto 32px; }
        .hero-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .btn-red { background: #C8302A; color: #fff; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; transition: all 0.2s; box-shadow: 0 8px 20px rgba(200,48,42,0.3); display: inline-flex; align-items: center; gap: 8px; }
        .btn-red:hover { background: #a82520; transform: translateY(-2px); }
        .btn-outline { background: transparent; color: #fff; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; border: 1.5px solid rgba(255,255,255,0.35); transition: all 0.2s; display: inline-flex; align-items: center; }
        .btn-outline:hover { background: rgba(255,255,255,0.1); }

        .breadcrumb { background: #F7F3EE; border-bottom: 1px solid #E5E0D8; padding: 12px 24px; font-size: 13px; color: #6B7280; }
        .breadcrumb-inner { max-width: 1100px; margin: 0 auto; }
        .breadcrumb a { color: #1C2B3A; text-decoration: none; font-weight: 600; }
        .breadcrumb a:hover { color: #C8302A; }
        .breadcrumb span { margin: 0 8px; }

        .body-wrap { max-width: 1100px; margin: 0 auto; padding: 72px 24px; display: grid; grid-template-columns: 1fr 320px; gap: 64px; align-items: start; }
        @media (max-width: 900px) { .body-wrap { grid-template-columns: 1fr; } }

        .main-content h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.6rem, 2.5vw, 2.2rem); font-weight: 600; color: #1C2B3A; line-height: 1.25; margin: 48px 0 16px; }
        .main-content h2:first-child { margin-top: 0; }
        .main-content p { font-size: 1rem; color: #4B5563; line-height: 1.85; margin-bottom: 18px; }
        .main-content a { color: #C8302A; font-weight: 600; text-decoration: underline; text-decoration-color: rgba(200,48,42,0.3); text-underline-offset: 3px; transition: text-decoration-color 0.15s; }
        .main-content a:hover { text-decoration-color: #C8302A; }

        /* Matching factors */
        .factors-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0 32px; }
        @media (max-width: 640px) { .factors-grid { grid-template-columns: 1fr; } }
        .factor-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 12px; padding: 20px; }
        .factor-card-title { font-size: 14px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
        .factor-card-title::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #C8302A; flex-shrink: 0; }
        .factor-card-body { font-size: 0.875rem; color: #6B7280; line-height: 1.7; }

        /* Caregiver screening */
        .screening-list { list-style: none; padding: 0; margin: 0 0 32px; }
        .screening-item { display: flex; align-items: flex-start; gap: 14px; padding: 14px 0; border-bottom: 1px solid #E5E0D8; }
        .screening-item:first-child { padding-top: 0; }
        .screening-item:last-child { border-bottom: none; }
        .screening-check { width: 22px; height: 22px; border-radius: 50%; background: #1C2B3A; color: #fff; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
        .screening-text { font-size: 0.9375rem; color: #4B5563; line-height: 1.7; }
        .screening-text strong { color: #1C2B3A; }

        /* Condition-specific matching */
        .condition-match-grid { display: grid; grid-template-columns: 1fr; gap: 12px; margin: 24px 0 32px; }
        .condition-match-card { background: #F7F3EE; border: 1px solid #E5E0D8; border-left: 4px solid #C8302A; border-radius: 0 10px 10px 0; padding: 18px 22px; }
        .condition-match-title { font-size: 14px; font-weight: 700; color: #1C2B3A; margin-bottom: 4px; }
        .condition-match-body { font-size: 0.875rem; color: #6B7280; line-height: 1.65; }

        /* What if it isn't working */
        .honest-box { background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 14px; padding: 28px 32px; margin: 32px 0; }
        .honest-box-title { font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #1C2B3A; margin-bottom: 12px; }
        .honest-box p { font-size: 0.9375rem; color: #4B5563; line-height: 1.8; margin: 0; }

        /* FAQ inline */
        .faq-item { border-bottom: 1px solid #E5E0D8; padding: 20px 0; }
        .faq-item:first-child { padding-top: 0; }
        .faq-q { font-size: 1rem; font-weight: 700; color: #1C2B3A; margin-bottom: 10px; line-height: 1.5; }
        .faq-a { font-size: 0.9375rem; color: #4B5563; line-height: 1.8; }

        /* How care starts nav */
        .care-starts-nav { background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 14px; padding: 28px 32px; margin: 40px 0; }
        .care-starts-title { font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #1C2B3A; margin-bottom: 16px; }
        .care-starts-steps { display: flex; flex-direction: column; gap: 0; }
        .care-step { display: flex; align-items: center; gap: 14px; padding: 12px 0; border-bottom: 1px solid #E5E0D8; text-decoration: none; transition: color 0.15s; }
        .care-step:last-child { border-bottom: none; }
        .care-step-num { width: 28px; height: 28px; border-radius: 50%; background: #1C2B3A; color: #fff; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .care-step.active .care-step-num { background: #C8302A; }
        .care-step-text { font-size: 14px; font-weight: 600; color: #1C2B3A; }
        .care-step:hover .care-step-text { color: #C8302A; }
        .care-step.active .care-step-text { color: #C8302A; }
        .care-step-arrow { margin-left: auto; font-size: 13px; color: #C8302A; opacity: 0; transition: opacity 0.15s; }
        .care-step:hover .care-step-arrow { opacity: 1; }

        /* Mid CTA */
        .mid-cta { background: #1C2B3A; border-radius: 14px; padding: 32px; margin: 40px 0; }
        .mid-cta h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.5rem; font-weight: 600; color: #fff; margin-bottom: 8px; }
        .mid-cta p { font-size: 0.9rem; color: rgba(255,255,255,0.65); margin-bottom: 20px; line-height: 1.7; }
        .mid-cta-phone { font-size: 1.5rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 12px; }

        /* Sidebar */
        .sidebar { position: sticky; top: 100px; }
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

        /* Bottom CTA */
        .bottom-cta { background: #1C2B3A; padding: 80px 24px; text-align: center; }
        .bottom-cta h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; color: #fff; max-width: 680px; margin: 0 auto 14px; line-height: 1.2; }
        .bottom-cta p { color: rgba(255,255,255,0.65); font-size: 1rem; max-width: 500px; margin: 0 auto 32px; line-height: 1.8; }
        .bottom-cta-phone { font-size: 2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 20px; font-family: 'Cormorant Garamond', Georgia, serif; }
        .cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
      `}</style>

      <main className="page">

        {/* Hero */}
        <section className="hero">
          <div className="hero-inner">
            <p className="eyebrow">How Care Starts · Step 4</p>
            <h1>Caregiver Matching</h1>
            <p>
              The person who comes into your family member's home matters more
              than any other variable in how well care works. Arcadia's matching
              process is careful and considered — built on what the assessment
              revealed, not on who is available that week.
            </p>
            <div className="hero-actions">
              <a href="tel:8449770050" className="btn-red">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 2.5C2 8.299 5.701 12 11.5 12l.5-2.5-2.5-.5-.5 1c-2-1-3-2-4-4l1-.5L5.5 3 3 2.5z" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round"/>
                </svg>
                Call (844) 977-0050
              </a>
              <Link href="/how-care-starts/first-conversation/" className="btn-outline">Start with a Consultation</Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="breadcrumb-inner">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/how-care-starts/">How Care Starts</Link><span>›</span>
            Caregiver Matching
          </div>
        </nav>

        {/* Body */}
        <div className="body-wrap">
          <div className="main-content">

            <h2>Why matching matters as much as it does</h2>
            <p>
              Home care is delivered by a person, in someone's home, often during
              the most private moments of their day. The clinical skills of the
              caregiver matter — but so does their temperament, their communication
              style, their patience, and the particular kind of presence they bring
              into a room. A technically competent caregiver who is the wrong
              personality fit for a particular person can make receiving care harder
              than not receiving it at all.
            </p>
            <p>
              This is why Arcadia's matching process is not a scheduling decision.
              It is a considered process that uses everything learned during the
              care assessment — about the person, their history, how their condition
              presents, and what kind of relationship they tend to respond well to —
              to identify the right caregiver for the specific situation.
            </p>

            <h2>What Arcadia considers when matching</h2>

            <div className="factors-grid">
              {[
                {
                  title: 'Clinical skills and condition experience',
                  body: 'Whether the caregiver has specific experience with the condition involved — dementia, acquired brain injury, palliative care, frailty — and the training that goes with it.',
                },
                {
                  title: 'Personality and temperament',
                  body: 'Whether the caregiver\'s natural style — calm or engaging, quiet or conversational, structured or flexible — fits the way the person being cared for tends to respond.',
                },
                {
                  title: 'Language and cultural background',
                  body: 'Where language or cultural context is a meaningful factor in the care relationship, we consider it explicitly — not as an afterthought.',
                },
                {
                  title: 'Communication style',
                  body: 'How the caregiver communicates — with the person, with the family, and with the broader care team — and whether that style fits what the situation requires.',
                },
                {
                  title: 'Physical capability and mobility support',
                  body: 'Where the person requires physical assistance — transfers, mobility support, repositioning — whether the caregiver can provide that safely and confidently.',
                },
                {
                  title: 'Scheduling reliability and consistency',
                  body: 'For clients where consistency matters greatly — particularly those with dementia or significant anxiety — we prioritise caregivers whose schedule allows them to maintain the same visits reliably.',
                },
              ].map((item, i) => (
                <div key={i} className="factor-card">
                  <div className="factor-card-title">{item.title}</div>
                  <div className="factor-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            <h2>How Arcadia screens and prepares caregivers</h2>
            <p>
              Every caregiver working with Arcadia clients goes through a thorough
              screening process before their first assignment:
            </p>

            <ul className="screening-list">
              {[
                { strong: 'Vulnerable Sector Police Check', body: ' — completed before any client contact.' },
                { strong: 'Reference checks', body: ' — with previous employers or supervisors, not just personal references.' },
                { strong: 'Skills and experience verification', body: ' — PSW certification, RSW qualifications, or other relevant credentials confirmed.' },
                { strong: 'In-person interview', body: ' — assessing communication, temperament, and suitability for the types of care Arcadia provides.' },
                { strong: 'Orientation and ongoing training', body: ' — including condition-specific training for caregivers assigned to dementia, ABI, or palliative clients.' },
                { strong: 'Supervised introduction', body: ' — for complex cases, new caregivers are introduced with oversight before working independently.' },
              ].map((item, i) => (
                <li key={i} className="screening-item">
                  <div className="screening-check">✓</div>
                  <div className="screening-text"><strong>{item.strong}</strong>{item.body}</div>
                </li>
              ))}
            </ul>

            <h2>How matching works differently for complex conditions</h2>
            <p>
              For clients with complex conditions, matching involves additional
              considerations that go beyond the standard factors:
            </p>

            <div className="condition-match-grid">
              {[
                {
                  title: 'Dementia and Alzheimer\'s',
                  body: 'Caregivers are selected for patience, calm under pressure, and specific training in dementia communication. We also consider how the person\'s dementia presents — whether they tend toward anxiety, agitation, or withdrawal — and match accordingly. Consistency of the same caregiver is treated as a clinical priority.',
                },
                {
                  title: 'Acquired Brain Injury',
                  body: 'RSW selection involves the RSW Manager, who reviews the rehabilitation goals and the client\'s behavioural and cognitive profile before making a match. Temperament compatibility is particularly important for ABI clients with behavioural presentations.',
                },
                {
                  title: 'Palliative Care',
                  body: 'Caregivers in palliative situations are selected specifically for this work — for their experience, emotional capacity, and ability to be present without agenda in difficult circumstances. Not every caregiver is suited to palliative care, and we do not assign those who are not.',
                },
                {
                  title: 'Frailty and Fall Risk',
                  body: 'Physical capability and safe handling skills are weighted more heavily. We also consider confidence and consistency — a caregiver whose presence reduces rather than increases the person\'s anxiety about their own mobility.',
                },
              ].map((item, i) => (
                <div key={i} className="condition-match-card">
                  <div className="condition-match-title">{item.title}</div>
                  <div className="condition-match-body">{item.body}</div>
                </div>
              ))}
            </div>

            {/* Mid CTA */}
            <div className="mid-cta">
              <h3>Questions about how matching works?</h3>
              <p>
                Our team is happy to walk you through the process before you commit
                to anything — including what to expect from the first visit and how
                we handle situations where a match needs to change.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            </div>

            <h2>How Arcadia introduces the caregiver</h2>
            <p>
              Before the first visit, the caregiver is briefed thoroughly on the
              person — their history, routines, preferences, how their condition
              presents, and any clinical considerations. We do not send someone
              into a home without preparation and expect them to figure it out.
            </p>
            <p>
              For clients where the introduction matters particularly — those with
              dementia, significant anxiety, or a history of resisting help — we
              may arrange a brief overlap visit where a familiar Arcadia team
              member is present during the first visit to help the introduction
              go smoothly.
            </p>

            <div className="honest-box">
              <div className="honest-box-title">When a match is not working</div>
              <p>
                Not every match works as intended, and we would rather know about
                it early than have a family manage an uncomfortable situation in
                silence. If a caregiver is not the right fit — for any reason —
                we address it directly. We listen to what the family observes,
                take it seriously, and make changes where warranted. We also
                tell families honestly when the issue is one we can fix and when
                it is something more complex.
              </p>
            </div>

            <h2>Common questions about caregiver matching</h2>

            {[
              {
                q: 'Can we meet the caregiver before they start?',
                a: 'In most cases, yes — particularly for situations where the introduction is likely to be sensitive. We can arrange a brief introductory visit or video call before the first care visit begins.',
              },
              {
                q: 'What if my parent refuses to accept the caregiver?',
                a: 'Resistance to a new person in the home is common, particularly for those with dementia or a strong sense of independence. We build the introduction gradually where possible, and we have experience navigating the kinds of resistance families most often encounter. If resistance persists, we review the match and consider whether a different approach or a different caregiver would help.',
              },
              {
                q: 'Can we request a specific type of caregiver — language, gender, background?',
                a: 'Yes. Preferences around language, cultural background, gender, and communication style are all part of the matching brief. We take them seriously, though we will be honest if a specific combination of factors limits the available pool.',
              },
              {
                q: 'What happens if our regular caregiver is unavailable?',
                a: 'We work hard to ensure consistent coverage and minimize disruptions. When a regular caregiver is unavailable, we use a replacement who has been briefed on the client and the care plan — not an unfamiliar person sent cold.',
              },
              {
                q: 'How long does matching take?',
                a: 'For straightforward situations, matching can happen within a few days of the care plan being agreed. For complex cases — particularly those requiring specific condition experience or a very specific personality fit — it may take a little longer to find the right person. We give honest timelines rather than promising speed we cannot deliver.',
              },
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <div className="faq-q">{faq.q}</div>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}

            {/* How care starts nav */}
            <div className="care-starts-nav" style={{ marginTop: 48 }}>
              <div className="care-starts-title">How Care Starts at Arcadia</div>
              <div className="care-starts-steps">
                {[
                  { num: '1', label: 'First Conversation', href: '/how-care-starts/first-conversation/', active: false },
                  { num: '2', label: 'Care Assessment', href: '/how-care-starts/care-assessment/', active: false },
                  { num: '3', label: 'Your Care Plan', href: '/how-care-starts/', active: false },
                  { num: '4', label: 'Caregiver Matching', href: '/how-care-starts/matching-caregivers/', active: true },
                  { num: '5', label: 'Care Begins', href: '/how-care-starts/care-begins/', active: false },
                  { num: '6', label: 'Ongoing Support', href: '/how-care-starts/', active: false },
                ].map((step, i) => (
                  <Link key={i} href={step.href} className={`care-step${step.active ? ' active' : ''}`}>
                    <div className="care-step-num">{step.num}</div>
                    <div className="care-step-text">{step.label}</div>
                    <span className="care-step-arrow">→</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-cta">
              <h3>Talk to our team</h3>
              <p>We are happy to explain the matching process before you commit to anything.</p>
              <a href="tel:8449770050" className="sidebar-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red-sm">Book a Free Consultation</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">How Care Starts</div>
              <Link href="/how-care-starts/first-conversation/" className="sidebar-link">First Conversation</Link>
              <Link href="/how-care-starts/care-assessment/" className="sidebar-link">Care Assessment</Link>
              <Link href="/how-care-starts/" className="sidebar-link">Your Care Plan</Link>
              <Link href="/how-care-starts/care-begins/" className="sidebar-link">Care Begins</Link>
              <Link href="/how-care-starts/" className="sidebar-link">Ongoing Support</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Matching for Specific Conditions</div>
              <Link href="/conditions/dementia-care-at-home/" className="sidebar-link">Dementia Care at Home</Link>
              <Link href="/conditions/acquired-brain-injury-support/" className="sidebar-link">Acquired Brain Injury</Link>
              <Link href="/conditions/palliative-serious-illness/" className="sidebar-link">Palliative & Serious Illness</Link>
              <Link href="/conditions/frailty-fall-prevention/" className="sidebar-link">Frailty & Fall Prevention</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Services</div>
              <Link href="/our-services/dementia-alzheimers-home-care/" className="sidebar-link">Dementia & Alzheimer's Care</Link>
              <Link href="/our-services/personal-support-daily-living/" className="sidebar-link">Personal Support & Daily Living</Link>
              <Link href="/our-services/companion-care/" className="sidebar-link">Companion Care</Link>
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <section className="bottom-cta">
          <p className="eyebrow" style={{ textAlign: 'center', color: '#C8302A' }}>Next Step</p>
          <h2>The right caregiver makes everything else work better.</h2>
          <p>
            A conversation with our team can walk you through how matching works
            for your specific situation — and what to expect when care begins.
          </p>
          <a href="tel:8449770050" className="bottom-cta-phone">(844) 977-0050</a>
          <div className="cta-actions">
            <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            <Link href="/how-care-starts/care-begins/" className="btn-outline">Next: Care Begins →</Link>
          </div>
        </section>

      </main>
    </>
  )
}
