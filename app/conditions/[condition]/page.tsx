const CONDITION_SLUGS = [
  "dementia-care-at-home",
  "stroke-recovery",
  "parkinsons-support",
  "acquired-brain-injury-support",
  "palliative-serious-illness",
  "frailty-fall-prevention",
  "post-hospital-recovery",
  "caregiver-burnout-support",
];

export function generateStaticParams() {
  return CONDITION_SLUGS.map((condition) => ({ condition }));
}

type ConditionPageProps = {
  params: Promise<{ condition: string }>;
};

export default async function ConditionPage({ params }: ConditionPageProps) {
  const { condition: slug } = await params;
  const title = slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  return (
    <main style={{ padding: "120px 24px 80px", maxWidth: 900, margin: "0 auto" }}>
      <header style={{ marginBottom: 32 }}>
        <p
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#C8302A",
            marginBottom: 12,
          }}
        >
          Condition
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2rem, 3.4vw, 3.1rem)",
            fontWeight: 600,
            color: "#1C2B3A",
            marginBottom: 12,
          }}
        >
          {title}
        </h1>
        <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.7 }}>
          This page follows the Arcadia condition template — ready for clear,
          empathetic explanations of the condition and how home care helps.
        </p>
      </header>

      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 24,
            fontWeight: 600,
            color: "#1C2B3A",
            marginBottom: 12,
          }}
        >
          Understanding {title} at Home
        </h2>
        <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.8 }}>
          Replace this placeholder with a clinically grounded but accessible
          overview of what this condition looks like at home — in language
          families can recognize.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 24,
            fontWeight: 600,
            color: "#1C2B3A",
            marginBottom: 12,
          }}
        >
          How Home Care Helps
        </h2>
        <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.8 }}>
          Outline the specific ways Arcadia caregivers support safety, routines,
          and dignity for someone living with this condition — and how the team
          works alongside the clinical providers.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 24,
            fontWeight: 600,
            color: "#1C2B3A",
            marginBottom: 12,
          }}
        >
          Our Approach to {title} Care
        </h2>
        <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.8 }}>
          Use this section for Arcadia&apos;s philosophy of care, training, and
          coordination model for this condition.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 22,
            fontWeight: 600,
            color: "#1C2B3A",
            marginBottom: 12,
          }}
        >
          Related Services &amp; Guides
        </h2>
        <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.8 }}>
          Placeholder to link to the most relevant Arcadia services and family
          guides for this condition.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 22,
            fontWeight: 600,
            color: "#1C2B3A",
            marginBottom: 12,
          }}
        >
          Frequently Asked Questions
        </h2>
        <ul style={{ paddingLeft: 20, fontSize: 15, color: "#4B5563", lineHeight: 1.8 }}>
          <li>Example FAQ question about this condition and home care.</li>
          <li>Example FAQ about caregiver roles, safety, and oversight.</li>
          <li>Example FAQ about funding, hours, or coordination.</li>
        </ul>
      </section>

      <section
        style={{
          marginTop: 32,
          paddingTop: 24,
          borderTop: "1px solid #E5E0D8",
        }}
      >
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 24,
            fontWeight: 600,
            color: "#1C2B3A",
            marginBottom: 12,
          }}
        >
          Talk to Us About {title}
        </h2>
        <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.8, marginBottom: 12 }}>
          Close with a CTA that reassures families they don&apos;t have to
          navigate this condition alone.
        </p>
        <a
          href="/contact/"
          style={{
            display: "inline-block",
            padding: "12px 22px",
            borderRadius: 8,
            background: "#C8302A",
            color: "#FFFFFF",
            fontSize: 15,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Book a Free Consultation
        </a>
      </section>
    </main>
  );
}

