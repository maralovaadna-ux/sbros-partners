import Image from 'next/image'
import Reveal from '@/components/Reveal'
import MechanicVisual from '@/components/MechanicVisual'

const WHATSAPP_LINK =
  'https://wa.me/77782784653?text=' + encodeURIComponent('Здравствуйте! Хочу разместить товар на СБРОС.')

const STEPS = [
  {
    n: '01',
    title: 'Размещаете товар',
    text: 'Присылаете нам цену, фото и сколько человек нужно набрать — мы сами всё оформим.',
  },
  {
    n: '02',
    title: 'Люди объединяются',
    text: 'Покупатели видят прогресс и приглашают знакомых — чем больше участников, тем ниже цена.',
  },
  {
    n: '03',
    title: 'Цена падает автоматически',
    text: 'Как только набирается нужное количество, все видят новую цену — без вашего участия.',
  },
  {
    n: '04',
    title: 'Вы продаёте больше за один заход',
    text: 'Забираете готовую группу покупателей — одной поставкой, без разъездов по одному адресу.',
  },
]

const BENEFITS = [
  {
    title: 'Бесплатная реклама',
    text: 'Ваш товар видят люди, которые никогда о вас не слышали — просто листая ленту предложений.',
    big: true,
  },
  {
    title: 'Проверка спроса без риска',
    text: 'Узнаёте, сколько людей реально готовы купить, до того как тратите деньги на закупку.',
  },
  {
    title: 'Экономия на доставке',
    text: 'Группа из одного дома или района — одна поездка вместо десятка отдельных.',
  },
  {
    title: 'Люди приводят людей',
    text: 'Участник сам зовёт соседей в чат дома — ему это выгодно, вам не нужно платить за рекламу.',
    big: true,
  },
  {
    title: 'Доверие новых клиентов',
    text: 'Человек видит «уже 18 участников» и решается попробовать быстрее, чем от одних отзывов.',
  },
]

const CASES = [
  {
    name: 'Айгерим',
    biz: 'домашние манты',
    text: 'Выставила партию на СБРОС: 35 000 ₸, при 20 участниках — 28 000 ₸. За 2 дня набралось 24 человека из трёх разных ЖК — половина никогда раньше не покупала. Развезла всё за один день по трём точкам.',
    highlight: '672 000 ₸',
    highlightLabel: 'выручки за один заход',
    sub: 'Минимум 12 новых клиентов.',
  },
  {
    name: 'Нурлан',
    biz: 'бытовая химия оптом',
    text: 'Обычно продавал только знакомым по одному. Выставил партию порошка на СБРОС — за неделю собралось 45 человек. Свозил всё одной машиной в один день, оплату получил заранее через Kaspi.',
    highlight: '25 000 ₸',
    highlightLabel: 'экономии на бензине и времени',
    sub: 'Деньги — ещё до выезда со склада.',
  },
  {
    name: 'Магазин техники',
    biz: 'новая партия наушников',
    text: 'Боялись вложить 500 000 ₸ и не продать. В Instagram-сторис «купили бы?» ответили «да» 40 человек. На СБРОС реально нажали «Участвовать» только 12 — узнали это до закупки, а не после.',
    highlight: '500 000 ₸',
    highlightLabel: 'не заморозили в непроданном товаре',
    sub: 'Закупили ровно под 12 реальных покупателей.',
  },
  {
    name: 'Мастер',
    biz: 'шиномонтаж',
    text: 'Предложил СБРОС на переобувку для одного ЖК. Соседи сами скинули ссылку в чат дома — набралось 18 машин за день, хотя раньше было 2–3 заказа в неделю. Приехал во двор на весь день.',
    highlight: '18 машин',
    highlightLabel: 'за один день',
    sub: 'Заработал как раньше за неделю — плюс не тратился на разъезды.',
  },
  {
    name: 'Овощная лавка',
    biz: 'только для ЖК «Алтын Орда»',
    text: 'Один сосед написал ссылку в общий чат дома: «Может, наберём вместе?» — за день набралось 27 человек, половина узнала о продавце впервые именно из этого сообщения.',
    highlight: '27 заказов',
    highlightLabel: 'без единого тенге на рекламу',
    sub: 'Минимум 13 новых клиентов.',
  },
  {
    name: 'Ресторан',
    biz: 'остатки готовых блюд',
    text: 'В конце дня остались блюда на 60 000 ₸, которые не доживут до завтра. Развозить по всему городу невыгодно — доставка съела бы выручку. Выставили СБРОС только для ближайшего ЖК, за два часа набралось 18 человек.',
    highlight: '45 000 ₸',
    highlightLabel: 'вернули вместо полного списания',
    sub: 'Плюс 18 новых знакомств с соседями.',
  },
]

