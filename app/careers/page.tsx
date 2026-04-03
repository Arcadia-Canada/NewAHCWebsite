// app/careers/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers in Home Care | Join Our Team | Arcadia Home Care',
  description: 'Build a meaningful career with Arcadia Home Care. We are hiring PSWs, Registered Nurses, and Rehabilitation Support Workers across the GTA. Flexible schedules, competitive pay, ongoing training.',
  alternates: { canonical: 'https://www.arcadiahomecare.ca/careers/' },
}

const roles = [
  {
    title: 'Personal Support Worker',
    shortTitle: 'PSW',
    href: '/pre-hire/',
    external: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="9" r="5" stroke="#C8302A" strokeWidth="1.8"/>
        <path d="M4 24c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#C8302A" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    tag: 'Most In Demand',
    description: 'Work one-on-one with seniors and individuals with complex needs in the comfort of their homes. Provide compassionate personal care, companionship, meal preparation, and daily living support.',
    highlights: [
      'Flexible morning, afternoon, evening, and overnight shifts',
      'Competitive hourly rates above industry average',
      'Careful client matching based on personality and language',
      'High-quality orientation and ongoing training provided',
    ],
    requirements: [
      'PSW certificate from an accredited Ontario program',
      'Current CPR/First Aid certification',
      'Vulnerable Sector Police Check',
      'Warm, empathetic, and patient nature',
    ],
  },
  {
    title: 'Registered Nurse / Registered Practical Nurse',
    shortTitle: 'RN / RPN',
    href: '/pre-hire/',
    external: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="11" y="3" width="6" height="22" rx="3" stroke="#C8302A" strokeWidth="1.8"/>
        <rect x="3" y="11" width="22" height="6" rx="3" stroke="#C8302A" strokeWidth="1.8"/>
      </svg>
    ),
    tag: 'Clinical Role',
    description: 'Lead clinical oversight and quality assurance for our client care teams. Evaluate care delivery, participate in care conferences, and ensure our high standards are met across every client file.',
    highlights: [
      'Collaborative environment with a strong management team',
      'Above-average employee retention — our nurses stay',
      'Ongoing professional development opportunities',
      'Work with complex cases including dementia, ABI, and palliative',
      'Flexible scheduling that respects your lifestyle',
    ],
    requirements: [
      'Current registration in good standing with CNO',
      'Current Basic Cardiac Life Support (BCLS) certification',
      'Experience in community or home care preferred',
      'Strong communication and documentation skills',
    ],
  },
  {
    title: 'Rehabilitation Support Worker',
    shortTitle: 'RSW',
    href: '/pre-hire/',
    external: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M8 20l4-8 4 8" stroke="#C8302A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.5 17h5" stroke="#C8302A" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="20" cy="8" r="3" stroke="#C8302A" strokeWidth="1.8"/>
        <path d="M20 11v6" stroke="#C8302A" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    tag: 'Specialist Role',
    description: 'Help clients reach their rehabilitation goals following brain injury, accident, or illness. Work within community rehabilitation programs supervised by licensed healthcare professionals.',
    highlights: [
      'Arcadia has served brain injury clients for over 16 years',
      'Many of our RSWs have been with us since the beginning',
      'Solid in-house training roadmap and mentorship',
      'Work alongside OTs, physiotherapists, social workers, and case managers',
      'Energetic, client-centered team environment',
    ],
    requirements: [
      'Post-secondary education in rehabilitation, kinesiology, or related field',
      'Experience with ABI, spinal cord injury, or mental health preferred',
      'Current CPR/First Aid certification',
      'Enthusiastic, creative, and professional work ethic',
    ],
  },
]

const employeeQuotes = [
  {
    quote: "I love that I have the freedom to choose clients that fit my availability. I've already recommended Arcadia to everyone who has asked where I work.",
    role: 'PSW · 4 months',
  },
  {
    quote: "The management team is very supportive and keeps open communication. They work with my availability and allow a flexible schedule.",
    role: 'PSW · 2 years',
  },
  {
    quote: "Whenever I have an urgent matter and need to swap a shift, they always try their best to help. They look out for their employees as well as their clients.",
    role: 'PSW · Since 2019',
  },
  {
    quote: "Hands down one of the best management teams. Pay rate is competitive and they work with your schedule.",
    role: 'Nursing Student / PSW',
  },
]

