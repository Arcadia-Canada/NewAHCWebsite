"use client"

import Link from "next/link"
import { colors, fonts, phone, trustItems } from "@/components/arcadia-colors"
import HeroTemplate from "@/components/hero-template"

const conditions = [
  { label: "Dementia & Alzheimer's Care",   slug: "dementia-care-at-home",          icon: "🧠" },
  { label: "Stroke Recovery",              slug: "stroke-recovery",                icon: "🫀" },
  { label: "Parkinson's Support",          slug: "parkinsons-support",             icon: "🌹" },
  { label: "Acquired Brain Injury",        slug: "acquired-brain-injury-support",  icon: "🧩" },
  { label: "Palliative & Serious Illness", slug: "palliative-serious-illness",     icon: "🕯️" },
  { label: "Post-Hospital Recovery",       slug: "post-hospital-recovery",         icon: "🏥" },
  { label: "Frailty & Fall Prevention",    slug: "frailty-fall-prevention",        icon: "🚶" },
  { label: "Caregiver Burnout Support",    slug: "caregiver-burnout-support",      icon: "🌿" },
]

const faqs = [
  {
    q: 'What conditions does Arcadia provide home care for?',
    a: 'We support families navigating dementia, stroke recovery, Parkinson\'s, acquired brain injury, palliative and serious illness, post-hospital recovery, frailty and fall prevention, and caregiver burnout.',
  },
  {
    q: 'How does Arcadia tailor care to a specific condition?',
    a: 'Each condition page explains how we assess risk, coordinate with clinical teams, and train caregivers for condition-specific needs. Care plans are built around your loved one\'s diagnosis, daily routines, and goals.',
  },
  {
    q: 'Can Arcadia care for someone with multiple conditions?',
    a: 'Yes. Many clients have overlapping needs, such as dementia with mobility risk or post-surgical recovery with frailty. Our care managers build plans that address the full picture, not just one diagnosis.',
  },
  {
    q: 'Does Arcadia work with my parent\'s doctors and specialists?',
    a: 'With your consent, we coordinate with physicians, OTs, PTs, and Ontario Health atHome. Our case management service keeps communication flowing between your family and every professional involved.',
  },
  {
    q: 'How do I know which condition page applies to my parent?',
    a: 'If you are unsure, call us. We listen to what you are seeing at home and point you to the right resources and service level. Do you need a formal diagnosis first? You do not. A conversation is enough to get oriented.',
  },
  {
    q: 'When should I consider home care for a progressive condition?',
    a: 'Earlier than most families expect. For conditions like dementia or Parkinson\'s, consistent caregiver relationships help detect changes early and prevent crises. A consultation costs nothing and clarifies your options.',
  },
]

export default function ConditionsHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'Conditions We Support',
              description: 'Home care for dementia, brain injury, stroke, Parkinson\'s, palliative illness, and more.',
              url: 'https://www.arcadiahomecare.ca/conditions/',
              publisher: { '@type': 'Organization', name: 'Arcadia Home Care', url: 'https://www.arcadiahomecare.ca' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: { '@type': 'Answer', text: faq.a },
              })),
            },
          ]),
        }}
      />
    <main style={{ fontFamily: fonts.body, color: colors.text }}>
      <HeroTemplate
        eyebrow="Conditions We Support"
        title={<>Understanding Complex Conditions at Home</>}
        body={<p>A hub for families navigating dementia, brain injury, stroke recovery, Parkinson&apos;s, palliative illness, and more.</p>}
        actions={
          <>
            <a href={phone.tel} className="arc-btn-primary">📞 Call {phone.display}</a>
            <Link href="/contact/" className="arc-btn-outline">Book a Free Consultation</Link>
          </>
        }
        imageSrc="/images/conditions-hero-supporting-hands.png"
        imageAlt="Hands providing supportive care to an older adult"
      />

      {/* Trust strip */}
      <div style={{ background: colors.warm, borderBottom: `1px solid ${colors.border}`, padding: "12px 24px", display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
        {trustItems.map(item => (
          <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 500, color: colors.primary }}>
            <span>{item.icon}</span><span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* SEO: substantive overview (addresses thin hub content) */}
      <section style={{ background: colors.white, padding: "72px 24px 0" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(1.5rem, 2.8vw, 2rem)", fontWeight: 600, color: colors.primary, marginBottom: 20, lineHeight: 1.25 }}>
            Clinical home care shaped around diagnosis and daily life
          </h2>
          <p style={{ fontSize: 16, color: colors.textLight, lineHeight: 1.75, marginBottom: 18 }}>
            Families rarely face a single isolated symptom. Cognitive change often overlaps with mobility risk; recovery from stroke or surgery may intersect with frailty, medication complexity, or caregiver exhaustion. Arcadia&apos;s condition pages explain how we think about each situation in context — not as a label on a chart, but as a person living at home with routines, relationships, and goals worth protecting.
          </p>
          <p style={{ fontSize: 16, color: colors.textLight, lineHeight: 1.75, marginBottom: 18 }}>
            Whether you are researching dementia and Alzheimer&apos;s care, exploring support after an acquired brain injury, planning for palliative comfort at home, or trying to prevent the next fall before it happens, the same principles apply: clear communication with your family, honest alignment with your clinical team, and caregivers who are trained to notice change early. We publish these guides so you can compare what you are seeing at home with what experienced teams look for when they assess safety, dignity, and sustainability of care.
          </p>
          <p style={{ fontSize: 16, color: colors.textLight, lineHeight: 1.75, marginBottom: 18 }}>
            Use the links below to go deeper on the condition that matches your situation. If you are unsure where to start, call us — we listen first, then help you understand what level of support would make the biggest difference for your parent or spouse in Toronto and the GTA.
          </p>
        </div>
      </section>

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

      <section style={{ background: colors.white, padding: "72px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: colors.accent, marginBottom: 12 }}>Frequently Asked Questions</p>
          <h2 style={{ fontFamily: fonts.display, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 600, color: colors.primary, marginBottom: 24 }}>Common questions about conditions we support</h2>
          {faqs.map((faq) => (
            <div key={faq.q} style={{ borderBottom: `1px solid ${colors.border}`, padding: "20px 0" }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: colors.primary, margin: "0 0 10px", lineHeight: 1.5 }}>{faq.q}</h3>
              <p style={{ fontSize: 15, color: colors.textLight, lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
            </div>
          ))}
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
    </>
  )
}