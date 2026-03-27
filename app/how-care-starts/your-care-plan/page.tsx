import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Your Care Plan | How Care Starts | Arcadia Home Care',
  description: 'What goes into an Arcadia care plan — how we document your loved one\'s needs, preferences, and routines so every caregiver shows up prepared.',
  alternates: {
    canonical: 'https://arcadiahomecare.ca/how-care-starts/your-care-plan/',
  },
}

export default function YourCarePlanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Your Care Plan',
              description: 'What goes into an Arcadia care plan and how we use it to deliver consistent, personalized home care.',
              url: 'https://arcadiahomecare.ca/how-care-starts/your-care-plan/',
              publisher: {
                '@type': 'Organization',
                name: 'Arcadia Home Care',
                url: 'https://arcadiahomecare.ca',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://arcadiahomecare.ca/' },
                { '@type': 'ListItem', position: 2, name: 'How Care Starts', item: 'https://arcadiahomecare.ca/how-care-starts/' },
                { '@type': 'ListItem', position: 3, name: 'Your Care Plan', item: 'https://arcadiahomecare.ca/how-care-starts/your-care-plan/' },
              ],
            },
          ]),
        }}
      />

      <style>{`
        .care-plan-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }

        .care-plan-hero { background: #1C2B3A; padding: 96px 24px 80px; }
        .care-plan-hero-inner { max-width: 760px; margin: 0 auto; }
        .care-plan-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 14px; }
        .care-plan-hero h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2.2rem, 4.5vw, 3.4rem); font-weight: 600; color: #fff; line-height: 1.15; margin-bottom: 20px; }
        .care-plan-hero p { font-size: 1.05rem; color: rgba(255,255,255,0.85); line-height: 1.8; }

        .care-plan-steps-nav { background: #F7F3EE; border-bottom: 1px solid #E5E0D8; padding: 14px 24px; overflow-x: auto; }
        .care-plan-steps-nav-inner { max-width: 1100px; margin: 0 auto; display: flex; gap: 0; align-items: center; min-width: max-content; }
        .step-nav-item { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: #6B7280; text-decoration: none; white-space: nowrap; padding: 0 16px; }
        .step-nav-item:first-child { padding-left: 0; }
        .step-nav-item.active { color: #C8302A; }
        .step-nav-item:hover { color: #1C2B3A; }
        .step-nav-dot { width: 8px; height: 8px; border-radius: 50%; background: #D1CBC1; flex-shrink: 0; }
        .step-nav-dot.active { background: #C8302A; }
        .step-nav-sep { color: #D1CBC1; font-size: 16px; margin: 0 4px; }

        .care-plan-body { max-width: 1100px; margin: 0 auto; padding: 72px 24px; display: grid; grid-template-columns: 1fr 300px; gap: 64px; align-items: start; }
        @media (max-width: 900px) { .care-plan-body { grid-template-columns: 1fr; } }

        .care-plan-content h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 600; color: #1C2B3A; margin: 48px 0 16px; line-height: 1.25; }
        .care-plan-content h2:first-child { margin-top: 0; }
        .care-plan-content p { font-size: 1rem; color: #4B5563; line-height: 1.85; margin-bottom: 18px; }
        .care-plan-content a { color: #C8302A; font-weight: 600; text-decoration: underline; text-decoration-color: rgba(200,48,42,0.3); text-underline-offset: 3px; }

        .plan-sections { margin: 28px 0 40px; display: flex; flex-direction: column; gap: 16px; }
        .plan-section-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 12px; padding: 24px 28px; }
        .plan-section-card-header { display: flex; align-items: center; gap: 14px; margin-bottom: 12px; }
        .plan-section-icon { width: 40px; height: 40px; border-radius: 8px; background: rgba(200,48,42,0.08); display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
        .plan-section-title { font-size: 15px; font-weight: 700; color: #1C2B3A; }
        .plan-section-desc { font-size: 0.9rem; color: #6B7280; line-height: 1.7; margin: 0; }

        .plan-living-doc { background: #F7F3EE; border-left: 4px solid #C8302A; border-radius: 0 10px 10px 0; padding: 20px 24px; margin: 32px 0; }
        .plan-living-doc p { font-size: 0.9375rem; color: #4B5563; line-height: 1.75; margin: 0; }
        .plan-living-doc strong { color: #1C2B3A; }

        .step-nav-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 56px; padding-top: 32px; border-top: 1px solid #E5E0D8; flex-wrap: wrap; gap: 16px; }
        .step-nav-btn { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 700; color: #1C2B3A; text-decoration: none; padding: 12px 20px; border: 1.5px solid #E5E0D8; border-radius: 8px; transition: all 0.2s; }
        .step-nav-btn:hover { border-color: #C8302A; color: #C8302A; }
        .step-nav-btn.next { background: #C8302A; color: #fff; border-color: #C8302A; }
        .step-nav-btn.next:hover { background: #a82520; color: #fff; }

        .care-plan-sidebar { position: sticky; top: 100px; }
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

        .care-plan-bottom-cta { background: #1C2B3A; padding: 80px 24px; text-align: center; }
        .care-plan-bottom-cta h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 600; color: #fff; max-width: 640px; margin: 0 auto 14px; line-height: 1.2; }
        .care-plan-bottom-cta p { color: rgba(255,255,255,0.85); font-size: 1rem; max-width: 480px; margin: 0 auto 32px; line-height: 1.75; }
        .care-plan-bottom-cta-phone { font-size: 2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 20px; }
        .cta-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .btn-red { background: #C8302A; color: #fff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; }
        .btn-outline { border: 1.5px solid rgba(255,255,255,0.5); background: transparent; color: #fff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; }
      `}</style>

      <main className="care-plan-page">

        {/* Hero */}
        <section className="care-plan-hero">
          <div className="care-plan-hero-inner">
            <p className="care-plan-eyebrow">How Care Starts — Step 3 of 6</p>
            <h1>Your Care Plan</h1>
            <p>
              A care plan is the document that makes consistent, personalized care possible. It captures
              everything a caregiver needs to know about your loved one — their needs, their preferences,
              their routines, and what matters to them — so every visit is informed, not improvised.
            </p>
          </div>
        </section>

        {/* Step navigation */}
        <nav className="care-plan-steps-nav" aria-label="How Care Starts steps">
          <div className="care-plan-steps-nav-inner">
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
            <span className="step-nav-item active">
              <span className="step-nav-dot active" />
              Your Care Plan
            </span>
            <span className="step-nav-sep">›</span>
            <Link href="/how-care-starts/caregiver-matching/" className="step-nav-item">
              <span className="step-nav-dot" />
              Caregiver Matching
            </Link>
            <span className="step-nav-sep">›</span>
            <Link href="/how-care-starts/care-begins/" className="step-nav-item">
              <span className="step-nav-dot" />
              Care Begins
            </Link>
            <span className="step-nav-sep">›</span>
            <Link href="/how-care-starts/ongoing-support/" className="step-nav-item">
              <span className="step-nav-dot" />
              Ongoing Support
            </Link>
          </div>
        </nav>

        {/* Body */}
        <div className="care-plan-body">
          <div className="care-plan-content">

            <h2>What a Care Plan Is — and Why It Matters</h2>
            <p>
              In home care, consistency is the difference between a good experience and a difficult one.
              When a caregiver walks through the door knowing exactly how your parent takes their
              medications, what they like for breakfast, how they prefer to be addressed, and what
              topics make them anxious — that visit goes smoothly. When they don't, it doesn't.
            </p>
            <p>
              A care plan is how Arcadia ensures that knowledge lives in the system, not just in one
              caregiver's head. It means your loved one receives the same quality of care whether their
              regular caregiver is there or a substitute is covering.
            </p>
            <p>
              The care plan is built from the{' '}
              <Link href="/how-care-starts/care-assessment/">care assessment</Link> — the in-person
              conversation where we learn about your loved one's needs, history, and preferences. It is
              then reviewed with the family before care begins, and updated whenever circumstances change.
              For complex conditions like{' '}
              <Link href="/our-services/dementia-alzheimers-home-care/">dementia</Link>,{' '}
              <Link href="/our-services/acquired-brain-injury-home-care/">acquired brain injury</Link>,
              or{' '}
              <Link href="/our-services/hospital-discharge-support/">post-hospital recovery</Link>,
              the care plan also integrates clinical guidance from your loved one's existing medical team.
            </p>

            <p>
              Arcadia care plans are developed by experienced care managers — not generated by a form.
              Every plan reflects a real conversation with your family and is reviewed before the first
              caregiver ever walks through the door.
            </p>

            <h2>What Goes Into Your Care Plan</h2>
            <p>
              Every Arcadia care plan covers six areas:
            </p>

            <div className="plan-sections">
              <div className="plan-section-card">
                <div className="plan-section-card-header">
                  <div className="plan-section-icon">🩺</div>
                  <div className="plan-section-title">Medical and Clinical Information</div>
                </div>
                <p className="plan-section-desc">
                  Diagnosis, medications (names, doses, timing), allergies, physician and specialist contacts,
                  Ontario Health atHome allocation if applicable, and any clinical protocols from the care team.
                </p>
              </div>

              <div className="plan-section-card">
                <div className="plan-section-card-header">
                  <div className="plan-section-icon">📋</div>
                  <div className="plan-section-title">Daily Care Tasks</div>
                </div>
                <p className="plan-section-desc">
                  Every task the caregiver will assist with — personal hygiene, dressing, mobility support,
                  meal preparation, medication reminders, housekeeping — with specific instructions for each.
                  Nothing is left to guesswork.
                </p>
              </div>

              <div className="plan-section-card">
                <div className="plan-section-card-header">
                  <div className="plan-section-icon">⏰</div>
                  <div className="plan-section-title">Routines and Preferences</div>
                </div>
                <p className="plan-section-desc">
                  What time your loved one wakes up. How they like their coffee. Which TV programs they
                  watch. What topics they enjoy talking about. Small details that make the difference
                  between care that feels institutional and care that feels personal.
                </p>
              </div>

              <div className="plan-section-card">
                <div className="plan-section-card-header">
                  <div className="plan-section-icon">⚠️</div>
                  <div className="plan-section-title">Safety and Risk Factors</div>
                </div>
                <p className="plan-section-desc">
                  Fall risk level, wandering risk (for dementia clients), behavioural triggers,
                  emergency contacts, what to do if something goes wrong — and who to call first.
                </p>
              </div>

              <div className="plan-section-card">
                <div className="plan-section-card-header">
                  <div className="plan-section-icon">👨‍👩‍👧</div>
                  <div className="plan-section-title">Family Roles and Communication</div>
                </div>
                <p className="plan-section-desc">
                  Who is the primary family contact. Who has decision-making authority. How the family
                  wants to be kept informed — daily notes, weekly calls, or alerts for specific situations.
                </p>
              </div>

              <div className="plan-section-card">
                <div className="plan-section-card-header">
                  <div className="plan-section-icon">🎯</div>
                  <div className="plan-section-title">Goals of Care</div>
                </div>
                <p className="plan-section-desc">
                  What success looks like for this client and family. Maintaining independence as long
                  as possible. Managing a specific condition. Supporting a transition home from hospital.
                  The plan is oriented around what matters most to the person receiving care.
                </p>
              </div>
            </div>

            <div className="plan-living-doc">
              <p>
                <strong>A care plan is a living document.</strong> As your loved one's needs change —
                after a health event, a medication change, or a shift in condition — the care plan is
                updated. You will always have visibility into what it contains, and you can request
                changes at any time by contacting your Arcadia care manager.
              </p>
            </div>

            <h2>How the Care Plan Is Used Day-to-Day</h2>
            <p>
              Before every shift, your caregiver reviews the care plan. After every visit, they document
              what was completed, any observations about your loved one's condition, and anything the
              family should know.
            </p>
            <p>
              If anything significant happens — a fall, a refusal of care, a noticeable change in mood
              or cognition — it is flagged to your Arcadia care manager, who follows up with the family.
              You are never left wondering what happened during a visit.
            </p>
            <p>
              For clients with dementia, acquired brain injury, or complex medical needs, the care plan
              also serves as a communication tool between Arcadia and your loved one's clinical team.
              With your consent, relevant portions can be shared with physicians, Ontario Health atHome
              coordinators, or other providers involved in your loved one's care.
            </p>

            {/* Step navigation footer */}
            <div className="step-nav-footer">
              <Link href="/how-care-starts/care-assessment/" className="step-nav-btn">
                ← Care Assessment
              </Link>
              <Link href="/how-care-starts/caregiver-matching/" className="step-nav-btn next">
                Caregiver Matching →
              </Link>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="care-plan-sidebar">
            <div className="sidebar-cta">
              <h3>Ready to get started?</h3>
              <p>The care plan begins with a conversation. No obligation.</p>
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
              <span className="sidebar-step active">
                <span className="sidebar-step-dot active" />
                Your Care Plan
              </span>
              <Link href="/how-care-starts/caregiver-matching/" className="sidebar-step">
                <span className="sidebar-step-dot" />
                Caregiver Matching
              </Link>
              <Link href="/how-care-starts/care-begins/" className="sidebar-step">
                <span className="sidebar-step-dot" />
                Care Begins
              </Link>
              <Link href="/how-care-starts/ongoing-support/" className="sidebar-step">
                <span className="sidebar-step-dot" />
                Ongoing Support
              </Link>
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <section className="care-plan-bottom-cta">
          <h2>Want to See What a Care Plan Would Look Like for Your Family?</h2>
          <p>
            Call us or book a free consultation. We'll walk you through the process and answer
            any questions you have about how care works at Arcadia.
          </p>
          <a href="tel:+18449770050" className="care-plan-bottom-cta-phone" aria-label="Call Arcadia Home Care">(844) 977-0050</a>
          <div className="cta-buttons">
            <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            <Link href="/how-care-starts/" className="btn-outline">Back to How Care Starts</Link>
          </div>
        </section>

      </main>
    </>
  )
}
