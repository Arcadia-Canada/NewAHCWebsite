import type { Metadata } from 'next'
import Link from 'next/link'

const CANONICAL =
  'https://www.arcadiahomecare.ca/resources/navigating-home-care/what-no-one-tells-you-first-week-home-care/'
const PUBLISHED = '2026-05-16T10:00:00-04:00'

export const metadata: Metadata = {
  title: 'What No One Tells You About the First Week of Home Care | Arcadia',
  description:
    'The adjustment period nobody prepares you for. What your parent is feeling, what the caregiver is navigating, and how to tell the difference between a rough start and a real problem.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'What No One Tells You About the First Week of Home Care',
    description:
      'You made the decision. The caregiver started Monday. And now the first week is harder than you expected, and nobody prepared you for this part.',
    url: CANONICAL,
    type: 'article',
    locale: 'en_CA',
    siteName: 'Arcadia Home Care',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What No One Tells You About the First Week of Home Care',
  alternativeHeadline: 'The Home Care Adjustment Period: What Families Can Expect',
  description:
    'A guide for GTA families navigating the first week of home care: the awkward adjustment period, what a parent may be feeling, how to read the signals, and what to say to the agency early.',
  image: [
    'https://www.arcadiahomecare.ca/images/first-week-home-care-hero-1x1.jpg',
    'https://www.arcadiahomecare.ca/images/first-week-home-care-hero-4x3.jpg',
    'https://www.arcadiahomecare.ca/images/first-week-home-care-hero-16x9.jpg',
  ],
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    '@type': 'Organization',
    name: 'Arcadia Home Care',
    url: 'https://www.arcadiahomecare.ca/',
    logo: { '@type': 'ImageObject', url: 'https://www.arcadiahomecare.ca/images/arcadia-logo.svg' },
  },
  publisher: {
    '@type': 'Organization',
    name: 'Arcadia Home Care',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.arcadiahomecare.ca/images/arcadia-logo.svg',
      width: 600,
      height: 60,
    },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  articleSection: 'Navigating Home Care',
  keywords:
    'what to expect first week of home care, home care adjustment period, starting home care for parent, first week home care toronto, beginning home care GTA',
  inLanguage: 'en-CA',
  audience: {
    '@type': 'Audience',
    audienceType:
      'Adult children of aging parents in Toronto and the Greater Toronto Area who have recently arranged home care and are navigating the adjustment period',
  },
  about: [
    { '@type': 'Thing', name: 'Home care adjustment' },
    { '@type': 'Thing', name: 'Starting home care' },
    { '@type': 'Thing', name: 'Caregiver introduction' },
    { '@type': 'Thing', name: 'Aging parents' },
  ],
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.article-summary', '.key-takeaways', 'h1'],
  },
  wordCount: 1550,
  isAccessibleForFree: true,
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.arcadiahomecare.ca/' },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.arcadiahomecare.ca/resources/' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Navigating Home Care',
      item: 'https://www.arcadiahomecare.ca/resources/navigating-home-care/',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'What No One Tells You About the First Week of Home Care',
      item: CANONICAL,
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to adjust to home care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most families find that the adjustment settles within two to four weeks. The first week is almost always the hardest, for your parent, for the caregiver, and often for you. By the third or fourth visit, routines start to form and the relationship becomes less transactional. If things are still feeling genuinely difficult at the four-week mark, that is worth raising with the agency. One week of awkwardness is not a signal that anything is wrong.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my parent refuses to cooperate with the caregiver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Resistance in the first week is common, especially if your parent did not fully choose this arrangement. The most useful thing is not to push harder but to give the relationship a little space to develop. Let the caregiver take the lead. Most experienced caregivers have navigated resistance before. They know that building trust takes time. If refusal is complete and your parent will not let the caregiver in at all, call the agency early rather than waiting it out. A different caregiver or a different approach to the introduction may help.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it normal for the first week of home care to feel awkward?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Entirely normal. A stranger is entering your parent\'s home, learning their routines, and performing intimate tasks, all while your parent is adjusting to a new reality about their own needs. Awkwardness is the expected state. It does not mean care is failing. It means the relationship has not had time to form yet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I be there for the first visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Being there for the first visit, or the first few, can help with introductions and reduces anxiety for everyone. But staying for the entire visit can make it harder for the relationship to form between your parent and the caregiver. Try to make the introduction, handle any handoff of information, and then step away. If your parent has dementia or severe anxiety, staying longer is sensible. For most situations, a warm introduction followed by leaving is the right balance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What information should I give the caregiver before they start?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A written notes sheet is worth preparing: daily routine and timing, medication schedule, food preferences and restrictions, what your parent likes and dislikes about being helped, any topics that are sensitive, where things are kept, and who to call in an emergency. The more specific, the better. Caregivers work better when they understand the person, not just the task list.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if a caregiver is a good fit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Watch for whether your parent becomes slightly less resistant over successive visits: not immediately comfortable, but less guarded. A good caregiver will find small ways to connect: a consistent greeting, a remembered detail, a patient approach to tasks your parent finds difficult. Red flags are different from awkwardness: a caregiver who is dismissive, who rushes through tasks visibly, who does not communicate with the agency when problems arise, or whose visits leave your parent more distressed than they were before.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between adjustment and a real problem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Adjustment looks like: your parent is quieter than usual, a bit formal, or needs time to warm up. The caregiver is still learning routines. The first few visits feel a little stiff. A real problem looks like: your parent is distressed rather than reluctant, the caregiver misses visits or arrives significantly late without notice, tasks are consistently not completed, or your parent reports something specific that concerns you. Adjustment is expected. Problems should be raised with the agency early.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I give feedback to the home care agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Early. The first week is exactly when feedback is most actionable. Agencies expect to hear from families during the adjustment period. It is not a complaint; it is information. If a caregiver is not a good fit, it is better to know in week one than week six. If something about the routine is not working, say so. A good agency will welcome the conversation and adjust accordingly. Do you check in after the first week if something feels off? Yes.',
      },
    },
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeHealthCare',
  '@id': 'https://www.arcadiahomecare.ca/#organization',
  name: 'Arcadia Home Care',
  alternateName: 'Arcadia',
  url: 'https://www.arcadiahomecare.ca/',
  logo: 'https://www.arcadiahomecare.ca/images/arcadia-logo.svg',
  image: 'https://www.arcadiahomecare.ca/images/arcadia-logo.svg',
  description:
    'Specialized home care for seniors and families across Toronto and the Greater Toronto Area, including dementia and Alzheimer\'s care, acquired brain injury support, rehabilitation, hospital discharge support, palliative care, and case management. Serving GTA families since 2005.',
  foundingDate: '2005',
  telephone: '+1-844-977-0050',
  email: 'info@arcadiahomecare.ca',
  medicalSpecialty: 'Geriatric',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '302 Bay Street',
    addressLocality: 'Toronto',
    addressRegion: 'ON',
    postalCode: 'M5H 0B6',
    addressCountry: 'CA',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 43.6494, longitude: -79.3795 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Toronto' },
    { '@type': 'AdministrativeArea', name: 'York Region' },
    { '@type': 'AdministrativeArea', name: 'Peel Region' },
    { '@type': 'AdministrativeArea', name: 'Durham Region' },
    { '@type': 'AdministrativeArea', name: 'Halton Region' },
    { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
  ],
  serviceType: [
    'Dementia and Alzheimer\'s home care',
    'Acquired brain injury care',
    'Rehabilitation support',
    'Hospital discharge support',
    'Palliative home care',
    'Case management',
    'Personal support',
    'Companion care',
    'Respite care',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '44',
    bestRating: '5',
    worstRating: '1',
  },
}

