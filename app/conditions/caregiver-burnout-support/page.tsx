// app/conditions/caregiver-burnout-support/page.tsx
// Condition page: caregiver burnout support
// Target: family caregivers who are exhausted, guilty, or unsure how to ask for help
// Schema: MedicalCondition + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Caregiver Burnout Support | Toronto & GTA | Arcadia Home Care',
  description: 'Support for family caregivers who are exhausted or burning out. Arcadia helps Toronto and GTA families get respite, clarity, and practical support so they can keep showing up for their loved ones.',
  alternates: { canonical: 'https://arcadiahomecare.ca/conditions/caregiver-burnout-support/' },
}

const faqs = [
  {
    q: 'Is it normal to feel guilty when I think about getting help?',
    a: 'Yes. Many caregivers feel that asking for help means they are failing or that they should be able to manage on their own. In reality, getting support is one of the most responsible things you can do — for yourself and for the person you care for. Burnout does not serve anyone.',
  },
  {
    q: 'What does respite care actually look like?',
    a: 'Respite care is temporary relief — someone else takes over the caregiving role for a few hours, a day, or longer so you can rest, run errands, or simply step away. Arcadia can provide trained caregivers who come to your home and follow the same care routines, so the person you care for is safe and supported while you recharge.',
  },
  {
    q: 'How do I know if I am burned out or just tired?',
    a: 'Burnout is more than tiredness. It often shows up as ongoing exhaustion that sleep does not fix, irritability, withdrawal from people you used to enjoy, anxiety or low mood, getting sick more often, or feeling like you have nothing left to give. If you recognize several of these, it is worth taking them seriously and exploring what support would help.',
  },
  {
    q: 'Will the person I care for be okay with someone else helping?',
    a: 'Many families worry about this. Resistance is common at first, but introducing support gradually — starting with companionship or a few hours so everyone gets used to it — usually works. Our team can guide you on how to introduce care in a way that feels less threatening to your loved one.',
  },
]

