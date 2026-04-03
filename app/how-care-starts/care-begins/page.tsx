// app/how-care-starts/care-begins/page.tsx
// Decision-stage page — step 5 in the How Care Starts funnel
// Target keyword: "starting home care toronto" / "first week home care GTA"
// Persona: family who has agreed to care and is about to have a caregiver
// in the home for the first time — anxious about the transition, not about
// whether to proceed
// Tone: practical, reassuring, specific — answers the questions families
// have after they say yes
// Schema: Service + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Care Begins: First Week | Arcadia | Toronto',
  description: 'What to expect when home care begins with Arcadia in Toronto and the GTA. The first visit, the first week, and how Arcadia monitors and adjusts care in the early stages to make sure it is working.',
  alternates: { canonical: 'https://www.arcadiahomecare.ca/how-care-starts/care-begins/' },
}

export default function CareBeginsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': 'Home Care — First Week',
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
              'description': 'What to expect in the first week of home care with Arcadia — the first visit, early monitoring, and how adjustments are made.',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.arcadiahomecare.ca/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'How Care Starts', 'item': 'https://www.arcadiahomecare.ca/how-care-starts/' },
                { '@type': 'ListItem', 'position': 3, 'name': 'Care Begins', 'item': 'https://www.arcadiahomecare.ca/how-care-starts/care-begins/' },
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

        /* Timeline */
        .timeline { display: flex; flex-direction: column; gap: 0; margin: 24px 0 32px; }
        .timeline-item { display: flex; gap: 20px; padding: 28px 0; border-bottom: 1px solid #E5E0D8; }
        .timeline-item:last-child { border-bottom: none; }
        .timeline-marker { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; width: 44px; }
        .timeline-dot { width: 44px; height: 44px; border-radius: 50%; background: #1C2B3A; color: #fff; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 0.8rem; font-weight: 600; display: flex; align-items: center; justify-content: center; flex-shrink: 0; text-align: center; line-height: 1.2; padding: 4px; }
        .timeline-content { flex: 1; }
        .timeline-title { font-size: 16px; font-weight: 700; color: #1C2B3A; margin-bottom: 8px; }
        .timeline-body { font-size: 0.9rem; color: #6B7280; line-height: 1.75; }

        /* What Arcadia monitors */
        .monitor-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 24px 0 32px; }
        @media (max-width: 600px) { .monitor-grid { grid-template-columns: 1fr; } }
        .monitor-card { background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 10px; padding: 16px 18px; }
        .monitor-card-title { font-size: 13px; font-weight: 700; color: #1C2B3A; margin-bottom: 4px; }
        .monitor-card-body { font-size: 0.85rem; color: #6B7280; line-height: 1.6; }

        /* What families can do */
        .family-list { list-style: none; padding: 0; margin: 0 0 32px; }
        .family-item { display: flex; gap: 14px; align-items: flex-start; padding: 14px 0; border-bottom: 1px solid #E5E0D8; }
        .family-item:first-child { padding-top: 0; }
        .family-item:last-child { border-bottom: none; }
        .family-dot { width: 8px; height: 8px; border-radius: 50%; background: #C8302A; flex-shrink: 0; margin-top: 6px; }
        .family-text { font-size: 0.9375rem; color: #4B5563; line-height: 1.7; }
        .family-text strong { color: #1C2B3A; }

        /* Normal vs flag box */
        .normal-flag-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0 32px; }
        @media (max-width: 600px) { .normal-flag-grid { grid-template-columns: 1fr; } }
        .normal-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 12px; padding: 22px; }
        .flag-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 12px; padding: 22px; }
        .nf-label { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 12px; }
        .normal-card .nf-label { color: #6B7280; }
        .flag-card .nf-label { color: #C8302A; }
        .nf-list { list-style: none; padding: 0; margin: 0; }
        .nf-list li { font-size: 0.875rem; color: #4B5563; line-height: 1.65; padding: 6px 0 6px 18px; position: relative; border-bottom: 1px solid #F0EBE3; }
        .nf-list li:last-child { border-bottom: none; }
        .nf-list li::before { content: ''; position: absolute; left: 0; top: 13px; width: 6px; height: 6px; border-radius: 50%; }
        .normal-card .nf-list li::before { background: #9CA3AF; }
        .flag-card .nf-list li::before { background: #C8302A; }

        /* FAQ inline */
        .faq-item { border-bottom: 1px solid #E5E0D8; padding: 20px 0; }
        .faq-item:first-child { padding-top: 0; }
        .faq-q { font-size: 1rem; font-weight: 700; color: #1C2B3A; margin-bottom: 10px; line-height: 1.5; }
        .faq-a { font-size: 0.9375rem; color: #4B5563; line-height: 1.8; }

        /* Mid CTA */
        .mid-cta { background: #1C2B3A; border-radius: 14px; padding: 32px; margin: 40px 0; }
        .mid-cta h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.5rem; font-weight: 600; color: #fff; margin-bottom: 8px; }
        .mid-cta p { font-size: 0.9rem; color: rgba(255,255,255,0.65); margin-bottom: 20px; line-height: 1.7; }
        .mid-cta-phone { font-size: 1.5rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 12px; }

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
            <p className="eyebrow">How Care Starts · Step 5</p>
            <h1>Care Begins</h1>
            <p>
              The first week of care is when the most adjustment happens. It is when the
              relationship between caregiver and client begins to form, when
              the care plan meets the reality of daily life, and when adjustments
              are most likely to be needed. Here is what to expect.
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
            Care Begins
          </div>
        </nav>

        {/* Body */}
        <div className="body-wrap">
          <div className="main-content">

            <h2>What happens before the first visit</h2>
            <p>
              By the time the first visit happens, a significant amount of
              preparation has already taken place. The caregiver has been briefed
              on the care plan, the person's history and routines, any clinical
              considerations, and what the family has told us matters most. They
              are not arriving to discover the situation — they are arriving
              prepared for it.
            </p>
            <p>
              For clients where the introduction is likely to be sensitive —
              those with dementia, significant anxiety, or a history of resisting
              help — we may arrange an overlap visit where a familiar Arcadia
              team member accompanies the caregiver for the first visit to help
              the introduction go more smoothly.
            </p>
            <p>
              The family receives a confirmation of the first visit time, the
              caregiver's name, and a contact number for our team before care begins.
            </p>

            <h2>How the first week typically unfolds</h2>

            <div className="timeline">
              {[
                {
                  when: 'First visit',
                  title: 'Introduction and orientation',
                  body: 'The caregiver arrives, is introduced to the person and any family members present, and spends time understanding the home, the routines, and the person\'s preferences. The focus on the first visit is relationship — not completing a task list. A care relationship that starts calmly tends to stay that way.',
                },
                {
                  when: 'Day 1–2',
                  title: 'Arcadia checks in with the family',
                  body: 'We contact the family after the first visit or two to ask how it went — what felt right, what felt off, what the person\'s reaction was. Families should feel free to be honest here. Early feedback is far easier to act on than feedback that has built up over weeks.',
                },
                {
                  when: 'Day 2–3',
                  title: 'Arcadia checks in with the caregiver',
                  body: 'Separately, we speak with the caregiver about how the visits are going from their perspective — what they are observing, whether the care plan reflects the reality of the situation, and whether any adjustments are needed.',
                },
                {
                  when: 'First week',
                  title: 'Care plan review',
                  body: 'At the end of the first week, we review whether the care plan is working as intended. Timing adjustments, scope changes, and any concerns identified by the caregiver, family, or the person receiving care are addressed at this stage — not deferred.',
                },
                {
                  when: 'Weeks 2–4',
                  title: 'Routine establishes',
                  body: 'By the end of the first month, most care relationships have found their rhythm. The caregiver knows the person, the person has adjusted to the presence of care, and the family has a clearer picture of what is working and what, if anything, still needs to change.',
                },
              ].map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot">{item.when}</div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-title">{item.title}</div>
                    <div className="timeline-body">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2>What Arcadia monitors in the first weeks</h2>
            <p>
              The first weeks are when Arcadia pays closest attention. Here is
              what we are looking for:
            </p>

            <div className="monitor-grid">
              {[
                { title: 'How the person responds to the caregiver', body: 'Whether the relationship is forming naturally or whether the match needs to be reconsidered.' },
                { title: 'Whether the care plan fits the daily reality', body: 'Tasks that seemed appropriate in assessment may need adjustment once they are tested against actual daily routines.' },
                { title: 'Caregiver observations about the person\'s condition', body: 'Changes in mood, appetite, mobility, cognition, or behaviour that the caregiver notices and flags.' },
                { title: 'Family comfort with the arrangement', body: 'Whether the family feels informed, reassured, and able to step back — or whether concerns are building that have not been raised.' },
                { title: 'Schedule and consistency', body: 'Whether the schedule is working practically for both the person and the household, and whether coverage gaps are emerging.' },
                { title: 'Communication quality', body: 'Whether the caregiver is communicating well with the family and with our team, and whether the family is hearing what they need to.' },
              ].map((item, i) => (
                <div key={i} className="monitor-card">
                  <div className="monitor-card-title">{item.title}</div>
                  <div className="monitor-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            {/* Mid CTA */}
            <div className="mid-cta">
              <h3>Something not feeling right in the first week?</h3>
              <p>
                Call us. Early feedback is the most useful kind — and the
                easiest to act on. We would rather hear a concern on day three
                than find out about it at the end of the month.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            </div>

            <h2>What is normal in the first week — and what to flag</h2>
            <p>
              Some adjustment is to be expected when care begins. Knowing the
              difference between normal early friction and something worth raising
              helps families feel less uncertain about what they are observing.
            </p>

            <div className="normal-flag-grid">
              <div className="normal-card">
                <div className="nf-label">Normal in the first week</div>
                <ul className="nf-list">
                  <li>The person being quieter or more withdrawn than usual</li>
                  <li>Some resistance to specific tasks they are not yet comfortable with</li>
                  <li>The caregiver and person taking time to find a natural rhythm</li>
                  <li>Routines taking longer than expected while everyone adjusts</li>
                  <li>The family feeling more anxious than the situation warrants</li>
                  <li>Minor schedule adjustments as timing is refined</li>
                </ul>
              </div>
              <div className="flag-card">
                <div className="nf-label">Worth raising with Arcadia</div>
                <ul className="nf-list">
                  <li>The person is consistently distressed or upset after visits</li>
                  <li>The caregiver and person have not connected at all after several visits</li>
                  <li>Tasks from the care plan are not being completed without explanation</li>
                  <li>The family does not feel informed about what is happening</li>
                  <li>A specific clinical concern — change in condition, missed medication, fall</li>
                  <li>The family has a concern they have been reluctant to raise</li>
                </ul>
              </div>
            </div>

            <h2>What the family's role is in the first week</h2>
            <p>
              The first week works better when families play an active but
              measured role. Here is what tends to help:
            </p>

            <ul className="family-list">
              {[
                { strong: 'Be present for the first visit if possible', body: ' — not to supervise, but to help with the introduction and give the person a sense of security.' },
                { strong: 'Share feedback early', body: ' — if something feels off after the first visit or two, tell us. Early concerns are easier to address than ones that have accumulated.' },
                { strong: 'Give the relationship time to form', body: ' — some clients need several visits before they feel comfortable with a new person in their home. Patience in the first week often pays off.' },
                { strong: 'Step back after the first visit', body: ' — hovering during visits can make it harder for the caregiver and the person to build their own relationship. Giving them space in the first week tends to help.' },
                { strong: 'Keep Arcadia informed of changes', body: ' — a medical change, a family event, a shift in the person\'s mood or behaviour — information that reaches us quickly is information we can act on.' },
              ].map((item, i) => (
                <li key={i} className="family-item">
                  <div className="family-dot" />
                  <div className="family-text"><strong>{item.strong}</strong>{item.body}</div>
                </li>
              ))}
            </ul>

            <h2>Common questions about the first week</h2>

            {[
              {
                q: 'What if the first visit does not go well?',
                a: 'Call us the same day. A first visit that does not go well is not a sign that care will not work — it is information we need to understand and act on. Sometimes the issue is the approach, sometimes the timing, sometimes the match. We find out which and respond accordingly.',
              },
              {
                q: 'How involved should family members be during the first visits?',
                a: 'Present but not hovering. Being there for the introduction is helpful. Remaining in the background or leaving entirely after the first visit or two gives the caregiver and the person the space to build their own relationship — which is the foundation of good ongoing care.',
              },
              {
                q: 'What if the person refuses to let the caregiver in?',
                a: 'This happens, particularly with clients who have dementia or who have not fully accepted that they need help. Our team can advise on approaches that tend to work, and we have experience navigating this with families. It usually requires patience and sometimes a change in approach, but it can often be worked through.',
              },
              {
                q: 'How will I know if the care plan is being followed?',
                a: 'Your caregiver documents their visits and our team reviews that documentation. You can ask for updates at any time, and we check in with families proactively in the first weeks. If you feel you are not getting the information you need, tell us.',
              },
              {
                q: 'When does care stop feeling new?',
                a: 'For most clients, the care relationship starts to feel settled and routine within the first month. By six weeks, most families describe the arrangement as something they have stopped thinking about in anxious terms — it has settled into the rhythm of the household.',
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
                  { num: '4', label: 'Caregiver Matching', href: '/how-care-starts/matching-caregivers/', active: false },
                  { num: '5', label: 'Care Begins', href: '/how-care-starts/care-begins/', active: true },
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
              <h3>Something to raise?</h3>
              <p>Early feedback is the most useful kind. Call us directly.</p>
              <a href="tel:8449770050" className="sidebar-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red-sm">Book a Free Consultation</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">How Care Starts</div>
              <Link href="/how-care-starts/first-conversation/" className="sidebar-link">First Conversation</Link>
              <Link href="/how-care-starts/care-assessment/" className="sidebar-link">Care Assessment</Link>
              <Link href="/how-care-starts/" className="sidebar-link">Your Care Plan</Link>
              <Link href="/how-care-starts/matching-caregivers/" className="sidebar-link">Caregiver Matching</Link>
              <Link href="/how-care-starts/" className="sidebar-link">Ongoing Support</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Helpful Resources</div>
              <Link href="/resources/navigating-home-care/" className="sidebar-link">Navigating Home Care</Link>
              <Link href="/resources/family-caregiver-support/" className="sidebar-link">Family Caregiver Support</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Our Services</div>
              <Link href="/our-services/personal-support-daily-living/" className="sidebar-link">Personal Support & Daily Living</Link>
              <Link href="/our-services/dementia-alzheimers-home-care/" className="sidebar-link">Dementia & Alzheimer's Care</Link>
              <Link href="/our-services/companion-care/" className="sidebar-link">Companion Care</Link>
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <section className="bottom-cta">
          <p className="eyebrow" style={{ textAlign: 'center', color: '#C8302A' }}>Next Step</p>
          <h2>The first week sets the tone. We make sure it goes well.</h2>
          <p>
            Questions about what to expect when care begins? A conversation
            with our team helps set realistic expectations — for the family
            and for the person receiving care.
          </p>
          <a href="tel:8449770050" className="bottom-cta-phone">(844) 977-0050</a>
          <div className="cta-actions">
            <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            <Link href="/how-care-starts/pricing-and-funding/" className="btn-outline">Next: Pricing and Funding →</Link>
          </div>
        </section>

      </main>
    </>
  )
}
