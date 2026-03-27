"use client"

import Link from "next/link"
import { colors, fonts, phone, trustItems } from "@/components/arcadia-colors"

const conditions = [
  { label: "Dementia Care at Home",        slug: "dementia-care-at-home",          icon: "🧠" },
  { label: "Alzheimer's Care",             slug: "alzheimers-care",                icon: "💜" },
  { label: "Stroke Recovery",              slug: "stroke-recovery",                icon: "🫀" },
  { label: "Parkinson's Support",          slug: "parkinsons-support",             icon: "🌹" },
  { label: "Acquired Brain Injury",        slug: "acquired-brain-injury-support",  icon: "🧩" },
  { label: "Palliative & Serious Illness", slug: "palliative-serious-illness",     icon: "🕯️" },
  { label: "Post-Hospital Recovery",       slug: "post-hospital-recovery",         icon: "🏥" },
  { label: "Frailty & Fall Prevention",    slug: "frailty-fall-prevention",        icon: "🚶" },
  { label: "Caregiver Burnout Support",    slug: "caregiver-burnout-support",      icon: "🌿" },
]

export default function ConditionsHubPage() {
  return (
    <main style={{ fontFamily: fonts.body, color: colors.text }}>

      {/* Hero */}
      <section style={{ background: colors.primary, padding: "96px 24px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: colors.accent, marginBottom: 16 }}>
            Conditions We Support
          </p>
          <h1 style={{ fontFamily: fonts.display, fontSize: "clamp(2.4rem, 5.5vw, 4.4rem)", fontWeight: 600, color: colors.white, lineHeight: 1.15, marginBottom: 0 }}>
            Understanding Complex Conditions at Home
          </h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, fontWeight: 300, margin: "16px 0 32px" }}>
            A hub for families navigating dementia, brain injury, stroke recovery, Parkinson&apos;s, palliative illness, and more.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={phone.tel} className="arc-btn-primary">📞 Call {phone.display}</a>
            <Link href="/contact/" className="arc-btn-outline">Book a Free Consultation</Link>
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

      {/* Condition cards */}
      <section style={{ background: colors.warm, padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: colors.accent, marginBottom: 12 }}>
            Browse by condition
          </p>
          <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontWeight: 600, color: colors.primary, marginBottom: 40 }}>
            We Understand What Your Family Is Facing
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
            {conditions.map(({ label, slug, icon }) => (
              <li key={slug}>
                <Link href={`/conditions/${slug}/`} className="arc-card">
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
            Not sure which condition applies?{" "}
            <a href={phone.tel} style={{ color: colors.accent, fontWeight: 600, textDecoration: "none" }}>Call us</a>
            {" "}— we&apos;ll listen and point you in the right direction.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: colors.primary, padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Get Started</p>
          <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600, color: colors.white, marginBottom: 16, lineHeight: 1.2 }}>
            One Conversation Can Clarify What Your Family Needs
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 24 }}>
            No obligation. We listen first — then help you understand your options.
          </p>
          <a href={phone.tel} style={{ display: "block", fontSize: "1.5rem", fontWeight: 700, color: colors.accent, textDecoration: "none", marginBottom: 24 }}>{phone.display}</a>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={phone.tel} className="arc-btn-primary">📞 Call {phone.display}</a>
            <Link href="/contact/" className="arc-btn-outline">Book a Free Consultation</Link>
          </div>
        </div>
      </section>

    </main>
  )
}