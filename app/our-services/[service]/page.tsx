const SERVICE_SLUGS = [
  "dementia-alzheimers-home-care",
  "rehabilitation-support",
  "hospital-discharge-support",
  "acquired-brain-injury-home-care",
  "palliative-home-care",
  "personal-support-daily-living",
  "companion-care",
  "respite-care",
  "overnight-24-hour-care",
  "case-management",
  "light-housekeeping",
  "downsizing-transition-support",
];

export function generateStaticParams() {
  return SERVICE_SLUGS.map((service) => ({ service }));
}

type ServicePageProps = {
  params: Promise<{ service: string }>;
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: slug } = await params;
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
          Service
        </p>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2rem, 3.4vw, 3rem)",
            fontWeight: 600,
            color: "#1C2B3A",
            marginBottom: 12,
          }}
        >
          {title}
        </h1>
        <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.7 }}>
          This page follows the Arcadia service template — ready for detailed
          copy about what this service involves, who it is right for, and what
          families can expect.
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
          What This Service Involves
        </h2>
        <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.8 }}>
          Replace this placeholder with 2–3 paragraphs describing how Arcadia
          delivers this specific service in the home — grounded in both clinical
          understanding and human dignity.
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
          Who It&apos;s Right For
        </h2>
        <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.8 }}>
          Use this section to outline the situations, diagnoses, or turning
          points where this service is especially helpful.
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
          What to Expect
        </h2>
        <ol style={{ paddingLeft: 20, fontSize: 15, color: "#4B5563", lineHeight: 1.8 }}>
          <li>Short description of the first conversation and assessment.</li>
          <li>Short description of how caregivers are matched and care begins.</li>
          <li>Short description of ongoing communication and care reviews.</li>
        </ol>
      </section>
    </main>
  );
}

