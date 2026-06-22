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

/** Footer social link buttons (was 36px) and inner SVG glyphs (was 18px), +15%. */
const SOCIAL_LINK_SIZE = Math.round(36 * 1.15);
const SOCIAL_ICON_SIZE = Math.round(18 * 1.15);

const socialLinkStyle = {
  width: SOCIAL_LINK_SIZE,
  height: SOCIAL_LINK_SIZE,
  background: "transparent",
  border: "1px solid rgba(255,255,255,0.28)",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  textDecoration: "none",
} as const;

function FooterSocialLinks({ className }: { className: string }) {
  return (
    <div className={className} aria-label="Social media">
      <a
        href="https://facebook.com/arcadiahomecare.ca"
        target="_blank"
        rel="noopener noreferrer"
        style={socialLinkStyle}
        title="Facebook"
      >
        <svg width={SOCIAL_ICON_SIZE} height={SOCIAL_ICON_SIZE} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
      <a
        href="https://linkedin.com/company/arcadia-home-care"
        target="_blank"
        rel="noopener noreferrer"
        style={socialLinkStyle}
        title="LinkedIn"
      >
        <svg width={SOCIAL_ICON_SIZE} height={SOCIAL_ICON_SIZE} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
      <a
        href="https://instagram.com/arcadia_homecare"
        target="_blank"
        rel="noopener noreferrer"
        style={socialLinkStyle}
        title="Instagram"
      >
        <svg width={SOCIAL_ICON_SIZE} height={SOCIAL_ICON_SIZE} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer" style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{`
        .site-footer .footer-main-grid {
          display: grid;
          grid-template-columns: minmax(200px, 1.35fr) minmax(140px, 1fr) minmax(140px, 1fr) minmax(220px, 1.35fr);
          gap: 40px 32px;
          margin-bottom: 48px;
          align-items: start;
        }
        .site-footer .footer-heading {
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin: 0 0 20px;
        }
        .site-footer .footer-link {
          display: block;
          color: rgba(255,255,255,0.92);
          text-decoration: none;
          font-size: 14px;
          margin-bottom: 10px;
          transition: color 0.2s;
        }
        .site-footer .footer-link:hover {
          color: #E8867F;
        }
        .site-footer .footer-intro {
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
          color: rgba(255,255,255,0.82);
        }
        .site-footer .footer-social-desktop {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }
        .site-footer .footer-social-mobile {
          display: none;
          gap: 12px;
          margin-top: 16px;
        }
        .site-footer .footer-consult-btn {
          display: inline-block;
          margin-top: 20px;
          background: ${colors.accent};
          color: #fff;
          padding: 12px 22px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.3;
          border: none;
          box-sizing: border-box;
        }
        .site-footer .footer-legal {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .site-footer .footer-legal p,
        .site-footer .footer-legal a {
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          margin: 0;
        }
        .site-footer .footer-legal a {
          text-decoration: none;
        }
        @media (max-width: 900px) {
          .site-footer .footer-main-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-bottom: 32px;
          }
          .site-footer .footer-panel {
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 12px;
            padding: 22px 20px;
          }
          .site-footer .footer-panel-intro {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 768px) {
          .site-footer .footer-dark-section {
            padding-bottom: calc(88px + env(safe-area-inset-bottom, 0px));
          }
          .site-footer .footer-main-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .site-footer .footer-panel-intro {
            grid-column: auto;
          }
          .site-footer .footer-panel-contact {
            text-align: center;
          }
          .site-footer .footer-social-desktop {
            display: none;
          }
          .site-footer .footer-social-mobile {
            display: flex;
            justify-content: center;
          }
          .site-footer .footer-consult-btn {
            display: block;
            width: 100%;
            max-width: 320px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
            text-align: center;
          }
          .site-footer .footer-legal {
            flex-direction: column;
            align-items: center;
            text-align: center;
            border-top-color: rgba(255,255,255,0.1);
          }
        }
        @media (min-width: 769px) {
          .site-footer .footer-panel {
            background: transparent;
            border: none;
            border-radius: 0;
            padding: 0;
          }
        }
      `}</style>
      <div
        className="footer-dark-section"
        style={{
          background: "var(--color-primary-dark)",
          padding: "56px 24px 96px",
          color: "rgba(255,255,255,0.65)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="footer-main-grid">
            <div className="footer-panel footer-panel-intro">
              <p className="footer-intro">
                Clinical expertise and human compassion, together in the home.
                <br />
                Serving GTA families since 2005.
              </p>
              <FooterSocialLinks className="footer-social-desktop" />
            </div>

            <div className="footer-panel">
              <h4 className="footer-heading">Our Services</h4>
              {serviceLinks.map(([label, href]) => (
                <a key={label} href={href} className="footer-link">
                  {label}
                </a>
              ))}
            </div>

            <div className="footer-panel">
              <h4 className="footer-heading">Arcadia</h4>
              {companyLinks.map(([label, href]) => (
                <a key={label} href={href} className="footer-link">
                  {label}
                </a>
              ))}
            </div>

            <div className="footer-panel footer-panel-contact">
              <h4 className="footer-heading">Contact</h4>
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
                  className="footer-link"
                  style={{ marginBottom: 0 }}
                >
                  info@arcadiahomecare.ca
                </a>
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.65)" }}>
                302 Bay Street, Toronto, Ontario M5H 0B6
              </div>
              <a href="/contact/" className="footer-consult-btn">
                Book a Consultation
              </a>
              <FooterSocialLinks className="footer-social-mobile" />
            </div>
          </div>

          <div className="footer-legal">
            <p>© 2026 Arcadia Home Care. All Rights Reserved.</p>
            <a href="/privacy-policy/">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
