'use client'

// app/pre-hire/page.tsx
// Candidate pre-hire forms hub — embedded MakeForms iframes
// Place at: app/pre-hire/page.tsx

import { useState } from 'react'

const forms = [
  {
    id: 'application',
    step: '01',
    tag: 'Start Here',
    tagColor: '#C8302A',
    title: 'Application for Employment',
    description: 'Complete your employment application first. This is required for all roles — PSW, RN/RPN, and Rehabilitation Support Worker.',
    url: 'https://eu.makeforms.co/ege77rp',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="4" width="20" height="24" rx="3" stroke="#C8302A" strokeWidth="1.8"/>
        <path d="M11 11h10M11 16h10M11 21h6" stroke="#C8302A" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'psw',
    step: '02',
    tag: 'PSW',
    tagColor: '#1C2B3A',
    title: 'PSW Skills Assessment',
    description: 'Required for all Personal Support Worker candidates. Demonstrates your clinical knowledge and readiness to support Arcadia clients.',
    url: 'https://eu.makeforms.co/7skme9w',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="10" r="5" stroke="#C8302A" strokeWidth="1.8"/>
        <path d="M5 28c0-6.075 4.925-11 11-11s11 4.925 11 11" stroke="#C8302A" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'nurse',
    step: '02',
    tag: 'RN / RPN',
    tagColor: '#1C2B3A',
    title: 'Nurse Skills Assessment',
    description: 'Required for all Registered Nurse and Registered Practical Nurse candidates. Covers clinical competencies relevant to home care.',
    url: 'https://eu.makeforms.co/lp1ysc9',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="13" y="4" width="6" height="24" rx="3" stroke="#C8302A" strokeWidth="1.8"/>
        <rect x="4" y="13" width="24" height="6" rx="3" stroke="#C8302A" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    id: 'uploads',
    step: '03',
    tag: 'All Roles',
    tagColor: '#1C2B3A',
    title: 'Upload Licences & Credentials',
    description: 'Upload your certifications, registration documents, police check, and any other required credentials. Accepted for all roles.',
    url: 'https://eu.makeforms.co/2i9kxxv',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 20V8M16 8l-4 4M16 8l4 4" stroke="#C8302A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 24h16" stroke="#C8302A" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="#C8302A" strokeWidth="1.8" opacity="0.2"/>
      </svg>
    ),
  },
]

