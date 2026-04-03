// app/conditions/dementia-care-at-home/page.tsx
// Tier 1 condition page — highest priority SEO page
// Target keyword: "dementia care at home toronto"
// Revised: cleaner H1, more practical depth, rebalanced brand voice,
// stronger in-copy internal links, added "What dementia care at home includes" section
// Schema: MedicalCondition + FAQPage + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Dementia & Alzheimer's Care at Home Toronto | Arcadia Home Care",
  description: 'Specialized dementia care at home for Toronto and GTA families. Clinically guided, compassionate support that helps loved ones stay safely at home — and helps families navigate every stage with confidence.',
  alternates: { canonical: 'https://www.arcadiahomecare.ca/conditions/dementia-care-at-home/' },
}

const faqs = [
  {
    q: 'Is it safe to keep a parent with dementia at home?',
    a: 'For many families — especially in the early and middle stages — yes. With the right support in place, home can be a safe, stable environment. The key factors are consistent supervision, a safe home setup, and caregivers who understand how dementia affects behaviour and judgment. A care assessment can help determine what level of support would make home care safe and sustainable for your specific situation.',
  },
  {
    q: 'How do I know when my parent needs professional dementia care at home?',
    a: 'The clearest sign is when you find yourself worried every time you leave the house. Beyond that — unsafe behaviours like leaving the stove on, significant confusion about time or place, difficulty managing basic daily tasks, noticeable personality changes, or family caregiver exhaustion are all indicators that a care assessment would be a useful next step.',
  },
  {
    q: 'What does a dementia home care worker actually do day to day?',
    a: 'Practically speaking: personal care, meal preparation, medication reminders, and help with daily routines. But the less visible work — staying calm when someone is distressed, using communication approaches that reduce anxiety, keeping the day predictable and structured — is equally important. Good dementia caregiving is as much about judgment and temperament as it is about tasks.',
  },
  {
    q: 'How does Arcadia match caregivers to someone with dementia?',
    a: 'We consider clinical fit, personality, language, cultural background, and the specific stage and type of dementia. We also work hard to keep the same caregiver in place as consistently as possible. For someone with dementia, a familiar face provides a kind of stability that matters clinically — not just practically.',
  },
  {
    q: 'Can Arcadia help if my parent refuses home care?',
    a: 'Yes — this comes up constantly. Resistance is normal, particularly when someone still has enough awareness to feel threatened by a stranger in their home. We can guide you through approaches that introduce care gradually, starting with companionship before clinical tasks. Most families are surprised at how quickly a resistant parent warms to the right person.',
  },
  {
    q: "How is Alzheimer's care different from general dementia care?",
    a: "Alzheimer's is the most common cause of dementia, but it has a distinct shape — typically a long early stage where the person is still largely independent, followed by a gradual increase in care needs over months or years. Alzheimer's-specific care focuses on preserving function and quality of life for as long as possible, with a care plan that evolves as the disease progresses rather than one set in place and left unchanged.",
  },
  {
    q: "My parent was just diagnosed. Do we need home care right away?",
    a: "Not necessarily — but getting the right support in place early makes a real difference. Many families wait until there's a crisis before reaching out, which means starting from a much harder position. A care assessment helps you understand what support would be most useful now, and helps you think through the stages ahead so you're not blindsided by them.",
  },
  {
    q: "How do you handle it when someone with Alzheimer's doesn't recognize their caregiver?",
    a: "Caregivers trained in Alzheimer's care know not to correct or argue — they meet the person where they are. Consistency matters here: a familiar voice and routine provide a kind of stability even when names and faces are no longer recognized. What experienced caregivers understand is that emotional memory often outlasts factual memory — how someone is treated continues to register long after who is treating them does not.",
  },
  {
    q: "What happens when Alzheimer's progresses to a point where home care isn't enough?",
    a: "That conversation is part of the service. Some families move to 24-hour care at home, which is available. Others eventually transition to a long-term care facility, and navigating that process is something a good care team should help with. The goal is never to keep someone at home past the point where it is safe — it is to make home work for as long as it genuinely can.",
  },
  {
    q: "Can Arcadia support a family member who lives alone with Alzheimer's?",
    a: "Yes — and this is a common situation. Living alone with Alzheimer's requires careful planning around safety, daily routines, and escalating supervision as the disease progresses. Care typically starts with regular visits and companionship, then expands as needed. The key is building that structure before a crisis makes it urgent.",
  },
]

