<script setup lang="ts">
import type { FunctionalComponent } from 'vue'
import BaseButton from './BaseButton.vue'

defineProps<{
  icon: FunctionalComponent
  title: string
  description: string
  buttonLabel: string
  to: string
}>()
</script>

<template>
  <div
    class="group flex h-full flex-col rounded-2xl border border-brand-gray-light bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div
      class="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red transition-colors duration-300 group-hover:bg-brand-red group-hover:text-white"
    >
      <component :is="icon" class="h-7 w-7" />
    </div>
    <h3 class="mb-3 text-xl font-bold text-brand-black">{{ title }}</h3>
    <p class="mb-6 flex-1 text-sm leading-relaxed text-brand-gray-dark">{{ description }}</p>
    <BaseButton as="router-link" :to="to" variant="outline" size="sm" class="self-start">
      {{ buttonLabel }}
    </BaseButton>
  </div>
</template>
