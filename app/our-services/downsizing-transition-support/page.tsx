// app/our-services/downsizing-transition-support/page.tsx
// Consideration-stage service page
// Target keyword: "downsizing support seniors toronto" / "senior home transition support GTA"
// Persona A: adult child helping a parent move from a family home — often against
// resistance — to a smaller space, retirement community, or long-term care
// Persona B: older adult who has accepted the move but is overwhelmed by the
// practical and emotional weight of what it requires
// Tone: gentle, practical, honest — this is one of the hardest transitions
// in family life and the page should feel like it understands that
// Schema: Service + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Downsizing & Transition Support | Toronto | Arcadia',
  description: 'Downsizing and transition support for older adults and families in Toronto and the GTA. Arcadia helps with the practical and emotional work of moving — sorting, decluttering, packing, and supporting the person through one of life\'s most significant transitions.',
  alternates: { canonical: 'https://www.arcadiahomecare.ca/our-services/downsizing-transition-support/' },
}

const faqs = [
  {
    q: 'What does downsizing support actually involve?',
    a: 'Downsizing support helps older adults and their families manage the practical and emotional work of moving from a larger home to a smaller one. That includes helping sort and decide what to keep, donate, or dispose of; organizing and packing belongings; coordinating with movers; helping set up the new space; and providing consistent support for the person through a process that is often more emotionally demanding than families anticipate.',
  },
  {
    q: 'My parent is resistant to moving. How do we handle that?',
    a: 'Resistance to leaving a family home is very common, and it deserves to be taken seriously rather than managed away. A home represents identity, independence, and decades of accumulated life — the reluctance to leave it is entirely understandable. What tends to work better than persuasion is involving the person as fully as possible in decisions about their belongings and new space, moving at a pace that feels manageable to them, and acknowledging openly that this is a loss, not just a logistical event. Our team has supported many families through this and can help you think through the approach.',
  },
  {
    q: 'How is downsizing support different from hiring a moving company?',
    a: 'A moving company moves boxes. Downsizing support helps with everything before, during, and after — sorting through decades of belongings with the person, making decisions about what comes and what goes, managing the emotional weight of that process, coordinating practical aspects of the move, and helping the person settle into their new environment. The practical and emotional dimensions of the work are intertwined throughout.',
  },
  {
    q: 'Can Arcadia help if the person is moving to long-term care rather than another home?',
    a: 'Yes. Moves to long-term care or retirement communities involve the same sorting, decision-making, and emotional support — often with additional complexity around what can be brought into the new environment. Arcadia can also help families navigate the transition from home care to facility-based care, including coordinating with the receiving facility about the person\'s needs and preferences.',
  },
  {
    q: 'Can downsizing support be combined with ongoing home care?',
    a: 'Yes — and for many families, downsizing is the point at which ongoing care begins. A caregiver who has supported the person through the transition is already familiar with them, which makes the shift to regular personal support or companion care more natural. Arcadia can provide downsizing support as a standalone service or as the start of a longer-term care relationship.',
  },
  {
    q: 'How long does a typical downsizing engagement take?',
    a: 'It varies considerably depending on the size of the home, how long the person has lived there, how much needs to be sorted, and the pace at which the person can manage the process. Some moves happen over a few intensive weeks; others are spread over several months to allow the person to adjust emotionally as the process unfolds. We build the timeline around what is manageable for the individual, not what is convenient for the calendar.',
  },
]

