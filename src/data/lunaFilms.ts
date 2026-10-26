export interface LunaFilmsImage {
  id: string
  title: string
  category: string
  src: string
  alt: string
  width: number
  height: number
}

export const lunaFilmsImages: LunaFilmsImage[] = [
  {
    id: 'clutches-japon',
    title: 'Clutches Japón',
    category: 'Diseño para redes',
    src: '/media/luna-films/clutches-japon.jpg',
    alt: 'Diseño publicitario de Clutches Japón con camiones y piezas de embrague.',
    width: 1280,
    height: 1280,
  },
  {
    id: 'lubricantes-cifuentes',
    title: 'Lubricantes Cifuentes',
    category: 'Diseño para redes',
    src: '/media/luna-films/lubricantes-cifuentes.jpg',
    alt: 'Diseño de Lubricantes Cifuentes sobre la revisión de niveles del vehículo.',
    width: 1280,
    height: 1280,
  },
  {
    id: 'bike-xela',
    title: 'Bike Xela',
    category: 'Diseño para redes',
    src: '/media/luna-films/bike-xela.jpg',
    alt: 'Diseño de Bike Xela para promocionar sudaderas Go Rigo Go.',
    width: 1280,
    height: 1280,
  },
  {
    id: 'dr-jogo-barrios',
    title: 'Dr. Jogo Barrios',
    category: 'Diseño para redes',
    src: '/media/luna-films/dr-jogo-barrios.jpg',
    alt: 'Diseño de servicios de cirugía del Dr. Jogo Barrios.',
    width: 1080,
    height: 1080,
  },
  {
    id: 'dr-paolo-barrios',
    title: 'Dr. Paolo Barrios',
    category: 'Diseño para redes',
    src: '/media/luna-films/dr-paolo-barrios.jpg',
    alt: 'Diseño sobre implantes dentales del Dr. Paolo Barrios.',
    width: 1080,
    height: 1080,
  },
]

export const lunaFilmsVideo = {
  title: 'Costabella',
  description: 'Video promocional para Costabella Hotel.',
  src: '/media/luna-films/costabella.mp4',
  poster: '/media/luna-films/costabella-poster.png',
  type: 'video/mp4',
}
