// app/how-care-starts/pricing-funding/page.tsx
// Decision-stage page — pricing and funding information
// Target keyword: "home care cost ontario" / "how much does home care cost toronto"
// Persona: family trying to understand what care will cost before committing —
// often anxious about money, confused by the public/private distinction,
// and not sure what questions to ask
// Tone: plain, honest, direct — no evasion, no vague "contact us for pricing"
// Schema: FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home Care Pricing & Funding in Ontario | Arcadia Home Care Toronto',
  description: 'How much does home care cost in Ontario? What does Ontario Health atHome cover? Plain answers to the questions families ask about home care pricing, public funding, and private care costs in Toronto and the GTA.',
  alternates: { canonical: 'https://arcadiahomecare.ca/how-care-starts/pricing-funding/' },
}

export default function PricingFundingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                {
                  '@type': 'Question',
                  'name': 'How much does private home care cost in Ontario?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Private home care rates in Ontario vary depending on the type of worker, the complexity of care, and the hours required. PSW support generally ranges from the mid-to-high $20s per hour, while RSW support for rehabilitation tends to be higher. Overnight care is typically charged at a flat rate per shift. Arcadia provides transparent pricing during the consultation process.',
                  },
                },
                {
                  '@type': 'Question',
                  'name': 'What does Ontario Health atHome cover?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Ontario Health atHome coordinates publicly funded home care including nursing visits, PSW hours for personal care, and some therapy services. Eligibility is assessed by a Care Coordinator. The hours allocated vary based on need and available funding, and are often less than what the situation requires — particularly for complex conditions or high-need situations.',
                  },
                },
                {
                  '@type': 'Question',
                  'name': 'Is home care covered by OHIP?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'OHIP does not directly cover private home care. Publicly funded care is coordinated through Ontario Health atHome, not OHIP. Some extended health benefit plans, veterans benefits, auto insurance (SABS), and WSIB do cover private home care for eligible individuals.',
                  },
                },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arcadiahomecare.ca/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'How Care Starts', 'item': 'https://arcadiahomecare.ca/how-care-starts/' },
                { '@type': 'ListItem', 'position': 3, 'name': 'Pricing & Funding', 'item': 'https://arcadiahomecare.ca/how-care-starts/pricing-funding/' },
              ],
            },
          ]),
        }}
      />

      <style>{`
        .page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }

        .hero { background: #1C2B3A; padding: 96px 24px 80px; }
        .hero-inner { max-width: 760px; margin: 0 auto; text-align: center; }
        .eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 14px; }
        .hero h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 600; color: #fff; line-height: 1.15; margin-bottom: 20px; }
        .hero p { font-size: 1.05rem; color: rgba(255,255,255,0.72); line-height: 1.8; max-width: 600px; margin: 0 auto 32px; }
        .hero-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .btn-red { background: #C8302A; color: #fff; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; transition: all 0.2s; box-shadow: 0 8px 20px rgba(200,48,42,0.3); display: inline-flex; align-items: center; gap: 8px; }
        .btn-red:hover { background: #a82520; transform: translateY(-2px); }
        .btn-outline { background: transparent; color: #fff; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; border: 1.5px solid rgba(255,255,255,0.35); transition: all 0.2s; display: inline-flex; align-items: center; }
        .btn-outline:hover { background: rgba(255,255,255,0.1); }

        .breadcrumb { background: #F7F3EE; border-bottom: 1px solid #E5E0D8; padding: 12px 24px; font-size: 13px; color: #6B7280; }
        .breadcrumb-inner { max-width: 1100px; margin: 0 auto; }
        .breadcrumb a { color: #1C2B3A; text-decoration: none; font-weight: 600; }
        .breadcrumb a:hover { color: #C8302A; }
        .breadcrumb span { margin: 0 8px; }

        .body-wrap { max-width: 1100px; margin: 0 auto; padding: 72px 24px; display: grid; grid-template-columns: 1fr 320px; gap: 64px; align-items: start; }
        @media (max-width: 900px) { .body-wrap { grid-template-columns: 1fr; } }

        .main-content h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.6rem, 2.5vw, 2.2rem); font-weight: 600; color: #1C2B3A; line-height: 1.25; margin: 48px 0 16px; }
        .main-content h2:first-child { margin-top: 0; }
        .main-content p { font-size: 1rem; color: #4B5563; line-height: 1.85; margin-bottom: 18px; }
        .main-content a { color: #C8302A; font-weight: 600; text-decoration: underline; text-decoration-color: rgba(200,48,42,0.3); text-underline-offset: 3px; transition: text-decoration-color 0.15s; }
        .main-content a:hover { text-decoration-color: #C8302A; }

        /* Public vs private comparison */
        .compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0 32px; }
        @media (max-width: 600px) { .compare-grid { grid-template-columns: 1fr; } }
        .compare-card { border-radius: 12px; padding: 24px; }
        .compare-card.public { background: #1C2B3A; }
        .compare-card.private { background: #FAFAF8; border: 1px solid #E5E0D8; }
        .compare-label { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 10px; }
        .compare-card.public .compare-label { color: rgba(200,48,42,0.9); }
        .compare-card.private .compare-label { color: #6B7280; }
        .compare-title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.2rem; font-weight: 600; margin-bottom: 14px; }
        .compare-card.public .compare-title { color: #fff; }
        .compare-card.private .compare-title { color: #1C2B3A; }
        .compare-list { list-style: none; padding: 0; margin: 0; }
        .compare-list li { font-size: 0.875rem; line-height: 1.65; padding: 6px 0 6px 16px; position: relative; border-bottom: 1px solid; }
        .compare-card.public .compare-list li { color: rgba(255,255,255,0.7); border-color: rgba(255,255,255,0.08); }
        .compare-card.private .compare-list li { color: #6B7280; border-color: #F0EBE3; }
        .compare-list li:last-child { border-bottom: none; }
        .compare-list li::before { content: ''; position: absolute; left: 0; top: 12px; width: 6px; height: 6px; border-radius: 50%; }
        .compare-card.public .compare-list li::before { background: #C8302A; }
        .compare-card.private .compare-list li::before { background: #9CA3AF; }

        /* Funding sources */
        .funding-grid { display: grid; grid-template-columns: 1fr; gap: 12px; margin: 24px 0 32px; }
        .funding-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-left: 4px solid #C8302A; border-radius: 0 12px 12px 0; padding: 20px 24px; }
        .funding-card-title { font-size: 15px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; }
        .funding-card-body { font-size: 0.9rem; color: #6B7280; line-height: 1.7; }
        .funding-card-tag { display: inline-block; background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 100px; padding: 3px 10px; font-size: 11px; font-weight: 700; color: #6B7280; margin-bottom: 8px; }

        /* Pricing note box */
        .pricing-box { background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 14px; padding: 28px 32px; margin: 24px 0 32px; }
        .pricing-box-title { font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #1C2B3A; margin-bottom: 12px; }
        .pricing-box p { font-size: 0.9375rem; color: #4B5563; line-height: 1.8; margin: 0 0 12px; }
        .pricing-box p:last-child { margin: 0; }

        /* Cost factors */
        .cost-factors { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 24px 0 32px; }
        @media (max-width: 600px) { .cost-factors { grid-template-columns: 1fr; } }
        .cost-factor { background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 10px; padding: 16px 18px; }
        .cost-factor-title { font-size: 13px; font-weight: 700; color: #1C2B3A; margin-bottom: 4px; }
        .cost-factor-body { font-size: 0.85rem; color: #6B7280; line-height: 1.6; }

        /* FAQ */
        .faq-item { border-bottom: 1px solid #E5E0D8; padding: 20px 0; }
        .faq-item:first-child { padding-top: 0; }
        .faq-q { font-size: 1rem; font-weight: 700; color: #1C2B3A; margin-bottom: 10px; line-height: 1.5; }
        .faq-a { font-size: 0.9375rem; color: #4B5563; line-height: 1.8; }

        /* Mid CTA */
        .mid-cta { background: #1C2B3A; border-radius: 14px; padding: 32px; margin: 40px 0; }
        .mid-cta h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.5rem; font-weight: 600; color: #fff; margin-bottom: 8px; }
        .mid-cta p { font-size: 0.9rem; color: rgba(255,255,255,0.65); margin-bottom: 20px; line-height: 1.7; }
        .mid-cta-phone { font-size: 1.5rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 12px; }

        /* Sidebar */
        .sidebar { position: sticky; top: 100px; }
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

        /* Bottom CTA */
        .bottom-cta { background: #1C2B3A; padding: 80px 24px; text-align: center; }
        .bottom-cta h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; color: #fff; max-width: 680px; margin: 0 auto 14px; line-height: 1.2; }
        .bottom-cta p { color: rgba(255,255,255,0.65); font-size: 1rem; max-width: 500px; margin: 0 auto 32px; line-height: 1.8; }
        .bottom-cta-phone { font-size: 2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 20px; font-family: 'Cormorant Garamond', Georgia, serif; }
        .cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
      `}</style>

      <main className="page">

        {/* Hero */}
        <section className="hero">
          <div className="hero-inner">
            <p className="eyebrow">How Care Starts · Pricing & Funding</p>
            <h1>Home Care Costs & Funding in Ontario</h1>
            <p>
              Most families have questions about what home care costs before
              they are ready to talk about anything else. This page gives plain
              answers — what public funding covers, what it does not, and what
              private care from Arcadia involves financially.
            </p>
            <div className="hero-actions">
              <a href="tel:8449770050" className="btn-red">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 2.5C2 8.299 5.701 12 11.5 12l.5-2.5-2.5-.5-.5 1c-2-1-3-2-4-4l1-.5L5.5 3 3 2.5z" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round"/>
                </svg>
                Call (844) 977-0050
              </a>
              <Link href="/contact/" className="btn-outline">Request a Consultation</Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="breadcrumb-inner">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/how-care-starts/">How Care Starts</Link><span>›</span>
            Pricing & Funding
          </div>
        </nav>

        {/* Body */}
        <div className="body-wrap">
          <div className="main-content">

            <h2>The two types of home care in Ontario</h2>
            <p>
              Understanding home care costs in Ontario starts with understanding
              the distinction between publicly funded care and private care.
              Most families end up using both — and knowing how they fit together
              is the most useful thing to understand before talking about numbers.
            </p>

            <div className="compare-grid">
              <div className="compare-card public">
                <div className="compare-label">Publicly Funded Care</div>
                <div className="compare-title">Ontario Health atHome</div>
                <ul className="compare-list">
                  <li>No cost to the individual if eligible</li>
                  <li>Coordinated by a Care Coordinator after referral</li>
                  <li>Includes nursing, PSW hours, and some therapy</li>
                  <li>Hours allocated based on assessed need and available funding</li>
                  <li>May not fully cover what the situation requires, particularly for complex conditions</li>
                  <li>May not begin immediately after a hospital discharge</li>
                  <li>Scheduling is set by the funded provider, not the family</li>
                </ul>
              </div>
              <div className="compare-card private">
                <div className="compare-label">Private Care</div>
                <div className="compare-title">Arcadia Home Care</div>
                <ul className="compare-list">
                  <li>Paid by the family or through insurance/benefits</li>
                  <li>No wait for eligibility assessment to begin</li>
                  <li>Hours, schedule, and scope set around actual need</li>
                  <li>Same caregiver, consistent visits</li>
                  <li>Can often start more quickly than publicly funded care</li>
                  <li>Fills gaps left by publicly funded care</li>
                  <li>Can be used alongside public care, not instead of it</li>
                </ul>
              </div>
            </div>

            <p>
              Most families who use Arcadia are also receiving some publicly funded
              care through Ontario Health atHome. The two systems work alongside each
              other — public funding covers what it covers, and private care fills
              the gaps in hours, scheduling flexibility, and the specific type of
              support required.
            </p>

            <h2>What Ontario Health atHome actually provides</h2>
            <p>
              Ontario Health atHome (formerly known as the Local Health Integration
              Network Home and Community Care) coordinates publicly funded home care
              for eligible Ontarians. A referral can come from a family physician,
              specialist, hospital discharge team, or the family directly. A Care
              Coordinator then assesses the person and determines what funded services
              are appropriate.
            </p>
            <p>
              Funded services can include nursing visits, personal support worker
              hours for assistance with daily activities, and some occupational
              therapy or physiotherapy. The hours allocated vary considerably based
              on the assessed level of need and the funding available in the local
              region — and they are often lower than what the situation realistically
              requires, particularly for complex conditions like{' '}
              <Link href="/conditions/dementia-care-at-home/">dementia</Link> or{' '}
              <Link href="/conditions/acquired-brain-injury-support/">acquired brain injury</Link>.
            </p>
            <p>
              If you are not already connected to Ontario Health atHome and think
              you may be eligible, a referral through your family physician is
              the typical starting point. Arcadia can help you understand how
              the system works and what to expect from the assessment process.
            </p>

            <h2>Other funding sources worth knowing about</h2>
            <p>
              Beyond Ontario Health atHome, several other funding sources may
              cover some or all of private home care costs for eligible individuals:
            </p>

            <div className="funding-grid">
              {[
                {
                  tag: 'Auto Insurance',
                  title: 'Statutory Accident Benefits (SABS)',
                  body: 'Individuals injured in motor vehicle accidents in Ontario may be entitled to attendant care benefits under the Statutory Accident Benefits Schedule. These can fund private home care — including PSW and RSW support — for eligible clients. The process involves a Form 1 assessment and insurer approval. Arcadia is familiar with SABS documentation requirements.',
                },
                {
                  tag: 'Workplace Injury',
                  title: 'WSIB (Workplace Safety and Insurance Board)',
                  body: 'Workers injured on the job may be entitled to home care benefits through WSIB. Arcadia works with WSIB-funded clients and provides the documentation and service records the Board requires.',
                },
                {
                  tag: 'Veterans',
                  title: "Veterans Affairs Canada",
                  body: 'Eligible veterans may receive funding for home care and home maintenance support through Veterans Affairs Canada. The level of funding depends on the veteran\'s service history and assessed needs. Arcadia has provided care for veterans and is familiar with the program requirements.',
                },
                {
                  tag: 'Extended Health Benefits',
                  title: 'Employer or Private Health Insurance',
                  body: 'Some extended health benefit plans through employers or private insurers include coverage for home care services. The scope varies widely between plans. We recommend checking your specific policy — look for "home care," "attendant care," or "nursing services" in the coverage details.',
                },
                {
                  tag: 'Tax Relief',
                  title: 'Medical Expense Tax Credit',
                  body: 'Private home care costs paid out of pocket may be eligible as medical expenses for the purposes of the federal and provincial Medical Expense Tax Credit. This does not reduce the upfront cost but may reduce annual tax liability. A tax professional can advise on what qualifies.',
                },
              ].map((item, i) => (
                <div key={i} className="funding-card">
                  <div className="funding-card-tag">{item.tag}</div>
                  <div className="funding-card-title">{item.title}</div>
                  <div className="funding-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            <h2>What private home care from Arcadia costs</h2>

            <div className="pricing-box">
              <div className="pricing-box-title">A note on published rates</div>
              <p>
                Arcadia does not publish fixed hourly rates on this page because
                rates vary based on the type of worker required, the complexity
                of care, the hours and schedule involved, and periodic adjustments
                to reflect changes in staffing costs. A rate listed today may not
                be accurate in six months.
              </p>
              <p>
                What we will do during a first conversation is give you a clear,
                honest picture of what care for your specific situation would
                cost — before you commit to anything. We do not believe in
                vague estimates or in surprises on the first invoice.
              </p>
            </div>

            <p>
              That said, here are the factors that determine cost — which helps
              families think through what to ask about before calling:
            </p>

            <div className="cost-factors">
              {[
                { title: 'Type of worker', body: 'PSW rates and RSW rates differ. RSW support for rehabilitation is typically higher than personal support care.' },
                { title: 'Hours and schedule', body: 'Daytime rates, evening rates, and overnight flat rates are typically different. Weekend rates may differ from weekday rates.' },
                { title: 'Complexity of care', body: 'Clients with complex conditions — dementia, ABI, palliative — require more experienced caregivers, which is reflected in the rate.' },
                { title: 'Frequency and consistency', body: 'Regular scheduled visits and consistent caregivers are factored into the overall arrangement. Ad hoc or last-minute requests may be priced differently.' },
                { title: 'Minimum visit length', body: 'Most home care arrangements have a minimum visit length — typically two to three hours — which affects the minimum cost per visit.' },
                { title: 'Publicly funded hours available', body: 'If Ontario Health atHome is already providing funded PSW hours, private care fills the remaining gap — which affects how many private hours are actually needed.' },
              ].map((item, i) => (
                <div key={i} className="cost-factor">
                  <div className="cost-factor-title">{item.title}</div>
                  <div className="cost-factor-body">{item.body}</div>
                </div>
              ))}
            </div>

            {/* Mid CTA */}
            <div className="mid-cta">
              <h3>Want a clearer picture of what care would cost?</h3>
              <p>
                A first conversation with our team gives you honest, specific
                information about costs for your situation — before you commit
                to anything. No vague ranges, no obligation.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            </div>

            <h2>Frequently asked questions about home care costs</h2>

            {[
              {
                q: 'Is OHIP covering my home care?',
                a: 'OHIP does not directly fund private home care. Publicly funded home care is coordinated through Ontario Health atHome, not through OHIP. If you are receiving funded care through Ontario Health atHome, that is separate from OHIP — it is funded through the provincial home and community care budget. Private home care from Arcadia is not covered by OHIP.',
              },
              {
                q: 'My parent was just discharged from hospital. Will they get funded home care automatically?',
                a: 'Not automatically. A discharge from hospital typically triggers a referral to Ontario Health atHome, but the process takes time and the hours allocated may not begin immediately. Many families use private care to bridge the gap between discharge and the start of funded services, or to supplement funded hours that do not fully cover the need. Arcadia can start within days of a first conversation.',
              },
              {
                q: 'We cannot afford full private coverage. What are our options?',
                a: 'Several options are worth exploring: maximizing publicly funded hours through Ontario Health atHome, checking whether any insurance or benefit coverage applies, and using private care selectively for the hours and tasks where it makes the biggest difference. A care assessment helps identify where private support would have the most impact with the fewest hours — so families are not paying for more than they need.',
              },
              {
                q: 'Does Arcadia charge for the initial assessment?',
                a: 'Please ask us about assessment costs when you call — we are happy to explain how it works before you commit to anything. We are happy to clarify this and answer any other questions about costs when you call.',
              },
              {
                q: 'How does billing work?',
                a: 'Arcadia invoices on a regular schedule — typically bi-weekly — based on the hours of care provided. We provide itemized invoices. For families using insurance funding, we handle the documentation and billing process in coordination with the insurer or case manager.',
              },
              {
                q: 'Can we start with a small number of hours and increase later?',
                a: 'Yes. Many care arrangements start with a limited number of hours — a few mornings a week, or a single visit to try the arrangement — and expand as the family\'s comfort and the person\'s needs develop. We are happy to discuss what a realistic starting point looks like when you call.',
              },
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <div className="faq-q">{faq.q}</div>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}

          </div>

          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-cta">
              <h3>Get a clear cost picture</h3>
              <p>A first conversation gives you honest pricing for your specific situation. No obligation.</p>
              <a href="tel:8449770050" className="sidebar-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red-sm">Book a Free Consultation</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">How Care Starts</div>
              <Link href="/how-care-starts/first-conversation/" className="sidebar-link">First Conversation</Link>
              <Link href="/how-care-starts/care-assessment/" className="sidebar-link">Care Assessment</Link>
              <Link href="/how-care-starts/matching-caregivers/" className="sidebar-link">Caregiver Matching</Link>
              <Link href="/how-care-starts/care-begins/" className="sidebar-link">Care Begins</Link>
              <Link href="/how-care-starts/" className="sidebar-link">Ongoing Support</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Funding by Situation</div>
              <Link href="/our-services/hospital-discharge-support/" className="sidebar-link">After Hospital Discharge</Link>
              <Link href="/our-services/acquired-brain-injury-home-care/" className="sidebar-link">Auto Insurance / WSIB</Link>
              <Link href="/our-services/rehabilitation-support/" className="sidebar-link">Rehabilitation Funding</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Navigating the System</div>
              <Link href="/resources/navigating-home-care/" className="sidebar-link">Navigating Home Care Guides</Link>
              <Link href="/resources/family-caregiver-support/" className="sidebar-link">Family Caregiver Support</Link>
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <section className="bottom-cta">
          <p className="eyebrow" style={{ textAlign: 'center', color: '#C8302A' }}>Get Started</p>
          <h2>You should be able to understand what care costs before you decide whether to proceed.</h2>
          <p>
            Call us and we will give you an honest picture of what care
            for your situation would involve — financially and practically —
            before you decide anything.
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
