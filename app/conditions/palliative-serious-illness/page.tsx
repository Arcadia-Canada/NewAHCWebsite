// app/conditions/palliative-serious-illness/page.tsx
// Tier 2 condition page
// Target keyword: "palliative home care toronto" / "palliative care support at home gta"
// Persona: family already in palliative care system, publicly funded hours insufficient,
// looking to supplement — not to understand what palliative care is
// Tone: quietest, most direct of all condition pages — no sales energy, no urgency pressure
// Schema: MedicalCondition + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Palliative Home Care Support | Toronto & GTA | Arcadia Home Care',
  description: 'Private palliative support at home for families in Toronto and the GTA who need more than publicly funded care provides. Compassionate, clinically guided supplemental care — overnight, on weekends, and through every stage.',
  alternates: { canonical: 'https://arcadiahomecare.ca/conditions/palliative-serious-illness/' },
}

const faqs = [
  {
    q: 'We already have a palliative care team. Why would we need additional home care support?',
    a: 'Publicly funded palliative care in Ontario provides nursing visits, some PSW hours, and access to a palliative care team — but the hours allocated rarely match what a family actually needs around the clock. Gaps in coverage — overnight, on weekends, between nursing visits — are common. Private home care fills those gaps so that your loved one is never without support, and so that family caregivers can rest.',
  },
  {
    q: 'Can Arcadia provide overnight and 24-hour care for someone in palliative care at home?',
    a: 'Yes. Overnight and around-the-clock support is one of the most common reasons families in palliative situations contact Arcadia. As care needs intensify, consistent presence becomes essential — both for the person receiving care and for family members who need to sleep, eat, and have moments away from caregiving without worry.',
  },
  {
    q: 'How does Arcadia coordinate with our existing palliative care team?',
    a: 'We work alongside your palliative care nurse, physician, and any other providers already involved — not instead of them. Our caregivers follow the care plan established by the clinical team, communicate changes promptly, and document what they observe so that the treating team has an accurate picture of how things are going between visits.',
  },
  {
    q: 'What if my loved one wants to die at home? Can Arcadia support that?',
    a: 'Yes — and this is one of the most meaningful things we do. Staying at home through the end of life requires consistent support, good communication between all care providers, and caregivers who are comfortable and compassionate in this setting. Our team has experience supporting families through end-of-life care at home, and we approach it with the seriousness and humanity it deserves.',
  },
  {
    q: 'How do we know when it is time to ask for more support?',
    a: 'Usually when the current level of support is no longer adequate — when a family caregiver is not sleeping, when there are gaps that feel unsafe, when the person receiving care is expressing distress that the current team cannot address with the hours available. If you are beginning to ask the question, it is usually worth having the conversation — before the situation becomes harder to manage. A conversation with our team costs nothing and helps clarify what additional support would actually look like.',
  },
]

export default function PalliativeSeriousIllnessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'MedicalCondition',
              'name': 'Palliative Care',
              'description': 'Palliative care is specialized medical care focused on providing relief from the symptoms, pain, and stress of serious illness, with the goal of improving quality of life for both the patient and family.',
              'relevantSpecialty': 'Palliative Medicine',
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
                { '@type': 'ListItem', 'position': 3, 'name': 'Palliative & Serious Illness', 'item': 'https://arcadiahomecare.ca/conditions/palliative-serious-illness/' },
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

        /* Quiet CTA — softer than other pages */
        .mid-cta {
          background: #F7F3EE; border: 1px solid #E5E0D8;
          border-left: 4px solid #1C2B3A;
          border-radius: 0 14px 14px 0; padding: 32px; margin: 40px 0;
        }
        .mid-cta h3 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.4rem; font-weight: 600; color: #1C2B3A; margin-bottom: 8px;
        }
        .mid-cta p { font-size: 0.9rem; color: #6B7280; margin-bottom: 20px; line-height: 1.75; }
        .mid-cta-phone {
          font-size: 1.4rem; font-weight: 700; color: #C8302A;
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
        .sidebar-cta {
          background: #F7F3EE; border: 1px solid #E5E0D8;
          border-radius: 14px; padding: 28px; text-align: center;
        }
        .sidebar-cta h3 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.3rem; font-weight: 600; color: #1C2B3A; margin-bottom: 8px;
        }
        .sidebar-cta p { font-size: 0.875rem; color: #6B7280; margin-bottom: 16px; line-height: 1.65; }
        .sidebar-phone {
          font-size: 1.2rem; font-weight: 700; color: #C8302A;
          text-decoration: none; display: block; margin-bottom: 12px;
        }
        .btn-navy-sm {
          background: #1C2B3A; color: #fff; padding: 11px 20px;
          border-radius: 8px; font-size: 13px; font-weight: 700;
          text-decoration: none; display: inline-flex; align-items: center; transition: background 0.2s;
        }
        .btn-navy-sm:hover { background: #0f1a26; color: #fff; }

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
        .related-card:hover { border-color: #1C2B3A; box-shadow: 0 6px 20px rgba(28,43,58,0.08); }
        .related-card-type {
          font-size: 10px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #6B7280; margin-bottom: 8px;
        }
        .related-card-title { font-size: 15px; font-weight: 700; color: #1C2B3A; line-height: 1.4; }
        .related-card-arrow { font-size: 13px; color: #1C2B3A; margin-top: 10px; display: block; }

        /* Bottom CTA — quieter navy, no red urgency */
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
          font-size: 1.8rem; font-weight: 700; color: rgba(255,255,255,0.9);
          text-decoration: none; display: block; margin-bottom: 20px;
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .btn-white {
          background: #fff; color: #1C2B3A; padding: 14px 28px;
          border-radius: 8px; font-size: 15px; font-weight: 700;
          text-decoration: none; transition: all 0.2s;
          display: inline-flex; align-items: center;
        }
        .btn-white:hover { background: #F7F3EE; }
        .btn-outline-white {
          background: transparent; color: #fff; padding: 14px 28px;
          border-radius: 8px; font-size: 15px; font-weight: 700;
          text-decoration: none; border: 1.5px solid rgba(255,255,255,0.35);
          transition: all 0.2s;
          display: inline-flex; align-items: center;
        }
        .btn-outline-white:hover { background: rgba(255,255,255,0.08); color: #fff; }
      `}</style>

      <main className="condition-page">

        {/* Hero */}
        <section className="condition-hero">
          <div className="condition-hero-inner">
            <p className="condition-eyebrow">Conditions We Support · Toronto & GTA</p>
            <h1>Palliative Home Care Support in Toronto & the GTA</h1>
            <p>
              When a loved one is living with a serious or life-limiting illness, the goal
              shifts from treatment to comfort, presence, and quality of time. Most families
              in this situation have a palliative care team in place — but find that the hours
              and support available through the public system are not enough to cover what the
              situation actually requires.
            </p>
            <div className="hero-actions">
              <a href="tel:8449770050" className="btn-red">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 2.5C2 8.299 5.701 12 11.5 12l.5-2.5-2.5-.5-.5 1c-2-1-3-2-4-4l1-.5L5.5 3 3 2.5z" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round"/>
                </svg>
                Call (844) 977-0050
              </a>
              <Link href="/contact/" className="btn-outline">Talk to Our Team</Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="breadcrumb-inner">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/conditions/">Conditions</Link><span>›</span>
            Palliative & Serious Illness
          </div>
        </nav>

        {/* Body + Sidebar */}
        <div className="condition-body">
          <article className="condition-article">

            <h2>The gap between what the system provides and what families actually need</h2>
            <p>
              Ontario's publicly funded palliative care system provides real and meaningful
              support — nursing visits, some PSW hours, access to a palliative physician and
              team. For many families, it is where they start, and it is an important foundation.
            </p>
            <p>
              But the hours are limited. Nursing visits may come a few times a week. PSW
              support may cover mornings or evenings, but not both, and not overnight. Weekends
              are often thinner. And as a person's care needs increase — as the illness
              progresses and the support required becomes more constant — the gap between
              what is funded and what is needed grows.
            </p>
            <p>
              Families fill that gap themselves, until they can't. A spouse who hasn't slept
              properly in weeks. An adult child driving two hours each way to check in. A
              parent who is anxious and in discomfort between visits, without anyone there to
              sit with them. This is the situation Arcadia's palliative support is built for —
              not to replace the care team, but to fill the space they cannot cover.
            </p>

            <h2>What private palliative home care support can include</h2>
            <p>
              The support Arcadia provides in palliative situations is flexible and built
              around what the family and care team identify as the greatest gaps. Common
              elements include:
            </p>

            <div className="includes-grid">
              {[
                {
                  title: 'Overnight and 24-hour presence',
                  body: 'Consistent overnight support so that the person is never alone and family caregivers can sleep. Around-the-clock care when the situation requires it.',
                },
                {
                  title: 'Personal care and comfort',
                  body: 'Assistance with bathing, positioning, hygiene, and skin care — provided gently and at the person\'s pace, with attention to comfort and dignity.',
                },
                {
                  title: 'Companionship and presence',
                  body: 'Sitting with the person, reading aloud, playing music, talking — or simply being there in silence. Presence matters, and it is something the clinical team cannot always provide.',
                },
                {
                  title: 'Meal support and hydration',
                  body: 'Preparing foods that are appetizing and manageable, monitoring intake, and sitting with the person during meals — adapting as appetite and swallowing ability change.',
                },
                {
                  title: 'Medication reminders and observation',
                  body: 'Prompting comfort medications at the right times and observing for changes in pain, breathing, or distress — communicating promptly with the palliative care team when something shifts.',
                },
                {
                  title: 'Respite for family caregivers',
                  body: 'Giving family members time away — to rest, to attend to their own lives, to be a family member rather than a caregiver for a few hours. This is not a luxury in a palliative situation. It is essential.',
                },
                {
                  title: 'Support through the final stage',
                  body: 'Arcadia\'s caregivers are experienced in end-of-life care at home. They work alongside the palliative team to ensure the person\'s final days are as peaceful, comfortable, and dignified as possible.',
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
              After a death, Arcadia can help connect families with bereavement resources through the Ontario Health atHome system and other community supports if needed.
            </p>

            <p>
              For a more detailed description of how Arcadia structures palliative home care,
              see our{' '}
              <Link href="/our-services/palliative-home-care/">
                Palliative Home Care service page
              </Link>.
            </p>

            {/* Quiet mid-page CTA */}
            <div className="mid-cta">
              <h3>We are here when you are ready to talk</h3>
              <p>
                There is no script, no assessment form to fill in before we speak to you.
                Call us, tell us what is happening, and we will listen. Whatever comes
                next, we can help you think through it.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">
                Talk to Our Team
              </Link>
            </div>

            <h2>What good palliative home support looks like in practice</h2>
            <p>
              Palliative home care is not a standard service delivered in a standard way.
              The needs of someone in the early stages of a serious illness are different
              from those of someone in the final weeks of life. Good palliative support
              adapts continuously — and the people providing it need both clinical
              competence and genuine human presence.
            </p>

            <div className="helps-grid">
              {[
                {
                  title: 'Caregivers who are comfortable in this setting',
                  body: 'Not everyone is suited to palliative care. It requires the ability to be present with grief, to work quietly and without agenda, and to provide comfort without false reassurance. Families should ask directly whether the caregivers assigned to a palliative situation have experience in end-of-life care — and any provider worth working with will answer that question honestly.',
                },
                {
                  title: 'Clear coordination with the palliative care team',
                  body: 'Private home care in a palliative situation only works well when there is clear communication with the rest of the team. Caregivers need to know the comfort plan, understand what symptoms to watch for, and know how to reach the palliative nurse or physician quickly when something changes. Families should not have to be the relay point between providers.',
                },
                {
                  title: 'Flexibility as needs change',
                  body: 'The care plan that is right today may not be right in three weeks. A good provider adjusts without friction — adding hours, changing caregivers, shifting the focus of support — as the illness progresses and the family\'s needs evolve. Rigidity in care planning is a problem in any context; in a palliative one, it can cause real harm.',
                },
                {
                  title: 'Support for the family, not only the person who is ill',
                  body: (
                    <>
                      A serious illness in the family affects everyone. Family caregivers carry an enormous amount — practical, emotional, and often invisible. Good palliative support acknowledges this and builds in genuine relief for the people who love the person being cared for, not just the person themselves. If you are experiencing caregiver exhaustion, our section on{' '}
                      <Link href="/conditions/caregiver-burnout-support/" style={{ color: '#C8302A', fontWeight: 600 }}>
                        caregiver burnout support
                      </Link>{' '}
                      is worth reading alongside this one.
                    </>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="helps-card">
                  <div className="helps-card-title">{item.title}</div>
                  <div className="helps-card-body">
                    {typeof item.body === 'string' ? (
                      <span dangerouslySetInnerHTML={{ __html: item.body }} />
                    ) : (
                      item.body
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h2>Understanding publicly funded palliative care in Ontario</h2>
            <p>
              Ontario Health atHome coordinates publicly funded palliative care in the
              community. This includes nursing, personal support, and in some cases
              occupational therapy and social work. Families who are not yet connected
              to this system can request a referral through their family physician,
              specialist, or hospital team.
            </p>
            <p>
              The funding available through Ontario Health atHome is meaningful but
              limited. The hours allocated rarely reflect the full level of support
              a family needs — particularly overnight, on weekends, or as the illness
              progresses toward its final stage. Private home care is not a replacement
              for publicly funded support. It is a way of filling the gaps so that the
              person can remain at home with the continuity of presence they deserve.
            </p>
            <p>
              Arcadia works alongside Ontario Health atHome and the broader palliative
              care system across{' '}
              <Link href="/locations/toronto/">Toronto</Link>,{' '}
              <Link href="/locations/toronto/north-york-home-care/">North York</Link>,{' '}
              <Link href="/locations/toronto/scarborough-home-care/">Scarborough</Link>,{' '}
              <Link href="/locations/toronto/etobicoke-home-care/">Etobicoke</Link>,{' '}
              <Link href="/locations/york-region/markham-home-care/">Markham</Link>,{' '}
              <Link href="/locations/york-region/richmond-hill-home-care/">Richmond Hill</Link>, and{' '}
              <Link href="/locations/peel-region/mississauga-home-care/">Mississauga</Link>.
            </p>

            <h2>For health professionals referring palliative patients</h2>
            <p>
              Palliative care teams, hospital social workers, and discharge planners can
              refer directly to Arcadia for supplementary home care support. We respond
              promptly to referrals, communicate clearly with the sending team, and
              adapt our support as the clinical situation changes. To refer a patient,
              use our{' '}
              <Link href="/referral-form/">professional referral form</Link>{' '}
              or call us directly.
            </p>

            {/* FAQ */}
            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions families ask about palliative home support</h2>
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <div className="faq-q">{faq.q}</div>
                  <div className="faq-a">{faq.a}</div>
                </div>
              ))}
            </div>

          </article>

          {/* Sidebar — quieter treatment */}
          <aside className="condition-sidebar">
            <div className="sidebar-cta">
              <h3>We are here when you need us</h3>
              <p>
                No forms to fill before you call. Just a conversation,
                at whatever pace feels right.
              </p>
              <a href="tel:8449770050" className="sidebar-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-navy-sm">Talk to Our Team</Link>
            </div>

            <div className="sidebar-card" style={{ marginTop: 20 }}>
              <div className="sidebar-card-title">Related Services</div>
              <Link href="/our-services/palliative-home-care/" className="sidebar-link">Palliative Home Care</Link>
              <Link href="/our-services/overnight-24-hour-care/" className="sidebar-link">Overnight & 24-Hour Care</Link>
              <Link href="/our-services/respite-care/" className="sidebar-link">Respite Care</Link>
              <Link href="/our-services/companion-care/" className="sidebar-link">Companion Care</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Conditions</div>
              <Link href="/conditions/caregiver-burnout-support/" className="sidebar-link">Caregiver Burnout Support</Link>
              <Link href="/conditions/post-hospital-recovery/" className="sidebar-link">Post-Hospital Recovery</Link>
              <Link href="/conditions/dementia-care-at-home/" className="sidebar-link">Dementia Care at Home</Link>
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
            <h2>Related support for families navigating serious illness</h2>
            <div className="related-grid">
              {[
                { type: 'Service', title: 'Palliative Home Care', href: '/our-services/palliative-home-care/' },
                { type: 'Service', title: 'Overnight & 24-Hour Care', href: '/our-services/overnight-24-hour-care/' },
                { type: 'Condition', title: 'Caregiver Burnout Support', href: '/conditions/caregiver-burnout-support/' },
                { type: 'Condition', title: 'Post-Hospital Recovery', href: '/conditions/post-hospital-recovery/' },
                { type: 'Resource', title: 'Family Caregiver Support Guides', href: '/resources/family-caregiving-guides/' },
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

        {/* Bottom CTA — quieter tone */}
        <section className="bottom-cta">
          <p className="condition-eyebrow" style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>
            Get Support
          </p>
          <h2>We can help make sure the support at home matches what this time requires.</h2>
          <p>
            A conversation costs nothing. We will listen to what is happening and
            help you understand what additional support could look like — without
            pressure, without a sales pitch.
          </p>
          <a href="tel:8449770050" className="bottom-cta-phone">(844) 977-0050</a>
          <div className="cta-actions">
            <Link href="/contact/" className="btn-white">Talk to Our Team</Link>
            <Link href="/referral-form/" className="btn-outline-white">Submit a Professional Referral</Link>
          </div>
        </section>

      </main>
    </>
  )
}
