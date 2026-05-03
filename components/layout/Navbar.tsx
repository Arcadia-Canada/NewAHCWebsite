"use client";

import { useState, useEffect } from "react";
import { colors } from "@/components/arcadia-colors";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "#ffffff",
          borderBottom: "1px solid #E5E0D8",
          transition: "all 0.3s ease",
          fontFamily: "'DM Sans', system-ui, sans-serif",
        }}
      >
        <div
          className="nav-inner"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
            flexWrap: "nowrap",
          }}
        >
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <img
              className="nav-logo"
              src="/images/arcadia-logo.svg"
              alt="Arcadia Home Care"
              width={105}
              height={40}
              style={{ flexShrink: 0 }}
            />
          </a>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 32,
              fontSize: 14,
              fontWeight: 500,
              marginLeft: 48,
            }}
            className="desktop-nav"
          >
            {[
              "Our Services",
              "Conditions",
              "How Care Starts",
              "Resources",
              "Locations",
              "About",
              "Careers",
            ].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(/ /g, "-")}/`}
                className="nav-link"
                style={{
                  color: "#1C2B3A",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <div
            style={{ display: "flex", alignItems: "center", gap: 24, marginLeft: 24 }}
            className="desktop-nav"
          >
            <a
              href="tel:8449770050"
              className="nav-phone-btn"
              style={{
                color: "#C8302A",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 600,
                background: "rgba(200,48,42,0.08)",
                border: "1px solid rgba(200,48,42,0.3)",
                padding: "8px 16px",
                borderRadius: 6,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              📞 (844) 977-0050
            </a>
            <a
              href="/contact/"
              className="nav-consult-btn"
              style={{
                background: colors.accent,
                color: "#fff",
                padding: "9px 20px",
                borderRadius: 6,
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Book a Consultation
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="mobile-menu-btn"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#1C2B3A",
              fontSize: 24,
              padding: 8,
              display: "none",
            }}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: colors.primary,
            paddingTop: 80,
            paddingLeft: 24,
            paddingRight: 24,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            fontFamily: "'DM Sans', system-ui, sans-serif",
          }}
        >
          {[
            "Our Services",
            "Conditions",
            "How Care Starts",
            "Resources",
            "Locations",
            "About",
            "Careers",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(/ /g, "-")}/`}
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: 20,
                fontWeight: 500,
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="tel:8449770050"
            style={{
              marginTop: 24,
              background: colors.accent,
              color: "#fff",
              padding: "16px 24px",
              borderRadius: 8,
              textDecoration: "none",
              fontSize: 18,
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Call (844) 977-0050
          </a>
        </div>
      )}

    </>
  );
}
