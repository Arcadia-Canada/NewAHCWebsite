export default function ReferralFormPage() {
  const fields: { label: string; required?: boolean; type?: string }[] = [
    { label: "Referring Professional Name", required: true },
    { label: "Organization / Hospital", required: true },
    { label: "Role / Title", required: true },
    { label: "Phone", required: true, type: "tel" },
    { label: "Email", required: true, type: "email" },
    { label: "Patient First Name", required: true },
  ];

  return (
    <main
      style={{
        padding: "120px 24px 80px",
        maxWidth: 1000,
        margin: "0 auto",
      }}
    >
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
          Referral Form
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
          Submit a Professional Referral
        </h1>
        <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.7 }}>
          A dedicated, clinically oriented pathway for discharge planners,
          social workers, OTs, and physicians to refer complex cases.
        </p>
      </header>

      <section
        style={{
          borderRadius: 16,
          border: "1px solid #E5E0D8",
          padding: 24,
          background: "#FAFAF8",
        }}
      >
        <form
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {fields.map((field) => (
            <div key={field.label}>
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
                {field.label}
              </label>
              <input
                type={field.type ?? "text"}
                required={field.required}
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

          <div style={{ gridColumn: "1 / -1" }}>
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
              Patient Situation / Needs
            </label>
            <textarea
              rows={5}
              required
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

          <div style={{ gridColumn: "1 / -1" }}>
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
              Urgency
            </label>
            <select
              required
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid #E5E0D8",
                fontSize: 14,
              }}
            >
              <option value="">Select urgency</option>
              <option value="immediate">Immediate</option>
              <option value="week">Within 1 week</option>
              <option value="planning">Planning ahead</option>
            </select>
          </div>

          <div style={{ gridColumn: "1 / -1", marginTop: 4 }}>
            <button
              type="submit"
              style={{
                padding: "12px 18px",
                borderRadius: 8,
                border: "none",
                background: "#1C2B3A",
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Submit Referral
            </button>
            <p style={{ fontSize: 12, color: "#9CA3AF", marginTop: 8 }}>
              Form handling TBD – connect to your chosen email / EMR workflow
              before go-live.
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}

