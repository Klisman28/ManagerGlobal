# Manager Global Marketing

Sitio web corporativo de **Manager Global Marketing**, enfocado en la venta de
servicios de marketing digital, producción audiovisual (**Luna Films**) y
software empresarial para negocios en Guatemala.

## Stack técnico

- Vue 3 + `<script setup>`
- TypeScript
- Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Vue Router 4
- Heroicons

## Estructura

```
src/
  assets/         imágenes estáticas
  components/
    layout/       Header, Footer, WhatsAppButton
    sections/     bloques de página (Hero, Services, Benefits, CTA, etc.)
    ui/           componentes reutilizables (BaseButton, ServiceCard, etc.)
  composables/     useSeoMeta (title/description por página)
  data/            datos mock: services, packages, portfolio, whatsapp
  directives/      v-reveal (animación al hacer scroll)
  pages/           una vista por ruta
  router/          definición de rutas
```

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Luego abre `http://localhost:5173`.

Otros comandos:

```bash
npm run build     # build de producción (incluye type-check con vue-tsc)
npm run preview   # sirve el build de producción localmente
```

## Pendientes antes de producción

- **WhatsApp:** reemplazar el número de placeholder en
  `src/data/whatsapp.ts` (`WHATSAPP_PHONE`) por el número real de la empresa.
- **Redes sociales:** los enlaces de Facebook/Instagram/TikTok en el `Header`,
  `Footer` y página de Contacto están como `href="#"` y deben apuntar a los
  perfiles reales.
- **Portafolio:** los proyectos en `src/data/portfolio.ts` son datos mock con
  imágenes de placeholder; reemplazar por proyectos e imágenes reales.
- **Formulario de contacto:** el envío en `src/pages/ContactPage.vue` está
  preparado para conectarse a un backend FastAPI (ver comentario `fetch`
  dentro de `handleSubmit`); actualmente solo simula el envío en el cliente.
