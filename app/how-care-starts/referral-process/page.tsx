import type { Metadata } from "next"
import Link from "next/link"
import { colors, fonts, phone, trustItems } from "@/components/arcadia-colors"

export const metadata: Metadata = {
  title: "Referral Process | Arcadia Home Care Toronto",
  description: "How to refer a patient or client to Arcadia Home Care in Toronto and the GTA. We work with discharge planners, social workers, OTs, case managers, and physicians.",
  alternates: { canonical: "https://www.arcadiahomecare.ca/how-care-starts/referral-process/" },
}

const whoCanRefer = [
  { icon: "🏥", label: "Hospital Discharge Planners" },
  { icon: "🧑‍⚕️", label: "Social Workers" },
  { icon: "🦽", label: "Occupational Therapists" },
  { icon: "🩺", label: "Physicians & Specialists" },
  { icon: "📋", label: "Case Managers" },
  { icon: "🏛️", label: "Ontario Health atHome Coordinators" },
  { icon: "👨‍👩‍👧", label: "Family Members" },
]

const whatIsNeeded = [
  { icon: "👤", title: "Client name and contact", desc: "Full name, phone number, and address of the person requiring care." },
  { icon: "📍", title: "Location", desc: "Home address or discharge destination — we confirm service availability immediately." },
  { icon: "🧠", title: "Primary diagnosis or condition", desc: "The main reason care is needed — dementia, ABI, post-surgical recovery, palliative, etc." },
  { icon: "📅", title: "Anticipated start date", desc: "When care is needed to begin — even a rough timeline helps us plan caregiver availability." },
  { icon: "📞", title: "Your contact information", desc: "Name, role, phone, and email so we can follow up with you directly." },
]

const whatHappensNext = [
  { num: "01", title: "We review your referral", desc: "A member of our clinical or care management team reviews the information within one business day — sooner for urgent cases." },
  { num: "02", title: "We follow up with you", desc: "We contact the referring professional directly to clarify any questions, confirm what we can provide, and discuss next steps." },
  { num: "03", title: "Assessment and matching", desc: "Where appropriate, we conduct a home assessment and select a caregiver matched to the client's specific clinical and personal requirements." },
  { num: "04", title: "Ongoing communication", desc: "We keep the referring team informed throughout — progress notes, changes in presentation, and any concerns on a schedule that works for you." },
]

