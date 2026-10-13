<script setup lang="ts">
import { ref, computed, onBeforeUnmount, watch } from 'vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from '@/components/ui/BaseButton.vue'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'
import { useTheme } from '@/composables/useTheme'
import { buildWhatsappLink, WHATSAPP_MESSAGES } from '@/data/whatsapp'
import { navigationLinks } from '@/data/navigation'

const isOpen = ref(false)
const { theme } = useTheme()
const logoSrc = computed(() => (theme.value === 'dark' ? '/logo-dark.svg' : '/logo.svg'))

function closeMenu() {
  isOpen.value = false
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu()
}

watch(isOpen, (open) => {
  if (open) {
    document.addEventListener('keydown', onKeydown)
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', onKeydown)
    document.body.style.overflow = ''
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
      <router-link to="/" class="flex items-center" @click="closeMenu">
        <img
          :src="logoSrc"
          alt="Manager Global Marketing"
          class="h-10 w-auto object-contain md:h-12"
        />
      </router-link>

      <nav class="hidden items-center gap-6 lg:flex">
        <router-link
          v-for="link in navigationLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
          active-class="text-primary"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <div class="hidden items-center gap-2 lg:flex">
        <ThemeToggle />
        <BaseButton as="a" :href="buildWhatsappLink(WHATSAPP_MESSAGES.general)" target="_blank" size="sm">
          Cotizar por WhatsApp
        </BaseButton>
      </div>

      <div class="flex items-center gap-1 lg:hidden">
        <ThemeToggle />
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-lg text-text-primary"
          :aria-label="isOpen ? 'Cerrar menú' : 'Abrir menú'"
          :aria-expanded="isOpen"
          @click="isOpen = !isOpen"
        >
          <Bars3Icon v-if="!isOpen" class="h-7 w-7" />
          <XMarkIcon v-else class="h-7 w-7" />
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 top-[64px] z-30 bg-black/40 lg:hidden"
        aria-hidden="true"
        @click="closeMenu"
      />
    </transition>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="isOpen"
        class="relative z-40 flex flex-col gap-1 border-t border-border bg-surface px-4 py-4 shadow-dropdown lg:hidden"
      >
        <router-link
          v-for="link in navigationLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-lg px-3 py-3 text-sm font-medium text-text-secondary hover:bg-surface-hover"
          active-class="text-primary bg-primary-soft"
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
