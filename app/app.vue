<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} | Alex Strikwerda` : 'Alex Strikwerda | Portfolio',
  meta: [
    {
      name: 'description',
      content:
        'Game developer portfolio of Alex Strikwerda featuring Unity and C# projects.'
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-100">
    <NuxtRouteAnnouncer />
    <AppHeader />
    <main class="mx-auto w-full max-w-6xl px-6 pb-16 pt-28 sm:px-8">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Space+Grotesk:wght@400;500;700&display=swap');

body {
  font-family: 'Space Grotesk', sans-serif;
}

h1,
h2,
h3,
.brand-title {
  font-family: 'Sora', sans-serif;
}
</style>
