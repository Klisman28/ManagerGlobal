<script setup lang="ts">
import {
  ShoppingCartIcon,
  CreditCardIcon,
  HeartIcon,
  CheckIcon,
  ArrowUpRightIcon,
} from '@heroicons/vue/24/outline'
import type { SoftwareProduct } from '@/data/softwareProducts'
import { softwareQuoteMessage, softwareAccessMessage } from '@/data/softwareProducts'
import { buildWhatsappLink } from '@/data/whatsapp'

defineProps<{ product: SoftwareProduct }>()

const icons = { pos: ShoppingCartIcon, creditos: CreditCardIcon, fisioterapia: HeartIcon }
</script>

<template>
  <article
    :aria-labelledby="`software-${product.id}`"
    class="flex h-full flex-col rounded-3xl border border-border bg-surface p-6 shadow-card sm:p-7"
  >
    <div class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary" aria-hidden="true">
      <component :is="icons[product.id]" class="h-7 w-7" />
    </div>
    <p class="text-xs font-bold uppercase tracking-widest text-text-secondary">{{ product.category }}</p>
    <h2 :id="`software-${product.id}`" class="mt-3 text-xl font-bold leading-tight text-text-primary sm:text-2xl">{{ product.name }}</h2>
    <p class="mt-3 text-sm leading-relaxed text-text-secondary lg:min-h-11">{{ product.description }}</p>

    <ul class="my-6 flex-1 space-y-3 border-t border-border pt-6">
      <li v-for="feature in product.features" :key="feature" class="flex gap-2.5 text-sm leading-relaxed text-text-primary">
        <CheckIcon class="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
        <span>{{ feature }}</span>
      </li>
    </ul>

    <div class="mt-auto space-y-3">
      <a
        :href="buildWhatsappLink(softwareQuoteMessage(product))"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`Cotizar ${product.name} por WhatsApp (abre en otra pestaña)`"
        class="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-red-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        Quiero cotizar
        <ArrowUpRightIcon class="h-4 w-4" aria-hidden="true" />
      </a>
      <a
        :href="product.accessUrl ?? buildWhatsappLink(softwareAccessMessage(product))"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="product.accessUrl ? `Ingresar a ${product.name} (requiere cuenta, abre en otra pestaña)` : `Consultar acceso a ${product.name} por WhatsApp (abre en otra pestaña)`"
        class="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-border-strong px-4 py-3 text-sm font-semibold text-text-primary transition hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        {{ product.accessUrl ? 'Ingresar al sistema' : 'Consultar acceso' }}
        <ArrowUpRightIcon class="h-4 w-4" aria-hidden="true" />
      </a>
      <p class="text-center text-xs leading-relaxed text-text-secondary">
        {{ product.accessUrl ? 'Necesitas una cuenta habilitada para ingresar.' : 'Consulta el acceso por WhatsApp.' }}
      </p>
    </div>
  </article>
</template>
