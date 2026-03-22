// app/our-services/companion-care/page.tsx
// Consideration-stage service page
// Target keyword: "companion care for seniors toronto" / "senior companionship home care GTA"
// Persona: adult child worried about an isolated or lonely parent living alone —
// no clinical crisis, but a growing concern about social withdrawal, low confidence,
// and the slow decline that comes from too little human connection
// Tone: warm, unhurried, human — this is the gentlest service on the site
// Schema: Service + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Companion Care for Seniors | Toronto & GTA | Arcadia Home Care',
  description: 'Companion care for older adults in Toronto and the GTA. Arcadia matches seniors with warm, consistent companions who provide conversation, activities, outings, and human presence — reducing isolation and supporting confidence at home.',
  alternates: { canonical: 'https://arcadiahomecare.ca/our-services/companion-care/' },
}

const faqs = [
  {
    q: 'What is the difference between companion care and personal support?',
    a: 'Personal support focuses on physical care — bathing, dressing, meals, and mobility. Companion care focuses on social and emotional wellbeing — conversation, activities, outings, and human presence. Many clients benefit from both. Companion care is often the right starting point for someone who is managing physically but becoming increasingly isolated or withdrawn.',
  },
  {
    q: 'My parent says they don\'t want or need a companion. How do we handle that?',
    a: 'Resistance is common — many older adults feel that accepting companionship implies they cannot manage on their own. What tends to work better than direct persuasion is introducing the companion gradually, framing visits around a specific shared activity rather than "care," and choosing someone whose personality is a genuine match for the person. Our team has navigated this many times and can help you think through the approach.',
  },
  {
    q: 'What do companions actually do during a visit?',
    a: 'It depends entirely on the person. Some clients enjoy conversation, card games, crosswords, or watching a favourite television program together. Others prefer to go for a walk, visit a local café, or be accompanied to appointments or errands. Others simply want a consistent, warm presence in the home. A good companion follows the client\'s lead rather than arriving with an agenda.',
  },
  {
    q: 'Can companion care be combined with personal support?',
    a: 'Yes — and this is a common arrangement. A caregiver can provide both companionship and personal care assistance in the same visit, or companion care can supplement a PSW schedule on additional days. The care plan is built around what the person actually needs, not around a rigid service category.',
  },
  {
    q: 'How do you match a companion to my parent?',
    a: 'Carefully. We consider personality, interests, communication style, language, cultural background, and the kind of relationship the person tends to respond well to. Some people enjoy an outgoing, chatty companion; others prefer someone quieter and more understated. We take time to understand the individual before making a match.',
  },
  {
    q: 'How is Arcadia\'s companion care different from a volunteer visiting service?',
    a: 'Volunteer services provide valuable community connection, but they are typically limited in frequency, consistency, and scope. Arcadia\'s companion care is a professional service — consistent, reliable, built around the individual\'s preferences, and backed by the same caregiver matching, clinical oversight, and communication standards as our other services. It is also available any day of the week and can flex in hours as needs change.',
  },
]

const whatWeProvide = [
  {
    title: 'Conversation and social engagement',
    body: 'Genuine conversation, reminiscence, storytelling, and the kind of everyday human connection that keeps a person oriented, engaged, and feeling known.',
  },
  {
    title: 'Activities and shared interests',
    body: 'Card games, puzzles, crafts, reading, music, gardening — whatever the person enjoys. A good companion adapts to the individual rather than arriving with a fixed program.',
  },
  {
    title: 'Outings and community access',
    body: 'Walks, café visits, local errands, cultural events, religious services, or simply getting outside and seeing familiar places. Maintaining community connection matters.',
  },
  {
    title: 'Accompaniment to appointments',
    body: 'Accompanying the person to medical appointments, hairdressers, banks, or other errands — providing both practical help and reassuring company.',
  },
  {
    title: 'Meal companionship',
    body: 'Sitting with the person during meals, sometimes helping prepare them together — because eating alone, meal after meal, is one of the most common and least-discussed forms of senior isolation.',
  },
  {
    title: 'Technology and connection support',
    body: 'Helping the person connect with family by video call, navigate a tablet or phone, or engage with online interests — bridging the gap between generations.',
  },
  {
    title: 'Observation and family communication',
    body: 'A consistent companion notices changes — in mood, appetite, mobility, and cognition — and communicates those observations to the family. This early awareness often matters more than any single visit.',
  },
  {
    title: 'Relief for family caregivers',
    body: 'When a companion is present, family members can step away knowing their parent is not alone. That peace of mind is itself a form of care.',
  },
]

