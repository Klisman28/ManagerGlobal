<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import PageHero from '@/components/sections/PageHero.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import {
  buildContactWhatsappMessage,
  buildWhatsappLink,
  WHATSAPP_BASE_URL,
  WHATSAPP_MESSAGES,
  WHATSAPP_PHONE_DISPLAY,
} from '@/data/whatsapp'
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
const contactWhatsappMessage = computed(() => buildContactWhatsappMessage(form))
const contactWhatsappLink = computed(() => buildWhatsappLink(contactWhatsappMessage.value))

async function handleSubmit() {
  isSubmitting.value = true

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
          :action="WHATSAPP_BASE_URL"
          method="get"
          target="_blank"
          class="space-y-5 rounded-2xl border border-border bg-surface p-8 shadow-card lg:col-span-2"
          @submit="handleSubmit"
        >
          <input type="hidden" name="text" :value="contactWhatsappMessage" />
          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <label for="fullName" class="mb-2 block text-sm font-semibold text-text-primary">Nombre completo</label>
              <input
                id="fullName"
                v-model="form.fullName"
                type="text"
                required
                class="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label for="businessName" class="mb-2 block text-sm font-semibold text-text-primary">Nombre del negocio</label>
              <input
                id="businessName"
                v-model="form.businessName"
                type="text"
                class="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label for="phone" class="mb-2 block text-sm font-semibold text-text-primary">Teléfono</label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                class="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label for="email" class="mb-2 block text-sm font-semibold text-text-primary">Correo electrónico</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div>
            <label for="service" class="mb-2 block text-sm font-semibold text-text-primary">Servicio de interés</label>
            <select
              id="service"
              v-model="form.service"
              required
              class="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="" disabled>Selecciona un servicio</option>
              <option v-for="option in serviceOptions" :key="option" :value="option">{{ option }}</option>
            </select>
          </div>

          <div>
            <label for="message" class="mb-2 block text-sm font-semibold text-text-primary">Mensaje</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              required
              class="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <BaseButton type="submit" size="lg" class="w-full justify-center sm:w-auto" :disabled="isSubmitting">
            {{ isSubmitting ? 'Enviando...' : 'Enviar solicitud' }}
          </BaseButton>
        </form>

        <div
          v-else
          class="flex flex-col items-start justify-center rounded-2xl border border-border bg-surface p-8 shadow-card lg:col-span-2"
        >
          <h3 class="mb-2 text-2xl font-bold text-text-primary">¡Gracias por escribirnos!</h3>
          <p class="text-brand-gray-dark">
            Abrimos WhatsApp con tu solicitud preparada. Revisa el mensaje y presiona enviar para
            compartirlo con nuestro equipo.
          </p>
          <BaseButton
            as="a"
            :href="contactWhatsappLink"
            target="_blank"
            rel="noopener"
            class="mt-6"
          >
            Abrir WhatsApp
          </BaseButton>
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

          <div class="rounded-2xl border border-border bg-surface p-6 shadow-card">
            <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">Síguenos</h3>
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

          <div class="rounded-2xl border border-border bg-surface p-6 shadow-card">
            <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-text-primary">Información</h3>
            <ul class="space-y-2 text-sm text-brand-gray-dark">
              <li>📞 {{ WHATSAPP_PHONE_DISPLAY }}</li>
              <li>✉️ contacto@managerglobalmarketing.com</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
