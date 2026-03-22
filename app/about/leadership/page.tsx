// app/about/leadership/page.tsx
// Mission, Vision, Values and Leadership Team
// Rosalyn Gabuya intentionally excluded per client request

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Leadership Team | Arcadia Home Care | Toronto & GTA',
  description: 'Meet the leadership team behind Arcadia Home Care. Founded in 2005 by Rohit Tamhane, our team brings clinical expertise, operational excellence, and deep compassion to every family we serve.',
  alternates: { canonical: 'https://arcadiahomecare.ca/about/leadership/' },
}

const team = [
  {
    name: 'Rohit Tamhane',
    role: 'Founder & CEO',
    email: 'info@arcadiahomecare.ca',
    photo: '/images/team/rohit-tamhane.webp',
    bio: 'Rohit founded Arcadia Home Care in 2005 after volunteering with the Alzheimer Society of Toronto — an experience that showed him what families navigating dementia truly needed. Under his leadership, Arcadia has grown almost entirely through word-of-mouth, a testament to the trust families place in the care they receive.',
    quote: 'While serving as a volunteer with the Alzheimer Society of Toronto, I realized what I wanted to be in life. Since then, my staff and I have been gratified to see the positive results that can be achieved from early intervention, utilization of existing resources, services provided by knowledgeable workers, and case management.',
  },
  {
    name: 'Melissa Vigar',
    role: 'Director of Operations',
    email: 'melissa@arcadiahomecare.ca',
    photo: '/images/team/melissa-vigar.webp',
    bio: 'Melissa oversees day-to-day operations across all service areas, ensuring that every client receives consistent, high-quality care. Her focus on process, communication, and team support keeps Arcadia running with the reliability families depend on.',
    quote: null,
  },
  {
    name: 'Peter Glazer',
    role: 'Clinical Director',
    email: 'peter@arcadiahomecare.ca',
    photo: '/images/team/peter-glazer.webp',
    bio: 'Peter leads clinical oversight and quality assurance across all of Arcadia\'s care programs. With deep expertise in dementia, acquired brain injury, and complex care, Peter ensures that every care plan reflects both clinical best practices and the individual needs of each client.',
    quote: null,
  },
  {
    name: 'Dyan Tan',
    role: 'HR Manager',
    email: 'dyan@arcadiahomecare.ca',
    photo: '/images/team/dyan-tan.webp',
    bio: 'Dyan leads the recruitment, onboarding, and ongoing development of Arcadia\'s caregiver team. Her rigorous screening process and commitment to staff wellbeing are the foundation of Arcadia\'s above-industry-average caregiver retention rates.',
    quote: null,
  },
  {
    name: 'Glady May Abogado',
    role: 'Scheduling Supervisor',
    email: 'gladymay@arcadiahomecare.ca',
    photo: '/images/team/glady-may.webp',
    bio: 'Glady May manages caregiver scheduling across all regions, ensuring continuity of care and minimal disruption for clients and their families. Her deep knowledge of the team allows her to match the right caregiver to every shift.',
    quote: null,
  },
]

const values = [
  {
    icon: '🤝',
    title: 'Upholding the Dignity of All Individuals',
    body: 'We treat every person with the utmost respect and strive to maintain their dignity throughout our care process.',
  },
  {
    icon: '💙',
    title: 'Treating All Individuals with Respect',
    body: 'Our caregivers approach each client with understanding, empathy, and kindness, fostering an environment of mutual respect.',
  },
  {
    icon: '🏅',
    title: 'Earning Trust Through Competence',
    body: 'We take pride in our highly skilled and certified caregivers, who consistently demonstrate the expertise needed to deliver exceptional care.',
  },
  {
    icon: '🌱',
    title: 'Contributing to Community Programs',
    body: 'We actively engage with and support local initiatives that benefit our community and enhance the well-being of its members.',
  },
  {
    icon: '⭐',
    title: 'Lead by Example',
    body: 'Our team is dedicated to setting a high standard of care and professionalism, inspiring others in the industry to strive for excellence.',
  },
  {
    icon: '📚',
    title: 'Supporting Education and Research',
    body: 'We value ongoing learning and research, investing in the development of our team and staying informed on the latest advancements in home care.',
  },
]