const benefits = [
  { icon: '🕐', title: 'Flexible Scheduling', body: 'Morning, afternoon, evening, and overnight shifts designed around your life.' },
  { icon: '📚', title: 'Ongoing Training', body: 'High-quality orientation and continuous education to advance your skills.' },
  { icon: '🤝', title: 'Supportive Team', body: 'A management team that listens, communicates, and genuinely cares about staff.' },
  { icon: '💰', title: 'Competitive Pay', body: 'Above-industry-average compensation reflecting your skill and experience.' },
  { icon: '🌍', title: 'Diverse Community', body: 'A multilingual team serving clients across cultures — Tagalog, Hindi, Farsi, Mandarin, and more.' },
]

export default function CareersPage() {
  return (
    <>
      <style>{`
        .careers-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }

        /* Hero */
        .careers-hero {
          background: #1C2B3A;
          padding: 96px 24px 80px;
          text-align: center;
        }
        .careers-hero-eyebrow {
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #C8302A; margin-bottom: 16px;
        }
        .careers-hero h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 600; color: #fff; line-height: 1.1;
          max-width: 800px; margin: 0 auto 20px;
        }
        .careers-hero p {
          font-size: 1.1rem; color: rgba(255,255,255,0.75);
          max-width: 600px; margin: 0 auto 36px; line-height: 1.7;
        }
        .careers-hero-actions {
          display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;
        }
        .btn-red,
        .btn-outline-white {
          padding: 14px 26px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-width: 200px;
          transition: all 0.2s;
        }
        .btn-red {
          background: #C8302A; color: #fff;
          box-shadow: 0 8px 20px rgba(200,48,42,0.3);
        }
        .btn-red:hover { background: #a82520; transform: translateY(-2px); color: #fff; }
        .btn-outline-white {
          background: transparent; color: #fff;
          border: 1.5px solid rgba(255,255,255,0.35);
        }
        .btn-outline-white:hover { background: rgba(255,255,255,0.1); color: #fff; }

        /* Quick links bar */
        .quick-links-bar {
          background: #F7F3EE; border-bottom: 1px solid #E5E0D8;
          padding: 16px 24px; display: flex; gap: 24px;
          justify-content: center; flex-wrap: wrap; align-items: center;
        }
        .quick-links-bar span {
          font-size: 13px; font-weight: 600; color: #6B7280; text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .quick-link {
          font-size: 14px; font-weight: 600; color: #1C2B3A;
          text-decoration: none; padding: 6px 14px;
          border: 1.5px solid #E5E0D8; border-radius: 100px;
          background: #fff; transition: all 0.15s;
          display: inline-flex; align-items: center; gap: 6px;
        }
        .quick-link:hover { border-color: #C8302A; color: #C8302A; }
        .quick-link-portal {
          background: #1C2B3A;
          color: #fff;
          border: 1.5px solid #1C2B3A;
        }
        .quick-link-portal:hover {
          background: #0f1a26;
          border-color: #0f1a26;
          color: #fff;
        }

        /* Section wrapper */
        .section { padding: 80px 24px; max-width: 1200px; margin: 0 auto; }
        .section-eyebrow {
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #C8302A; margin-bottom: 12px;
        }
        .section h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 600; color: #1C2B3A; line-height: 1.2; margin-bottom: 16px;
        }
        .section-lead {
          font-size: 1.0625rem; color: #6B7280; max-width: 640px; line-height: 1.75;
          margin-bottom: 48px;
        }

        /* Role cards */
        .roles-grid {
          display: flex; flex-direction: column; gap: 32px;
        }
        .role-card {
          background: #FAFAF8; border: 1px solid #E5E0D8;
          border-radius: 14px; overflow: hidden;
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .role-card:hover {
          box-shadow: 0 12px 40px rgba(28,43,58,0.12);
          border-color: #C8302A;
        }
        .role-card-top {
          border-left: 4px solid #C8302A;
          padding: 32px 32px 0;
          display: flex; gap: 16px; align-items: flex-start;
        }
        .role-icon {
          width: 52px; height: 52px; background: rgba(200,48,42,0.07);
          border-radius: 12px; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .role-header { flex: 1; }
        .role-tag {
          display: inline-block; font-size: 11px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase; color: #C8302A;
          background: rgba(200,48,42,0.08); padding: 3px 10px;
          border-radius: 100px; margin-bottom: 8px;
        }
        .role-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.7rem; font-weight: 600; color: #1C2B3A;
          line-height: 1.2; margin-bottom: 8px;
        }
        .role-desc { font-size: 0.9625rem; color: #6B7280; line-height: 1.7; }
        .role-body {
          padding: 24px 32px 32px;
          display: grid; grid-template-columns: 1fr 1fr; gap: 24px;
        }
        @media (max-width: 640px) {
          .role-body { grid-template-columns: 1fr; }
          .role-card-top { flex-direction: column; }
        }
        .role-list-title {
          font-size: 12px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: #1C2B3A; margin-bottom: 12px;
        }
        .role-list { list-style: none; padding: 0; margin: 0 0 20px; }
        .role-list li {
          font-size: 0.9rem; color: #4B5563; padding: 5px 0 5px 18px;
          position: relative; line-height: 1.5;
          border-bottom: 1px solid #F0EBE3;
        }
        .role-list li:last-child { border-bottom: none; }
        .role-list li::before {
          content: ''; position: absolute; left: 0; top: 12px;
          width: 6px; height: 6px; border-radius: 50%;
          background: #C8302A;
        }
        .role-apply-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: #C8302A; color: #fff; padding: 14px 26px;
          border-radius: 8px; font-size: 15px; font-weight: 700;
          text-decoration: none; transition: all 0.2s;
          box-shadow: 0 4px 14px rgba(200,48,42,0.25);
        }
        .role-apply-btn:hover { background: #a82520; transform: translateY(-1px); color: #fff; }

        /* Benefits grid */
        .benefits-bg { background: #1C2B3A; }
        .benefits-section { padding: 80px 24px; max-width: 1200px; margin: 0 auto; }
        .benefits-section .section-eyebrow { color: rgba(200,48,42,0.9); }
        .benefits-section h2 { color: #fff; }
        .benefits-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        }
        @media (max-width: 900px) { .benefits-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .benefits-grid { grid-template-columns: 1fr; } }
        .benefit-card {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px; padding: 24px;
        }
        .benefit-icon { font-size: 28px; margin-bottom: 12px; }
        .benefit-title { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 8px; }
        .benefit-body { font-size: 0.9rem; color: rgba(255,255,255,0.6); line-height: 1.65; }

        /* Staff reviews */
        .reviews-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;
        }
        @media (max-width: 680px) { .reviews-grid { grid-template-columns: 1fr; } }
        .review-card {
          background: #FAFAF8; border: 1px solid #E5E0D8;
          border-radius: 12px; padding: 24px; position: relative;
        }
        .review-quote-mark {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 52px; color: #C8302A; line-height: 0.8;
          margin-bottom: 12px; display: block;
        }
        .review-text {
          font-size: 0.9375rem; color: #2D2D2D; line-height: 1.7;
          font-style: italic; margin-bottom: 16px;
        }
        .review-role {
          font-size: 12px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: #C8302A;
        }

        /* Staff portal section */
        .portal-bg { background: #F7F3EE; border-top: 1px solid #E5E0D8; }
        .portal-section {
          padding: 64px 24px; max-width: 1200px; margin: 0 auto;
          display: flex; gap: 32px; align-items: center; flex-wrap: wrap;
        }
        .portal-text { flex: 1; min-width: 280px; }
        .portal-text h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 600; color: #1C2B3A; margin-bottom: 12px;
        }
        .portal-text p {
          font-size: 0.9625rem; color: #6B7280; line-height: 1.75; margin-bottom: 0;
        }
        .portal-links { display: flex; gap: 14px; flex-wrap: wrap; flex-shrink: 0; }
        .btn-portal,
        .btn-portal-outline {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          padding: 14px 26px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          min-width: 180px;
          transition: all 0.2s;
        }
        .btn-portal {
          background: #1C2B3A; color: #fff;
        }
        .btn-portal:hover { background: #0f1a26; transform: translateY(-2px); color: #fff; }
        .btn-portal-outline {
          background: transparent; color: #1C2B3A;
          border: 1.5px solid #1C2B3A;
        }
        .btn-portal-outline:hover { background: #1C2B3A; color: #fff; }

        /* CTA bottom */
        .cta-careers {
          background: #1C2B3A; text-align: center;
          padding: 80px 24px;
        }
        .cta-careers .section-eyebrow { color: rgba(200,48,42,0.9); text-align: center; }
        .cta-careers h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600; color: #fff;
          max-width: 700px; margin: 0 auto 16px; line-height: 1.2;
        }
        .cta-careers p {
          color: rgba(255,255,255,0.7); font-size: 1rem;
          max-width: 480px; margin: 0 auto 36px; line-height: 1.7;
        }
        .cta-careers-actions {
          display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;
        }
        .cta-careers-actions .btn-red,
        .cta-careers-actions .btn-outline-white {
          min-width: 200px;
        }
      `}</style>

      <main className="careers-page">

        {/* Hero */}
        <section className="careers-hero">
          <p className="careers-hero-eyebrow">Join Our Team</p>
          <h1>Make a Real Difference.<br />Build a Career You're Proud Of.</h1>
          <p>
            Arcadia Home Care is always looking for warm, dedicated professionals who believe in
            the dignity and independence of every person they care for.
          </p>
          <div className="careers-hero-actions">
            <a href="/pre-hire/" className="btn-red">
              Complete Pre-Hire Form
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="tel:8449770050" className="btn-outline-white">
              Call Us — (844) 977-0050
            </a>
          </div>
        </section>

        {/* Quick links bar */}
        <div className="quick-links-bar">
          <span>Open Roles:</span>
          <Link href="/pre-hire/" className="quick-link">Personal Support Worker</Link>
          <Link href="/pre-hire/" className="quick-link">RN / RPN</Link>
          <Link href="/pre-hire/" className="quick-link">Rehabilitation Support Worker</Link>
          <a href="https://arcadiahomecare.stattrainingacademy.net/" target="_blank" rel="noopener noreferrer" className="quick-link quick-link-portal">
            Employee Portal ↗
          </a>
        </div>

        {/* Open Roles */}
        <div className="section">
          <p className="section-eyebrow">Open Roles</p>
          <h2>Where Would You Like to Make a Difference?</h2>
          <p className="section-lead">
            We hire people who are empathetic, upbeat, and dedicated to improving lives —
            across three specialist disciplines.
          </p>

          <div className="roles-grid">
            {roles.map((role, i) => (
              <div key={i} className="role-card" id={i === 0 ? 'psw' : i === 1 ? 'rn' : 'rsw'}>
                <div className="role-card-top">
                  <div className="role-icon">{role.icon}</div>
                  <div className="role-header">
                    <span className="role-tag">{role.tag}</span>
                    <h3 className="role-title">{role.title}</h3>
                    <p className="role-desc">{role.description}</p>
                  </div>
                </div>
                <div className="role-body">
                  <div>
                    <p className="role-list-title">Why You'll Love It</p>
                    <ul className="role-list">
                      {role.highlights.map((h, j) => <li key={j}>{h}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="role-list-title">What We're Looking For</p>
                    <ul className="role-list">
                      {role.requirements.map((r, j) => <li key={j}>{r}</li>)}
                    </ul>
                    <a href={role.href} target={role.external ? '_blank' : undefined} rel={role.external ? 'noopener noreferrer' : undefined} className="role-apply-btn">
                      Apply for This Role
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="benefits-bg">
          <div className="benefits-section">
            <p className="section-eyebrow">Why Arcadia</p>
            <h2 style={{ color: '#fff', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 600, lineHeight: 1.2, marginBottom: 40 }}>
              A Team That Takes Care<br />of Those Who Take Care
            </h2>
            <div className="benefits-grid">
              {benefits.map((b, i) => (
                <div key={i} className="benefit-card">
                  <div className="benefit-icon">{b.icon}</div>
                  <div className="benefit-title">{b.title}</div>
                  <div className="benefit-body">{b.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Staff Reviews */}
        <div className="section">
          <p className="section-eyebrow">Staff Reviews</p>
          <h2>Hear It From Our Team</h2>
          <p className="section-lead">
            Our above-industry-average retention rates say a lot — but our team says it better.
          </p>
          <div className="reviews-grid">
            {employeeQuotes.map((q, i) => (
              <div key={i} className="review-card">
                <span className="review-quote-mark">"</span>
                <p className="review-text">{q.quote}</p>
                <span className="review-role">{q.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Current Staff Portal */}
        <div className="portal-bg">
          <div className="portal-section">
            <div className="portal-text">
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C8302A', marginBottom: 10 }}>Current Staff</p>
              <h2>Already Part of the Arcadia Family?</h2>
              <p>
                Complete your pre-hire paperwork online or log in to the Employee Portal
                for your training academy, schedules, and resources.
              </p>
            </div>
            <div className="portal-links">
              <a href="/pre-hire/" className="btn-portal">
                Pre-Hire Form
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://arcadiahomecare.stattrainingacademy.net/" target="_blank" rel="noopener noreferrer" className="btn-portal-outline">
                Employee Portal ↗
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="cta-careers">
          <p className="section-eyebrow">Get Started</p>
          <h2>Ready to Join a Team That Truly Cares?</h2>
          <p>
            We're always looking for the right people — not just credentials.
            Reach out and let's see if Arcadia is the right fit for you.
          </p>
          <div className="cta-careers-actions">
            <a href="/pre-hire/" className="btn-red">
              Complete Pre-Hire Form
            </a>
            <a href="tel:8449770050" className="btn-outline-white">
              (844) 977-0050
            </a>
          </div>
        </section>

      </main>
    </>
  )
}
