// app/conditions/frailty-fall-prevention/page.tsx
// Tier 3 condition page
// Target keyword: "fall prevention home care toronto" / "frailty support at home gta"
// Persona: adult child who has noticed a parent slowing down, becoming less steady,
// more fearful of falling — no crisis yet, but a growing sense that something
// needs to change before one happens
// Distinct angle: prevention before the fall, not recovery after it
// Tone: calm, practical, forward-looking — not urgent, not alarming
// Schema: MedicalCondition + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Frailty & Fall Prevention at Home | Toronto & GTA | Arcadia Home Care',
  description: 'Home care support for older adults at risk of falls in Toronto and the GTA. Arcadia helps families put the right support in place before a fall happens — keeping aging parents safe, active, and independent at home.',
  alternates: { canonical: 'https://arcadiahomecare.ca/conditions/frailty-fall-prevention/' },
}

const faqs = [
  {
    q: 'How do I know if my parent is at risk of falling?',
    a: 'The most reliable indicators are a previous fall, difficulty getting up from a chair without using the arms, noticeably slower walking pace, shuffling steps, difficulty on stairs, reduced grip strength, and any report from your parent that they feel unsteady or have "nearly fallen." Balance and strength changes often precede a fall by months — which is why acting on these signs early makes such a meaningful difference.',
  },
  {
    q: 'Is falling just part of getting older, or can it be meaningfully prevented?',
    a: 'Falls are common in older adults, but they are not inevitable. A significant proportion of falls are preventable with the right combination of home modifications, exercise and strength maintenance, medication review, and consistent supervision during higher-risk activities. The goal is not to eliminate all risk — that is neither possible nor desirable — but to reduce the frequency and severity of falls and to ensure that when a fall does occur, someone is there.',
  },
  {
    q: 'My parent lives alone and I am worried about them falling when no one is there. What can home care do?',
    a: 'For someone living alone, consistent home care presence provides both practical support and supervision during the higher-risk parts of the day — mornings, when fatigue and stiffness are greatest, and evenings. A caregiver who knows the person well also notices changes in steadiness, strength, and confidence that a family member visiting weekly may miss. Early detection of decline matters as much as the support itself.',
  },
  {
    q: 'My parent refuses to use a walker or accept help. How do we handle that?',
    a: 'Resistance to accepting help — including mobility aids — is very common and usually stems from a mix of pride, fear of losing independence, and not wanting to worry family. It rarely resolves through argument. More effective approaches involve reframing help as an extension of independence rather than a replacement for it, involving the family physician in the conversation, and introducing support gradually rather than all at once. Our team has navigated this with many families and can help you think through what might work.',
  },
  {
    q: 'Should we be making changes to the home as well as arranging care?',
    a: 'Yes — home modifications and care are most effective together. Common modifications that reduce fall risk include removing loose rugs, improving lighting particularly on stairs and in bathrooms, installing grab bars in bathrooms and near the bed, and ensuring frequently used items are accessible without reaching or climbing. An occupational therapist assessment can identify specific risks in a particular home. Our team can coordinate with an OT if one is not already involved.',
  },
]

const warningSignsList = [
  'A fall in the past year — even one that caused no injury',
  'Difficulty getting up from a chair without pushing off with both arms',
  'Noticeably slower walking pace, shuffling steps, or reduced stride length',
  'Hesitation on stairs, uneven surfaces, or in the dark',
  'Reduced grip strength — difficulty opening jars, turning taps, or holding cups',
  'Increasing fear of falling, or avoiding activities because of that fear',
  'Medication changes — particularly new medications affecting balance or blood pressure',
  'A recent illness or hospitalization, which often causes temporary but significant deconditioning',
]

