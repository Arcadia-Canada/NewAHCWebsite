// app/how-care-starts/first-conversation/page.tsx
// Decision-stage page — the reader has decided to reach out
// Target keyword: "book home care consultation toronto" / "how to start home care GTA"
// Persona: family or individual who is ready to talk but anxious about what happens next
// — what will be asked, what they need to have ready, whether they'll be pressured
// Tone: reassuring, practical, no pressure — reduce the barrier to calling
// Schema: Service + BreadcrumbList

// app/how-care-starts/first-conversation/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Book a Free Consultation | How Care Starts | Arcadia Home Care',
  description:
    'Book a free consultation with Arcadia Home Care in Toronto and the GTA. No forms, no pressure — just a conversation about your situation and what support might look like. We listen first.',
  alternates: {
    canonical:
      'https://www.arcadiahomecare.ca/how-care-starts/first-conversation/',
  },
}

export default function FirstConversationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'Free Home Care Consultation',
              provider: {
                '@type': 'LocalBusiness',
                name: 'Arcadia Home Care',
                telephone: '+18449770050',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '302 Bay St.',
                  addressLocality: 'Toronto',
                  addressRegion: 'ON',
                  postalCode: 'M5H 0B6',
                  addressCountry: 'CA',
                },
              },
              areaServed: 'Toronto, Ontario, Canada',
              description:
                'Free home care consultation for families and individuals in Toronto and the GTA — a conversation about your situation and what support might look like.',
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
                  name: 'How Care Starts',
                  item: 'https://www.arcadiahomecare.ca/how-care-starts/',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'First Conversation',
                  item: 'https://www.arcadiahomecare.ca/how-care-starts/first-conversation/',
                },
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

        .expect-steps { display: flex; flex-direction: column; gap: 0; margin: 24px 0 32px; }
        .expect-step { display: flex; gap: 20px; padding: 24px 0; border-bottom: 1px solid #E5E0D8; }
        .expect-step:last-child { border-bottom: none; }
        .expect-num { width: 40px; height: 40px; border-radius: 50%; background: #1C2B3A; color: #fff; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .expect-content { flex: 1; }
        .expect-title { font-size: 15px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; }
        .expect-body { font-size: 0.9rem; color: #6B7280; line-height: 1.7; }

        .dont-need { background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 14px; padding: 28px 32px; margin: 24px 0 32px; }
        .dont-need-title { font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #1C2B3A; margin-bottom: 16px; }
        .dont-list { list-style: none; padding: 0; margin: 0; }
        .dont-list li { font-size: 0.9375rem; color: #4B5563; line-height: 1.7; padding: 8px 0 8px 26px; position: relative; border-bottom: 1px solid #E5E0D8; }
        .dont-list li:last-child { border-bottom: none; }
        .dont-list li::before { content: '✓'; position: absolute; left: 0; top: 8px; font-size: 13px; font-weight: 700; color: #C8302A; }

        .ready-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 24px 0 32px; }
        @media (max-width: 600px) { .ready-grid { grid-template-columns: 1fr; } }
        .ready-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 10px; padding: 16px 18px; }
        .ready-card-title { font-size: 14px; font-weight: 700; color: #1C2B3A; margin-bottom: 4px; }
        .ready-card-body { font-size: 0.875rem; color: #6B7280; line-height: 1.6; }

        .care-starts-nav { background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 14px; padding: 28px 32px; margin: 40px 0; }
        .care-starts-title { font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #1C2B3A; margin-bottom: 16px; }
        .care-starts-steps { display: flex; flex-direction: column; gap: 0; }
        .care-step { display: flex; align-items: center; gap: 14px; padding: 12px 0; border-bottom: 1px solid #E5E0D8; text-decoration: none; transition: color 0.15s; }
        .care-step:last-child { border-bottom: none; }
        .care-step-num { width: 28px; height: 28px; border-radius: 50%; background: #1C2B3A; color: #fff; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .care-step.active .care-step-num { background: #C8302A; }
        .care-step-text { font-size: 14px; font-weight: 600; color: #1C2B3A; }
        .care-step:hover .care-step-text { color: #C8302A; }
        .care-step.active .care-step-text { color: #C8302A; }
        .care-step-arrow { margin-left: auto; font-size: 13px; color: #C8302A; opacity: 0; transition: opacity 0.15s; }
        .care-step:hover .care-step-arrow { opacity: 1; }

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

        .contact-section { background: #F7F3EE; border-top: 1px solid #E5E0D8; padding: 72px 24px; }
        .contact-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
        @media (max-width: 768px) { .contact-inner { grid-template-columns: 1fr; } }
        .contact-text h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 600; color: #1C2B3A; line-height: 1.2; margin-bottom: 16px; }
        .contact-text p { font-size: 0.9625rem; color: #6B7280; line-height: 1.8; margin-bottom: 20px; }
        .contact-detail { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; }
        .contact-detail-icon { font-size: 18px; flex-shrink: 0; margin-top: 2px; }
        .contact-detail-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #6B7280; margin-bottom: 2px; }
        .contact-detail-value { font-size: 15px; font-weight: 700; color: #1C2B3A; text-decoration: none; }
        .contact-detail-value:hover { color: #C8302A; }

        .contact-form { background: #fff; border: 1px solid #E5E0D8; border-radius: 16px; padding: 36px; }
        .form-title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.5rem; font-weight: 600; color: #1C2B3A; margin-bottom: 6px; }
        .form-subtitle { font-size: 0.875rem; color: #6B7280; margin-bottom: 24px; }
        .form-row { margin-bottom: 16px; }
        .form-row label { display: block; font-size: 13px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; }
        .form-row input, .form-row textarea, .form-row select { width: 100%; padding: 11px 14px; border: 1.5px solid #E5E0D8; border-radius: 8px; font-size: 14px; font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; background: #FAFAF8; transition: border-color 0.15s; box-sizing: border-box; }
        .form-row input:focus, .form-row textarea:focus, .form-row select:focus { outline: none; border-color: #1C2B3A; background: #fff; }
        .form-row textarea { resize: vertical; min-height: 100px; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        @media (max-width: 500px) { .form-grid { grid-template-columns: 1fr; } }
        .form-submit { background: #C8302A; color: #fff; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; border: none; cursor: pointer; width: 100%; transition: background 0.2s; font-family: 'DM Sans', system-ui, sans-serif; display: flex; align-items: center; justify-content: center; gap: 8px; }
        .form-submit:hover { background: #a82520; }
        .form-note { font-size: 12px; color: #9CA3AF; text-align: center; margin-top: 10px; line-height: 1.5; }

        .bottom-cta { background: #1C2B3A; padding: 80px 24px; text-align: center; }
        .bottom-cta h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; color: #fff; max-width: 680px; margin: 0 auto 14px; line-height: 1.2; }
        .bottom-cta p { color: rgba(255,255,255,0.65); font-size: 1rem; max-width: 500px; margin: 0 auto 32px; line-height: 1.8; }
        .bottom-cta-phone { font-size: 2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 20px; font-family: 'Cormorant Garamond', Georgia, serif; }
        .cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
      `}</style>

      <main className="page">
        <section className="hero">
          <div className="hero-inner">
            <p className="eyebrow">How Care Starts · Step 1</p>
            <h1>The First Conversation</h1>
            <p>
              You do not need to have everything figured out before you call.
              The first conversation is just that — a conversation. We listen
              to what is happening and help you understand what your options are.
              No pressure, no obligation.
            </p>
            <div className="hero-actions">
              <a href="tel:8449770050" className="btn-red">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 2.5C2 8.299 5.701 12 11.5 12l.5-2.5-2.5-.5-.5 1c-2-1-3-2-4-4l1-.5L5.5 3 3 2.5z"
                    stroke="#fff"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
                Call (844) 977-0050
              </a>
              <a href="#consultation-form" className="btn-outline">
                Request a Callback
              </a>
            </div>
          </div>
        </section>

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="breadcrumb-inner">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/how-care-starts/">How Care Starts</Link>
            <span>›</span>
            First Conversation
          </div>
        </nav>

        <div className="body-wrap">
          <div className="main-content">
            <h2>What to expect from the first call</h2>
            <p>
              Many families put off making this call for longer than they should —
              worried they will be pushed into something, or that they do not have
              enough information to have a useful conversation. In practice, neither of those
              things tends to be an obstacle. The first call with Arcadia is designed
              to be useful to you regardless of where you are in the decision-making
              process.
            </p>

            <div className="expect-steps">
              {[
                {
                  num: '1',
                  title: 'We listen first',
                  body: 'We ask about the situation — who needs care, what is happening, what the family has already tried, and what feels most urgent. We do not begin with a questionnaire or a pitch. We begin by trying to understand.',
                },
                {
                  num: '2',
                  title: 'We explain your options honestly',
                  body: 'Based on what you share, we explain what types of support are likely to be most useful, what publicly funded care may be available through Ontario Health atHome, and what private care from Arcadia would involve and what it would likely cost. We give honest answers, including if we think another type of provider would serve you better.',
                },
                {
                  num: '3',
                  title: 'We answer your questions',
                  body: 'Whatever is on your mind — how caregivers are selected, what happens if something goes wrong, how billing works, how quickly care can start — we answer it directly. There are no questions that are too basic or too detailed.',
                },
                {
                  num: '4',
                  title: 'You decide what comes next',
                  body: 'At the end of the call, you decide whether and how to proceed. Some families book a care assessment on the same call. Others need more time to think or to talk with other family members. Both are completely fine. There is no pressure to decide anything before you are ready.',
                },
              ].map((step, i) => (
                <div key={i} className="expect-step">
                  <div className="expect-num">{step.num}</div>
                  <div className="expect-content">
                    <div className="expect-title">{step.title}</div>
                    <div className="expect-body">{step.body}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2>What you do not need to have ready</h2>
            <p>
              Families often delay calling because they feel they are not prepared.
              Here is what you do not need before you call:
            </p>

            <div className="dont-need">
              <div className="dont-need-title">You do not need to have</div>
              <ul className="dont-list">
                <li>A clear idea of how many hours of care are needed</li>
                <li>A diagnosis or medical records</li>
                <li>A decision made about whether you want private or public care</li>
                <li>Agreement from the person who will be receiving care</li>
                <li>A budget figured out</li>
                <li>Other family members aligned on what to do</li>
              </ul>
            </div>

            <p>
              All of those things get worked out through the conversation and the{' '}
              <Link href="/how-care-starts/care-assessment/">care assessment</Link>{' '}
              that follows. The only thing you need to start is a willingness to
              describe what is happening.
            </p>

            <h2>What is helpful to have on hand</h2>
            <p>
              While you do not need to be prepared, these things help us give you
              a more useful first conversation:
            </p>

            <div className="ready-grid">
              {[
                {
                  title: 'A brief description of the situation',
                  body: 'What has changed recently, what the person can and cannot manage on their own, and what the family is most worried about.',
                },
                {
                  title: "The person's approximate age and location",
                  body: 'So we can speak to what is available in your area and what publicly funded options may apply.',
                },
                {
                  title: 'Any known medical conditions',
                  body: 'Not a full medical history — just the diagnoses that are most relevant to the care being considered.',
                },
                {
                  title: 'A sense of urgency',
                  body: 'Whether this is an immediate need, a planned arrangement, or something you are beginning to think about for the future.',
                },
              ].map((item, i) => (
                <div key={i} className="ready-card">
                  <div className="ready-card-title">{item.title}</div>
                  <div className="ready-card-body">{item.body}</div>
                </div>
              ))}
            </div>

            <h2>How the first conversation fits into the care process</h2>
            <p>
              The first conversation is the start of a structured process — not a
              standalone call that leads to a care package being emailed to you.
              Here is how the steps connect:
            </p>

            <div className="care-starts-nav">
              <div className="care-starts-title">How Care Starts at Arcadia</div>
              <div className="care-starts-steps">
                {[
                  {
                    num: '1',
                    label: 'First Conversation',
                    href: '/how-care-starts/first-conversation/',
                    active: true,
                  },
                  {
                    num: '2',
                    label: 'Care Assessment',
                    href: '/how-care-starts/care-assessment/',
                    active: false,
                  },
                  {
                    num: '3',
                    label: 'Your Care Plan',
                    href: '/how-care-starts/',
                    active: false,
                  },
                  {
                    num: '4',
                    label: 'Caregiver Matching',
                    href: '/how-care-starts/matching-caregivers/',
                    active: false,
                  },
                  {
                    num: '5',
                    label: 'Care Begins',
                    href: '/how-care-starts/care-begins/',
                    active: false,
                  },
                  {
                    num: '6',
                    label: 'Ongoing Support',
                    href: '/how-care-starts/',
                    active: false,
                  },
                ].map((step, i) => (
                  <Link
                    key={i}
                    href={step.href}
                    className={`care-step${step.active ? ' active' : ''}`}
                  >
                    <div className="care-step-num">{step.num}</div>
                    <div className="care-step-text">{step.label}</div>
                    <span className="care-step-arrow">→</span>
                  </Link>
                ))}
              </div>
            </div>

            <h2>Frequently asked questions about the first call</h2>

            {[
              {
                q: 'How long does the first call take?',
                a: 'Usually between 20 and 40 minutes, depending on how much you want to cover. There is no set time limit — we go at the pace that is useful to you.',
              },
              {
                q: 'Who should be on the call?',
                a: 'Whoever is most informed about the situation and most involved in the decision. That might be an adult child, a spouse, the person who will be receiving care, or some combination. If you are calling on behalf of a parent who is not yet aware you are exploring care options, that is also fine — and common.',
              },
              {
                q: 'Will I be pressured to sign up for anything?',
                a: 'No. The first call is informational. We may recommend a care assessment as a logical next step, but we do not push for commitments or create artificial urgency. Families who feel pressured tend not to make good decisions, and they tend not to become long-term clients.',
              },
              {
                q: 'What if I am calling from out of town about a parent in Toronto?',
                a: 'This is a common situation. We are well practised at supporting families who are managing a situation at a distance — the first call can cover what is happening, what we would need to assess, and how we would keep you informed through the process.',
              },
              {
                q: 'Can I request a callback instead of calling?',
                a: 'Yes — use the form below and we will call you at a time that works for you.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                style={{ borderBottom: '1px solid #E5E0D8', padding: '20px 0' }}
              >
                <div
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#1C2B3A',
                    marginBottom: '10px',
                    lineHeight: 1.5,
                  }}
                >
                  {faq.q}
                </div>
                <div
                  style={{
                    fontSize: '0.9375rem',
                    color: '#4B5563',
                    lineHeight: 1.8,
                  }}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>

          <aside className="sidebar">
            <div className="sidebar-cta">
              <h3>Ready to talk?</h3>
              <p>
                Call us now — or use the form below to request a callback at a
                time that suits you.
              </p>
              <a href="tel:8449770050" className="sidebar-phone">
                (844) 977-0050
              </a>
              <a href="#consultation-form" className="btn-red-sm">
                Request a Callback
              </a>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Next Steps</div>
              <Link
                href="/how-care-starts/care-assessment/"
                className="sidebar-link"
              >
                Care Assessment
              </Link>
              <Link
                href="/how-care-starts/matching-caregivers/"
                className="sidebar-link"
              >
                Caregiver Matching
              </Link>
              <Link href="/how-care-starts/" className="sidebar-link">
                How Care Starts Overview
              </Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Understand Your Options</div>
              <Link href="/our-services/" className="sidebar-link">
                Our Services
              </Link>
              <Link href="/conditions/" className="sidebar-link">
                Conditions We Support
              </Link>
              <Link
                href="/resources/navigating-home-care/"
                className="sidebar-link"
              >
                Navigating Home Care Guides
              </Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Contact Details</div>
              <div
                style={{ padding: '10px 0', borderBottom: '1px solid #F0EBE3' }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#6B7280',
                    marginBottom: 3,
                  }}
                >
                  PHONE
                </div>
                <a
                  href="tel:8449770050"
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: '#1C2B3A',
                    textDecoration: 'none',
                  }}
                >
                  (844) 977-0050
                </a>
              </div>
              <div
                style={{ padding: '10px 0', borderBottom: '1px solid #F0EBE3' }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#6B7280',
                    marginBottom: 3,
                  }}
                >
                  EMAIL
                </div>
                <a
                  href="mailto:info@arcadiahomecare.ca"
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#1C2B3A',
                    textDecoration: 'none',
                  }}
                >
                  info@arcadiahomecare.ca
                </a>
              </div>
              <div style={{ padding: '10px 0' }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#6B7280',
                    marginBottom: 3,
                  }}
                >
                  HOURS
                </div>
                <div style={{ fontSize: 14, color: '#4B5563' }}>
                  Mon–Fri, 9:00AM–5:00PM
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section className="contact-section" id="consultation-form">
          <div className="contact-inner">
            <div className="contact-text">
              <p className="eyebrow" style={{ textAlign: 'left' }}>
                Get in Touch
              </p>
              <h2>Request a Free Consultation</h2>
              <p>
                Fill in the form and we will call you back at a time that
                works for you. No obligation — just a conversation about
                your situation and what support might look like.
              </p>

              <div className="contact-detail">
                <span className="contact-detail-icon">📞</span>
                <div>
                  <div className="contact-detail-label">Call us directly</div>
                  <a href="tel:8449770050" className="contact-detail-value">
                    (844) 977-0050
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon">✉️</span>
                <div>
                  <div className="contact-detail-label">Email</div>
                  <a
                    href="mailto:info@arcadiahomecare.ca"
                    className="contact-detail-value"
                  >
                    info@arcadiahomecare.ca
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon">🕐</span>
                <div>
                  <div className="contact-detail-label">Office hours</div>
                  <span
                    className="contact-detail-value"
                    style={{ cursor: 'default' }}
                  >
                    Monday–Friday, 9:00AM–5:00PM
                  </span>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon">📍</span>
                <div>
                  <div className="contact-detail-label">Address</div>
                  <span
                    className="contact-detail-value"
                    style={{ cursor: 'default' }}
                  >
                    302 Bay St., Toronto, ON M5H 0B6
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <div className="form-title">Book a Free Consultation</div>
              <div className="form-subtitle">
                We will call you back within one business day.
              </div>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="3f35a2f5-9c08-4e4c-9a5e-b9a56f24314d"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New consultation request — First Conversation page"
                />
                <input
                  type="hidden"
                  name="from_name"
                  value="Arcadia Home Care - First Conversation Form"
                />
                <input
                  type="hidden"
                  name="redirect"
                  value="https://www.arcadiahomecare.ca/how-care-starts/first-conversation/thank-you/"
                />

                <input
                  type="checkbox"
                  name="botcheck"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="form-grid">
                  <div className="form-row">
                    <label htmlFor="first-name">First name *</label>
                    <input
                      type="text"
                      id="first-name"
                      name="first_name"
                      required
                      minLength={2}
                      maxLength={60}
                      autoComplete="given-name"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="last-name">Last name *</label>
                    <input
                      type="text"
                      id="last-name"
                      name="last_name"
                      required
                      minLength={2}
                      maxLength={60}
                      autoComplete="family-name"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <label htmlFor="phone">Phone number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    autoComplete="tel"
                    pattern="^[0-9+()\\-\\s]{7,20}$"
                    title="Please enter a valid phone number."
                    placeholder="(416) 555-0100"
                  />
                </div>

                <div className="form-row">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    maxLength={120}
                    autoComplete="email"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="form-row">
                  <label htmlFor="service">
                    What type of support are you looking for?
                  </label>
                  <select id="service" name="service" defaultValue="">
                    <option value="">— Select an option —</option>
                    <option value="dementia">Dementia & Alzheimer&apos;s Care</option>
                    <option value="abi">Acquired Brain Injury Care</option>
                    <option value="palliative">Palliative Home Care</option>
                    <option value="discharge">Hospital Discharge Support</option>
                    <option value="personal-support">
                      Personal Support & Daily Living
                    </option>
                    <option value="companion">Companion Care</option>
                    <option value="respite">Respite Care</option>
                    <option value="overnight">Overnight & 24-Hour Care</option>
                    <option value="rehabilitation">Rehabilitation Support</option>
                    <option value="case-management">Case Management</option>
                    <option value="housekeeping">Light Housekeeping</option>
                    <option value="downsizing">Downsizing & Transition Support</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                <div className="form-row">
                  <label htmlFor="message">Brief description of the situation</label>
                  <textarea
                    id="message"
                    name="message"
                    maxLength={1200}
                    placeholder="Tell us a little about who needs care and what you are looking for..."
                  />
                </div>

                <button type="submit" className="form-submit">
                  Request a Callback
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <p className="form-note">
                  We respond within one business day. Your information is never shared.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section className="bottom-cta">
          <p className="eyebrow" style={{ textAlign: 'center', color: '#C8302A' }}>
            No Obligation
          </p>
          <h2>The hardest part is usually making the first call.</h2>
          <p>
            Most families feel better after the conversation — not more committed,
            just more informed. That is all the first call needs to be.
          </p>
          <a href="tel:8449770050" className="bottom-cta-phone">
            (844) 977-0050
          </a>
          <div className="cta-actions">
            <a href="#consultation-form" className="btn-red">
              Request a Callback
            </a>
            <Link href="/how-care-starts/" className="btn-outline">
              See All Steps
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}