export default function PreHirePage() {
  const [activeForm, setActiveForm] = useState<string | null>(null)

  function openForm(id: string) {
    if (activeForm === id) {
      setActiveForm(null)
    } else {
      setActiveForm(id)
      // Scroll to form after short delay
      setTimeout(() => {
        document.getElementById(`form-embed-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }

  return (
    <>
      <style>{`
        .prehire-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }

        /* Hero */
        .prehire-hero {
          background: #1C2B3A;
          padding: 80px 24px 72px;
          text-align: center;
        }
        .prehire-eyebrow {
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #C8302A; margin-bottom: 14px;
        }
        .prehire-hero h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.2rem, 4.5vw, 3.6rem);
          font-weight: 600; color: #fff; line-height: 1.15;
          max-width: 700px; margin: 0 auto 16px;
        }
        .prehire-hero p {
          font-size: 1rem; color: rgba(255,255,255,0.7);
          max-width: 560px; margin: 0 auto; line-height: 1.75;
        }

        /* Steps bar */
        .steps-bar {
          background: #F7F3EE; border-bottom: 1px solid #E5E0D8;
          padding: 20px 24px;
        }
        .steps-inner {
          max-width: 900px; margin: 0 auto;
          display: flex; gap: 0; align-items: center;
        }
        .step-item {
          display: flex; align-items: center; gap: 10px; flex: 1;
        }
        .step-num {
          width: 30px; height: 30px; border-radius: 50%;
          background: #1C2B3A; color: #fff;
          font-size: 12px; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .step-text { font-size: 13px; font-weight: 600; color: #1C2B3A; }
        .step-sub { font-size: 11px; color: #6B7280; }
        .step-divider {
          width: 32px; height: 1px; background: #D1CBC1; margin: 0 8px; flex-shrink: 0;
        }
        @media (max-width: 600px) {
          .steps-inner { flex-direction: column; align-items: flex-start; gap: 12px; }
          .step-divider { display: none; }
        }

        /* Main content */
        .prehire-content {
          max-width: 900px; margin: 0 auto; padding: 64px 24px 80px;
        }

        /* Form cards */
        .form-card {
          background: #FAFAF8; border: 1.5px solid #E5E0D8;
          border-radius: 14px; margin-bottom: 16px;
          overflow: hidden; transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-card.active {
          border-color: #C8302A;
          box-shadow: 0 8px 32px rgba(200,48,42,0.1);
        }
        .form-card-header {
          display: flex; align-items: center; gap: 16px;
          padding: 24px 28px; cursor: pointer;
          transition: background 0.15s;
        }
        .form-card-header:hover { background: rgba(200,48,42,0.02); }
        .form-card-icon {
          width: 56px; height: 56px; background: rgba(200,48,42,0.07);
          border-radius: 12px; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .form-card-meta { flex: 1; }
        .form-card-tags { display: flex; gap: 8px; align-items: center; margin-bottom: 6px; }
        .form-step-badge {
          font-size: 10px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: #6B7280;
          background: #EDE8E1; padding: 2px 8px; border-radius: 100px;
        }
        .form-role-badge {
          font-size: 10px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; padding: 2px 8px; border-radius: 100px;
        }
        .form-card-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.35rem; font-weight: 600; color: #1C2B3A;
          line-height: 1.2; margin-bottom: 4px;
        }
        .form-card-desc { font-size: 0.875rem; color: #6B7280; line-height: 1.6; }
        .form-card-toggle {
          width: 36px; height: 36px; border-radius: 50%;
          background: #fff; border: 1.5px solid #E5E0D8;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: all 0.2s; color: #1C2B3A;
        }
        .form-card.active .form-card-toggle {
          background: #C8302A; border-color: #C8302A; color: #fff;
          transform: rotate(180deg);
        }

        /* Iframe embed */
        .form-embed {
          border-top: 1px solid #E5E0D8;
          background: #fff;
          animation: slideDown 0.25s ease forwards;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .form-embed-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 12px 28px; background: #F7F3EE; border-bottom: 1px solid #E5E0D8;
        }
        .form-embed-label { font-size: 12px; font-weight: 700; color: #6B7280; letter-spacing: 0.06em; text-transform: uppercase; }
        .form-embed-external {
          font-size: 12px; font-weight: 600; color: #C8302A;
          text-decoration: none; display: flex; align-items: center; gap: 4px;
        }
        .form-embed-external:hover { text-decoration: underline; }
        .form-iframe {
          width: 100%; height: 780px; border: none; display: block;
        }
        @media (max-width: 600px) { .form-iframe { height: 900px; } }

        /* Info box */
        .info-box {
          background: rgba(28,43,58,0.04); border: 1px solid #E5E0D8;
          border-left: 3px solid #C8302A; border-radius: 8px;
          padding: 16px 20px; margin-bottom: 32px;
          font-size: 0.875rem; color: #4B5563; line-height: 1.65;
        }
        .info-box strong { color: #1C2B3A; }

        /* Help section */
        .help-section {
          background: #1C2B3A; border-radius: 14px;
          padding: 36px 32px; margin-top: 40px;
          display: flex; gap: 24px; align-items: center; flex-wrap: wrap;
        }
        .help-text { flex: 1; min-width: 240px; }
        .help-text h3 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.5rem; font-weight: 600; color: #fff; margin-bottom: 8px;
        }
        .help-text p { font-size: 0.9rem; color: rgba(255,255,255,0.65); line-height: 1.65; margin: 0; }
        .help-actions { display: flex; gap: 10px; flex-wrap: wrap; flex-shrink: 0; }
        .btn-red {
          background: #C8302A; color: #fff; padding: 13px 22px;
          border-radius: 8px; font-size: 14px; font-weight: 700;
          text-decoration: none; transition: all 0.2s;
          display: inline-flex; align-items: center; gap: 7px;
        }
        .btn-red:hover { background: #a82520; }
        .btn-ghost {
          background: rgba(255,255,255,0.08); color: #fff; padding: 13px 22px;
          border-radius: 8px; font-size: 14px; font-weight: 700;
          text-decoration: none; border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.2s; display: inline-flex; align-items: center; gap: 7px;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.14); }
      `}</style>

      <main className="prehire-page">

        {/* Hero */}
        <section className="prehire-hero">
          <p className="prehire-eyebrow">Joining Arcadia Home Care</p>
          <h1>Complete Your<br />Pre-Hire Forms</h1>
          <p>
            All forms are completed right here — no need to visit a separate website.
            Select the form that applies to your role and fill it out below.
          </p>
        </section>

        {/* Steps bar */}
        <div className="steps-bar">
          <div className="steps-inner">
            <div className="step-item">
              <div className="step-num">1</div>
              <div>
                <div className="step-text">Application Form</div>
                <div className="step-sub">Required for all roles</div>
              </div>
            </div>
            <div className="step-divider" />
            <div className="step-item">
              <div className="step-num">2</div>
              <div>
                <div className="step-text">Skills Assessment</div>
                <div className="step-sub">PSW or Nurse — pick yours</div>
              </div>
            </div>
            <div className="step-divider" />
            <div className="step-item">
              <div className="step-num">3</div>
              <div>
                <div className="step-text">Upload Credentials</div>
                <div className="step-sub">Licences, certifications, police check</div>
              </div>
            </div>
          </div>
        </div>

        {/* Forms */}
        <div className="prehire-content">

          <div className="info-box">
            <strong>Not sure which skills assessment to complete?</strong> If you are applying as a PSW, complete the PSW Skills Assessment. If you are applying as an RN or RPN, complete the Nurse Skills Assessment. The Application Form and Document Upload apply to everyone.
          </div>

          {forms.map((form) => (
            <div
              key={form.id}
              className={`form-card ${activeForm === form.id ? 'active' : ''}`}
              id={`form-card-${form.id}`}
            >
              {/* Card header — click to open */}
              <div
                className="form-card-header"
                onClick={() => openForm(form.id)}
                role="button"
                tabIndex={0}
                aria-expanded={activeForm === form.id}
                onKeyDown={(e) => e.key === 'Enter' && openForm(form.id)}
              >
                <div className="form-card-icon">{form.icon}</div>
                <div className="form-card-meta">
                  <div className="form-card-tags">
                    <span className="form-step-badge">Step {form.step}</span>
                    <span
                      className="form-role-badge"
                      style={{
                        background: form.tagColor === '#C8302A' ? 'rgba(200,48,42,0.1)' : 'rgba(28,43,58,0.08)',
                        color: form.tagColor,
                      }}
                    >
                      {form.tag}
                    </span>
                  </div>
                  <div className="form-card-title">{form.title}</div>
                  <div className="form-card-desc">{form.description}</div>
                </div>
                <div className="form-card-toggle" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Embedded form */}
              {activeForm === form.id && (
                <div className="form-embed" id={`form-embed-${form.id}`}>
                  <div className="form-embed-header">
                    <span className="form-embed-label">{form.title}</span>
                    <a
                      href={form.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="form-embed-external"
                    >
                      Open in new tab ↗
                    </a>
                  </div>
                  <iframe
                    src={form.url}
                    className="form-iframe"
                    title={form.title}
                    allow="camera; microphone; geolocation"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}

          {/* Help section */}
          <div className="help-section">
            <div className="help-text">
              <h3>Questions About the Process?</h3>
              <p>
                Our team is happy to walk you through what to complete and what to expect next.
                Reach out anytime.
              </p>
            </div>
            <div className="help-actions">
              <a href="tel:8449770050" className="btn-red">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2.5C2 8.299 5.701 12 11.5 12l.5-2.5-2.5-.5-.5 1c-2-1-3-2-4-4l1-.5L5.5 3 3 2.5z" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round"/>
                </svg>
                (844) 977-0050
              </a>
              <a href="mailto:info@arcadiahomecare.ca?subject=Pre-Hire%20Form%20Question" className="btn-ghost">
                Email Us
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
