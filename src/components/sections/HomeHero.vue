<script setup lang="ts">
import { RocketLaunchIcon, FilmIcon, ComputerDesktopIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/ui/BaseButton.vue'
import { buildWhatsappLink, WHATSAPP_MESSAGES } from '@/data/whatsapp'
</script>

<template>
  <section class="relative overflow-hidden bg-brand-gray-light">
    <div
      class="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-red/10 blur-3xl"
      aria-hidden="true"
    />
    <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
      <div v-reveal>
        <span class="mb-4 inline-block rounded-full bg-surface px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-card">
          Guatemala
        </span>
        <h1 class="text-4xl font-extrabold leading-tight text-text-primary md:text-5xl">
          Marketing, software y soluciones digitales para hacer crecer tu negocio en Guatemala
        </h1>
        <p class="mt-6 text-lg leading-relaxed text-brand-gray-dark">
          En Manager Global Marketing ayudamos a empresas, negocios y emprendedores a mejorar su
          presencia digital, vender más y organizar sus procesos mediante marketing, publicidad,
          producción audiovisual y software empresarial.
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <BaseButton as="a" :href="buildWhatsappLink(WHATSAPP_MESSAGES.general)" target="_blank" size="lg">
            Solicitar cotización
          </BaseButton>
          <BaseButton as="a" href="#servicios" variant="outline" size="lg">
            Ver servicios
          </BaseButton>
        </div>
      </div>

      <div v-reveal class="relative">
        <div class="rounded-3xl bg-brand-black p-8 text-white shadow-2xl md:p-10">
          <div class="grid gap-5">
            <div class="flex items-center gap-4 rounded-2xl bg-white/5 p-4">
              <RocketLaunchIcon class="h-8 w-8 text-brand-red" />
              <div>
                <p class="font-semibold">Marketing &amp; Publicidad</p>
                <p class="text-sm text-gray-400">Estrategia y crecimiento digital</p>
              </div>
            </div>
            <div class="flex items-center gap-4 rounded-2xl bg-white/5 p-4">
              <ComputerDesktopIcon class="h-8 w-8 text-brand-red" />
              <div>
                <p class="font-semibold">Software Empresarial</p>
                <p class="text-sm text-gray-400">Punto de venta, créditos y fisioterapia</p>
              </div>
            </div>
            <div class="flex items-center gap-4 rounded-2xl bg-white/5 p-4">
              <FilmIcon class="h-8 w-8 text-brand-red" />
              <div>
                <p class="font-semibold">Luna Films</p>
                <p class="text-sm text-gray-400">Producción audiovisual profesional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
