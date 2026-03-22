import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Care in Etobicoke | Dementia, ABI & Palliative Care | Arcadia",
  description: "Clinically informed home care across Etobicoke — dementia care, acquired brain injury, hospital discharge support, palliative care. Serving Etobicoke families since 2005.",
  alternates: { canonical: "https://arcadiahomecare.ca/locations/toronto/etobicoke-home-care/" },
};

const faqs = [
  {
    q: "How quickly can Arcadia start providing care in Etobicoke?",
    a: "In most cases, we can complete a care assessment within 24–48 hours and have a caregiver in place shortly after. For urgent situations — such as a discharge from Trillium Health Partners or Humber River Hospital — we prioritize same-day or next-day starts.",
  },
  {
    q: "Do you work with Trillium Health Partners and Humber River Hospital discharge teams?",
    a: "Yes. We regularly coordinate with discharge planners and social workers at both Trillium Health Partners (Mississauga and Credit Valley sites) and Humber River Hospital. If your loved one is preparing to come home, we can begin the intake process before discharge day.",
  },
  {
    q: "Can I combine Ontario Health atHome funding with Arcadia's private care in Etobicoke?",
    a: "Yes — most of our Etobicoke clients do exactly this. We help you understand your publicly funded allocation and structure private care around the gaps. Our team handles the coordination so you don't have to navigate two systems alone.",
  },
  {
    q: "Is home care covered by OHIP in Etobicoke?",
    a: "OHIP does not directly cover home care services. Publicly funded support is coordinated through Ontario Health atHome, which may provide limited nursing or personal support hours depending on clinical need. Many Etobicoke families combine these publicly funded services with private home care to ensure consistent, adequate support at home.",
  },
];

