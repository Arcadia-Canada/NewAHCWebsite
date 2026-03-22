import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dementia & Memory Care Resources for Families | Arcadia Home Care',
  description: 'Guides and articles to help Toronto families navigate dementia care at home — early signs, behaviour changes, communication strategies, and more.',
  alternates: {
    canonical: 'https://arcadiahomecare.ca/resources/dementia-memory-care/',
  },
}

const articles = [
  {
    title: 'Early Signs of Dementia in a Parent',
    href: '/resources/dementia-memory-care/early-signs-of-dementia-in-a-parent/',
    description: 'What to look for, how to tell the difference from normal aging, and what to do when you notice changes.',
    status: 'live',
  },
  {
    title: "Normal Aging vs. Dementia: What's the Difference?",
    href: '/resources/dementia-memory-care/normal-aging-vs-dementia/',
    description: 'A clear, honest comparison of expected cognitive changes versus signs that warrant medical attention.',
    status: 'live',
  },
  {
    title: 'How to Introduce Home Care to a Parent with Dementia',
    href: '/resources/dementia-memory-care/introducing-home-care-dementia/',
    description: "Practical strategies for families navigating a parent's resistance, fear, or confusion about accepting help.",
    status: 'live',
  },
  {
    title: 'Managing Behaviour Changes in Dementia',
    href: '/resources/dementia-memory-care/managing-dementia-behaviour-changes/',
    description: 'How to understand and respond to aggression, sundowning, wandering, and other behavioural shifts.',
    status: 'coming',
  },
  {
    title: 'Communication Strategies for Dementia',
    href: '/resources/dementia-memory-care/communication-strategies-dementia/',
    description: 'What to say, how to say it, and what to avoid — a guide to connecting with a parent who has dementia.',
    status: 'coming',
  },
  {
    title: 'Late Stage Dementia: What Families Need to Know',
    href: '/resources/dementia-memory-care/late-stage-dementia/',
    description: 'An honest, compassionate overview of what to expect in the final stages and how to plan for comfort.',
    status: 'coming',
  },
]

