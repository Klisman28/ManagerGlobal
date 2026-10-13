<script setup lang="ts">
import {
  buildWhatsappLink,
  WHATSAPP_MESSAGES,
  WHATSAPP_PHONE_DISPLAY,
} from '@/data/whatsapp'
import { navigationLinks } from '@/data/navigation'

const year = new Date().getFullYear()

</script>

<template>
  <footer class="bg-brand-black text-gray-300">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
      <div>
        <img
          src="/logo.svg"
          alt="Manager Global Marketing"
          class="h-14 w-auto rounded-xl bg-white p-1 object-contain"
        />
        <p class="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
          Marketing, publicidad, producción audiovisual y software empresarial para hacer crecer
          negocios en Guatemala.
        </p>
        <a
          :href="buildWhatsappLink(WHATSAPP_MESSAGES.general)"
          target="_blank"
          rel="noopener"
          class="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600"
        >
          Hablar por WhatsApp
        </a>
      </div>

      <div>
        <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Enlaces</h3>
        <ul class="space-y-2 text-sm">
          <li v-for="link in navigationLinks" :key="link.to">
            <router-link :to="link.to" class="text-gray-400 transition hover:text-brand-red">
              {{ link.label }}
            </router-link>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contacto</h3>
        <ul class="space-y-2 text-sm text-gray-400">
          <li>📞 {{ WHATSAPP_PHONE_DISPLAY }}</li>
          <li>✉️ contacto@managerglobalmarketing.com</li>
          <li>📍 Guatemala</li>
        </ul>
        <div class="mt-5 flex gap-4">
          <a href="#" target="_blank" rel="noopener" aria-label="Facebook" class="text-gray-400 hover:text-brand-red">Facebook</a>
          <a href="#" target="_blank" rel="noopener" aria-label="Instagram" class="text-gray-400 hover:text-brand-red">Instagram</a>
          <a href="#" target="_blank" rel="noopener" aria-label="TikTok" class="text-gray-400 hover:text-brand-red">TikTok</a>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10 px-4 py-5 text-center text-xs text-gray-500 md:px-8">
      © {{ year }} Manager Global Marketing. Todos los derechos reservados.
    </div>
  </footer>
</template>
