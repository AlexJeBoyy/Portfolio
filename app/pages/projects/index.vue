<script setup lang="ts">
import { projects } from '~/data/projects'

useHead({ title: 'Projects' })

type ProjectTab = 'games' | 'mods' | 'websites'

const route = useRoute()

const activeTab = computed<ProjectTab>(() => {
  const hash = route.hash.replace('#', '').toLowerCase()
  if (hash === 'mods') return 'mods'
  if (hash === 'websites') return 'websites'
  return 'games'
})

function isWebsiteProject(technologies: string[]): boolean {
  return technologies.some((tech) => /vue|nuxt|typescript|javascript|html|css|react|next/i.test(tech))
}

function isGameProject(technologies: string[]): boolean {
  return technologies.some((tech) => /unity|unreal|c#|c\+\+/i.test(tech))
}

function isModProject(technologies: string[]): boolean {
  return !isGameProject(technologies) && !isWebsiteProject(technologies)
}

const filteredProjects = computed(() => {
  if (activeTab.value === 'mods') {
    return projects.filter((project) => isModProject(project.technologies))
  }

  if (activeTab.value === 'websites') {
    return projects.filter((project) => isWebsiteProject(project.technologies))
  }

  return projects.filter((project) => isGameProject(project.technologies))
})

const sectionHighlight = computed(() => {
  if (activeTab.value === 'mods') return 'Mods/Plugins'
  if (activeTab.value === 'websites') return 'Websites'
  return 'Games'
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
