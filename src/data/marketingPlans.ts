export interface MarketingPlan {
  id: string
  name: string
  tagline: string
  price: number
  adBudget: number
  adBreakdown: string
  paidChannels: string
  organicChannels?: string
  features: string[]
  note: string
  featured?: boolean
}

export const formatQuetzales = (amount: number) =>
  `Q${amount.toLocaleString('en-US', { maximumFractionDigits: 0 })}`

export const marketingPlans: MarketingPlan[] = [
  {
    id: 'impulso-local',
    name: 'Impulso Local',
    tagline: 'Para empezar con contenido y anuncios locales.',
    price: 2000,
    adBudget: 600,
    adBreakdown: 'En anuncios de Meta',
    paidChannels: 'Facebook e Instagram',
    features: [
      '4 diseños originales',
      '4 historias adaptadas de esos diseños',
      '1 campaña de Meta a WhatsApp',
      'Publicación del contenido',
    ],
    note: 'Trabajamos con tus fotos. No incluye grabación ni videos.',
  },
  {
    id: 'contenido-captacion',
    name: 'Contenido y Captación',
    tagline: 'Para sumar video y mostrar mejor tu negocio.',
    price: 3500,
    adBudget: 1000,
    adBreakdown: 'En anuncios de Meta',
    paidChannels: 'Facebook e Instagram',
    organicChannels: 'TikTok',
    featured: true,
    features: [
      '4 diseños + 2 videos de hasta 30 segundos',
      '8 historias adaptadas del contenido',
      '1 grabación en Xela de hasta 90 minutos',
      '1 campaña de Meta a WhatsApp',
    ],
    note: 'Publicamos el contenido y reutilizamos los videos en TikTok, sin pauta adicional.',
  },
  {
    id: 'expansion-multicanal',
    name: 'Expansión Multicanal',
    tagline: 'Para sumar anuncios en las búsquedas de Google.',
    price: 6500,
    adBudget: 2000,
    adBreakdown: 'Q1,200 en Meta + Q800 en Google',
    paidChannels: 'Facebook, Instagram y Google',
    organicChannels: 'TikTok y YouTube Shorts',
    features: [
      '6 diseños + 4 videos de hasta 30 segundos',
      '12 historias adaptadas del contenido',
      '1 grabación en Xela de hasta 2 horas',
      '1 campaña en Meta + 1 en Google Búsqueda',
    ],
    note: 'Requiere una web existente, funcional y con medición. Reutilizamos los videos en TikTok y Shorts, sin pauta en esas redes.',
  },
]

export function marketingPlanMessage(plan: MarketingPlan): string {
  return `Hola, me interesa el plan ${plan.name} de ${formatQuetzales(plan.price)} al mes, con ${formatQuetzales(plan.adBudget)} de pauta incluida. Quisiera información para mi negocio.`
}
