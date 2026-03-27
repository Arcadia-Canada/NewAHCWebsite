import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Brain Injury & Rehabilitation Resources for Families | Arcadia Home Care',
  description: 'Guides for families navigating life after acquired brain injury, stroke, or rehabilitation in Toronto — recovery at home, cognitive changes, and caregiver support.',
  alternates: {
    canonical: 'https://arcadiahomecare.ca/resources/brain-injury-rehabilitation/',
  },
}

const articles = [
  {
    title: 'Life After Acquired Brain Injury: A Family Guide',
    href: '/resources/brain-injury-rehabilitation/life-after-brain-injury/',
    description: 'A comprehensive overview of what ABI means for families — changes to expect, how to adapt, and how to find the right home support.',
    status: 'coming',
  },
  {
    title: 'Stroke Recovery at Home: What to Expect',
    href: '/resources/brain-injury-rehabilitation/stroke-recovery-at-home/',
    description: 'A practical guide to recovering at home after a stroke — daily routines, safety, therapy coordination, and what progress typically looks like.',
    status: 'coming',
  },
  {
    title: 'Cognitive and Emotional Changes After Brain Injury',
    href: '/resources/brain-injury-rehabilitation/cognitive-emotional-changes-brain-injury/',
    description: 'How ABI affects thinking, memory, personality, and emotional regulation — and how families can respond with understanding and structure.',
    status: 'coming',
  },
  {
    title: 'Returning Home After Rehabilitation',
    href: '/resources/brain-injury-rehabilitation/returning-home-after-rehab/',
    description: "The transition from inpatient rehabilitation to home care is one of the most critical moments in recovery. Here's how to prepare.",
    status: 'coming',
  },
  {
    title: 'What Does a Rehabilitation Support Worker Do?',
    href: '/resources/brain-injury-rehabilitation/rehabilitation-support-worker/',
    description: "A plain-language guide to the role of a rehab support worker — how they differ from PSWs, what they're trained for, and when you need one.",
    status: 'coming',
  },
  {
    title: 'Mobility Support After Surgery or Illness',
    href: '/resources/brain-injury-rehabilitation/mobility-support-after-surgery/',
    description: 'How in-home mobility support works, what it includes, and how it connects with physiotherapy and occupational therapy in Toronto.',
    status: 'coming',
  },
]

export default function BrainInjuryRehabHub() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Brain Injury & Rehabilitation Resources',
              description: 'Guides for families navigating acquired brain injury and rehabilitation at home in Toronto.',
              url: 'https://arcadiahomecare.ca/resources/brain-injury-rehabilitation/',
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
                { '@type': 'ListItem', position: 3, name: 'Brain Injury & Rehabilitation', item: 'https://arcadiahomecare.ca/resources/brain-injury-rehabilitation/' },
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

        .referral-hook { margin-top: 32px; padding: 20px 24px; background: #EEF2F7; border-radius: 10px; font-size: 0.9rem; color: #4B5563; line-height: 1.7; }
        .referral-hook a { color: #C8302A; font-weight: 600; text-decoration: underline; text-decoration-color: rgba(200,48,42,0.3); }

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
            <p className="hub-eyebrow">Resource Centre — Brain Injury & Rehabilitation</p>
            <h1>Brain Injury & Recovery: A Guide for Toronto Families</h1>
            <p>
              Acquired brain injury — whether from stroke, trauma, anoxia, or illness — changes everything.
              These guides are for families in the GTA navigating the transition from hospital or rehabilitation
              to home: what to expect, how to support recovery, and how to find the right care.
            </p>
          </div>
        </section>

        <div className="hub-body">
          <div>
            <div className="hub-intro">
              <p>
                Acquired brain injury (ABI) affects over 1.5 million Canadians. Unlike a broken bone, the
                effects of ABI are often invisible — cognitive fatigue, personality changes, emotional
                dysregulation — and the path to recovery is rarely linear. Families are frequently left to
                coordinate care across multiple specialists with little guidance on what happens at home.
              </p>
              <p>
                Toronto families have access to some of Canada's strongest rehabilitation hospitals — UHN,
                Sunnybrook, Baycrest — but the support often drops off sharply once a patient leaves inpatient
                care. These guides are designed to help you bridge that gap.
              </p>
              <p>
                For an overview of how Arcadia supports ABI recovery, visit our{' '}
                <Link href="/conditions/acquired-brain-injury-support/">
                  acquired brain injury condition page
                </Link>{' '}
                or explore our{' '}
                <Link href="/our-services/acquired-brain-injury-home-care/">ABI home care service</Link>.
              </p>
            </div>

            <div className="hub-articles">
              <p className="hub-articles-label">Articles in this collection</p>
              <h2>Brain Injury & Rehabilitation Guides</h2>

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

            {/* Referral hook — clinical cluster */}
            <div className="referral-hook">
              Healthcare professionals: learn about referring patients to Arcadia for ABI and rehabilitation
              support →{' '}
              <Link href="/for-professionals/">For Healthcare Professionals</Link>
            </div>
          </div>

          <aside className="hub-sidebar">
            <div className="sidebar-cta">
              <h3>Preparing for discharge?</h3>
              <p>We can often start a care assessment within 24–48 hours of contact.</p>
              <a href="tel:8449770050" className="sidebar-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red-sm">Book a Free Consultation</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Pages</div>
              <Link href="/conditions/acquired-brain-injury-support/" className="sidebar-link">ABI: What to Expect</Link>
              <Link href="/our-services/acquired-brain-injury-home-care/" className="sidebar-link">ABI Home Care Service</Link>
              <Link href="/our-services/rehabilitation-support/" className="sidebar-link">Rehabilitation Support</Link>
              <Link href="/our-services/hospital-discharge-support/" className="sidebar-link">Hospital Discharge Support</Link>
              <Link href="/for-professionals/" className="sidebar-link">For Healthcare Professionals</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Other Resource Clusters</div>
              <Link href="/resources/dementia-memory-care/" className="sidebar-link">Dementia & Memory Care</Link>
              <Link href="/resources/family-caregiver-support/" className="sidebar-link">Family Caregiver Support</Link>
              <Link href="/resources/navigating-home-care/" className="sidebar-link">Navigating Home Care</Link>
            </div>
          </aside>
        </div>

        <section className="hub-bottom-cta">
          <h2>Supporting Recovery at Home in Toronto</h2>
          <p>
            Arcadia works alongside rehabilitation teams across the GTA to support ABI recovery at home —
            from discharge day through long-term independence.
          </p>
          <a href="tel:8449770050" className="hub-bottom-cta-phone">(844) 977-0050</a>
          <div className="cta-buttons">
            <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            <Link href="/our-services/acquired-brain-injury-home-care/" className="btn-outline">Our ABI Care Service</Link>
          </div>
        </section>
      </main>
    </>
  )
}
