<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <NuxtLink
    :to="`/projects/${project.slug}/`"
    class="group relative overflow-hidden rounded-xl border border-red-600/20 bg-zinc-900/40 transition hover:-translate-y-2 hover:border-red-600/60 hover:shadow-xl hover:shadow-red-900/30"
  >
    <div class="relative overflow-hidden">
      <img
        :src="project.images[0]"
        :alt="project.title"
        class="h-56 w-full object-cover transition duration-300 group-hover:scale-110"
        loading="lazy"
        decoding="async"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent opacity-70" />
      <span class="absolute right-3 top-3 rounded-lg border border-red-500 bg-red-600/40 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-red-100 backdrop-blur-sm shadow-lg shadow-red-600/30">
        {{ project.genre }}
      </span>
    </div>
    <div class="space-y-3 p-6">
      <h3 class="text-xl font-black text-zinc-100 group-hover:text-red-400 transition">{{ project.title }}</h3>
      <p class="text-sm text-zinc-400 leading-relaxed">{{ project.cardSummary }}</p>
      <div class="flex flex-wrap gap-2 pt-3">
        <span v-for="tech in project.technologies.slice(0, 2)" :key="tech" class="text-xs font-bold rounded-md bg-red-600/20 border border-red-600/30 text-red-300 px-2.5 py-1.5 uppercase tracking-wider">
          {{ tech }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