export default function CompanionCarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': 'Companion Care',
              'provider': {
                '@type': 'LocalBusiness',
                'name': 'Arcadia Home Care',
                'telephone': '+18449770050',
                'address': {
                  '@type': 'PostalAddress',
                  'streetAddress': '302 Bay St.',
                  'addressLocality': 'Toronto',
                  'addressRegion': 'ON',
                  'postalCode': 'M5H 0B6',
                  'addressCountry': 'CA',
                },
              },
              'areaServed': 'Toronto, Ontario, Canada',
              'description': 'Companion care for older adults in Toronto and the GTA — consistent, matched companionship that reduces isolation and supports wellbeing at home.',
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
                { '@type': 'ListItem', 'position': 2, 'name': 'Our Services', 'item': 'https://arcadiahomecare.ca/our-services/' },
                { '@type': 'ListItem', 'position': 3, 'name': 'Companion Care', 'item': 'https://arcadiahomecare.ca/our-services/companion-care/' },
              ],
            },
          ]),
        }}
      />

      <style>{`
        .service-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }

        .service-hero { background: #1C2B3A; padding: 96px 24px 80px; }
        .service-hero-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 360px; gap: 64px; align-items: center; }
        @media (max-width: 900px) { .service-hero-inner { grid-template-columns: 1fr; } }
        .service-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 14px; }
        .service-hero h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 600; color: #fff; line-height: 1.15; margin-bottom: 20px; }
        .service-hero p { font-size: 1.05rem; color: rgba(255,255,255,0.72); line-height: 1.8; margin-bottom: 32px; }
        .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
        .btn-red { background: #C8302A; color: #fff; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; transition: all 0.2s; box-shadow: 0 8px 20px rgba(200,48,42,0.3); display: inline-flex; align-items: center; gap: 8px; }
        .btn-red:hover { background: #a82520; transform: translateY(-2px); }
        .btn-outline { background: transparent; color: #fff; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; border: 1.5px solid rgba(255,255,255,0.35); transition: all 0.2s; display: inline-flex; align-items: center; }
        .btn-outline:hover { background: rgba(255,255,255,0.1); }

        .hero-trust { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 14px; padding: 28px; }
        .trust-item { display: flex; align-items: flex-start; gap: 12px; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .trust-item:last-child { border-bottom: none; padding-bottom: 0; }
        .trust-item:first-child { padding-top: 0; }
        .trust-icon { font-size: 20px; flex-shrink: 0; margin-top: 2px; }
        .trust-text-title { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 2px; }
        .trust-text-body { font-size: 13px; color: rgba(255,255,255,0.55); line-height: 1.5; }

        .breadcrumb { background: #F7F3EE; border-bottom: 1px solid #E5E0D8; padding: 12px 24px; font-size: 13px; color: #6B7280; }
        .breadcrumb-inner { max-width: 1100px; margin: 0 auto; }
        .breadcrumb a { color: #1C2B3A; text-decoration: none; font-weight: 600; }
        .breadcrumb a:hover { color: #C8302A; }
        .breadcrumb span { margin: 0 8px; }

        .service-body { max-width: 1100px; margin: 0 auto; padding: 72px 24px; display: grid; grid-template-columns: 1fr 320px; gap: 64px; align-items: start; }
        @media (max-width: 900px) { .service-body { grid-template-columns: 1fr; } }

        .service-article h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.6rem, 2.5vw, 2.2rem); font-weight: 600; color: #1C2B3A; line-height: 1.25; margin: 48px 0 16px; }
        .service-article h2:first-child { margin-top: 0; }
        .service-article p { font-size: 1rem; color: #4B5563; line-height: 1.85; margin-bottom: 18px; }
        .service-article a { color: #C8302A; font-weight: 600; text-decoration: underline; text-decoration-color: rgba(200,48,42,0.3); text-underline-offset: 3px; transition: text-decoration-color 0.15s; }
        .service-article a:hover { text-decoration-color: #C8302A; }

        .provides-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0 32px; }
        @media (max-width: 640px) { .provides-grid { grid-template-columns: 1fr; } }
        .provides-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 12px; padding: 20px; transition: border-color 0.2s, box-shadow 0.2s; }
        .provides-card:hover { border-color: #C8302A; box-shadow: 0 6px 20px rgba(28,43,58,0.08); }
        .provides-card-title { font-size: 14px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
        .provides-card-title::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #C8302A; flex-shrink: 0; }
        .provides-card-body { font-size: 0.875rem; color: #6B7280; line-height: 1.7; }

        /* Signs of isolation */
        .signs-box { background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 14px; padding: 28px 32px; margin: 24px 0 32px; }
        .signs-box-title { font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #1C2B3A; margin-bottom: 16px; }
        .signs-list { list-style: none; padding: 0; margin: 0; }
        .signs-list li { font-size: 0.9375rem; color: #4B5563; line-height: 1.7; padding: 8px 0 8px 22px; position: relative; border-bottom: 1px solid #E5E0D8; }
        .signs-list li:last-child { border-bottom: none; }
        .signs-list li::before { content: ''; position: absolute; left: 0; top: 16px; width: 7px; height: 7px; border-radius: 50%; background: #C8302A; opacity: 0.6; }

        .mid-cta { background: #1C2B3A; border-radius: 14px; padding: 32px; margin: 40px 0; }
        .mid-cta h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.5rem; font-weight: 600; color: #fff; margin-bottom: 8px; }
        .mid-cta p { font-size: 0.9rem; color: rgba(255,255,255,0.65); margin-bottom: 20px; line-height: 1.7; }
        .mid-cta-phone { font-size: 1.5rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 12px; }

        .faq-section { margin-top: 48px; }
        .faq-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 12px; }
        .faq-section h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.6rem, 2.5vw, 2.2rem); font-weight: 600; color: #1C2B3A; margin-bottom: 28px; }
        .faq-item { border-bottom: 1px solid #E5E0D8; padding: 20px 0; }
        .faq-q { font-size: 1rem; font-weight: 700; color: #1C2B3A; margin-bottom: 10px; line-height: 1.5; }
        .faq-a { font-size: 0.9375rem; color: #4B5563; line-height: 1.8; }

        .service-sidebar { position: sticky; top: 100px; }
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

        .bottom-cta { background: #1C2B3A; padding: 80px 24px; text-align: center; }
        .bottom-cta h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; color: #fff; max-width: 680px; margin: 0 auto 14px; line-height: 1.2; }
        .bottom-cta p { color: rgba(255,255,255,0.65); font-size: 1rem; max-width: 500px; margin: 0 auto 32px; line-height: 1.8; }
        .bottom-cta-phone { font-size: 2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 20px; font-family: 'Cormorant Garamond', Georgia, serif; }
        .cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
      `}</style>

      <main className="service-page">

        {/* Hero */}
        <section className="service-hero">
          <div className="service-hero-inner">
            <div>
              <p className="service-eyebrow">Our Services · Toronto & GTA</p>
              <h1>Companion Care for Seniors</h1>
              <p>
                Isolation is one of the most serious and least-discussed risks for
                older adults living at home. Companion care provides consistent,
                matched human presence — conversation, activities, outings, and
                the kind of relationship that keeps a person engaged, confident,
                and genuinely connected to their life.
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
            <div className="hero-trust">
              {[
                { icon: '🤝', title: 'Matched on personality and interests', body: 'Companion matching goes beyond logistics — we consider communication style, cultural background, and what kind of person your parent actually enjoys spending time with.' },
                { icon: '📅', title: 'Consistent, reliable visits', body: 'The same companion, on a regular schedule. Consistency is what makes companion care work over time.' },
                { icon: '👁️', title: 'Early observation and family communication', body: 'A consistent companion notices changes — in mood, appetite, and cognition — and communicates them to the family.' },
                { icon: '🔄', title: 'Can grow into broader care', body: 'Companion care is often where a care relationship begins. It can expand naturally to include personal support as needs evolve.' },
              ].map((item, i) => (
                <div key={i} className="trust-item">
                  <span className="trust-icon">{item.icon}</span>
                  <div>
                    <div className="trust-text-title">{item.title}</div>
                    <div className="trust-text-body">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="breadcrumb-inner">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/our-services/">Our Services</Link><span>›</span>
            Companion Care
          </div>
        </nav>

        {/* Body + Sidebar */}
        <div className="service-body">
          <article className="service-article">

            <h2>Why companion care matters more than it sounds</h2>
            <p>
              Companion care is sometimes treated as a lesser service — a nice-to-have
              compared to the clinical work of personal support or rehabilitation.
              That framing misses something important. Social isolation in older adults
              is widely recognized as a serious concern — one that can affect mood,
              motivation, daily habits, and overall quality of life over time.
            </p>
            <p>
              For many families in Toronto and across the GTA, the concern is not that
              a parent needs help with bathing or medication — it is that they are
              spending day after day alone, eating alone, watching television alone,
              gradually withdrawing from the things that used to matter to them.
              Companion care addresses that directly. It is one of the more underused
              options available, and often one of the most practical.
            </p>

            <h2>Signs a parent may benefit from companion care</h2>
            <p>
              These are the patterns families most often describe when they contact
              Arcadia about companion care:
            </p>

            <div className="signs-box">
              <div className="signs-box-title">What families notice</div>
              <ul className="signs-list">
                <li>Spending most of each day alone with little structured activity</li>
                <li>Declining interest in hobbies or activities they previously enjoyed</li>
                <li>Reduced appetite — less motivation to prepare or eat meals properly when alone</li>
                <li>Increasing phone calls to family, often for conversation rather than anything specific</li>
                <li>Reluctance to go out alone — reduced confidence or anxiety about navigation</li>
                <li>Noticeably lower mood, energy, or engagement when family visits</li>
                <li>Comments about feeling lonely, bored, or like "a burden"</li>
                <li>A family caregiver who cannot visit as often as needed but is worried</li>
              </ul>
            </div>

            <h2>What companion care includes</h2>

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
              <h3>Not sure if companion care is the right starting point?</h3>
              <p>
                A conversation with our team helps clarify whether companion care,
                personal support, or a combination is most appropriate — and what
                a realistic care plan would look like.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">
                Book a Free Consultation
              </Link>
            </div>

            <h2>Companion care as a starting point for broader support</h2>
            <p>
              One of the practical advantages of companion care is that it introduces
              the idea of having someone in the home before clinical care becomes
              necessary. A parent who resists the idea of a PSW may accept a companion
              — someone to have coffee with, to go for a walk with, to watch a film
              with. Over time, as trust builds and the relationship feels natural,
              the scope of support can expand to include personal care assistance
              without the same resistance.
            </p>
            <p>
              Many of Arcadia's longest-standing care relationships began as companion
              care visits. The companion who sat with someone for coffee on Tuesday
              mornings became, over years, the caregiver who helped them through
              dementia. That continuity — the same person, through many stages —
              is one of the things that makes companion care worth investing in early.
            </p>
            <p>
              For families who are thinking about{' '}
              <Link href="/our-services/personal-support-daily-living/">personal support</Link>{' '}
              or{' '}
              <Link href="/our-services/dementia-alzheimers-home-care/">dementia care</Link>{' '}
              but are not sure their parent is ready, companion care is often the right
              place to start. Families navigating these questions may also find our{' '}
              <a href="/resources/family-caregiving-guides/caring-for-your-loved-one/" style={{ color: '#C8302A', fontWeight: 600, textDecoration: 'underline' }}>family caregiver support guides</a>
              {' '}useful. Our team can help you think through the path forward.
            </p>

            <h2>Companion care across Toronto and the GTA</h2>
            <p>
              Arcadia provides companion care across{' '}
              <Link href="/locations/toronto/">Toronto</Link>,{' '}
              <Link href="/locations/toronto/north-york-home-care/">North York</Link>,{' '}
              <Link href="/locations/toronto/scarborough-home-care/">Scarborough</Link>,{' '}
              <Link href="/locations/toronto/etobicoke-home-care/">Etobicoke</Link>,{' '}
              <Link href="/locations/york-region/markham-home-care/">Markham</Link>,{' '}
              <Link href="/locations/york-region/richmond-hill-home-care/">Richmond Hill</Link>, and{' '}
              <Link href="/locations/peel-region/mississauga-home-care/">Mississauga</Link>.
              Companions are matched on language and cultural background where relevant —
              which matters particularly in Scarborough, Markham, and Mississauga,
              where community ties and shared cultural reference points are often
              the foundation of a good companion relationship.
            </p>

            {/* FAQ */}
            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions families ask about companion care</h2>
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <div className="faq-q">{faq.q}</div>
                  <div className="faq-a">{faq.a}</div>
                </div>
              ))}
            </div>

          </article>

          {/* Sidebar */}
          <aside className="service-sidebar">
            <div className="sidebar-cta">
              <h3>Talk to our team</h3>
              <p>No obligation. We listen first and help you understand your options.</p>
              <a href="tel:8449770050" className="sidebar-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red-sm">Book a Free Consultation</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Conditions</div>
              <Link href="/conditions/dementia-care-at-home/" className="sidebar-link">Dementia Care at Home</Link>
              <Link href="/conditions/frailty-fall-prevention/" className="sidebar-link">Frailty & Fall Prevention</Link>
              <Link href="/conditions/caregiver-burnout-support/" className="sidebar-link">Caregiver Burnout Support</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Services</div>
              <Link href="/our-services/personal-support-daily-living/" className="sidebar-link">Personal Support & Daily Living</Link>
              <Link href="/our-services/respite-care/" className="sidebar-link">Respite Care</Link>
              <Link href="/our-services/dementia-alzheimers-home-care/" className="sidebar-link">Dementia & Alzheimer's Care</Link>
              <Link href="/our-services/overnight-24-hour-care/" className="sidebar-link">Overnight & 24-Hour Care</Link>
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
              <Link href="/locations/toronto/north-york-home-care/" className="sidebar-link">North York</Link>
              <Link href="/locations/toronto/scarborough-home-care/" className="sidebar-link">Scarborough</Link>
              <Link href="/locations/toronto/etobicoke-home-care/" className="sidebar-link">Etobicoke</Link>
              <Link href="/locations/york-region/markham-home-care/" className="sidebar-link">Markham</Link>
              <Link href="/locations/peel-region/mississauga-home-care/" className="sidebar-link">Mississauga</Link>
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
                { type: 'Condition', title: 'Caregiver Burnout Support', href: '/conditions/caregiver-burnout-support/' },
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

        {/* Bottom CTA */}
        <section className="bottom-cta">
          <p className="service-eyebrow" style={{ textAlign: 'center', color: '#C8302A' }}>Get Started</p>
          <h2>Companion care is often where the right care relationship begins.</h2>
          <p>
            A conversation with our team helps clarify whether companion care is
            the right starting point — and what that would look like for your family.
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
