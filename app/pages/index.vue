<script setup lang="ts">
import { getRandomFeaturedProjects } from '~/data/projects'

useHead({ title: 'Home' })

const featured = ref([])
const baseURL = useRuntimeConfig().app.baseURL

// Load random featured projects on mount to avoid hydration issues
onMounted(() => {
  featured.value = getRandomFeaturedProjects(2)
})

function resolveImagePath(path: string): string {
  return `${baseURL}${path.replace(/^\//, '')}`
}
</script>

<template>
  <section class="space-y-12">
    <div class="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
      <img
        :src="resolveImagePath('/img/AlexFoto.jpg')"
        alt="Portrait of Alex Strikwerda"
        class="mx-auto aspect-square w-56 rounded-lg border border-slate-700 object-cover shadow-lg sm:w-80"
        draggable="false"
      />
      <div class="space-y-8">
        <div class="space-y-4">
          <div class="inline-block rounded-lg border border-blue-500/40 bg-blue-500/10 px-3 py-1.5">
            <p class="section-label">Developer & Creator</p>
          </div>
          <h1 class="text-6xl font-black leading-tight sm:text-7xl">
            Hi, I'm <span class="text-gradient">Alex</span>
          </h1>
          <div class="accent-line" />
        </div>
        <p class="max-w-2xl text-lg leading-relaxed text-slate-300">
          I'm a developer passionate about creating interactive experiences through <span class="font-bold text-blue-400">game development</span> with <span class="font-bold text-blue-400">Unity & C#</span>, combined with <span class="font-bold text-blue-400">web development</span> skills. I love solving complex problems and bringing creative ideas to life.
        </p>
        <div class="flex flex-col gap-2 text-sm text-slate-400">
          <span class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-blue-500" /> Born in 2006 • Game Dev Student</span>
          <span class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-blue-500" /> Sint Lucas</span>
          <span class="flex items-center gap-2"><span class="h-1.5 w-1.5 rounded-full bg-blue-500" /> Multiple Projects in Progress</span>
        </div>
        <NuxtLink to="/projects/" class="btn-primary">
          <span>Explore Projects</span>
          <span class="text-lg">›</span>
        </NuxtLink>
      </div>
    </div>

  </section>

  <section class="space-y-10 border-t border-slate-700/50 pt-16">
    <div class="space-y-3">
      <p class="section-label">Featured Work</p>
      <h2 class="text-5xl font-black">Selected <span class="text-gradient">Projects</span></h2>
    </div>
    <div class="grid gap-6 sm:grid-cols-2">
      <ProjectCard v-for="project in featured" :key="project.slug" :project="project" />
    </div>
    <NuxtLink to="/projects/" class="group inline-flex items-center gap-2 font-bold text-blue-400 transition hover:text-blue-300">
      <span>View all projects</span>
      <span class="text-xl transition group-hover:translate-x-1">→</span>
    </NuxtLink>
  </section>
</template>
