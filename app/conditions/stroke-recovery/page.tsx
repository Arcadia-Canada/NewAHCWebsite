// app/conditions/stroke-recovery/page.tsx
// Tier 3 condition page
// Target keyword: "stroke recovery at home toronto" / "home care after stroke gta"
// Persona: spouse or adult child of someone who has just had a stroke or is
// being discharged from stroke rehabilitation — shocked, uncertain about prognosis,
// trying to understand what recovery at home actually requires
// Distinct angle: the sudden onset, the uncertainty of recovery, the discharge gap,
// and the emotional complexity of caring for someone who has changed
// Schema: MedicalCondition + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Stroke Recovery at Home | Toronto & GTA | Arcadia Home Care',
  description: 'Home care support for stroke survivors and their families in Toronto and the GTA. Arcadia helps bridge the gap between hospital discharge and independent living — with clinical guidance, rehabilitation support, and consistent in-home care.',
  alternates: { canonical: 'https://www.arcadiahomecare.ca/conditions/stroke-recovery/' },
}

const faqs = [
  {
    q: 'How much of a stroke survivor\'s function can be expected to return?',
    a: 'Recovery from stroke varies significantly depending on the location and severity of the stroke, the person\'s age and overall health, and how quickly rehabilitation began. The most significant neurological recovery typically occurs in the first three to six months, but improvement can continue for years with the right rehabilitation and support. No one can predict with certainty how much will return — which is why maintaining consistent rehabilitation effort and support at home matters so much during the recovery window.',
  },
  {
    q: 'What is the difference between inpatient stroke rehabilitation and home-based rehabilitation support?',
    a: 'Inpatient rehabilitation is intensive and clinically managed, but it takes place in a controlled environment. Home-based rehabilitation support helps the person apply and generalize their rehabilitation gains in their actual living environment — navigating real spaces, real routines, and real cognitive and physical demands. Many people who perform well in rehabilitation settings encounter significant challenges at home. That gap is what community rehabilitation support is designed to address.',
  },
  {
    q: 'My spouse had a stroke and their personality seems different. Is this part of stroke?',
    a: 'Yes, and it is one of the more difficult aspects of stroke for families to navigate. Emotional and personality changes — including irritability, impulsivity, emotional lability (sudden crying or laughing that seems disproportionate), depression, and reduced social awareness — are common after stroke. These changes result from the neurological injury, not from a choice the person is making. They are manageable with the right support and often improve over time.',
  },
  {
    q: 'Can Arcadia work alongside our stroke rehabilitation team?',
    a: 'Yes — this is how we prefer to work. Our caregivers and Rehabilitation Support Workers implement care plans in coordination with occupational therapists, physiotherapists, speech-language pathologists, and other members of the treating team. We communicate regularly with that team and document observations that are relevant to the rehabilitation process.',
  },
  {
    q: 'We have been told our family member may have another stroke. What can home care do to reduce that risk?',
    a: 'Consistent medication management is one of the most important factors in secondary stroke prevention — missed medications significantly increase risk. Beyond that, home care can support the physical activity, nutritional intake, and routine monitoring that contribute to cardiovascular health. A caregiver who is present and observant can also identify early warning signs and respond quickly, which matters enormously if another event does occur.',
  },
]

