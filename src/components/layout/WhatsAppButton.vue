<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { buildWhatsappLink, WHATSAPP_MESSAGES } from '@/data/whatsapp'

const route = useRoute()

const link = computed(() => {
  switch (route.name) {
    case 'marketing':
      return buildWhatsappLink(WHATSAPP_MESSAGES.marketing)
    case 'software':
      return buildWhatsappLink(WHATSAPP_MESSAGES.software)
    case 'luna-films':
      return buildWhatsappLink(WHATSAPP_MESSAGES.lunaFilms)
    case 'industrial':
      return buildWhatsappLink(WHATSAPP_MESSAGES.industrial)
    default:
      return buildWhatsappLink(WHATSAPP_MESSAGES.general)
  }
})
</script>

<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener"
    aria-label="Hablar por WhatsApp"
    class="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-110 md:h-16 md:w-16"
  >
    <svg viewBox="0 0 32 32" class="h-7 w-7 md:h-8 md:w-8" fill="currentColor" aria-hidden="true">
      <path
        d="M16.04 2.667C8.62 2.667 2.667 8.62 2.667 16.04c0 2.59.728 5.103 2.103 7.27L2.667 29.333l6.21-1.984a13.31 13.31 0 0 0 7.163 2.064c7.42 0 13.373-5.954 13.373-13.373S23.46 2.667 16.04 2.667Zm0 24.213a11.06 11.06 0 0 1-5.973-1.747l-.428-.27-3.687 1.18 1.2-3.587-.28-.44a10.97 10.97 0 0 1-1.72-5.976c0-6.08 4.946-11.027 11.027-11.027 6.08 0 11.026 4.947 11.026 11.027 0 6.08-4.946 11.04-11.165 11.04Zm6.04-8.213c-.327-.166-1.94-.96-2.24-1.067-.3-.113-.52-.166-.74.166-.22.327-.847 1.067-1.04 1.287-.193.22-.387.246-.713.08-1.927-.96-3.187-1.713-4.453-3.887-.337-.58.337-.54.96-1.793.107-.22.053-.413-.053-.58-.107-.166-.74-1.78-1.013-2.44-.267-.64-.54-.553-.74-.56h-.633c-.22 0-.58.08-.887.413-.307.333-1.173 1.147-1.173 2.793 0 1.647 1.2 3.24 1.367 3.467.166.226 2.293 3.5 5.56 4.773 2.76 1.087 3.327.873 3.927.82.6-.053 1.94-.793 2.213-1.56.273-.766.273-1.42.193-1.56-.08-.14-.3-.22-.627-.387Z"
      />
    </svg>
  </a>
</template>
