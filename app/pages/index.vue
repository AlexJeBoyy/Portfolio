<script setup lang="ts">
import { projects } from '~/data/projects'

useHead({ title: 'Home' })

const featured = projects.slice(0, 2)
</script>

<template>
  <section class="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
    <img
      src="/img/PalexGezicht.jpg"
      alt="Portrait of Alex Strikwerda"
      class="mx-auto aspect-square w-56 rounded-full border-4 border-zinc-100 object-cover sm:w-72"
      draggable="false"
    >
    <div class="space-y-4">
      <h1 class="text-4xl font-extrabold leading-tight sm:text-5xl">
        Hi, my name is <span class="text-red-500">Alex</span>.
      </h1>
      <p class="max-w-2xl text-lg text-zinc-300">
        I am an 18-year-old software development student specializing in game development.
        I discovered coding at a young age and I have always been interested in making games.
      </p>
    </div>
  </section>

  <section class="mt-16 space-y-6">
    <h2 class="text-2xl font-bold">Featured Projects</h2>
    <div class="grid gap-6 sm:grid-cols-2">
      <ProjectCard v-for="project in featured" :key="project.slug" :project="project" />
    </div>
    <NuxtLink
      to="/projects/"
      class="inline-flex rounded-full border border-red-600 px-5 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-600/20"
    >
      View all projects
    </NuxtLink>
  </section>
</template>
