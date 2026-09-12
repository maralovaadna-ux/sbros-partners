'use client'

import { useEffect, useRef, useState } from 'react'

export default function AnimatedNumber({
  value,
  duration = 900,
  format,
}: {
  value: number
  duration?: number
  format?: (n: number) => string
}) {
  const [display, setDisplay] = useState(value)
  const fromRef = useRef(value)

  useEffect(() => {
    const from = fromRef.current
    const to = value
    if (from === to) return
    const start = performance.now()

    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3) // ease-out cubic
      const current = Math.round(from + (to - from) * eased)
      setDisplay(current)
      if (t < 1) requestAnimationFrame(tick)
      else fromRef.current = to
    }
    requestAnimationFrame(tick)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const formatted = format ? format(display) : display.toLocaleString('ru-RU')
  return <span className="tabular">{formatted}</span>
}
