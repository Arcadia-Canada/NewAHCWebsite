// app/conditions/alzheimers-care/page.tsx
// Tier 2 condition page
// Target keyword: "alzheimers care at home toronto"
// Persona: adult child or spouse noticing increasing memory loss, confusion,
// wandering risk, and caregiver strain at home
// Distinct angle: practical home support, routine, safety, family guidance
// Schema: MedicalCondition + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Alzheimer's Care at Home | Toronto & GTA | Arcadia Home Care",
  description:
    "Specialized Alzheimer's care at home in Toronto and the GTA. Arcadia helps families manage memory loss, safety concerns, routines, and caregiver strain with structured home support.",
  alternates: {
    canonical: 'https://www.arcadiahomecare.ca/conditions/alzheimers-care/',
  },
}

const faqs = [
  {
    q: "What is the difference between Alzheimer's home care and regular senior care?",
    a: "Alzheimer's care at home requires more than help with daily tasks. It involves understanding memory loss, confusion, behavioural changes, safety risks, and the importance of routine. A caregiver supporting someone with Alzheimer's needs to know how to reduce distress, respond calmly to repetition or confusion, and maintain structure in a way that protects dignity. That is different from standard senior care focused mainly on physical assistance.",
  },
  {
    q: "Can Arcadia help if my parent is repeating questions, forgetting medication, or becoming unsafe alone?",
    a: "Yes. These are some of the most common reasons families reach out. Repetition, missed medications, wandering risk, leaving the stove on, poor judgment, and difficulty managing personal care are often signs that more structured support is needed. Our role is not just to assist in the moment, but to help reduce risk and create more stability at home.",
  },
  {
    q: "Do you support people in the early stages of Alzheimer's, or only later stages?",
    a: "Both. In the early stages, support often focuses on routine, reminders, appointments, meal preparation, supervision, and helping the person remain independent for as long as possible. In later stages, care becomes more hands-on and may include full personal care, mobility support, behavioural guidance, feeding assistance, and close supervision. The right level of support depends on the person's current presentation, not just the diagnosis.",
  },
  {
    q: "How do you match caregivers for someone with Alzheimer's?",
    a: "Matching matters greatly in dementia care. We look not only at experience, but also at temperament, communication style, patience, consistency, and the ability to work calmly within the person's routine. For someone living with Alzheimer's, the wrong match can increase distress. The right match can make daily life significantly more stable.",
  },
  {
    q: "Can home care delay the move to long-term care?",
    a: "In some situations, yes. Home care cannot change the underlying progression of Alzheimer's disease, but the right support can reduce risk, support the family, and help the person remain at home longer than would otherwise be possible. That depends on the severity of symptoms, the safety of the home environment, the level of caregiver strain, and the amount of support in place.",
  },
]

