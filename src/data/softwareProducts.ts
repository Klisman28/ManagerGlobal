export interface SoftwareProduct {
  id: 'pos' | 'creditos' | 'fisioterapia'
  name: string
  category: string
  description: string
  features: string[]
  accessUrl: string | null
}

export const softwareProducts: SoftwareProduct[] = [
  {
    id: 'pos',
    name: 'Punto de Venta',
    category: 'Ventas e inventario',
    description: 'Lleva tus ventas y productos en un mismo lugar.',
    features: [
      'Registro de ventas y movimientos',
      'Productos e inventario',
      'Clientes, usuarios y permisos',
      'Reportes de tu negocio',
    ],
    accessUrl: 'https://pos.managerglobalads.com/login',
  },
  {
    id: 'creditos',
    name: 'Sistema de Créditos',
    category: 'Créditos y cobros',
    description: 'Organiza tu cartera y da seguimiento a los pagos.',
    features: [
      'Registro de clientes y créditos',
      'Control de cuotas e historial de pagos',
      'Estados de cuenta y vencimientos',
      'Reportes administrativos',
    ],
    accessUrl: 'https://xn--crditosroksa-ceb.com/login',
  },
  {
    id: 'fisioterapia',
    name: 'Fisioterapia',
    category: 'Pacientes y terapias',
    description: 'Organiza tus pacientes, citas y sesiones en un mismo lugar.',
    features: [
      'Registro de pacientes e historial clínico',
      'Agenda de terapias y control de sesiones',
      'Seguimiento de evolución y tratamientos',
      'Reportes de atención',
    ],
    // Add the owner-confirmed system URL here when it is available.
    accessUrl: null,
  },
]

export function softwareQuoteMessage(product: SoftwareProduct): string {
  return `Hola, me interesa el software ${product.name}. Quisiera conocer el precio y las opciones para mi negocio.`
}

export function softwareAccessMessage(product: SoftwareProduct): string {
  return `Hola, quisiera información para acceder al sistema de ${product.name}. ¿Me pueden indicar cómo obtener acceso?`
}

export const CUSTOM_SOFTWARE_MESSAGE =
  'Hola, me interesa un proyecto de software a medida o un chatbot. Quisiera contarles mi idea y solicitar una cotización.'
