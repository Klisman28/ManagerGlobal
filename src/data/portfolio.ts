export type PortfolioCategory =
  | 'Marketing digital'
  | 'Redes sociales'
  | 'Fotografía comercial'
  | 'Videos comerciales'
  | 'Luna Films'
  | 'Software empresarial'
  | 'Soluciones industriales'
  | 'Restaurantes'
  | 'Clínicas'
  | 'Hoteles'

export interface PortfolioProject {
  id: string
  title: string
  category: PortfolioCategory
  description: string
  image: string
}

export const portfolioCategories: PortfolioCategory[] = [
  'Marketing digital',
  'Redes sociales',
  'Fotografía comercial',
  'Videos comerciales',
  'Luna Films',
  'Software empresarial',
  'Soluciones industriales',
  'Restaurantes',
  'Clínicas',
  'Hoteles',
]

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'proj-01',
    title: 'Campaña digital para restaurante La Terraza',
    category: 'Restaurantes',
    description: 'Estrategia de redes sociales y campañas publicitarias para aumentar reservas y pedidos.',
    image: 'https://picsum.photos/seed/mgm-restaurante1/640/480',
  },
  {
    id: 'proj-02',
    title: 'Rediseño de redes sociales para clínica dental',
    category: 'Clínicas',
    description: 'Calendario de contenido, diseño gráfico y manejo de comunidad para una clínica dental.',
    image: 'https://picsum.photos/seed/mgm-clinica1/640/480',
  },
  {
    id: 'proj-03',
    title: 'Producción audiovisual para hotel boutique',
    category: 'Hoteles',
    description: 'Video institucional y fotografía comercial para promocionar un hotel boutique en Antigua Guatemala.',
    image: 'https://picsum.photos/seed/mgm-hotel1/640/480',
  },
  {
    id: 'proj-04',
    title: 'Sistema de punto de venta para tienda de conveniencia',
    category: 'Software empresarial',
    description: 'Implementación de sistema de ventas, inventario y reportes para una cadena de tiendas.',
    image: 'https://picsum.photos/seed/mgm-pos1/640/480',
  },
  {
    id: 'proj-05',
    title: 'Reels para marca de ropa',
    category: 'Luna Films',
    description: 'Serie de reels y contenido para TikTok que incrementó el alcance de una marca de ropa local.',
    image: 'https://picsum.photos/seed/mgm-reels1/640/480',
  },
  {
    id: 'proj-06',
    title: 'Fotografía de producto para marca de café',
    category: 'Fotografía comercial',
    description: 'Sesión de fotografía comercial de producto para catálogo y redes sociales.',
    image: 'https://picsum.photos/seed/mgm-cafe1/640/480',
  },
  {
    id: 'proj-07',
    title: 'Video comercial para clínica de fisioterapia',
    category: 'Videos comerciales',
    description: 'Video promocional para dar a conocer los servicios de un centro de fisioterapia.',
    image: 'https://picsum.photos/seed/mgm-fisio1/640/480',
  },
  {
    id: 'proj-08',
    title: 'Control de mantenimiento para planta industrial',
    category: 'Soluciones industriales',
    description: 'Sistema de control de piezas y mantenimiento preventivo para una planta de producción.',
    image: 'https://picsum.photos/seed/mgm-industrial1/640/480',
  },
  {
    id: 'proj-09',
    title: 'Estrategia de marketing digital para emprendimiento',
    category: 'Marketing digital',
    description: 'Plan de marketing digital integral para el lanzamiento de un nuevo emprendimiento.',
    image: 'https://picsum.photos/seed/mgm-marketing1/640/480',
  },
  {
    id: 'proj-10',
    title: 'Manejo de redes sociales para tienda de tecnología',
    category: 'Redes sociales',
    description: 'Gestión integral de redes sociales con contenido semanal y campañas pagadas.',
    image: 'https://picsum.photos/seed/mgm-redes1/640/480',
  },
]
