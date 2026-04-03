import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Family Caregiver Support Resources | Arcadia Home Care',
  description: 'Guides for Toronto family caregivers navigating burnout, sibling disagreements, emotional strain, and how to share the weight of caring for an aging parent.',
  alternates: {
    canonical: 'https://www.arcadiahomecare.ca/resources/family-caregiver-support/',
  },
}

const articles = [
  {
    title: 'Caregiver Burnout: Warning Signs and What to Do',
    href: '/resources/family-caregiver-support/caregiver-burnout-warning-signs/',
    description: "How to recognize when you've passed your limit — and what options exist before you reach a crisis point.",
    status: 'live',
  },
  {
    title: 'Balancing Work and Caregiving for an Aging Parent',
    href: '/resources/family-caregiver-support/balancing-work-and-caregiving/',
    description: 'Practical strategies for adult children managing jobs, families, and a parent who needs increasing support.',
    status: 'coming',
  },
  {
    title: "When Siblings Disagree About a Parent's Care",
    href: '/resources/family-caregiver-support/siblings-disagree-parent-care/',
    description: 'Why family conflict around caregiving is common — and how to move forward without damaging relationships.',
    status: 'coming',
  },
  {
    title: 'The Emotional Impact of Caring for Aging Parents',
    href: '/resources/family-caregiver-support/emotional-impact-caregiving/',
    description: 'Grief, guilt, resentment, love — the emotional complexity of caregiving and how to hold it all.',
    status: 'coming',
  },
  {
    title: 'How Families Can Share Care Responsibilities',
    href: '/resources/family-caregiver-support/sharing-care-responsibilities/',
    description: 'A guide to dividing tasks fairly among family members, including those who live far away.',
    status: 'coming',
  },
]

export default function FamilyCaregiverSupportHub() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Family Caregiver Support Resources',
              description: 'Guides for Toronto family caregivers navigating burnout, sibling conflict, and emotional strain.',
              url: 'https://www.arcadiahomecare.ca/resources/family-caregiver-support/',
              publisher: {
                '@type': 'Organization',
                name: 'Arcadia Home Care',
                url: 'https://www.arcadiahomecare.ca',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.arcadiahomecare.ca/' },
                { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.arcadiahomecare.ca/resources/' },
                { '@type': 'ListItem', position: 3, name: 'Family Caregiver Support', item: 'https://www.arcadiahomecare.ca/resources/family-caregiver-support/' },
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
            <p className="hub-eyebrow">Resource Centre — Family Caregiver Support</p>
            <h1>Support for Family Caregivers in Toronto</h1>
            <p>
              Caring for an aging parent is one of the most meaningful things you can do — and one of the most
              exhausting. These guides are written for adult children in the GTA who are managing their parent's
              care, often while balancing work, their own families, and their own emotional limits.
            </p>
          </div>
        </section>

        <div className="hub-body">
          <div>
            <div className="hub-intro">
              <p>
                Family caregiving in Canada is often invisible labour. An estimated 8 million Canadians provide
                unpaid care to a family member — and the majority of that weight falls on adult children,
                particularly daughters. In Toronto's fast-paced, expensive environment, the pressure is acute.
              </p>
              <p>
                Burnout is not a personal failure. It's a predictable outcome when the demands of caregiving
                exceed the support available. These guides are here to help you recognize when you're
                approaching your limit — and to lay out your options before a crisis forces the decision.
              </p>
              <p>
                If respite or regular support would help right now, explore{' '}
                <Link href="/our-services/respite-care/">Arcadia's respite care service</Link> or read more
                about{' '}
                <Link href="/conditions/caregiver-burnout-support/">
                  caregiver burnout and how to find support
                </Link>
                .
              </p>
            </div>

            <div className="hub-articles">
              <p className="hub-articles-label">Articles in this collection</p>
              <h2>Family Caregiver Support Guides</h2>

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
                <strong style={{ color: '#1C2B3A' }}>When a parent resists help:</strong> One of the most
                common challenges family caregivers face. Our article{' '}
                <Link href="/resources/navigating-home-care/when-a-parent-resists-home-care/" style={{ color: '#C8302A', fontWeight: 600 }}>
                  When a Parent Resists Home Care
                </Link>{' '}
                covers this in depth — including dementia-specific refusal.
              </p>
            </div>
          </div>

          <aside className="hub-sidebar">
            <div className="sidebar-cta">
              <h3>Feeling overwhelmed?</h3>
              <p>Talk to our team about respite options. No obligation — we listen first.</p>
              <a href="tel:8449770050" className="sidebar-phone">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red-sm">Book a Free Consultation</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Pages</div>
              <Link href="/conditions/caregiver-burnout-support/" className="sidebar-link">Caregiver Burnout Support</Link>
              <Link href="/our-services/respite-care/" className="sidebar-link">Respite Care</Link>
              <Link href="/our-services/companion-care/" className="sidebar-link">Companion Care</Link>
              <Link href="/how-care-starts/" className="sidebar-link">How Care Starts</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Other Resource Clusters</div>
              <Link href="/resources/dementia-memory-care/" className="sidebar-link">Dementia & Memory Care</Link>
              <Link href="/resources/navigating-home-care/" className="sidebar-link">Navigating Home Care</Link>
              <Link href="/resources/brain-injury-rehabilitation/" className="sidebar-link">Brain Injury & Rehab</Link>
            </div>
          </aside>
        </div>

        <section className="hub-bottom-cta">
          <h2>You Don't Have to Carry This Alone</h2>
          <p>
            Arcadia works alongside family caregivers across Toronto — providing the regular support that makes
            it possible to show up for your parent without losing yourself.
          </p>
          <a href="tel:8449770050" className="hub-bottom-cta-phone">(844) 977-0050</a>
          <div className="cta-buttons">
            <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            <Link href="/our-services/respite-care/" className="btn-outline">Explore Respite Care</Link>
          </div>
        </section>
      </main>
    </>
  )
}
