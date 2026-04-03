import type { Metadata } from "next";
import Link from "next/link";
import { colors, fonts, phone, trustItems, arcBtn } from "@/components/arcadia-colors";

export const metadata: Metadata = {
  title: "Caregiving & Home Care Resources | Arcadia Home Care",
  description: "Guides and resources for families: dementia and memory care, caregiver support, navigating home care, and brain injury rehabilitation.",
  alternates: { canonical: "https://www.arcadiahomecare.ca/resources/" },
};

const categories = [
  {
    label: "Dementia & Memory Care",
    href: "/resources/dementia-memory-care/",
    description: "Guides for families navigating a dementia diagnosis — early signs, communication strategies, and how to introduce care.",
    count: 7,
    cardBg: colors.clusterDementia,
    icon: (
      <svg width={32} height={32} viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M10 22 Q8 14 12 11 Q13.5 7 16 9.5 Q18.5 7 20 11 Q24 14 22 22 Q21 26 18.5 27 Q17 28.5 16 27 Q15 28.5 13.5 27 Q11 26 10 22Z" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="16" y1="9.5" x2="16" y2="27" stroke="white" strokeWidth="1.2" strokeDasharray="2 2"/>
        <circle cx="11.5" cy="18" r="2" fill="white"/>
        <circle cx="20.5" cy="18" r="2" fill="white"/>
        <circle cx="16" cy="12" r="1.5" fill="white"/>
      </svg>
    ),
  },
  {
    label: "Family Caregiver Support",
    href: "/resources/family-caregiver-support/",
    description: "Resources for caregivers managing burnout, balancing work and caregiving, and navigating family dynamics.",
    count: 5,
    cardBg: colors.clusterCaregiver,
    icon: (
      <svg width={32} height={32} viewBox="0 0 32 32" fill="none" aria-hidden>
        <circle cx="11" cy="10" r="4" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.8"/>
        <path d="M5 26 Q5 20 11 20 Q17 20 17 26" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="22" cy="9" r="3.5" stroke="white" strokeWidth="1.8"/>
        <path d="M17 24 Q17.5 19 22 19 Q27 19 27 24" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M16 18 Q18 14 21 16" stroke="white" strokeWidth="1.4" strokeDasharray="2 2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Navigating Home Care",
    href: "/resources/navigating-home-care/",
    description: "How to choose a provider, understand OHIP funding, compare private and public care, and know what questions to ask.",
    count: 8,
    cardBg: colors.clusterHomeCare,
    icon: (
      <svg width={32} height={32} viewBox="0 0 32 32" fill="none" aria-hidden>
        <polygon points="16,5 28,13 28,27 4,27 4,13" fill="rgba(255,255,255,0.1)" stroke="white" strokeWidth="1.8" strokeLinejoin="round"/>
        <polyline points="1,14 16,4 31,14" stroke="white" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/>
        <rect x="12" y="19" width="8" height="8" rx="1.5" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    label: "Brain Injury & Rehabilitation",
    href: "/resources/brain-injury-rehabilitation/",
    description: "Guides for families supporting recovery after acquired brain injury, stroke, or surgery — at home and beyond.",
    count: 6,
    cardBg: colors.clusterBrain,
    icon: (
      <svg width={32} height={32} viewBox="0 0 32 32" fill="none" aria-hidden>
        <polyline points="2,16 7,16 10,8 14,24 18,12 21,18 25,18 28,16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 23 Q16 18 26 23" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" strokeDasharray="2 2" strokeLinecap="round"/>
        <polygon points="25,21 27.5,25 22.5,25" fill="white"/>
      </svg>
    ),
  },
];

export default function ResourcesHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        { "@context": "https://schema.org", "@type": "CollectionPage", name: "Caregiving & Home Care Resources", url: "https://www.arcadiahomecare.ca/resources/", publisher: { "@type": "Organization", name: "Arcadia Home Care", url: "https://www.arcadiahomecare.ca" } },
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcadiahomecare.ca/" }, { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.arcadiahomecare.ca/resources/" }] },
      ]) }} />
      <style>{`
        .res-card:hover { box-shadow: 0 16px 48px rgba(0,0,0,0.28); transform: translateY(-4px); }
        .res-card:hover [data-arrow] { transform: translateX(4px); }
      `}</style>

      <main style={{ fontFamily: fonts.body, color: colors.text }}>

        {/* Hero */}
        <section style={{ background: colors.primary, padding: "96px 24px 80px", textAlign: "center" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: colors.accent, marginBottom: 16 }}>Resources</p>
            <h1 style={{ fontFamily: fonts.display, fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)", fontWeight: 600, color: colors.white, marginBottom: 20, lineHeight: 1.2 }}>
              Guides for Families & Caregivers
            </h1>
            <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 32 }}>
              Practical guides on dementia and memory care, family caregiver support, navigating home care, and brain injury rehabilitation — to help you and your family make informed decisions.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={phone.tel} style={arcBtn.primary}>📞 Call {phone.display}</a>
              <Link href="/contact/" style={arcBtn.outline}>Book a Free Consultation</Link>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <div style={{ background: colors.warm, borderBottom: `1px solid ${colors.border}`, padding: "12px 24px", display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          {trustItems.map(item => (
            <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 500, color: colors.primary }}>
              <span>{item.icon}</span><span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Category cards */}
        <section style={{ background: colors.warm, padding: "96px 24px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: colors.accent, marginBottom: 12 }}>Browse by topic</p>
            <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontWeight: 600, color: colors.primary, marginBottom: 40 }}>
              Resource Categories
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
              {categories.map(({ label, href, description, count, icon, cardBg }) => (
                <li key={href}>
                  <Link href={href} className="res-card" style={{ display: "flex", flexDirection: "column", padding: "28px 32px", background: cardBg, borderRadius: 16, color: colors.white, textDecoration: "none", transition: "all 0.3s", height: "100%", boxShadow: "0 4px 24px rgba(0,0,0,0.18)" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: 12, background: "rgba(255,255,255,0.15)", flexShrink: 0 }}>{icon}</div>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", background: "rgba(255,255,255,0.15)", padding: "4px 10px", borderRadius: 100 }}>{count} guides</span>
                    </div>
                    <span style={{ fontFamily: fonts.display, fontSize: 22, fontWeight: 600, color: colors.white, display: "block", marginBottom: 10, lineHeight: 1.3 }}>{label}</span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", lineHeight: 1.65, marginBottom: 20, flexGrow: 1 }}>{description}</span>
                    <span data-arrow style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.9)", display: "inline-flex", alignItems: "center", gap: 4, transition: "transform 0.2s" }}>Read guides →</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ background: colors.primary, padding: "80px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Get Started</p>
            <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, color: colors.white, marginBottom: 16, lineHeight: 1.2 }}>
              Need Help Choosing Care?
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 24 }}>
              Our team can walk you through your options and connect you with the right level of support. Call or book a free consultation.
            </p>
            <a href={phone.tel} style={{ display: "block", fontSize: "1.5rem", fontWeight: 700, color: colors.accent, textDecoration: "none", marginBottom: 24 }}>{phone.display}</a>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={phone.tel} style={arcBtn.primary}>📞 Call {phone.display}</a>
              <Link href="/contact/" style={arcBtn.outline}>Book a Free Consultation</Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}