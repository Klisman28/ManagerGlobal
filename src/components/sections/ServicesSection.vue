<script setup lang="ts">
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ServiceCard from '@/components/ui/ServiceCard.vue'
import { homeServiceCards } from '@/data/services'

const visibleServices = homeServiceCards.filter((card) => card.id !== 'industrial')
</script>

<template>
  <section id="servicios" class="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
    <SectionTitle
      eyebrow="Servicios"
      title="Soluciones para negocios que quieren crecer"
      subtitle="Integramos marketing, tecnología y producción audiovisual para que tu negocio venda más y opere mejor."
    />
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="card in visibleServices" :key="card.id" v-reveal>
        <ServiceCard
          :icon="card.icon"
          :title="card.title"
          :description="card.description"
          :button-label="card.buttonLabel"
          :to="card.to"
        />
      </div>
    </div>
  </section>
</template>
