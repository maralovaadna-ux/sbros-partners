'use client'

import { useState } from 'react'

type Shot = { src: string; caption: string }

export default function ScreenshotGallery({ shots }: { shots: Shot[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-3 gap-4 md:gap-8">
        {shots.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="flex flex-col items-center text-left"
          >
            <div className="relative w-full max-w-[220px] rounded-[2rem] border-4 border-line bg-ink overflow-hidden shadow-2xl mb-4 active:scale-[0.97] transition-transform">
              <img src={s.src} alt={s.caption} className="w-full h-auto block" />
            </div>
            <p className="text-sm text-muted text-center max-w-[200px]">{s.caption}</p>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm flex flex-col items-center justify-center px-6 py-10"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Закрыть"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface border border-line flex items-center justify-center text-cream text-xl"
          >
            ×
          </button>
          <img
            src={shots[openIndex].src}
            alt={shots[openIndex].caption}
            className="max-h-[80vh] w-auto rounded-3xl border-4 border-line shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="text-muted text-sm mt-5 text-center max-w-xs">{shots[openIndex].caption}</p>
        </div>
      )}
    </>
  )
}
