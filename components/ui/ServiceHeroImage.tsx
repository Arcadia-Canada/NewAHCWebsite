/**
 * ServiceHeroImage.tsx
 * 
 * Full-width hero image for service pages.
 * Renders nothing if no image is provided (safe for placeholder phase).
 * 
 * Usage:
 *   import ServiceHeroImage from '@/components/ui/ServiceHeroImage'
 *   <ServiceHeroImage src={images.heroImage} alt={images.heroAlt} />
 */

import Image from 'next/image'

type Props = {
  src: string
  alt: string
  priority?: boolean
}

export default function ServiceHeroImage({ src, alt, priority = true }: Props) {
  if (!src) return null

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(280px, 40vw, 520px)',
        overflow: 'hidden',
        borderRadius: 0,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        sizes="100vw"
      />
    </div>
  )
}