export default function DementiaCareAtHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'MedicalCondition',
              'name': 'Dementia',
              'description': 'Dementia is a term for a group of symptoms affecting memory, thinking, and social abilities severely enough to interfere with daily life.',
              "relevantSpecialty": "https://schema.org/Geriatric",
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
                { '@type': 'ListItem', 'position': 3, 'name': "Dementia & Alzheimer's Care", 'item': 'https://www.arcadiahomecare.ca/conditions/dementia-care-at-home/' },
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

        .pull-quote {
          border-left: 4px solid #C8302A; padding: 16px 24px;
          margin: 32px 0; background: #F7F3EE; border-radius: 0 10px 10px 0;
        }
        .pull-quote p {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.15rem; font-style: italic; color: #1C2B3A;
          line-height: 1.75; margin: 0 0 8px;
        }
        .pull-quote cite {
          font-size: 12px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: #C8302A; font-style: normal;
        }

        /* What dementia care includes — checklist grid */
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
          font-size: 1.5rem; font-weight: 600; color: #ffffff; margin-bottom: 8px;
        }
        .mid-cta p { font-size: 0.9rem; color: rgba(255,255,255,0.88); margin-bottom: 20px; line-height: 1.7; }
        .mid-cta-phone {
          font-size: 1.5rem; font-weight: 700; color: #E85A52;
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
            <h1>Dementia & Alzheimer's Care at Home in Toronto</h1>
            <p>
              Most families navigating dementia don't start by looking for a care home.
              They start by trying to figure out how to keep their loved one safe, supported,
              and comfortable at home — for as long as that's possible. This page is for them.
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
            Dementia & Alzheimer's Care
          </div>
        </nav>

        {/* Body + Sidebar */}
        <div className="condition-body">
          <article className="condition-article">

            <h2>Where most families are when they start looking</h2>
            <p>
              Maybe it started with small things. A pot left on the stove. Getting turned around
              driving home from a grocery store they've visited for thirty years. Asking the same
              question three times in an hour. You made excuses for it at first — stress, a bad
              night's sleep, getting older.
            </p>
            <p>
              Then the moments got harder to explain away. And now you're trying to figure out
              what to actually do — how to keep someone safe without taking away what's left of
              their independence, and without the weight of it falling entirely on you.
            </p>
            <p>
              That's where most Toronto families are when they first contact Arcadia. You're
              not behind, and you're not failing. You're at the point where the situation
              has outgrown what one person — or one family — can reasonably manage alone.
            </p>

            <h2>What Alzheimer's means, and why it is its own kind of care challenge</h2>
            <p>
              Alzheimer's disease is the most common cause of dementia, accounting for the
              majority of diagnoses in Canada. It is a progressive neurological condition —
              which means it changes over time, and the care a person needs in year one is
              genuinely different from what they need in year three or year five.
            </p>
            <p>
              What makes Alzheimer's distinct as a care challenge is its length. Unlike some
              conditions that follow a short or predictable arc, Alzheimer's typically unfolds
              over years, with a long early phase where the person is still largely capable,
              followed by a gradual increase in care needs. Families who understand this shape
              early are better positioned to make decisions calmly, rather than reactively.
            </p>
            <p>
              For many people with Alzheimer's — particularly in the earlier and middle stages
              — home is the right place to be. Familiar surroundings, routines, and relationships
              provide a kind of stability that helps manage the disorientation the disease brings.
              The question is not usually whether home care is possible, but what it needs to
              include to be safe and sustainable.
            </p>

            <h2>Why home still makes sense for many people with dementia</h2>
            <p>
              Familiar environments matter more to people with dementia than most families
              initially realize. The layout of a home, the sounds of a street, the smell of
              a kitchen — these things provide orientation and comfort in ways that clinical
              settings rarely can. People with dementia living in familiar surroundings often
              experience less agitation, more settled sleep, and a better quality of daily life
              than those moved to unfamiliar environments.
            </p>
            <p>
              Home also allows care to be built around the individual — their preferences,
              their history, their pace — rather than the schedule of an institution. For
              many families in Toronto and across the GTA, keeping a loved one at home is
              not just emotionally important. With the right support, it's clinically sound.
            </p>

            <div className="pull-quote">
              <p>"We've been gratified to see the positive results that can be achieved from early intervention, utilization of existing resources, and services provided by knowledgeable care providers."</p>
              <cite>Rohit Tamhane — Founder, Arcadia Home Care</cite>
            </div>

            <h2>What dementia care at home can include</h2>
            <p>
              "Dementia care at home" covers a wide range of support — from a few hours of
              companionship a week to full-time supervision. What a family needs depends on the
              stage of dementia, the living situation, and how much support family members can
              provide themselves. Here is what a well-structured home care plan for someone
              with dementia typically involves:
            </p>

            <div className="includes-grid">
              {[
                {
                  title: 'Supervision and safety',
                  body: 'Monitoring for unsafe behaviours — wandering, leaving appliances on, letting strangers in — and keeping the home environment organized and hazard-free.',
                },
                {
                  title: 'Personal care and routines',
                  body: 'Assistance with bathing, dressing, grooming, and toileting — provided with patience and sensitivity to the person\'s sense of dignity and privacy.',
                },
                {
                  title: 'Meal support',
                  body: 'Preparing nutritious meals and sitting with the person during mealtimes — important both for nutrition and for the social connection eating provides.',
                },
                {
                  title: 'Medication reminders',
                  body: 'Prompting medications at the right times and monitoring for signs of missed doses or side effects, in coordination with the family and care team.',
                },
                {
                  title: 'Companionship and redirection',
                  body: 'Engaging the person meaningfully throughout the day and redirecting gently when anxiety or confusion escalates — without argument or correction.',
                },
                {
                  title: 'Respite for family caregivers',
                  body: 'Giving family members genuine time away — to rest, work, or simply not be a caregiver for a few hours. This is one of the most important functions of home care.',
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
              For families thinking about what specific services might apply, our{' '}
              <Link href="/our-services/dementia-alzheimers-home-care/">dementia and Alzheimer's home care service page</Link>{' '}
              goes into more detail about how Arcadia structures care for each stage.
            </p>

            {/* Mid-page CTA */}
            <div className="mid-cta">
              <h3>Not sure what level of support your family needs?</h3>
              <p>
                A care assessment helps clarify that — at no cost and with no obligation.
                We ask the right questions, listen carefully, and give you a clear picture
                of what would actually make a difference.
              </p>
              <a href="tel:8449770050" className="mid-cta-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red">
                Book a Free Consultation
              </Link>
            </div>

            <h2>When to reach out for support</h2>
            <p>
              There's no perfect moment to ask for help. But these are the signs that most
              families recognize in hindsight as the point when professional support became necessary:
            </p>
            <ul>
              <li>You feel anxious every time you leave your loved one alone</li>
              <li>There have been incidents — a stove left on, a fall, a confused phone call to emergency services</li>
              <li>They are struggling with medications, meals, or personal hygiene without awareness</li>
              <li>Their personality or mood has changed significantly — more anxious, withdrawn, or suspicious</li>
              <li>Nighttime supervision has become necessary and is exhausting the household</li>
              <li>Family caregivers are burning out, even if no one has said it out loud</li>
            </ul>
            <p>
              If several of these sound familiar, a care assessment is a reasonable next step.
              Families who contact Arcadia early — before a crisis — consistently have an easier
              time putting the right support in place, because the decisions get made from a
              calmer position. You can also read about{' '}
              <Link href="/conditions/caregiver-burnout-support/">caregiver burnout</Link>{' '}
              if that part of the picture feels relevant.
            </p>

            <h2>How specialized dementia home care should work</h2>
            <p>
              Not all home care is the same, and dementia care in particular requires specific
              training, judgment, and consistency. Here is what well-structured dementia home
              care looks like in practice — the standards any family should expect, regardless
              of provider:
            </p>

            <div className="helps-grid">
              {[
                {
                  title: 'Caregivers trained in dementia-specific approaches',
                  body: 'Managing daily tasks is the baseline. The more demanding work — staying calm during distress, using communication techniques that reduce anxiety rather than escalate it, knowing when to redirect and when to follow — requires specific training. Families should ask any provider how their dementia caregivers are trained and assessed.',
                },
                {
                  title: 'Consistency in who provides care',
                  body: (
                    <>
                      For someone with dementia, a familiar caregiver provides a form of stability that matters clinically. Frequent caregiver changes increase disorientation and anxiety. A well-run home care provider builds schedules around continuity — and is transparent when that isn&apos;t possible. Arcadia&apos;s approach to caregiver matching is described in more detail on our{' '}
                      <Link href="/how-care-starts/matching-caregivers/" style={{ color: '#C8302A', fontWeight: 600 }}>
                        caregiver matching page
                      </Link>
                      .
                    </>
                  ),
                },
                {
                  title: 'A care plan that adapts as dementia progresses',
                  body: 'Dementia changes over time. A care plan written six months ago may no longer reflect what a person needs today. Regular review — with input from family, the care team, and where possible the person themselves — is essential. Care should never be set and forgotten.',
                },
                {
                  title: 'Honest guidance about when home care may no longer be enough',
                  body: 'Good home care providers will tell you when the situation has moved beyond what home care can safely support. That conversation is difficult, but it is part of the service. Families deserve a clear-eyed assessment at every stage — not reassurance that delays a necessary decision.',
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

            <h2>How dementia care needs change over time</h2>
            <p>
              Dementia progresses at its own pace in every person — but the general shape
              is predictable enough to plan around.
            </p>
            <p>
              <strong>Early on,</strong> most people with dementia are still managing much of
              their day independently. Support at this stage often focuses on companionship,
              routine reinforcement, and giving family caregivers regular relief. Getting the
              right person in early — before a crisis — makes every subsequent stage easier to
              navigate. It also gives your loved one time to get comfortable with a new presence
              before they truly need that person.
            </p>
            <p>
              <strong>In the middle stage,</strong> supervision becomes necessary rather than
              optional. Personal care assistance, medication management, and behavioural support
              become part of everyday life. This is when many Toronto families contact Arcadia
              for the first time — often following a frightening incident or a family caregiver
              who has reached their limit. Our{' '}
              <Link href="/our-services/respite-care/">respite care service</Link>{' '}
              is specifically designed for family caregivers at this stage.
            </p>
            <p>
              <strong>In the later stages,</strong> care becomes more intensive and
              around-the-clock support may be needed. Arcadia provides{' '}
              <Link href="/our-services/overnight-24-hour-care/">overnight and 24-hour care</Link>{' '}
              for families at this point, and works alongside palliative care teams where
              appropriate. The goal at every stage is the same: that the person with dementia
              is known, comfortable, and treated with dignity.
            </p>

            <h2>What stays, even when so much is lost</h2>
            <p>
              One of the hardest parts of Alzheimer's for families is watching someone become
              someone they don't always recognize. The person who navigated the city confidently
              can't find the bathroom. The person who was calm and steady becomes anxious and
              sharp. The person who raised you can't remember your name.
            </p>
            <p>
              What caregivers experienced in Alzheimer's understand — and what the evidence
              consistently shows — is that emotional memory outlasts factual memory. A person
              may not know who you are, but they register how you make them feel. Kindness
              registers. Being unhurried registers. A calm presence registers. Skilled
              Alzheimer's caregiving works with what remains, rather than trying to recover
              what has been lost.
            </p>

            <h2>Dementia care at home across Toronto and the GTA</h2>
            <p>
              Arcadia provides dementia home care across{' '}
              <Link href="/locations/toronto/">Toronto</Link>,{' '}
              <Link href="/locations/toronto/north-york-home-care/">North York</Link>,{' '}
              <Link href="/locations/toronto/scarborough-home-care/">Scarborough</Link>,{' '}
              <Link href="/locations/toronto/etobicoke-home-care/">Etobicoke</Link>,{' '}
              <Link href="/locations/york-region/markham-home-care/">Markham</Link>,{' '}
              <Link href="/locations/york-region/richmond-hill-home-care/">Richmond Hill</Link>, and{' '}
              <Link href="/locations/peel-region/mississauga-home-care/">Mississauga</Link>.
              Many of our clients are referred following discharge from hospitals including
              Sunnybrook, North York General, Toronto Western, Scarborough Health Network,
              and Trillium Health Partners.
            </p>
            <p>
              We work alongside Ontario Health atHome (formerly CCAC) to help families
              understand and maximize publicly funded care — and to bridge the gaps where
              public funding falls short. If you are navigating the Ontario home care system
              for the first time, our team can walk you through how it works and what to expect.
            </p>

            {/* FAQ */}
            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions families ask about dementia and Alzheimer's care at home</h2>
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
              <Link href="/our-services/dementia-alzheimers-home-care/" className="sidebar-link">Dementia & Alzheimer's Home Care</Link>
              <Link href="/our-services/respite-care/" className="sidebar-link">Respite Care</Link>
              <Link href="/our-services/overnight-24-hour-care/" className="sidebar-link">Overnight & 24-Hour Care</Link>
              <Link href="/our-services/companion-care/" className="sidebar-link">Companion Care</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Conditions</div>
              <Link href="/conditions/caregiver-burnout-support/" className="sidebar-link">Caregiver Burnout Support</Link>
              <Link href="/conditions/frailty-fall-prevention/" className="sidebar-link">Frailty & Fall Prevention</Link>
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
            <h2>More resources for families navigating dementia</h2>
            <div className="related-grid">
              {[
                { type: 'Service', title: "Dementia & Alzheimer's Home Care", href: '/our-services/dementia-alzheimers-home-care/' },
                { type: 'Condition', title: 'Caregiver Burnout Support', href: '/conditions/caregiver-burnout-support/' },
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
          <h2>Most families tell us they wish they'd called a little sooner.</h2>
          <p>
            A conversation costs nothing. A care assessment gives you a clear picture
            of what support would actually help — and what you can reasonably manage on your own.
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
