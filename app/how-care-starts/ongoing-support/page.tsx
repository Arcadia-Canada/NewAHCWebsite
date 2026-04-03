import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ongoing Support | How Care Starts | Arcadia Home Care',
  description: 'How Arcadia monitors, adjusts, and improves your loved one\'s care over time — and what ongoing support looks like for families across Toronto.',
  alternates: {
    canonical: 'https://www.arcadiahomecare.ca/how-care-starts/ongoing-support/',
  },
}

export default function OngoingSupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Ongoing Support',
              description: 'How Arcadia monitors, adjusts, and improves your loved one\'s care over time.',
              url: 'https://www.arcadiahomecare.ca/how-care-starts/ongoing-support/',
              publisher: {
                '@type': 'Organization',
                name: 'Arcadia Home Care',
                url: 'https://www.arcadiahomecare.ca',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.arcadiahomecare.ca/' },
                { '@type': 'ListItem', position: 2, name: 'How Care Starts', item: 'https://www.arcadiahomecare.ca/how-care-starts/' },
                { '@type': 'ListItem', position: 3, name: 'Ongoing Support', item: 'https://www.arcadiahomecare.ca/how-care-starts/ongoing-support/' },
              ],
            },
          ]),
        }}
      />

      <style>{`
        .ongoing-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }

        .ongoing-hero { background: #1C2B3A; padding: 96px 24px 80px; }
        .ongoing-hero-inner { max-width: 760px; margin: 0 auto; }
        .ongoing-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 14px; }
        .ongoing-hero h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2.2rem, 4.5vw, 3.4rem); font-weight: 600; color: #fff; line-height: 1.15; margin-bottom: 20px; }
        .ongoing-hero p { font-size: 1.05rem; color: rgba(255,255,255,0.85); line-height: 1.8; }

        .ongoing-steps-nav { background: #F7F3EE; border-bottom: 1px solid #E5E0D8; padding: 14px 24px; overflow-x: auto; }
        .ongoing-steps-nav-inner { max-width: 1100px; margin: 0 auto; display: flex; gap: 0; align-items: center; min-width: max-content; }
        .step-nav-item { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: #6B7280; text-decoration: none; white-space: nowrap; padding: 0 16px; }
        .step-nav-item:first-child { padding-left: 0; }
        .step-nav-item.active { color: #C8302A; }
        .step-nav-item:hover { color: #1C2B3A; }
        .step-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #D1CBC1; flex-shrink: 0; }
        .step-nav-dot.active { background: #C8302A; }
        .step-nav-dot.done { background: #2D7A4F; }
        .step-nav-sep { color: #D1CBC1; font-size: 16px; margin: 0 4px; }

        .ongoing-body { max-width: 1100px; margin: 0 auto; padding: 72px 24px; display: grid; grid-template-columns: 1fr 300px; gap: 64px; align-items: start; }
        @media (max-width: 900px) { .ongoing-body { grid-template-columns: 1fr; } }

        .ongoing-content h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 600; color: #1C2B3A; margin: 48px 0 16px; line-height: 1.25; }
        .ongoing-content h2:first-child { margin-top: 0; }
        .ongoing-content p { font-size: 1rem; color: #4B5563; line-height: 1.85; margin-bottom: 18px; }
        .ongoing-content a { color: #C8302A; font-weight: 600; text-decoration: underline; text-decoration-color: rgba(200,48,42,0.3); text-underline-offset: 3px; }

        .support-pillars { margin: 28px 0 40px; display: flex; flex-direction: column; gap: 16px; }
        .support-pillar { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 12px; padding: 24px 28px; display: flex; gap: 20px; align-items: flex-start; }
        .pillar-icon { width: 40px; height: 40px; border-radius: 8px; background: rgba(200,48,42,0.08); display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
        .pillar-text h3 { font-size: 15px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; }
        .pillar-text p { font-size: 0.9rem; color: #6B7280; line-height: 1.7; margin: 0; }

        .reassurance-box { background: #F7F3EE; border-left: 4px solid #C8302A; border-radius: 0 10px 10px 0; padding: 20px 24px; margin: 32px 0; }
        .reassurance-box p { font-size: 0.9375rem; color: #4B5563; line-height: 1.75; margin: 0; }
        .reassurance-box strong { color: #1C2B3A; }

        .step-nav-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 56px; padding-top: 32px; border-top: 1px solid #E5E0D8; flex-wrap: wrap; gap: 16px; }
        .step-nav-btn { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 700; color: #1C2B3A; text-decoration: none; padding: 12px 20px; border: 1.5px solid #E5E0D8; border-radius: 8px; transition: all 0.2s; }
        .step-nav-btn:hover { border-color: #C8302A; color: #C8302A; }
        .step-nav-btn.primary { background: #C8302A; color: #fff; border-color: #C8302A; }
        .step-nav-btn.primary:hover { background: #a82520; color: #fff; }

        .ongoing-sidebar { position: sticky; top: 100px; }
        .sidebar-progress { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 14px; padding: 28px; margin-bottom: 20px; }
        .sidebar-progress-title { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #C8302A; margin-bottom: 16px; }
        .sidebar-step { display: flex; align-items: center; gap: 10px; font-size: 13px; font-weight: 600; color: #6B7280; padding: 8px 0; border-bottom: 1px solid #F0EBE3; text-decoration: none; transition: color 0.15s; }
        .sidebar-step:last-child { border-bottom: none; }
        .sidebar-step.active { color: #C8302A; }
        .sidebar-step.done { color: #1C2B3A; }
        .sidebar-step:hover { color: #C8302A; }
        .sidebar-step-dot { width: 8px; height: 8px; border-radius: 50%; background: #D1CBC1; flex-shrink: 0; }
        .sidebar-step-dot.active { background: #C8302A; }
        .sidebar-step-dot.done { background: #2D7A4F; }
        .sidebar-cta { background: #1C2B3A; border-radius: 14px; padding: 28px; text-align: center; margin-bottom: 20px; }
        .sidebar-cta h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.3rem; font-weight: 600; color: #fff; margin-bottom: 8px; }
        .sidebar-cta p { font-size: 0.875rem; color: rgba(255,255,255,0.7); margin-bottom: 16px; line-height: 1.65; }
        .sidebar-phone { font-size: 1.2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 12px; }
        .btn-red-sm { background: #C8302A; color: #fff; padding: 11px 20px; border-radius: 8px; font-size: 13px; font-weight: 700; text-decoration: none; display: block; text-align: center; }

        .ongoing-bottom-cta { background: #1C2B3A; padding: 80px 24px; text-align: center; }
        .ongoing-bottom-cta h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 600; color: #fff; max-width: 640px; margin: 0 auto 14px; line-height: 1.2; }
        .ongoing-bottom-cta p { color: rgba(255,255,255,0.85); font-size: 1rem; max-width: 480px; margin: 0 auto 32px; line-height: 1.75; }
        .ongoing-bottom-cta-phone { font-size: 2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 20px; }
        .cta-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .btn-red { background: #C8302A; color: #fff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; }
        .btn-outline { border: 1.5px solid rgba(255,255,255,0.5); background: transparent; color: #fff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; }
      `}</style>

      <main className="ongoing-page">

        {/* Hero */}
        <section className="ongoing-hero">
          <div className="ongoing-hero-inner">
            <p className="ongoing-eyebrow">How Care Starts — Step 6 of 6</p>
            <h1>Ongoing Support</h1>
            <p>
              Starting care is just the beginning. What makes home care work over time is what happens
              after the first visit — how quickly changes are noticed, how well the care plan adapts,
              and how reliably your family is kept informed. This is what ongoing support looks like
              at Arcadia.
            </p>
          </div>
        </section>

        {/* Step navigation */}
        <nav className="ongoing-steps-nav" aria-label="How Care Starts steps">
          <div className="ongoing-steps-nav-inner">
            <Link href="/how-care-starts/first-conversation/" className="step-nav-item">
              <span className="step-nav-dot done" />
              First Conversation
            </Link>
            <span className="step-nav-sep">›</span>
            <Link href="/how-care-starts/care-assessment/" className="step-nav-item">
              <span className="step-nav-dot done" />
              Care Assessment
            </Link>
            <span className="step-nav-sep">›</span>
            <Link href="/how-care-starts/your-care-plan/" className="step-nav-item">
              <span className="step-nav-dot done" />
              Your Care Plan
            </Link>
            <span className="step-nav-sep">›</span>
            <Link href="/how-care-starts/caregiver-matching/" className="step-nav-item">
              <span className="step-nav-dot done" />
              Caregiver Matching
            </Link>
            <span className="step-nav-sep">›</span>
            <Link href="/how-care-starts/care-begins/" className="step-nav-item">
              <span className="step-nav-dot done" />
              Care Begins
            </Link>
            <span className="step-nav-sep">›</span>
            <span className="step-nav-item active">
              <span className="step-nav-dot active" />
              Ongoing Support
            </span>
          </div>
        </nav>

        {/* Body */}
        <div className="ongoing-body">
          <div className="ongoing-content">

            <h2>What Ongoing Support Means at Arcadia</h2>
            <p>
              Home care needs change. A parent who needed only companionship and light housekeeping
              six months ago may now need help with personal care, medication management, or overnight
              supervision. Conditions progress. Families move. Circumstances shift.
            </p>
            <p>
              Arcadia&apos;s ongoing support model is built around one principle: you should never have
              to chase us for information or initiate a care review yourself. We monitor, we flag, and
              we adapt — proactively, not reactively.
            </p>

            <h2>The Four Pillars of Ongoing Support</h2>

            <div className="support-pillars">
              <div className="support-pillar">
                <div className="pillar-icon">📋</div>
                <div className="pillar-text">
                  <h3>Visit Documentation</h3>
                  <p>
                    After every visit, your caregiver documents what was completed, any observations
                    about your loved one&apos;s condition, and anything the family should know. Nothing
                    significant happens during a visit without a record of it.
                  </p>
                </div>
              </div>

              <div className="support-pillar">
                <div className="pillar-icon">🔄</div>
                <div className="pillar-text">
                  <h3>Care Plan Reviews</h3>
                  <p>
                    Your care plan is reviewed regularly — and immediately whenever there is a
                    significant change in your loved one&apos;s condition. You will always be
                    consulted before any change is made to the plan.
                  </p>
                </div>
              </div>

              <div className="support-pillar">
                <div className="pillar-icon">🚨</div>
                <div className="pillar-text">
                  <h3>Issue Escalation</h3>
                  <p>
                    If something concerning happens — a fall, a refusal of care, a noticeable change
                    in cognition or mood — it is flagged to your Arcadia care manager immediately,
                    who follows up with your family the same day.
                  </p>
                </div>
              </div>

              <div className="support-pillar">
                <div className="pillar-icon">👨‍👩‍👧</div>
                <div className="pillar-text">
                  <h3>Family Communication</h3>
                  <p>
                    We communicate with families in the way that works best for them — phone calls,
                    notes after visits, or scheduled check-ins. If you are coordinating your
                    parent&apos;s care from another city, we make sure you stay fully informed.
                  </p>
                </div>
              </div>
            </div>

            <h2>When Care Needs to Change</h2>
            <p>
              Some of the most important moments in a care relationship happen not at the beginning,
              but months in — when a condition progresses, when a family caregiver burns out, or when
              a hospital admission changes everything. Arcadia&apos;s care managers are trained to
              recognize these inflection points and initiate a conversation before a crisis forces one.
            </p>
            <p>
              If your loved one&apos;s needs increase significantly — from a few visits a week to
              daily care, or from companionship to complex personal care — we manage that transition.
              You won&apos;t need to restart the process or find a new provider. The relationship,
              the knowledge of your loved one, and the care plan all carry forward.
            </p>
            <p>
              For families dealing with progressive conditions like dementia or Parkinson&apos;s,
              this continuity is not a convenience — it is clinically important. A caregiver who has
              known your parent for a year is far better positioned to notice early warning signs than
              a new face on a rotating roster.
            </p>

            <div className="reassurance-box">
              <p>
                <strong>You always have a named care manager.</strong> Not a call centre, not a
                ticketing system. A specific person who knows your family&apos;s situation and is
                reachable by phone. If something changes or you have a concern, you know exactly
                who to call.
              </p>
            </div>

            <h2>Coordinating With Other Providers</h2>
            <p>
              Most Arcadia clients receive care from multiple sources — Ontario Health atHome,
              physiotherapists, occupational therapists, family physicians, and specialists. Arcadia
              sits alongside all of these, not in competition with them.
            </p>
            <p>
              With your consent, your care manager can share relevant observations with your loved
              one&apos;s clinical team, flag concerns to the family doctor, and coordinate scheduling
              around therapy appointments or medical visits. We are part of your loved one&apos;s
              broader care network — and we act like it.
            </p>

            {/* Step navigation footer */}
            <div className="step-nav-footer">
              <Link href="/how-care-starts/care-begins/" className="step-nav-btn">
                ← Care Begins
              </Link>
              <Link href="/contact/" className="step-nav-btn primary">
                Book a Free Consultation →
              </Link>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="ongoing-sidebar">
            <div className="sidebar-cta">
              <h3>Ready to get started?</h3>
              <p>The first conversation is free and takes about 20 minutes.</p>
              <a href="tel:+18449770050" className="sidebar-phone" aria-label="Call Arcadia Home Care">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red-sm">Book a Free Consultation</Link>
            </div>

            <div className="sidebar-progress">
              <div className="sidebar-progress-title">How Care Starts</div>
              <Link href="/how-care-starts/first-conversation/" className="sidebar-step done">
                <span className="sidebar-step-dot done" />
                First Conversation
              </Link>
              <Link href="/how-care-starts/care-assessment/" className="sidebar-step done">
                <span className="sidebar-step-dot done" />
                Care Assessment
              </Link>
              <Link href="/how-care-starts/your-care-plan/" className="sidebar-step done">
                <span className="sidebar-step-dot done" />
                Your Care Plan
              </Link>
              <Link href="/how-care-starts/caregiver-matching/" className="sidebar-step done">
                <span className="sidebar-step-dot done" />
                Caregiver Matching
              </Link>
              <Link href="/how-care-starts/care-begins/" className="sidebar-step done">
                <span className="sidebar-step-dot done" />
                Care Begins
              </Link>
              <span className="sidebar-step active">
                <span className="sidebar-step-dot active" />
                Ongoing Support
              </span>
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <section className="ongoing-bottom-cta">
          <h2>Care That Grows With Your Family</h2>
          <p>
            Arcadia builds care relationships that last — adapting as needs change, communicating
            proactively, and always keeping your family informed. Start with a free conversation.
          </p>
          <a href="tel:+18449770050" className="ongoing-bottom-cta-phone" aria-label="Call Arcadia Home Care">(844) 977-0050</a>
          <div className="cta-buttons">
            <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            <Link href="/how-care-starts/" className="btn-outline">Back to How Care Starts</Link>
          </div>
        </section>

      </main>
    </>
  )
}
