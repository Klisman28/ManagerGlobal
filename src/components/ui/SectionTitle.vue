<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    align?: 'left' | 'center'
    eyebrow?: string
  }>(),
  {
    align: 'center',
  },
)
</script>

<template>
  <div
    class="mb-10 md:mb-14"
    :class="align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'"
  >
    <span
      v-if="eyebrow"
      class="mb-3 inline-block rounded-full bg-brand-red/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-red"
    >
      {{ eyebrow }}
    </span>
    <h2 class="text-3xl md:text-4xl font-bold text-brand-black leading-tight">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-4 text-base md:text-lg text-brand-gray-dark">
      {{ subtitle }}
    </p>
  </div>
</template>
