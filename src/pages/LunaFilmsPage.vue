<script setup lang="ts">
import { computed } from 'vue'
import { FilmIcon } from '@heroicons/vue/24/outline'
import PageHero from '@/components/sections/PageHero.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import PackageCard from '@/components/ui/PackageCard.vue'
import PortfolioCard from '@/components/ui/PortfolioCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import CTASection from '@/components/sections/CTASection.vue'
import { lunaFilmsServices } from '@/data/services'
import { marketingPackages } from '@/data/packages'
import { portfolioProjects } from '@/data/portfolio'
import { buildWhatsappLink, WHATSAPP_MESSAGES } from '@/data/whatsapp'
import { useSeoMeta } from '@/composables/useSeoMeta'

useSeoMeta({
  title: 'Luna Films | Producción Audiovisual y Fotografía Comercial',
  description: 'Fotografía comercial, videos, reels, TikToks y producción audiovisual para marcas y negocios.',
})

const lunaFilmsProjects = computed(() =>
  portfolioProjects.filter((project) => project.category === 'Luna Films'),
)
</script>

<template>
  <div>
    <PageHero
      eyebrow="Luna Films · División creativa"
      title="Contenido audiovisual que conecta, vende y hace crecer tu marca"
      subtitle="Luna Films es la división creativa de Manager Global Marketing, enfocada en fotografía comercial, producción audiovisual, videos para redes sociales y contenido profesional para marcas."
    >
      <div class="mt-8 flex justify-center">
        <BaseButton as="a" :href="buildWhatsappLink(WHATSAPP_MESSAGES.lunaFilms)" target="_blank" size="lg">
          Cotizar producción audiovisual
        </BaseButton>
      </div>
    </PageHero>

    <section class="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div class="grid items-center gap-12 md:grid-cols-2">
        <div v-reveal>
          <SectionTitle align="left" eyebrow="Sobre Luna Films" title="Producción audiovisual con identidad propia" />
          <p class="text-base leading-relaxed text-brand-gray-dark">
            Combinamos fotografía, video y estrategia de contenido para que cada marca cuente su
            propia historia. Trabajamos con restaurantes, hoteles, clínicas, tiendas y negocios de
            todo tipo en Guatemala, creando piezas visuales que conectan con su audiencia.
          </p>
        </div>
        <div v-reveal class="flex items-center justify-center rounded-3xl bg-brand-black p-12 text-white">
          <FilmIcon class="h-24 w-24 text-brand-red" />
        </div>
      </div>
    </section>

    <section class="bg-surface-secondary px-4 py-16 md:px-8 md:py-24">
      <div class="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Servicios" title="Servicios audiovisuales" />
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="service in lunaFilmsServices"
            :key="service"
            v-reveal
            class="rounded-xl bg-surface px-5 py-4 text-sm font-semibold text-text-primary shadow-card"
          >
            {{ service }}
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <SectionTitle
        eyebrow="Paquetes"
        title="Paquetes de producción audiovisual"
        subtitle="Los mismos paquetes flexibles de contenido, adaptados a las necesidades visuales de tu marca."
      />
      <div class="grid gap-6 lg:grid-cols-3">
        <PackageCard
          v-for="pkg in marketingPackages"
          :key="pkg.id"
          :name="pkg.name"
          :features="pkg.features"
          :highlighted="pkg.highlighted"
          :whatsapp-link="buildWhatsappLink(WHATSAPP_MESSAGES.lunaFilms)"
        />
      </div>
    </section>

    <section v-if="lunaFilmsProjects.length" class="bg-surface-secondary px-4 py-16 md:px-8 md:py-24">
      <div class="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Portafolio" title="Portafolio audiovisual" />
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PortfolioCard v-for="project in lunaFilmsProjects" :key="project.id" :project="project" />
        </div>
        <div class="mt-10 flex justify-center">
          <BaseButton as="router-link" to="/portafolio" variant="outline">
            Ver portafolio completo
          </BaseButton>
        </div>
      </div>
    </section>

    <CTASection
      title="Transformamos ideas en contenido que conecta, vende y hace crecer tu marca."
      text="Cuéntanos sobre tu proyecto y diseñemos juntos la producción audiovisual ideal para tu marca."
      message-key="lunaFilms"
      button-label="Hablar con Luna Films"
    />
  </div>
</template>
