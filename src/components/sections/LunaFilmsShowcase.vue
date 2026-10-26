<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref } from 'vue'
import { ArrowsPointingOutIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { lunaFilmsImages, lunaFilmsVideo, type LunaFilmsImage } from '@/data/lunaFilms'

const viewer = ref<HTMLDialogElement | null>(null)
const selectedImage = ref<LunaFilmsImage | null>(null)
let previousOverflow: string | null = null

async function openImage(image: LunaFilmsImage) {
  selectedImage.value = image
  await nextTick()
  if (!viewer.value || viewer.value.open) return
  previousOverflow = document.body.style.overflow
  viewer.value.showModal()
  document.body.style.overflow = 'hidden'
}

function restoreScroll() {
  if (previousOverflow !== null) document.body.style.overflow = previousOverflow
  previousOverflow = null
}

function onClose() {
  selectedImage.value = null
  restoreScroll()
}

onBeforeUnmount(restoreScroll)
</script>

<template>
  <section id="trabajos-luna-films" aria-labelledby="luna-work-title" class="scroll-mt-20 border-t border-border bg-surface-secondary px-4 py-12 md:px-8 md:py-16">
    <div class="mx-auto max-w-7xl">
      <div class="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p class="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Nuestro trabajo</p>
          <h2 id="luna-work-title" class="text-2xl font-bold tracking-tight text-text-primary md:text-3xl">Diseños para marcas y negocios</h2>
        </div>
        <p class="text-sm text-text-secondary">Toca un diseño para ampliarlo.</p>
      </div>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <button
          v-for="image in lunaFilmsImages"
          :key="image.id"
          type="button"
          :aria-label="`Ampliar diseño de ${image.title}`"
          aria-haspopup="dialog"
          class="group overflow-hidden rounded-xl border border-border bg-surface text-left transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          @click="openImage(image)"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            :width="image.width"
            :height="image.height"
            loading="lazy"
            decoding="async"
            class="aspect-square w-full object-contain"
          />
          <span class="flex items-center justify-between gap-2 p-4">
            <span class="text-sm font-semibold text-text-primary">{{ image.title }}</span>
            <ArrowsPointingOutIcon class="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          </span>
        </button>
      </div>

      <div class="mt-10 grid items-center gap-6 border-t border-border pt-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
        <div>
          <p class="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Video destacado</p>
          <h3 id="luna-video-title" class="text-2xl font-bold text-text-primary">{{ lunaFilmsVideo.title }}</h3>
          <p id="luna-video-description" class="mt-3 text-sm leading-relaxed text-text-secondary">{{ lunaFilmsVideo.description }}</p>
          <p class="mt-3 text-sm text-text-secondary">Dale play para ver el resultado.</p>
        </div>
        <video
          controls
          playsinline
          preload="none"
          :poster="lunaFilmsVideo.poster"
          aria-labelledby="luna-video-title"
          aria-describedby="luna-video-description"
          class="aspect-video w-full rounded-xl bg-black"
          width="1280"
          height="720"
        >
          <source :src="lunaFilmsVideo.src" :type="lunaFilmsVideo.type" />
          Tu navegador no puede reproducir este video.
          <a :href="lunaFilmsVideo.src">Abrir video de Costabella</a>.
        </video>
      </div>
    </div>
  </section>

  <dialog
    ref="viewer"
    aria-labelledby="luna-image-title"
    class="luna-image-viewer m-auto max-h-[94dvh] w-[calc(100%_-_2rem)] max-w-3xl overflow-auto rounded-2xl border border-border bg-surface p-0 text-text-primary shadow-2xl backdrop:bg-black/80"
    @close="onClose"
    @click.self="viewer?.close()"
  >
    <template v-if="selectedImage">
      <div class="sticky top-0 flex items-center justify-between gap-4 border-b border-border bg-surface p-4">
        <h2 id="luna-image-title" class="font-bold">{{ selectedImage.title }}</h2>
        <button
          type="button"
          autofocus
          aria-label="Cerrar imagen"
          class="rounded-full border border-border p-2 text-text-primary hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          @click="viewer?.close()"
        >
          <XMarkIcon class="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <img
        :src="selectedImage.src"
        :alt="selectedImage.alt"
        :width="selectedImage.width"
        :height="selectedImage.height"
        class="max-h-[calc(94dvh_-_5rem)] w-full object-contain"
      />
    </template>
  </dialog>
</template>
