// app/conditions/parkinsons-support/page.tsx
// Tier 3 condition page
// Target keyword: "parkinsons care at home toronto" / "parkinson's support GTA"
// Persona: adult child or spouse of someone with Parkinson's — the condition
// has been diagnosed, the family is managing, but increasing symptoms are making
// daily life harder and they are beginning to recognize that more structured
// support is needed
// Distinct angle: Parkinson's is progressive and predictable — the right support
// adapts as the condition changes rather than waiting for a crisis
// Tone: practical, calm, forward-looking — not urgent, not alarming
// Schema: MedicalCondition + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Parkinson's Support at Home | Toronto & GTA | Arcadia Home Care",
  description: "Home care support for people living with Parkinson's disease in Toronto and the GTA. Arcadia provides compassionate, consistent care that adapts as the condition progresses — helping people stay at home safely and with dignity.",
  alternates: { canonical: 'https://www.arcadiahomecare.ca/conditions/parkinsons-support/' },
}

const faqs = [
  {
    q: "What makes home care for Parkinson's different from general personal support?",
    a: "Parkinson's presents a specific combination of physical and cognitive challenges that require caregivers who understand the condition. Motor fluctuations mean that a person's ability to move and function can change significantly across the day — a caregiver needs to recognize and work with those fluctuations rather than applying a fixed approach. Medication timing is critical and often complex. Fall risk is elevated and context-dependent. Communication changes and cognitive symptoms require patience and adapted approaches. These are not skills every personal support worker has without specific training.",
  },
  {
    q: "My parent is still quite independent. Is it too early to think about home care?",
    a: "Early engagement with home care often works better than waiting. Introducing support while the person is still relatively independent means the relationship and routines can be established gradually, the caregiver gets to know the person well before needs increase, and the person has more agency in shaping how care works. Waiting until a fall or a significant decline often means starting a care relationship under pressure — which is harder for everyone.",
  },
  {
    q: "How does Parkinson's affect the caregiver relationship specifically?",
    a: "Parkinson's often involves significant cognitive and personality changes alongside the physical symptoms — including depression, anxiety, impulse control changes, and eventually dementia in some cases. These affect how the person responds to a caregiver, what kind of presence is most helpful, and what the caregiver needs to be prepared for. Matching for Parkinson's care involves considering these dimensions alongside physical capability.",
  },
  {
    q: "Can Arcadia support someone whose Parkinson's has progressed significantly?",
    a: "Yes. Arcadia provides support across the full progression of Parkinson's — from early-stage assistance with specific daily tasks through to complex late-stage care involving significant mobility assistance, swallowing difficulties, advanced cognitive changes, and palliative needs. The care plan evolves as the condition does.",
  },
  {
    q: "How does medication timing affect the care schedule?",
    a: "Medication timing is one of the most important practical considerations in Parkinson's care. The 'on' and 'off' periods that many people with Parkinson's experience — times of good motor function and times of significantly reduced function — are often closely tied to when medications were taken. Arcadia's caregivers are briefed on the person's medication schedule and work with it rather than against it, timing personal care and activities during the periods of best function where possible.",
  },
  {
    q: "What support is available for the family caregiver of someone with Parkinson's?",
    a: "Family caregivers of people with Parkinson's carry a particularly significant burden because the condition is progressive and the caregiving role intensifies over time. Arcadia provides scheduled respite — consistent, reliable time away — so family caregivers can rest and maintain their own wellbeing. We also support family members in understanding what to expect at different stages of the condition and how to work effectively alongside a professional caregiver.",
  },
]