export default function FrailtyFallPreventionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'MedicalCondition',
              'name': 'Frailty and Fall Risk in Older Adults',
              'description': 'Frailty is a state of increased vulnerability to adverse outcomes in older adults, characterized by reduced strength, endurance, and physiological function. Fall risk is closely associated with frailty and is a leading cause of injury and loss of independence in older adults.',
              'relevantSpecialty': 'Geriatrics',
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
                { '@type': 'ListItem', 'position': 2, 'name': 'Conditions', 'item': 'https://arcadiahomecare.ca/conditions/' },
                { '@type': 'ListItem', 'position': 3, 'name': 'Frailty & Fall Prevention', 'item': 'https://arcadiahomecare.ca/conditions/frailty-fall-prevention/' },
              ],
            },
          ]),
        }}
      />

      <style>{`
        .condition-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }

        .condition-hero { background: #1C2B3A; padding: 96px 24px 80px; }
        .condition-hero-inner { max-width: 800px; margin: 0 auto; }
        .condition-eyebrow {
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #C8302A; margin-bottom: 14px;
        }
        .condition-hero h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          font-weight: 600; color: #fff; line-height: 1.15; margin-bottom: 20px;
        }
        .condition-hero p {
          font-size: 1.05rem; color: rgba(255,255,255,0.72);
          line-height: 1.8; max-width: 640px; margin-bottom: 32px;
        }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-red {
          background: #C8302A; color: #fff; padding: 14px 28px;
          border-radius: 8px; font-size: 15px; font-weight: 700;
          text-decoration: none; transition: all 0.2s;
          box-shadow: 0 8px 20px rgba(200,48,42,0.3);
          display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-red:hover { background: #a82520; transform: translateY(-2px); color: #fff; }
        .btn-outline {
          background: transparent; color: #fff; padding: 14px 28px;
          border-radius: 8px; font-size: 15px; font-weight: 700;
          text-decoration: none; border: 1.5px solid rgba(255,255,255,0.35);
          transition: all 0.2s;
          display: inline-flex; align-items: center;
        }
        .btn-outline:hover { background: rgba(255,255,255,0.1); color: #fff; }

        .breadcrumb {
          background: #F7F3EE; border-bottom: 1px solid #E5E0D8;
          padding: 12px 24px; font-size: 13px; color: #6B7280;
        }
        .breadcrumb-inner { max-width: 1100px; margin: 0 auto; }
        .breadcrumb a { color: #1C2B3A; text-decoration: none; font-weight: 600; }
        .breadcrumb a:hover { color: #C8302A; }
        .breadcrumb span { margin: 0 8px; }

        .condition-body {
          max-width: 1100px; margin: 0 auto; padding: 72px 24px;
          display: grid; grid-template-columns: 1fr 320px; gap: 64px; align-items: start;
        }
        @media (max-width: 900px) { .condition-body { grid-template-columns: 1fr; } }

        .condition-article h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 600; color: #1C2B3A; line-height: 1.25; margin: 48px 0 16px;
        }
        .condition-article h2:first-child { margin-top: 0; }
        .condition-article p {
          font-size: 1rem; color: #4B5563; line-height: 1.85; margin-bottom: 18px;
        }
        .condition-article a {
          color: #C8302A; font-weight: 600; text-decoration: underline;
          text-decoration-color: rgba(200,48,42,0.3); text-underline-offset: 3px;
          transition: text-decoration-color 0.15s;
        }
        .condition-article a:hover { text-decoration-color: #C8302A; }
        .condition-article ul { margin: 0 0 24px 0; padding: 0; list-style: none; }
        .condition-article ul li {
          font-size: 0.9625rem; color: #4B5563; line-height: 1.7;
          padding: 8px 0 8px 22px; position: relative;
          border-bottom: 1px solid #F0EBE3;
        }
        .condition-article ul li:last-child { border-bottom: none; }
        .condition-article ul li::before {
          content: ''; position: absolute; left: 0; top: 16px;
          width: 7px; height: 7px; border-radius: 50%; background: #C8302A;
        }

        /* Warning signs box */
        .signs-box {
          background: #F7F3EE; border: 1px solid #E5E0D8;
          border-radius: 14px; padding: 28px 32px; margin: 24px 0 32px;
        }
        .signs-box-title {
          font-size: 13px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: #1C2B3A; margin-bottom: 16px;
        }
        .signs-box ul { margin: 0; padding: 0; list-style: none; }
        .signs-box ul li {
          font-size: 0.9375rem; color: #4B5563; line-height: 1.7;
          padding: 8px 0 8px 22px; position: relative;
          border-bottom: 1px solid #E5E0D8;
        }
        .signs-box ul li:last-child { border-bottom: none; }
        .signs-box ul li::before {
          content: ''; position: absolute; left: 0; top: 16px;
          width: 7px; height: 7px; border-radius: 50%; background: #C8302A;
        }

        .includes-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 24px 0 32px;
        }
        @media (max-width: 600px) { .includes-grid { grid-template-columns: 1fr; } }
        .includes-item {
          display: flex; gap: 12px; align-items: flex-start;
          background: #FAFAF8; border: 1px solid #E5E0D8;
          border-radius: 10px; padding: 16px;
        }
        .includes-dot {
          width: 8px; height: 8px; border-radius: 50%; background: #C8302A;
          flex-shrink: 0; margin-top: 6px;
        }
        .includes-text { font-size: 0.9rem; color: #4B5563; line-height: 1.6; }
        .includes-text strong { color: #1C2B3A; display: block; margin-bottom: 2px; font-size: 14px; }

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

        .helps-grid { display: grid; grid-template-columns: 1fr; gap: 16px; margin: 24px 0 32px; }
        .helps-card {
          background: #FAFAF8; border: 1px solid #E5E0D8;
          border-left: 4px solid #C8302A; border-radius: 0 12px 12px 0; padding: 20px 24px;
        }
        .helps-card-title { font-size: 15px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; }
        .helps-card-body { font-size: 0.9rem; color: #6B7280; line-height: 1.7; }

        .faq-section { margin-top: 48px; }
        .faq-eyebrow {
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #C8302A; margin-bottom: 12px;
        }
        .faq-section h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 600; color: #1C2B3A; margin-bottom: 28px;
        }
        .faq-item { border-bottom: 1px solid #E5E0D8; padding: 20px 0; }
        .faq-q { font-size: 1rem; font-weight: 700; color: #1C2B3A; margin-bottom: 10px; line-height: 1.5; }
        .faq-a { font-size: 0.9375rem; color: #4B5563; line-height: 1.8; }

        .condition-sidebar { position: sticky; top: 100px; }
        .sidebar-card {
          background: #FAFAF8; border: 1px solid #E5E0D8;
          border-radius: 14px; padding: 28px; margin-bottom: 20px;
        }
        .sidebar-card-title {
          font-size: 12px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #C8302A; margin-bottom: 16px;
        }
        .sidebar-link {
          display: flex; align-items: center; gap: 8px;
          font-size: 14px; font-weight: 600; color: #1C2B3A;
          text-decoration: none; padding: 10px 0;
          border-bottom: 1px solid #F0EBE3; transition: color 0.15s;
        }
        .sidebar-link:last-child { border-bottom: none; }
        .sidebar-link:hover { color: #C8302A; }
        .sidebar-link::before { content: '→'; color: #C8302A; font-size: 13px; }
        .sidebar-cta { background: #1C2B3A; border-radius: 14px; padding: 28px; text-align: center; }
        .sidebar-cta h3 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.3rem; font-weight: 600; color: #fff; margin-bottom: 8px;
        }
        .sidebar-cta p { font-size: 0.875rem; color: rgba(255,255,255,0.6); margin-bottom: 16px; line-height: 1.65; }
        .sidebar-phone {
          font-size: 1.2rem; font-weight: 700; color: #C8302A;
          text-decoration: none; display: block; margin-bottom: 12px;
        }
        .btn-red-sm {
          background: #C8302A; color: #fff; padding: 11px 20px;
          border-radius: 8px; font-size: 13px; font-weight: 700;
          text-decoration: none; display: inline-flex; align-items: center; transition: background 0.2s;
        }
        .btn-red-sm:hover { background: #a82520; color: #fff; }

        .related-section { background: #F7F3EE; border-top: 1px solid #E5E0D8; padding: 56px 24px; }
        .related-inner { max-width: 1100px; margin: 0 auto; }
        .related-eyebrow {
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #C8302A; margin-bottom: 10px;
        }
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
        .related-card-type {
          font-size: 10px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #C8302A; margin-bottom: 8px;
        }
        .related-card-title { font-size: 15px; font-weight: 700; color: #1C2B3A; line-height: 1.4; }
        .related-card-arrow { font-size: 13px; color: #C8302A; margin-top: 10px; display: block; }

        .bottom-cta { background: #1C2B3A; padding: 80px 24px; text-align: center; }
        .bottom-cta h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600; color: #fff; max-width: 680px;
          margin: 0 auto 14px; line-height: 1.2;
        }
        .bottom-cta p {
          color: rgba(255,255,255,0.65); font-size: 1rem;
          max-width: 500px; margin: 0 auto 32px; line-height: 1.8;
        }
        .bottom-cta-phone {
          font-size: 2rem; font-weight: 700; color: #C8302A;
          text-decoration: none; display: block; margin-bottom: 20px;
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .bottom-cta .btn-red,
        .bottom-cta .btn-outline { color: #fff; }
        .bottom-cta .btn-outline:hover { color: #fff; }
      `}</style>

      <main className="condition-page">

        {/* Hero */}
        <section className="condition-hero">
          <div className="condition-hero-inner">
            <p className="condition-eyebrow">Conditions We Support · Toronto & GTA</p>
            <h1>Frailty & Fall Prevention at Home in Toronto & the GTA</h1>
            <p>
              Most families contact Arcadia after something has already happened —
              a fall, a hospital stay, a diagnosis. This page is for families who
              are paying attention before that point. Who have noticed the changes,
              felt the unease, and want to do something about it while there is
              still time to prevent rather than respond.
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
            Frailty & Fall Prevention
          </div>
        </nav>

        {/* Body + Sidebar */}
        <div className="condition-body">
          <article className="condition-article">

            <h2>What families notice before the fall happens</h2>
            <p>
              It is rarely dramatic. It starts with small things that are easy to
              explain away. Your parent holds the handrail on stairs they used to
              take without thinking. They get up from a chair more slowly, and
              pause at the top before moving. They have stopped going out alone
              in the evening. They mention being tired more often, or that they
              nearly slipped in the bathroom last week.
            </p>
            <p>
              None of these things are emergencies. But they are signals — and
              families who pay attention to signals rather than wait for a crisis
              have a much wider range of options available to them. The period
              before a significant fall is precisely when support makes the most
              difference: when routines can still be built, strength can still be
              maintained, and the environment can be adapted while the person still
              has the capacity to adjust to it.
            </p>
            <p>
              Falls in older adults are not simply unfortunate events. They are often
              turning points — after which independence, confidence, and function
              may take months to recover, if they recover at all. For many older
              adults in{' '}
              <Link href="/locations/toronto/">Toronto</Link> and{' '}
              <Link href="/locations/york-region/">across the GTA</Link>,
              a fall is the beginning of a much harder chapter. The goal of fall
              prevention support is to delay or avoid that chapter entirely.
            </p>

            <h2>Signs that fall risk may be increasing</h2>
            <p>
              These are the changes that tend to appear before a significant fall.
              If several of these are familiar, the situation warrants a closer look —
              and probably a{' '}
              <Link href="/how-care-starts/care-assessment/">care assessment</Link>:
            </p>

            <div className="signs-box">
              <div className="signs-box-title">Signs worth paying attention to</div>
              <ul>
                {warningSignsList.map((sign, i) => (
                  <li key={i}>{sign}</li>
                ))}
              </ul>
            </div>

            <p>
              A previous fall — even one that caused no significant injury — is
              the single strongest predictor of another fall. If your parent has
              fallen in the past year and nothing has changed in their environment
              or support, the risk of another fall remains significantly higher.
            </p>

            <h2>What fall prevention home support can include</h2>
            <p>
              Effective fall prevention is not a single intervention. It is a combination
              of daily support, structured activity, home safety, and consistent monitoring
              that together reduce the frequency and severity of falls over time.
            </p>

            <div className="includes-grid">
              {[
                {
                  title: 'Supervision during higher-risk activities',
                  body: 'Morning routines, bathing, and transitions between furniture and rooms are the highest-risk moments. A caregiver who is present and attentive during these times significantly reduces the risk of an unwitnessed fall.',
                },
                {
                  title: 'Strength and mobility maintenance',
                  body: 'Supporting prescribed exercise programs — from physiotherapy or occupational therapy — and encouraging regular movement throughout the day. Deconditioning happens quickly in older adults and accelerates fall risk.',
                },
                {
                  title: 'Home safety and environment',
                  body: 'Identifying and addressing hazards — loose rugs, poor lighting, cluttered pathways, unsafe bathroom conditions — and ensuring mobility aids are accessible and being used correctly.',
                },
                {
                  title: 'Medication reminders and monitoring',
                  body: 'Many medications affect balance, blood pressure, and alertness. Consistent medication management and observation for side effects reduces one of the most modifiable risk factors for falls.',
                },
                {
                  title: 'Nutrition and hydration',
                  body: 'Dehydration and poor nutrition contribute to weakness, dizziness, and cognitive impairment — all of which increase fall risk. Regular meals and adequate fluid intake are a meaningful part of prevention.',
                },
                {
                  title: 'Companionship and confidence',
                  body: 'Fear of falling is itself a risk factor — it leads to reduced activity, which accelerates deconditioning. A consistent and trusted presence can reduce anxiety and support gentle reengagement with daily movement.',
                },
                {
                  title: 'Overnight monitoring',
                  body: 'Many falls occur at night — during trips to the bathroom when the person is drowsy and the home is dark. Overnight support provides supervision during this higher-risk period.',
                },
                {
                  title: 'Family caregiver relief',
                  body: 'Families who are constantly worried about a parent falling carry a significant burden. Consistent care coverage gives family members genuine peace of mind — not just reassurance.',
                },
              ].map((item, i) => (
                <div key={i} className="includes-item">
                  <div className="includes-dot" />
                  <div className="includes-text">
                    <strong>{item.title}</strong>
                    {item.body}
                  </div>
                </div>
              ))}
            </div>

            {/* Mid-page CTA */}
            <div className="mid-cta">
              <h3>Not sure where to start?</h3>
              <p>
                A{' '}
                <Link href="/how-care-starts/care-assessment/" style={{ color: '#C8302A', fontWeight: 600 }}>
                  care assessment
                </Link>{' '}
                identifies the specific risks in your parent's situation and helps
                clarify what support would make the most meaningful difference —
                at no cost and with no obligation.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">
                Book a Free Consultation
              </Link>
            </div>

            <h2>What frailty actually means — and why it matters</h2>
            <p>
              Frailty is not the same as old age, and it is not the same as having
              a specific medical condition. It is a state of reduced physiological
              reserve — less strength, less endurance, slower recovery from illness
              or injury — that makes a person more vulnerable to adverse outcomes
              from events that a younger or more robust person would manage without
              significant consequence.
            </p>
            <p>
              A person who is frail may look fine day to day. But a minor illness,
              a medication change, a few days of reduced activity, or a stressful
              event can tip them into a significantly worse state — one that takes
              much longer to recover from than expected. Frailty is not a permanent
              state — it can be reduced with the right support — but it is also
              easy to miss until something goes wrong.
            </p>
            <p>
              What this means practically is that families who are noticing early
              signs of frailty — increasing fatigue, weight loss, slowed movement,
              reduced activity — are seeing something real, and acting on those
              signs is worthwhile. The earlier support is put in place, the more
              of the person's current function can be preserved.
            </p>

            <h2>The case for acting before a crisis</h2>
            <p>
              Most home care conversations happen after something has gone wrong.
              A fall, a hospitalization, a diagnosis that forces the issue. At that
              point, the options are more limited, the decisions are more pressured,
              and the person's starting point for recovery is lower than it would
              have been.
            </p>
            <p>
              Families who reach out before a crisis — because they have been paying
              attention, or because a physician flagged increasing fall risk — have
              more time to find the right caregiver, introduce support gradually in
              a way the person accepts more easily, and build the routine before it
              is urgently needed. The person's own willingness to accept help is
              also typically higher before a crisis than after one.
            </p>
            <p>
              If you are reading this because something feels like it is heading in
              the wrong direction, that instinct is worth acting on. A{' '}
              <Link href="/how-care-starts/care-assessment/">care assessment</Link>{' '}
              is a low-commitment starting point. Our team can also help you think
              through how to introduce the conversation with a parent who is
              resistant to the idea of support — which is one of the most common
              challenges families in this situation face. You can also read more
              about{' '}
              <Link href="/our-services/personal-support-daily-living/">
                personal support and daily living assistance
              </Link>{' '}
              and{' '}
              <Link href="/our-services/companion-care/">
                companion care
              </Link>{' '}
              — both of which are often the starting point for families navigating
              frailty and fall risk.
            </p>

            <h2>Fall prevention support across Toronto and the GTA</h2>
            <p>
              Arcadia provides frailty and fall prevention home care across{' '}
              <Link href="/locations/toronto/">Toronto</Link>,{' '}
              <Link href="/locations/toronto/north-york-home-care/">North York</Link>,{' '}
              <Link href="/locations/toronto/scarborough-home-care/">Scarborough</Link>,{' '}
              <Link href="/locations/toronto/etobicoke-home-care/">Etobicoke</Link>,{' '}
              <Link href="/locations/york-region/markham-home-care/">Markham</Link>,{' '}
              <Link href="/locations/york-region/richmond-hill-home-care/">Richmond Hill</Link>, and{' '}
              <Link href="/locations/peel-region/mississauga-home-care/">Mississauga</Link>.
              We work alongside family physicians, geriatricians, and occupational
              therapists to ensure the care plan reflects the full picture of the
              person's situation — not just the presenting concern.
            </p>

            {/* FAQ */}
            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions families ask about frailty and fall prevention</h2>
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

            <div className="sidebar-card" style={{ marginTop: 20 }}>
              <div className="sidebar-card-title">Related Services</div>
              <Link href="/our-services/personal-support-daily-living/" className="sidebar-link">Personal Support & Daily Living</Link>
              <Link href="/our-services/companion-care/" className="sidebar-link">Companion Care</Link>
              <Link href="/our-services/overnight-24-hour-care/" className="sidebar-link">Overnight & 24-Hour Care</Link>
              <Link href="/our-services/respite-care/" className="sidebar-link">Respite Care</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Conditions</div>
              <Link href="/conditions/post-hospital-recovery/" className="sidebar-link">Post-Hospital Recovery</Link>
              <Link href="/conditions/dementia-care-at-home/" className="sidebar-link">Dementia Care at Home</Link>
              <Link href="/conditions/caregiver-burnout-support/" className="sidebar-link">Caregiver Burnout Support</Link>
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

        {/* Related links */}
        <section className="related-section">
          <div className="related-inner">
            <p className="related-eyebrow">You May Also Find Helpful</p>
            <h2>More resources for families navigating frailty and fall risk</h2>
            <div className="related-grid">
              {[
                { type: 'Service', title: 'Personal Support & Daily Living', href: '/our-services/personal-support-daily-living/' },
                { type: 'Service', title: 'Companion Care', href: '/our-services/companion-care/' },
                { type: 'Condition', title: 'Post-Hospital Recovery', href: '/conditions/post-hospital-recovery/' },
                { type: 'Resource', title: 'Navigating Home Care Guides', href: '/resources/' },
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
          <h2>It is often easier to put support in place early than to rebuild after a fall.</h2>
          <p>
            A conversation with our team costs nothing and can help you understand
            what support would make the biggest difference at this stage —
            before the situation forces the decision.
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
