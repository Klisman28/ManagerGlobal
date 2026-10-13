<script setup lang="ts">
import MarketingPlanCard from '@/components/ui/MarketingPlanCard.vue'
import { marketingPlans } from '@/data/marketingPlans'
import { useSeoMeta } from '@/composables/useSeoMeta'

useSeoMeta({
  title: 'Planes de Marketing con Pauta Incluida | Manager Global Marketing',
  description:
    'Tres planes mensuales de marketing para negocios en Quetzaltenango: desde Q2,000 con contenido, publicidad y seguimiento. Pauta incluida en el precio.',
})
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
    <header class="mx-auto mb-9 max-w-3xl text-center">
      <p class="text-xs font-bold uppercase tracking-widest text-brand-red">Marketing para tu negocio</p>
      <h1 class="mt-3 text-3xl font-extrabold leading-tight text-text-primary md:text-5xl">Tres planes. Pauta incluida.</h1>
      <p class="mt-4 text-base leading-relaxed text-text-secondary">
        Contenido y anuncios en un solo precio mensual. Elige cómo quieres empezar.
      </p>
    </header>

    <section aria-label="Planes mensuales de marketing" class="grid gap-5 lg:grid-cols-3">
      <MarketingPlanCard v-for="plan in marketingPlans" :key="plan.id" :plan="plan" />
    </section>

    <div class="mt-7 text-center text-sm leading-relaxed text-text-secondary">
      <p class="font-semibold text-text-primary">Todos incluyen publicación, revisión semanal, reporte mensual y una ronda de ajustes.</p>
      <p class="mt-2">Precios antes de impuestos. La pauta ya está dentro del total, no se cobra aparte.</p>
    </div>

    <details class="mx-auto mt-6 max-w-4xl rounded-2xl border border-border bg-surface px-5 py-4 text-sm text-text-secondary">
      <summary class="cursor-pointer font-semibold text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red">Condiciones y servicios adicionales</summary>
      <ul class="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
        <li>Las cantidades son el total mensual, no por cada red. Las historias se adaptan de las piezas del plan.</li>
        <li>Pago mensual anticipado. Definimos la oferta y la zona de la campaña antes de comenzar.</li>
        <li>Tú atiendes las consultas y cierras las ventas. No garantizamos una cantidad de contactos ni ventas.</li>
        <li>Atención diaria de mensajes, piezas o revisiones extra, traslados fuera de Xela y desarrollo web se cotizan aparte.</li>
        <li>Cualquier aumento de pauta requiere tu autorización. TikTok y YouTube Shorts son publicaciones orgánicas, sin anuncios pagados.</li>
      </ul>
    </details>
  </div>
</template>
