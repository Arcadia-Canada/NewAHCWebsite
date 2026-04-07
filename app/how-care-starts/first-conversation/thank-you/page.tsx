import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You | First Conversation | Arcadia Home Care',
  description:
    'Thank you for contacting Arcadia Home Care. We have received your consultation request and will follow up shortly.',
  alternates: {
    canonical:
      'https://www.arcadiahomecare.ca/how-care-starts/first-conversation/thank-you/',
  },
}

export default function FirstConversationThankYouPage() {
  return (
    <>
      <style>{`
        .page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }

        .hero { background: #1C2B3A; padding: 96px 24px 80px; }
        .hero-inner { max-width: 760px; margin: 0 auto; text-align: center; }
        .eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 14px; }
        .hero h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 600; color: #fff; line-height: 1.15; margin-bottom: 18px; }
        .hero p { font-size: 1.05rem; color: rgba(255,255,255,0.72); line-height: 1.8; max-width: 640px; margin: 0 auto 30px; }

        .hero-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .btn-red { background: #C8302A; color: #fff; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; transition: all 0.2s; display: inline-flex; align-items: center; justify-content: center; }
        .btn-red:hover { background: #a82520; }
        .btn-outline { background: transparent; color: #fff; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; border: 1.5px solid rgba(255,255,255,0.35); transition: all 0.2s; display: inline-flex; align-items: center; justify-content: center; }
        .btn-outline:hover { background: rgba(255,255,255,0.1); }

        .breadcrumb { background: #F7F3EE; border-bottom: 1px solid #E5E0D8; padding: 12px 24px; font-size: 13px; color: #6B7280; }
        .breadcrumb-inner { max-width: 1100px; margin: 0 auto; }
        .breadcrumb a { color: #1C2B3A; text-decoration: none; font-weight: 600; }
        .breadcrumb a:hover { color: #C8302A; }
        .breadcrumb span { margin: 0 8px; }

        .content { max-width: 1100px; margin: 0 auto; padding: 72px 24px; }
        .thank-card { background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 18px; padding: 36px 32px; margin-bottom: 24px; }
        .thank-card h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.8rem, 3vw, 2.5rem); color: #1C2B3A; margin-bottom: 12px; }
        .thank-card p { font-size: 1rem; color: #4B5563; line-height: 1.8; margin-bottom: 14px; }

        .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
        @media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }

        .info-card { background: #FFFFFF; border: 1px solid #E5E0D8; border-radius: 16px; padding: 24px; }
        .info-card-title { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #C8302A; margin-bottom: 12px; }
        .info-card h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.5rem; color: #1C2B3A; margin-bottom: 10px; }
        .info-card p { font-size: 0.95rem; color: #4B5563; line-height: 1.75; margin: 0; }

        .links-box { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 16px; padding: 28px; margin-top: 24px; }
        .links-title { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #C8302A; margin-bottom: 16px; }
        .link-list { display: flex; flex-wrap: wrap; gap: 10px; }
        .pill-link { color: #1C2B3A; text-decoration: none; border: 1px solid #E5E0D8; border-radius: 100px; padding: 10px 14px; font-size: 14px; font-weight: 600; background: #fff; }
        .pill-link:hover { color: #C8302A; border-color: #D8CBB9; }

        .bottom-cta { background: #1C2B3A; padding: 76px 24px; text-align: center; margin-top: 72px; }
        .bottom-cta h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; color: #fff; max-width: 680px; margin: 0 auto 14px; line-height: 1.2; }
        .bottom-cta p { color: rgba(255,255,255,0.68); font-size: 1rem; max-width: 560px; margin: 0 auto 28px; line-height: 1.8; }
        .bottom-phone { font-size: 2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 18px; font-family: 'Cormorant Garamond', Georgia, serif; }
        .cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
      `}</style>

      <main className="page">
        <section className="hero">
          <div className="hero-inner">
            <p className="eyebrow">Thank You</p>
            <h1>Your consultation request has been sent.</h1>
            <p>
              We have received your message and a member of the Arcadia team
              will follow up with you shortly. This first step is simply about
              understanding your situation and helping you think clearly about
              what support may be needed.
            </p>
            <div className="hero-actions">
              <a href="tel:8449770050" className="btn-red">
                Call (844) 977-0050
              </a>
              <Link href="/how-care-starts/" className="btn-outline">
                See All Steps
              </Link>
            </div>
          </div>
        </section>

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="breadcrumb-inner">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/how-care-starts/">How Care Starts</Link>
            <span>›</span>
            <Link href="/how-care-starts/first-conversation/">First Conversation</Link>
            <span>›</span>
            Thank You
          </div>
        </nav>

        <section className="content">
          <div className="thank-card">
            <h2>What happens next</h2>
            <p>
              A member of our team will review your request and contact you
              within one business day. If your situation is urgent, including
              a recent hospital discharge or a sudden change in safety at home,
              please call us directly so we can respond more quickly.
            </p>
            <p>
              When we speak, you do not need to have everything organized.
              We will help you talk through what is happening, what your options
              are, and what the most sensible next step may be.
            </p>
          </div>

          <div className="grid">
            <div className="info-card">
              <div className="info-card-title">Step 1</div>
              <h3>We review your request</h3>
              <p>
                We look at the information you shared so we can understand the
                situation, urgency, and type of support you may need.
              </p>
            </div>

            <div className="info-card">
              <div className="info-card-title">Step 2</div>
              <h3>We contact you</h3>
              <p>
                We follow up to have the first conversation, answer your
                questions, and help you understand what care may look like.
              </p>
            </div>

            <div className="info-card">
              <div className="info-card-title">Step 3</div>
              <h3>You decide the next step</h3>
              <p>
                If it makes sense to continue, the next stage is usually a care
                assessment. If not, you still leave the call better informed.
              </p>
            </div>
          </div>

          <div className="links-box">
            <div className="links-title">Helpful pages</div>
            <div className="link-list">
              <Link href="/how-care-starts/care-assessment/" className="pill-link">
                Care Assessment
              </Link>
              <Link href="/how-care-starts/matching-caregivers/" className="pill-link">
                Caregiver Matching
              </Link>
              <Link href="/our-services/" className="pill-link">
                Our Services
              </Link>
              <Link href="/conditions/" className="pill-link">
                Conditions We Support
              </Link>
              <Link href="/contact/" className="pill-link">
                Contact Page
              </Link>
            </div>
          </div>
        </section>

        <section className="bottom-cta">
          <p className="eyebrow" style={{ textAlign: 'center', color: '#C8302A' }}>
            Need a faster response?
          </p>
          <h2>If the situation feels urgent, call us directly.</h2>
          <p>
            We can often move more quickly when there is a discharge timeline,
            a new diagnosis, or an immediate safety concern at home.
          </p>
          <a href="tel:8449770050" className="bottom-phone">
            (844) 977-0050
          </a>
          <div className="cta-actions">
            <a href="tel:8449770050" className="btn-red">
              Call Now
            </a>
            <Link href="/how-care-starts/first-conversation/" className="btn-outline">
              Back to First Conversation
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}