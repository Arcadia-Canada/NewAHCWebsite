"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  children?: ReactNode;
  overlayCard?: ReactNode;
}

export default function AnimatedHero({
  eyebrow,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  children,
  overlayCard,
}: AnimatedHeroProps) {
  const prefersReduced = useReducedMotion();
  const M = prefersReduced ? "div" : motion.div;
  const MH1 = prefersReduced ? "h1" : motion.h1;
  const MP = prefersReduced ? "p" : motion.p;

  const fadeUp = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
        };

  return (
    <section
      style={{
        background: "#1C2B3A",
        paddingTop: 72,
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="animated-hero-grid"
        style={{
          flex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 24px 60px",
          display: "flex",
          alignItems: "center",
          gap: 60,
          width: "100%",
        }}
      >
        <div style={{ flex: "1 1 55%" }}>
          <M
            {...fadeUp(0.1)}
            style={{
              display: "inline-block",
              background: "rgba(200,48,42,0.15)",
              border: "1px solid rgba(200,48,42,0.3)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 24,
            }}
          >
            <span
              style={{
                color: "#E8867F",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </span>
          </M>

          <MH1
            {...fadeUp(0.2)}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              color: "#fff",
              marginBottom: 24,
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </MH1>

          <MP
            {...fadeUp(0.35)}
            style={{
              fontSize: 18,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.75)",
              marginBottom: 36,
              maxWidth: 540,
              fontWeight: 300,
            }}
          >
            {subtitle}
          </MP>

          {children && (
            <M {...fadeUp(0.5)}>
              {children}
            </M>
          )}
        </div>

        <M
          className="animated-hero-image"
          style={{ flex: "1 1 40%", position: "relative", maxWidth: 480 }}
          {...(prefersReduced
            ? {}
            : {
                initial: { opacity: 0, scale: 0.95, x: 40 },
                animate: { opacity: 1, scale: 1, x: 0 },
                transition: {
                  duration: 0.7,
                  delay: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              })}
        >
          <div
            style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
            }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={480}
              height={480}
              priority
              className="animated-hero-img"
              style={{
                width: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, transparent 50%, rgba(28,43,58,0.3))",
              }}
            />
          </div>
          {overlayCard}
        </M>
      </div>

      <style>{`
        .animated-hero-img {
          height: clamp(320px, 40vw, 480px);
        }
        @media (max-width: 768px) {
          .animated-hero-grid {
            flex-direction: column !important;
            padding: 60px 24px 40px !important;
            gap: 32px !important;
          }
          .animated-hero-image {
            max-width: 100% !important;
          }
          .animated-hero-img {
            height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}
