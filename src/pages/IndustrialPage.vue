<script setup lang="ts">
import PageHero from '@/components/sections/PageHero.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import CTASection from '@/components/sections/CTASection.vue'
import { industrialServices } from '@/data/services'
import { buildWhatsappLink, WHATSAPP_MESSAGES } from '@/data/whatsapp'
import { useSeoMeta } from '@/composables/useSeoMeta'

useSeoMeta({
  title: 'Soluciones Industriales en Guatemala | Manager Global Marketing',
  description:
    'Control de piezas, mantenimiento preventivo y correctivo, e inventario de repuestos para empresas industriales en Guatemala.',
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Soluciones Industriales"
      title="Control y mantenimiento de piezas industriales"
      subtitle="Ayudamos a empresas industriales a mejorar el control de piezas, repuestos, mantenimientos y procesos operativos."
    >
      <div class="mt-8 flex justify-center">
        <BaseButton as="a" :href="buildWhatsappLink(WHATSAPP_MESSAGES.industrial)" target="_blank" size="lg">
          Solicitar información
        </BaseButton>
      </div>
    </PageHero>

    <section class="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="service in industrialServices"
          :key="service.title"
          v-reveal
          class="flex items-center gap-4 rounded-2xl border border-brand-gray-light bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
            <component :is="service.icon" class="h-6 w-6" />
          </div>
          <p class="font-semibold text-brand-black">{{ service.title }}</p>
        </div>
      </div>
    </section>

    <CTASection
      title="¿Necesitas controlar el mantenimiento de tus equipos?"
      text="Cuéntanos sobre tus piezas, repuestos y procesos de mantenimiento, y te ayudamos a digitalizarlos."
      message-key="industrial"
    />
  </div>
</template>
