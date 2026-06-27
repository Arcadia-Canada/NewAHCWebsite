'use client'

import { useEffect } from 'react'

interface Props {
  formName: string
}

export default function GAFormEvent({ formName }: Props) {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof (window as { gtag?: Function }).gtag === 'function') {
      ;(window as { gtag?: Function }).gtag!('event', 'generate_lead', {
        form_name: formName,
      })
    }
  }, [formName])

  return null
}
