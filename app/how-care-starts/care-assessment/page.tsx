// app/how-care-starts/care-assessment/page.tsx
// Decision-stage page — step 2 in the How Care Starts funnel
// Target keyword: "home care assessment toronto" / "care needs assessment GTA"
// Persona: family who has had the first conversation and wants to understand
// what the assessment involves before agreeing to it
// Tone: informative, reassuring — makes the assessment feel valuable not intrusive
// Schema: Service + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Care Assessment | How Care Starts | Arcadia Home Care Toronto',
  description: 'What to expect from Arcadia\'s home care assessment in Toronto and the GTA. A qualified member of our team visits the home, assesses needs, and builds the foundation for a care plan that reflects the full picture.',
  alternates: { canonical: 'https://www.arcadiahomecare.ca/how-care-starts/care-assessment/' },
}

export default function CareAssessmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': 'Home Care Assessment',
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
              'description': 'Home care needs assessment in Toronto and the GTA — a qualified clinician visits the home to understand the full situation and build the foundation for an appropriate care plan.',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.arcadiahomecare.ca/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'How Care Starts', 'item': 'https://www.arcadiahomecare.ca/how-care-starts/' },
                { '@type': 'ListItem', 'position': 3, 'name': 'Care Assessment', 'item': 'https://www.arcadiahomecare.ca/how-care-starts/care-assessment/' },
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

        /* What we assess grid */
        .assess-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0 32px; }
        @media (max-width: 640px) { .assess-grid { grid-template-columns: 1fr; } }
        .assess-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 12px; padding: 20px; }
        .assess-card-title { font-size: 14px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
        .assess-card-title::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #C8302A; flex-shrink: 0; }
        .assess-card-body { font-size: 0.875rem; color: #6B7280; line-height: 1.7; }

        /* What comes out of it */
        .outcome-list { display: flex; flex-direction: column; gap: 12px; margin: 24px 0 32px; }
        .outcome-item { display: flex; gap: 16px; align-items: flex-start; background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 10px; padding: 18px 20px; }
        .outcome-num { width: 32px; height: 32px; border-radius: 50%; background: #C8302A; color: #fff; font-size: 13px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .outcome-text { flex: 1; }
        .outcome-title { font-size: 14px; font-weight: 700; color: #1C2B3A; margin-bottom: 4px; }
        .outcome-body { font-size: 0.875rem; color: #6B7280; line-height: 1.65; }

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
            <p className="eyebrow">How Care Starts · Step 2</p>
            <h1>The Care Assessment</h1>
            <p>
              A care plan is only as good as the understanding it is built on.
              Arcadia's care assessment gives us the full picture of the situation —
              so the support we recommend actually fits the person, the home,
              and the family.
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
            Care Assessment
          </div>
        </nav>

        {/* Body */}
        <div className="body-wrap">
          <div className="main-content">

            <h2>Why the assessment matters</h2>
            <p>
              Home care that is arranged without a proper assessment tends to be
              imprecise — too much in some areas, not enough in others, and missing
              things that only become apparent once someone is actually in the home.
              Arcadia conducts a thorough assessment before building any care plan
              because the difference between support that works and support that does
              not usually comes down to how well the situation was understood
              at the outset.
            </p>
            <p>
              The assessment is also the foundation for caregiver matching. Without
              a clear picture of the person — their history, personality, how their
              condition presents day to day, and what kind of presence they respond
              well to — matching is much harder to do well. The assessment makes it something more
              considered than that.
            </p>

            <h2>What the assessment covers</h2>
            <p>
              A member of Arcadia's team visits the home and works through the
              following areas with the person and any family members who are present:
            </p>

            <div className="assess-grid">
              {[
                {
                  title: 'Daily function and personal care needs',
                  body: 'What the person can manage independently, what they need help with, and where the gaps between current function and current support are greatest.',
                },
                {
                  title: 'Medical conditions and clinical considerations',
                  body: 'Relevant diagnoses, current medications, any clinical parameters the care plan needs to work within, and the involvement of any existing care providers.',
                },
                {
                  title: 'Home environment and safety',
                  body: 'Layout, accessibility, fall hazards, lighting, bathroom safety, and anything in the physical environment that affects how care should be delivered.',
                },
                {
                  title: 'Routines, preferences, and personal history',
                  body: 'How the person has always done things, what matters to them, what they find difficult to accept help with, and the personal context that shapes how care should be provided.',
                },
                {
                  title: 'Family support and caregiver situation',
                  body: 'What family members are providing, how sustainable that is, and where the gaps are that private care would address — including caregiver relief needs.',
                },
                {
                  title: 'Publicly funded care and existing services',
                  body: 'What Ontario Health atHome provides, what other services are involved, and how private care fits alongside rather than duplicates what is already in place.',
                },
              ].map((item, i) => (
                <div key={i} className="assess-card">
                  <div className="assess-card-title">{item.title}</div>
                  <div className="assess-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            <h2>Who conducts the assessment</h2>
            <p>
              The assessment is conducted by a qualified member of Arcadia's clinical
              or care management team — not a sales representative. For clients with
              complex conditions such as{' '}
              <Link href="/conditions/dementia-care-at-home/">dementia</Link>,{' '}
              <Link href="/conditions/acquired-brain-injury-support/">acquired brain injury</Link>,
              or{' '}
              <Link href="/conditions/palliative-serious-illness/">palliative illness</Link>,
              the assessment may involve additional clinical review before the care
              plan is finalized. For rehabilitation clients, our RSW Manager is
              involved in reviewing the assessment alongside the treating team.
            </p>

            <h2>What comes out of the assessment</h2>
            <p>
              The assessment produces four things that inform everything that follows:
            </p>

            <div className="outcome-list">
              {[
                {
                  num: '1',
                  title: 'A clear picture of what is actually needed',
                  body: 'Not what was described over the phone, but what a trained assessor observes in the home — which is often both more and different from what families initially describe.',
                },
                {
                  num: '2',
                  title: 'A draft care plan',
                  body: 'The types of support recommended, the hours and schedule that reflect actual need, and how publicly funded and private care work together.',
                },
                {
                  num: '3',
                  title: 'A caregiver matching brief',
                  body: 'The specific profile of caregiver — skills, personality, language, experience — that the matching process will use to find the right person.',
                },
                {
                  num: '4',
                  title: 'An honest conversation about fit',
                  body: 'If the situation calls for something beyond what Arcadia provides — a nursing service, a different type of residential care — we say so at this stage rather than proceeding with an arrangement that will not serve the person well.',
                },
              ].map((item, i) => (
                <div key={i} className="outcome-item">
                  <div className="outcome-num">{item.num}</div>
                  <div className="outcome-text">
                    <div className="outcome-title">{item.title}</div>
                    <div className="outcome-body">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mid CTA */}
            <div className="mid-cta">
              <h3>Ready to arrange an assessment?</h3>
              <p>
                The assessment follows from the{' '}
                <Link href="/how-care-starts/first-conversation/" style={{ color: '#C8302A', fontWeight: 600 }}>
                  first conversation
                </Link>.
                If you have not spoken with our team yet, that is the right
                starting point — call us or request a callback.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            </div>

            <h2>What the assessment is not</h2>
            <p>
              Families sometimes approach the assessment with some apprehension —
              worried it will feel like an inspection or lead to pressure to commit
              to a care package. A few things worth knowing:
            </p>
            <p>
              The assessment is not a sales visit. The person conducting it is
              there to understand the situation, not to close a sale. If the
              assessment reveals that private care is not necessary or that
              another type of support would serve the person better, we say so.
            </p>
            <p>
              The assessment does not commit anyone to anything. The care plan
              that comes out of it is a recommendation, not a contract. Families
              review it, ask questions, and decide whether and how to proceed.
            </p>
            <p>
              The assessment is also not one-sided. It is as much an opportunity
              for the family and the person being assessed to ask questions, raise
              concerns, and understand what working with Arcadia actually involves
              as it is for Arcadia to gather information.
            </p>

            <h2>Common questions about the assessment</h2>

            {[
              {
                q: 'How long does the assessment take?',
                a: 'Usually between 60 and 90 minutes in the home. Complex situations — particularly those involving dementia, acquired brain injury, or palliative care — may require additional follow-up before the care plan is finalized.',
              },
              {
                q: 'Does the person receiving care need to be present?',
                a: 'Where possible, yes — the assessment is most useful when we can speak directly with the person, observe how they function in their own environment, and understand their perspective on their own situation. For cognitive or communication reasons, this is not always fully possible, and we adapt accordingly.',
              },
              {
                q: 'Can the assessment happen remotely if the family is not local?',
                a: 'The in-home visit requires a local contact — either the person being assessed or a family member or neighbour who can be present. Family members who are not local can participate by phone during the visit. We are experienced supporting families managing a situation from a distance.',
              },
              {
                q: 'Is there a cost for the assessment?',
                a: 'The initial care assessment is complimentary for families who proceed with Arcadia\'s services. We are happy to discuss this further when you call.',
              },
              {
                q: 'What happens after the assessment?',
                a: 'We present the care plan to the family, discuss it, and refine it based on your input. Once the plan is agreed, we move to caregiver matching — selecting the right person for the specific situation.',
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
                  { num: '2', label: 'Care Assessment', href: '/how-care-starts/care-assessment/', active: true },
                  { num: '3', label: 'Your Care Plan', href: '/how-care-starts/', active: false },
                  { num: '4', label: 'Caregiver Matching', href: '/how-care-starts/matching-caregivers/', active: false },
                  { num: '5', label: 'Care Begins', href: '/how-care-starts/care-begins/', active: false },
                  { num: '6', label: 'Ongoing Support', href: '/how-care-starts/ongoing-support/', active: false },
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
              <p>The assessment follows from a first conversation — call us to get started.</p>
              <a href="tel:8449770050" className="sidebar-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red-sm">Book a Free Consultation</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">How Care Starts</div>
              <Link href="/how-care-starts/first-conversation/" className="sidebar-link">First Conversation</Link>
              <Link href="/how-care-starts/" className="sidebar-link">Your Care Plan</Link>
              <Link href="/how-care-starts/matching-caregivers/" className="sidebar-link">Caregiver Matching</Link>
              <Link href="/how-care-starts/care-begins/" className="sidebar-link">Care Begins</Link>
              <Link href="/how-care-starts/ongoing-support/" className="sidebar-link">Ongoing Support</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Conditions We Assess For</div>
              <Link href="/conditions/dementia-care-at-home/" className="sidebar-link">Dementia Care at Home</Link>
              <Link href="/conditions/acquired-brain-injury-support/" className="sidebar-link">Acquired Brain Injury</Link>
              <Link href="/conditions/post-hospital-recovery/" className="sidebar-link">Post-Hospital Recovery</Link>
              <Link href="/conditions/frailty-fall-prevention/" className="sidebar-link">Frailty & Fall Prevention</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Understand Your Options</div>
              <Link href="/our-services/" className="sidebar-link">Our Services</Link>
              <Link href="/resources/navigating-home-care/" className="sidebar-link">Navigating Home Care</Link>
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <section className="bottom-cta">
          <p className="eyebrow" style={{ textAlign: 'center', color: '#C8302A' }}>Next Step</p>
          <h2>A care plan is only useful if it reflects what is actually happening — and that requires a proper assessment.</h2>
          <p>
            The assessment gives us that picture — and gives the family confidence
            that the care plan reflects what is actually needed.
          </p>
          <a href="tel:8449770050" className="bottom-cta-phone">(844) 977-0050</a>
          <div className="cta-actions">
            <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            <Link href="/how-care-starts/matching-caregivers/" className="btn-outline">Next: Matching Caregivers →</Link>
          </div>
        </section>

      </main>
    </>
  )
}