export default function AlzheimersCarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'MedicalCondition',
              name: "Alzheimer's Disease",
              description:
                "Alzheimer's disease is a progressive neurological condition that affects memory, thinking, behaviour, and the ability to manage daily life independently.",
              relevantSpecialty: 'https://schema.org/Geriatric',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://www.arcadiahomecare.ca/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Conditions',
                  item: 'https://www.arcadiahomecare.ca/conditions/',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: "Alzheimer's Care",
                  item: 'https://www.arcadiahomecare.ca/conditions/alzheimers-care/',
                },
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
        .btn-outline:hover { background: rgba(255,255,255,0.1); }

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
        <section className="condition-hero">
          <div className="condition-hero-inner">
            <p className="condition-eyebrow">Conditions We Support · Toronto & GTA</p>
            <h1>Alzheimer&apos;s Care at Home in Toronto & the GTA</h1>
            <p>
              Alzheimer&apos;s changes far more than memory. It changes routines,
              judgment, communication, confidence, and the balance of daily life
              for the whole family. What begins as forgetfulness often becomes a
              growing need for structure, supervision, and support that is difficult
              to manage alone at home.
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

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="breadcrumb-inner">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/conditions/">Conditions</Link><span>›</span>
            Alzheimer&apos;s Care
          </div>
        </nav>

        <div className="condition-body">
          <article className="condition-article">
            <h2>What Alzheimer&apos;s means at home, and why specialized support matters</h2>
            <p>
              Alzheimer&apos;s disease is a progressive neurological condition that
              affects memory, reasoning, language, behaviour, and the ability to
              manage everyday life safely. Families often notice the early signs
              gradually: repeated questions, missed appointments, medication errors,
              trouble following familiar routines, confusion about time, or a growing
              inability to manage tasks that once felt automatic.
            </p>
            <p>
              What makes Alzheimer&apos;s especially difficult for families is that
              the changes are not only practical. They are emotional. A spouse or
              adult child is not just taking on more responsibilities. They are
              adapting to a loved one whose judgment, reactions, and day-to-day
              functioning may no longer be predictable.
            </p>
            <p>
              Good home support helps make life more manageable. It reduces risk,
              creates consistency, preserves dignity, and gives the family room to
              function without living in a constant state of vigilance.
            </p>

            <h2>What Alzheimer&apos;s home care can include</h2>
            <p>
              Support for someone living with Alzheimer&apos;s must be structured
              around routine, familiarity, and safety. It is not only about helping
              with physical tasks. It is also about reducing confusion, preventing
              distress, and supporting the person in a way that feels calm and
              predictable. A thoughtful care plan can include:
            </p>

            <div className="includes-grid">
              {[
                {
                  title: 'Routine-based daily support',
                  body: 'Maintaining consistent daily rhythms for waking, meals, hygiene, rest, and activity so the person feels more settled and less overwhelmed.',
                },
                {
                  title: 'Medication reminders and supervision',
                  body: 'Helping prevent missed doses, double doses, or confusion about what medication should be taken and when.',
                },
                {
                  title: 'Personal care and hygiene',
                  body: 'Assistance with bathing, dressing, grooming, toileting, and other personal care needs in a respectful and calm manner.',
                },
                {
                  title: 'Meal preparation and nutrition',
                  body: 'Preparing appropriate meals, encouraging intake, and monitoring changes in appetite, hydration, or ability to eat independently.',
                },
                {
                  title: 'Safety monitoring',
                  body: 'Reducing risks related to wandering, kitchen safety, falls, unlocked doors, poor judgment, and unsafe decision-making at home.',
                },
                {
                  title: 'Behavioural support',
                  body: 'Responding appropriately to agitation, repetition, resistance, sundowning, confusion, and other common dementia-related behaviours.',
                },
                {
                  title: 'Meaningful engagement',
                  body: 'Providing conversation, simple activities, walks, music, familiar routines, and social interaction that support emotional well-being.',
                },
                {
                  title: 'Family support and respite',
                  body: 'Giving spouses and adult children time to rest, work, attend appointments, or simply step away without constant worry.',
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
              For a closer look at how Arcadia provides condition-specific dementia
              support, see our{' '}
              <Link href="/our-services/dementia-alzheimers-home-care/">
                Dementia &amp; Alzheimer&apos;s Home Care service page
              </Link>.
            </p>

            <h2>When families usually realize more support is needed</h2>
            <p>
              Families often wait longer than they should before getting help.
              Usually that is not because they do not see the problem. It is because
              they are trying to hold things together, hoping the situation will stay
              manageable a little longer.
            </p>
            <p>
              The turning point usually comes when the pattern becomes impossible to
              ignore: a parent is no longer safe alone, a spouse is becoming exhausted,
              or daily life has narrowed into a cycle of supervision, reminders, and
              crisis prevention. Alzheimer&apos;s care at home is often most effective
              when it begins before the situation becomes unworkable.
            </p>
            <p>
              Early support can help stabilize routines, reduce family conflict,
              maintain the person&apos;s confidence, and slow the spiral into avoidable
              crisis. Later support may need to be more intensive, but it is still
              valuable. The important thing is that support matches the person&apos;s
              current needs, not what the family wishes those needs still were.
            </p>

            <div className="mid-cta">
              <h3>Not sure whether it is time to bring in help?</h3>
              <p>
                Families often call us when they are not sure what level of support
                is needed yet. That is exactly the right time to have the conversation.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">
                Book a Free Consultation
              </Link>
            </div>

            <h2>What good Alzheimer&apos;s home support looks like in practice</h2>
            <p>
              Not all dementia care is the same. Families should expect more than
              a caregiver who is simply kind and available. Good Alzheimer&apos;s
              support should be structured, consistent, and grounded in an actual
              understanding of how dementia changes behaviour and function.
            </p>

            <div className="helps-grid">
              {[
                {
                  title: 'Consistency matters more than novelty',
                  body: 'People living with Alzheimer&apos;s generally cope better when routines, faces, communication style, and the flow of the day are predictable. Constant changes in caregivers or routines can increase confusion and distress.',
                },
                {
                  title: 'Communication should reduce stress, not add to it',
                  body: 'Caregivers should know how to redirect gently, avoid unnecessary correction, respond calmly to repetition, and speak in a way that supports dignity even when the person is confused.',
                },
                {
                  title: 'Care should balance safety with independence',
                  body: 'The goal is not to take over everything too early. It is to support the person in doing what they still can, while reducing the risks around what they can no longer manage safely.',
                },
                {
                  title: 'The family needs support too',
                  body: 'A good provider pays attention to caregiver strain, not just client tasks. Spouses and adult children often need guidance, respite, and an honest outside perspective on what is changing.',
                },
              ].map((item, i) => (
                <div key={i} className="helps-card">
                  <div className="helps-card-title">{item.title}</div>
                  <div className="helps-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            <p>
              At Arcadia, Alzheimer&apos;s support is built around routine,
              temperament match, family communication, and the practical realities
              of living with memory loss at home over time.
            </p>

            <h2>Safety, supervision, and day-to-day risk at home</h2>
            <p>
              One of the biggest reasons families seek Alzheimer&apos;s home care is
              not a single dramatic event. It is the accumulation of risk: forgotten
              medication, poor nutrition, confusion with appliances, increased fall
              risk, wandering, leaving the home at odd hours, refusing care, or
              becoming distressed by ordinary parts of the day.
            </p>
            <p>
              Structured support can reduce these risks significantly. It can also
              help the family move out of reactive mode. Instead of managing one
              incident at a time, they begin to have a system in place that supports
              safer daily living.
            </p>
            <p>
              For clients leaving hospital or moving through a period of increased
              instability, Alzheimer&apos;s care may also overlap with{' '}
              <Link href="/our-services/hospital-discharge-support/">
                hospital discharge support
              </Link>{' '}
              or more intensive{' '}
              <Link href="/our-services/overnight-24-hour-care/">
                overnight and 24-hour care
              </Link>.
            </p>

            <h2>Alzheimer&apos;s support across Toronto and the GTA</h2>
            <p>
              Arcadia provides Alzheimer&apos;s care at home across{' '}
              <Link href="/locations/toronto/">Toronto</Link>,{' '}
              <Link href="/locations/toronto/north-york-home-care/">North York</Link>,{' '}
              <Link href="/locations/toronto/scarborough-home-care/">Scarborough</Link>,{' '}
              <Link href="/locations/toronto/etobicoke-home-care/">Etobicoke</Link>,{' '}
              <Link href="/locations/york-region/markham-home-care/">Markham</Link>,{' '}
              <Link href="/locations/york-region/richmond-hill-home-care/">Richmond Hill</Link>, and{' '}
              <Link href="/locations/peel-region/mississauga-home-care/">Mississauga</Link>.
              We support families trying to keep home life stable, safe, and as
              dignified as possible while the condition changes over time.
            </p>

            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions families ask about Alzheimer&apos;s care at home</h2>
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <div className="faq-q">{faq.q}</div>
                  <div className="faq-a">{faq.a}</div>
                </div>
              ))}
            </div>
          </article>

          <aside className="condition-sidebar">
            <div className="sidebar-cta">
              <h3>Talk to our team</h3>
              <p>No obligation. We listen first and help you understand your options.</p>
              <a href="tel:8449770050" className="sidebar-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red-sm">Book a Free Consultation</Link>
            </div>

            <div className="sidebar-card" style={{ marginTop: 20 }}>
              <div className="sidebar-card-title">Related Services</div>
              <Link href="/our-services/dementia-alzheimers-home-care/" className="sidebar-link">Dementia & Alzheimer&apos;s Home Care</Link>
              <Link href="/our-services/respite-care/" className="sidebar-link">Respite Care</Link>
              <Link href="/our-services/overnight-24-hour-care/" className="sidebar-link">Overnight & 24-Hour Care</Link>
              <Link href="/our-services/hospital-discharge-support/" className="sidebar-link">Hospital Discharge Support</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Conditions</div>
              <Link href="/conditions/dementia-care-at-home/" className="sidebar-link">Dementia Care at Home</Link>
              <Link href="/conditions/caregiver-burnout-support/" className="sidebar-link">Caregiver Burnout Support</Link>
              <Link href="/conditions/frailty-fall-prevention/" className="sidebar-link">Frailty & Fall Prevention</Link>
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

        <section className="related-section">
          <div className="related-inner">
            <p className="related-eyebrow">You May Also Find Helpful</p>
            <h2>More resources for families navigating Alzheimer&apos;s at home</h2>
            <div className="related-grid">
              {[
                {
                  type: 'Service',
                  title: "Dementia & Alzheimer's Home Care",
                  href: '/our-services/dementia-alzheimers-home-care/',
                },
                {
                  type: 'Service',
                  title: 'Respite Care',
                  href: '/our-services/respite-care/',
                },
                {
                  type: 'Condition',
                  title: 'Dementia Care at Home',
                  href: '/conditions/dementia-care-at-home/',
                },
                {
                  type: 'Resource',
                  title: 'Dementia & Caregiver Guides',
                  href: '/resources/',
                },
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

        <section className="bottom-cta">
          <p className="condition-eyebrow" style={{ textAlign: 'center' }}>Get Started</p>
          <h2>Alzheimer&apos;s changes daily life. The right support can make home feel manageable again.</h2>
          <p>
            Whether you are seeing early changes or managing increasing care needs,
            a conversation with our team is a practical place to start.
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