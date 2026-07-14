<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import { buildWhatsappLink, WHATSAPP_MESSAGES, type WhatsappMessageKey } from '@/data/whatsapp'

withDefaults(
  defineProps<{
    title: string
    text: string
    buttonLabel?: string
    messageKey?: WhatsappMessageKey
  }>(),
  {
    buttonLabel: 'Hablar por WhatsApp',
    messageKey: 'general',
  },
)
</script>

<template>
  <section class="bg-brand-black px-4 py-16 text-center md:px-8 md:py-24">
    <div v-reveal class="mx-auto max-w-2xl">
      <h2 class="text-3xl font-bold text-white md:text-4xl">{{ title }}</h2>
      <p class="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">{{ text }}</p>
      <div class="mt-8 flex justify-center">
        <BaseButton as="a" :href="buildWhatsappLink(WHATSAPP_MESSAGES[messageKey])" target="_blank" size="lg">
          {{ buttonLabel }}
        </BaseButton>
      </div>
    </div>
  </section>
</template>
