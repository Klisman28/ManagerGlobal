<script setup lang="ts">
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { benefits } from '@/data/services'
</script>

<template>
  <section class="bg-brand-gray-light px-4 py-16 md:px-8 md:py-24">
    <div class="mx-auto max-w-7xl">
      <SectionTitle
        eyebrow="Por qué Manager Global Marketing"
        title="Una sola empresa para tu imagen, ventas y operación"
      />
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="benefit in benefits"
          :key="benefit.text"
          v-reveal
          class="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm"
        >
          <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
            <component :is="benefit.icon" class="h-5 w-5" />
          </div>
          <p class="text-sm font-medium leading-relaxed text-brand-gray-dark">{{ benefit.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
