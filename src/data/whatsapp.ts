// TODO: reemplazar por el número real de WhatsApp de Manager Global Marketing (formato internacional sin +)
export const WHATSAPP_PHONE = '50212345678'

export const WHATSAPP_MESSAGES = {
  general: 'Hola, quiero información sobre los servicios de Manager Global Marketing.',
  marketing: 'Hola, quiero información sobre marketing digital para mi negocio.',
  software: 'Hola, quiero cotizar un sistema para mi negocio.',
  lunaFilms: 'Hola, quiero información sobre producción audiovisual con Luna Films.',
  industrial: 'Hola, quiero información sobre una solución para control o mantenimiento industrial.',
} as const

export type WhatsappMessageKey = keyof typeof WHATSAPP_MESSAGES

export function buildWhatsappLink(message: string = WHATSAPP_MESSAGES.general): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`
}
