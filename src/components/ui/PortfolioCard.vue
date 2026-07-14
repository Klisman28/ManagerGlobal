<script setup lang="ts">
import type { PortfolioProject } from '@/data/portfolio'

defineProps<{
  project: PortfolioProject
}>()

const emit = defineEmits<{
  view: [project: PortfolioProject]
}>()
</script>

<template>
  <article
    class="group overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div class="aspect-[4/3] overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div class="p-6">
      <span class="mb-2 inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">
        {{ project.category }}
      </span>
      <h3 class="mb-2 text-lg font-bold text-text-primary">{{ project.title }}</h3>
      <p class="mb-4 text-sm leading-relaxed text-text-secondary">{{ project.description }}</p>
      <button
        type="button"
        class="text-sm font-semibold text-primary hover:underline"
        @click="emit('view', project)"
      >
        Ver proyecto →
      </button>
    </div>
  </article>
</template>