export default function PartnersPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative px-6 pt-20 pb-16 md:pt-28 md:pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <Image
              src="/images/logo.png"
              alt="СБРОС"
              width={56}
              height={56}
              className="rounded-2xl mb-8"
              priority
            />
            <p className="text-lime font-mono text-xs tracking-[0.15em] uppercase mb-6">СБРОС для продавцов</p>
            <h1 className="font-display text-[2.6rem] leading-[1.05] md:text-6xl md:leading-[1.05] font-semibold mb-6 text-balance">
              Ваши покупатели сами приведут вам соседей
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-9 max-w-md">
              Разместите товар — чем больше людей объединится, тем ниже цена для всех.
              Они сами зовут друзей, потому что от этого зависит их выгода.{' '}
              <span className="text-cream">Вы не платите за рекламу.</span>
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-lime text-ink font-medium text-[15px] px-7 py-4 rounded-full hover:bg-lime-dim transition-colors"
            >
              Написать в WhatsApp
              <span aria-hidden>↗</span>
            </a>
          </div>

          <Reveal>
            <MechanicVisual />
          </Reveal>
        </div>
      </section>

      {/* ПРОБЛЕМА */}
      <section className="px-6 py-20 md:py-28 border-t border-line">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-display text-2xl md:text-4xl leading-[1.3] md:leading-[1.25] max-w-3xl mb-14">
              Реклама дорожает, а отдачи всё меньше.{' '}
              <span className="text-muted">Закупка оптом — риск: вложил деньги, а спроса может не быть.</span>{' '}
              Развозить заказы по всему городу — время и бензин, которые съедают прибыль.
            </p>
          </Reveal>
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl">
            {['Реклама', 'Риск закупки', 'Доставка'].map((label, i) => (
              <Reveal key={label} delay={i * 100}>
                <div className="border border-line rounded-xl p-4 md:p-6 text-center">
                  <div className="text-lime font-mono text-2xl md:text-3xl mb-2">↑</div>
                  <p className="text-sm md:text-base text-muted">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* КАК РАБОТАЕТ */}
      <section className="px-6 py-20 md:py-28 border-t border-line bg-surface/40">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4">Как это работает</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-lime mb-16">
              Товар → Люди → Сброс цены → Готовая группа
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="flex gap-5">
                  <span className="font-display text-lime text-2xl font-semibold shrink-0 w-10 tabular">{s.n}</span>
                  <div>
                    <h3 className="font-medium text-lg md:text-xl mb-2">{s.title}</h3>
                    <p className="text-muted leading-relaxed">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* СКРИНШОТЫ ПРИЛОЖЕНИЯ */}
      <section className="px-6 py-20 md:py-28 border-t border-line">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4">Так это выглядит внутри</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-muted mb-14 max-w-lg">
              Реальные экраны приложения — покупатель видит прогресс, цену и может написать
              продавцу напрямую.
            </p>
          </Reveal>

          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {[
              { src: '/images/screen-product.jpg', caption: 'Цена падает по мере набора участников' },
              { src: '/images/screen-feed.jpg', caption: 'Лента активных предложений в городе' },
              { src: '/images/screen-chat.jpg', caption: 'Прямая связь с продавцом в WhatsApp' },
            ].map((s, i) => (
              <Reveal key={s.src} delay={i * 90}>
                <div className="flex flex-col items-center">
                  <div className="relative w-full max-w-[220px] rounded-[2rem] border-4 border-line bg-ink overflow-hidden shadow-2xl mb-4">
                    <img src={s.src} alt={s.caption} className="w-full h-auto block" />
                  </div>
                  <p className="text-sm text-muted text-center max-w-[200px]">{s.caption}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ЗАЧЕМ ЭТО ВАМ */}
      <section className="px-6 py-20 md:py-28 border-t border-line">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mb-16">Зачем это вам</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {BENEFITS.map((b, i) => (
              <Reveal
                key={b.title}
                delay={i * 70}
                className={b.big ? 'md:col-span-2' : ''}
              >
                <div
                  className={`h-full rounded-2xl border border-line p-6 md:p-8 ${
                    b.big ? 'bg-surface' : ''
                  }`}
                >
                  <h3 className="font-display text-xl md:text-2xl font-medium mb-3">{b.title}</h3>
                  <p className="text-muted leading-relaxed text-[15px]">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* КЕЙСЫ */}
      <section className="py-20 md:py-28 border-t border-line bg-surface/40">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mb-3">Реальные примеры</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-muted mb-2">Как это уже работает для местных продавцов</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="md:hidden font-mono text-xs uppercase tracking-[0.1em] text-lime mb-10 flex items-center gap-2">
              Листайте карточки в сторону
              <span aria-hidden className="inline-block animate-pulse">→</span>
            </p>
          </Reveal>
          <div className="hidden md:block mb-14" />
        </div>

        <div
          id="cases-scroll"
          className="flex gap-5 overflow-x-auto no-scrollbar px-6 pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 md:px-6 md:max-w-5xl md:mx-auto md:snap-none"
        >
          {CASES.map((c, i) => (
            <Reveal
              key={c.name}
              delay={(i % 2) * 90}
              className="shrink-0 w-[85vw] snap-center md:w-auto md:snap-align-none"
            >
              <div className="h-full rounded-2xl border border-line bg-ink p-7 md:p-8 flex flex-col">
                <div className="mb-5">
                  <h3 className="font-display text-xl font-medium">{c.name}</h3>
                  <p className="text-sm text-muted">{c.biz}</p>
                </div>
                <p className="text-cream/80 leading-relaxed text-[15px] mb-6 flex-1">{c.text}</p>
                <div className="border-t border-line pt-5">
                  <div className="font-display text-3xl md:text-4xl font-semibold text-lime tabular mb-1">
                    {c.highlight}
                  </div>
                  <p className="text-sm text-muted">{c.highlightLabel}</p>
                  <p className="text-sm text-cream/70 mt-2">{c.sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Индикаторы прокрутки — только на мобильных */}
        <div className="flex md:hidden justify-center gap-2 mt-2">
          {CASES.map((c) => (
            <span key={c.name} className="w-1.5 h-1.5 rounded-full bg-line" />
          ))}
        </div>
      </section>

      {/* ФИНАЛЬНЫЙ CTA */}
      <section className="px-6 py-24 md:py-32 border-t border-line">
        <div className="max-w-xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mb-8">
              Хотите попробовать на своём товаре?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-muted leading-relaxed mb-2 max-w-md mx-auto">
              Напишите нам, что хотите продать — цену, фото, сколько человек нужно набрать.
            </p>
            <p className="text-cream/90 leading-relaxed mb-8 max-w-md mx-auto">
              Мы сами всё разместим и пришлём готовую ссылку. Вы просто делитесь ей со своими клиентами.
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-lime mb-10">
              Сейчас это бесплатно — мы только запускаемся
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-lime text-ink font-medium text-[15px] px-8 py-4 rounded-full hover:bg-lime-dim transition-colors"
            >
              Написать в WhatsApp
              <span aria-hidden>↗</span>
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-sm text-muted border-t border-line font-mono">
        СБРОС — Актобе
      </footer>
    </main>
  )
}
