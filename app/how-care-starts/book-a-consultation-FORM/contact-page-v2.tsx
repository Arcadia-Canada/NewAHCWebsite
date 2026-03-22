// app/contact/page.tsx
// Decision-stage page — the destination for every "Book a Free Consultation"
// CTA button across the entire site
// Target keyword: "book home care consultation toronto" / "contact arcadia home care"
// Persona: family who has clicked through from any page on the site and is
// ready to make contact — they need to be received well, not sold to
// Tone: warm, clear, low-friction
// Schema: LocalBusiness + BreadcrumbList

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Book a Free Consultation | Contact Arcadia Home Care Toronto',
  description: 'Book a free home care consultation with Arcadia in Toronto and the GTA. Call us, email us, or fill in the form — we listen first and help you understand your options. No pressure, no obligation.',
  alternates: { canonical: 'https://arcadiahomecare.ca/contact/' },
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              'name': 'Arcadia Home Care',
              'telephone': '+18449770050',
              'email': 'info@arcadiahomecare.ca',
              'url': 'https://arcadiahomecare.ca',
              'address': {
                '@type': 'PostalAddress',
                'streetAddress': '302 Bay St.',
                'addressLocality': 'Toronto',
                'addressRegion': 'ON',
                'postalCode': 'M5H 0B6',
                'addressCountry': 'CA',
              },
              'openingHoursSpecification': {
                '@type': 'OpeningHoursSpecification',
                'dayOfWeek': ['Monday','Tuesday','Wednesday','Thursday','Friday'],
                'opens': '09:00',
                'closes': '17:00',
              },
              'areaServed': 'Toronto, Ontario, Canada',
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://arcadiahomecare.ca/' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Contact', 'item': 'https://arcadiahomecare.ca/contact/' },
              ],
            },
          ]),
        }}
      />

      <style>{`
        .contact-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }

        /* ── Hero ── */
        .hero { background: #1C2B3A; padding: 80px 24px 72px; text-align: center; }
        .hero-inner { max-width: 680px; margin: 0 auto; }
        .eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 14px; }
        .hero h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2.2rem, 5vw, 3.4rem); font-weight: 600; color: #fff; line-height: 1.15; margin-bottom: 18px; }
        .hero p { font-size: 1rem; color: rgba(255,255,255,0.68); line-height: 1.8; }

        /* ── Breadcrumb ── */
        .breadcrumb { background: #F7F3EE; border-bottom: 1px solid #E5E0D8; padding: 12px 24px; font-size: 13px; color: #6B7280; }
        .breadcrumb-inner { max-width: 1100px; margin: 0 auto; }
        .breadcrumb a { color: #1C2B3A; text-decoration: none; font-weight: 600; }
        .breadcrumb a:hover { color: #C8302A; }
        .breadcrumb span { margin: 0 8px; }

        /* ── Main two-column layout ── */
        .contact-body { max-width: 1100px; margin: 0 auto; padding: 72px 24px; display: grid; grid-template-columns: 1fr 1.1fr; gap: 64px; align-items: start; }
        @media (max-width: 900px) { .contact-body { grid-template-columns: 1fr; gap: 48px; } }

        /* ── Left column ── */
        .contact-info h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.7rem, 2.8vw, 2.4rem); font-weight: 600; color: #1C2B3A; line-height: 1.2; margin-bottom: 16px; }
        .contact-info > p { font-size: 0.9625rem; color: #6B7280; line-height: 1.8; margin-bottom: 32px; }

        .contact-methods { margin-bottom: 36px; }
        .contact-method { display: flex; align-items: flex-start; gap: 16px; padding: 18px 0; border-bottom: 1px solid #E5E0D8; }
        .contact-method:first-child { padding-top: 0; }
        .contact-method:last-child { border-bottom: none; }
        .method-icon { width: 44px; height: 44px; border-radius: 10px; background: #F7F3EE; border: 1px solid #E5E0D8; display: flex; align-items: center; justify-content: center; font-size: 19px; flex-shrink: 0; }
        .method-label { font-size: 11px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: #9CA3AF; margin-bottom: 3px; }
        .method-value { font-size: 15px; font-weight: 700; color: #1C2B3A; }
        .method-value a { color: #1C2B3A; text-decoration: none; transition: color 0.15s; }
        .method-value a:hover { color: #C8302A; }
        .method-note { font-size: 12.5px; color: #9CA3AF; margin-top: 3px; line-height: 1.5; }

        .expect-box { background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 12px; padding: 22px 26px; }
        .expect-box-title { font-size: 12px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: #1C2B3A; margin-bottom: 14px; }
        .expect-list { list-style: none; padding: 0; margin: 0; }
        .expect-list li { font-size: 0.9rem; color: #4B5563; line-height: 1.65; padding: 7px 0 7px 22px; position: relative; border-bottom: 1px solid #E5E0D8; }
        .expect-list li:last-child { border-bottom: none; }
        .expect-list li::before { content: '✓'; position: absolute; left: 0; top: 7px; font-size: 12px; font-weight: 700; color: #C8302A; }

        /* ── Right column — form card ── */
        .form-card { background: #fff; border: 1px solid #E5E0D8; border-radius: 16px; padding: 40px; box-shadow: 0 4px 24px rgba(28,43,58,0.06); }
        .form-title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.7rem; font-weight: 600; color: #1C2B3A; margin-bottom: 4px; }
        .form-subtitle { font-size: 0.875rem; color: #9CA3AF; margin-bottom: 28px; }

        .form-row { margin-bottom: 17px; }
        .form-row label { display: block; font-size: 13px; font-weight: 700; color: #1C2B3A; margin-bottom: 6px; }
        .form-row input,
        .form-row select,
        .form-row textarea {
          width: 100%; padding: 12px 14px; border: 1.5px solid #E5E0D8; border-radius: 8px;
          font-size: 14px; font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D;
          background: #FAFAF8; transition: border-color 0.15s, background 0.15s; box-sizing: border-box;
        }
        .form-row input:focus,
        .form-row select:focus,
        .form-row textarea:focus { outline: none; border-color: #1C2B3A; background: #fff; }
        .form-row input::placeholder,
        .form-row textarea::placeholder { color: #C4BDB5; }
        .form-row textarea { resize: vertical; min-height: 108px; }
        .form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 520px) { .form-grid-2 { grid-template-columns: 1fr; } }

        .urgency-row { display: flex; gap: 8px; }
        .urgency-btn {
          flex: 1; padding: 10px 10px; border: 1.5px solid #E5E0D8; border-radius: 8px;
          background: #FAFAF8; font-size: 12.5px; font-weight: 600; color: #6B7280;
          cursor: pointer; text-align: center; transition: all 0.15s;
          font-family: 'DM Sans', system-ui, sans-serif; line-height: 1.3;
        }
        .urgency-btn:hover { border-color: #1C2B3A; color: #1C2B3A; }
        .urgency-btn.selected { border-color: #C8302A; background: rgba(200,48,42,0.06); color: #C8302A; }

        .btn-submit {
          width: 100%; padding: 15px 24px; background: #C8302A; color: #fff;
          border: none; border-radius: 8px; font-size: 15px; font-weight: 700;
          font-family: 'DM Sans', system-ui, sans-serif; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: background 0.2s; margin-top: 6px;
        }
        .btn-submit:hover { background: #a82520; }
        .form-legal { font-size: 12px; color: #C4BDB5; text-align: center; margin-top: 10px; line-height: 1.5; }

        /* ── Locations band ── */
        .locations-band { background: #F7F3EE; border-top: 1px solid #E5E0D8; padding: 56px 24px; }
        .locations-inner { max-width: 1100px; margin: 0 auto; }
        .band-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 10px; }
        .band-heading { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 600; color: #1C2B3A; margin-bottom: 28px; }
        .locations-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        @media (max-width: 768px) { .locations-grid { grid-template-columns: repeat(2, 1fr); } }
        .loc-card { background: #fff; border: 1px solid #E5E0D8; border-radius: 10px; padding: 14px 16px; text-decoration: none; transition: border-color 0.15s, box-shadow 0.15s; }
        .loc-card:hover { border-color: #C8302A; box-shadow: 0 4px 12px rgba(28,43,58,0.08); }
        .loc-name { font-size: 14px; font-weight: 700; color: #1C2B3A; }
        .loc-region { font-size: 12px; color: #9CA3AF; margin-top: 2px; }

        /* ── Services band ── */
        .services-band { padding: 56px 24px; }
        .services-inner { max-width: 1100px; margin: 0 auto; }
        .services-intro { font-size: 0.9375rem; color: #6B7280; line-height: 1.75; margin-bottom: 28px; max-width: 640px; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        @media (max-width: 768px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .services-grid { grid-template-columns: 1fr; } }
        .svc-pill {
          display: flex; align-items: center; gap: 8px; background: #FAFAF8;
          border: 1px solid #E5E0D8; border-radius: 8px; padding: 12px 14px;
          text-decoration: none; font-size: 13px; font-weight: 600; color: #1C2B3A;
          transition: border-color 0.15s, color 0.15s;
        }
        .svc-pill:hover { border-color: #C8302A; color: #C8302A; }
        .svc-pill::before { content: '→'; color: #C8302A; font-size: 12px; flex-shrink: 0; }

        /* ── Referral strip ── */
        .referral-strip { background: #1C2B3A; padding: 56px 24px; }
        .referral-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr auto; gap: 40px; align-items: center; }
        @media (max-width: 768px) { .referral-inner { grid-template-columns: 1fr; } }
        .ref-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(200,48,42,0.9); margin-bottom: 8px; }
        .ref-heading { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 600; color: #fff; margin-bottom: 10px; line-height: 1.2; }
        .ref-body { font-size: 0.9375rem; color: rgba(255,255,255,0.6); line-height: 1.75; }
        .ref-actions { display: flex; flex-direction: column; gap: 10px; flex-shrink: 0; }
        .btn-white { background: #fff; color: #1C2B3A; padding: 13px 22px; border-radius: 8px; font-size: 14px; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; white-space: nowrap; transition: background 0.2s; }
        .btn-white:hover { background: #F7F3EE; }
        .btn-outline-white { background: transparent; color: #fff; padding: 13px 22px; border-radius: 8px; font-size: 14px; font-weight: 700; text-decoration: none; border: 1.5px solid rgba(255,255,255,0.3); display: inline-flex; align-items: center; gap: 8px; white-space: nowrap; transition: background 0.2s; }
        .btn-outline-white:hover { background: rgba(255,255,255,0.08); }
      `}</style>

      <main className="contact-page">

        {/* Hero */}
        <section className="hero">
          <div className="hero-inner">
            <p className="eyebrow">Toronto & GTA · Free Consultation</p>
            <h1>Book a Free Consultation</h1>
            <p>
              Call us, email us, or fill in the form below. We listen to what
              is happening and help you understand your options — no pressure,
              no obligation, no forms required before you call.
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <div className="breadcrumb-inner">
            <Link href="/">Home</Link><span>›</span>
            Contact
          </div>
        </nav>

        {/* Main layout */}
        <div className="contact-body">

          {/* Left — contact info */}
          <div className="contact-info">
            <h2>We are here when you are ready to talk</h2>
            <p>
              A single conversation typically answers more questions than an
              hour of research. Our team listens first — to what is happening,
              what has been tried, and what matters most — and helps you
              understand what support might look like before you commit to anything.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <div>
                  <div className="method-label">Call us directly</div>
                  <div className="method-value"><a href="tel:8449770050">(844) 977-0050</a></div>
                  <div className="method-note">
                    Mon–Fri, 9:00AM–5:00PM.<br />
                    For urgent situations outside office hours, please leave a voicemail
                    and we will return your call as quickly as possible.
                  </div>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">✉️</div>
                <div>
                  <div className="method-label">Email</div>
                  <div className="method-value">
                    <a href="mailto:info@arcadiahomecare.ca">info@arcadiahomecare.ca</a>
                  </div>
                  <div className="method-note">We aim to respond within one business day</div>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div>
                  <div className="method-label">Address</div>
                  <div className="method-value" style={{ cursor: 'default' }}>
                    302 Bay St., Toronto, ON M5H 0B6
                  </div>
                  <div className="method-note">Administrative office — care is delivered at your home</div>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">🏥</div>
                <div>
                  <div className="method-label">Professional referrals</div>
                  <div className="method-value">
                    <Link href="/referral-form/" style={{ color: '#C8302A', fontWeight: 700, textDecoration: 'none' }}>
                      Use our referral form →
                    </Link>
                  </div>
                  <div className="method-note">For case managers, discharge planners, and health professionals</div>
                </div>
              </div>
            </div>

            <div className="expect-box">
              <div className="expect-box-title">What happens when you get in touch</div>
              <ul className="expect-list">
                <li>We listen to what is happening — no questionnaire, no sales pitch</li>
                <li>We explain what types of support are likely to be most useful</li>
                <li>We give honest information about what publicly funded care covers</li>
                <li>We answer your questions about cost, caregivers, and process</li>
                <li>You decide whether and how to proceed — no pressure either way</li>
              </ul>
            </div>
          </div>

          {/* Right — form */}
          <div className="form-card">
            <div className="form-title">Book a Free Consultation</div>
            <div className="form-subtitle">Fill in the form and we will call you back. No obligation.</div>

            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="3f35a2f5-9c08-4e4c-9a5e-b9a56f24314d" />

              <div className="form-grid-2">
                <div className="form-row">
                  <label htmlFor="first_name">First name *</label>
                  <input type="text" id="first_name" name="first_name" required placeholder="Jane" />
                </div>
                <div className="form-row">
                  <label htmlFor="last_name">Last name *</label>
                  <input type="text" id="last_name" name="last_name" required placeholder="Smith" />
                </div>
              </div>

              <div className="form-row">
                <label htmlFor="phone">Phone number *</label>
                <input type="tel" id="phone" name="phone" required placeholder="(416) 555-0100" />
              </div>

              <div className="form-row">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" name="email" placeholder="jane@example.com" />
              </div>

              <div className="form-row">
                <label htmlFor="service">What type of support are you looking for?</label>
                <select id="service" name="service">
                  <option value="">— Select an option —</option>
                  <option value="dementia">Dementia & Alzheimer's Care</option>
                  <option value="abi">Acquired Brain Injury Care</option>
                  <option value="palliative">Palliative Home Care</option>
                  <option value="discharge">Hospital Discharge Support</option>
                  <option value="personal-support">Personal Support & Daily Living</option>
                  <option value="companion">Companion Care</option>
                  <option value="respite">Respite Care</option>
                  <option value="overnight">Overnight & 24-Hour Care</option>
                  <option value="rehabilitation">Rehabilitation Support</option>
                  <option value="case-management">Case Management</option>
                  <option value="housekeeping">Light Housekeeping</option>
                  <option value="downsizing">Downsizing & Transition Support</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              <div className="form-row">
                <label>How urgent is the need?</label>
                <div className="urgency-row">
                  {['Immediate', 'Within weeks', 'Planning ahead'].map((label, i) => (
                    <button
                      key={i}
                      type="button"
                      className="urgency-btn"
                      onClick={e => {
                        document.querySelectorAll('.urgency-btn').forEach(b => b.classList.remove('selected'))
                        ;(e.currentTarget as HTMLButtonElement).classList.add('selected')
                        const input = document.getElementById('urgency_hidden') as HTMLInputElement
                        if (input) input.value = label
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <input type="hidden" id="urgency_hidden" name="urgency" />
              </div>

              <div className="form-row">
                <label htmlFor="message">Brief description of the situation</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us a little about who needs care, where they are located, and what you are most concerned about..."
                />
              </div>

              <button type="submit" className="btn-submit">
                Request a Callback
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <p className="form-legal">
                We will be in touch as quickly as we can. Your information is never shared.
              </p>
            </form>
          </div>
        </div>

        {/* Locations */}
        <section className="locations-band">
          <div className="locations-inner">
            <p className="band-eyebrow">Where We Serve</p>
            <h2 className="band-heading">Home care across Toronto and the GTA</h2>
            <div className="locations-grid">
              {[
                { name: 'Toronto', region: 'City of Toronto', href: '/locations/toronto/' },
                { name: 'North York', region: 'City of Toronto', href: '/locations/toronto/north-york-home-care/' },
                { name: 'Scarborough', region: 'City of Toronto', href: '/locations/toronto/scarborough-home-care/' },
                { name: 'Etobicoke', region: 'City of Toronto', href: '/locations/toronto/etobicoke-home-care/' },
                { name: 'Markham', region: 'York Region', href: '/locations/york-region/markham-home-care/' },
                { name: 'Richmond Hill', region: 'York Region', href: '/locations/york-region/richmond-hill-home-care/' },
                { name: 'Mississauga', region: 'Peel Region', href: '/locations/peel-region/mississauga-home-care/' },
                { name: 'Durham Region', region: 'Durham', href: '/locations/durham-region/' },
                { name: 'Halton Region', region: 'Halton', href: '/locations/halton-region/' },
                { name: 'York Region', region: 'York', href: '/locations/york-region/' },
                { name: 'Peel Region', region: 'Peel', href: '/locations/peel-region/' },
                { name: 'GTA Wide', region: 'Greater Toronto Area', href: '/locations/' },
              ].map((loc, i) => (
                <Link key={i} href={loc.href} className="loc-card">
                  <div className="loc-name">{loc.name}</div>
                  <div className="loc-region">{loc.region}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="services-band">
          <div className="services-inner">
            <p className="band-eyebrow">What We Provide</p>
            <h2 className="band-heading">Services we can discuss in your consultation</h2>
            <p className="services-intro">
              Not sure which service fits your situation? That is what the
              consultation is for. Here is the full range of what Arcadia
              provides — select any to learn more before calling.
            </p>
            <div className="services-grid">
              {[
                { label: "Dementia & Alzheimer's Care", href: '/our-services/dementia-alzheimers-home-care/' },
                { label: 'Acquired Brain Injury Care', href: '/our-services/acquired-brain-injury-home-care/' },
                { label: 'Palliative Home Care', href: '/our-services/palliative-home-care/' },
                { label: 'Hospital Discharge Support', href: '/our-services/hospital-discharge-support/' },
                { label: 'Rehabilitation Support', href: '/our-services/rehabilitation-support/' },
                { label: 'Personal Support & Daily Living', href: '/our-services/personal-support-daily-living/' },
                { label: 'Respite Care', href: '/our-services/respite-care/' },
                { label: 'Overnight & 24-Hour Care', href: '/our-services/overnight-24-hour-care/' },
                { label: 'Companion Care', href: '/our-services/companion-care/' },
                { label: 'Case Management', href: '/our-services/case-management/' },
                { label: 'Light Housekeeping', href: '/our-services/light-housekeeping/' },
                { label: 'Downsizing & Transition Support', href: '/our-services/downsizing-transition-support/' },
              ].map((svc, i) => (
                <Link key={i} href={svc.href} className="svc-pill">{svc.label}</Link>
              ))}
            </div>
          </div>
        </section>

        {/* Professional referral strip */}
        <section className="referral-strip">
          <div className="referral-inner">
            <div>
              <p className="ref-eyebrow">For Health Professionals</p>
              <h2 className="ref-heading">Referring a Patient or Client to Arcadia</h2>
              <p className="ref-body">
                Case managers, discharge planners, occupational therapists, social
                workers, and physicians can refer directly to Arcadia using our
                professional referral form. We communicate clearly with the referring
                team about the plan in place and follow up as the situation develops.
              </p>
            </div>
            <div className="ref-actions">
              <Link href="/referral-form/" className="btn-white">Submit a Referral</Link>
              <a href="tel:8449770050" className="btn-outline-white">(844) 977-0050</a>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
