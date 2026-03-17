<script setup lang="ts">
import { projects } from '~/data/projects'

useHead({ title: 'Home' })

const featured = projects.slice(0, 2)
</script>

<template>
  <section class="space-y-12">
    <div class="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <img
          src="/img/PalexGezicht.jpg"
          alt="Portrait of Alex Strikwerda"
          class="mx-auto aspect-square w-56 rounded-2xl border-2 border-red-600/40 object-cover shadow-2xl shadow-red-900/30 sm:w-80"
          draggable="false"
        >
      </div>
      <div class="space-y-8">
        <div class="space-y-4">
          <div class="inline-block rounded-lg border border-red-600/40 bg-red-600/10 px-3 py-1.5">
            <p class="text-xs font-bold uppercase tracking-widest text-red-400">Game Developer</p>
          </div>
          <h1 class="text-6xl font-black leading-tight sm:text-7xl">
            Hi, I'm <span class="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">Alex</span>
          </h1>
          <div class="h-1 w-20 bg-gradient-to-r from-red-600 to-red-500" />
        </div>
        <p class="max-w-2xl text-lg leading-relaxed text-zinc-300">
          Crafting immersive gaming experiences with <span class="font-bold text-red-400">Unity</span> and <span class="font-bold text-red-400">C#</span>. Focused on engaging mechanics, polished visuals, and unforgettable interactions.
        </p>
        <div class="flex flex-col gap-2 text-sm text-zinc-400">
          <span class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-red-500" /> 18 • Game Dev Student</span>
          <span class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-red-500" /> Sint Lucas Gent</span>
          <span class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-red-500" /> 4+ Published Projects</span>
        </div>
        <NuxtLink
          to="/projects/"
          class="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 font-bold uppercase tracking-wider text-zinc-100 transition hover:scale-105 hover:shadow-lg hover:shadow-red-600/50 active:scale-95"
        >
          <span>Explore Projects</span>
          <span class="text-lg">›</span>
        </NuxtLink>
      </div>
    </div>
  </section>

  <section class="mt-24 space-y-10 border-t border-zinc-800/50 pt-16">
    <div class="space-y-3">
      <p class="text-xs font-black uppercase tracking-widest text-red-500">Featured</p>
      <h2 class="text-5xl font-black">Latest <span class="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">Games</span></h2>
    </div>
    <div class="grid gap-6 sm:grid-cols-2">
      <ProjectCard v-for="project in featured" :key="project.slug" :project="project" />
    </div>
    <div class="pt-4">
      <NuxtLink
        to="/projects/"
        class="group inline-flex items-center gap-2 font-bold uppercase tracking-wider text-red-400 transition hover:text-red-300"
      >
        <span>View all games</span>
        <span class="text-xl transition group-hover:translate-x-1">→</span>
      </NuxtLink>
    </div>
  </section>
</template>
