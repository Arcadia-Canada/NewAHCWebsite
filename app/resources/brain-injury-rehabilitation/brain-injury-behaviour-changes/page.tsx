import type { Metadata } from 'next'
import Link from 'next/link'
import InteractiveGuideEmbed from './InteractiveGuideEmbed'
import { loadGuideHtml } from './loadGuideHtml'

const CANONICAL =
  'https://www.arcadiahomecare.ca/resources/brain-injury-rehabilitation/brain-injury-behaviour-changes/'
const PUBLISHED = '2026-05-25T12:00:00-04:00'

export const metadata: Metadata = {
  title: 'Brain Injury Behaviour Changes: A Family Guide | Arcadia',
  description:
    'Interactive family guide to brain injury behaviour changes: what families see after ABI or stroke, why it happens, and practical ways to respond at home in Toronto and the GTA.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Brain Injury Behaviour Changes: A Family Guide',
    description:
      'What behaviour changes mean after brain injury, and how families can respond with clarity and steadiness.',
    url: CANONICAL,
    type: 'article',
    locale: 'en_CA',
    siteName: 'Arcadia Home Care',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Brain Injury Behaviour Changes: A Family Guide',
  alternativeHeadline: 'Understanding & Managing Brain Injury',
  description:
    'Interactive guide for families navigating behaviour and personality changes after acquired brain injury, with practical response strategies for caregivers.',
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    '@type': 'Organization',
    name: 'Arcadia Home Care',
    url: 'https://www.arcadiahomecare.ca/',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Arcadia Home Care',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.arcadiahomecare.ca/images/arcadia-logo.svg',
    },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  articleSection: 'Brain Injury & Rehabilitation',
  keywords:
    'brain injury behaviour changes, managing behaviours after brain injury, ABI behaviour, TBI caregiver guide, brain injury family guide Toronto',
  inLanguage: 'en-CA',
  isAccessibleForFree: true,
  learningResourceType: 'Interactive Resource',
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
      name: 'Brain Injury & Rehabilitation',
      item: 'https://www.arcadiahomecare.ca/resources/brain-injury-rehabilitation/',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Brain Injury Behaviour Changes',
      item: CANONICAL,
    },
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeHealthCare',
  '@id': 'https://www.arcadiahomecare.ca/#organization',
  name: 'Arcadia Home Care',
  url: 'https://www.arcadiahomecare.ca/',
  telephone: '+1-844-977-0050',
}

export default function BrainInjuryBehaviourChangesPage() {
  const guide = loadGuideHtml()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, breadcrumbSchema, organizationSchema]),
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
        .article-hero .article-summary { font-size: 1.125rem; color: rgba(255,255,255,0.88); line-height: 1.75; font-style: italic; margin: 0; }
        .article-guide-wrap { max-width: 1100px; margin: 0 auto; padding: 48px 24px 72px; }
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
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/resources/">Resources</Link>
            </li>
            <li>
              <Link href="/resources/brain-injury-rehabilitation/">Brain Injury & Rehabilitation</Link>
            </li>
            <li>
              <span aria-current="page">Behaviour changes guide</span>
            </li>
          </ol>
        </nav>

        <header className="article-hero">
          <div className="article-hero-inner">
            <p className="article-eyebrow">Brain Injury & Rehabilitation — Interactive Guide</p>
            <h1>Understanding & Managing Brain Injury</h1>
            <p className="article-summary">
              A practical guide for survivors and caregivers navigating recovery and behaviour changes
              after acquired brain injury or stroke.
            </p>
          </div>
        </header>

        <div className="article-guide-wrap">
          <InteractiveGuideEmbed
            styles={guide.styles}
            bodyHtml={guide.bodyHtml}
            script={guide.script}
          />
        </div>

        <section className="article-bottom-cta">
          <h2>Supporting ABI Recovery at Home in Toronto</h2>
          <p>
            Arcadia works alongside rehabilitation teams across the GTA to support brain injury recovery
            at home, from discharge through long-term care.
          </p>
          <a href="tel:8449770050" className="article-bottom-cta-phone">
            (844) 977-0050
          </a>
          <div className="cta-buttons">
            <Link href="/contact/" className="btn-red">
              Book a Free Consultation
            </Link>
            <Link href="/our-services/acquired-brain-injury-home-care/" className="btn-outline-white">
              Our ABI Care Service
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
