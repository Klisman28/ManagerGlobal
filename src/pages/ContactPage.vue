<script setup lang="ts">
import { reactive, ref } from 'vue'
import PageHero from '@/components/sections/PageHero.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { buildWhatsappLink, WHATSAPP_MESSAGES } from '@/data/whatsapp'
import { useSeoMeta } from '@/composables/useSeoMeta'

useSeoMeta({
  title: 'Contacto | Manager Global Marketing',
  description:
    'Contáctanos por WhatsApp, redes sociales o formulario y cuéntanos qué necesita tu negocio en Guatemala.',
})

const serviceOptions = [
  'Marketing y publicidad',
  'Manejo de redes sociales',
  'Producción audiovisual',
  'Luna Films',
  'Punto de venta',
  'Sistema de créditos',
  'Gestión de citas',
  'Software para fisioterapia',
  'Solución industrial',
  'Otro servicio',
]

const form = reactive({
  fullName: '',
  businessName: '',
  phone: '',
  email: '',
  service: '',
  message: '',
})

const submitted = ref(false)
const isSubmitting = ref(false)

async function handleSubmit() {
  isSubmitting.value = true

  // Preparado para integración futura con un backend FastAPI, por ejemplo:
  // await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(form),
  // })

  await new Promise((resolve) => setTimeout(resolve, 400))

  isSubmitting.value = false
  submitted.value = true
}
</script>

<template>
  <div>
    <PageHero
      eyebrow="Contacto"
      title="Hablemos de tu proyecto"
      subtitle="Cuéntanos qué necesita tu negocio y te ayudaremos a encontrar la mejor solución para crecer, vender más u organizar tus procesos."
    />

    <section class="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
      <div class="grid gap-12 lg:grid-cols-3">
        <form
          v-if="!submitted"
          class="space-y-5 rounded-2xl border border-brand-gray-light bg-white p-8 shadow-sm lg:col-span-2"
          @submit.prevent="handleSubmit"
        >
          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label for="fullName" class="mb-2 block text-sm font-semibold text-brand-black">Nombre completo</label>
              <input
                id="fullName"
                v-model="form.fullName"
                type="text"
                required
                class="w-full rounded-xl border border-brand-gray-light px-4 py-3 text-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
              />
            </div>
            <div>
              <label for="businessName" class="mb-2 block text-sm font-semibold text-brand-black">Nombre del negocio</label>
              <input
                id="businessName"
                v-model="form.businessName"
                type="text"
                class="w-full rounded-xl border border-brand-gray-light px-4 py-3 text-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
              />
            </div>
            <div>
              <label for="phone" class="mb-2 block text-sm font-semibold text-brand-black">Teléfono</label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                class="w-full rounded-xl border border-brand-gray-light px-4 py-3 text-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
              />
            </div>
            <div>
              <label for="email" class="mb-2 block text-sm font-semibold text-brand-black">Correo electrónico</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full rounded-xl border border-brand-gray-light px-4 py-3 text-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
              />
            </div>
          </div>

          <div>
            <label for="service" class="mb-2 block text-sm font-semibold text-brand-black">Servicio de interés</label>
            <select
              id="service"
              v-model="form.service"
              required
              class="w-full rounded-xl border border-brand-gray-light px-4 py-3 text-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
            >
              <option value="" disabled>Selecciona un servicio</option>
              <option v-for="option in serviceOptions" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>

          <div>
            <label for="message" class="mb-2 block text-sm font-semibold text-brand-black">Mensaje</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              required
              class="w-full rounded-xl border border-brand-gray-light px-4 py-3 text-sm focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/20"
            />
          </div>

          <BaseButton type="submit" size="lg" class="w-full justify-center sm:w-auto" :disabled="isSubmitting">
            {{ isSubmitting ? 'Enviando...' : 'Enviar solicitud' }}
          </BaseButton>
        </form>

        <div
          v-else
          class="flex flex-col items-start justify-center rounded-2xl border border-brand-gray-light bg-white p-8 shadow-sm lg:col-span-2"
        >
          <h3 class="mb-2 text-2xl font-bold text-brand-black">¡Gracias por escribirnos!</h3>
          <p class="text-brand-gray-dark">
            Hemos recibido tu solicitud. Nuestro equipo se pondrá en contacto contigo muy pronto.
          </p>
        </div>

        <div class="space-y-6">
          <a
            :href="buildWhatsappLink(WHATSAPP_MESSAGES.general)"
            target="_blank"
            rel="noopener"
            class="flex items-center gap-3 rounded-2xl bg-[#25D366] px-5 py-4 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Hablar por WhatsApp
          </a>

          <div class="rounded-2xl border border-brand-gray-light bg-white p-6 shadow-sm">
            <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-black">Síguenos</h3>
            <ul class="space-y-3 text-sm text-brand-gray-dark">
              <li>
                <a href="#" target="_blank" rel="noopener" class="hover:text-brand-red">Facebook</a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener" class="hover:text-brand-red">Instagram</a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener" class="hover:text-brand-red">TikTok</a>
              </li>
            </ul>
          </div>

          <div class="rounded-2xl border border-brand-gray-light bg-white p-6 shadow-sm">
            <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-black">Información</h3>
            <ul class="space-y-2 text-sm text-brand-gray-dark">
              <li>📞 +502 1234-5678</li>
              <li>✉️ contacto@managerglobalmarketing.com</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
