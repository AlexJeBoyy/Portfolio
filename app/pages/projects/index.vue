<script setup lang="ts">
import { projects } from '~/data/projects'

useHead({ title: 'Projects' })
</script>

<template>
  <section class="space-y-6">
    <h1 class="text-3xl font-bold">Projects</h1>
    <div class="grid gap-6 sm:grid-cols-2">
      <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
    </div>
  </section>
</template>
