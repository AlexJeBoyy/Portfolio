<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
}>()

const baseURL = useRuntimeConfig().app.baseURL

function resolveImagePath(path: string): string {
  return `${baseURL}${path.replace(/^\//, '')}`
}
</script>

<template>
  <NuxtLink
    :to="`/projects/${project.slug}/`"
    class="group relative overflow-hidden rounded-lg border border-slate-700/60 bg-slate-800/50 transition hover:-translate-y-2 hover:border-slate-600 hover:shadow-lg"
  >
    <div class="relative overflow-hidden">
      <img
        :src="resolveImagePath(project.images[0] ?? '')"
        :alt="project.title"
        class="h-56 w-full object-cover transition duration-300 group-hover:scale-110"
        loading="lazy"
        decoding="async"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80" />
      <span class="absolute right-3 top-3 rounded-lg border border-blue-500/60 bg-blue-500/30 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-blue-100 backdrop-blur-sm">
        {{ project.genre }}
      </span>
    </div>
    <div class="space-y-3 p-6">
      <h3 class="text-xl font-bold text-slate-100 transition group-hover:text-blue-400">{{ project.title }}</h3>
      <p class="text-sm leading-relaxed text-slate-400">{{ project.cardSummary }}</p>
      <div class="flex flex-wrap gap-2 pt-3">
        <span
          v-for="tech in project.technologies.slice(0, 2)"
          :key="tech"
          class="rounded-lg border border-blue-500/35 bg-blue-500/15 px-2.5 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-blue-300"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
