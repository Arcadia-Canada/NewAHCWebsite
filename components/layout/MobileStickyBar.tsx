import { colors } from "@/components/arcadia-colors";

export default function MobileStickyBar() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 99,
          background: colors.primary,
          borderTop: `2px solid ${colors.accent}`,
          display: "flex",
          fontFamily: "'DM Sans', system-ui, sans-serif",
        }}
        className="mobile-sticky-bar"
      >
        <a
          href="tel:8449770050"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
            background: colors.accent,
            color: "#ffffff",
            textDecoration: "none",
            gap: 2,
          }}
        >
          <span style={{ fontSize: 18, display: "inline-block", filter: "brightness(0) invert(1)" }} aria-hidden="true">📞</span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            Call Now
          </span>
        </a>
        <a
          href="/contact/"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
            color: "#fff",
            textDecoration: "none",
            gap: 2,
          }}
        >
          <span style={{ fontSize: 18 }}>📋</span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            Book Free Consult
          </span>
        </a>
        <a
          href="/referral-form/"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
            color: "rgba(255,255,255,0.75)",
            textDecoration: "none",
            gap: 2,
          }}
        >
          <span style={{ fontSize: 18 }}>📎</span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            Referral
          </span>
        </a>
      </div>
      <style>{`
        .mobile-sticky-bar { display: none; }
        @media (max-width: 768px) {
          .mobile-sticky-bar { display: flex; }
        }
      `}</style>
    </>
  );
}
