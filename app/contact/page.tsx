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
            <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6B7280", marginBottom: 4 }}>
              Phone
            </div>
            <a
              href="tel:8449770050"
              style={{ fontSize: 20, fontWeight: 700, color: "#C8302A", textDecoration: "none" }}
            >
              (844) 977-0050
            </a>
          </div>
          <div>
            <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6B7280", marginBottom: 4 }}>
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
            <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6B7280", marginBottom: 4 }}>
              Hours
            </div>
            <p style={{ fontSize: 15, color: "#4B5563" }}>Mon–Fri, 9:00AM–5:00PM</p>
          </div>
          <div>
            <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6B7280", marginBottom: 4 }}>
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
          <input type="hidden" name="access_key" value="3f35a2f5-9c08-4e4c-9a5e-b9a56f24314d" />
          <input type="hidden" name="subject" value="New consultation request — Arcadia Home Care" />
          {[
            { label: "Full Name", name: "name", type: "text" },
            { label: "Phone Number", name: "phone", type: "tel" },
            { label: "Email Address", name: "email", type: "email" },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label
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
                {label}
              </label>
              <input
                type={type}
                name={name}
                required
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid #E5E0D8",
                  fontSize: 14,
                }}
              />
            </div>
          ))}
          <div>
            <label
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
              <span style={{ fontWeight: 400, textTransform: "none", color: "#9CA3AF" }}>
                (optional)
              </span>
            </label>
            <textarea
              name="message"
              rows={4}
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
    </main>
  );
}