const whatWeProvide = [
  {
    title: 'Sorting and decision support',
    body: 'Sitting with the person through the process of deciding what to keep, donate, give to family, or let go — at their pace, with genuine attention to what each item means.',
  },
  {
    title: 'Decluttering and organization',
    body: 'Systematically working through rooms and storage areas — organizing what stays, preparing what goes, and creating order from what can feel like an overwhelming accumulation.',
  },
  {
    title: 'Coordination with family',
    body: 'Helping family members understand what is needed, when, and how they can help — reducing conflict and confusion about the process.',
  },
  {
    title: 'Donation and disposal coordination',
    body: 'Arranging for donations to go where they are wanted, coordinating disposal of what cannot be donated, and handling the logistics so the family does not have to.',
  },
  {
    title: 'Packing and labelling',
    body: 'Careful, organized packing of belongings that are coming to the new space — labelled clearly and prepared in a way that makes unpacking straightforward.',
  },
  {
    title: 'Move-day support',
    body: 'A familiar, supportive presence on moving day — which is often one of the emotionally hardest days in the process, and one where having someone the person trusts nearby matters.',
  },
  {
    title: 'New home setup',
    body: 'Helping organize and arrange the new space so it feels like home as quickly as possible — familiar items in accessible places, the environment set up around the person\'s needs and preferences.',
  },
  {
    title: 'Post-move settling support',
    body: 'Follow-up visits in the days and weeks after the move — helping the person adjust, addressing practical issues that arise, and providing continuity of support through the settling-in period.',
  },
]