function Initials({ name }: { name: string }) {
  const parts = name.split(' ')
  const initials = parts.map((p) => p[0]).join('')
  return (
    <div style={{
      width: '100%', aspectRatio: '1', background: '#1C2B3A',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      borderRadius: '50%',
    }}>
      <span style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: '2.4rem', fontWeight: 600, color: '#fff', letterSpacing: '0.05em',
      }}>{initials}</span>
    </div>
  )
}

export default function LeadershipPage() {
  return (
    <>
      <style>{`
        .leadership-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }

        /* Hero */
        .ldr-hero {
          background: #1C2B3A; padding: 96px 24px 80px; text-align: center;
        }
        .ldr-eyebrow {
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #C8302A; margin-bottom: 16px;
        }
        .ldr-hero h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 600; color: #fff; line-height: 1.15;
          max-width: 760px; margin: 0 auto 20px;
        }
        .ldr-hero p {
          font-size: 1.05rem; color: rgba(255,255,255,0.72);
          max-width: 580px; margin: 0 auto; line-height: 1.8;
        }

        /* Breadcrumb */
        .breadcrumb {
          background: #F7F3EE; border-bottom: 1px solid #E5E0D8;
          padding: 12px 24px; font-size: 13px; color: #6B7280;
        }
        .breadcrumb a { color: #1C2B3A; text-decoration: none; font-weight: 600; }
        .breadcrumb a:hover { color: #C8302A; }
        .breadcrumb span { margin: 0 8px; }

        /* Mission & Vision */
        .mv-section {
          background: #F7F3EE; border-bottom: 1px solid #E5E0D8;
          padding: 72px 24px;
        }
        .mv-inner {
          max-width: 1000px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 48px;
        }
        @media (max-width: 680px) { .mv-inner { grid-template-columns: 1fr; gap: 32px; } }
        .mv-card {
          background: #fff; border: 1px solid #E5E0D8;
          border-radius: 14px; padding: 36px;
          border-top: 4px solid #C8302A;
        }
        .mv-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #C8302A; margin-bottom: 14px;
        }
        .mv-card h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.5rem; font-weight: 600; color: #1C2B3A;
          line-height: 1.3; margin-bottom: 14px;
        }
        .mv-card p { font-size: 0.9625rem; color: #4B5563; line-height: 1.8; margin: 0; }

        /* Founder section */
        .founder-section {
          max-width: 1100px; margin: 0 auto; padding: 80px 24px;
          display: grid; grid-template-columns: 1fr 2fr; gap: 56px; align-items: start;
        }
        @media (max-width: 768px) {
          .founder-section { grid-template-columns: 1fr; gap: 32px; }
        }
        .founder-avatar {
          width: 100%; max-width: 260px;
          aspect-ratio: 1; background: #1C2B3A;
          border-radius: 50%; display: flex; align-items: center;
          justify-content: center; margin: 0 auto;
        }
        .founder-initials {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 4rem; font-weight: 600; color: #fff;
        }
        .founder-eyebrow {
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #C8302A; margin-bottom: 10px;
        }
        .founder-section h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 600; color: #1C2B3A; line-height: 1.2; margin-bottom: 6px;
        }
        .founder-role {
          font-size: 13px; font-weight: 700; color: #6B7280;
          text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 20px;
        }
        .founder-bio { font-size: 1rem; color: #4B5563; line-height: 1.8; margin-bottom: 24px; }
        .founder-quote {
          background: #F7F3EE; border-left: 4px solid #C8302A;
          border-radius: 0 10px 10px 0; padding: 20px 24px;
        }
        .founder-quote p {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.15rem; font-style: italic; color: #1C2B3A;
          line-height: 1.75; margin: 0 0 10px;
        }
        .founder-quote cite {
          font-size: 12px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: #C8302A; font-style: normal;
        }

        /* Team grid */
        .team-section {
          background: #FAFAF8; border-top: 1px solid #E5E0D8;
          padding: 80px 24px;
        }
        .team-inner { max-width: 1100px; margin: 0 auto; }
        .team-header { text-align: center; margin-bottom: 56px; }
        .team-header h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 600; color: #1C2B3A; margin-bottom: 12px;
        }
        .team-header p { font-size: 0.9625rem; color: #6B7280; max-width: 540px; margin: 0 auto; line-height: 1.75; }
        .team-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px;
        }
        @media (max-width: 900px) { .team-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .team-grid { grid-template-columns: 1fr; } }
        .team-card {
          background: #fff; border: 1px solid #E5E0D8;
          border-radius: 14px; overflow: hidden;
          transition: box-shadow 0.2s, border-color 0.2s;
        }
        .team-card:hover {
          box-shadow: 0 12px 40px rgba(28,43,58,0.1);
          border-color: #C8302A;
        }
        .team-photo-wrap {
          width: 100%; aspect-ratio: 1; overflow: hidden;
          background: #1C2B3A;
        }
        .team-photo-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          object-position: top; display: block;
          transition: transform 0.3s;
        }
        .team-card:hover .team-photo-wrap img { transform: scale(1.04); }
        .team-card-body { padding: 22px 22px 24px; }
        .team-name {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.25rem; font-weight: 600; color: #1C2B3A; margin-bottom: 4px;
        }
        .team-role {
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #C8302A; margin-bottom: 12px;
        }
        .team-bio { font-size: 0.875rem; color: #6B7280; line-height: 1.7; margin-bottom: 14px; }
        .team-email {
          font-size: 12px; color: #1C2B3A; text-decoration: none;
          font-weight: 600; display: flex; align-items: center; gap: 6px;
        }
        .team-email:hover { color: #C8302A; }

        /* Values */
        .values-bg { background: #1C2B3A; padding: 80px 24px; }
        .values-inner { max-width: 1100px; margin: 0 auto; }
        .values-header { text-align: center; margin-bottom: 48px; }
        .values-header h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 600; color: #fff; margin-bottom: 12px;
        }
        .values-header p { font-size: 0.9625rem; color: rgba(255,255,255,0.6); max-width: 520px; margin: 0 auto; line-height: 1.75; }
        .values-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
        }
        @media (max-width: 900px) { .values-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .values-grid { grid-template-columns: 1fr; } }
        .value-card {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px; padding: 26px;
          transition: background 0.2s, border-color 0.2s;
        }
        .value-card:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(200,48,42,0.5);
        }
        .value-icon { font-size: 26px; margin-bottom: 12px; }
        .value-title { font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 8px; }
        .value-body { font-size: 0.875rem; color: rgba(255,255,255,0.6); line-height: 1.7; }

        /* CTA */
        .ldr-cta { background: #F7F3EE; border-top: 1px solid #E5E0D8; padding: 72px 24px; text-align: center; }
        .ldr-cta h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 600; color: #1C2B3A; margin-bottom: 12px;
        }
        .ldr-cta p { font-size: 0.9625rem; color: #6B7280; max-width: 480px; margin: 0 auto 32px; line-height: 1.75; }
        .cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
        .btn-red {
          background: #C8302A; color: #fff; padding: 14px 28px;
          border-radius: 8px; font-size: 15px; font-weight: 700;
          text-decoration: none; transition: all 0.2s;
          box-shadow: 0 8px 20px rgba(200,48,42,0.25);
        }
        .btn-red:hover { background: #a82520; transform: translateY(-2px); }
        .btn-navy {
          background: #1C2B3A; color: #fff; padding: 14px 28px;
          border-radius: 8px; font-size: 15px; font-weight: 700;
          text-decoration: none; transition: all 0.2s;
        }
        .btn-navy:hover { background: #0f1a26; transform: translateY(-2px); }
      `}</style>

      <main className="leadership-page">

        {/* Hero */}
        <section className="ldr-hero">
          <p className="ldr-eyebrow">About Arcadia</p>
          <h1>The People Behind the Care</h1>
          <p>
            Arcadia Home Care has been guided by the same principles since 2005 — clinical expertise,
            human dignity, and an unwavering commitment to the families we serve.
          </p>
        </section>

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/about/">About</Link>
            <span>›</span>
            Leadership
          </div>
        </div>

        {/* Mission & Vision */}
        <section className="mv-section">
          <div className="mv-inner">
            <div className="mv-card">
              <p className="mv-label">Our Mission</p>
              <h2>Hope and Freedom From Fear</h2>
              <p>
                To offer hope and freedom from fear in the face of uncertainty and change
                for families coping with dementia, brain injury, and related disorders.
              </p>
            </div>
            <div className="mv-card">
              <p className="mv-label">Our Vision</p>
              <h2>At the Forefront of Home Health Care</h2>
              <p>
                To be at the forefront of providing home health care for families coping
                with dementia, brain injury, and related disorders across the GTA and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section>
          <div className="founder-section">
            <div style={{ textAlign: 'center' }}>
              <img
                src="/images/team/rohit-tamhane.webp"
                alt="Rohit Tamhane"
                style={{
                  width: '100%', maxWidth: 260, aspectRatio: '1',
                  objectFit: 'cover', objectPosition: 'center 20%',
                  borderRadius: '50%', display: 'block',
                  margin: '0 auto',
                }}
              />
            </div>
            <div>
              <p className="founder-eyebrow">Our Founder</p>
              <h2>Rohit Tamhane</h2>
              <p className="founder-role">Founder & CEO · Arcadia Home Care</p>
              <p className="founder-bio">
                Rohit founded Arcadia Home Care in 2005 after volunteering with the Alzheimer Society
                of Toronto — an experience that showed him firsthand what families navigating dementia
                truly needed. His vision was simple: bring clinical insight and human compassion
                together in the home, and never compromise on either.
              </p>
              <p className="founder-bio">
                Under Rohit's leadership, Arcadia has grown almost entirely through word-of-mouth
                referrals — a testament to the trust families and health professionals place in
                the care they receive. He remains hands-on in the organization's direction,
                culture, and commitment to quality.
              </p>
              <div className="founder-quote">
                <p>
                  "While serving as a volunteer with the Alzheimer Society of Toronto, I realized what
                  I wanted to be in life. Since then, my staff and I have been gratified to see the
                  positive results that can be achieved from early intervention, utilization of existing
                  resources, services provided by knowledgeable workers, and case management."
                </p>
                <cite>Rohit Tamhane — Founder & CEO</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="team-section">
          <div className="team-inner">
            <div className="team-header">
              <p className="ldr-eyebrow" style={{ textAlign: 'center' }}>The Team</p>
              <h2>Meet Our Leadership Team</h2>
              <p>
                The people who guide Arcadia every day — from clinical oversight and operations
                to scheduling and HR — share one thing: a genuine commitment to the families we serve.
              </p>
            </div>
            <div className="team-grid">
              {team.filter(m => m.name !== 'Rohit Tamhane').map((member, i) => (
                <div key={i} className="team-card">
                  <div className="team-photo-wrap">
                    {member.photo ? (
                      <img src={member.photo} alt={member.name} loading="lazy" />
                    ) : (
                      <div style={{
                        width: '100%', height: '100%', display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        background: '#1C2B3A',
                      }}>
                        <span style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: '3rem', fontWeight: 600, color: '#fff',
                        }}>
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="team-card-body">
                    <div className="team-name">{member.name}</div>
                    <div className="team-role">{member.role}</div>
                    <p className="team-bio">{member.bio}</p>
                    <a href={`mailto:${member.email}`} className="team-email">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="1" y="3" width="12" height="9" rx="1.5" stroke="#1C2B3A" strokeWidth="1.3"/>
                        <path d="M1 4l6 4.5L13 4" stroke="#1C2B3A" strokeWidth="1.3" strokeLinecap="round"/>
                      </svg>
                      {member.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="values-bg">
          <div className="values-inner">
            <div className="values-header">
              <p className="ldr-eyebrow" style={{ color: 'rgba(200,48,42,0.9)', textAlign: 'center' }}>
                What We Stand For
              </p>
              <h2>Our Core Values & Commitments</h2>
              <p>These are not aspirations — they are the standards we hold ourselves to every day.</p>
            </div>
            <div className="values-grid">
              {values.map((v, i) => (
                <div key={i} className="value-card">
                  <div className="value-icon">{v.icon}</div>
                  <div className="value-title">{v.title}</div>
                  <div className="value-body">{v.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ldr-cta">
          <p className="ldr-eyebrow">Get In Touch</p>
          <h2>Ready to Talk About Care for Your Family?</h2>
          <p>
            Our team is here to listen, guide, and help you find the right care —
            with no obligation and no pressure.
          </p>
          <div className="cta-btns">
            <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            <Link href="/about/" className="btn-navy">← Meet Our Caregivers</Link>
          </div>
        </section>

      </main>
    </>
  )
}
