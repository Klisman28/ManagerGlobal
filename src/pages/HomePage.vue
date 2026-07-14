<script setup lang="ts">
import HomeHero from '@/components/sections/HomeHero.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import BenefitsSection from '@/components/sections/BenefitsSection.vue'
import ClientsSection from '@/components/sections/ClientsSection.vue'
import CTASection from '@/components/sections/CTASection.vue'
import { useSeoMeta } from '@/composables/useSeoMeta'

useSeoMeta({
  title: 'Manager Global Marketing | Marketing, Software y Publicidad en Guatemala',
  description:
    'Soluciones de marketing digital, publicidad, producción audiovisual y software empresarial para negocios en Guatemala.',
})
</script>

<template>
  <div>
    <HomeHero />
    <ServicesSection />
    <BenefitsSection />
    <ClientsSection />
    <CTASection
      title="¿Quieres mejorar tu negocio?"
      text="Cuéntanos qué necesitas y te ayudamos a encontrar la mejor solución: marketing, publicidad, contenido audiovisual, software o herramientas para optimizar tus procesos."
    />
  </div>
</template>
