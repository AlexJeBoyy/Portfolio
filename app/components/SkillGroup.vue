<script setup lang="ts">
defineProps<{
  title: string
  skills: [string, number][]
}>()
</script>

<template>
  <div>
    <h3 class="mb-4 text-lg font-bold text-red-300">{{ title }}</h3>
    <div class="grid gap-4">
      <div v-for="[name, value] in skills" :key="name" class="space-y-1.5">
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-zinc-200">{{ name }}</p>
          <span class="text-xs text-zinc-500">{{ value }}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-fill" :style="`width: ${value}%`" />
        </div>
      </div>
    </div>
  </div>
</template>
