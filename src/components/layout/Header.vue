<script setup lang="ts">
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/ui/BaseButton.vue'
import { buildWhatsappLink, WHATSAPP_MESSAGES } from '@/data/whatsapp'

const isOpen = ref(false)

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Marketing', to: '/marketing-publicidad-guatemala' },
  { label: 'Software', to: '/software-empresarial' },
  { label: 'Soluciones Industriales', to: '/soluciones-industriales' },
  { label: 'Luna Films', to: '/luna-films' },
  { label: 'Portafolio', to: '/portafolio' },
  { label: 'Contacto', to: '/contacto' },
]

function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-brand-gray-light bg-white/95 backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
      <router-link to="/" class="flex items-center" @click="closeMenu">
        <img
          src="/logo.svg"
          alt="Manager Global Marketing"
          class="h-10 w-auto object-contain md:h-12"
        />
      </router-link>

      <nav class="hidden items-center gap-6 lg:flex">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-brand-gray-dark transition-colors hover:text-brand-red"
          active-class="text-brand-red"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <div class="hidden lg:block">
        <BaseButton as="a" :href="buildWhatsappLink(WHATSAPP_MESSAGES.general)" target="_blank" size="sm">
          Cotizar por WhatsApp
        </BaseButton>
      </div>

      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-lg text-brand-black lg:hidden"
        aria-label="Abrir menú"
        @click="isOpen = !isOpen"
      >
        <Bars3Icon v-if="!isOpen" class="h-7 w-7" />
        <XMarkIcon v-else class="h-7 w-7" />
      </button>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav v-if="isOpen" class="flex flex-col gap-1 border-t border-brand-gray-light bg-white px-4 py-4 lg:hidden">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-3 py-3 text-sm font-medium text-brand-gray-dark hover:bg-brand-gray-light"
          active-class="text-brand-red bg-brand-red/5"
          @click="closeMenu"
        >
          {{ link.label }}
        </router-link>
        <BaseButton
          as="a"
          :href="buildWhatsappLink(WHATSAPP_MESSAGES.general)"
          target="_blank"
          class="mt-3 w-full justify-center"
          @click="closeMenu"
        >
          Cotizar por WhatsApp
        </BaseButton>
      </nav>
    </transition>
  </header>
</template>
