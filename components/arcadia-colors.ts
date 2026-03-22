export const colors = {
  primary:   "#1C2B3A",
  accent:    "#C8302A",
  warm:      "#F7F3EE",
  white:     "#FFFFFF",
  text:      "#2D2D2D",
  textLight: "#6B7280",
  border:    "#E5E0D8",
  surface:   "#FAFAF8",

  // Cluster card backgrounds (resources hub only)
  clusterDementia:  "#7B2D1E",
  clusterCaregiver: "#6B2D4A",
  clusterHomeCare:  "#1A4A3A",
  clusterBrain:     "#1C3A5C",
} as const

export const fonts = {
  display: "'Cormorant Garamond', Georgia, serif",
  body:    "'DM Sans', system-ui, sans-serif",
} as const

export const phone = {
  display: "(844) 977-0050",
  tel:     "tel:+18449770050",
} as const

export const trustItems = [
  { icon: "⭐", text: "5.0 Google Rating · 38 Reviews" },
  { icon: "🏠", text: "Serving GTA Families Since 2005" },
  { icon: "🩺", text: "Clinically Supervised Care" },
  { icon: "📞", text: "Available 7 Days a Week" },
] as const

export const arcBtn = {
  primary: {
    display: "inline-flex" as const,
    alignItems: "center" as const,
    gap: 8,
    background: "#C8302A",
    color: "#FFFFFF",
    padding: "13px 28px",
    borderRadius: 8,
    textDecoration: "none" as const,
    fontSize: 15,
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(200,48,42,0.30)",
    transition: "background 0.2s, transform 0.2s",
    lineHeight: 1,
  },
  outline: {
    display: "inline-flex" as const,
    alignItems: "center" as const,
    gap: 8,
    background: "transparent",
    color: "#FFFFFF",
    padding: "13px 28px",
    borderRadius: 8,
    textDecoration: "none" as const,
    fontSize: 15,
    fontWeight: 600,
    border: "1.5px solid rgba(255,255,255,0.35)",
    cursor: "pointer",
    transition: "background 0.2s, border-color 0.2s",
    lineHeight: 1,
  },
} as const

export const hoverPrimary = {
  over: (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.background = "#a82520"
    e.currentTarget.style.transform = "translateY(-2px)"
  },
  out: (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.background = "#C8302A"
    e.currentTarget.style.transform = "translateY(0)"
  },
}

export const hoverOutline = {
  over: (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.background = "rgba(255,255,255,0.10)"
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.65)"
  },
  out: (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.background = "transparent"
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"
  },
}