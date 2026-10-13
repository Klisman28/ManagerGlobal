export const WHATSAPP_PHONE = '50258208681'
export const WHATSAPP_PHONE_DISPLAY = '+502 5820 8681'
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE}`

export const WHATSAPP_MESSAGES = {
  general: 'Hola, quiero información sobre los servicios de Manager Global Marketing.',
  marketing: 'Hola, quiero información sobre marketing digital para mi negocio.',
  software: 'Hola, quiero cotizar un sistema para mi negocio.',
  lunaFilms: 'Hola, quiero información sobre producción audiovisual con Luna Films.',
  industrial: 'Hola, quiero información sobre una solución para control o mantenimiento industrial.',
} as const

export type WhatsappMessageKey = keyof typeof WHATSAPP_MESSAGES

export interface ContactWhatsappData {
  fullName: string
  businessName?: string
  phone: string
  email: string
  service: string
  message: string
}

export function buildContactWhatsappMessage(data: ContactWhatsappData): string {
  const lines = [
    'Hola, quiero solicitar información sobre los servicios de Manager Global Marketing.',
    '',
    `Nombre: ${data.fullName.trim()}`,
  ]

  const businessName = data.businessName?.trim()
  if (businessName) lines.push(`Negocio: ${businessName}`)

  lines.push(
    `Teléfono: ${data.phone.trim()}`,
    `Correo: ${data.email.trim()}`,
    `Servicio de interés: ${data.service.trim()}`,
    `Mensaje: ${data.message.trim()}`,
  )

  return lines.join('\n')
}

export function buildWhatsappLink(message: string = WHATSAPP_MESSAGES.general): string {
  const encoded = encodeURIComponent(message)
  return `${WHATSAPP_BASE_URL}?text=${encoded}`
}
