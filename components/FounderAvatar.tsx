"use client";

import { useState } from "react";

const imgStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: 260,
  aspectRatio: "1/1",
  objectFit: "cover",
  objectPosition: "top",
  borderRadius: "50%",
  display: "block",
  margin: "0 auto",
};

const initialsStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: 260,
  aspectRatio: "1/1",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  background: "#1C2B3A",
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: "4rem",
  fontWeight: 600,
  color: "#fff",
  letterSpacing: "0.05em",
};

export default function FounderAvatar() {
  const [imgFailed, setImgFailed] = useState(false);

  if (imgFailed) {
    return (
      <div
        style={initialsStyle}
        role="img"
        aria-label="Rohit Tamhane, Founder and CEO of Arcadia Home Care"
      >
        RT
      </div>
    );
  }

  return (
    <img
      src="/images/team/rohit-tamhane.png"
      alt="Rohit Tamhane, Founder and CEO of Arcadia Home Care"
      style={imgStyle}
      onError={() => setImgFailed(true)}
    />
  );
}
