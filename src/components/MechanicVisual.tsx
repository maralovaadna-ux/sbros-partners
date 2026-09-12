'use client'

import { useEffect, useState } from 'react'
import AnimatedNumber from './AnimatedNumber'

const STEPS = [
  { participants: 5, price: 35000 },
  { participants: 20, price: 31000 },
  { participants: 50, price: 28000 },
]

export default function MechanicVisual() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % STEPS.length)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  const current = STEPS[step]
  const pct = (current.participants / STEPS[STEPS.length - 1].participants) * 100

  return (
    <div className="relative rounded-2xl border border-line bg-surface p-7 md:p-8">
      <div className="flex items-baseline justify-between mb-1">
        <span className="text-xs uppercase tracking-wider text-muted font-mono">Цена сейчас</span>
        <span className="text-xs uppercase tracking-wider text-muted font-mono">
          <AnimatedNumber value={current.participants} /> участников
        </span>
      </div>

      <div className="font-display text-5xl md:text-6xl font-semibold mb-6 flex items-baseline gap-2">
        <AnimatedNumber value={current.price} format={(n) => n.toLocaleString('ru-RU')} />
        <span className="text-2xl md:text-3xl text-muted font-normal">₸</span>
      </div>

      <div className="h-2.5 w-full rounded-full bg-white/5 overflow-hidden mb-6">
        <div
          className="h-full rounded-full bg-lime transition-all duration-[1200ms] ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="flex items-center justify-between">
        {STEPS.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5">
            <div
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-500 ${
                i <= step ? 'bg-lime' : 'bg-white/15'
              }`}
            />
            <span className={`text-xs font-mono ${i <= step ? 'text-cream' : 'text-muted'}`}>{s.participants}</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-muted mt-6 leading-relaxed">
        Чем больше участников — тем ниже цена. Автоматически, без вашего участия.
      </p>
    </div>
  )
}
