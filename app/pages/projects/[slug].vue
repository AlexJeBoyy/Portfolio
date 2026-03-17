<script setup lang="ts">
import { getProjectBySlug } from '~/data/projects'

const route = useRoute()
const slug = String(route.params.slug)
const project = getProjectBySlug(slug)

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

useHead({ title: project.title })
</script>

<template>
  <section class="space-y-10">
    <div class="space-y-3">
      <p class="section-label">{{ project.genre }}</p>
      <h1 class="text-5xl font-black">{{ project.title }}</h1>
      <div class="accent-line" />
      <p class="max-w-3xl pt-2 text-lg leading-relaxed text-zinc-300">{{ project.description }}</p>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <img
        v-for="image in project.images"
        :key="image"
        :src="image"
        :alt="`${project.title} screenshot`"
        class="h-56 w-full rounded-xl border border-zinc-800 object-cover"
        loading="lazy"
        decoding="async"
      >
    </div>

    <div class="grid gap-8 md:grid-cols-2">
      <div>
        <h2 class="text-xl font-bold">Key Features</h2>
        <ul class="mt-3 list-disc space-y-1 pl-5 text-zinc-300">
          <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
        </ul>
      </div>

      <div>
        <h2 class="text-xl font-bold">Technologies Used</h2>
        <p class="mt-3 text-zinc-300">{{ project.technologies.join(', ') }}</p>
      </div>
    </div>

    <div v-if="project.learned" class="space-y-2">
      <h2 class="text-xl font-bold">What I Learned</h2>
      <p class="text-zinc-300">{{ project.learned }}</p>
    </div>

    <div class="flex flex-wrap gap-3">
      <a :href="project.githubUrl" target="_blank" rel="noreferrer" class="btn-outline">
        View on GitHub
      </a>
      <NuxtLink to="/projects/" class="btn-ghost">
        Back to Projects
      </NuxtLink>
    </div>
  </section>
</template>
