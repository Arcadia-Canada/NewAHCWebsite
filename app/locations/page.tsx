import type { Metadata } from "next"
import Link from "next/link"
import AnimatedHero from '@/components/ui/AnimatedHero'
import { colors, fonts, phone, trustItems } from "@/components/arcadia-colors"

export const metadata: Metadata = {
  title: "Home Care Locations Across the GTA | Arcadia Home Care",
  description: "Arcadia provides specialized in-home care across the Greater Toronto Area — Toronto, North York, Scarborough, Etobicoke — with local caregivers and clinical coordination.",
  alternates: { canonical: "https://www.arcadiahomecare.ca/locations/" },
}

const locations = [
  { label: "Toronto",     href: "/locations/toronto/",                        icon: "📍" },
  { label: "North York",  href: "/locations/toronto/north-york-home-care/",   icon: "📍" },
  { label: "Scarborough", href: "/locations/toronto/scarborough-home-care/",  icon: "📍" },
  { label: "Etobicoke",   href: "/locations/toronto/etobicoke-home-care/",    icon: "📍" },
]

export default function LocationsHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        { "@context": "https://schema.org", "@type": "LocalBusiness", name: "Arcadia Home Care", description: "Specialized in-home care for families across the Greater Toronto Area.", telephone: "+18449770050", areaServed: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 43.6532, longitude: -79.3832 }, geoRadius: "50000" } },
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.arcadiahomecare.ca/" }, { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.arcadiahomecare.ca/locations/" }] },
      ]) }} />

      <main style={{ fontFamily: fonts.body, color: colors.text }}>

        {/* Hero */}
        <AnimatedHero
          eyebrow="Locations"
          title={<>Home Care Across Toronto &<br />the Greater Toronto Area</>}
          subtitle="Arcadia Home Care provides specialized in-home care for families across the Greater Toronto Area — from downtown Toronto to the surrounding suburbs and regions."
          imageSrc="/images/heroes/locations.jpg"
          imageAlt="Senior receiving care in their Toronto home"
        >
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={phone.tel} className="arc-btn-primary">📞 Call {phone.display}</a>
            <Link href="/contact/" className="arc-btn-outline">Book a Free Consultation</Link>
          </div>
        </AnimatedHero>

        {/* Trust strip */}
        <div style={{ background: colors.warm, borderBottom: `1px solid ${colors.border}`, padding: "12px 24px", display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
          {trustItems.map(item => (
            <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 500, color: colors.primary }}>
              <span>{item.icon}</span><span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Location descriptions */}
        <section style={{ background: colors.warm, padding: "96px 24px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>

            <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 600, color: colors.primary, marginBottom: 16 }}>Toronto</h2>
            <p style={{ fontSize: 16, color: colors.textLight, lineHeight: 1.75, marginBottom: 20 }}>
              Arcadia&apos;s home base. We serve families across downtown Toronto and its inner suburbs — North York, Scarborough, and Etobicoke — with caregivers who know the neighbourhoods and the hospitals your family relies on. Our team coordinates regularly with Mount Sinai, UHN, Toronto Western, Sunnybrook, North York General, Scarborough Health Network, and Humber River Hospital.
            </p>
            <p style={{ marginBottom: 40 }}>
              <Link href="/locations/toronto/" style={{ color: colors.accent, fontWeight: 600, textDecoration: "underline" }}>See Toronto home care →</Link>
            </p>

            <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 600, color: colors.primary, marginBottom: 16 }}>North York</h2>
            <p style={{ fontSize: 16, color: colors.textLight, lineHeight: 1.75, marginBottom: 20 }}>
              Close to Sunnybrook Health Sciences Centre and North York General Hospital, North York is one of our most active service areas. Many families reach us following a hospital discharge or a new dementia diagnosis.
            </p>
            <p style={{ marginBottom: 40 }}>
              <Link href="/locations/toronto/north-york-home-care/" style={{ color: colors.accent, fontWeight: 600, textDecoration: "underline" }}>See North York home care →</Link>
            </p>

            <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 600, color: colors.primary, marginBottom: 16 }}>Scarborough</h2>
            <p style={{ fontSize: 16, color: colors.textLight, lineHeight: 1.75, marginBottom: 20 }}>
              We serve families across Scarborough in partnership with the Scarborough Health Network. Our caregivers support clients from Agincourt to Malvern, Rouge to Birchcliff — with a deep understanding of the diverse communities in this part of the city.
            </p>
            <p style={{ marginBottom: 40 }}>
              <Link href="/locations/toronto/scarborough-home-care/" style={{ color: colors.accent, fontWeight: 600, textDecoration: "underline" }}>See Scarborough home care →</Link>
            </p>

            <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 600, color: colors.primary, marginBottom: 16 }}>Etobicoke</h2>
            <p style={{ fontSize: 16, color: colors.textLight, lineHeight: 1.75, marginBottom: 20 }}>
              From Humber Bay to Rexdale, our Etobicoke caregivers work alongside Humber River Hospital and Trillium Health Partners to support families navigating complex care at home.
            </p>
            <p style={{ marginBottom: 48 }}>
              <Link href="/locations/toronto/etobicoke-home-care/" style={{ color: colors.accent, fontWeight: 600, textDecoration: "underline" }}>See Etobicoke home care →</Link>
            </p>

            {/* Location cards */}
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: colors.accent, marginBottom: 12 }}>Browse by area</p>
            <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontWeight: 600, color: colors.primary, marginBottom: 40 }}>
              Home Care Where You Live
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
              {locations.map(({ label, href, icon }) => (
                <li key={href}>
                  <Link href={href} className="arc-card">
                    <span style={{ fontSize: 32, marginBottom: 14, display: "block", lineHeight: 1 }}>{icon}</span>
                    <h3 style={{ fontFamily: fonts.display, fontSize: 19, fontWeight: 600, color: colors.primary, marginBottom: 10, lineHeight: 1.3 }}>{label}</h3>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 16, borderTop: `1px solid ${colors.border}`, marginTop: "auto" }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: colors.accent, textTransform: "uppercase", letterSpacing: "0.05em" }}>Learn More</span>
                      <span className="arc-card-arrow" style={{ fontSize: 18, color: colors.accent, transition: "all 0.2s" }}>→</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <p style={{ marginTop: 48, fontSize: 15, color: colors.textLight, textAlign: "center", maxWidth: 520, marginLeft: "auto", marginRight: "auto", lineHeight: 1.65 }}>
              Not sure which area applies?{" "}
              <a href={phone.tel} style={{ color: colors.accent, fontWeight: 600, textDecoration: "none" }}>Call us</a> — we serve the full GTA and can point you to the right page.
            </p>

            {/* Deferred regions */}
            <div style={{ marginTop: 56, paddingTop: 48, borderTop: `1px solid ${colors.border}`, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
              <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.75, marginBottom: 16 }}>
                We serve York Region including Markham, Richmond Hill, and Vaughan. Contact us to discuss care availability in your area — call{" "}
                <a href={phone.tel} style={{ color: colors.accent, fontWeight: 600, textDecoration: "none" }}>{phone.display}</a>.
              </p>
              <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.75, marginBottom: 16 }}>
                We serve Peel Region including Mississauga and Brampton. To learn more about home care where you live, call{" "}
                <a href={phone.tel} style={{ color: colors.accent, fontWeight: 600, textDecoration: "none" }}>{phone.display}</a>.
              </p>
              <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.75, marginBottom: 16 }}>
                We serve Durham Region including Oshawa, Ajax, and Whitby. Contact us to discuss care availability in your area — call{" "}
                <a href={phone.tel} style={{ color: colors.accent, fontWeight: 600, textDecoration: "none" }}>{phone.display}</a>.
              </p>
              <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.75, marginBottom: 0 }}>
                We serve Halton Region including Oakville, Burlington, and Milton. To learn more about home care where you live, call{" "}
                <a href={phone.tel} style={{ color: colors.accent, fontWeight: 600, textDecoration: "none" }}>{phone.display}</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{ background: colors.primary, padding: "80px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Get Started</p>
            <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, color: colors.white, marginBottom: 16, lineHeight: 1.2 }}>
              Not Sure Where to Start?
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 24 }}>
              It doesn&apos;t matter which part of the GTA you&apos;re in — the first step is the same. Call us or book a free consultation, and we&apos;ll help you understand what kind of care your loved one needs and how we can support your family.
            </p>
            <a href={phone.tel} style={{ display: "block", fontSize: "1.5rem", fontWeight: 700, color: colors.accent, textDecoration: "none", marginBottom: 24 }}>{phone.display}</a>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={phone.tel} className="arc-btn-primary">📞 Call {phone.display}</a>
              <Link href="/contact/" className="arc-btn-outline">Book a Free Consultation</Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}