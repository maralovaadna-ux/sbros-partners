import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08090B',
        surface: '#111318',
        line: 'rgba(255,255,255,0.08)',
        lime: '#C6FF3D',
        'lime-dim': '#8FBF2A',
        cream: '#F2F3EE',
        muted: '#8B8F96',
      },
      fontFamily: {
        display: ['var(--font-space)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