export default function FirstWeekHomeCare() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema, organizationSchema]),
        }}
      />

      <style>{`
        .article-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }
        .article-breadcrumb { max-width: 1100px; margin: 0 auto; padding: 24px 24px 0; font-size: 0.8125rem; color: #6B7280; }
        .article-breadcrumb ol { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 0.35rem; align-items: center; }
        .article-breadcrumb li:not(:last-child)::after { content: "/"; margin-left: 0.35rem; color: #E5E0D8; }
        .article-breadcrumb a { color: #6B7280; text-decoration: none; }
        .article-breadcrumb a:hover { color: #C8302A; }
        .article-breadcrumb [aria-current="page"] { color: #2D2D2D; }
        .article-hero { background: #1C2B3A; padding: 72px 24px 56px; }
        .article-hero-inner { max-width: 760px; margin: 0 auto; }
        .article-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 14px; }
        .article-hero h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 600; color: #fff; line-height: 1.2; margin-bottom: 20px; }
        .article-hero .article-summary { font-size: 1.125rem; color: rgba(255,255,255,0.88); line-height: 1.75; font-style: italic; margin: 0 0 20px; }
        .article-byline { font-size: 0.8125rem; color: rgba(255,255,255,0.7); border-top: 1px solid rgba(255,255,255,0.15); border-bottom: 1px solid rgba(255,255,255,0.15); padding: 12px 0; display: flex; flex-wrap: wrap; gap: 8px; }

        .article-body { max-width: 1100px; margin: 0 auto; padding: 72px 24px; display: grid; grid-template-columns: 1fr 300px; gap: 64px; align-items: start; }
        @media (max-width: 900px) { .article-body { grid-template-columns: 1fr; } }

        .key-takeaways { background: #F7F3EE; border-left: 4px solid #C8302A; border-radius: 0 8px 8px 0; padding: 24px 28px; margin: 0 0 32px; }
        .key-takeaways h2 { font-family: 'DM Sans', system-ui, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin: 0 0 14px; }
        .key-takeaways ul { margin: 0; padding-left: 1.1rem; }
        .key-takeaways li { margin-bottom: 10px; line-height: 1.6; color: #4B5563; font-size: 0.9625rem; }

        .article-content h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 600; color: #1C2B3A; margin: 48px 0 16px; line-height: 1.25; }
        .article-content h2:first-of-type { margin-top: 0; }
        .article-content h3 { font-size: 1.0625rem; font-weight: 700; color: #1C2B3A; margin: 28px 0 10px; }
        .article-content p { font-size: 1rem; color: #4B5563; line-height: 1.85; margin-bottom: 18px; }
        .article-content a { color: #C8302A; font-weight: 600; text-decoration: underline; text-decoration-color: rgba(200,48,42,0.3); text-underline-offset: 3px; }
        .article-content a:hover { text-decoration-color: #C8302A; }
        .pull-quote { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.25rem; line-height: 1.5; font-style: italic; color: #1C2B3A; border-left: 4px solid #C8302A; padding: 4px 0 4px 20px; margin: 28px 0; }

        .notes-box { background: #F7F3EE; border-radius: 10px; padding: 24px 28px; margin: 32px 0; }
        .notes-box h3 { font-size: 0.875rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #C8302A; margin: 0 0 14px; }
        .notes-box ul { margin: 0; padding-left: 1.1rem; }
        .notes-box li { margin-bottom: 8px; line-height: 1.6; color: #4B5563; font-size: 0.9375rem; }

        .mid-cta { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 12px; padding: 28px 32px; margin: 40px 0; }
        .mid-cta h2 { margin-top: 0; font-size: 1.25rem; }
        .mid-cta p { margin-bottom: 16px; }
        .mid-cta .btn-red { display: inline-flex; align-items: center; background: #C8302A; color: #fff; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: 700; text-decoration: none; margin-right: 16px; }
        .mid-cta .secondary { font-size: 14px; font-weight: 600; color: #1C2B3A; }

        .faq-section { margin-top: 56px; padding-top: 40px; border-top: 1px solid #E5E0D8; }
        .faq-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 12px; }
        .faq-section > h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 600; color: #1C2B3A; margin-bottom: 28px; }
        .faq-item { border-bottom: 1px solid #E5E0D8; padding: 20px 0; }
        .faq-q { font-size: 1rem; font-weight: 700; color: #1C2B3A; margin-bottom: 10px; line-height: 1.5; }
        .faq-a { font-size: 0.9375rem; color: #4B5563; line-height: 1.8; }

        .related-links { margin-top: 48px; padding-top: 40px; border-top: 1px solid #E5E0D8; }
        .related-links h3 { font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #C8302A; margin-bottom: 16px; }
        .related-link { display: flex; align-items: center; gap: 8px; color: #1C2B3A; text-decoration: none; font-size: 14px; font-weight: 600; padding: 10px 0; border-bottom: 1px solid #F0EBE3; }
        .related-link:last-child { border-bottom: none; }
        .related-link::before { content: '→'; color: #C8302A; }
        .related-link:hover { color: #C8302A; }

        .article-sidebar { position: sticky; top: 100px; }
        .sidebar-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 14px; padding: 28px; margin-bottom: 20px; }
        .sidebar-card-title { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #C8302A; margin-bottom: 16px; }
        .sidebar-link { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: #1C2B3A; text-decoration: none; padding: 10px 0; border-bottom: 1px solid #F0EBE3; transition: color 0.15s; }
        .sidebar-link:last-child { border-bottom: none; }
        .sidebar-link:hover { color: #C8302A; }
        .sidebar-link::before { content: '→'; color: #C8302A; font-size: 13px; }
        .sidebar-cta { background: #1C2B3A; border-radius: 14px; padding: 28px; text-align: center; }
        .sidebar-cta h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.3rem; font-weight: 600; color: #fff; margin-bottom: 8px; }
        .sidebar-cta p { font-size: 0.875rem; color: rgba(255,255,255,0.7); margin-bottom: 16px; line-height: 1.65; }
        .sidebar-phone { font-size: 1.2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 12px; }
        .btn-red-sm { background: #C8302A; color: #fff; padding: 11px 20px; border-radius: 8px; font-size: 13px; font-weight: 700; text-decoration: none; display: block; text-align: center; }

        .closing-divider { text-align: center; margin: 40px 0 24px; color: #E5E0D8; letter-spacing: 0.75rem; font-size: 0.875rem; }

        .article-bottom-cta { background: #1C2B3A; padding: 80px 24px; text-align: center; }
        .article-bottom-cta h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 600; color: #fff; max-width: 640px; margin: 0 auto 14px; line-height: 1.2; }
        .article-bottom-cta p { color: rgba(255,255,255,0.85); font-size: 1rem; max-width: 480px; margin: 0 auto 32px; line-height: 1.75; }
        .article-bottom-cta-phone { font-size: 2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 20px; }
        .cta-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .btn-red { background: #C8302A; color: #fff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; }
        .btn-outline { border: 1.5px solid rgba(255,255,255,0.5); background: transparent; color: #fff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; }
      `}</style>

      <main className="article-page">
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/resources/">Resources</Link></li>
            <li><Link href="/resources/navigating-home-care/">Navigating Home Care</Link></li>
            <li aria-current="page">What No One Tells You About the First Week of Home Care</li>
          </ol>
        </nav>

        <section className="article-hero">
          <div className="article-hero-inner">
            <p className="article-eyebrow">Navigating Home Care &middot; Toronto &amp; GTA</p>
            <h1>What No One Tells You About the First Week of Home Care</h1>
            <p className="article-summary">
              You made the decision. The caregiver started Monday. And now you are in the part that
              nobody prepared you for: the adjustment period that is harder, stranger, and more
              uncertain than anything you imagined when you were still deciding.
            </p>
            <div className="article-byline">
              <span>By Arcadia Home Care</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime="2026-05-16">May 16, 2026</time>
              <span aria-hidden="true">&middot;</span>
              <span>8 min read</span>
            </div>
          </div>
        </section>

        <div className="article-body">
          <article className="article-content">
            <aside className="key-takeaways" aria-labelledby="kt-heading">
              <h2 id="kt-heading">Key takeaways</h2>
              <ul>
                <li>The first week of home care is almost universally awkward, for your parent, for the caregiver, and often for you. This is normal, not a sign that anything is wrong.</li>
                <li>Your parent may be reluctant, guarded, or cooler than usual with the caregiver. This is an adjustment response, not a verdict on whether the decision was right.</li>
                <li>The caregiver is also adjusting: learning your parent&apos;s routines, preferences, and personality from scratch. That takes more than one visit.</li>
                <li>Being present for the introduction helps. Hovering for every visit makes it harder for the relationship to form.</li>
                <li>Feedback to the agency should come early. The first week is exactly when it is most useful. Don&apos;t wait three weeks with a growing concern.</li>
              </ul>
            </aside>

            <p>
              Most of the energy in arranging home care goes into the decision. Whether to do it. When.
              Which agency. How many hours. What the conversation with your parent will look like.
            </p>

            <p>
              Very little of it goes into what happens after Monday.
            </p>

            <p>
              The first week of home care is its own thing, distinct from the research phase, from the
              planning, from the conversation you had with your parent to get here. It is the part families
              are least prepared for, and the part that most often makes them wonder, quietly, whether they
              made the right call.
            </p>

            <p className="pull-quote">
              The first week of home care is not a verdict. It is the beginning of an adjustment, and
              almost every family finds it harder than they expected.
            </p>

            <h2>The first day is not representative</h2>

            <p>
              Whatever happens on the first day (the awkward silences, your parent&apos;s cool reception,
              the caregiver who is visibly still learning the layout of the house), take it with a particular
              lightness. First days are performances. Everyone is on unusual behaviour.
            </p>

            <p>
              Your parent is meeting a stranger who will be doing intimate things in their home. The caregiver
              is in an unfamiliar environment, working from notes rather than knowledge. You are watching
              something you hoped would go smoothly and trying not to read too much into everything.
            </p>

            <p>
              None of that settles in a single visit.
            </p>

            <p>
              This does not mean the first visit is unimportant. It sets a tone. But the tone it sets is
              a starting point, not a conclusion. Give it a week before you decide anything.
            </p>

            <h2>What your parent may be feeling</h2>

            <p>
              If your parent is quieter than usual, formally polite, or noticeably cool with the caregiver
              in the first few visits, you are probably reading reluctance. That is not the same as rejection.
            </p>

            <p>
              Home care arrives with a complicated emotional freight. For your parent, it often means:
            </p>

            <p>
              <strong>A loss of privacy.</strong> A stranger in their home, in their bathroom, handling
              things that have always been private. Even if the caregiver is entirely respectful, the
              adjustment takes time.
            </p>

            <p>
              <strong>A change in self-image.</strong> Needing help with personal care is a significant
              shift in how your parent sees themselves, particularly if they have been independent their
              entire adult life.
            </p>

            <p>
              <strong>A loyalty conflict.</strong> Some parents interpret a caregiver&apos;s presence as
              evidence that their family no longer wants to come themselves. That is rarely true. But it
              is a feeling worth acknowledging directly. A phone call after the first visit, not to debrief
              but to connect, matters more than you might think.
            </p>

            <p>
              Possibly, underneath the resistance: relief. Carefully hidden, but there. The weight of
              managing alone may have been heavier than your parent admitted. The arrival of reliable
              support, even if unwanted in the abstract, often brings quiet relief once the initial
              strangeness passes.
            </p>

            <h2>What the caregiver is navigating</h2>

            <p>
              The caregiver who walks through your parent&apos;s door on day one has never met your parent.
              They do not know how your parent takes their coffee, what topics are sore, which routines
              matter and which are negotiable, or what the word &quot;fine&quot; sounds like when it means
              the opposite.
            </p>

            <p>
              They are working from a care plan and whatever intake notes they were given. Those are a
              starting point, not a map.
            </p>

            <p>
              Good caregivers know this. They know the first week is about observation as much as service:
              learning the household, reading the person, figuring out what approach works. They are not
              failing when things are awkward. They are gathering the information they need to do the job well.
            </p>

            <p>
              A notes sheet from you, prepared in advance, helps significantly. Not a formal document,
              but a page of useful specifics:
            </p>

            <div className="notes-box">
              <h3>What to put in a handoff note for the caregiver</h3>
              <ul>
                <li>Daily routine and preferred timing for each task</li>
                <li>Medication schedule (what, when, with food or without)</li>
                <li>Food preferences, dislikes, and any restrictions</li>
                <li>What your parent does and does not like about being helped</li>
                <li>Topics that are sensitive or should be avoided</li>
                <li>Where things are kept (medications, cleaning supplies, spare towels)</li>
                <li>Who to call if something comes up, and when</li>
              </ul>
            </div>

            <p>
              The more the caregiver knows about the person rather than just the task list, the faster the
              relationship forms.
            </p>

            <h2>Being there without hovering</h2>

            <p>
              Most families find it helpful to be present for the first visit or two. The introduction
              matters: your parent is more likely to give the caregiver a fair start if you are there
              to smooth it. And practically, it gives you a chance to show the caregiver around, hand
              over the notes, and answer any immediate questions.
            </p>

            <p>
              After that, step back.
            </p>

            <p>
              When you hover over every visit (checking in by phone mid-session, dropping by unexpectedly,
              asking for a debrief the moment the caregiver leaves), you slow the relationship down. Your
              parent takes their cues from you. If you treat each visit as something that needs monitoring,
              your parent will too.
            </p>

            <p>
              The relationship between your parent and their caregiver is its own thing. It needs some
              space to become one.
            </p>

            <h2>The adjustment window</h2>

            <p>
              Most families find that the stiffness of the first week begins to ease by the second or third
              visit. By week three or four, if the caregiver is a reasonable match, something that looks
              like routine starts to appear. Your parent knows what to expect. The caregiver knows the house.
              The visits stop being events and start being just how Tuesday works.
            </p>

            <p>
              If things are still genuinely difficult at the four-week mark (your parent is consistently
              distressed, the caregiver is not completing expected tasks, communication with the agency is
              difficult), that is worth raising. Not as a complaint, but as information. Four weeks is
              long enough to know whether the fit is working.
            </p>

            <p className="pull-quote">
              Your parent may not be happy about this. That is not the same as the care being wrong.
            </p>

            <h2>Adjustment versus a real problem</h2>

            <p>
              The distinction matters, because the response is different.
            </p>

            <p>
              <strong>Adjustment looks like:</strong> your parent is quieter or more formal than usual.
              The caregiver is still learning routines. Visits feel a little transactional. Your parent
              says they don&apos;t need the help, but accepts it. These are all within normal range.
            </p>

            <p>
              <strong>A real problem looks like:</strong> your parent is distressed after visits, not
              just reluctant. The caregiver misses visits or arrives significantly late without explanation.
              Tasks that were agreed upon are consistently not completed. Your parent reports something
              specific that concerns you. The agency is difficult to reach when you have a question.
            </p>

            <p>
              If you are unsure which category something falls into, describe it specifically to the agency
              and ask directly. A good agency will help you distinguish between the two, and will not be
              defensive about the question.
            </p>

            <h2>Say something early</h2>

            <p>
              The first week is exactly when feedback is most useful to an agency. Not because it is a
              complaint, but because the first week is when adjustments are easiest to make, before
              patterns have formed, before your parent has settled into a particular dynamic with a
              caregiver who may not be the right fit.
            </p>

            <p>
              If something is not working, say so. If a caregiver&apos;s manner feels wrong for your
              parent&apos;s personality, say so. If the timing of visits is creating problems, say so.
              You are not being difficult. You are providing information that helps the agency do its job.
            </p>

            <p>
              What{' '}
              <Link href="/resources/navigating-home-care/recognizing-quality-home-care/">
                quality home care actually looks like once it is running
              </Link>{' '}
              is worth knowing before the first week starts, so you have a reference point for what
              you are working toward. And if you are still in the research stage,{' '}
              <Link href="/resources/navigating-home-care/when-parent-needs-more-help/">
                the pillar article in this series
              </Link>{' '}
              addresses how to recognize when the decision is right in the first place.
            </p>

            <div className="closing-divider" aria-hidden="true">&middot; &middot; &middot;</div>

            <div className="mid-cta" id="consultation">
              <h2>Starting care with Arcadia</h2>
              <p>
                Arcadia takes the first week seriously, which is why we assign a dedicated care coordinator
                who stays in contact with your family through the adjustment period, not just at intake.
                If you are considering home care for a parent in Toronto or the GTA, a free consultation
                is the right place to start.
              </p>
              <Link href="/contact/" className="btn-red">Book a free consultation</Link>
              <a href="tel:8449770050" className="secondary">&nbsp;Or call (844) 977-0050</a>
            </div>

            <div className="faq-section">
              <p className="faq-eyebrow">Frequently asked questions</p>
              <h2>Questions about starting home care</h2>

              <div className="faq-item">
                <div className="faq-q">How long does it take to adjust to home care?</div>
                <div className="faq-a">Most families find that the adjustment settles within two to four weeks. The first week is almost always the hardest, for your parent, for the caregiver, and often for you. By the third or fourth visit, routines start to form and the relationship becomes less transactional. If things are still feeling genuinely difficult at the four-week mark, that is worth raising with the agency. One week of awkwardness is not a signal that anything is wrong.</div>
              </div>

              <div className="faq-item">
                <div className="faq-q">What if my parent refuses to cooperate with the caregiver?</div>
                <div className="faq-a">Resistance in the first week is common, especially if your parent did not fully choose this arrangement. The most useful thing is not to push harder but to give the relationship a little space to develop. Let the caregiver take the lead. Most experienced caregivers have navigated resistance before. They know that building trust takes time. If refusal is complete and your parent will not let the caregiver in at all, call the agency early rather than waiting it out. A different caregiver or a different approach to the introduction may help.</div>
              </div>

              <div className="faq-item">
                <div className="faq-q">Is it normal for the first week of home care to feel awkward?</div>
                <div className="faq-a">Yes. Entirely normal. A stranger is entering your parent&apos;s home, learning their routines, and performing intimate tasks, all while your parent is adjusting to a new reality about their own needs. Awkwardness is the expected state. It does not mean care is failing. It means the relationship has not had time to form yet.</div>
              </div>

              <div className="faq-item">
                <div className="faq-q">Should I be there for the first visit?</div>
                <div className="faq-a">Being there for the first visit, or the first few, can help with introductions and reduces anxiety for everyone. But staying for the entire visit can make it harder for the relationship to form between your parent and the caregiver. Try to make the introduction, handle any handoff of information, and then step away. If your parent has dementia or severe anxiety, staying longer is sensible. For most situations, a warm introduction followed by leaving is the right balance.</div>
              </div>

              <div className="faq-item">
                <div className="faq-q">What information should I give the caregiver before they start?</div>
                <div className="faq-a">A written notes sheet is worth preparing: daily routine and timing, medication schedule, food preferences and restrictions, what your parent likes and dislikes about being helped, any topics that are sensitive, where things are kept, and who to call in an emergency. The more specific, the better. Caregivers work better when they understand the person, not just the task list.</div>
              </div>

              <div className="faq-item">
                <div className="faq-q">How do I know if a caregiver is a good fit?</div>
                <div className="faq-a">Watch for whether your parent becomes slightly less resistant over successive visits: not immediately comfortable, but less guarded. A good caregiver will find small ways to connect: a consistent greeting, a remembered detail, a patient approach to tasks your parent finds difficult. Red flags are different from awkwardness: a caregiver who is dismissive, who rushes through tasks visibly, who does not communicate with the agency when problems arise, or whose visits leave your parent more distressed than they were before.</div>
              </div>

              <div className="faq-item">
                <div className="faq-q">What is the difference between adjustment and a real problem?</div>
                <div className="faq-a">Adjustment looks like: your parent is quieter than usual, a bit formal, or needs time to warm up. The caregiver is still learning routines. The first few visits feel a little stiff. A real problem looks like: your parent is distressed rather than reluctant, the caregiver misses visits or arrives significantly late without notice, tasks are consistently not completed, or your parent reports something specific that concerns you. Adjustment is expected. Problems should be raised with the agency early.</div>
              </div>

              <div className="faq-item">
                <div className="faq-q">When should I give feedback to the home care agency?</div>
                <div className="faq-a">Early. The first week is exactly when feedback is most actionable. Agencies expect to hear from families during the adjustment period. It is not a complaint; it is information. If a caregiver is not a good fit, it is better to know in week one than week six. If something about the routine is not working, say so. A good agency will welcome the conversation and adjust accordingly. Do you check in after the first week if something feels off? Yes.</div>
              </div>
            </div>

            <div className="related-links">
              <h3>Related reading</h3>
              <Link href="/resources/navigating-home-care/when-parent-needs-more-help/" className="related-link">
                When the person you love needs more help than you can give
              </Link>
              <Link href="/resources/navigating-home-care/recognizing-quality-home-care/" className="related-link">
                What good care actually looks like
              </Link>
              <Link href="/resources/family-caregiver-support/caregiver-burnout-warning-signs/" className="related-link">
                The exhaustion you have stopped noticing: caregiver burnout
              </Link>
              <Link href="/resources/family-caregiver-support/siblings-disagree-parent-care/" className="related-link">
                When siblings disagree about a parent&apos;s care
              </Link>
              <Link href="/resources/navigating-home-care/" className="related-link">
                Navigating home care guides
              </Link>
            </div>
          </article>

          <aside className="article-sidebar">
            <div className="sidebar-cta">
              <h3>Starting care in Toronto?</h3>
              <p>We stay in contact through the adjustment period, not just at intake.</p>
              <a href="tel:8449770050" className="sidebar-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red-sm">Book a Free Consultation</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">How care starts</div>
              <Link href="/how-care-starts/" className="sidebar-link">
                The Arcadia care process
              </Link>
              <Link href="/how-care-starts/matching-caregivers/" className="sidebar-link">
                How we match caregivers
              </Link>
              <Link href="/our-services/case-management/" className="sidebar-link">
                Care management
              </Link>
              <Link href="/our-services/respite-care/" className="sidebar-link">
                Respite care
              </Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">In this series</div>
              <Link href="/resources/navigating-home-care/when-parent-needs-more-help/" className="sidebar-link">
                When a parent needs more help
              </Link>
              <Link href="/resources/navigating-home-care/recognizing-quality-home-care/" className="sidebar-link">
                What good care looks like
              </Link>
              <Link href="/resources/family-caregiver-support/" className="sidebar-link">
                Family caregiver guides
              </Link>
            </div>
          </aside>
        </div>

        <section className="article-bottom-cta">
          <h2>The first week is easier with the right team beside you</h2>
          <p>
            Arcadia assigns a care coordinator who stays in contact through the adjustment period.
            Call us to learn how we support families in Toronto and the GTA through every stage of care.
          </p>
          <a href="tel:8449770050" className="article-bottom-cta-phone">(844) 977-0050</a>
          <div className="cta-buttons">
            <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            <Link href="/how-care-starts/" className="btn-outline">How care starts</Link>
          </div>
        </section>
      </main>
    </>
  )
}
