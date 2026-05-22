import type { Metadata } from 'next'
import Link from 'next/link'

const CANONICAL =
  'https://www.arcadiahomecare.ca/resources/navigating-home-care/what-does-a-psw-do/'
const PUBLISHED = '2026-05-22T11:00:00-04:00'

export const metadata: Metadata = {
  title: 'What Does a PSW Actually Do? | Arcadia Home Care Toronto',
  description:
    'A plain-language guide to the role of a Personal Support Worker in Ontario: what PSWs are trained for, what they can and cannot do, and what to expect when one comes into your home.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'What Does a PSW Actually Do?',
    description:
      'A plain-language guide to the role of a Personal Support Worker in Ontario, what PSWs are trained for, and what to expect when one comes into your home.',
    url: CANONICAL,
    type: 'article',
    locale: 'en_CA',
    siteName: 'Arcadia Home Care',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Does a PSW Actually Do?',
  alternativeHeadline: 'The Role of a Personal Support Worker in Ontario',
  description:
    'A plain-language guide to the role of a Personal Support Worker in Ontario: what PSWs are trained for, what they can and cannot do, and what to expect when one comes into your home.',
  image: ['https://www.arcadiahomecare.ca/images/resources-hero-family-tablet.png'],
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
    'what does a PSW do, personal support worker Ontario, PSW duties, PSW training Ontario, PSW vs nurse, what can a PSW do, PSW responsibilities',
  inLanguage: 'en-CA',
  audience: {
    '@type': 'Audience',
    audienceType:
      'Adult children and family caregivers in the GTA who are researching home care and want to understand the role of a Personal Support Worker',
  },
  about: [
    { '@type': 'Thing', name: 'Personal Support Worker' },
    { '@type': 'Thing', name: 'Home care roles' },
    { '@type': 'Thing', name: 'PSW training Ontario' },
    { '@type': 'Thing', name: 'Personal support services' },
  ],
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.article-summary', '.key-takeaways', 'h1'],
  },
  wordCount: 1400,
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
      name: 'What Does a PSW Actually Do?',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does PSW stand for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PSW stands for Personal Support Worker. In Ontario, a PSW is a trained professional who supports people with daily living activities at home, in retirement residences, in long-term care, and in hospitals. PSWs are the backbone of home care in the province.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can a PSW do in Ontario?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A PSW can assist with bathing, dressing, grooming, toileting, meal preparation, feeding, mobility and transfers, light housekeeping, medication reminders, companionship, and accompaniment to appointments. PSWs can also document changes in condition and communicate concerns to the family or care coordinator. They work under a care plan and follow the scope of practice set by their employer and the relevant Ontario standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can a PSW NOT do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PSWs cannot perform controlled medical acts. They cannot administer injections, manage IV lines, change sterile dressings, or make clinical decisions about medication. Anything that requires a registered nurse, registered practical nurse, or physician is outside a PSW\'s scope. A reputable agency will be clear about where the PSW role ends and a nursing visit begins.',
      },
    },
    {
      '@type': 'Question',
      name: "What is the difference between a PSW and a nurse?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A PSW is trained in personal care and daily living support. A Registered Nurse (RN) or Registered Practical Nurse (RPN) is a regulated health professional with broader clinical training. Nurses handle wound care, IV therapy, injections, clinical assessments, and complex medication management. PSWs handle the hands-on daily care that allows a person to live well at home. Most home care plans use PSWs as the primary support and bring in a nurse when a clinical task is required.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are PSWs trained in Ontario?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PSWs in Ontario complete a recognized PSW certificate program through a college, private career college, or district school board. Programs typically run 6 to 8 months and include classroom instruction plus a clinical placement. Graduates may register with the Ontario Personal Support Worker Registry. Reputable agencies require completed certification, background checks, and ongoing training beyond the initial credential.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a PSW give medication?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A PSW can provide medication reminders and assist a person in taking medication that has been pre-prepared (for example, in a pill organizer or blister pack). PSWs cannot make decisions about dosage or administer medication that requires clinical judgment. For complex medication management, a nurse or pharmacist is involved in setting up the system that the PSW then supports.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do PSWs provide dementia care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many PSWs receive additional training in dementia care, including communication techniques, behaviour support, and safety strategies. For families navigating cognitive change, the consistency of the same PSW across visits matters significantly. Familiarity reduces confusion and builds trust. A good agency matches PSWs with dementia training to clients who need that specific expertise.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long is a typical PSW visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most private home care agencies in Ontario require a minimum visit of three or four hours. A typical visit might include morning routines (bathing, dressing, breakfast), a structured activity or appointment, and meal preparation. Longer shifts of 6 to 12 hours are common for clients who need more comprehensive support. Overnight and live-in arrangements are available when consistent presence is needed.',
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
    "Specialized home care for seniors and families across Toronto and the Greater Toronto Area, including dementia and Alzheimer's care, acquired brain injury support, rehabilitation, hospital discharge support, palliative care, and case management. Serving GTA families since 2005.",
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
    "Dementia and Alzheimer's home care",
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
    reviewCount: '41',
    bestRating: '5',
    worstRating: '1',
  },
}

