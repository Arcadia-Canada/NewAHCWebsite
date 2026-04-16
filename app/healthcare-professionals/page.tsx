import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedHero from '@/components/ui/AnimatedHero'

export const metadata: Metadata = {
  title: 'Professional Referrals | Arcadia Home Care | GTA',
  description: 'Information for discharge planners, social workers, and Ontario Health atHome coordinators referring patients to Arcadia Home Care across Toronto and the GTA.',
  alternates: {
    canonical: 'https://www.arcadiahomecare.ca/healthcare-professionals/',
  },
}

export default function HealthcareProfessionalsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Referring Patients to Arcadia Home Care',
              description: 'Information for healthcare professionals referring patients to Arcadia Home Care in Toronto and the GTA.',
              url: 'https://www.arcadiahomecare.ca/healthcare-professionals/',
              publisher: {
                '@type': 'Organization',
                name: 'Arcadia Home Care',
                url: 'https://www.arcadiahomecare.ca',
                telephone: '+18449770050',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'MedicalOrganization',
              name: 'Arcadia Home Care',
              url: 'https://www.arcadiahomecare.ca',
              telephone: '+18449770050',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '302 Bay Street',
                addressLocality: 'Toronto',
                addressRegion: 'Ontario',
                addressCountry: 'CA',
              },
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 43.6532,
                  longitude: -79.3832,
                },
                geoRadius: '50000',
              },
              medicalSpecialty: [
                'Dementia and Alzheimer\'s Care',
                'Acquired Brain Injury Rehabilitation',
                'Palliative Care',
                'Post-Surgical Home Care',
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.arcadiahomecare.ca/' },
                { '@type': 'ListItem', position: 2, name: 'Healthcare Professionals', item: 'https://www.arcadiahomecare.ca/healthcare-professionals/' },
              ],
            },
          ]),
        }}
      />

      <style>{`
        .pro-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }

        .btn-red { background: #C8302A; color: #fff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; display: inline-flex; align-items: center; gap: 8px; }
        .btn-outline-light { border: 1.5px solid rgba(255,255,255,0.5); background: transparent; color: #fff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; display: inline-flex; }

        .pro-trust { background: #F7F3EE; border-bottom: 1px solid #E5E0D8; padding: 14px 24px; display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; }
        .pro-trust-item { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 600; color: #1C2B3A; }

        .pro-body { max-width: 1100px; margin: 0 auto; padding: 72px 24px; display: grid; grid-template-columns: 1fr 320px; gap: 64px; align-items: start; }
        @media (max-width: 900px) { .pro-body { grid-template-columns: 1fr; } }

        .pro-content h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 600; color: #1C2B3A; margin: 48px 0 16px; line-height: 1.25; }
        .pro-content h2:first-child { margin-top: 0; }
        .pro-content p { font-size: 1rem; color: #4B5563; line-height: 1.85; margin-bottom: 18px; }
        .pro-content a { color: #C8302A; font-weight: 600; text-decoration: underline; text-decoration-color: rgba(200,48,42,0.3); text-underline-offset: 3px; }

        .referrer-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin: 24px 0 36px; }
        .referrer-card { background: #F7F3EE; border: 1px solid #E5E0D8; border-radius: 10px; padding: 20px; }
        .referrer-card-icon { font-size: 24px; margin-bottom: 10px; display: block; }
        .referrer-card-title { font-size: 14px; font-weight: 700; color: #1C2B3A; margin-bottom: 4px; }
        .referrer-card-desc { font-size: 13px; color: #6B7280; line-height: 1.5; }

        .population-list { list-style: none; padding: 0; margin: 0 0 28px; }
        .population-list li { font-size: 0.9625rem; color: #4B5563; line-height: 1.7; padding: 10px 0 10px 22px; position: relative; border-bottom: 1px solid #F0EBE3; }
        .population-list li:last-child { border-bottom: none; }
        .population-list li::before { content: ''; position: absolute; left: 0; top: 18px; width: 7px; height: 7px; border-radius: 50%; background: #C8302A; }
        .population-list li strong { color: #1C2B3A; }

        .process-steps { margin: 24px 0 36px; }
        .process-step { display: flex; gap: 20px; align-items: flex-start; padding: 20px 0; border-bottom: 1px solid #F0EBE3; }
        .process-step:last-child { border-bottom: none; }
        .step-number { flex-shrink: 0; width: 36px; height: 36px; background: #C8302A; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; }
        .step-content h3 { font-size: 15px; font-weight: 700; color: #1C2B3A; margin-bottom: 4px; }
        .step-content p { font-size: 14px; color: #6B7280; line-height: 1.6; margin: 0; }

        .credentials-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 24px 0 36px; }
        @media (max-width: 600px) { .credentials-grid { grid-template-columns: 1fr; } }
        .credential-item { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 10px; padding: 18px 20px; }
        .credential-item-title { font-size: 13px; font-weight: 700; color: #1C2B3A; margin-bottom: 4px; }
        .credential-item-desc { font-size: 13px; color: #6B7280; line-height: 1.5; }

        .referral-cta-box { background: #1C2B3A; border-radius: 14px; padding: 36px; margin: 48px 0; text-align: center; }
        .referral-cta-box h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 600; color: #fff; margin-bottom: 12px; }
        .referral-cta-box p { font-size: 0.9375rem; color: rgba(255,255,255,0.8); line-height: 1.75; margin-bottom: 24px; }
        .referral-cta-box .phone { font-size: 1.6rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 20px; }
        .referral-cta-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .btn-red-lg { background: #C8302A; color: #ffffff !important; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; }
        .btn-outline-lg { border: 1.5px solid rgba(255,255,255,0.4); background: transparent; color: #ffffff !important; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; }

        .pro-sidebar { position: sticky; top: 100px; }
        .sidebar-cta { background: #1C2B3A; border-radius: 14px; padding: 28px; text-align: center; margin-bottom: 20px; }
        .sidebar-cta h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.3rem; font-weight: 600; color: #fff; margin-bottom: 8px; }
        .sidebar-cta p { font-size: 0.875rem; color: rgba(255,255,255,0.7); margin-bottom: 16px; line-height: 1.65; }
        .sidebar-phone { font-size: 1.2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 12px; }
        .btn-red-sm { background: #C8302A; color: #fff; padding: 11px 20px; border-radius: 8px; font-size: 13px; font-weight: 700; text-decoration: none; display: block; text-align: center; }
        .sidebar-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 14px; padding: 28px; margin-bottom: 20px; }
        .sidebar-card-title { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #C8302A; margin-bottom: 16px; }
        .sidebar-link { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: #1C2B3A; text-decoration: none; padding: 10px 0; border-bottom: 1px solid #F0EBE3; transition: color 0.15s; }
        .sidebar-link:last-child { border-bottom: none; }
        .sidebar-link:hover { color: #C8302A; }
        .sidebar-link::before { content: '→'; color: #C8302A; font-size: 13px; }

        .info-box { background: #EEF2F7; border-radius: 10px; padding: 20px 24px; margin: 28px 0; font-size: 0.9rem; color: #4B5563; line-height: 1.75; }
        .info-box strong { color: #1C2B3A; }
      `}</style>

      <main className="pro-page">

        {/* Hero */}
        <AnimatedHero
          eyebrow="For Healthcare Professionals"
          title={<>Referring Patients to<br />Arcadia Home Care</>}
          subtitle="Arcadia partners with discharge planners, social workers, Ontario Health atHome coordinators, and specialist teams across Toronto and the GTA to provide seamless transitions from hospital or clinic to home."
          imageSrc="/images/heroes/healthcare-professionals.jpg"
          imageAlt="Healthcare team coordinating patient referral"
        >
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="tel:+18449770050" className="btn-red" aria-label="Call Arcadia for professional referrals">
              📞 (844) 977-0050
            </a>
            <Link href="/referral-form/" className="btn-outline-light">
              Submit a Referral →
            </Link>
          </div>
        </AnimatedHero>

        {/* Trust bar */}
        <div className="pro-trust">
          <div className="pro-trust-item">🏥 Hospital discharge specialists</div>
          <div className="pro-trust-item">⚡ 24–48 hr assessment turnaround</div>
          <div className="pro-trust-item">📋 Care coordination with your team</div>
          <div className="pro-trust-item">🩺 Clinically informed caregivers</div>
        </div>

        {/* Body */}
        <div className="pro-body">
          <div className="pro-content">

            <h2>Who Refers Patients to Arcadia</h2>
            <p>
              We work with a wide range of healthcare professionals across Toronto and the GTA who need
              reliable, clinically informed home care for their patients. Our referral process is
              straightforward and our intake team responds promptly.
            </p>

            <div className="referrer-grid">
              <div className="referrer-card">
                <span className="referrer-card-icon">🏥</span>
                <div className="referrer-card-title">Discharge Planners</div>
                <div className="referrer-card-desc">Coordinating safe transitions from acute care to home</div>
              </div>
              <div className="referrer-card">
                <span className="referrer-card-icon">👩‍⚕️</span>
                <div className="referrer-card-title">Social Workers</div>
                <div className="referrer-card-desc">Supporting clients with complex home care needs</div>
              </div>
              <div className="referrer-card">
                <span className="referrer-card-icon">📋</span>
                <div className="referrer-card-title">Ontario Health atHome</div>
                <div className="referrer-card-desc">Coordinating alongside publicly funded care allocations</div>
              </div>
              <div className="referrer-card">
                <span className="referrer-card-icon">🧠</span>
                <div className="referrer-card-title">Specialist Teams</div>
                <div className="referrer-card-desc">Neurology, geriatrics, palliative, rehabilitation</div>
              </div>
              <div className="referrer-card">
                <span className="referrer-card-icon">👨‍⚕️</span>
                <div className="referrer-card-title">Family Physicians</div>
                <div className="referrer-card-desc">Supporting patients with increasing home care needs</div>
              </div>
              <div className="referrer-card">
                <span className="referrer-card-icon">🤝</span>
                <div className="referrer-card-title">Case Managers</div>
                <div className="referrer-card-desc">Coordinating multi-service care plans at home</div>
              </div>
            </div>

            <h2>Clinical Populations We Support</h2>
            <p>
              Arcadia specializes in complex, clinically informed home care. Our caregivers receive
              condition-specific training and are supported by a clinical team that understands the
              populations we serve.
            </p>

            <ul className="population-list">
              <li><strong>Dementia and Alzheimer's disease</strong> — behavioural support, redirection, family communication, safety monitoring</li>
              <li><strong>Acquired brain injury (ABI)</strong> — rehabilitation support, cognitive assistance, coordination with OT and PT teams</li>
              <li><strong>Motor vehicle accident rehabilitation</strong> — post-acute support, functional recovery, coordination with insurance case managers and rehab teams</li>
              <li><strong>Palliative and end-of-life care</strong> — comfort-focused care, dignity, family support, symptom management assistance</li>
              <li><strong>Post-surgical and hospital discharge</strong> — wound monitoring, medication reminders, mobility support, fall prevention</li>
              <li><strong>Stroke recovery</strong> — functional support, rehabilitation reinforcement, communication assistance</li>
              <li><strong>Parkinson's disease</strong> — mobility support, safety, daily routine assistance</li>
              <li><strong>Frailty and fall risk</strong> — supervised mobility, home safety assessment support, daily living assistance</li>
            </ul>

            <h2>Our Intake and Communication Process</h2>
            <p>
              We know that timely transitions matter. Here is what to expect when you refer a patient
              to Arcadia:
            </p>

            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Submit a referral</h3>
                  <p>Use our online referral form or call directly. We need the patient's name, contact,
                  location, and a brief clinical summary. A diagnosis is helpful but not required to start.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>We contact the family within 24 hours</h3>
                  <p>Our intake team reaches out to the family or substitute decision-maker to schedule
                  a care assessment. For urgent discharges, we prioritize same-day or next-day contact.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Care assessment</h3>
                  <p>A senior member of our team meets with the patient and family to assess needs,
                  review the clinical summary, and develop a care plan that integrates with existing
                  services and your recommendations.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Caregiver match and care begins</h3>
                  <p>We match a caregiver based on clinical needs, schedule, and personality fit.
                  Most families have care in place within 48–72 hours of initial contact.</p>
                </div>
              </div>
              <div className="process-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Ongoing communication</h3>
                  <p>We keep families — and referring professionals when appropriate — informed of
                  significant changes. Our care managers are reachable by phone for clinical questions.
                  Care updates and incident reports can be shared with referring professionals when
                  appropriate and with patient consent.</p>
                </div>
              </div>
            </div>

            <div className="info-box">
              <strong>For urgent hospital discharges:</strong> Call us directly at{' '}
              <a href="tel:+18449770050">(844) 977-0050</a> and identify yourself as a discharge planner.
              We will prioritize your referral and aim to have a care assessment completed before
              or on the day of discharge.
            </div>

            <h2>Caregiver Credentialing and Training Standards</h2>
            <p>
              All Arcadia caregivers go through a rigorous hiring and training process before being
              placed with a client:
            </p>

            <div className="credentials-grid">
              <div className="credential-item">
                <div className="credential-item-title">Police Reference Check</div>
                <div className="credential-item-desc">Vulnerable sector screening required for all caregivers</div>
              </div>
              <div className="credential-item">
                <div className="credential-item-title">PSW Certification</div>
                <div className="credential-item-desc">Personal Support Worker training or equivalent clinical background</div>
              </div>
              <div className="credential-item">
                <div className="credential-item-title">CPR & First Aid</div>
                <div className="credential-item-desc">Current certification maintained for all active caregivers</div>
              </div>
              <div className="credential-item">
                <div className="credential-item-title">Condition-Specific Training</div>
                <div className="credential-item-desc">Dementia care, ABI support, palliative care, fall prevention</div>
              </div>
              <div className="credential-item">
                <div className="credential-item-title">Reference Verification</div>
                <div className="credential-item-desc">Professional references checked and verified before placement</div>
              </div>
              <div className="credential-item">
                <div className="credential-item-title">Ongoing Supervision</div>
                <div className="credential-item-desc">Regular check-ins and performance reviews by care management team</div>
              </div>
            </div>

            <h2>How to Refer a Patient to Home Care in Toronto</h2>
            <p>
              If you're a healthcare professional coordinating a patient's discharge or transition to
              community care in Toronto, referring to a private home care agency like Arcadia works
              alongside — not instead of — Ontario Health atHome (publicly funded) services.
            </p>
            <p>
              Most patients benefit from a combination of both: publicly funded hours through Ontario
              Health atHome cover a baseline of care, while private home care fills the gaps in hours,
              continuity, and specialized support. Arcadia can work within whatever publicly funded
              allocation your patient receives.
            </p>
            <p>
              To refer a patient to home care in Toronto, the simplest path is to contact us directly
              with a brief clinical summary. We handle the rest — family contact, assessment scheduling,
              care planning, and caregiver matching. No lengthy referral paperwork required.
            </p>
            <p>
              For urgent same-day or next-day discharge needs across the GTA, call{' '}
              <a href="tel:+18449770050">(844) 977-0050</a> and identify yourself as a referring professional.
            </p>

            {/* Referral CTA box */}
            <div className="referral-cta-box">
              <h2>Ready to Refer a Patient?</h2>
              <p>
                Use our online referral form for a complete intake, or call us directly for urgent
                situations. Our team is available Monday–Friday, 9AM–5PM, with on-call support
                for urgent discharge needs.
              </p>
              <a href="tel:+18449770050" className="phone" aria-label="Call Arcadia for professional referrals">
                (844) 977-0050
              </a>
              <div className="referral-cta-buttons">
                <Link href="/referral-form/" className="btn-red-lg" style={{ color: '#ffffff' }}>Submit a Referral Form</Link>
                <a href="tel:+18449770050" className="btn-outline-lg" style={{ color: '#ffffff' }} aria-label="Call Arcadia now">Call Now</a>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="pro-sidebar">
            <div className="sidebar-cta">
              <h3>Refer a patient</h3>
              <p>Call directly or use our referral form. We respond within 24 hours.</p>
              <a href="tel:+18449770050" className="sidebar-phone" aria-label="Call Arcadia for referrals">(844) 977-0050</a>
              <Link href="/referral-form/" className="btn-red-sm">Submit Referral Form</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Clinical Services</div>
              <Link href="/our-services/dementia-alzheimers-home-care/" className="sidebar-link">Dementia & Alzheimer's Care</Link>
              <Link href="/our-services/acquired-brain-injury-home-care/" className="sidebar-link">Acquired Brain Injury Care</Link>
              <Link href="/our-services/palliative-home-care/" className="sidebar-link">Palliative Home Care</Link>
              <Link href="/our-services/hospital-discharge-support/" className="sidebar-link">Hospital Discharge Support</Link>
              <Link href="/our-services/rehabilitation-support/" className="sidebar-link">Rehabilitation Support</Link>
              <Link href="/our-services/" className="sidebar-link">All 12 Services</Link>
            </div>

            <div className="sidebar-card">
              <div className="sidebar-card-title">Locations We Serve</div>
              <Link href="/locations/toronto/" className="sidebar-link">Toronto</Link>
              <Link href="/locations/toronto/north-york-home-care/" className="sidebar-link">North York</Link>
              <Link href="/locations/toronto/scarborough-home-care/" className="sidebar-link">Scarborough</Link>
              <Link href="/locations/toronto/etobicoke-home-care/" className="sidebar-link">Etobicoke</Link>
              <Link href="/locations/" className="sidebar-link">Full GTA Coverage</Link>
            </div>
          </aside>
        </div>

      </main>
    </>
  )
}
