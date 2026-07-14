<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  subtitle: string
}>()
</script>

<template>
  <section class="bg-surface-secondary px-4 py-16 text-center md:px-8 md:py-20">
    <div v-reveal class="mx-auto max-w-3xl">
      <span
        v-if="eyebrow"
        class="mb-4 inline-block rounded-full bg-surface px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-card"
      >
        {{ eyebrow }}
      </span>
      <h1 class="text-3xl font-extrabold leading-tight text-text-primary md:text-5xl">
        {{ title }}
      </h1>
      <p class="mt-5 text-base leading-relaxed text-text-secondary md:text-lg">
        {{ subtitle }}
      </p>
      <slot />
    </div>
  </section>
</template>
