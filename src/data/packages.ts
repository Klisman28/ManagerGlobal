export interface ServicePackage {
  id: string
  name: string
  features: string[]
  highlighted?: boolean
}

export const marketingPackages: ServicePackage[] = [
  {
    id: 'basico',
    name: 'Paquete Básico',
    features: [
      'Diseños para redes sociales',
      'Publicaciones mensuales',
      'Calendario de contenido',
      'Atención básica de redes',
    ],
  },
  {
    id: 'intermedio',
    name: 'Paquete Intermedio',
    highlighted: true,
    features: [
      'Generación de contenido',
      'Fotografía para redes',
      'Diseños y publicaciones',
      'Videos cortos para Facebook, Instagram y TikTok',
    ],
  },
  {
    id: 'premium',
    name: 'Paquete Premium',
    features: [
      'Producción completa de contenido',
      'Fotografía profesional',
      'Videos comerciales',
      'Reels y TikToks',
      'Estrategia digital',
      'Diseño gráfico',
      'Campañas publicitarias',
      'Mayor frecuencia de publicaciones',
    ],
  },
]
