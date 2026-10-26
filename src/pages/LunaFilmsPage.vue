<script setup lang="ts">
import { ArrowDownIcon, ArrowUpRightIcon, CameraIcon, FilmIcon, PencilSquareIcon } from '@heroicons/vue/24/outline'
import LunaFilmsShowcase from '@/components/sections/LunaFilmsShowcase.vue'
import CTASection from '@/components/sections/CTASection.vue'
import { lunaFilmsOffers } from '@/data/lunaFilms'
import { buildWhatsappLink } from '@/data/whatsapp'
import { useSeoMeta } from '@/composables/useSeoMeta'

const offerIcons = { fotografia: CameraIcon, video: FilmIcon, diseno: PencilSquareIcon }

useSeoMeta({
  title: 'Luna Films | Fotografía, Video y Diseño para tu Marca',
  description: 'Fotografía comercial, video, reels y diseño para redes en Guatemala. Conoce nuestro trabajo y cotiza el contenido que necesita tu negocio.',
})
</script>

<template>
  <div>
    <section aria-labelledby="luna-about-title" class="px-4 py-12 md:px-8">
      <div class="mx-auto grid max-w-7xl items-end gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div>
          <p class="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Sobre Luna Films</p>
          <h1 id="luna-about-title" class="text-4xl font-extrabold leading-tight tracking-tight text-text-primary md:text-5xl lg:text-6xl">
            Foto, video y diseño.<br />
            <span class="text-primary">Para tu marca.</span>
          </h1>
        </div>
        <div class="max-w-lg">
          <p class="text-base leading-relaxed text-text-secondary md:text-lg">
            Somos la división creativa de Manager Global. Creamos contenido para marcas y negocios en Guatemala.
          </p>
          <a
            href="#trabajos-luna-films"
            class="mt-5 inline-flex items-center gap-2 rounded-sm py-2 text-sm font-semibold text-text-primary underline decoration-border underline-offset-4 hover:decoration-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Conoce nuestro trabajo
            <ArrowDownIcon class="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>

    <section aria-labelledby="luna-services-title" class="px-4 pb-14 md:px-8 md:pb-16">
      <div class="mx-auto max-w-7xl border-t border-border pt-8">
        <div class="mb-6 flex flex-wrap items-end justify-between gap-3">
          <h2 id="luna-services-title" class="text-2xl font-bold tracking-tight text-text-primary">Servicios audiovisuales</h2>
          <p class="text-sm text-text-secondary">Elige qué necesitas y hablemos por WhatsApp.</p>
        </div>
        <div class="grid gap-4 md:grid-cols-3">
          <article
            v-for="offer in lunaFilmsOffers"
            :key="offer.id"
            class="flex flex-col rounded-2xl border border-border bg-surface p-6 md:p-7"
          >
            <component :is="offerIcons[offer.id]" class="mb-5 h-7 w-7 text-primary" aria-hidden="true" />
            <h3 class="text-xl font-bold text-text-primary">{{ offer.title }}</h3>
            <p class="mb-4 mt-3 text-sm leading-relaxed text-text-secondary">{{ offer.description }}</p>
            <p class="mb-6 text-xs leading-relaxed text-text-secondary">{{ offer.examples }}</p>
            <a
              :href="buildWhatsappLink(offer.message)"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`${offer.action} — consultar por WhatsApp (abre en otra pestaña)`"
              class="mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {{ offer.action }}
              <ArrowUpRightIcon class="h-4 w-4" aria-hidden="true" />
            </a>
          </article>
        </div>
      </div>
    </section>

    <LunaFilmsShowcase />

    <CTASection
      title="¿Tienes una idea en mente?"
      text="Cuéntanos qué necesitas y preparemos una propuesta para tu negocio."
      message-key="lunaFilms"
      button-label="Hablemos de tu proyecto"
    />
  </div>
</template>
