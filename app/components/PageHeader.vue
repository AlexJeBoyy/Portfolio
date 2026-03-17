<script setup lang="ts">
defineProps<{
  label: string
  title: string
  highlight?: string
}>()
</script>

<template>
  <div class="space-y-3">
    <p class="section-label">{{ label }}</p>
    <h1 class="text-5xl font-black">
      {{ title }}<span v-if="highlight" class="text-gradient"> {{ highlight }}</span>
    </h1>
    <div class="accent-line" />
  </div>
</template>
