// app/conditions/post-hospital-recovery/page.tsx
// Tier 1 condition page
// Target keyword: "home care after hospital discharge toronto"
// Persona: adult child or spouse, time-pressured, often mid-discharge process
// Distinct angle: urgency of discharge, the gap between hospital and home
// Schema: MedicalCondition + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home Care After Hospital Discharge | Toronto & GTA | Arcadia Home Care',
  description: 'Returning home after a hospital stay requires the right support to be safe and successful. Arcadia helps Toronto and GTA families plan and arrange post-hospital home care — quickly, and with clinical guidance.',
  alternates: { canonical: 'https://arcadiahomecare.ca/conditions/post-hospital-recovery/' },
}

const faqs = [
  {
    q: 'How quickly can Arcadia arrange home care after a hospital discharge?',
    a: 'In most cases we can arrange care within 24 to 48 hours of a first conversation. We understand that hospital discharges move quickly and that families often have very little time to plan. If your situation is urgent, call us directly — we will do our best to move at the pace you need.',
  },
  {
    q: 'Will OHIP or Ontario Health atHome cover post-discharge home care?',
    a: 'Ontario Health atHome provides some publicly funded home care following hospital discharge, but the hours allocated are often limited and may not reflect the full level of support a person needs at home. Many families use publicly funded care as a foundation and add private home care to fill the gaps — particularly in the first weeks after discharge when supervision and assistance needs are highest. We can help you understand what you are entitled to and what it would cost to supplement it.',
  },
  {
    q: 'What if the person coming home has dementia or a brain injury in addition to their acute condition?',
    a: 'This is common, and it changes the level of support required significantly. Arcadia specializes in complex cases — including those where dementia, acquired brain injury, or other cognitive conditions are part of the picture. Our clinical team will assess the full situation and build a care plan that accounts for all of it, not just the presenting reason for hospitalization.',
  },
  {
    q: 'What does post-hospital home care actually involve day to day?',
    a: 'It depends on the person and the reason for hospitalization, but common elements include personal care and hygiene assistance, medication management, mobility support, wound care monitoring, meal preparation, companionship, and transportation to follow-up appointments. The goal is to provide enough support that recovery progresses safely — and to catch problems early before they result in readmission.',
  },
  {
    q: 'How do we know when the person is ready to manage with less support?',
    a: 'Recovery is not linear, and the right level of support changes over time. Arcadia monitors progress and stays in regular contact with families. As someone\'s independence returns, we adjust the care plan accordingly. We will also tell you honestly when someone is not progressing as expected and when that warrants a conversation with their medical team.',
  },
]

