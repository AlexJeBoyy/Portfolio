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
    class="group relative overflow-hidden rounded-md border border-cyan-400/20 bg-[#0b1324]/70 transition hover:-translate-y-2 hover:border-cyan-300/65 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]"
  >
    <div class="relative overflow-hidden">
      <img
        :src="resolveImagePath(project.images[0] ?? '')"
        :alt="project.title"
        class="h-56 w-full object-cover transition duration-300 group-hover:scale-110"
        loading="lazy"
        decoding="async"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/30 to-transparent opacity-80" />
      <span class="absolute right-3 top-3 rounded-sm border border-red-300/60 bg-red-500/30 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-red-100 backdrop-blur-sm">
        {{ project.genre }}
      </span>
    </div>
    <div class="space-y-3 p-6">
      <h3 class="text-xl font-black text-zinc-100 transition group-hover:text-cyan-300">{{ project.title }}</h3>
      <p class="text-sm leading-relaxed text-zinc-400">{{ project.cardSummary }}</p>
      <div class="flex flex-wrap gap-2 pt-3">
        <span
          v-for="tech in project.technologies.slice(0, 2)"
          :key="tech"
          class="rounded-sm border border-cyan-400/35 bg-cyan-500/15 px-2.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-cyan-200"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
