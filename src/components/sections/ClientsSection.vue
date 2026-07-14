<script setup lang="ts">
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { clientTypes } from '@/data/services'
</script>

<template>
  <section class="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
    <SectionTitle
      eyebrow="A quién ayudamos"
      title="Trabajamos con negocios de diferentes sectores"
    />
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <div
        v-for="client in clientTypes"
        :key="client.label"
        v-reveal
        class="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 text-center shadow-card transition hover:-translate-y-1 hover:shadow-lg"
      >
        <span class="text-3xl" aria-hidden="true">{{ client.emoji }}</span>
        <span class="text-sm font-semibold text-text-primary">{{ client.label }}</span>
      </div>
    </div>
  </section>
</template>
