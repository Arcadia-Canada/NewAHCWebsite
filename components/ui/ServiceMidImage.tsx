/**
 * ServiceMidImage.tsx
 *
 * Mid-article image for service pages — sits between content sections.
 * Renders nothing if no image is provided (safe for placeholder phase).
 *
 * Usage:
 *   import ServiceMidImage from '@/components/ui/ServiceMidImage'
 *   <ServiceMidImage src={images.midImage} alt={images.midAlt} />
 */

import Image from 'next/image'

type Props = {
  src: string
  alt: string
  caption?: string
}

export default function ServiceMidImage({ src, alt, caption }: Props) {
  if (!src) return null

  return (
    <figure
      style={{
        margin: '48px 0',
        padding: 0,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(220px, 35vw, 480px)',
          borderRadius: 12,
          overflow: 'hidden',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="(max-width: 900px) 100vw, 800px"
        />
      </div>
      {caption && (
        <figcaption
          style={{
            marginTop: 10,
            fontSize: 13,
            color: '#6B7280',
            lineHeight: 1.5,
            fontStyle: 'italic',
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
