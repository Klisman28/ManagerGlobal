import type { FunctionalComponent } from 'vue'
import {
  MegaphoneIcon,
  ComputerDesktopIcon,
  CogIcon,
  FilmIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  CalendarDaysIcon,
  HeartIcon,
  WrenchScrewdriverIcon,
  BuildingLibraryIcon,
  PuzzlePieceIcon,
  TrophyIcon,
  SparklesIcon,
  HomeModernIcon,
  ClipboardDocumentListIcon,
  GlobeAltIcon,
} from '@heroicons/vue/24/outline'

export interface HomeServiceCard {
  id: string
  icon: FunctionalComponent
  title: string
  description: string
  buttonLabel: string
  to: string
}

export const homeServiceCards: HomeServiceCard[] = [
  {
    id: 'marketing',
    icon: MegaphoneIcon,
    title: 'Marketing y Publicidad',
    description:
      'Estrategias digitales, manejo de redes sociales, campañas publicitarias y diseño de contenido para negocios que buscan mayor visibilidad.',
    buttonLabel: 'Ver marketing',
    to: '/marketing-publicidad-guatemala',
  },
  {
    id: 'software',
    icon: ComputerDesktopIcon,
    title: 'Software Empresarial',
    description:
      'Sistemas para punto de venta, créditos, gestión de citas, fisioterapia y administración interna de negocios.',
    buttonLabel: 'Ver software',
    to: '/software-empresarial',
  },
  {
    id: 'industrial',
    icon: CogIcon,
    title: 'Soluciones Industriales',
    description:
      'Control de piezas, mantenimiento, inventario de repuestos y seguimiento operativo para empresas industriales.',
    buttonLabel: 'Ver soluciones',
    to: '/soluciones-industriales',
  },
  {
    id: 'luna-films',
    icon: FilmIcon,
    title: 'Luna Films',
    description:
      'Producción audiovisual, fotografía comercial, reels, videos y contenido profesional para marcas y redes sociales.',
    buttonLabel: 'Ver Luna Films',
    to: '/luna-films',
  },
]

export interface SimpleService {
  icon: FunctionalComponent
  title: string
}

export const marketingServices: SimpleService[] = [
  { icon: MegaphoneIcon, title: 'Manejo de redes sociales' },
  { icon: ComputerDesktopIcon, title: 'Diseño gráfico para redes' },
  { icon: MegaphoneIcon, title: 'Campañas publicitarias' },
  { icon: CogIcon, title: 'Estrategia digital' },
  { icon: CalendarDaysIcon, title: 'Calendario de contenido' },
  { icon: FilmIcon, title: 'Contenido para Facebook, Instagram y TikTok' },
]

export const industrialServices: SimpleService[] = [
  { icon: WrenchScrewdriverIcon, title: 'Registro de piezas' },
  { icon: ShoppingCartIcon, title: 'Inventario de repuestos' },
  { icon: CogIcon, title: 'Mantenimiento preventivo' },
  { icon: WrenchScrewdriverIcon, title: 'Mantenimiento correctivo' },
  { icon: CreditCardIcon, title: 'Alertas y reportes' },
  { icon: CalendarDaysIcon, title: 'Historial de reparaciones' },
  { icon: CogIcon, title: 'Control por equipo, área o cliente' },
]

export interface SoftwareSystem {
  id: string
  icon: FunctionalComponent
  title: string
  features: string[]
}

export const softwareSystems: SoftwareSystem[] = [
  {
    id: 'catalogo-whatsapp',
    icon: GlobeAltIcon,
    title: 'Catálogo Web con WhatsApp',
    features: [
      'Página web moderna y adaptable a celular',
      'Catálogo de productos por categorías',
      'Fotos, precios y descripciones',
      'Botón de WhatsApp por producto',
      'Panel administrativo para actualizar productos',
      'Secciones informativas del negocio',
      'Publicación en internet',
      '⚡ Opcional: Carrito de pedidos a WhatsApp',
    ],
  },
  {
    id: 'pos',
    icon: ShoppingCartIcon,
    title: 'Punto de venta',
    features: [
      'Ventas',
      'Productos',
      'Inventario',
      'Clientes',
      'Reportes',
      'Usuarios y permisos',
      'Historial de movimientos',
    ],
  },
  {
    id: 'creditos',
    icon: CreditCardIcon,
    title: 'Sistema de créditos',
    features: [
      'Registro de clientes',
      'Gestión de créditos',
      'Control de cuotas',
      'Historial de pagos',
      'Estados de cuenta',
      'Alertas de vencimiento',
      'Reportes administrativos',
    ],
  },
  {
    id: 'citas',
    icon: CalendarDaysIcon,
    title: 'Gestión de citas',
    features: [
      'Calendario de citas',
      'Registro de clientes',
      'Control de disponibilidad',
      'Historial de atención',
      'Recordatorios',
      'Gestión por usuario o sucursal',
    ],
  },
  {
    id: 'fisioterapia',
    icon: HeartIcon,
    title: 'Software para fisioterapia',
    features: [
      'Registro de pacientes',
      'Historial clínico',
      'Control de sesiones',
      'Agenda de terapias',
      'Seguimiento de evolución',
      'Notas por tratamiento',
      'Reportes de atención',
    ],
  },
  {
    id: 'clinica',
    icon: ClipboardDocumentListIcon,
    title: 'Sistema para clínicas',
    features: [
      'Registro y expediente de pacientes',
      'Historia clínica digital',
      'Gestión de citas y agenda médica',
      'Control de consultas por médico',
      'Recetas médicas digitales',
      'Gestión de pagos y facturación',
      'Inventario de medicamentos e insumos',
      'Control de médicos y especialidades',
      'Seguimiento de tratamientos',
      'Reportes de atención y estadísticas',
      'Gestión de sucursales o consultorios',
    ],
  },
  {
    id: 'condominio',
    icon: HomeModernIcon,
    title: 'Tesorería para condominios',
    features: [
      'Registro de propietarios e inquilinos',
      'Control de cuotas de mantenimiento',
      'Gestión de pagos y morosidad',
      'Estados de cuenta por unidad',
      'Control de ingresos y egresos',
      'Fondo de reserva y gastos comunes',
      'Historial de pagos por propietario',
      'Reportes financieros mensuales',
      'Gestión de asambleas y acuerdos',
      'Alertas de vencimiento de cuotas',
    ],
  },
  {
    id: 'iglesia',
    icon: BuildingLibraryIcon,
    title: 'Administración de iglesias',
    features: [
      'Registro de miembros',
      'Control de diezmos',
      'Registro de ofrendas',
      'Gestión de donaciones',
      'Control de gastos',
      'Estados de cuenta por miembro',
      'Historial de aportaciones',
      'Reportes financieros',
      'Gestión de departamentos',
      'Eventos y anuncios internos',
    ],
  },
]