export default function DownsizingTransitionSupportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': 'Downsizing & Transition Support',
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
              'description': 'Downsizing and transition support for older adults and families in Toronto and the GTA — practical and emotional support through one of life\'s most significant moves.',
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
                { '@type': 'ListItem', 'position': 2, 'name': 'Our Services', 'item': 'https://www.arcadiahomecare.ca/our-services/' },
                { '@type': 'ListItem', 'position': 3, 'name': 'Downsizing & Transition Support', 'item': 'https://www.arcadiahomecare.ca/our-services/downsizing-transition-support/' },
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

        /* Phases timeline */
        .phases { display: flex; flex-direction: column; gap: 0; margin: 24px 0 32px; }
        .phase { display: flex; gap: 20px; padding: 24px 0; border-bottom: 1px solid #E5E0D8; }
        .phase:last-child { border-bottom: none; }
        .phase-marker { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
        .phase-dot { width: 14px; height: 14px; border-radius: 50%; background: #C8302A; flex-shrink: 0; margin-top: 4px; }
        .phase-line { width: 2px; flex: 1; background: #E5E0D8; margin-top: 6px; }
        .phase:last-child .phase-line { display: none; }
        .phase-content { flex: 1; padding-bottom: 8px; }
        .phase-label { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #C8302A; margin-bottom: 4px; }
        .phase-title { font-size: 15px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; }
        .phase-body { font-size: 0.9rem; color: #6B7280; line-height: 1.7; }

        /* What makes this hard callout */
        .hard-callout { background: #F7F3EE; border: 1px solid #E5E0D8; border-left: 4px solid #1C2B3A; border-radius: 0 12px 12px 0; padding: 24px 28px; margin: 32px 0; }
        .hard-callout-title { font-size: 13px; font-weight: 700; color: #1C2B3A; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 12px; }
        .hard-list { list-style: none; padding: 0; margin: 0; }
        .hard-list li { font-size: 0.9375rem; color: #4B5563; line-height: 1.7; padding: 7px 0 7px 22px; position: relative; border-bottom: 1px solid #E5E0D8; }
        .hard-list li:last-child { border-bottom: none; }
        .hard-list li::before { content: ''; position: absolute; left: 0; top: 15px; width: 7px; height: 7px; border-radius: 50%; background: #1C2B3A; opacity: 0.3; }

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
              <h1>Downsizing & Transition Support</h1>
              <p>
                Moving from a long-held home is one of the more demanding transitions
                in an older adult's life — practically demanding and emotionally heavy
                in equal measure. Arcadia provides hands-on support through the entire
                process, from the first conversation about what to keep through to
                settling into a new space.
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
                { icon: '🏡', title: 'Support at every stage', body: 'From sorting and decision-making through packing, moving day, and settling in — not just the logistics.' },
                { icon: '💙', title: 'Emotionally informed approach', body: 'We understand that this is a loss as much as a move. The pace and approach reflect that.' },
                { icon: '🔗', title: 'Can become ongoing care', body: 'Many downsizing engagements transition naturally into companion care or personal support as the person settles into their new home.' },
                { icon: '👨‍👩‍👧', title: 'Family coordination', body: 'Helping family members understand their role and work together — one of the more challenging parts of any family move.' },
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
            Downsizing & Transition Support
          </div>
        </nav>

        {/* Body + Sidebar */}
        <div className="service-body">
          <article className="service-article">

            <h2>Why this transition is harder than it looks</h2>
            <p>
              Families often underestimate how difficult a downsizing move is —
              not logistically, but humanly. The home being left may represent
              fifty years of daily life. The objects being sorted through are not
              just things; they are the physical record of a life. The decisions
              about what stays and what goes carry a weight that does not show up
              on any moving checklist.
            </p>
            <p>
              At the same time, the practical demands are real. A home accumulated
              over decades needs to be sorted, decisions need to be made and remade,
              things need to go somewhere, and the move itself needs to happen on
              a timeline that often feels impossibly compressed. Families doing this
              alongside their own jobs, children, and lives frequently find themselves
              exhausted and in conflict with each other before the boxes are even packed.
            </p>
            <p>
              Arcadia's downsizing support addresses both dimensions — practical
              and emotional — with a consistent, patient presence that the person
              being moved trusts. For families thinking through the move alongside
              broader care needs, our{' '}
              <Link href="/resources/navigating-home-care/">
                navigating home care guides
              </Link>{' '}
              offer useful context on timing and how to approach these conversations.
            </p>

            <h2>What makes this process particularly hard for older adults</h2>

            <div className="hard-callout">
              <div className="hard-callout-title">What families often encounter</div>
              <ul className="hard-list">
                <li>A parent who agrees in principle but stalls at every practical step</li>
                <li>Deep attachment to objects that have no practical value but enormous personal meaning</li>
                <li>Conflict between siblings about what should happen to specific items or the family home itself</li>
                <li>A timeline driven by external factors — a sale, a facility admission — that feels rushed to the person being moved</li>
                <li>The person experiencing grief, anger, or withdrawal that family members do not know how to respond to</li>
                <li>Physical fatigue that limits how much sorting and decision-making the person can manage in a day</li>
                <li>Cognitive changes that make decisions harder and the process more confusing</li>
              </ul>
            </div>

            <h2>What Arcadia's downsizing support includes</h2>

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
              <h3>Not sure where to start?</h3>
              <p>
                A conversation with our team helps clarify what the process
                would look like for your specific situation — what support
                is needed, what timeline is realistic, and how to begin.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">
                Book a Free Consultation
              </Link>
            </div>

            <h2>How the process typically unfolds</h2>
            <p>
              Every downsizing engagement is different, but most follow a similar
              shape — from the initial conversation through to post-move settling.
            </p>

            <div className="phases">
              {[
                {
                  label: 'Stage one',
                  title: 'First conversation and planning',
                  body: 'Understanding the situation — timeline, destination, family dynamics, the person\'s state of readiness, and what support is most needed. We do not arrive with a standardized plan; we listen first.',
                },
                {
                  label: 'Stage two',
                  title: 'Sorting and decision-making',
                  body: 'Working through the home room by room, at the person\'s pace. Decisions about what comes, what goes to family, what is donated, and what is disposed of — made with the person, not for them.',
                },
                {
                  label: 'Stage three',
                  title: 'Coordination and logistics',
                  body: 'Arranging donations, coordinating with movers, managing the practical flow of the process so the family is not managing every moving part simultaneously.',
                },
                {
                  label: 'Stage four',
                  title: 'Moving day',
                  body: 'A familiar face on the hardest day — supportive, calm, and practically useful. Someone the person trusts nearby while the home they are leaving becomes someone else\'s.',
                },
                {
                  label: 'Stage five',
                  title: 'New home settling',
                  body: 'Setting up the new space so it feels like theirs as quickly as possible. Follow-up visits in the days and weeks after to help the person adjust and address what is not working.',
                },
              ].map((phase, i) => (
                <div key={i} className="phase">
                  <div className="phase-marker">
                    <div className="phase-dot" />
                    <div className="phase-line" />
                  </div>
                  <div className="phase-content">
                    <div className="phase-label">{phase.label}</div>
                    <div className="phase-title">{phase.title}</div>
                    <div className="phase-body">{phase.body}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2>Downsizing as the start of an ongoing care relationship</h2>
            <p>
              For many families, downsizing is the moment when the need for ongoing
              care becomes impossible to defer. The move makes it clear — or the
              process of moving makes it clear — that the person needs more regular
              support than family visits can provide.
            </p>
            <p>
              Arcadia is well placed to provide that continuity. A caregiver who
              has supported someone through a move already has an established
              relationship and a real understanding of the person. Moving into{' '}
              <Link href="/our-services/companion-care/">companion care</Link> or{' '}
              <Link href="/our-services/personal-support-daily-living/">
                personal support
              </Link>{' '}
              after a downsizing engagement is often smoother than starting fresh —
              because the hardest part of any care relationship, building trust,
              has already been done.
            </p>

            <h2>Downsizing support across Toronto and the GTA</h2>
            <p>
              Arcadia provides downsizing and transition support across{' '}
              <Link href="/locations/toronto/">Toronto</Link>,{' '}
              <Link href="/locations/toronto/north-york-home-care/">North York</Link>,{' '}
              <Link href="/locations/toronto/scarborough-home-care/">Scarborough</Link>,{' '}
              <Link href="/locations/toronto/etobicoke-home-care/">Etobicoke</Link>,{' '}
              <Link href="/locations/york-region/markham-home-care/">Markham</Link>,{' '}
              <Link href="/locations/york-region/richmond-hill-home-care/">Richmond Hill</Link>, and{' '}
              <Link href="/locations/peel-region/mississauga-home-care/">Mississauga</Link>.
            </p>

            {/* FAQ */}
            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions families ask about downsizing support</h2>
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
              <div className="sidebar-card-title">Often Follows Into</div>
              <Link href="/our-services/companion-care/" className="sidebar-link">Companion Care</Link>
              <Link href="/our-services/personal-support-daily-living/" className="sidebar-link">Personal Support & Daily Living</Link>
              <Link href="/our-services/light-housekeeping/" className="sidebar-link">Light Housekeeping</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Conditions</div>
              <Link href="/conditions/dementia-care-at-home/" className="sidebar-link">Dementia Care at Home</Link>
              <Link href="/conditions/frailty-fall-prevention/" className="sidebar-link">Frailty & Fall Prevention</Link>
              <Link href="/conditions/caregiver-burnout-support/" className="sidebar-link">Caregiver Burnout Support</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">How Care Starts</div>
              <Link href="/how-care-starts/" className="sidebar-link">Overview</Link>
              <Link href="/how-care-starts/care-assessment/" className="sidebar-link">Care Assessment</Link>
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
            <h2>Related services and resources</h2>
            <div className="related-grid">
              {[
                { type: 'Service', title: 'Companion Care', href: '/our-services/companion-care/' },
                { type: 'Service', title: 'Personal Support & Daily Living', href: '/our-services/personal-support-daily-living/' },
                { type: 'Condition', title: 'Caregiver Burnout Support', href: '/conditions/caregiver-burnout-support/' },
                { type: 'Resource', title: 'Navigating Home Care Guides', href: '/resources/navigating-home-care/' },
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
          <h2>This transition is hard. Having the right support makes it more manageable.</h2>
          <p>
            A conversation with our team helps clarify what support would
            look like for your specific situation — and how to begin.
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