export default function StrokeRecoveryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'MedicalCondition',
              'name': 'Stroke',
              'description': 'A stroke occurs when the blood supply to part of the brain is cut off, causing brain cells to die. Effects depend on where the stroke occurs and how much of the brain is affected.',
              "relevantSpecialty": "https://schema.org/Neurologic",
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
                { '@type': 'ListItem', 'position': 3, 'name': 'Stroke Recovery', 'item': 'https://www.arcadiahomecare.ca/conditions/stroke-recovery/' },
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

        /* Urgent banner */
        .urgent-banner {
          background: rgba(200,48,42,0.08);
          border-bottom: 1px solid rgba(200,48,42,0.2);
          padding: 14px 24px;
        }
        .urgent-banner-inner {
          max-width: 1100px; margin: 0 auto;
          display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
        }
        .urgent-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #C8302A; flex-shrink: 0;
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
            <h1>Stroke Recovery at Home in Toronto & the GTA</h1>
            <p>
              A stroke happens suddenly, and the days that follow move fast — hospital,
              rehabilitation, discharge, home. Families find themselves trying to support
              someone's recovery while also adjusting to a person who may be different
              in ways that are hard to name. The right support at home makes a real
              difference to what happens next.
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
              <strong>Discharge coming soon?</strong> We can arrange post-stroke home care
              within 24–48 hours. Call{' '}
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
            Stroke Recovery
          </div>
        </nav>

        {/* Body + Sidebar */}
        <div className="condition-body">
          <article className="condition-article">

            <h2>What families are dealing with after a stroke</h2>
            <p>
              Yesterday the person was fine. Today everything is different. A stroke
              does not come with warning, and the path that follows — hospital,
              rehabilitation unit, discharge — moves at the pace of the medical system,
              not at the pace a family needs to process what has happened.
            </p>
            <p>
              By the time discharge happens, most families are managing two things at
              once: the practical question of what safe care at home requires, and
              the harder emotional reality of adjusting to a person who may have
              changed — in how they move, how they communicate, how they respond
              emotionally, how they are in the world. Both of those are real, and
              both deserve attention.
            </p>
            <p>
              This page is for families at that point — navigating a post-stroke
              discharge in{' '}
              <Link href="/locations/toronto/">Toronto</Link> or{' '}
              <Link href="/locations/york-region/">the GTA</Link>, trying to understand
              what recovery at home actually involves and what support would make
              it safer and more sustainable.
            </p>

            <h2>What stroke recovery at home can include</h2>
            <p>
              Post-stroke home care combines practical daily support with active
              rehabilitation assistance. The right plan depends on the stroke's
              effects — which vary widely depending on location and severity —
              and what the treating team has established as the rehabilitation goals.
              Common elements include:
            </p>

            <div className="includes-grid">
              {[
                {
                  title: 'Personal care and hygiene',
                  body: 'Assistance with bathing, dressing, and grooming — adapted to the specific physical effects of the stroke, whether that is weakness on one side, balance difficulties, or reduced dexterity.',
                },
                {
                  title: 'Mobility and transfer support',
                  body: 'Helping with safe movement around the home, transfers between bed, chair, and bathroom, and reducing fall risk — particularly important in the early weeks after discharge.',
                },
                {
                  title: 'Rehabilitation program support',
                  body: 'Implementing exercises and strategies prescribed by physiotherapists and occupational therapists — helping the person practise and maintain the gains made in formal rehabilitation.',
                },
                {
                  title: 'Communication support',
                  body: 'For stroke survivors with aphasia or other communication difficulties, supporting interaction patiently and in ways consistent with the speech-language pathologist\'s approach.',
                },
                {
                  title: 'Medication management',
                  body: 'Consistent medication reminders and monitoring — particularly important for secondary stroke prevention, where missed doses significantly increase risk.',
                },
                {
                  title: 'Meal preparation and nutrition',
                  body: 'Preparing appropriate meals, monitoring appetite and intake, and adapting to any swallowing or dietary restrictions that resulted from the stroke.',
                },
                {
                  title: 'Cognitive and behavioural support',
                  body: 'Supporting memory, attention, and executive function challenges with structured routines and compensatory strategies, in line with the occupational therapy plan.',
                },
                {
                  title: 'Family caregiver relief',
                  body: 'Providing regular respite so that the spouse or family member who is the primary caregiver can rest, work, and manage their own needs without the situation deteriorating.',
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
              For a more detailed description of how Arcadia structures post-stroke
              rehabilitation support, see our{' '}
              <Link href="/our-services/rehabilitation-support/">
                Rehabilitation Support service page
              </Link>{' '}
              and our{' '}
              <Link href="/our-services/hospital-discharge-support/">
                Hospital Discharge Support page
              </Link>.
            </p>

            {/* Mid-page CTA */}
            <div className="mid-cta">
              <h3>Not sure what level of support is needed?</h3>
              <p>
                A{' '}
                <Link href="/how-care-starts/care-assessment/" style={{ color: '#C8302A', fontWeight: 600 }}>
                  care assessment
                </Link>{' '}
                helps clarify that — at no cost and with no obligation.
                We ask the right questions and give you a clear picture
                of what would actually make a difference at this stage of recovery.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">
                Book a Free Consultation
              </Link>
            </div>

            <h2>The recovery window — why timing matters</h2>
            <p>
              The period following a stroke is not uniform. The first weeks and months after stroke are often the most important for rebuilding function and establishing routines that support recovery. This does not mean recovery stops after that — meaningful
              improvement can continue for years — but the intensity and consistency
              of rehabilitation effort in the early period has a measurable effect
              on long-term outcomes.
            </p>
            <p>
              What this means practically is that the support put in place at discharge
              is not just about safety and daily management. It is also about protecting
              and extending the recovery window. A caregiver who understands stroke
              rehabilitation — who can prompt and support exercise programs, reinforce
              communication strategies, and maintain the structured routines that
              rehabilitation depends on — contributes meaningfully to recovery, not
              just to daily function.
            </p>
            <p>
              This is the distinction between general home care and stroke-specific
              rehabilitation support. Arcadia's{' '}
              <Link href="/our-services/rehabilitation-support/">
                Rehabilitation Support Workers
              </Link>{' '}
              are trained to provide the latter — working under clinical supervision
              and in active coordination with the treating team.
            </p>

            <h2>The changes that are hardest to talk about</h2>
            <p>
              Physical changes after stroke — weakness, balance problems, difficulty
              with speech — are visible and have clear clinical pathways. The changes
              that are harder to navigate are often less visible.
            </p>
            <p>
              Personality and emotional changes are common after stroke. A person
              who was patient may become irritable. Someone who was emotionally
              steady may cry or laugh in ways that feel disproportionate — a
              neurological phenomenon called emotional lability. Depression affects
              a significant proportion of stroke survivors, and anxiety about
              another stroke is nearly universal. Cognitive changes — reduced
              memory, slower processing, difficulty with complex tasks — may be
              subtle but affect daily life in ways that are hard to explain to
              people who did not know the person before.
            </p>
            <p>
              For the spouse or family member living with this, it is a kind of
              grief — mourning someone who is still present, but different.
              That experience is real and valid, and it does not get enough
              acknowledgement in the clinical conversation about stroke recovery.
              If the caregiver dimension of this feels relevant, our page on{' '}
              <Link href="/conditions/caregiver-burnout-support/">
                caregiver burnout support
              </Link>{' '}
              is worth reading alongside this one.
            </p>

            <h2>What good post-stroke home support looks like</h2>

            <div className="helps-grid">
              {[
                {
                  title: 'Caregivers who understand stroke — not just personal care',
                  body: 'Post-stroke care requires more than assistance with daily tasks. It requires an understanding of how stroke affects cognition, communication, and behaviour — and how to support rehabilitation goals within the context of daily life. Families should ask whether caregivers assigned to stroke cases have specific training and experience in this area.',
                },
                {
                  title: 'Active coordination with the rehabilitation team',
                  body: 'A caregiver who is not communicating with the occupational therapist, physiotherapist, and speech-language pathologist is working in isolation from the people who have the most clinical insight into the person\'s recovery. Good post-stroke home support is part of a coordinated team approach, not a separate track.',
                },
                {
                  title: 'Consistent presence — not a rotating cast',
                  body: 'Stroke survivors often have cognitive and emotional vulnerabilities that are worsened by unpredictability and unfamiliar people. Consistent caregivers — the same person or small team on a regular schedule — reduce anxiety, build trust, and allow the caregiver to develop a genuine understanding of the person\'s presentation and progress.',
                },
                {
                  title: 'Honest tracking of progress and honest conversations when it plateaus',
                  body: 'Recovery from stroke is not always linear, and families deserve accurate information about how things are progressing — including when a plateau has been reached and the care plan needs to evolve. A provider who only reports progress is not serving the family or the recovery process well.',
                },
              ].map((item, i) => (
                <div key={i} className="helps-card">
                  <div className="helps-card-title">{item.title}</div>
                  <div className="helps-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            <h2>Stroke recovery support across Toronto and the GTA</h2>
            <p>
              Arcadia provides post-stroke home care and rehabilitation support across{' '}
              <Link href="/locations/toronto/">Toronto</Link>,{' '}
              <Link href="/locations/toronto/north-york-home-care/">North York</Link>,{' '}
              <Link href="/locations/toronto/scarborough-home-care/">Scarborough</Link>,{' '}
              <Link href="/locations/toronto/etobicoke-home-care/">Etobicoke</Link>,{' '}
              <Link href="/locations/york-region/markham-home-care/">Markham</Link>,{' '}
              <Link href="/locations/york-region/richmond-hill-home-care/">Richmond Hill</Link>, and{' '}
              <Link href="/locations/peel-region/mississauga-home-care/">Mississauga</Link>.
              Many of our post-stroke clients are referred following discharge from
              stroke units at Toronto Western, Sunnybrook, Trillium Health Partners,
              and Mackenzie Health.
            </p>
            <p>
              We work alongside Ontario Health atHome to help families understand
              what publicly funded support is available after a stroke, and where
              private home care fills the gaps that the public system does not cover.
              Health professionals can refer directly through our{' '}
              <Link href="/referral-form/">professional referral form</Link>.
            </p>

            {/* FAQ */}
            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions families ask about stroke recovery at home</h2>
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
              <Link href="/our-services/rehabilitation-support/" className="sidebar-link">Rehabilitation Support</Link>
              <Link href="/our-services/hospital-discharge-support/" className="sidebar-link">Hospital Discharge Support</Link>
              <Link href="/our-services/personal-support-daily-living/" className="sidebar-link">Personal Support & Daily Living</Link>
              <Link href="/our-services/respite-care/" className="sidebar-link">Respite Care</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Conditions</div>
              <Link href="/conditions/post-hospital-recovery/" className="sidebar-link">Post-Hospital Recovery</Link>
              <Link href="/conditions/acquired-brain-injury-support/" className="sidebar-link">Acquired Brain Injury</Link>
              <Link href="/conditions/caregiver-burnout-support/" className="sidebar-link">Caregiver Burnout Support</Link>
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
            <h2>More resources for families navigating stroke recovery</h2>
            <div className="related-grid">
              {[
                { type: 'Service', title: 'Rehabilitation Support', href: '/our-services/rehabilitation-support/' },
                { type: 'Service', title: 'Hospital Discharge Support', href: '/our-services/hospital-discharge-support/' },
                { type: 'Condition', title: 'Acquired Brain Injury Support', href: '/conditions/acquired-brain-injury-support/' },
                { type: 'Resource', title: 'Brain Injury & Rehabilitation Guides', href: '/resources/brain-injury-rehabilitation/' },
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
          <h2>The early months after a stroke can shape what recovery looks like at home. The right support helps.</h2>
          <p>
            Whether discharge is tomorrow or already happened, a conversation with
            our team helps clarify what support would make recovery safer and
            more sustainable at home.
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
