<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    as?: 'button' | 'a' | 'router-link'
    to?: string
    href?: string
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    target?: string
  }>(),
  {
    as: 'button',
    variant: 'primary',
    size: 'md',
  },
)

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red'

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-4 py-2 text-sm'
    case 'lg':
      return 'px-8 py-4 text-base'
    default:
      return 'px-6 py-3 text-sm md:text-base'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-brand-black text-white hover:bg-brand-gray-dark'
    case 'outline':
      return 'border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white'
    default:
      return 'bg-brand-red text-white shadow-lg shadow-red-500/30 hover:bg-red-600 hover:shadow-red-500/40 hover:-translate-y-0.5'
  }
})

const classes = computed(() => `${baseClasses} ${sizeClasses.value} ${variantClasses.value}`)
</script>

<template>
  <component
    :is="as === 'router-link' ? 'router-link' : as"
    :to="as === 'router-link' ? to : undefined"
    :href="as === 'a' ? href : undefined"
    :target="as === 'a' ? target : undefined"
    :class="classes"
  >
    <slot />
  </component>
</template>
