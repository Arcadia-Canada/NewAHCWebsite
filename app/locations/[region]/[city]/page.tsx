import type { Metadata } from "next";
import Link from "next/link";

const REGION_CITY_PAIRS: { region: string; city: string }[] = [
  { region: "toronto", city: "north-york-home-care" },
  { region: "toronto", city: "scarborough-home-care" },
  { region: "toronto", city: "etobicoke-home-care" },
  { region: "york-region", city: "markham-home-care" },
  { region: "york-region", city: "richmond-hill-home-care" },
  { region: "peel-region", city: "mississauga-home-care" },
];

export function generateStaticParams() {
  return REGION_CITY_PAIRS;
}

type CityPageProps = {
  params: Promise<{ region: string; city: string }>;
};

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { region, city } = await params;
  const cityLabel = citySlugToLabel(city);
  const regionLabel = region
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  return {
    title: `${cityLabel} Home Care | Arcadia Home Care`,
    description: `Home care in ${cityLabel}, ${regionLabel}. Arcadia supports families with dementia care, rehabilitation support, and post-hospital transition planning.`,
    alternates: {
      canonical: `https://www.arcadiahomecare.ca/locations/${region}/${city}/`,
    },
  };
}

const colors = {
  primary: "#1C2B3A",
  accent: "#C8302A",
  warm: "#F7F3EE",
  border: "#E5E0D8",
  text: "#2D2D2D",
  textLight: "#6B7280",
  white: "#FFFFFF",
};

const trustItems = [
  { icon: "⭐", text: "5.0 Rating" },
  { icon: "🏠", text: "Since 2005" },
  { icon: "🩺", text: "Clinical Care" },
  { icon: "📞", text: "7 Days" },
];

/** e.g. "north-york-home-care" -> "North York" */
function citySlugToLabel(slug: string): string {
  const withoutSuffix = slug.replace(/-home-care$/, "");
  return withoutSuffix
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default async function CityLocationPage({ params }: CityPageProps) {
  const { city } = await params;
  const cityLabel = citySlugToLabel(city);

  return (
    <main
      style={{
        fontFamily: "'DM Sans', system-ui, sans-serif",
        color: colors.text,
      }}
    >
      {/* Hero — dark navy */}
      <section
        style={{
          background: colors.primary,
          padding: "96px 24px 80px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: colors.accent,
              marginBottom: 16,
            }}
          >
            Location
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)",
              fontWeight: 600,
              color: colors.white,
              marginBottom: 20,
              lineHeight: 1.2,
            }}
          >
            Home Care in {cityLabel}
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Clinically guided, compassionate home care for families in {cityLabel}.
            We bring expertise and dignity to every home we serve.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:8449770050" className="loc-city-btn loc-city-btn-red">
              📞 Call (844) 977-0050
            </a>
            <Link href="/contact/" className="loc-city-btn loc-city-btn-outline">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div
        style={{
          background: colors.warm,
          borderBottom: `1px solid ${colors.border}`,
          padding: "12px 24px",
          display: "flex",
          justifyContent: "center",
          gap: 40,
          flexWrap: "wrap",
        }}
      >
        {trustItems.map((item) => (
          <div
            key={item.text}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              fontWeight: 500,
              color: colors.primary,
            }}
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* Placeholder content block — replace with unique local content per Locations.md */}
      <section
        style={{
          background: colors.warm,
          padding: "96px 24px 80px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 16,
              color: colors.textLight,
              lineHeight: 1.7,
            }}
          >
            This page will include unique local content for {cityLabel}: nearby
            hospitals, neighbourhoods served, local health context, and a CTA.
            See Locations.md for the required structure and copy per city.
          </p>
        </div>
      </section>

      {/* Bottom CTA — dark navy */}
      <section
        style={{
          background: colors.primary,
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              marginBottom: 16,
            }}
          >
            Get Started
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 600,
              color: colors.white,
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            One Conversation Can Clarify What Your Family Needs
          </h2>
          <a
            href="tel:8449770050"
            style={{
              display: "block",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: colors.accent,
              textDecoration: "none",
              marginBottom: 24,
            }}
          >
            (844) 977-0050
          </a>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:8449770050" className="loc-city-btn loc-city-btn-red">
              📞 Call (844) 977-0050
            </a>
            <Link href="/contact/" className="loc-city-btn loc-city-btn-outline">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .loc-city-btn { display: inline-flex; align-items: center; gap: 10px; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 700; text-decoration: none; transition: background 0.2s, transform 0.2s, color 0.2s, border-color 0.2s; }
        .loc-city-btn-red { background: #C8302A; color: #fff; box-shadow: 0 8px 20px rgba(200,48,42,0.3); }
        .loc-city-btn-red:hover { background: #a82520; transform: translateY(-2px); color: #fff; }
        .loc-city-btn-outline { background: transparent; border: 1.5px solid rgba(255,255,255,0.5); color: #fff; }
        .loc-city-btn-outline:hover { background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.7); color: #fff; }
      `}</style>
    </main>
  );
}
