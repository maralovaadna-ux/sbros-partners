import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import StickyWhatsApp from '@/components/StickyWhatsApp'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'СБРОС для продавцов — покупатели сами приведут вам соседей',
  description:
    'Разместите товар на СБРОС — покупатели объединяются, зовут друзей, и цена падает автоматически. Вы получаете готовую группу покупателей за один заход, без рекламы.',
  openGraph: {
    title: 'СБРОС для продавцов',
    description: 'Покупатели сами приведут вам соседей. Разместите товар бесплатно.',
    locale: 'ru_RU',
    type: 'website',
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${spaceGrotesk.variable} ${inter.variable} ${mono.variable}`}>
      <body className="bg-ink text-cream font-sans antialiased">
        {children}
        <StickyWhatsApp />
      </body>
    </html>
  )
}
