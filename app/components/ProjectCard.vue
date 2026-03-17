<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
}>()
</script>

<template>
  <NuxtLink
    :to="`/projects/${project.slug}/`"
    class="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 transition hover:-translate-y-1 hover:border-red-600/70"
  >
    <img
      :src="project.images[0]"
      :alt="project.title"
      class="h-52 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
      loading="lazy"
      decoding="async"
    >
    <div class="space-y-2 p-5">
      <h3 class="text-xl font-bold text-zinc-100">{{ project.title }}</h3>
      <p class="text-sm text-zinc-400">{{ project.cardSummary }}</p>
    </div>
  </NuxtLink>
</template>
