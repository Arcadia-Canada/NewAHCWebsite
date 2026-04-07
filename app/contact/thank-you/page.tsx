import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Arcadia Home Care",
  description:
    "Thank you for contacting Arcadia Home Care. Our team will review your request and follow up shortly.",
  alternates: {
    canonical: "https://www.arcadiahomecare.ca/contact/thank-you/",
  },
};

export default function ContactThankYouPage() {
  return (
    <main
      style={{
        padding: "120px 24px 80px",
        maxWidth: 1000,
        margin: "0 auto",
      }}
    >
      <section
        style={{
          borderRadius: 16,
          border: "1px solid #E5E0D8",
          background: "#FAFAF8",
          padding: 32,
          textAlign: "center",
        }}
      >
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
          Thank You
        </p>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
            fontWeight: 600,
            color: "#1C2B3A",
            marginBottom: 14,
          }}
        >
          Your Consultation Request Has Been Sent
        </h1>

        <p
          style={{
            fontSize: 15,
            color: "#4B5563",
            lineHeight: 1.8,
            maxWidth: 700,
            margin: "0 auto 14px",
          }}
        >
          Thank you for reaching out to Arcadia Home Care. Our team has received
          your message and will review your request shortly.
        </p>

        <p
          style={{
            fontSize: 15,
            color: "#4B5563",
            lineHeight: 1.8,
            maxWidth: 700,
            margin: "0 auto 22px",
          }}
        >
          If your situation is urgent, including a recent hospital discharge or
          a fast-changing care need, please call us directly so we can respond
          as quickly as possible.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <a
            href="tel:8449770050"
            style={{
              display: "inline-block",
              padding: "12px 18px",
              borderRadius: 8,
              border: "none",
              background: "#C8302A",
              color: "#FFFFFF",
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Call Arcadia
          </a>

          <a
            href="/"
            style={{
              display: "inline-block",
              padding: "12px 18px",
              borderRadius: 8,
              border: "1px solid #E5E0D8",
              background: "#FFFFFF",
              color: "#1C2B3A",
              fontSize: 15,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Go to Home Page
          </a>
        </div>
      </section>

      <section
        style={{
          marginTop: 18,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        <div
          style={{
            borderRadius: 16,
            border: "1px solid #E5E0D8",
            background: "#FFFFFF",
            padding: 24,
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 28,
              color: "#1C2B3A",
              marginBottom: 10,
            }}
          >
            What happens next
          </h2>
          <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.75 }}>
            We review your message, understand your care needs, and follow up
            with the most relevant next step based on your situation and timing.
          </p>
        </div>

        <div
          style={{
            borderRadius: 16,
            border: "1px solid #E5E0D8",
            background: "#FFFFFF",
            padding: 24,
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 28,
              color: "#1C2B3A",
              marginBottom: 10,
            }}
          >
            Helpful resources
          </h2>
          <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.75 }}>
            While you wait, you can explore our services, care process, and
            common support situations to better understand how Arcadia can help.
          </p>
        </div>
      </section>
    </main>
  );
}