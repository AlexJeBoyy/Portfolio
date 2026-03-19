<script setup lang="ts">
import { projects } from '~/data/projects'

useHead({ title: 'Projects' })

type ProjectTab = 'unity' | 'unreal' | 'websites'

const route = useRoute()

const activeTab = computed<ProjectTab>(() => {
  const hash = route.hash.replace('#', '').toLowerCase()
  if (hash === 'unreal') return 'unreal'
  if (hash === 'websites') return 'websites'
  return 'unity'
})

function isWebsiteProject(technologies: string[]): boolean {
  return technologies.some((tech) => /vue|nuxt|typescript|javascript|html|css|react|next/i.test(tech))
}

function isUnityProject(technologies: string[]): boolean {
  return technologies.some((tech) => /unity/i.test(tech))
}

function isUnrealProject(technologies: string[]): boolean {
  return technologies.some((tech) => /unreal/i.test(tech))
}

const filteredProjects = computed(() => {
  if (activeTab.value === 'unreal') {
    return projects.filter((project) => isUnrealProject(project.technologies))
  }

  if (activeTab.value === 'websites') {
    return projects.filter((project) => isWebsiteProject(project.technologies))
  }

  return projects.filter((project) => isUnityProject(project.technologies))
})

const sectionHighlight = computed(() => {
  if (activeTab.value === 'unreal') return 'Unreal'
  if (activeTab.value === 'websites') return 'Websites'
  return 'Unity'
})
</script>

<template>
  <section class="space-y-10">
    <PageHeader label="Projects" title="My" :highlight="sectionHighlight" />

    <div v-if="filteredProjects.length > 0" class="grid gap-6 sm:grid-cols-2">
      <ProjectCard v-for="project in filteredProjects" :key="project.slug" :project="project" />
    </div>

    <div v-else class="rounded-md border border-red-300/35 bg-red-500/10 p-5 text-red-100">
      No projects in this tab yet.
    </div>
  </section>
</template>
