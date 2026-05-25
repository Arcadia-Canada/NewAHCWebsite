'use client'

import { useEffect, useRef } from 'react'

type Props = {
  styles: string
  bodyHtml: string
  script: string
}

export default function InteractiveGuideEmbed({ styles, bodyHtml, script }: Props) {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    host.innerHTML = bodyHtml

    if (!script) return

    const el = document.createElement('script')
    el.textContent = script
    host.appendChild(el)

    return () => {
      host.innerHTML = ''
    }
  }, [bodyHtml, script])

  return (
    <div className="arcadia-interactive-guide">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div ref={hostRef} />
    </div>
  )
}