export default function PostHospitalRecoveryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'MedicalCondition',
              'name': 'Post-Hospital Recovery',
              'description': 'The period following hospital discharge during which a patient requires ongoing support to recover safely at home and avoid readmission.',
              'relevantSpecialty': "https://schema.org/Geriatrics",
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
                { '@type': 'ListItem', 'position': 3, 'name': 'Post-Hospital Recovery', 'item': 'https://arcadiahomecare.ca/conditions/post-hospital-recovery/' },
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
          background: #C8302A; color: #ffffff; padding: 14px 28px;
          border-radius: 8px; font-size: 15px; font-weight: 700;
          text-decoration: none; transition: all 0.2s;
          box-shadow: 0 8px 20px rgba(200,48,42,0.3);
          display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-red:hover { background: #a82520; transform: translateY(-2px); color: #ffffff; }
        .btn-outline {
          background: transparent; color: #fff; padding: 14px 28px;
          border-radius: 8px; font-size: 15px; font-weight: 700;
          text-decoration: none; border: 1.5px solid rgba(255,255,255,0.35);
          transition: all 0.2s;
          display: inline-flex; align-items: center;
        }
        .btn-outline:hover { background: rgba(255,255,255,0.1); color: #fff; }

        /* Urgent banner */
        .urgent-banner {
          background: rgba(200,48,42,0.08); border-bottom: 1px solid rgba(200,48,42,0.2);
          padding: 14px 24px;
        }
        .urgent-banner-inner {
          max-width: 1100px; margin: 0 auto;
          display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
        }
        .urgent-dot {
          width: 8px; height: 8px; border-radius: 50%; background: #C8302A; flex-shrink: 0;
        }
        .urgent-text { font-size: 14px; color: #1C2B3A; line-height: 1.5; }
        .urgent-text strong { font-weight: 700; }
        .urgent-text a { color: #C8302A; font-weight: 700; text-decoration: none; }
        .urgent-text a:hover { text-decoration: underline; }

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
        .condition-article .btn-red, .mid-cta .btn-red { color: #ffffff; text-decoration: none; }
        .condition-article .btn-red:hover, .mid-cta .btn-red:hover { color: #ffffff; text-decoration: none; }
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

        /* Warning signs box */
        .warning-box {
          background: #FFF8F8; border: 1px solid rgba(200,48,42,0.2);
          border-left: 4px solid #C8302A; border-radius: 0 12px 12px 0;
          padding: 24px 28px; margin: 32px 0;
        }
        .warning-box-title {
          font-size: 14px; font-weight: 700; color: #C8302A;
          text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 14px;
        }
        .warning-box ul { margin: 0; padding: 0; list-style: none; }
        .warning-box ul li {
          font-size: 0.9375rem; color: #4B5563; line-height: 1.7;
          padding: 6px 0 6px 20px; position: relative;
          border-bottom: 1px solid rgba(200,48,42,0.1);
        }
        .warning-box ul li:last-child { border-bottom: none; }
        .warning-box ul li::before {
          content: '⚠'; position: absolute; left: 0; top: 7px;
          font-size: 11px; color: #C8302A;
        }

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
        .related-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;
        }
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
          max-width: 500px; margin: 0 auto 32px; line-height: 1.75;
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
            <h1>Home Care After Hospital Discharge in Toronto & the GTA</h1>
            <p>
              Hospitals discharge patients when they are medically stable — not necessarily
              when they are ready to manage at home. The gap between those two things is where
              most families find themselves needing help, often with very little time to plan.
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

        {/* Urgent banner */}
        <div className="urgent-banner">
          <div className="urgent-banner-inner">
            <div className="urgent-dot" />
            <p className="urgent-text">
              <strong>Discharge happening soon?</strong> We can typically arrange care within
              24–48 hours. Call us directly at{' '}
              <a href="tel:8449770050">(844) 977-0050</a> or{' '}
              <Link href="/referral-form/" style={{ color: '#C8302A', fontWeight: 700, textDecoration: 'none' }}>
                submit a referral
              </Link>{' '}
              if you are a health professional.
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="breadcrumb-inner">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/conditions/">Conditions</Link><span>›</span>
            Post-Hospital Recovery
          </div>
        </nav>

        {/* Body + Sidebar */}
        <div className="condition-body">
          <article className="condition-article">

            <h2>The discharge conversation most families aren't prepared for</h2>
            <p>
              The call usually comes faster than expected. Your parent or spouse is being
              discharged tomorrow, or the day after. The hospital needs the bed. They're
              medically stable — which is not the same thing as being ready to be at home alone,
              or with a family member who has their own job, their own household, and their
              own limits.
            </p>
            <p>
              The question families face at that moment is not a small one: what does safe
              recovery at home actually require, and how do we put it in place in the next
              48 hours? That is the situation Arcadia is built to help with. We work with
              families across Toronto and the GTA — often on short notice, and always with
              a clear plan.
            </p>

            <h2>Why the first weeks at home matter most</h2>
            <p>
              The first 30 days after discharge are often the most vulnerable period in a person's recovery.
              Many readmissions are linked to preventable gaps in support — missed medications, falls, inadequate nutrition, or infections that were not caught early enough. The right support in the first weeks at home does
              not just make recovery more comfortable. It meaningfully reduces the risk of
              going back.
            </p>
            <p>
              This is particularly true for older adults and those with underlying conditions
              like{' '}
              <Link href="/conditions/dementia-care-at-home/">dementia</Link>,{' '}
              <Link href="/conditions/stroke-recovery/">stroke</Link>, or{' '}
              <Link href="/conditions/acquired-brain-injury-support/">acquired brain injury</Link>,
              where the stress of hospitalization itself can cause temporary or lasting decline.
              What looks like adequate function in a hospital setting may not hold up at home
              without support.
            </p>

            <h2>What post-hospital home care can include</h2>
            <p>
              The right post-discharge care plan depends on the person, the reason for
              hospitalization, and what support is already available at home. Here is what
              a well-structured plan typically covers:
            </p>

            <div className="includes-grid">
              {[
                {
                  title: 'Personal care and hygiene',
                  body: 'Assistance with bathing, dressing, and grooming — often the first daily activities that become unsafe or exhausting after a hospital stay.',
                },
                {
                  title: 'Medication management',
                  body: 'Prompting medications at the right times, monitoring for side effects, and flagging concerns to family or the medical team before they become problems.',
                },
                {
                  title: 'Mobility and fall prevention',
                  body: 'Supporting safe movement around the home, helping with transfers, and reducing fall risk — particularly important in the first days and weeks after discharge.',
                },
                {
                  title: 'Wound care monitoring',
                  body: 'Observing surgical sites or wounds for signs of infection and communicating promptly with family or healthcare providers when something changes.',
                },
                {
                  title: 'Meal preparation and nutrition',
                  body: 'Preparing appropriate meals and monitoring intake — recovery depends on nutrition, and many patients leave hospital with reduced appetite or specific dietary needs.',
                },
                {
                  title: 'Transportation to follow-up appointments',
                  body: 'Getting to follow-up appointments is often the first practical challenge after discharge. Caregivers can accompany and assist with this.',
                },
                {
                  title: 'Companionship and orientation',
                  body: 'For patients with cognitive conditions, returning home after a hospital stay can be disorienting. Consistent presence and familiar routines help re-establish stability.',
                },
                {
                  title: 'Family caregiver relief',
                  body: 'Family members who take on post-discharge care often do so without a plan for their own rest. Structured support gives them the ability to step back without stepping away.',
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

            <p>
              For families dealing with a more complex post-discharge situation — including
              rehabilitation following surgery, stroke, or brain injury — our{' '}
              <Link href="/our-services/rehabilitation-support/">rehabilitation support service</Link>{' '}
              and{' '}
              <Link href="/our-services/hospital-discharge-support/">hospital discharge support service</Link>{' '}
              pages go into more detail.
            </p>

            {/* Mid-page CTA */}
            <div className="mid-cta">
              <h3>Discharge happening in the next day or two?</h3>
              <p>
                Call us now. We can move quickly, ask the right questions, and have a
                care plan in place before your loved one arrives home. There is no
                obligation — just a conversation that helps clarify what is needed.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">
                Book a Free Consultation
              </Link>
            </div>

            <h2>Signs the current level of support is not enough</h2>
            <p>
              Post-discharge situations can look fine on the surface and still be quietly
              unsafe. These are the signs that warrant a closer look — or a call to the
              medical team:
            </p>

            <div className="warning-box">
              <div className="warning-box-title">Watch for these after discharge</div>
              <ul>
                <li>Confusion or disorientation that was not present before hospitalization</li>
                <li>Missed medications or difficulty managing a new medication routine</li>
                <li>A fall, near-fall, or significant difficulty moving around the home</li>
                <li>Reduced appetite or difficulty eating and drinking adequately</li>
                <li>Signs of wound infection — redness, swelling, discharge, or fever</li>
                <li>Significant fatigue that is not improving over the first one to two weeks</li>
                <li>A family caregiver who is not sleeping, not eating, or not coping</li>
              </ul>
            </div>

            <p>
              Any of these warrants either a call to the discharging hospital or to a home
              care provider who can assess the situation. If readmission feels possible,
              do not wait — call the medical team directly.
            </p>

            <h2>Understanding publicly funded vs. private post-discharge care in Ontario</h2>
            <p>
              Following a hospital discharge in Ontario, most patients are assessed by
              Ontario Health atHome (formerly CCAC) for publicly funded home care support.
              This can include nursing visits, personal support worker hours, and therapy
              services — but the allocation is often limited, and waiting times can mean
              there is a gap between discharge and the first publicly funded visit.
            </p>
            <p>
              Many families use private home care to bridge that gap, or to supplement
              publicly funded hours when the level of support provided is not sufficient
              for safe recovery. Arcadia works alongside Ontario Health atHome — not
              instead of it. We can help you understand what you are entitled to, and
              what it would cost to add private support where the gaps are largest.
            </p>
            <p>
              If you have questions about navigating the Ontario system following a
              discharge, our team is familiar with how it works across{' '}
              <Link href="/locations/toronto/">Toronto</Link>,{' '}
              <Link href="/locations/york-region/">York Region</Link>,{' '}
              <Link href="/locations/peel-region/mississauga-home-care/">Mississauga</Link>, and{' '}
              <Link href="/locations/durham-region/">Durham Region</Link>.
            </p>

            <h2>For health professionals: referring a patient for post-discharge care</h2>
            <p>
              Discharge planners, social workers, and clinical teams at Toronto-area hospitals
              can refer directly to Arcadia for post-discharge home care. We are familiar with the discharge processes at major GTA hospital networks and can receive referrals quickly from clinical teams across the region.
            </p>
            <p>
              To refer a patient, use our{' '}
              <Link href="/referral-form/">professional referral form</Link>{' '}
              or call us directly. We respond to referrals promptly and communicate clearly
              with the sending team about care plan and progress.
            </p>

            {/* FAQ */}
            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions families ask about post-discharge home care</h2>
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
              <h3>Need care arranged quickly?</h3>
              <p>We can typically be in place within 24–48 hours of a first conversation.</p>
              <a href="tel:8449770050" className="sidebar-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red-sm">Book a Free Consultation</Link>
            </div>

            <div className="sidebar-card" style={{ marginTop: 20 }}>
              <div className="sidebar-card-title">Related Services</div>
              <Link href="/our-services/hospital-discharge-support/" className="sidebar-link">Hospital Discharge Support</Link>
              <Link href="/our-services/rehabilitation-support/" className="sidebar-link">Rehabilitation Support</Link>
              <Link href="/our-services/personal-support-daily-living/" className="sidebar-link">Personal Support & Daily Living</Link>
              <Link href="/our-services/overnight-24-hour-care/" className="sidebar-link">Overnight & 24-Hour Care</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Conditions</div>
              <Link href="/conditions/stroke-recovery/" className="sidebar-link">Stroke Recovery</Link>
              <Link href="/conditions/acquired-brain-injury-support/" className="sidebar-link">Acquired Brain Injury</Link>
              <Link href="/conditions/frailty-fall-prevention/" className="sidebar-link">Frailty & Fall Prevention</Link>
              <Link href="/conditions/palliative-serious-illness/" className="sidebar-link">Palliative & Serious Illness</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">For Health Professionals</div>
              <Link href="/referral-form/" className="sidebar-link">Submit a Referral</Link>
              <Link href="/contact/" className="sidebar-link">Contact Our Team</Link>
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
            <h2>More resources for families navigating a hospital discharge</h2>
            <div className="related-grid">
              {[
                { type: 'Service', title: 'Hospital Discharge Support', href: '/our-services/hospital-discharge-support/' },
                { type: 'Service', title: 'Rehabilitation Support', href: '/our-services/rehabilitation-support/' },
                { type: 'Condition', title: 'Stroke Recovery at Home', href: '/conditions/stroke-recovery/' },
                { type: 'Condition', title: 'Frailty & Fall Prevention', href: '/conditions/frailty-fall-prevention/' },
                { type: 'Resource', title: 'Navigating a Hospital Discharge: A Guide for Families', href: '/resources/hospital-discharge-guides/transitioning-home-from-hospital/' },
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
          <h2>The first weeks at home are the most important. Let's make sure they go well.</h2>
          <p>
            Whether the discharge is tomorrow or next week, a conversation now gives you
            more options — and more confidence in what comes next.
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
