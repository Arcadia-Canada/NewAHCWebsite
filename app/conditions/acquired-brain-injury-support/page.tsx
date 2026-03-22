// app/conditions/acquired-brain-injury-support/page.tsx
// Tier 2 condition page
// Target keyword: "acquired brain injury home care toronto"
// Persona: family member of someone post-ABI — often younger, often post-rehab,
// navigating insurance, WSIB, or auto insurance for the first time
// Distinct angle: sudden onset, rehabilitation focus, system navigation complexity
// Schema: MedicalCondition + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Acquired Brain Injury Support at Home | Toronto & GTA | Arcadia Home Care',
  description: 'Support and guidance for families navigating acquired brain injury at home in Toronto and the GTA. Arcadia has supported ABI clients and their families for over 16 years — working alongside rehabilitation teams to help people return to meaningful life at home.',
  alternates: { canonical: 'https://arcadiahomecare.ca/conditions/acquired-brain-injury-support/' },
}

const faqs = [
  {
    q: 'What is the difference between a Rehabilitation Support Worker and a PSW for someone with ABI?',
    a: 'A Personal Support Worker focuses on personal care and daily living tasks. A Rehabilitation Support Worker is trained to implement community rehabilitation programs under the supervision of licensed health professionals — helping the person work toward specific functional and cognitive goals, not just maintain their current level of function. For someone with ABI, an RSW is often the more appropriate choice, particularly in the earlier stages of community rehabilitation.',
  },
  {
    q: 'Can Arcadia work with our case manager, occupational therapist, or physiotherapist?',
    a: 'Yes — and this is how we prefer to work. Our RSWs and caregivers operate as part of a broader care team, implementing plans developed by the treating professionals rather than working in isolation. We communicate regularly with case managers, OTs, physiotherapists, social workers, and other team members, and we document progress in a way that supports the rehabilitation process.',
  },
  {
    q: 'Is ABI home care covered by insurance in Ontario?',
    a: 'It depends on the cause of the injury. ABI resulting from a motor vehicle accident may be covered under Ontario\'s auto insurance system. Workplace injuries may fall under WSIB. Some private health insurance plans cover home care for ABI. Each situation is different and the funding landscape can be complex. Our team is familiar with these systems and can help you understand what may be available and how to access it.',
  },
  {
    q: 'My family member completed inpatient rehabilitation. Why do they still need support at home?',
    a: 'Inpatient rehabilitation is focused and intensive, but it happens in a controlled environment. The real work of rebuilding independence happens in the community — navigating a real home, real routines, real relationships, and real cognitive demands. Many people who function adequately in a rehabilitation setting encounter significant challenges once they return home. Community rehabilitation support bridges that gap.',
  },
  {
    q: 'Can Arcadia support someone with ABI who also has behavioural or emotional changes?',
    a: 'Yes. Personality and emotional changes — irritability, impulsivity, depression, anxiety, or reduced social awareness — are common after ABI and can be among the most challenging aspects for families. Our RSWs are trained to work with these presentations in a structured, consistent way. We work closely with the treating team to ensure our approach is aligned with the overall rehabilitation plan.',
  },
]

export default function AcquiredBrainInjurySupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'MedicalCondition',
              'name': 'Acquired Brain Injury',
              'description': 'Acquired brain injury refers to any damage to the brain that occurs after birth and is not related to a congenital or degenerative disease. Causes include traumatic injury, stroke, anoxia, infection, and tumour.',
              'relevantSpecialty': 'Neurology',
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
                { '@type': 'ListItem', 'position': 3, 'name': 'Acquired Brain Injury Support', 'item': 'https://arcadiahomecare.ca/conditions/acquired-brain-injury-support/' },
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

        {/* Hero */}
        <section className="condition-hero">
          <div className="condition-hero-inner">
            <p className="condition-eyebrow">Conditions We Support · Toronto & GTA</p>
            <h1>Acquired Brain Injury Support at Home in Toronto & the GTA</h1>
            <p>
              An acquired brain injury changes a person's life in ways that are often
              invisible to everyone outside the immediate family. The rehabilitation
              system helps — but it has an endpoint. What comes after, in the community
              and at home, is where real recovery happens. And where most families realize
              they need more support than they expected.
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
            Acquired Brain Injury Support
          </div>
        </nav>

        {/* Body + Sidebar */}
        <div className="condition-body">
          <article className="condition-article">

            <h2>What acquired brain injury means, and why home support matters</h2>
            <p>
              Acquired brain injury — or ABI — refers to any damage to the brain that
              occurs after birth and is not related to a congenital or degenerative
              condition. The causes vary widely: stroke, traumatic injury from a fall
              or accident, anoxia, infection, tumour, or toxic exposure. What they share
              is that they change the brain in ways that affect how a person thinks,
              moves, communicates, and manages everyday life.
            </p>
            <p>
              ABI can affect people of any age. It is not, as some assume, primarily
              a condition of older adults. Many of the families Arcadia works with are
              navigating the impact of ABI on a spouse, sibling, or parent in their
              forties, fifties, or younger — someone who, before the injury, was
              independent, working, and fully engaged in daily life.
            </p>
            <p>
              The rehabilitation system in Ontario provides important structured support
              following ABI, but inpatient and outpatient rehabilitation are
              time-limited. Once that phase ends, families often need help
              translating rehab goals into real life at home.
            </p>

            <h2>What ABI home support can include</h2>
            <p>
              Support for someone living with acquired brain injury is different from
              general home care. It is not just about physical assistance — it is about
              helping the person build and maintain function, manage the cognitive and
              emotional effects of the injury, and participate in their own rehabilitation
              goals. Here is what a structured ABI support plan typically involves:
            </p>

            <div className="includes-grid">
              {[
                {
                  title: 'Community rehabilitation programs',
                  body: 'Implementing structured programs developed by occupational therapists, physiotherapists, or case managers — focused on functional goals specific to the individual.',
                },
                {
                  title: 'Cognitive support and strategy use',
                  body: 'Helping the person use memory aids, routines, and compensatory strategies to manage cognitive fatigue, memory gaps, and executive function challenges.',
                },
                {
                  title: 'Personal care and daily living',
                  body: 'Assistance with personal care, hygiene, meal preparation, and household tasks — calibrated to the person\'s current abilities and rehabilitation goals.',
                },
                {
                  title: 'Mobility and physical support',
                  body: 'Assisting with transfers, movement, exercises, and community outings — in line with the physiotherapy or occupational therapy program.',
                },
                {
                  title: 'Behavioural and emotional support',
                  body: 'Working with personality and emotional changes — irritability, impulsivity, anxiety, emotional lability — in a structured, consistent way that is aligned with the treating team\'s approach.',
                },
                {
                  title: 'Community participation and social reintegration',
                  body: 'Supporting the person to re-engage with their community — outings, activities, social situations — in a way that is safe and builds confidence progressively.',
                },
                {
                  title: 'Family guidance and caregiver support',
                  body: 'Helping family members understand the nature of ABI, manage interactions more effectively, and take genuine rest through respite without guilt.',
                },
                {
                  title: 'Documentation and team communication',
                  body: 'Recording progress and observations accurately, and communicating with case managers, OTs, and other team members to support continuity of care.',
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
              For a more detailed look at how Arcadia structures ABI home care,
              including the role of our RSW Supervisor, see our{' '}
              <Link href="/our-services/acquired-brain-injury-home-care/">
                Acquired Brain Injury Home Care service page
              </Link>.
            </p>

            <h2>The gap between rehabilitation discharge and real independence</h2>
            <p>
              One of the most common things families say when they first contact Arcadia
              is some version of this: the rehabilitation team said he was doing well enough
              to go home, but home is much harder than the rehab unit was.
            </p>
            <p>
              That gap is real, and it is not a failure of the rehabilitation system —
              it is simply what happens when a controlled, structured environment meets
              the complexity and unpredictability of real life. A person with ABI may
              manage a task competently in a rehab setting and struggle significantly
              with the same task at home, where the distractions, demands, and emotional
              stakes are completely different.
            </p>
            <p>
              Community rehabilitation support — provided by trained Rehabilitation
              Support Workers working under clinical supervision — bridges that gap.
              It takes the goals and strategies established in formal rehabilitation
              and helps the person apply and generalize them in their actual environment,
              with the people and challenges they actually face.
            </p>

            {/* Mid-page CTA */}
            <div className="mid-cta">
              <h3>Not sure what kind of support your situation needs?</h3>
              <p>
                Our team has been working with ABI clients and families for over 16 years.
                A conversation costs nothing, and it usually helps — whether or not
                Arcadia turns out to be the right fit.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">
                Book a Free Consultation
              </Link>
            </div>

            <h2>What good ABI home support looks like in practice</h2>
            <p>
              The quality of ABI home support varies significantly depending on the
              provider. Here is what families should expect from a well-run program,
              regardless of who is providing it:
            </p>

            <div className="helps-grid">
              {[
                {
                  title: 'RSWs supervised by a qualified clinician',
                  body: 'Rehabilitation Support Workers should not be operating independently for ABI cases. They should be working under the supervision of a qualified RSW Manager or clinical director who oversees care plans, monitors progress, and ensures the work remains aligned with the rehabilitation goals set by the treating team. Ask any provider how their RSW team is supervised, how often care plans are reviewed, and who is accountable when something is not working.',
                },
                {
                  title: 'A care plan built around the individual\'s goals — not a generic program',
                  body: 'Every ABI presents differently. A plan that works for someone recovering from a stroke may be entirely wrong for someone managing the effects of a traumatic brain injury or anoxic event. The starting point should always be a thorough assessment of the individual — their specific deficits, their strengths, their goals, and what their life looked like before the injury.',
                },
                {
                  title: 'Active coordination with the rest of the care team',
                  body: 'ABI care rarely involves a single provider. Case managers, occupational therapists, physiotherapists, speech-language pathologists, psychologists, and social workers may all be involved. A good home care provider communicates actively with all of them — not just at intake, but on an ongoing basis as the situation evolves.',
                },
                {
                  title: 'Honest assessment of progress and honest conversations when things are not working',
                  body: 'Recovery from ABI is not always linear, and some goals may need to be revised over time. A provider who only reports positive progress is not serving the family or the client well. Families deserve clear, honest information about how things are going — and prompt conversations when the care plan needs to change.',
                },
              ].map((item, i) => (
                <div key={i} className="helps-card">
                  <div className="helps-card-title">{item.title}</div>
                  <div className="helps-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            <p>
              At Arcadia, our RSW team is supervised by an RSW Manager with over fifteen years of field experience, and care plans are reviewed regularly in coordination with the treating team.
            </p>

            <h2>Navigating insurance and funding for ABI care in Ontario</h2>
            <p>
              One of the most practically challenging aspects of ABI for families is
              understanding what funding is available and how to access it. The answer
              depends significantly on the cause of the injury.
            </p>
            <p>
              ABI resulting from a <strong>motor vehicle accident</strong> may be covered
              under Ontario's auto insurance system, which can fund rehabilitation and
              attendant care. ABI from a <strong>workplace incident</strong> may fall
              under WSIB. Some <strong>private extended health benefits</strong> cover
              home care for ABI. And for those without insurance coverage, there are
              publicly funded options through Ontario Health atHome, though these are
              typically limited in scope.
            </p>
            <p>
              Arcadia is familiar with these systems and has experience working with
              case managers and insurance adjusters across all of them. We can help
              you understand what documentation is typically required, what is
              reasonable to expect from each funding source, and how to structure
              care so that it aligns with what is covered. If you are working with a{' '}
              <Link href="/referral-form/">case manager who wants to refer directly</Link>,
              we welcome that.
            </p>

            <h2>ABI support across Toronto and the GTA</h2>
            <p>
              Arcadia provides acquired brain injury support across{' '}
              <Link href="/locations/toronto/">Toronto</Link>,{' '}
              <Link href="/locations/toronto/north-york-home-care/">North York</Link>,{' '}
              <Link href="/locations/toronto/scarborough-home-care/">Scarborough</Link>,{' '}
              <Link href="/locations/toronto/etobicoke-home-care/">Etobicoke</Link>,{' '}
              <Link href="/locations/york-region/markham-home-care/">Markham</Link>,{' '}
              <Link href="/locations/york-region/richmond-hill-home-care/">Richmond Hill</Link>, and{' '}
              <Link href="/locations/peel-region/mississauga-home-care/">Mississauga</Link>.
              We have been working with ABI clients in the GTA for over 16 years, and
              a number of our Rehabilitation Support Workers have been with us since
              the beginning — an unusual level of continuity in this field.
            </p>

            {/* FAQ */}
            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions families ask about ABI home support</h2>
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
              <Link href="/our-services/acquired-brain-injury-home-care/" className="sidebar-link">ABI Home Care</Link>
              <Link href="/our-services/rehabilitation-support/" className="sidebar-link">Rehabilitation Support</Link>
              <Link href="/our-services/hospital-discharge-support/" className="sidebar-link">Hospital Discharge Support</Link>
              <Link href="/our-services/respite-care/" className="sidebar-link">Respite Care</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Conditions</div>
              <Link href="/conditions/stroke-recovery/" className="sidebar-link">Stroke Recovery</Link>
              <Link href="/conditions/post-hospital-recovery/" className="sidebar-link">Post-Hospital Recovery</Link>
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
            <h2>More resources for families navigating ABI</h2>
            <div className="related-grid">
              {[
                { type: 'Service', title: 'Acquired Brain Injury Home Care', href: '/our-services/acquired-brain-injury-home-care/' },
                { type: 'Service', title: 'Rehabilitation Support', href: '/our-services/rehabilitation-support/' },
                { type: 'Condition', title: 'Stroke Recovery at Home', href: '/conditions/stroke-recovery/' },
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
          <h2>Support at home matters. We help families put the right structure in place.</h2>
          <p>
            Whether you are just leaving rehabilitation or have been managing for
            months without enough support, a conversation with our team is a
            useful starting point.
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