export default function CaregiverBurnoutSupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'MedicalCondition',
              'name': 'Caregiver Burnout',
              'description': 'A state of physical, emotional, and mental exhaustion that can affect people who provide long-term care for a family member or loved one.',
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
                { '@type': 'ListItem', 'position': 3, 'name': 'Caregiver Burnout Support', 'item': 'https://arcadiahomecare.ca/conditions/caregiver-burnout-support/' },
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
          font-weight: 600; color: #ffffff; line-height: 1.15; margin-bottom: 20px;
        }
        .condition-hero p {
          font-size: 1.1rem; color: rgba(255,255,255,0.9);
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
          background: transparent; color: #ffffff; padding: 14px 28px;
          border-radius: 8px; font-size: 15px; font-weight: 700;
          text-decoration: none; border: 1.5px solid rgba(255,255,255,0.55);
          transition: all 0.2s;
          display: inline-flex; align-items: center;
        }
        .btn-outline:hover { background: rgba(255,255,255,0.12); color: #ffffff; }

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

        .mid-cta { background: #1C2B3A; border-radius: 14px; padding: 32px; margin: 40px 0; }
        .mid-cta h3 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.5rem; font-weight: 600; color: #ffffff; margin-bottom: 8px;
        }
        .mid-cta p { font-size: 0.9rem; color: rgba(255,255,255,0.88); margin-bottom: 20px; line-height: 1.7; }
        .mid-cta-phone {
          font-size: 1.5rem; font-weight: 700; color: #E85A52;
          text-decoration: none; display: block; margin-bottom: 12px;
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
          font-size: 1.3rem; font-weight: 600; color: #ffffff; margin-bottom: 8px;
        }
        .sidebar-cta p { font-size: 0.875rem; color: rgba(255,255,255,0.88); margin-bottom: 16px; line-height: 1.65; }
        .sidebar-phone {
          font-size: 1.2rem; font-weight: 700; color: #E85A52;
          text-decoration: none; display: block; margin-bottom: 12px;
        }
        .btn-red-sm {
          background: #C8302A; color: #ffffff; padding: 11px 20px;
          border-radius: 8px; font-size: 13px; font-weight: 700;
          text-decoration: none; display: inline-flex; align-items: center; transition: background 0.2s;
        }
        .btn-red-sm:hover { background: #a82520; color: #ffffff; }

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
        .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
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
          font-weight: 600; color: #ffffff; max-width: 680px;
          margin: 0 auto 14px; line-height: 1.2;
        }
        .bottom-cta p {
          color: rgba(255,255,255,0.88); font-size: 1rem;
          max-width: 500px; margin: 0 auto 32px; line-height: 1.75;
        }
        .bottom-cta-phone {
          font-size: 2rem; font-weight: 700; color: #E85A52;
          text-decoration: none; display: block; margin-bottom: 20px;
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .bottom-cta .btn-red,
        .bottom-cta .btn-outline { color: #ffffff; }
        .cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
      `}</style>

      <main className="condition-page">

        {/* Hero */}
        <section className="condition-hero">
          <div className="condition-hero-inner">
            <p className="condition-eyebrow">Conditions We Support · Toronto & GTA</p>
            <h1>Caregiver Burnout Support</h1>
            <p>
              If you are exhausted, guilty, or unsure how to ask for help — you are not unusual, and you are not alone in this.
              Caregiver burnout can affect your own health too. Many caregivers notice they get sick more often, feel more anxious or low, and start carrying the physical effects of prolonged stress.
              This page is for anyone who is holding it together for someone else and running on empty.
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
            Caregiver Burnout Support
          </div>
        </nav>

        {/* Body + Sidebar */}
        <div className="condition-body">
          <article className="condition-article">

            <h2>Why caregiver burnout matters</h2>
            <p>
              Caring for a loved one with a long-term condition is one of the most demanding roles there is.
              It is often invisible, underappreciated, and carried for years. Many family caregivers put their
              own health and wellbeing last — until they cannot anymore.
            </p>
            <p>
              Recognizing that you are struggling is not a sign of weakness. It is a sign that the situation
              has outgrown what one person can reasonably carry alone. Getting support is not selfish; it is
              what allows you to keep showing up.
            </p>

            <h2>What it means to ask for help</h2>
            <p>
              Asking for help can mean different things: a few hours of respite so you can sleep or run errands,
              someone to share the load on a regular schedule, or simply a conversation with people who
              understand what you are going through. Many families start with{' '}
              <Link href="/our-services/respite-care/">respite care</Link> — short-term relief so the person
              you care for is safe and supported while you recharge.
            </p>
            <p>
              A{' '}
              <Link
                href="/how-care-starts/care-assessment/"
                style={{ color: '#C8302A', fontWeight: 600, textDecoration: 'underline' }}
              >
                care assessment
              </Link>{' '}
              is a good starting point — it helps clarify what level of support would make the most meaningful difference given your specific situation.
            </p>

            {/* Mid-page CTA */}
            <div className="mid-cta">
              <h3>Not sure where to start?</h3>
              <p>
                A care assessment costs nothing and gives you a clear picture of what would actually help —
                whether that is a few hours of respite a week or a more structured plan.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">
                Book a Free Consultation
              </Link>
            </div>

            <h2>How Arcadia supports family caregivers</h2>
            <p>
              We work with many families where the primary concern is caregiver exhaustion, guilt, or the
              feeling that there is no way out. We provide respite care so you can take real breaks; we help
              you understand what level of support would make a difference; and we match you with caregivers
              who can step in consistently so you are not carrying the load alone.
            </p>
            <p>
              Our approach is the same as for every condition we support: we listen first, assess the situation
              with clarity, and then help you put in place only what you need — no more, no less.
            </p>

            {/* FAQ */}
            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions caregivers ask about burnout and support</h2>
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
              <Link href="/our-services/respite-care/" className="sidebar-link">Respite Care</Link>
              <Link href="/our-services/companion-care/" className="sidebar-link">Companion Care</Link>
              <Link href="/our-services/dementia-alzheimers-home-care/" className="sidebar-link">Dementia & Alzheimer&apos;s Home Care</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Conditions</div>
              <Link href="/conditions/dementia-care-at-home/" className="sidebar-link">Dementia Care at Home</Link>
              <Link href="/conditions/dementia-care-at-home/" className="sidebar-link">Dementia & Alzheimer&apos;s Care</Link>
              <Link href="/conditions/palliative-serious-illness/" className="sidebar-link">Palliative & Serious Illness</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">How Care Starts</div>
              <Link href="/how-care-starts/care-assessment/" className="sidebar-link">Care Assessment</Link>
              <Link href="/how-care-starts/" className="sidebar-link">How Care Starts</Link>
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
            <h2>More resources for caregivers</h2>
            <div className="related-grid">
              {[
                { type: 'Service', title: 'Respite Care', href: '/our-services/respite-care/' },
                { type: 'Condition', title: 'Dementia Care at Home', href: '/conditions/dementia-care-at-home/' },
                { type: 'Resource', title: 'How Care Starts', href: '/how-care-starts/' },
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
          <h2>One conversation can clarify what would help most.</h2>
          <p>
            A conversation with our team costs nothing and can help you think more clearly about what support would make the biggest difference.
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
