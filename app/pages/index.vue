<script setup lang="ts">
import { projects } from '~/data/projects'

useHead({ title: 'Home' })

const featured = projects.slice(0, 2)
const baseURL = useRuntimeConfig().app.baseURL

function resolveImagePath(path: string): string {
  return `${baseURL}${path.replace(/^\//, '')}`
}
</script>

<template>
  <section class="space-y-12">
    <div class="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
      <img
        :src="resolveImagePath('/img/PalexGezicht.jpg')"
        alt="Portrait of Alex Strikwerda"
        class="mx-auto aspect-square w-56 rounded-2xl border-2 border-red-600/40 object-cover shadow-2xl shadow-red-900/30 sm:w-80"
        draggable="false"
      />
      <div class="space-y-8">
        <div class="space-y-4">
          <div class="inline-block rounded-lg border border-red-600/40 bg-red-600/10 px-3 py-1.5">
            <p class="section-label">Game Developer</p>
          </div>
          <h1 class="text-6xl font-black leading-tight sm:text-7xl">
            Hi, I'm <span class="text-gradient">Alex</span>
          </h1>
          <div class="accent-line" />
        </div>
        <p class="max-w-2xl text-lg leading-relaxed text-zinc-300">
          I'm a game dev student who loves building games with <span class="font-bold text-red-400">Unity</span> and <span class="font-bold text-red-400">C#</span>. I enjoy turning ideas into playable experiences and learning something new with every project.
        </p>
        <div class="flex flex-col gap-2 text-sm text-zinc-400">
          <span class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-red-500" /> Born in 2006 • Game Dev Student</span>
          <span class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-red-500" /> Sint Lucas</span>
          <span class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-red-500" /> Multiple Projects in Progress</span>
        </div>
        <NuxtLink to="/projects/" class="btn-primary">
          <span>Explore Projects</span>
          <span class="text-lg">›</span>
        </NuxtLink>
      </div>
    </div>
  </section>

  <section class="mt-24 space-y-10 border-t border-zinc-800/50 pt-16">
    <div class="space-y-3">
      <p class="section-label">Featured</p>
      <h2 class="text-5xl font-black">Latest <span class="text-gradient">Games</span></h2>
    </div>
    <div class="grid gap-6 sm:grid-cols-2">
      <ProjectCard v-for="project in featured" :key="project.slug" :project="project" />
    </div>
    <NuxtLink to="/projects/" class="group inline-flex items-center gap-2 font-bold uppercase tracking-wider text-red-400 transition hover:text-red-300">
      <span>View all games</span>
      <span class="text-xl transition group-hover:translate-x-1">→</span>
    </NuxtLink>
  </section>
</template>