export default function WhatDoesPSWDo() {
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
        .article-content ul { margin: 0 0 22px 0; padding-left: 1.2rem; }
        .article-content li { font-size: 1rem; color: #4B5563; line-height: 1.75; margin-bottom: 8px; }
        .article-content a { color: #C8302A; font-weight: 600; text-decoration: underline; text-decoration-color: rgba(200,48,42,0.3); text-underline-offset: 3px; }
        .article-content a:hover { text-decoration-color: #C8302A; }
        .pull-quote { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.25rem; line-height: 1.5; font-style: italic; color: #1C2B3A; border-left: 4px solid #C8302A; padding: 4px 0 4px 20px; margin: 28px 0; }
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
        .related-link::before { content: '\\2192'; color: #C8302A; }
        .related-link:hover { color: #C8302A; }
        .article-sidebar { position: sticky; top: 100px; }
        .sidebar-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 14px; padding: 28px; margin-bottom: 20px; }
        .sidebar-card-title { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #C8302A; margin-bottom: 16px; }
        .sidebar-link { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: #1C2B3A; text-decoration: none; padding: 10px 0; border-bottom: 1px solid #F0EBE3; transition: color 0.15s; }
        .sidebar-link:last-child { border-bottom: none; }
        .sidebar-link:hover { color: #C8302A; }
        .sidebar-link::before { content: '\\2192'; color: #C8302A; font-size: 13px; }
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
        .btn-outline-white { border: 1.5px solid rgba(255,255,255,0.4); color: #fff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; }
      `}</style>

      <main className="article-page">

        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/resources/">Resources</Link></li>
            <li><Link href="/resources/navigating-home-care/">Navigating Home Care</Link></li>
            <li><span aria-current="page">What Does a PSW Actually Do?</span></li>
          </ol>
        </nav>

        <header className="article-hero">
          <div className="article-hero-inner">
            <p className="article-eyebrow">Navigating Home Care</p>
            <h1>What Does a PSW Actually Do?</h1>
            <p className="article-summary">
              A plain-language guide to the role of a Personal Support Worker in Ontario: what they are trained for, what they can and cannot do, and what to expect when one comes into your home.
            </p>
            <p className="article-byline">
              <span>Arcadia Home Care</span>
              <span>&middot;</span>
              <span>Toronto and the GTA</span>
              <span>&middot;</span>
              <time dateTime={PUBLISHED}>May 22, 2026</time>
            </p>
          </div>
        </header>

        <div className="article-body">
          <div>
            <aside className="key-takeaways" aria-label="Key takeaways">
              <h2>Key Takeaways</h2>
              <ul>
                <li>A PSW (Personal Support Worker) is a trained professional who supports daily living: bathing, dressing, meals, mobility, medication reminders, and companionship.</li>
                <li>PSWs are not nurses. They cannot administer injections, manage IV lines, or perform tasks that require clinical judgment.</li>
                <li>PSWs in Ontario complete a recognized 6 to 8 month certificate program plus clinical placement, with most reputable agencies adding their own ongoing training.</li>
                <li>The right PSW match matters more than most families realize. Continuity of caregiver is one of the strongest predictors of how well a home care arrangement works.</li>
                <li>PSWs are the backbone of home care in Ontario. Understanding the role helps families know what to expect and how to make the most of the support.</li>
              </ul>
            </aside>

            <article className="article-content">

              <p>
                When a family first considers home care, the word that comes up most often is PSW. Most people know vaguely what it stands for. Far fewer have a clear picture of what a PSW actually does day to day, what their training covers, or where their role ends and a nurse&apos;s begins.
              </p>
              <p>
                This guide answers those questions directly, in plain language. If you are about to bring a PSW into your parent&apos;s home, or you are still deciding whether home care is the right next step, this is the foundation worth understanding first.
              </p>

              <h2>What PSW stands for, and where they work</h2>
              <p>
                PSW stands for Personal Support Worker. In Ontario, PSWs are trained professionals who provide hands-on support with daily living activities. They work across several settings: private homes, retirement residences, long-term care facilities, hospitals, and community programs.
              </p>
              <p>
                When families talk about &ldquo;home care,&rdquo; what they usually mean in practice is PSW care. Nurses, occupational therapists, and physiotherapists also visit homes, but the consistent presence and hands-on support comes from PSWs.
              </p>
              <p>
                In private home care, a PSW typically visits a client&apos;s home on a scheduled basis, anywhere from a few hours per week to round-the-clock coverage, depending on what the situation requires.
              </p>

              <h2>What a PSW does in a typical visit</h2>
              <p>
                The specifics of a visit depend on the care plan, but most PSW visits include some combination of the following:
              </p>
              <ul>
                <li><strong>Personal care.</strong> Bathing, showering, dressing, grooming, oral care, toileting, incontinence management.</li>
                <li><strong>Mobility support.</strong> Transfers (bed to chair, chair to bathroom), walking assistance, repositioning to prevent pressure injuries.</li>
                <li><strong>Meal preparation.</strong> Cooking meals based on dietary needs and preferences, feeding assistance when needed, ensuring proper hydration.</li>
                <li><strong>Medication reminders.</strong> Prompting the client to take medications that have been pre-prepared by a nurse, pharmacist, or family member.</li>
                <li><strong>Light housekeeping.</strong> Tasks related directly to the client&apos;s living environment: tidying up, laundry, changing bed linens, washing dishes.</li>
                <li><strong>Companionship.</strong> Conversation, reading aloud, going for walks, playing cards, watching a show together. Often the most underappreciated part of the role.</li>
                <li><strong>Accompaniment.</strong> Going with the client to medical appointments, errands, social events, or community activities.</li>
                <li><strong>Observation and documentation.</strong> Noting changes in condition, mood, appetite, or function and communicating them to the care coordinator or family.</li>
              </ul>

              <p className="pull-quote">
                The PSW is usually the person who notices first when something has changed. That observational role is one of the most valuable parts of professional home care.
              </p>

              <h2>What a PSW does not do</h2>
              <p>
                The line between a PSW and a nurse matters. A reputable agency will be clear about it, and so will a well-trained PSW.
              </p>
              <p>
                PSWs do not perform controlled medical acts. They do not administer injections, manage IV lines, change sterile dressings, suction airways, or make decisions about medication dosages. These tasks require a Registered Nurse (RN) or Registered Practical Nurse (RPN).
              </p>
              <p>
                If a care plan requires both daily personal support and ongoing clinical tasks (for example, wound care after surgery), the typical arrangement is a PSW handling the daily routine and a nurse visiting periodically for the clinical work. <Link href="/our-services/case-management/">Care coordination</Link> stitches these together into a single plan.
              </p>

              <h2>How PSWs are trained in Ontario</h2>
              <p>
                PSW training in Ontario is delivered through community colleges, private career colleges, and district school boards. A standard PSW certificate program runs 6 to 8 months full-time and covers:
              </p>
              <ul>
                <li>Anatomy, physiology, and common conditions of aging</li>
                <li>Personal care techniques and safe transfers</li>
                <li>Nutrition and meal planning</li>
                <li>Dementia and cognitive care basics</li>
                <li>Mental health awareness</li>
                <li>Palliative care fundamentals</li>
                <li>Communication, documentation, and ethics</li>
                <li>A supervised clinical placement (usually 200+ hours)</li>
              </ul>
              <p>
                Graduates may register with the Ontario Personal Support Worker Registry. Strong agencies require this registration as a baseline and add their own training on top: dementia care specialization, behaviour support, palliative skills, hospital discharge protocols, and case-specific orientation before any new client.
              </p>
              <p>
                When you ask an agency about PSW training, the question is not just &ldquo;are they certified?&rdquo; The more useful question is &ldquo;what ongoing training and supervision do you provide after certification?&rdquo;
              </p>

              <div className="mid-cta">
                <h2>Wondering if a PSW is the right fit for your family?</h2>
                <p>
                  A care assessment helps determine what kind of support the situation needs: personal care, nursing, or a combination. There is no cost and no obligation.
                </p>
                <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
                <span className="secondary"> or call <a href="tel:8449770050">(844) 977-0050</a></span>
              </div>

              <h2>What makes a good PSW match</h2>
              <p>
                Skill matters. So does personality. The best PSW for a quiet client who loves to read is not the same person as the best PSW for someone who wants company on long walks.
              </p>
              <p>
                A thoughtful agency considers several factors when matching:
              </p>
              <ul>
                <li>Specific training relevant to the client&apos;s situation (dementia, ABI, palliative, post-surgical)</li>
                <li>Language and cultural fit, especially for clients whose first language is not English</li>
                <li>Personality and communication style</li>
                <li>Schedule alignment (a PSW who can commit to the same visit days each week)</li>
                <li>Geographic logistics (so travel time does not affect care quality)</li>
              </ul>
              <p>
                Continuity is the factor families underestimate most. Having the same PSW return week after week is what allows trust, routine, and observation to deepen. <Link href="/how-care-starts/matching-caregivers/">How the matching process works</Link> is worth understanding before care begins.
              </p>

              <p className="pull-quote">
                Continuity of caregiver is one of the strongest predictors of how well a home care arrangement works.
              </p>

              <h2>PSWs and dementia care</h2>
              <p>
                For families navigating dementia, the PSW relationship takes on extra weight. A familiar face reduces confusion, lowers agitation, and creates a predictable rhythm that supports the person&apos;s sense of safety.
              </p>
              <p>
                PSWs with additional <Link href="/our-services/dementia-alzheimers-home-care/">dementia training</Link> learn techniques for redirection, communication when language is impaired, behaviour support, and creating calm during difficult moments. Pairing a dementia-trained PSW with a client and keeping that pairing stable over time is one of the most effective things a home care arrangement can do.
              </p>

              <h2>What to expect on the first PSW visit</h2>
              <p>
                The first visit usually involves a few practical things: orientation to the home, introduction between PSW and client, review of the care plan, and a slower-paced start. The PSW is reading the room, learning routines, and building rapport.
              </p>
              <p>
                Awkwardness on day one is normal. Most families notice a settled rhythm by the second or third visit. If something is not working, raise it with the care coordinator. A small adjustment, schedule, task list, sometimes a different PSW, often resolves the issue quickly.
              </p>
              <p>
                For a fuller picture of the adjustment period, our guide on <Link href="/resources/navigating-home-care/what-no-one-tells-you-first-week-home-care/">what to expect during the first week of home care</Link> walks through what is normal and what is worth raising.
              </p>

              <p className="closing-divider" aria-hidden="true">&middot; &middot; &middot;</p>

              <p>
                A PSW is more than a service line. For most families, the PSW becomes a person whose presence in the home changes the daily experience of caring for a parent. Understanding the role, what it covers, where its limits are, and what makes it work well, helps you set up the arrangement that actually delivers what your family needs.
              </p>

              <section className="faq-section" aria-labelledby="faq-heading">
                <p className="faq-eyebrow">Common Questions</p>
                <h2 id="faq-heading">Frequently Asked Questions</h2>
                <div className="faq-item">
                  <p className="faq-q">What does PSW stand for?</p>
                  <p className="faq-a">PSW stands for Personal Support Worker. In Ontario, a PSW is a trained professional who supports people with daily living activities at home, in retirement residences, in long-term care, and in hospitals. PSWs are the backbone of home care in the province.</p>
                </div>
                <div className="faq-item">
                  <p className="faq-q">What can a PSW do in Ontario?</p>
                  <p className="faq-a">A PSW can assist with bathing, dressing, grooming, toileting, meal preparation, feeding, mobility and transfers, light housekeeping, medication reminders, companionship, and accompaniment to appointments. PSWs can also document changes in condition and communicate concerns to the family or care coordinator. They work under a care plan and follow the scope of practice set by their employer and the relevant Ontario standards.</p>
                </div>
                <div className="faq-item">
                  <p className="faq-q">What can a PSW NOT do?</p>
                  <p className="faq-a">PSWs cannot perform controlled medical acts. They cannot administer injections, manage IV lines, change sterile dressings, or make clinical decisions about medication. Anything that requires a registered nurse, registered practical nurse, or physician is outside a PSW&apos;s scope. A reputable agency will be clear about where the PSW role ends and a nursing visit begins.</p>
                </div>
                <div className="faq-item">
                  <p className="faq-q">What is the difference between a PSW and a nurse?</p>
                  <p className="faq-a">A PSW is trained in personal care and daily living support. A Registered Nurse (RN) or Registered Practical Nurse (RPN) is a regulated health professional with broader clinical training. Nurses handle wound care, IV therapy, injections, clinical assessments, and complex medication management. PSWs handle the hands-on daily care that allows a person to live well at home. Most home care plans use PSWs as the primary support and bring in a nurse when a clinical task is required.</p>
                </div>
                <div className="faq-item">
                  <p className="faq-q">How are PSWs trained in Ontario?</p>
                  <p className="faq-a">PSWs in Ontario complete a recognized PSW certificate program through a college, private career college, or district school board. Programs typically run 6 to 8 months and include classroom instruction plus a clinical placement. Graduates may register with the Ontario Personal Support Worker Registry. Reputable agencies require completed certification, background checks, and ongoing training beyond the initial credential.</p>
                </div>
                <div className="faq-item">
                  <p className="faq-q">Can a PSW give medication?</p>
                  <p className="faq-a">A PSW can provide medication reminders and assist a person in taking medication that has been pre-prepared (for example, in a pill organizer or blister pack). PSWs cannot make decisions about dosage or administer medication that requires clinical judgment. For complex medication management, a nurse or pharmacist is involved in setting up the system that the PSW then supports.</p>
                </div>
                <div className="faq-item">
                  <p className="faq-q">Do PSWs provide dementia care?</p>
                  <p className="faq-a">Yes. Many PSWs receive additional training in dementia care, including communication techniques, behaviour support, and safety strategies. For families navigating cognitive change, the consistency of the same PSW across visits matters significantly. Familiarity reduces confusion and builds trust. A good agency matches PSWs with dementia training to clients who need that specific expertise.</p>
                </div>
                <div className="faq-item">
                  <p className="faq-q">How long is a typical PSW visit?</p>
                  <p className="faq-a">Most private home care agencies in Ontario require a minimum visit of three or four hours. A typical visit might include morning routines (bathing, dressing, breakfast), a structured activity or appointment, and meal preparation. Longer shifts of 6 to 12 hours are common for clients who need more comprehensive support. Overnight and live-in arrangements are available when consistent presence is needed.</p>
                </div>
              </section>

              <nav className="related-links" aria-label="Related articles">
                <h3>Read Next</h3>
                <Link href="/resources/navigating-home-care/home-care-cost-ontario/" className="related-link">
                  How Much Does Home Care Cost in Ontario?
                </Link>
                <Link href="/resources/navigating-home-care/recognizing-quality-home-care/" className="related-link">
                  What Good Care Actually Looks Like
                </Link>
                <Link href="/resources/navigating-home-care/what-no-one-tells-you-first-week-home-care/" className="related-link">
                  What No One Tells You About the First Week of Home Care
                </Link>
                <Link href="/resources/navigating-home-care/when-parent-needs-more-help/" className="related-link">
                  When the Person You Love Needs More Help Than You Can Give
                </Link>
              </nav>

            </article>
          </div>

          <aside className="article-sidebar" aria-label="Article sidebar">
            <div className="sidebar-cta">
              <h3>Looking for the right PSW?</h3>
              <p>A free consultation helps clarify what your family needs and how the match works.</p>
              <a href="tel:8449770050" className="sidebar-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red-sm">Book a Free Consultation</Link>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-title">In This Cluster</div>
              <Link href="/resources/navigating-home-care/" className="sidebar-link">Navigating Home Care Hub</Link>
              <Link href="/resources/navigating-home-care/home-care-cost-ontario/" className="sidebar-link">What Home Care Costs</Link>
              <Link href="/resources/navigating-home-care/signs-parent-needs-home-care/" className="sidebar-link">How to Know When It Is Time</Link>
              <Link href="/resources/navigating-home-care/recognizing-quality-home-care/" className="sidebar-link">What Good Care Looks Like</Link>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Services</div>
              <Link href="/our-services/personal-support-daily-living/" className="sidebar-link">Personal Support</Link>
              <Link href="/our-services/dementia-alzheimers-home-care/" className="sidebar-link">Dementia Care</Link>
              <Link href="/our-services/companion-care/" className="sidebar-link">Companion Care</Link>
              <Link href="/our-services/case-management/" className="sidebar-link">Care Coordination</Link>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-title">The Care Process</div>
              <Link href="/how-care-starts/" className="sidebar-link">How Care Starts</Link>
              <Link href="/how-care-starts/care-assessment/" className="sidebar-link">The Care Assessment</Link>
              <Link href="/how-care-starts/matching-caregivers/" className="sidebar-link">Matching Caregivers</Link>
            </div>
          </aside>
        </div>

        <section className="article-bottom-cta" aria-labelledby="bottom-cta-heading">
          <h2 id="bottom-cta-heading">Ready to See What the Right PSW Match Looks Like?</h2>
          <p>
            Arcadia has been matching PSWs with Toronto and GTA families since 2005. A free consultation is the clearest first step.
          </p>
          <a href="tel:8449770050" className="article-bottom-cta-phone">(844) 977-0050</a>
          <div className="cta-buttons">
            <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            <Link href="/how-care-starts/matching-caregivers/" className="btn-outline-white">How Matching Works</Link>
          </div>
        </section>

      </main>
    </>
  )
}