export interface Benefit {
  icon: FunctionalComponent
  text: string
}

export const benefits: Benefit[] = [
  { icon: MegaphoneIcon, text: 'Diseñamos estrategias enfocadas en crecimiento.' },
  { icon: FilmIcon, text: 'Creamos contenido profesional para redes sociales.' },
  { icon: ComputerDesktopIcon, text: 'Desarrollamos software adaptado a tu negocio.' },
  { icon: CogIcon, text: 'Ayudamos a digitalizar procesos internos.' },
  { icon: WrenchScrewdriverIcon, text: 'Trabajamos soluciones para negocios en Guatemala.' },
  { icon: HeartIcon, text: 'Integramos marketing, tecnología y producción audiovisual.' },
]

export interface ClientType {
  emoji: string
  label: string
}

export const clientTypes: ClientType[] = [
  { emoji: '🍽️', label: 'Restaurantes' },
  { emoji: '🏥', label: 'Clínicas' },
  { emoji: '🏨', label: 'Hoteles' },
  { emoji: '🛍️', label: 'Tiendas' },
  { emoji: '🚀', label: 'Emprendedores' },
  { emoji: '🤝', label: 'Agencias' },
  { emoji: '🏭', label: 'Industrias' },
  { emoji: '💼', label: 'Profesionales independientes' },
]

export interface AdvergameType {
  id: string
  icon: FunctionalComponent
  emoji: string
  name: string
  tagline: string
  description: string
  benefits: string[]
}

export const advergameTypes: AdvergameType[] = [
  {
    id: 'memoria',
    icon: PuzzlePieceIcon,
    emoji: '🃏',
    name: 'Juego de Memoria',
    tagline: 'Memoriza tu marca',
    description:
      'Juego de cartas con imágenes de tu marca, productos o servicios. El usuario voltea pares buscando coincidencias mientras refuerza el reconocimiento de tu negocio.',
    benefits: [
      'Logo y colores de tu marca en cada carta',
      'Imágenes de tus productos o servicios',
      'Niveles de dificultad personalizables',
      'Tabla de puntajes y tiempo récord',
      'Compatible con móvil y desktop',
      'Compartible en redes sociales',
    ],
  },
  {
    id: 'jumper',
    icon: TrophyIcon,
    emoji: '🏃',
    name: 'Jumper de Marca',
    tagline: 'Salta con tu personaje',
    description:
      'Juego de salto infinito (endless runner) con un personaje personalizado con la identidad de tu negocio. El usuario esquiva obstáculos y colecciona elementos de tu marca.',
    benefits: [
      'Personaje con identidad de tu negocio',
      'Obstáculos y monedas con tu branding',
      'Fondo animado con colores de marca',
      'Sistema de puntuación y récords',
      'Integración con WhatsApp o landing page',
      'Apto para campañas y concursos',
    ],
  },
  {
    id: 'flappybrand',
    icon: SparklesIcon,
    emoji: '🐦',
    name: 'FlappyBrand',
    tagline: 'Vuela con tu marca',
    description:
      'Versión del famoso Flappy Bird completamente personalizada con la identidad visual de tu empresa. El personaje vuela entre obstáculos con el logo, colores y nombre de tu marca.',
    benefits: [
      'Personaje volador con logo de tu marca',
      'Obstáculos y escenario personalizado',
      'Pantalla de inicio con nombre del negocio',
      'Pantalla de game over con CTA a WhatsApp',
      'Tabla de mejores puntajes',
      'Viral y fácil de compartir',
    ],
  },
]

export const lunaFilmsServices: string[] = [
  'Sesiones fotográficas',
  'Fotografía comercial',
  'Fotografía para productos',
  'Fotografía para restaurantes',
  'Videos comerciales',
  'Videos informativos',
  'Videos testimoniales',
  'Videos documentales',
  'Cobertura de eventos',
  'Reels y TikToks',
  'Producción para redes sociales',
]
