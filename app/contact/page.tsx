import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Arcadia Home Care | Toronto & GTA",
  description:
    "Book a free home care consultation in Toronto and the GTA. Speak with Arcadia about dementia care, discharge support, and family caregiver guidance.",
  alternates: {
    canonical: "https://www.arcadiahomecare.ca/contact/",
  },
};

export default function ContactPage() {
  return (
    <main
      style={{
        padding: "120px 24px 80px",
        maxWidth: 1000,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 1.5fr)",
        gap: 40,
      }}
    >
      <section>
        <header style={{ marginBottom: 24 }}>
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
            Contact
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              fontWeight: 600,
              color: "#1C2B3A",
              marginBottom: 12,
            }}
          >
            Book a Free Consultation
          </h1>
          <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.7 }}>
            There&apos;s no obligation. Just a real conversation about your
            family&apos;s situation and how Arcadia can help.
          </p>
        </header>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <div
              style={{
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#6B7280",
                marginBottom: 4,
              }}
            >
              Phone
            </div>
            <a
              href="tel:8449770050"
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#C8302A",
                textDecoration: "none",
              }}
            >
              (844) 977-0050
            </a>
          </div>
          <div>
            <div
              style={{
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#6B7280",
                marginBottom: 4,
              }}
            >
              Email
            </div>
            <a
              href="mailto:info@arcadiahomecare.ca"
              style={{ fontSize: 15, color: "#1C2B3A", textDecoration: "none" }}
            >
              info@arcadiahomecare.ca
            </a>
          </div>
          <div>
            <div
              style={{
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#6B7280",
                marginBottom: 4,
              }}
            >
              Hours
            </div>
            <p style={{ fontSize: 15, color: "#4B5563" }}>
              Mon–Fri, 9:00AM–5:00PM
            </p>
          </div>
          <div>
            <div
              style={{
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#6B7280",
                marginBottom: 4,
              }}
            >
              Address
            </div>
            <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.6 }}>
              302 Bay Street, Toronto, Ontario M5H 0B6
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          borderRadius: 16,
          border: "1px solid #E5E0D8",
          padding: 24,
          background: "#FAFAF8",
        }}
      >
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 22,
            fontWeight: 600,
            color: "#1C2B3A",
            marginBottom: 16,
          }}
        >
          Consultation Form
        </h2>
        <p style={{ fontSize: 14, color: "#6B7280", marginBottom: 16 }}>
          Fill out this short form and someone from Arcadia will call you back.
        </p>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          style={{ display: "flex", flexDirection: "column", gap: 14 }}
        >
          <input
            type="hidden"
            name="access_key"
            value="3f35a2f5-9c08-4e4c-9a5e-b9a56f24314d"
          />
          <input
            type="hidden"
            name="subject"
            value="New consultation request — Arcadia Home Care"
          />
          <input
            type="hidden"
            name="redirect"
            value="http://localhost:3000/contact/thank-you/"
          />
          <input
            type="hidden"
            name="from_name"
            value="Arcadia Home Care Contact Form"
          />

          <input type="checkbox" name="botcheck" style={{ display: "none" }} />

          <div>
            <label
              htmlFor="name"
              style={{
                display: "block",
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#6B7280",
                marginBottom: 6,
              }}
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              minLength={2}
              maxLength={80}
              autoComplete="name"
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid #E5E0D8",
                fontSize: 14,
              }}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              style={{
                display: "block",
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#6B7280",
                marginBottom: 6,
              }}
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              autoComplete="tel"
              pattern="^[0-9+()\-\s]{7,20}$"
              title="Please enter a valid phone number."
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid #E5E0D8",
                fontSize: 14,
              }}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              style={{
                display: "block",
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#6B7280",
                marginBottom: 6,
              }}
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              maxLength={120}
              autoComplete="email"
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid #E5E0D8",
                fontSize: 14,
              }}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              style={{
                display: "block",
                fontSize: 12,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#6B7280",
                marginBottom: 6,
              }}
            >
              How can we help?{" "}
              <span
                style={{
                  fontWeight: 400,
                  textTransform: "none",
                  color: "#9CA3AF",
                }}
              >
                (optional)
              </span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              maxLength={1200}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid #E5E0D8",
                fontSize: 14,
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: 4,
              padding: "12px 18px",
              borderRadius: 8,
              border: "none",
              background: "#C8302A",
              color: "#FFFFFF",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Book a Free Consultation
          </button>
        </form>
      </section>

      <section
        style={{
          gridColumn: "1 / -1",
          marginTop: 8,
          borderRadius: 16,
          border: "1px solid #E5E0D8",
          background: "#FFFFFF",
          padding: 24,
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
          Helpful Pages
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "#1C2B3A",
            marginBottom: 10,
          }}
        >
          Explore Care Options Before You Book
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <a
            href="/our-services/"
            style={{
              color: "#1C2B3A",
              textDecoration: "none",
              border: "1px solid #E5E0D8",
              borderRadius: 100,
              padding: "8px 14px",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Our Services
          </a>
          <a
            href="/conditions/"
            style={{
              color: "#1C2B3A",
              textDecoration: "none",
              border: "1px solid #E5E0D8",
              borderRadius: 100,
              padding: "8px 14px",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Conditions We Support
          </a>
          <a
            href="/how-care-starts/"
            style={{
              color: "#1C2B3A",
              textDecoration: "none",
              border: "1px solid #E5E0D8",
              borderRadius: 100,
              padding: "8px 14px",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            How Care Starts
          </a>
          <a
            href="/faqs/"
            style={{
              color: "#1C2B3A",
              textDecoration: "none",
              border: "1px solid #E5E0D8",
              borderRadius: 100,
              padding: "8px 14px",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Home Care FAQs
          </a>
        </div>
      </section>

      <section
        style={{
          gridColumn: "1 / -1",
          marginTop: 8,
          borderRadius: 16,
          border: "1px solid #E5E0D8",
          background: "#FAFAF8",
          padding: 24,
        }}
      >
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "#1C2B3A",
            marginBottom: 10,
          }}
        >
          What Happens After You Reach Out
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "#4B5563",
            lineHeight: 1.75,
            marginBottom: 14,
          }}
        >
          Your first conversation is focused on clarity, not pressure. We learn
          about your loved one&apos;s condition, daily routines, current risks,
          and what your family is carrying right now. From there, we explain
          realistic care options and a practical next step.
        </p>
        <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.75 }}>
          If you are facing an urgent transition, such as a recent diagnosis or
          a hospital discharge, tell us what timeline you are working with. We
          can often move quickly while still matching care thoughtfully.
        </p>
      </section>

      <section
        style={{
          gridColumn: "1 / -1",
          marginTop: 8,
          borderRadius: 16,
          border: "1px solid #E5E0D8",
          background: "#FFFFFF",
          padding: 24,
        }}
      >
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "#1C2B3A",
            marginBottom: 10,
          }}
        >
          Situations We Commonly Help With
        </h2>
        <ul
          style={{
            margin: 0,
            paddingLeft: 18,
            color: "#4B5563",
            lineHeight: 1.9,
            fontSize: 15,
          }}
        >
          <li>New dementia symptoms and increased supervision needs</li>
          <li>Returning home safely after hospitalization</li>
          <li>Caregiver burnout and need for reliable respite support</li>
          <li>Overnight care for safety, sleep, or wandering risk</li>
          <li>Complex ongoing support with clinical coordination</li>
        </ul>
      </section>
    </main>
  );
}