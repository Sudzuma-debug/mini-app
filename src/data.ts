export type TabId = 'home' | 'book' | 'loyalty' | 'profile'

export interface Service {
  id: string
  name: string
  duration: number
  price: number
  description: string
  category: 'hair' | 'beard' | 'combo' | 'care'
}

export interface Master {
  id: string
  name: string
  role: string
  rating: number
  experience: string
  specialties: string[]
  avatar: string
}

export interface TimeSlot {
  time: string
  available: boolean
}

export interface BookingDraft {
  serviceId: string | null
  masterId: string | null
  date: string | null
  time: string | null
}

export const SERVICES: Service[] = [
  {
    id: 'haircut',
    name: 'Мужская стрижка',
    duration: 45,
    price: 1800,
    description: 'Демо-услуга: классика или современный фасон',
    category: 'hair',
  },
  {
    id: 'fade',
    name: 'Фейд / машинка',
    duration: 50,
    price: 2000,
    description: 'Демо-услуга: чистые переходы и геометрия',
    category: 'hair',
  },
  {
    id: 'beard',
    name: 'Борода и усы',
    duration: 30,
    price: 1200,
    description: 'Демо-услуга: моделирование контура',
    category: 'beard',
  },
  {
    id: 'royal',
    name: 'Полный сет',
    duration: 75,
    price: 3200,
    description: 'Демо-услуга: стрижка + борода',
    category: 'combo',
  },
  {
    id: 'duo',
    name: 'Две стрижки',
    duration: 70,
    price: 2800,
    description: 'Демо-услуга: два клиента в одном визите',
    category: 'combo',
  },
  {
    id: 'care',
    name: 'Уход за волосами',
    duration: 25,
    price: 900,
    description: 'Демо-услуга: маска и укладка',
    category: 'care',
  },
]

export const MASTERS: Master[] = [
  {
    id: 'a',
    name: 'Мастер A',
    role: 'Барбер',
    rating: 4.9,
    experience: '8 лет',
    specialties: ['Фейд', 'Классика'],
    avatar: 'A',
  },
  {
    id: 'b',
    name: 'Мастер B',
    role: 'Барбер',
    rating: 4.8,
    experience: '5 лет',
    specialties: ['Борода', 'Укладка'],
    avatar: 'B',
  },
  {
    id: 'c',
    name: 'Мастер C',
    role: 'Барбер',
    rating: 5.0,
    experience: '6 лет',
    specialties: ['Креатив', 'Сеты'],
    avatar: 'C',
  },
]

export const LOYALTY = {
  points: 1240,
  tier: 'Золото',
  nextTier: 'Платина',
  pointsToNext: 260,
  cashback: 7,
  visits: 18,
  history: [
    { id: '1', title: 'Полный сет', points: 160, date: '12 июл' },
    { id: '2', title: 'Мужская стрижка', points: 90, date: '28 июн' },
    { id: '3', title: 'Борода и усы', points: 60, date: '14 июн' },
  ],
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('ru-RU').format(value) + ' ₽'
}

export function getUpcomingDates(count = 7): { iso: string; label: string; weekday: string }[] {
  const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
  const months = [
    'янв', 'фев', 'мар', 'апр', 'май', 'июн',
    'июл', 'авг', 'сен', 'окт', 'ноя', 'дек',
  ]
  const result: { iso: string; label: string; weekday: string }[] = []
  const now = new Date()

  for (let i = 0; i < count; i++) {
    const d = new Date(now)
    d.setDate(now.getDate() + i)
    const iso = d.toISOString().slice(0, 10)
    result.push({
      iso,
      label: `${d.getDate()} ${months[d.getMonth()]}`,
      weekday: i === 0 ? 'сегодня' : days[d.getDay()],
    })
  }

  return result
}

export function getSlotsForDate(date: string, masterId: string): TimeSlot[] {
  const base = ['10:00', '11:00', '12:00', '13:30', '15:00', '16:00', '17:30', '19:00']
  const seed = [...date, ...masterId].reduce((acc, ch) => acc + ch.charCodeAt(0), 0)

  return base.map((time, index) => ({
    time,
    available: (seed + index) % 4 !== 0,
  }))
}