export default function EtobicokeLocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Arcadia Home Care",
              description: "Home care in Etobicoke — dementia, ABI, palliative care, hospital discharge support.",
              url: "https://arcadiahomecare.ca",
              telephone: "+18449770050",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Toronto",
                addressRegion: "ON",
                addressCountry: "CA",
              },
              areaServed: { "@type": "City", name: "Etobicoke", containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" } },
              serviceArea: { "@type": "AdministrativeArea", name: "Etobicoke" },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://arcadiahomecare.ca/" },
                { "@type": "ListItem", position: 2, name: "Locations", item: "https://arcadiahomecare.ca/locations/" },
                { "@type": "ListItem", position: 3, name: "Toronto", item: "https://arcadiahomecare.ca/locations/toronto/" },
                { "@type": "ListItem", position: 4, name: "Etobicoke", item: "https://arcadiahomecare.ca/locations/toronto/etobicoke-home-care/" },
              ],
            },
          ]),
        }}
      />

      <style>{`
        .loc-page { font-family: 'DM Sans', system-ui, sans-serif; color: #2D2D2D; }
        .loc-hero { background: #1C2B3A; padding: 96px 24px 80px; }
        .loc-hero-inner { max-width: 800px; margin: 0 auto; }
        .loc-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 14px; }
        .loc-hero h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 600; color: #fff; line-height: 1.15; margin-bottom: 20px; }
        .loc-hero p { font-size: 1.05rem; color: rgba(255,255,255,0.85); line-height: 1.8; margin-bottom: 18px; }
        .loc-hero a { color: #fff; text-decoration: underline; }
        .loc-body { max-width: 1100px; margin: 0 auto; padding: 72px 24px; display: grid; grid-template-columns: 1fr 320px; gap: 64px; align-items: start; }
        @media (max-width: 900px) { .loc-body { grid-template-columns: 1fr; } }
        .loc-article h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.6rem, 2.5vw, 2.2rem); font-weight: 600; color: #1C2B3A; line-height: 1.25; margin: 48px 0 16px; }
        .loc-article h2:first-child { margin-top: 0; }
        .loc-article p { font-size: 1rem; color: #4B5563; line-height: 1.85; margin-bottom: 18px; }
        .loc-article ul { margin: 0 0 24px 0; padding: 0; list-style: none; }
        .loc-article ul li { font-size: 0.9625rem; color: #4B5563; line-height: 1.7; padding: 8px 0 8px 22px; position: relative; border-bottom: 1px solid #F0EBE3; }
        .loc-article ul li:last-child { border-bottom: none; }
        .loc-article ul li::before { content: ''; position: absolute; left: 0; top: 16px; width: 7px; height: 7px; border-radius: 50%; background: #C8302A; }
        .loc-article a { color: #C8302A; font-weight: 600; text-decoration: underline; text-decoration-color: rgba(200,48,42,0.3); text-underline-offset: 3px; }
        .loc-article a:hover { text-decoration-color: #C8302A; }
        .faq-section { margin-top: 48px; }
        .faq-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #C8302A; margin-bottom: 12px; }
        .faq-section h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(1.6rem, 2.5vw, 2.2rem); font-weight: 600; color: #1C2B3A; margin-bottom: 28px; }
        .faq-item { border-bottom: 1px solid #E5E0D8; padding: 20px 0; }
        .faq-q { font-size: 1rem; font-weight: 700; color: #1C2B3A; margin-bottom: 10px; line-height: 1.5; }
        .faq-a { font-size: 0.9375rem; color: #4B5563; line-height: 1.8; }
        .loc-sidebar { position: sticky; top: 100px; }
        .sidebar-card { background: #FAFAF8; border: 1px solid #E5E0D8; border-radius: 14px; padding: 28px; margin-bottom: 20px; }
        .sidebar-card-title { font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #C8302A; margin-bottom: 16px; }
        .sidebar-link { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: #1C2B3A; text-decoration: none; padding: 10px 0; border-bottom: 1px solid #F0EBE3; transition: color 0.15s; }
        .sidebar-link:last-child { border-bottom: none; }
        .sidebar-link:hover { color: #C8302A; }
        .sidebar-link::before { content: '→'; color: #C8302A; font-size: 13px; }
        .sidebar-cta { background: #1C2B3A; border-radius: 14px; padding: 28px; text-align: center; }
        .sidebar-cta h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.3rem; font-weight: 600; color: #fff; margin-bottom: 8px; }
        .sidebar-cta p { font-size: 0.875rem; color: rgba(255,255,255,0.7); margin-bottom: 16px; line-height: 1.65; }
        .sidebar-phone { font-size: 1.2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 12px; }
        .btn-red-sm { background: #C8302A; color: #fff; padding: 11px 20px; border-radius: 8px; font-size: 13px; font-weight: 700; text-decoration: none; display: block; text-align: center; }
        .btn-red-sm:hover { background: #a82520; color: #fff; }
        .loc-bottom-cta { background: #1C2B3A; padding: 80px 24px; text-align: center; }
        .loc-bottom-cta h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 600; color: #fff; max-width: 680px; margin: 0 auto 14px; line-height: 1.2; }
        .loc-bottom-cta p { color: rgba(255,255,255,0.85); font-size: 1rem; max-width: 500px; margin: 0 auto 32px; line-height: 1.75; }
        .loc-bottom-cta-phone { font-size: 2rem; font-weight: 700; color: #C8302A; text-decoration: none; display: block; margin-bottom: 20px; }
        .loc-bottom-cta .btn-red, .loc-bottom-cta .btn-outline { color: #fff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; display: inline-flex; margin: 0 6px; }
        .loc-bottom-cta .btn-red { background: #C8302A; }
        .loc-bottom-cta .btn-outline { border: 1.5px solid rgba(255,255,255,0.5); background: transparent; }
      `}</style>

      <main className="loc-page">
        <section className="loc-hero">
          <div className="loc-hero-inner">
            <p className="loc-eyebrow">Serving Etobicoke Families</p>
            <h1>Home Care in Etobicoke</h1>
            <p>
              Arcadia provides clinically informed home care across Etobicoke — from dementia and
              acquired brain injury support to hospital discharge, palliative care, and daily living
              assistance. We coordinate closely with Trillium Health Partners and Humber River Hospital
              to ensure seamless transitions from hospital to home.
            </p>
            <p>
              Serving Etobicoke families since 2005.{" "}
              <Link href="/contact/">Book a free consultation →</Link>
            </p>
          </div>
        </section>

        <div className="loc-body">
          <article className="loc-article">
            <h2>Hospitals and Health Partners We Work With in Etobicoke</h2>
            <p>
              Arcadia coordinates care with discharge planners, social workers, and clinical teams
              at Etobicoke&apos;s major hospitals. Families frequently come to us during or after
              a stay at:
            </p>
            <ul>
              <li><strong>Humber River Hospital</strong> — acute and post-acute care, emergency medicine, surgery</li>
              <li><strong>Trillium Health Partners — Mississauga Hospital</strong> — cardiac, stroke, complex medicine</li>
              <li><strong>Trillium Health Partners — Credit Valley Hospital</strong> — oncology, orthopaedics, post-surgical recovery</li>
              <li><strong>West Park Healthcare Centre</strong> — rehabilitation, complex continuing care, respiratory medicine</li>
            </ul>
            <p>
              If your loved one has been discharged or is preparing to come home from any of these
              facilities, our team can often begin a care assessment within 24–48 hours.
            </p>

            <h2>Services Available Across Etobicoke</h2>
            <p>Every service Arcadia offers is available to families across Etobicoke. The most common needs we see include:</p>
            <ul>
              <li><strong>Dementia and Alzheimer&apos;s home care</strong> — caregivers trained in dementia-specific communication, redirection, and behavioural support. <Link href="/our-services/dementia-alzheimers-home-care/">Learn more →</Link></li>
              <li><strong>Acquired brain injury care</strong> — coordinated with West Park and your rehabilitation team following stroke or ABI. <Link href="/our-services/acquired-brain-injury-home-care/">Learn more →</Link></li>
              <li><strong>Hospital discharge support</strong> — safe transitions from Humber River and Trillium sites to home. <Link href="/our-services/hospital-discharge-support/">Learn more →</Link></li>
              <li><strong>Palliative home care</strong> — comfort-focused care that preserves dignity at end of life. <Link href="/our-services/palliative-home-care/">Learn more →</Link></li>
              <li><strong>Respite care</strong> — relief for family caregivers across Etobicoke. <Link href="/our-services/respite-care/">Learn more →</Link></li>
              <li><strong>Overnight and 24-hour care</strong> — for families who need continuous support at home. <Link href="/our-services/overnight-24-hour-care/">Learn more →</Link></li>
            </ul>
            <p><Link href="/our-services/">View all 12 services →</Link></p>

            <h2>Neighbourhoods We Serve in Etobicoke</h2>
            <p>Arcadia caregivers serve families across Etobicoke, including:</p>
            <p><strong>South Etobicoke:</strong> Mimico, New Toronto, Long Branch, Alderwood, Lakeshore</p>
            <p><strong>Central Etobicoke:</strong> Islington, Kingsway, Stonegate-Queensway, Markland Wood, Bloordale Gardens</p>
            <p><strong>North Etobicoke:</strong> Rexdale, Thistletown, Albion, Humber Summit, Smithfield, Mount Olive</p>
            <p>
              Etobicoke is predominantly a neighbourhood of single-family homes — and most families
              we support here want to keep it that way for as long as possible. Aging in place in
              Etobicoke often means coordinating care across a house with multiple levels, a backyard,
              and a driveway — a different set of safety considerations than a downtown condo. Many
              family caregivers we work with are split between Etobicoke and Mississauga, managing
              a parent&apos;s care from across the city or across the region. Arcadia&apos;s caregivers
              are experienced in building reliable, independent routines that give family members
              peace of mind whether they&apos;re five minutes away or across the GTA. Discharge routes
              from Humber River and Trillium typically bring patients west — we know these transitions
              well and can often begin care within 24 hours of a patient arriving home.
            </p>

            <p>
              For care in central Toronto, North York, or Scarborough, see our dedicated pages:{" "}
              <Link href="/locations/toronto/">Toronto home care →</Link>,{" "}
              <Link href="/locations/toronto/north-york-home-care/">North York home care →</Link>,{" "}
              <Link href="/locations/toronto/scarborough-home-care/">Scarborough home care →</Link>.
            </p>

            <h2>Navigating the Ontario Home Care System in Etobicoke</h2>
            <p>
              Many Etobicoke families accessing home care for the first time are unsure how to
              combine publicly funded support through Ontario Health atHome with private care.
              Wait times for public care can be long and hours limited — most families we work
              with use a combination of both.
            </p>
            <p>
              Arcadia&apos;s team can help you understand what you&apos;re entitled to through Ontario Health
              atHome, coordinate with Humber River and Trillium discharge teams, and structure
              private care to fill the gaps. We work alongside the public system — not in place of it.
              You can learn more in our guide to{" "}
              <Link href="/resources/navigating-home-care/">navigating home care in Ontario →</Link>
            </p>

            <div className="faq-section">
              <p className="faq-eyebrow">Frequently Asked Questions</p>
              <h2>Questions families ask about home care in Etobicoke</h2>
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <div className="faq-q">{faq.q}</div>
                  <div className="faq-a">{faq.a}</div>
                </div>
              ))}
            </div>
          </article>

          <aside className="loc-sidebar">
            <div className="sidebar-cta">
              <h3>Talk to our team</h3>
              <p>No obligation. We listen first and help you understand your options.</p>
              <a href="tel:+18449770050" className="sidebar-phone" aria-label="Call Arcadia Home Care">(844) 977-0050</a>
              <Link href="/contact/" className="btn-red-sm">Book a Free Consultation</Link>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-title">Related Services</div>
              <Link href="/our-services/dementia-alzheimers-home-care/" className="sidebar-link">Dementia &amp; Alzheimer&apos;s Home Care</Link>
              <Link href="/our-services/acquired-brain-injury-home-care/" className="sidebar-link">Acquired Brain Injury Care</Link>
              <Link href="/our-services/hospital-discharge-support/" className="sidebar-link">Hospital Discharge Support</Link>
              <Link href="/our-services/respite-care/" className="sidebar-link">Respite Care</Link>
            </div>
            <div className="sidebar-card">
              <div className="sidebar-card-title">Serving Your Area</div>
              <Link href="/locations/" className="sidebar-link">All Locations</Link>
              <Link href="/locations/toronto/" className="sidebar-link">Toronto</Link>
              <Link href="/locations/toronto/north-york-home-care/" className="sidebar-link">North York</Link>
              <Link href="/locations/toronto/scarborough-home-care/" className="sidebar-link">Scarborough</Link>
              <Link href="/locations/toronto/etobicoke-home-care/" className="sidebar-link">Etobicoke</Link>
            </div>
          </aside>
        </div>

        <section className="loc-bottom-cta">
          <h2>Start a Conversation About Care in Etobicoke</h2>
          <p>No obligation. Call us at (844) 977-0050 or book a free consultation — we&apos;ll listen to your situation and help you understand your options.</p>
          <a href="tel:+18449770050" className="loc-bottom-cta-phone" aria-label="Call Arcadia Home Care">(844) 977-0050</a>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact/" className="btn-red">Book a Free Consultation</Link>
            <Link href="/how-care-starts/" className="btn-outline">See how care starts</Link>
          </div>
        </section>
      </main>
    </>
  );
}
