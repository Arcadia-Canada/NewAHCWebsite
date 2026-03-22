import { colors } from "@/components/arcadia-colors";

const serviceLinks: [string, string][] = [
  ["Dementia & Alzheimer's", "/our-services/dementia-alzheimers-home-care/"],
  ["Acquired Brain Injury", "/our-services/acquired-brain-injury-home-care/"],
  ["Rehabilitation Support", "/our-services/rehabilitation-support/"],
  ["Hospital Discharge", "/our-services/hospital-discharge-support/"],
  ["Palliative Home Care", "/our-services/palliative-home-care/"],
  ["View All Services", "/our-services/"],
];

const companyLinks: [string, string][] = [
  ["About Us", "/about/"],
  ["How Care Starts", "/how-care-starts/"],
  ["Our Locations", "/locations/"],
  ["Resources & Guides", "/resources/"],
  ["Careers", "/careers/"],
  ["Referral Form", "/referral-form/"],
  ["Contact", "/contact/"],
];

export default function Footer() {
  return (
    <footer
      style={{
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .footer-dark-section { padding-bottom: 80px; }
        }
      `}</style>
      {/* Section 1: Logo, tagline, social — 4-column grid for alignment with section 2 */}
      <div
        style={{
          background: "#F7F3EE",
          borderBottom: "1px solid #E5E0D8",
          padding: "32px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1.5fr 1.5fr 2fr",
              gap: 48,
            }}
          >
            <div>
              <img
                src="/images/arcadia-logo.svg"
                alt="Arcadia Home Care"
                style={{ height: 44, marginBottom: 20 }}
              />
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.7,
                  marginBottom: 24,
                  maxWidth: 220,
                  color: "#6B7280",
                }}
              >
                Clinical expertise and human compassion, together in the home.
                Serving GTA families since 2005.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <a
                  href="https://facebook.com/arcadiahomecare.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36,
                    height: 36,
                    background: "transparent",
                    border: "1px solid #D1CBC1",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1C2B3A",
                    textDecoration: "none",
                  }}
                  title="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/arcadia-home-care"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36,
                    height: 36,
                    background: "transparent",
                    border: "1px solid #D1CBC1",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1C2B3A",
                    textDecoration: "none",
                  }}
                  title="LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/arcadia_homecare"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36,
                    height: 36,
                    background: "transparent",
                    border: "1px solid #D1CBC1",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1C2B3A",
                    textDecoration: "none",
                  }}
                  title="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>

      {/* Section 2: Four columns + copyright */}
      <div
        className="footer-dark-section"
        style={{
          background: "#111B26",
          padding: "56px 24px 96px",
          color: "rgba(255,255,255,0.65)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1.5fr 2fr",
              gap: 48,
              marginBottom: 48,
            }}
          >
            <div>
              <h4
                style={{
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                Our Services
              </h4>
              {serviceLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.92)",
                    textDecoration: "none",
                    fontSize: 14,
                    marginBottom: 10,
                    transition: "color 0.2s",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>

            <div>
              <h4
                style={{
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                Arcadia
              </h4>
              {companyLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.92)",
                    textDecoration: "none",
                    fontSize: 14,
                    marginBottom: 10,
                    transition: "color 0.2s",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>

            <div>
              <h4
                style={{
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                Contact
              </h4>
              <div style={{ marginBottom: 14 }}>
                <a
                  href="tel:8449770050"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: 20,
                    fontWeight: 700,
                  }}
                >
                  (844) 977-0050
                </a>
                <div style={{ fontSize: 12, marginTop: 2, color: "rgba(255,255,255,0.65)" }}>
                  Mon–Fri, 9:00AM–5:00PM
                </div>
              </div>
              <div style={{ marginBottom: 14 }}>
                <a
                  href="mailto:info@arcadiahomecare.ca"
                  style={{
                    color: "rgba(255,255,255,0.92)",
                    textDecoration: "none",
                    fontSize: 14,
                  }}
                >
                  info@arcadiahomecare.ca
                </a>
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.65)" }}>
                302 Bay Street, Toronto, Ontario M5H 0B6
              </div>
              <a
                href="/contact/"
                style={{
                  display: "inline-block",
                  marginTop: 20,
                  background: colors.accent,
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                Book a Consultation
              </a>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 24,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <p style={{ fontSize: 13, color: "#ffffff" }}>
              © 2026 Arcadia Home Care. All Rights Reserved.
            </p>
            <a
              href="/privacy-policy/"
              style={{
                fontSize: 13,
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