const whatWeProvide = [
  {
    title: 'Personal care and hygiene',
    body: "Assistance with bathing, dressing, and grooming — adapted to motor fluctuations and timed around medication 'on' periods where possible.",
  },
  {
    title: 'Mobility and fall prevention',
    body: 'Safe movement support, transfer assistance, and attentive supervision during the activities — standing, turning, transitions — where fall risk is highest.',
  },
  {
    title: 'Medication reminders and monitoring',
    body: 'Consistent prompting at precise times, monitoring for dose effectiveness and side effects, and communicating changes to family or the care team.',
  },
  {
    title: 'Meals and swallowing support',
    body: 'Preparing appropriate meals, monitoring intake, and adapting to swallowing difficulties — a common and serious complication in later-stage Parkinson\'s.',
  },
  {
    title: 'Exercise and prescribed programs',
    body: 'Supporting physiotherapy and occupational therapy programs at home — encouraging movement, balance exercises, and the physical activity that matters for Parkinson\'s progression.',
  },
  {
    title: 'Communication support',
    body: 'Patience and adapted communication techniques for the speech and voice changes that Parkinson\'s causes — reducing frustration and maintaining connection.',
  },
  {
    title: 'Cognitive and emotional support',
    body: 'Consistent, calm presence for the anxiety, depression, and cognitive changes that accompany Parkinson\'s — with awareness of when symptoms require clinical attention.',
  },
  {
    title: 'Respite for family caregivers',
    body: 'Scheduled, reliable relief so family caregivers can rest — particularly important given the long-term and intensifying nature of Parkinson\'s caregiving.',
  },
]

