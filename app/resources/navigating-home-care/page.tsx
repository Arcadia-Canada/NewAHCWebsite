import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Navigating Home Care in Ontario | Resources for Families | Arcadia',
  description: 'Practical guides for Ontario families making decisions about home care — costs, providers, public vs. private care, PSWs, and how to get started.',
  alternates: {
    canonical: 'https://arcadiahomecare.ca/resources/navigating-home-care/',
  },
}

const articles = [
  {
    title: 'Signs Your Parent Needs Home Care',
    href: '/resources/navigating-home-care/signs-parent-needs-home-care/',
    description: 'A practical checklist of physical, cognitive, and emotional signs that indicate a parent may need more support at home.',
    status: 'coming',
  },
  {
    title: 'When a Parent Resists Home Care',
    href: '/resources/navigating-home-care/when-a-parent-resists-home-care/',
    description: 'Why parents refuse help — and how to have conversations that reduce resistance without damaging trust. Includes dementia-specific guidance.',
    status: 'coming',
  },
  {
    title: 'How to Choose a Home Care Provider in Ontario',
    href: '/resources/navigating-home-care/choosing-home-care-provider-ontario/',
    description: 'What separates strong home care agencies from weak ones — questions to ask, red flags to watch for, and how to compare your options.',
    status: 'coming',
  },
  {
    title: 'Private vs. Public Home Care in Ontario',
    href: '/resources/navigating-home-care/private-vs-public-home-care-ontario/',
    description: 'A clear breakdown of the differences between Ontario Health atHome (publicly funded) and private home care — and how most families use both.',
    status: 'coming',
  },
  {
    title: 'Understanding Ontario Health atHome (OHIP-Funded Care)',
    href: '/resources/navigating-home-care/ontario-health-athome-funded-care/',
    description: 'How the publicly funded system works, what it covers, its limitations, and how to access it as a Toronto family.',
    status: 'coming',
  },
  {
    title: 'Questions to Ask Before Hiring Home Care',
    href: '/resources/navigating-home-care/questions-before-hiring-home-care/',
    description: 'Twenty questions that separate the right agency from the wrong one — covering caregivers, communication, continuity, and cost.',
    status: 'coming',
  },
  {
    title: 'How Much Does Home Care Cost in Ontario?',
    href: '/resources/navigating-home-care/home-care-cost-ontario/',
    description: 'A transparent breakdown of private home care pricing in the GTA, what affects cost, and what to budget for different levels of care.',
    status: 'coming',
  },
  {
    title: 'What Does a PSW Actually Do?',
    href: '/resources/navigating-home-care/what-does-a-psw-do/',
    description: "A plain-language guide to the role of a Personal Support Worker — what they're trained for, what they can and can't do, and what to expect.",
    status: 'coming',
  },
]

export default function NavigatingHomeCareHub() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Navigating Home Care in Ontario',
              description: 'Practical guides for Ontario families making decisions about home care.',
              url: 'https://arcadiahomecare.ca/resources/navigating-home-care/',
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
                { '@type': 'ListItem', position: 3, name: 'Navigating Home Care', item: 'https://arcadiahomecare.ca/resources/navigating-home-care/' },
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
        <section className="hub-hero">
          <div className="hub-hero-inner">
            <p className="hub-eyebrow">Resource Centre — Navigating Home Care</p>
            <h1>How to Navigate Home Care in Ontario</h1>
            <p>
              If you're trying to understand how home care works in Ontario — what it costs, how to find the
              right provider, what public funding covers, and how to get a resistant parent on board — these
              guides are for you. Written for GTA families making decisions, often for the first time.
            </p>
          </div>
        </section>

        <div className="hub-body">
          <div>
            <div className="hub-intro">
              <p>
                The Ontario home care system is a patchwork of public funding, private providers, and
                professional roles that most families encounter only when a crisis forces the issue. Understanding
                how it works before you need it urgently is a significant advantage.
              </p>
              <p>
                These articles cover the most common questions families bring to Arcadia — from "how do I know
                it's time?" to "what will this actually cost?" We've written them to be direct, Ontario-specific,
                and useful at any stage of the decision.
              </p>
              <p>
                Ready to take the next step? Visit{' '}
                <Link href="/how-care-starts/">How Care Starts</Link> to see what the process looks like with
                Arcadia, or{' '}
                <Link href="/our-services/">browse all 12 of our services</Link>.
              </p>
            </div>

            <div className="hub-articles">
              <p className="hub-articles-label">Articles in this collection</p>
              <h2>Home Care Decision Guides</h2>

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

            <div style={{ marginTop: 48, padding: '32px', background: '#F7F3EE', borderRadius: 12, borderLeft: '4px solid #C8302A' }}>
              <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: 1.8, margin: 0 }}>
                <strong style={{ color: '#1C2B3A' }}>Already decided?</strong> Skip the research and talk to
                our team directly.{' '}
                <Link href="/how-care-starts/first-conversation/" style={{ color: '#C8302A', fontWeight: 600 }}>
                  Here's what our first conversation looks like
                </Link>{' '}
                — no pressure, no commitment, just a chance to understand your options.
              </p>
            </div>
          </div>

          <aside className="hub-sidebar">
            <div className="sidebar-cta">
              <h3>Have a question?</h3>
              <p>Our team will answer it honestly — whether or not you hire us.</p>
              <a href="tel:8449770050" className="sidebar-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red-sm">Book a Free Consultation</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Take the Next Step</div>
              <Link href="/how-care-starts/" className="sidebar-link">How Care Starts</Link>
              <Link href="/how-care-starts/your-care-plan/" className="sidebar-link">What's in a Care Plan</Link>
              <Link href="/our-services/" className="sidebar-link">All 12 Services</Link>
              <Link href="/locations/toronto/" className="sidebar-link">Care in Toronto</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Other Resource Clusters</div>
              <Link href="/resources/dementia-memory-care/" className="sidebar-link">Dementia & Memory Care</Link>
              <Link href="/resources/family-caregiver-support/" className="sidebar-link">Family Caregiver Support</Link>
              <Link href="/resources/brain-injury-rehabilitation/" className="sidebar-link">Brain Injury & Rehab</Link>
            </div>
          </aside>
        </div>

        <section className="hub-bottom-cta">
          <h2>Ready to Talk to Someone Who Knows the System?</h2>
          <p>
            Arcadia has been navigating Ontario's home care landscape with Toronto families since 2005.
            Call us or book a free consultation — we'll help you understand your options clearly.
          </p>
          <a href="tel:8449770050" className="hub-bottom-cta-phone">(844) 977-0050</a>
          <div className="cta-buttons">
            <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            <Link href="/how-care-starts/" className="btn-outline">See How Care Starts</Link>
          </div>
        </section>
      </main>
    </>
  )
}
