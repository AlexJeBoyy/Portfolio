<script setup lang="ts">
import { projects } from '~/data/projects'

useHead({ title: 'Projects' })
</script>

<template>
  <section class="space-y-10">
    <PageHeader label="Projects" title="My" highlight="Games" />
    <div class="grid gap-6 sm:grid-cols-2">
      <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
    </div>
  </section>
</template>
