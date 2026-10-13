<script setup lang="ts">
import { CheckIcon, ArrowUpRightIcon } from '@heroicons/vue/24/outline'
import type { MarketingPlan } from '@/data/marketingPlans'
import { formatQuetzales, marketingPlanMessage } from '@/data/marketingPlans'
import { buildWhatsappLink } from '@/data/whatsapp'

defineProps<{ plan: MarketingPlan }>()
</script>

<template>
  <article
    :aria-labelledby="`plan-${plan.id}`"
    class="relative flex h-full flex-col rounded-3xl border p-6 shadow-card sm:p-7"
    :class="plan.featured ? 'border-brand-red bg-brand-black text-white' : 'border-border bg-surface text-text-primary'"
  >
    <p class="mb-5 text-xs font-bold uppercase tracking-widest" :class="plan.featured ? 'text-red-300' : 'text-text-secondary'">
      {{ plan.featured ? 'Contenido + video' : plan.organicChannels ? 'Más canales' : 'Presencia local' }}
    </p>
    <h2 :id="`plan-${plan.id}`" class="text-xl font-bold leading-tight sm:text-2xl">{{ plan.name }}</h2>
    <p class="mt-3 text-sm leading-relaxed lg:min-h-11" :class="plan.featured ? 'text-gray-300' : 'text-text-secondary'">
      {{ plan.tagline }}
    </p>

    <p class="mt-6 flex flex-wrap items-baseline gap-x-2">
      <span class="text-4xl font-extrabold tracking-tight">{{ formatQuetzales(plan.price) }}</span>
      <span class="text-sm" :class="plan.featured ? 'text-gray-300' : 'text-text-secondary'">/ mes</span>
    </p>
    <div class="mt-4 rounded-xl p-4" :class="plan.featured ? 'bg-white/10' : 'bg-surface-secondary'">
      <p class="text-sm font-bold">{{ formatQuetzales(plan.adBudget) }} de pauta incluida</p>
      <p class="mt-1 text-xs leading-relaxed" :class="plan.featured ? 'text-gray-300' : 'text-text-secondary'">{{ plan.adBreakdown }}</p>
    </div>

    <div class="mt-5 text-sm leading-relaxed lg:min-h-17">
      <p class="font-semibold">{{ plan.paidChannels }}</p>
      <p v-if="plan.organicChannels" class="mt-1" :class="plan.featured ? 'text-gray-300' : 'text-text-secondary'">
        {{ plan.organicChannels }} · sin anuncios pagados
      </p>
    </div>
    <ul class="my-6 space-y-3 border-t pt-6" :class="plan.featured ? 'border-white/15' : 'border-border'">
      <li v-for="feature in plan.features" :key="feature" class="flex gap-2.5 text-sm leading-relaxed">
        <CheckIcon class="mt-0.5 h-4 w-4 shrink-0" :class="plan.featured ? 'text-red-300' : 'text-brand-red'" aria-hidden="true" />
        <span>{{ feature }}</span>
      </li>
    </ul>
    <p class="mb-6 text-xs leading-relaxed" :class="plan.featured ? 'text-gray-300' : 'text-text-secondary'">{{ plan.note }}</p>
    <a
      :href="buildWhatsappLink(marketingPlanMessage(plan))"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="`Consultar ${plan.name} por WhatsApp (abre en otra pestaña)`"
      class="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-red-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
    >
      Me interesa este plan
      <ArrowUpRightIcon class="h-4 w-4" aria-hidden="true" />
    </a>
  </article>
</template>
