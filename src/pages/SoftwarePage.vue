<script setup lang="ts">
import { CodeBracketSquareIcon, ArrowUpRightIcon } from '@heroicons/vue/24/outline'
import SoftwareProductCard from '@/components/ui/SoftwareProductCard.vue'
import { softwareProducts, CUSTOM_SOFTWARE_MESSAGE } from '@/data/softwareProducts'
import { buildWhatsappLink } from '@/data/whatsapp'
import { useSeoMeta } from '@/composables/useSeoMeta'

useSeoMeta({
  title: 'Punto de Venta, Créditos y Fisioterapia | Manager Global',
  description:
    'Conoce nuestros sistemas de Punto de Venta, Créditos y Fisioterapia. Consulta precios, ingresa a tu sistema o cotiza software a medida y chatbots en Guatemala.',
})
</script>

<template>
  <div class="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
    <header class="mx-auto mb-9 max-w-3xl text-center">
      <p class="text-xs font-bold uppercase tracking-widest text-text-secondary">Software empresarial</p>
      <h1 class="mt-3 text-3xl font-extrabold leading-tight text-text-primary md:text-5xl">Tu negocio, más organizado.</h1>
      <p class="mt-4 text-base leading-relaxed text-text-secondary">
        Tres sistemas para llevar el control del día a día. Elige el que encaja con tu negocio.
      </p>
    </header>

    <section aria-label="Nuestros tres sistemas" class="grid gap-5 lg:grid-cols-3">
      <SoftwareProductCard v-for="product in softwareProducts" :key="product.id" :product="product" />
    </section>

    <p class="mt-6 text-center text-sm leading-relaxed text-text-secondary">
      ¿Te interesa un sistema? Consulta su precio y las opciones de acceso por WhatsApp.
    </p>

    <section aria-labelledby="software-a-medida" class="mt-10 rounded-3xl bg-brand-black p-7 text-white md:p-9">
      <div class="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
        <div class="max-w-2xl">
          <div class="mb-4 flex items-center gap-3 text-sm font-semibold text-gray-300">
            <CodeBracketSquareIcon class="h-6 w-6 text-red-300" aria-hidden="true" />
            Una solución para tu idea
          </div>
          <h2 id="software-a-medida" class="text-2xl font-bold md:text-3xl">Software a medida y chatbots</h2>
          <p class="mt-3 text-sm leading-relaxed text-gray-300 md:text-base">
            ¿Necesitas algo diferente? Desarrollamos software a la medida de tu negocio y chatbots.
            Cuéntanos qué quieres resolver y definimos contigo el alcance del proyecto.
          </p>
        </div>
        <a
          :href="buildWhatsappLink(CUSTOM_SOFTWARE_MESSAGE)"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Cotizar software a medida o chatbots por WhatsApp (abre en otra pestaña)"
          class="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Cuéntanos tu idea
          <ArrowUpRightIcon class="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  </div>
</template>