export default function ParkinsonsSupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'MedicalCondition',
              'name': "Parkinson's Disease",
              'description': "Parkinson's disease is a progressive neurological condition affecting movement, balance, and coordination. It also commonly affects cognition, mood, and communication as it advances.",
              'relevantSpecialty': "https://schema.org/Neurology",
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
                { '@type': 'ListItem', 'position': 2, 'name': 'Conditions', 'item': 'https://www.arcadiahomecare.ca/conditions/' },
                { '@type': 'ListItem', 'position': 3, 'name': "Parkinson's Support", 'item': 'https://www.arcadiahomecare.ca/conditions/parkinsons-support/' },
              ],
            },
          ]),
        }}
      />

      <style>{`
        .condition-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }

        .condition-hero { background: #1C2B3A; padding: 96px 24px 80px; }
        .condition-hero-inner { max-width: 800px; margin: 0 auto; }
        .condition-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 14px; }
        .condition-hero h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 600; color: #fff; line-height: 1.15; margin-bottom: 20px; }
        .condition-hero p { font-size: 1.05rem; color: rgba(255,255,255,0.72); line-height: 1.8; max-width: 640px; margin-bottom: 32px; }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-red { background: #C8302A; color: #fff; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; transition: all 0.2s; box-shadow: 0 8px 20px rgba(200,48,42,0.3); display: inline-flex; align-items: center; gap: 8px; }
        .btn-red:hover { background: #a82520; transform: translateY(-2px); }
        .btn-outline { background: transparent; color: #fff; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; border: 1.5px solid rgba(255,255,255,0.35); transition: all 0.2s; display: inline-flex; align-items: center; }
        .btn-outline:hover { background: rgba(255,255,255,0.1); }

        .breadcrumb { background: #F7F3EE; border-bottom: 1px solid #E5E0D8; padding: 12px 24px; font-size: 13px; color: #6B7280; }
        .breadcrumb-inner { max-width: 1100px; margin: 0 auto; }
        .breadcrumb a { color: #1C2B3A; text-decoration: none; font-weight: 600; }
        .breadcrumb a:hover { color: #C8302A; }
        .breadcrumb span { margin: 0 8px; }

        .condition-body { max-width: 1100px; margin: 0 auto; padding: 72px 24px; display: grid; grid-template-columns: 1fr 320px; gap: 64px; align-items: start; }
        @media (max-width: 900px) { .condition-body { grid-template-columns: 1fr; } }

        .condition-article h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.6rem, 2.5vw, 2.2rem); font-weight: 600; color: #1C2B3A; line-height: 1.25; margin: 48px 0 16px; }
        .condition-article h2:first-child { margin-top: 0; }
        .condition-article p { font-size: 1rem; color: #4B5563; line-height: 1.85; margin-bottom: 18px; }
        .condition-article a { color: #C8302A; font-weight: 600; text-decoration: underline; text-decoration-color: rgba(200,48,42,0.3); text-underline-offset: 3px; transition: text-decoration-color 0.15s; }
        .condition-article a:hover { text-decoration-color: #C8302A; }

        /* Stages of Parkinson's */
        .stages-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 24px 0 32px; }
        @media (max-width: 600px) { .stages-grid { grid-template-columns: 1fr; } }
        .stage-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 12px; padding: 20px; }
        .stage-label { font-size: 11px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: #C8302A; margin-bottom: 6px; }
        .stage-title { font-size: 15px; font-weight: 700; color: #1C2B3A; margin-bottom: 8px; }
        .stage-body { font-size: 0.875rem; color: #6B7280; line-height: 1.7; }

        /* What we provide */
        .provides-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0 32px; }
        @media (max-width: 640px) { .provides-grid { grid-template-columns: 1fr; } }
        .provides-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 12px; padding: 20px; transition: border-color 0.2s, box-shadow 0.2s; }
        .provides-card:hover { border-color: #C8302A; box-shadow: 0 6px 20px rgba(28,43,58,0.08); }
        .provides-card-title { font-size: 14px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
        .provides-card-title::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #C8302A; flex-shrink: 0; }
        .provides-card-body { font-size: 0.875rem; color: #6B7280; line-height: 1.7; }

        /* Signs box */
        .signs-box { background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 14px; padding: 28px 32px; margin: 24px 0 32px; }
        .signs-box-title { font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #1C2B3A; margin-bottom: 16px; }
        .signs-list { list-style: none; padding: 0; margin: 0; }
        .signs-list li { font-size: 0.9375rem; color: #4B5563; line-height: 1.7; padding: 8px 0 8px 22px; position: relative; border-bottom: 1px solid #E5E0D8; }
        .signs-list li:last-child { border-bottom: none; }
        .signs-list li::before { content: ''; position: absolute; left: 0; top: 16px; width: 7px; height: 7px; border-radius: 50%; background: #C8302A; }

        /* Mid CTA */
        .mid-cta { background: #1C2B3A; border-radius: 14px; padding: 32px; margin: 40px 0; }
        .mid-cta h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.5rem; font-weight: 600; color: #fff; margin-bottom: 8px; }
        .mid-cta p { font-size: 0.9rem; color: rgba(255,255,255,0.65); margin-bottom: 20px; line-height: 1.7; }
        .mid-cta-phone { font-size: 1.5rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 12px; }

        /* FAQ */
        .faq-section { margin-top: 48px; }
        .faq-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 12px; }
        .faq-section h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.6rem, 2.5vw, 2.2rem); font-weight: 600; color: #1C2B3A; margin-bottom: 28px; }
        .faq-item { border-bottom: 1px solid #E5E0D8; padding: 20px 0; }
        .faq-q { font-size: 1rem; font-weight: 700; color: #1C2B3A; margin-bottom: 10px; line-height: 1.5; }
        .faq-a { font-size: 0.9375rem; color: #4B5563; line-height: 1.8; }

        /* Sidebar */
        .condition-sidebar { position: sticky; top: 100px; }
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

        /* Related */
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

        /* Bottom CTA */
        .bottom-cta { background: #1C2B3A; padding: 80px 24px; text-align: center; }
        .bottom-cta h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; color: #fff; max-width: 680px; margin: 0 auto 14px; line-height: 1.2; }
        .bottom-cta p { color: rgba(255,255,255,0.65); font-size: 1rem; max-width: 500px; margin: 0 auto 32px; line-height: 1.8; }
        .bottom-cta-phone { font-size: 2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 20px; font-family: 'Cormorant Garamond', Georgia, serif; }
        .cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
      `}</style>

      <main className="condition-page">

        {/* Hero */}
        <section className="condition-hero">
          <div className="condition-hero-inner">
            <p className="condition-eyebrow">Conditions We Support · Toronto & GTA</p>
            <h1>Parkinson's Support at Home</h1>
            <p>
              Parkinson's disease is progressive — which means the support a person
              needs today is not the same as what they will need in a year. Arcadia
              provides home care that adapts as the condition changes, helping people
              with Parkinson's remain at home safely and with dignity across every
              stage of the condition.
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
        </section>

        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="breadcrumb-inner">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/conditions/">Conditions</Link><span>›</span>
            Parkinson's Support
          </div>
        </nav>

        {/* Body + Sidebar */}
        <div className="condition-body">
          <article className="condition-article">

            <h2>What home care for Parkinson's actually involves</h2>
            <p>
              Parkinson's affects movement, balance, speech, and over time cognition —
              in a pattern that is gradual but predictable. The practical challenges
              it creates at home shift as the condition advances: what begins as
              difficulty with fine motor tasks and occasional balance concerns
              eventually becomes significant mobility assistance, swallowing
              management, and in many cases the cognitive and emotional changes
              that accompany later-stage Parkinson's.
            </p>
            <p>
              Home care for Parkinson's works best when it is introduced before
              a crisis makes it urgent. A caregiver who has time to build a
              relationship and understand the person's specific presentation —
              their medication schedule, their movement patterns, what triggers
              anxiety, what helps — provides better care than one
              who starts under pressure when needs have already become complex.
            </p>

            <h2>How Parkinson's presents across the stages</h2>
            <p>
              Understanding how the condition typically progresses helps families
              think ahead about what support will be needed and when.
            </p>

            <div className="stages-grid">
              {[
                {
                  label: 'Early stage',
                  title: 'Managing with some assistance',
                  body: "Tremor, mild stiffness, and slowness of movement. The person remains largely independent but may need help with specific tasks — buttoning clothing, writing, managing medications reliably. Companion care and light assistance are often sufficient.",
                },
                {
                  label: 'Middle stage',
                  title: 'Increasing daily support needed',
                  body: "Balance problems and falls become more significant. On/off fluctuations with medication make function unpredictable across the day. Personal care assistance becomes necessary for bathing, dressing, and meals. Family caregivers often begin to feel the strain at this stage.",
                },
                {
                  label: 'Later stage',
                  title: 'Significant hands-on care required',
                  body: "Mobility may require full assistance or wheelchair use. Swallowing difficulties require careful meal management. Cognitive changes — including dementia in some cases — require adapted communication and supervision. Around-the-clock care may become necessary.",
                },
                {
                  label: 'Throughout',
                  title: 'Cognitive and emotional dimensions',
                  body: "Depression, anxiety, sleep disturbances, and hallucinations can occur at any stage. Cognitive changes range from mild slowing early on to significant impairment later. A caregiver who understands these dimensions provides better care than one focused only on the physical.",
                },
              ].map((item, i) => (
                <div key={i} className="stage-card">
                  <div className="stage-label">{item.label}</div>
                  <div className="stage-title">{item.title}</div>
                  <div className="stage-body">{item.body}</div>
                </div>
              ))}
            </div>

            <h2>Signs that more structured support may be needed</h2>
            <p>
              Families often recognize these patterns before they are ready to
              act on them. If several of the following are familiar, a{' '}
              <Link href="/how-care-starts/care-assessment/">care assessment</Link>{' '}
              is worth arranging:
            </p>

            <div className="signs-box">
              <div className="signs-box-title">Signs worth paying attention to</div>
              <ul className="signs-list">
                <li>Falls or near-falls that are becoming more frequent</li>
                <li>Medication management that is inconsistent or causing concern</li>
                <li>Personal hygiene or grooming that has declined noticeably</li>
                <li>Meals being skipped or nutrition declining</li>
                <li>A family caregiver who is showing signs of exhaustion or burnout</li>
                <li>Increasing anxiety, depression, or sleep disturbance in the person with Parkinson's</li>
                <li>The person spending most of the day alone without adequate supervision</li>
                <li>Swallowing difficulties that have not yet been formally assessed</li>
              </ul>
            </div>

            <h2>What Arcadia's Parkinson's support includes</h2>

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
              <h3>Not sure what level of support is right?</h3>
              <p>
                A{' '}
                <Link href="/how-care-starts/care-assessment/" style={{ color: '#C8302A', fontWeight: 600 }}>
                  care assessment
                </Link>{' '}
                identifies the specific challenges in your situation and helps
                clarify what support would make the most meaningful difference —
                at no cost and with no obligation.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            </div>

            <h2>Medication timing and on/off fluctuations</h2>
            <p>
              One of the most practically important aspects of Parkinson's home
              care is medication management. Many people with Parkinson's experience
              clear periods of better motor function — "on" periods — and periods
              of significantly reduced function — "off" periods — that are closely
              tied to medication timing. A caregiver who understands this pattern
              can time personal care and more demanding activities for the on periods,
              reducing frustration and fall risk.
            </p>
            <p>
              Arcadia's caregivers are briefed on the person's specific medication
              schedule before beginning care, and the care plan is built around
              it — not applied uniformly across the day regardless of the person's
              current state.
            </p>

            <h2>Supporting the family caregiver</h2>
            <p>
              Parkinson's is a long-term condition, and the family members providing
              care — often a spouse — are in it for the duration. The caregiving
              burden intensifies as the condition progresses, and the combination
              of physical demands and the emotional weight of watching a partner or
              parent change over years takes a significant toll.
            </p>
            <p>
              <Link href="/our-services/respite-care/">Respite care</Link> —
              scheduled, reliable time away — is one of the most important things
              Arcadia provides for Parkinson's families. It is not an afterthought
              or a secondary consideration. It is part of the care plan. A family
              caregiver who is not rested cannot provide good care — and consistent relief helps make that sustainable over time.
            </p>
            <p>
              Families who are finding the caregiving role increasingly difficult
              may also find our page on{' '}
              <Link href="/conditions/caregiver-burnout-support/">
                caregiver burnout support
              </Link>{' '}
              useful.
            </p>

            <h2>Parkinson's support across Toronto and the GTA</h2>
            <p>
              Arcadia provides Parkinson's home care support across{' '}
              <Link href="/locations/toronto/">Toronto</Link>,{' '}
              <Link href="/locations/toronto/north-york/">North York</Link>,{' '}
              <Link href="/locations/toronto/scarborough/">Scarborough</Link>,{' '}
              <Link href="/locations/toronto/etobicoke/">Etobicoke</Link>,{' '}
              <Link href="/locations/york-region/markham/">Markham</Link>,{' '}
              <Link href="/locations/york-region/richmond-hill/">Richmond Hill</Link>, and{' '}
              <Link href="/locations/peel-region/mississauga/">Mississauga</Link>.
              We work alongside the treating neurologist, family physician, and
              any allied health professionals involved in the person's care.
            </p>

            {/* FAQ */}
            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions families ask about Parkinson's home care</h2>
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <div className="faq-q">{faq.q}</div>
                  <div className="faq-a">{faq.a}</div>
                </div>
              ))}
            </div>

          </article>

          {/* Sidebar */}
          <aside className="condition-sidebar">
            <div className="sidebar-cta">
              <h3>Talk to our team</h3>
              <p>No obligation. We listen first and help you understand your options.</p>
              <a href="tel:8449770050" className="sidebar-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red-sm">Book a Free Consultation</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Services</div>
              <Link href="/our-services/personal-support-daily-living/" className="sidebar-link">Personal Support & Daily Living</Link>
              <Link href="/our-services/respite-care/" className="sidebar-link">Respite Care</Link>
              <Link href="/our-services/overnight-24-hour-care/" className="sidebar-link">Overnight & 24-Hour Care</Link>
              <Link href="/our-services/companion-care/" className="sidebar-link">Companion Care</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Conditions</div>
              <Link href="/conditions/frailty-fall-prevention/" className="sidebar-link">Frailty & Fall Prevention</Link>
              <Link href="/conditions/dementia-care-at-home/" className="sidebar-link">Dementia Care at Home</Link>
              <Link href="/conditions/caregiver-burnout-support/" className="sidebar-link">Caregiver Burnout Support</Link>
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
              <Link href="/locations/toronto/north-york/" className="sidebar-link">North York</Link>
              <Link href="/locations/toronto/scarborough/" className="sidebar-link">Scarborough</Link>
              <Link href="/locations/toronto/etobicoke/" className="sidebar-link">Etobicoke</Link>
              <Link href="/locations/york-region/markham/" className="sidebar-link">Markham</Link>
              <Link href="/locations/peel-region/mississauga/" className="sidebar-link">Mississauga</Link>
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
                { type: 'Service', title: 'Personal Support & Daily Living', href: '/our-services/personal-support-daily-living/' },
                { type: 'Service', title: 'Respite Care', href: '/our-services/respite-care/' },
                { type: 'Condition', title: 'Frailty & Fall Prevention', href: '/conditions/frailty-fall-prevention/' },
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
          <p className="condition-eyebrow" style={{ textAlign: 'center' }}>Get Started</p>
          <h2>Parkinson's care works best when the right support is in place before it becomes urgent.</h2>
          <p>
            A conversation with our team helps clarify what support would make
            the most difference at this stage — and how to put it in place
            before the situation forces the issue.
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
