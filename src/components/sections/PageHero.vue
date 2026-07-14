<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  subtitle: string
}>()
</script>

<template>
  <section class="bg-brand-gray-light px-4 py-16 text-center md:px-8 md:py-20">
    <div v-reveal class="mx-auto max-w-3xl">
      <span
        v-if="eyebrow"
        class="mb-4 inline-block rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-red shadow-sm"
      >
        {{ eyebrow }}
      </span>
      <h1 class="text-3xl font-extrabold leading-tight text-brand-black md:text-5xl">
        {{ title }}
      </h1>
      <p class="mt-5 text-base leading-relaxed text-brand-gray-dark md:text-lg">
        {{ subtitle }}
      </p>
      <slot />
    </div>
  </section>
</template>