export default function DementiaMemoryCareHub() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Dementia & Memory Care Resources',
              description: 'Guides for Toronto families navigating dementia care at home.',
              url: 'https://arcadiahomecare.ca/resources/dementia-memory-care/',
              publisher: {
                '@type': 'Organization',
                name: 'Arcadia Home Care',
                url: 'https://arcadiahomecare.ca',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://arcadiahomecare.ca/' },
                { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://arcadiahomecare.ca/resources/' },
                { '@type': 'ListItem', position: 3, name: 'Dementia & Memory Care', item: 'https://arcadiahomecare.ca/resources/dementia-memory-care/' },
              ],
            },
          ]),
        }}
      />

      <style>{`
        .hub-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }
        .hub-hero { background: #1C2B3A; padding: 96px 24px 80px; }
        .hub-hero-inner { max-width: 760px; margin: 0 auto; }
        .hub-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 14px; }
        .hub-hero h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2.2rem, 4.5vw, 3.4rem); font-weight: 600; color: #fff; line-height: 1.15; margin-bottom: 20px; }
        .hub-hero p { font-size: 1.05rem; color: rgba(255,255,255,0.85); line-height: 1.8; margin-bottom: 0; }

        .hub-body { max-width: 1100px; margin: 0 auto; padding: 72px 24px; display: grid; grid-template-columns: 1fr 300px; gap: 64px; align-items: start; }
        @media (max-width: 900px) { .hub-body { grid-template-columns: 1fr; } }

        .hub-intro { margin-bottom: 48px; }
        .hub-intro p { font-size: 1rem; color: #4B5563; line-height: 1.85; margin-bottom: 16px; }
        .hub-intro a { color: #C8302A; font-weight: 600; text-decoration: underline; text-decoration-color: rgba(200,48,42,0.3); text-underline-offset: 3px; }

        .hub-articles-label { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 20px; }
        .hub-articles h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 600; color: #1C2B3A; margin-bottom: 28px; }

        .article-card { border: 1px solid #E5E0D8; border-radius: 12px; padding: 24px 28px; margin-bottom: 16px; background: #FAFAF8; transition: border-color 0.2s, box-shadow 0.2s; }
        .article-card:hover { border-color: #C8302A; box-shadow: 0 4px 16px rgba(200,48,42,0.08); }
        .article-card.coming { opacity: 0.55; pointer-events: none; }
        .article-card-title { font-size: 1rem; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; display: flex; align-items: center; gap: 10px; }
        .article-card-title a { color: #1C2B3A; text-decoration: none; }
        .article-card-title a:hover { color: #C8302A; }
        .badge-coming { font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; background: #F0EBE3; color: #9B8E7E; padding: 3px 8px; border-radius: 20px; }
        .article-card p { font-size: 0.9rem; color: #6B7280; line-height: 1.7; margin: 0; }
        .article-card-arrow { display: inline-flex; align-items: center; gap: 4px; color: #C8302A; font-size: 13px; font-weight: 700; margin-top: 10px; text-decoration: none; }
        .article-card-arrow:hover { gap: 8px; }

        .hub-sidebar { position: sticky; top: 100px; }
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

        .hub-bottom-cta { background: #1C2B3A; padding: 80px 24px; text-align: center; }
        .hub-bottom-cta h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 600; color: #fff; max-width: 640px; margin: 0 auto 14px; line-height: 1.2; }
        .hub-bottom-cta p { color: rgba(255,255,255,0.85); font-size: 1rem; max-width: 480px; margin: 0 auto 32px; line-height: 1.75; }
        .hub-bottom-cta-phone { font-size: 2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 20px; }
        .cta-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .btn-red { background: #C8302A; color: #fff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; }
        .btn-outline { border: 1.5px solid rgba(255,255,255,0.5); background: transparent; color: #fff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; }
      `}</style>

      <main className="hub-page">
        {/* Hero */}
        <section className="hub-hero">
          <div className="hub-hero-inner">
            <p className="hub-eyebrow">Resource Centre — Dementia & Memory Care</p>
            <h1>Understanding Dementia: A Guide for Toronto Families</h1>
            <p>
              When a parent begins to show signs of cognitive change, the questions come fast — and the answers
              are rarely simple. These guides are written for families in the GTA navigating dementia care at
              home: what to watch for, how to communicate, when to get help, and how to find the right support.
            </p>
          </div>
        </section>

        {/* Body */}
        <div className="hub-body">
          <div>
            {/* Intro */}
            <div className="hub-intro">
              <p>
                Dementia is not a single disease — it's an umbrella term for a group of conditions that affect
                memory, thinking, and the ability to manage daily life. Alzheimer's disease is the most common
                form, accounting for roughly 60–70% of cases. Others include vascular dementia, Lewy body
                dementia, and frontotemporal dementia.
              </p>
              <p>
                For Toronto families, the path from first concern to care plan can feel overwhelming. These
                articles are designed to give you clear, honest information at each stage — so you can make
                decisions with confidence and care for your loved one without losing yourself in the process.
              </p>
              <p>
                If you're ready to talk about home care options now, visit our{' '}
                <Link href="/conditions/dementia-care-at-home/">dementia care at home condition page</Link> or
                explore{' '}
                <Link href="/our-services/dementia-alzheimers-home-care/">
                  Arcadia's dementia and Alzheimer's home care service
                </Link>
                .
              </p>
            </div>

            {/* Articles */}
            <div className="hub-articles">
              <p className="hub-articles-label">Articles in this collection</p>
              <h2>Dementia & Memory Care Guides</h2>

              {articles.map((article) => (
                <div key={article.href} className={`article-card${article.status === 'coming' ? ' coming' : ''}`}>
                  <div className="article-card-title">
                    {article.status === 'live' ? (
                      <Link href={article.href}>{article.title}</Link>
                    ) : (
                      <span>{article.title}</span>
                    )}
                    {article.status === 'coming' && <span className="badge-coming">Coming soon</span>}
                  </div>
                  <p>{article.description}</p>
                  {article.status === 'live' && (
                    <Link href={article.href} className="article-card-arrow">
                      Read article →
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mid-page context */}
            <div style={{ marginTop: 48, padding: '32px', background: '#F7F3EE', borderRadius: 12, borderLeft: '4px solid #C8302A' }}>
              <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: 1.8, margin: 0 }}>
                <strong style={{ color: '#1C2B3A' }}>Looking for care now?</strong> If you're already at the
                point of needing support, our{' '}
                <Link href="/how-care-starts/" style={{ color: '#C8302A', fontWeight: 600 }}>
                  How Care Starts
                </Link>{' '}
                page walks you through the process — from first conversation to caregiver match. Most families
                in Toronto can have a care assessment within 24–48 hours.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hub-sidebar">
            <div className="sidebar-cta">
              <h3>Talk to our team</h3>
              <p>No obligation. We listen first and help you understand your options.</p>
              <a href="tel:8449770050" className="sidebar-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red-sm">Book a Free Consultation</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Pages</div>
              <Link href="/conditions/dementia-care-at-home/" className="sidebar-link">Dementia Care at Home</Link>
              <Link href="/our-services/dementia-alzheimers-home-care/" className="sidebar-link">Dementia Home Care Service</Link>
              <Link href="/how-care-starts/" className="sidebar-link">How Care Starts</Link>
              <Link href="/locations/toronto/" className="sidebar-link">Care in Toronto</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Other Resource Clusters</div>
              <Link href="/resources/navigating-home-care/" className="sidebar-link">Navigating Home Care</Link>
              <Link href="/resources/family-caregiver-support/" className="sidebar-link">Family Caregiver Support</Link>
              <Link href="/resources/brain-injury-rehabilitation/" className="sidebar-link">Brain Injury & Rehab</Link>
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <section className="hub-bottom-cta">
          <h2>Ready to Talk About Care for Your Parent?</h2>
          <p>
            Arcadia has supported Toronto families through every stage of dementia — from early signs to
            late-stage care. Call us or book a free consultation.
          </p>
          <a href="tel:8449770050" className="hub-bottom-cta-phone">(844) 977-0050</a>
          <div className="cta-buttons">
            <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            <Link href="/our-services/dementia-alzheimers-home-care/" className="btn-outline">Our Dementia Care Service</Link>
          </div>
        </section>
      </main>
    </>
  )
}
