'use client'

import { ReactNode, useState } from 'react'
import Image from 'next/image'
import { colors, fonts } from '@/components/arcadia-colors'

type HeroTemplateProps = {
  eyebrow: string
  title: ReactNode
  body?: ReactNode
  actions?: ReactNode
  imageSrc: string
  imageAlt: string
  imagePriority?: boolean
  mediaBadge?: ReactNode
}

export default function HeroTemplate({
  eyebrow,
  title,
  body,
  actions,
  imageSrc,
  imageAlt,
  imagePriority = true,
  mediaBadge,
}: HeroTemplateProps) {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false)

  return (
    <section className="arc-hero-template-shell" style={{ background: colors.primary }}>
      <style>{`
        .arc-hero-template-shell {
          min-height: 92vh;
          display: flex;
          flex-direction: column;
          padding-top: 72px;
        }
        .arc-hero-template-grid {
          flex: 1;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          align-items: center;
          gap: clamp(28px, 5vw, 60px);
          padding: clamp(56px, 7vw, 80px) 24px clamp(40px, 6vw, 60px);
        }
        .arc-hero-template-copy {
          flex: 1 1 55%;
        }
        .arc-hero-template-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${colors.accent};
          margin-bottom: 16px;
        }
        .arc-hero-template-title {
          font-family: ${fonts.display};
          font-size: clamp(2.6rem, 5.5vw, 4.8rem);
          font-weight: 600;
          color: ${colors.white};
          line-height: 1.12;
          margin: 0;
        }
        .arc-hero-template-body {
          margin-top: 16px;
          margin-bottom: clamp(20px, 3.2vw, 28px);
          max-width: 540px;
        }
        .arc-hero-template-body p {
          font-size: clamp(1rem, 1.3vw, 1.125rem);
          color: rgba(255,255,255,0.75);
          line-height: 1.7;
          font-weight: 300;
          margin: 0 0 16px;
        }
        .arc-hero-template-body p:last-child {
          margin-bottom: 0;
        }
        .arc-hero-template-actions {
          display: flex;
          gap: 10px;
          justify-content: flex-start;
          flex-wrap: wrap;
        }
        .arc-hero-template-media {
          flex: 1 1 40%;
          position: relative;
          width: min(100%, clamp(300px, 40vw, 480px));
          margin: 0 auto;
        }
        .arc-hero-template-frame {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0,0,0,0.4);
        }
        .arc-hero-template-image {
          width: 100%;
          height: clamp(360px, 44vw, 520px);
          object-fit: cover;
          display: block;
        }
        .arc-hero-template-media-badge {
          position: absolute;
          bottom: clamp(-24px, -2.2vw, -16px);
          left: clamp(-24px, -2.2vw, -16px);
          max-width: clamp(185px, 22vw, 220px);
        }
        @media (max-width: 980px) {
          .arc-hero-template-grid {
            flex-direction: column;
            text-align: center;
            gap: 36px;
            padding-top: 56px;
          }
          .arc-hero-template-copy {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .arc-hero-template-actions {
            justify-content: center;
          }
          .arc-hero-template-media-badge {
            left: 50%;
            transform: translateX(-50%);
            bottom: -18px;
          }
        }
      `}</style>

      <div className="arc-hero-template-grid">
        <div className="arc-hero-template-copy">
          <p className="arc-hero-template-eyebrow">{eyebrow}</p>
          <h1 className="arc-hero-template-title">{title}</h1>
          {body ? <div className="arc-hero-template-body">{body}</div> : null}
          {actions ? <div className="arc-hero-template-actions">{actions}</div> : null}
        </div>

        <div className="arc-hero-template-media">
          <div className="arc-hero-template-frame">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={480}
              height={520}
              priority={imagePriority}
              onLoad={() => setHeroImageLoaded(true)}
              className="arc-hero-template-image"
              style={{
                opacity: heroImageLoaded ? 1 : 0,
                transform: heroImageLoaded ? 'scale(1)' : 'scale(1.03)',
                transition: 'opacity 700ms ease, transform 900ms ease',
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(28,43,58,0.3))' }} />
          </div>

          {mediaBadge ? <div className="arc-hero-template-media-badge">{mediaBadge}</div> : null}
        </div>
      </div>
    </section>
  )
}
