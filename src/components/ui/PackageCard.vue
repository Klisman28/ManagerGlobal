<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import BaseButton from './BaseButton.vue'

defineProps<{
  name: string
  features: string[]
  highlighted?: boolean
  whatsappLink: string
}>()
</script>

<template>
  <div
    class="flex h-full flex-col rounded-2xl p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    :class="
      highlighted
        ? 'border-2 border-brand-red bg-brand-black text-white shadow-xl'
        : 'border border-brand-gray-light bg-white'
    "
  >
    <span
      v-if="highlighted"
      class="mb-4 inline-block self-start rounded-full bg-brand-red px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white"
    >
      Más popular
    </span>
    <h3 class="mb-6 text-2xl font-bold" :class="highlighted ? 'text-white' : 'text-brand-black'">
      {{ name }}
    </h3>
    <ul class="mb-8 flex-1 space-y-3">
      <li
        v-for="feature in features"
        :key="feature"
        class="flex items-start gap-2 text-sm"
        :class="highlighted ? 'text-gray-200' : 'text-brand-gray-dark'"
      >
        <CheckCircleIcon class="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-red" />
        <span>{{ feature }}</span>
      </li>
    </ul>
    <BaseButton
      as="a"
      :href="whatsappLink"
      target="_blank"
      :variant="highlighted ? 'primary' : 'outline'"
      class="w-full justify-center"
    >
      Cotizar por WhatsApp
    </BaseButton>
  </div>
</template>
