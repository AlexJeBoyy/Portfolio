<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} | Alex Strikwerda` : 'Alex Strikwerda | Portfolio',
  meta: [
    {
      name: 'description',
      content:
        'Game developer portfolio of Alex Strikwerda featuring projects.'
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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;700&display=swap');

body {
  font-family: 'Space Grotesk', sans-serif;
}

h1, h2, h3, .brand-title {
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.02em;
}

/* Reusable component classes */
.btn-primary {
  @apply inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 font-bold uppercase tracking-wider text-zinc-100 transition hover:scale-105 hover:shadow-lg hover:shadow-red-600/50 active:scale-95;
}

.btn-outline {
  @apply rounded-full border border-red-600 px-5 py-2 text-sm font-semibold text-red-300 transition hover:bg-red-600/20;
}

.btn-ghost {
  @apply rounded-full border border-zinc-600 px-5 py-2 text-sm font-semibold text-zinc-200 transition hover:bg-zinc-800;
}

.section-label {
  @apply text-xs font-black uppercase tracking-widest text-red-500;
}

.text-gradient {
  @apply bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent;
}

.accent-line {
  @apply h-1 w-16 bg-gradient-to-r from-red-600 to-red-500;
}

.skill-bar {
  @apply h-2.5 rounded-full bg-zinc-800/60;
}

.skill-fill {
  @apply h-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-500;
}

.social-icon-btn {
  @apply inline-flex h-11 w-11 items-center justify-center rounded-full border border-red-600/70 text-red-400 transition hover:-translate-y-0.5 hover:bg-red-600/20 hover:text-red-300;
}
</style>
