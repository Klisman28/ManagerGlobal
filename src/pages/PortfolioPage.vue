<script setup lang="ts">
import { ref, computed } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import PageHero from '@/components/sections/PageHero.vue'
import PortfolioCard from '@/components/ui/PortfolioCard.vue'
import { portfolioCategories, portfolioProjects, type PortfolioCategory, type PortfolioProject } from '@/data/portfolio'
import { useSeoMeta } from '@/composables/useSeoMeta'

useSeoMeta({
  title: 'Portafolio | Manager Global Marketing',
  description:
    'Conoce algunos de los proyectos de marketing digital, software empresarial y producción audiovisual que hemos desarrollado para negocios en Guatemala.',
})

const activeCategory = ref<PortfolioCategory | 'Todos'>('Todos')
const selectedProject = ref<PortfolioProject | null>(null)

const filteredProjects = computed(() => {
  if (activeCategory.value === 'Todos') return portfolioProjects
  return portfolioProjects.filter((project) => project.category === activeCategory.value)
})

function openProject(project: PortfolioProject) {
  selectedProject.value = project
}

function closeProject() {
  selectedProject.value = null
}
</script>

<template>
  <div>
    <PageHero
      eyebrow="Portafolio"
      title="Proyectos que hemos desarrollado para negocios en Guatemala"
      subtitle="Marketing, redes sociales, producción audiovisual y software empresarial aplicados a casos reales."
    />

    <section class="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div class="mb-10 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          class="rounded-full px-4 py-2 text-sm font-semibold transition"
          :class="
            activeCategory === 'Todos'
              ? 'bg-brand-red text-white'
              : 'bg-brand-gray-light text-brand-gray-dark hover:bg-brand-red/10 hover:text-brand-red'
          "
          @click="activeCategory = 'Todos'"
        >
          Todos
        </button>
        <button
          v-for="category in portfolioCategories"
          :key="category"
          type="button"
          class="rounded-full px-4 py-2 text-sm font-semibold transition"
          :class="
            activeCategory === category
              ? 'bg-brand-red text-white'
              : 'bg-brand-gray-light text-brand-gray-dark hover:bg-brand-red/10 hover:text-brand-red'
          "
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div v-if="filteredProjects.length" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PortfolioCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          @view="openProject"
        />
      </div>
      <p v-else class="text-center text-brand-gray-dark">
        Aún no hay proyectos cargados en esta categoría.
      </p>
    </section>

    <div
      v-if="selectedProject"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      @click.self="closeProject"
    >
      <div class="relative max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
        <button
          type="button"
          aria-label="Cerrar"
          class="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-black shadow"
          @click="closeProject"
        >
          <XMarkIcon class="h-5 w-5" />
        </button>
        <img :src="selectedProject.image" :alt="selectedProject.title" class="h-64 w-full object-cover" />
        <div class="p-6">
          <span class="mb-2 inline-block rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold text-brand-red">
            {{ selectedProject.category }}
          </span>
          <h3 class="mb-2 text-xl font-bold text-brand-black">{{ selectedProject.title }}</h3>
          <p class="text-sm leading-relaxed text-brand-gray-dark">{{ selectedProject.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
