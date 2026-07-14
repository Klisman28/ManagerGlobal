<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/solid'
import PageHero from '@/components/sections/PageHero.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import CTASection from '@/components/sections/CTASection.vue'
import { softwareSystems } from '@/data/services'
import { buildWhatsappLink, WHATSAPP_MESSAGES } from '@/data/whatsapp'
import { useSeoMeta } from '@/composables/useSeoMeta'

useSeoMeta({
  title: 'Software Empresarial en Guatemala | Punto de Venta, Créditos y Citas',
  description: 'Sistemas para punto de venta, créditos, citas, fisioterapia y gestión empresarial.',
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Software Empresarial"
      title="Software para organizar y hacer crecer tu negocio"
      subtitle="Implementamos sistemas empresariales que ayudan a controlar ventas, clientes, créditos, citas, inventarios y operaciones internas."
    />

    <section class="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div class="grid gap-6 lg:grid-cols-2">
        <div
          v-for="system in softwareSystems"
          :key="system.id"
          v-reveal
          class="flex flex-col rounded-2xl border border-brand-gray-light bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
            <component :is="system.icon" class="h-7 w-7" />
          </div>
          <h3 class="mb-4 text-xl font-bold text-brand-black">{{ system.title }}</h3>
          <ul class="mb-6 flex-1 space-y-2">
            <li
              v-for="feature in system.features"
              :key="feature"
              class="flex items-start gap-2 text-sm text-brand-gray-dark"
            >
              <CheckIcon class="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-red" />
              <span>{{ feature }}</span>
            </li>
          </ul>
          <BaseButton
            as="a"
            :href="buildWhatsappLink(WHATSAPP_MESSAGES.software)"
            target="_blank"
            class="self-start"
          >
            Cotizar este sistema
          </BaseButton>
        </div>
      </div>
    </section>

    <CTASection
      title="¿Tu negocio necesita un sistema a la medida?"
      text="Cuéntanos qué procesos quieres organizar y te ayudamos a elegir el software ideal para tu negocio."
      message-key="software"
    />
  </div>
</template>
