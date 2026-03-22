'use client'

// components/ui/AccessibilityWidget.tsx
// Fixed bottom-right font size control
// Add to: app/layout.tsx inside <body> before closing tag
// Usage: <AccessibilityWidget />

import { useState, useEffect } from 'react'

type FontSize = 'normal' | 'large' | 'larger'

const sizes: { key: FontSize; label: string; a11y: string }[] = [
  { key: 'normal',  label: 'A',  a11y: 'Normal text size'  },
  { key: 'large',   label: 'A',  a11y: 'Large text size'   },
  { key: 'larger',  label: 'A',  a11y: 'Largest text size' },
]

const scaleMap: Record<FontSize, string> = {
  normal: '100%',
  large:  '112%',
  larger: '125%',
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<FontSize>('normal')

  // Load saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem('ahc-font-size') as FontSize | null
    if (saved && scaleMap[saved]) {
      setActive(saved)
      applySize(saved)
    }
  }, [])

  function applySize(size: FontSize) {
    document.documentElement.style.fontSize = scaleMap[size]
  }

  function handleSelect(size: FontSize) {
    setActive(size)
    applySize(size)
    localStorage.setItem('ahc-font-size', size)
  }

  return (
    <>
      <style>{`
        .a11y-widget {
          position: fixed;
          bottom: 88px;
          right: 20px;
          z-index: 98;
          font-family: 'DM Sans', system-ui, sans-serif;
        }

        @media (max-width: 768px) {
          .a11y-widget {
            bottom: 76px;
            right: 12px;
          }
        }

        /* Trigger button */
        .a11y-trigger {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #1C2B3A;
          border: 2px solid #E5E0D8;
          box-shadow: 0 4px 16px rgba(28,43,58,0.2);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
        }

        .a11y-trigger:hover {
          background: #C8302A;
          border-color: #C8302A;
          transform: scale(1.05);
        }

        .a11y-trigger[aria-expanded="true"] {
          background: #C8302A;
          border-color: #C8302A;
        }

        /* Panel */
        .a11y-panel {
          position: absolute;
          bottom: 52px;
          right: 0;
          background: #fff;
          border: 1px solid #E5E0D8;
          border-radius: 12px;
          box-shadow: 0 16px 48px rgba(28,43,58,0.16);
          padding: 16px;
          width: 200px;
          transform-origin: bottom right;
          animation: panelIn 0.2s ease forwards;
        }

        @keyframes panelIn {
          from { opacity: 0; transform: scale(0.92) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        .a11y-panel-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6B7280;
          margin-bottom: 12px;
          display: block;
        }

        .a11y-size-buttons {
          display: flex;
          gap: 8px;
          align-items: flex-end;
        }

        .a11y-size-btn {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 4px;
          border-radius: 8px;
          border: 1.5px solid #E5E0D8;
          background: #FAFAF8;
          cursor: pointer;
          transition: all 0.15s;
          color: #1C2B3A;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-weight: 600;
        }

        .a11y-size-btn:hover {
          border-color: #C8302A;
          background: rgba(200,48,42,0.04);
        }

        .a11y-size-btn.active {
          border-color: #C8302A;
          background: rgba(200,48,42,0.08);
          color: #C8302A;
        }

        .a11y-size-btn:nth-child(1) .btn-letter { font-size: 14px; }
        .a11y-size-btn:nth-child(2) .btn-letter { font-size: 18px; }
        .a11y-size-btn:nth-child(3) .btn-letter { font-size: 22px; }

        .btn-letter {
          line-height: 1;
          display: block;
        }

        .btn-caption {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          opacity: 0.6;
        }

        .a11y-divider {
          height: 1px;
          background: #E5E0D8;
          margin: 12px 0;
        }

        .a11y-reset {
          width: 100%;
          padding: 8px;
          background: none;
          border: 1px solid #E5E0D8;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          color: #6B7280;
          cursor: pointer;
          font-family: 'DM Sans', system-ui, sans-serif;
          transition: all 0.15s;
        }

        .a11y-reset:hover {
          border-color: #1C2B3A;
          color: #1C2B3A;
        }
      `}</style>

      <div className="a11y-widget" role="region" aria-label="Text size controls">

        {/* Panel */}
        {open && (
          <div className="a11y-panel" role="dialog" aria-label="Adjust text size">
            <span className="a11y-panel-label">Text Size</span>

            <div className="a11y-size-buttons">
              {sizes.map((s) => (
                <button
                  key={s.key}
                  className={`a11y-size-btn ${active === s.key ? 'active' : ''}`}
                  onClick={() => handleSelect(s.key)}
                  aria-label={s.a11y}
                  aria-pressed={active === s.key}
                >
                  <span className="btn-letter">{s.label}</span>
                  <span className="btn-caption">
                    {s.key === 'normal' ? 'Normal' : s.key === 'large' ? 'Large' : 'Larger'}
                  </span>
                </button>
              ))}
            </div>

            {active !== 'normal' && (
              <>
                <div className="a11y-divider" />
                <button
                  className="a11y-reset"
                  onClick={() => handleSelect('normal')}
                  aria-label="Reset text size to normal"
                >
                  Reset to default
                </button>
              </>
            )}
          </div>
        )}

        {/* Trigger */}
        <button
          className="a11y-trigger"
          onClick={() => setOpen(!open)}
          aria-label="Text size options"
          aria-expanded={open}
          aria-haspopup="dialog"
        >
          A
        </button>

      </div>
    </>
  )
}
