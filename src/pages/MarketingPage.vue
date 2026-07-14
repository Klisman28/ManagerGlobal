<script setup lang="ts">
import PageHero from '@/components/sections/PageHero.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import PackageCard from '@/components/ui/PackageCard.vue'
import CTASection from '@/components/sections/CTASection.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { marketingServices, advergameTypes } from '@/data/services'
import { marketingPackages } from '@/data/packages'
import { buildWhatsappLink, WHATSAPP_MESSAGES } from '@/data/whatsapp'
import { useSeoMeta } from '@/composables/useSeoMeta'

useSeoMeta({
  title: 'Marketing Digital y Publicidad en Guatemala | Manager Global Marketing',
  description:
    'Manejo de redes sociales, campañas publicitarias, diseño gráfico y estrategia digital para negocios en Guatemala.',
})
</script>

<template>
  <div>
    <PageHero
      eyebrow="Marketing y Publicidad"
      title="Marketing digital y publicidad para vender más en Guatemala"
      subtitle="Creamos estrategias digitales para que tu negocio tenga mayor presencia, conecte con nuevos clientes y comunique mejor sus productos o servicios."
    >
      <div class="mt-8 flex justify-center">
        <BaseButton as="a" :href="buildWhatsappLink(WHATSAPP_MESSAGES.marketing)" target="_blank" size="lg">
          Solicitar cotización
        </BaseButton>
      </div>
    </PageHero>

    <section class="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionTitle title="Nuestros servicios de marketing" align="center" />
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="service in marketingServices"
          :key="service.title"
          v-reveal
          class="flex items-center gap-4 rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
            <component :is="service.icon" class="h-6 w-6" />
          </div>
          <p class="font-semibold text-text-primary">{{ service.title }}</p>
        </div>
      </div>
    </section>

    <section class="bg-surface-secondary px-4 py-16 md:px-8 md:py-24">
      <div class="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Paquetes"
          title="Paquetes de redes sociales"
          subtitle="Elige el paquete que mejor se adapte al tamaño y los objetivos de tu negocio."
        />
        <div class="grid gap-6 lg:grid-cols-3">
          <PackageCard
            v-for="pkg in marketingPackages"
            :key="pkg.id"
            :name="pkg.name"
            :features="pkg.features"
            :highlighted="pkg.highlighted"
            :whatsapp-link="buildWhatsappLink(WHATSAPP_MESSAGES.marketing)"
          />
        </div>
      </div>
    </section>

    <!-- Advergames -->
    <section class="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionTitle
        eyebrow="Advergames"
        title="Juegos interactivos con la identidad de tu marca"
        subtitle="Convierte a tus clientes en jugadores. Los advergames son experiencias lúdicas personalizadas con el logo, colores y nombre de tu negocio que generan engagement, viralidad y recordación de marca."
      />

      <div class="grid gap-8 lg:grid-cols-3">
        <div
          v-for="game in advergameTypes"
          :key="game.id"
          v-reveal
          class="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <!-- Header de color -->
          <div class="flex flex-col items-center bg-brand-black px-8 py-10 text-center text-white">
            <span class="mb-4 text-6xl" aria-hidden="true">{{ game.emoji }}</span>
            <span class="mb-2 inline-block rounded-full bg-brand-red px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              Advergame
            </span>
            <h3 class="mt-2 text-2xl font-bold">{{ game.name }}</h3>
            <p class="mt-1 text-sm font-medium text-brand-red">{{ game.tagline }}</p>
          </div>

          <!-- Cuerpo -->
          <div class="flex flex-1 flex-col p-8">
            <p class="mb-6 text-sm leading-relaxed text-brand-gray-dark">{{ game.description }}</p>

            <ul class="mb-8 flex-1 space-y-2">
              <li
                v-for="benefit in game.benefits"
                :key="benefit"
                class="flex items-start gap-2 text-sm text-brand-gray-dark"
              >
                <span class="mt-0.5 text-brand-red" aria-hidden="true">✓</span>
                <span>{{ benefit }}</span>
              </li>
            </ul>

            <a
              :href="buildWhatsappLink(`Hola, quiero información sobre un ${game.name} para mi negocio.`)"
              target="_blank"
              rel="noopener"
              class="flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:bg-red-600 hover:-translate-y-0.5"
            >
              Cotizar {{ game.name }}
            </a>
          </div>
        </div>
      </div>

      <!-- Badge de beneficios generales -->
      <div v-reveal class="mt-14 rounded-3xl bg-surface-secondary p-8 md:p-12">
        <div class="grid gap-6 text-center md:grid-cols-3">
          <div>
            <p class="text-4xl font-extrabold text-brand-red">+5 min</p>
            <p class="mt-1 text-sm text-brand-gray-dark">Tiempo promedio de interacción con la marca</p>
          </div>
          <div>
            <p class="text-4xl font-extrabold text-brand-red">Viral</p>
            <p class="mt-1 text-sm text-brand-gray-dark">Fácil de compartir en WhatsApp y redes sociales</p>
          </div>
          <div>
            <p class="text-4xl font-extrabold text-brand-red">100%</p>
            <p class="mt-1 text-sm text-brand-gray-dark">Personalizado con la identidad de tu negocio</p>
          </div>
        </div>
      </div>
    </section>

    <CTASection
      title="¿Listo para vender más en redes sociales?"
      text="Cuéntanos sobre tu negocio y te recomendamos el paquete de marketing digital ideal para ti."
      message-key="marketing"
    />
  </div>
</template>
