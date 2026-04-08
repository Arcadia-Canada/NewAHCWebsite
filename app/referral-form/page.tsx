import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Referral Form | Arcadia Home Care",
  description:
    "Submit a professional referral for home care support in Toronto and the GTA. Arcadia works with discharge planners, social workers, OTs, and physicians.",
  alternates: {
    canonical: "https://www.arcadiahomecare.ca/referral-form/",
  },
};

type Field = {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  minLength?: number;
  maxLength?: number;
  autoComplete?: string;
  pattern?: string;
  title?: string;
};

export default function ReferralFormPage() {
  const fields: Field[] = [
    {
      label: "Referring Professional Name",
      name: "referrer_name",
      required: true,
      minLength: 2,
      maxLength: 80,
      autoComplete: "name",
    },
    {
      label: "Organization / Hospital",
      name: "organization",
      required: true,
      minLength: 2,
      maxLength: 120,
      autoComplete: "organization",
    },
    {
      label: "Role / Title",
      name: "role",
      required: true,
      minLength: 2,
      maxLength: 80,
      autoComplete: "organization-title",
    },
    {
      label: "Phone",
      name: "phone",
      required: true,
      type: "tel",
      autoComplete: "tel",
      pattern: "^[0-9+()\\-\\s]{7,20}$",
      title: "Please enter a valid phone number.",
    },
    {
      label: "Email",
      name: "email",
      required: true,
      type: "email",
      autoComplete: "email",
      maxLength: 120,
    },
    {
      label: "Patient First Name",
      name: "patient_first_name",
      required: true,
      minLength: 2,
      maxLength: 80,
      autoComplete: "given-name",
    },
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
          action="https://api.web3forms.com/submit"
          method="POST"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          <input
            type="hidden"
            name="access_key"
            value="3f35a2f5-9c08-4e4c-9a5e-b9a56f24314d"
          />
          <input
            type="hidden"
            name="subject"
            value="New professional referral — Arcadia Home Care"
          />
          <input
            type="hidden"
            name="redirect"
            value="http://localhost:3000/referral-form/thank-you/"
          />
          <input
            type="hidden"
            name="from_name"
            value="Arcadia Home Care Referral Form"
          />

          {/* Honeypot for spam protection */}
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />

          {fields.map((field) => (
            <div key={field.label}>
              <label
                htmlFor={field.name}
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
                id={field.name}
                name={field.name}
                type={field.type ?? "text"}
                required={field.required}
                minLength={field.minLength}
                maxLength={field.maxLength}
                autoComplete={field.autoComplete}
                pattern={field.pattern}
                title={field.title}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1px solid #E5E0D8",
                  fontSize: 14,
                  outline: "none",
                }}
              />
            </div>
          ))}

          <div style={{ gridColumn: "1 / -1" }}>
            <label
              htmlFor="patient_needs"
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
              id="patient_needs"
              name="patient_needs"
              rows={5}
              required
              minLength={15}
              maxLength={1200}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid #E5E0D8",
                fontSize: 14,
                resize: "vertical",
                outline: "none",
              }}
            />
          </div>

          <div style={{ gridColumn: "1 / -1" }}>
            <label
              htmlFor="urgency"
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
              id="urgency"
              name="urgency"
              required
              defaultValue=""
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid #E5E0D8",
                fontSize: 14,
                outline: "none",
              }}
            >
              <option value="" disabled>
                Select urgency
              </option>
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
              After submission, you will be redirected to a confirmation page.
            </p>
          </div>
        </form>
      </section>

      <section
        style={{
          marginTop: 18,
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
          Referral Resources
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <a
            href="/healthcare-professionals/"
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
            For Professionals
          </a>
          <a
            href="/our-services/hospital-discharge-support/"
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
            Hospital Discharge Support
          </a>
          <a
            href="/our-services/case-management/"
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
            Case Management
          </a>
          <a
            href="/contact/"
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
            Family Consultation Pathway
          </a>
        </div>
      </section>

      <section
        style={{
          marginTop: 16,
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
          When To Submit a Referral
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "#4B5563",
            lineHeight: 1.75,
            marginBottom: 14,
          }}
        >
          This pathway is designed for clinicians and care coordinators who
          need dependable home support for medically and socially complex cases.
          We commonly support hospital discharge transitions, progressive
          cognitive decline, fall-risk scenarios, and families experiencing
          rapid caregiver strain.
        </p>
        <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.75 }}>
          If the situation is time-sensitive, include expected discharge date,
          current mobility status, medication considerations, and who will be
          the primary family contact. These details help us coordinate quickly
          and safely.
        </p>
      </section>

      <section
        style={{
          marginTop: 12,
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
          What Helps Us Triage Efficiently
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
          <li>Primary diagnosis and immediate care concerns</li>
          <li>Required visit cadence (daily, overnight, 24-hour, respite)</li>
          <li>Mobility, transfer, and fall-risk considerations</li>
          <li>Cognitive and behavioral profile if dementia is present</li>
          <li>Discharge timing and preferred care start date</li>
        </ul>
      </section>
    </main>
  );
}