export default function ReferralProcessPage() {
  return (
    <main style={{ fontFamily: fonts.body, color: colors.text }}>

      {/* Hero */}
      <section style={{ background: colors.primary, padding: "96px 24px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 320px", gap: 56, alignItems: "center" }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: colors.accent, marginBottom: 16 }}>
              How Care Starts — Step 6
            </p>
            <h1 style={{ fontFamily: fonts.display, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 600, color: colors.white, lineHeight: 1.15, marginBottom: 0 }}>
              Referring a Patient or Client to Arcadia
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, fontWeight: 300, margin: "16px 0 32px" }}>
              For healthcare professionals and discharge planners across the GTA. Families are also welcome to refer directly — call us or submit the form below.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/referral-form/" className="arc-btn-primary">Submit a Referral →</Link>
              <a href={phone.tel} className="arc-btn-outline">📞 Call {phone.display}</a>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: 28 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>
              Urgent referral?
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.65, marginBottom: 20 }}>
              For time-sensitive discharges or complex cases, calling directly is the fastest route.
            </p>
            <a href={phone.tel} style={{ display: "block", fontSize: "1.4rem", fontWeight: 700, color: colors.accent, textDecoration: "none", marginBottom: 16 }}>
              {phone.display}
            </a>
            <a href="mailto:info@arcadiahomecare.ca" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>
              info@arcadiahomecare.ca
            </a>
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

      {/* Main content */}
      <section style={{ background: colors.warm, padding: "96px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 300px", gap: 56, alignItems: "start" }}>

          {/* Left column */}
          <div>

            {/* Who can refer */}
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: colors.accent, marginBottom: 12 }}>Who can refer</p>
            <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600, color: colors.primary, marginBottom: 24 }}>
              We Accept Referrals From
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 64px 0", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
              {whoCanRefer.map(({ icon, label }) => (
                <li key={label} style={{ display: "flex", alignItems: "center", gap: 12, background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: 10, padding: "14px 16px" }}>
                  <span style={{ fontSize: 22 }}>{icon}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: colors.primary }}>{label}</span>
                </li>
              ))}
            </ul>

            {/* What is needed */}
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: colors.accent, marginBottom: 12 }}>What you need</p>
            <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600, color: colors.primary, marginBottom: 24 }}>
              Information Needed to Refer
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 64px 0", display: "flex", flexDirection: "column", gap: 16 }}>
              {whatIsNeeded.map(({ icon, title, desc }) => (
                <li key={title} className="arc-card" style={{ flexDirection: "row", alignItems: "flex-start", gap: 16 }}>
                  <span style={{ fontSize: 28, flexShrink: 0, marginTop: 2 }}>{icon}</span>
                  <div>
                    <h3 style={{ fontFamily: fonts.display, fontSize: 18, fontWeight: 600, color: colors.primary, marginBottom: 4 }}>{title}</h3>
                    <p style={{ fontSize: 14, color: colors.textLight, lineHeight: 1.65, margin: 0 }}>{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* What happens next */}
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: colors.accent, marginBottom: 12 }}>After you refer</p>
            <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600, color: colors.primary, marginBottom: 24 }}>
              What Happens After Referral
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {whatHappensNext.map(({ num, title, desc }) => (
                <li key={num} className="arc-card" style={{ flexDirection: "row", alignItems: "flex-start", gap: 20 }}>
                  <span style={{ fontFamily: fonts.display, fontSize: 36, fontWeight: 600, color: colors.accent, opacity: 0.9, flexShrink: 0, lineHeight: 1 }}>{num}</span>
                  <div>
                    <h3 style={{ fontFamily: fonts.display, fontSize: 18, fontWeight: 600, color: colors.primary, marginBottom: 4 }}>{title}</h3>
                    <p style={{ fontSize: 14, color: colors.textLight, lineHeight: 1.65, margin: 0 }}>{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

          </div>

          {/* Right sticky sidebar */}
          <div style={{ position: "sticky", top: 100 }}>
            <div style={{ background: colors.primary, borderRadius: 14, padding: 28, marginBottom: 20, textAlign: "center" }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>
                Ready to refer?
              </p>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.65, marginBottom: 20 }}>
                Submit a referral online and we will follow up within one business day.
              </p>
              <Link href="/referral-form/" className="arc-btn-primary" style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                Submit a Referral →
              </Link>
              <a href={phone.tel} style={{ display: "block", fontSize: "1.1rem", fontWeight: 700, color: colors.accent, textDecoration: "none", marginTop: 16 }}>
                {phone.display}
              </a>
            </div>

            <div style={{ background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: 14, padding: 24, marginBottom: 20 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: colors.accent, marginBottom: 16 }}>
                Services we accept referrals for
              </p>
              {[
                { label: "Acquired Brain Injury Care", href: "/our-services/acquired-brain-injury-home-care/" },
                { label: "Dementia & Alzheimer's Care", href: "/our-services/dementia-alzheimers-home-care/" },
                { label: "Rehabilitation Support", href: "/our-services/rehabilitation-support/" },
                { label: "Palliative Home Care", href: "/our-services/palliative-home-care/" },
                { label: "Hospital Discharge Support", href: "/our-services/hospital-discharge-support/" },
                { label: "Case Management", href: "/our-services/case-management/" },
              ].map(({ label, href }) => (
                <Link key={href} href={href} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: colors.primary, textDecoration: "none", padding: "10px 0", borderBottom: `1px solid ${colors.border}` }}>
                  <span style={{ color: colors.accent }}>→</span> {label}
                </Link>
              ))}
            </div>

            <div style={{ background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: 14, padding: 24 }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: colors.accent, marginBottom: 16 }}>
                Funded care experience
              </p>
              {["Auto Insurance (SABS)", "WSIB", "Veterans Affairs Canada", "Ontario Health atHome"].map(item => (
                <div key={item} style={{ fontSize: 14, fontWeight: 600, color: colors.primary, padding: "10px 0", borderBottom: `1px solid ${colors.border}` }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: colors.primary, padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Get Started</p>
          <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, color: colors.white, marginBottom: 16, lineHeight: 1.2 }}>
            Ready to Refer a Patient?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 24 }}>
            Submit a referral online or call us directly. For urgent cases we aim to respond the same day.
          </p>
          <a href={phone.tel} style={{ display: "block", fontSize: "1.5rem", fontWeight: 700, color: colors.accent, textDecoration: "none", marginBottom: 24 }}>{phone.display}</a>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/referral-form/" className="arc-btn-primary">Submit a Referral →</Link>
            <a href={phone.tel} className="arc-btn-outline">📞 Call {phone.display}</a>
          </div>
        </div>
      </section>

    </main>
  )
}