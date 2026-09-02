<script setup lang="ts">
const appThemeClass = 'theme-default'

useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} | Alex Strikwerda` : 'Alex Strikwerda | Portfolio',
  meta: [
    {
      name: 'description',
      content:
        'Developer and creator showcasing game development and interactive projects built with Unity, C#, and modern web technologies.'
    }
  ]
})

</script>

<template>
  <div class="relative isolate min-h-screen overflow-hidden bg-zinc-900 text-zinc-100" :class="appThemeClass">
    <div class="space-bg" aria-hidden="true" />
    <div class="space-glow" aria-hidden="true" />
    <div class="crt-overlay" aria-hidden="true" />
    <NuxtRouteAnnouncer />
    <AppHeader />
    <main class="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-36 sm:px-8 sm:pt-40">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap');

:root {
  --bg-primary: #0f1419;
  --bg-secondary: #1a202c;
  --border-color: rgba(100, 116, 139, 0.3);
  --text-primary: #e2e8f0;
  --text-secondary: #94a3b8;
  --accent: #3b82f6;
  --accent-light: #60a5fa;
}

html {
  overflow-y: scroll;
  scrollbar-gutter: stable;
}

body {
  font-family: 'Rajdhani', system-ui, -apple-system, sans-serif;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  line-height: 1.6;
}

.space-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, var(--bg-primary) 0%, #1a2835 50%, var(--bg-primary) 100%);
}

.space-glow {
  position: absolute;
  inset: 0;
  display: none;
}

.crt-overlay {
  position: absolute;
  inset: 0;
  display: none;
}

.theme-default {
  --bg-primary: #0f1419;
  --bg-secondary: #1a202c;
  --border-color: rgba(100, 116, 139, 0.3);
  --text-primary: #e2e8f0;
  --text-secondary: #94a3b8;
  --accent: #3b82f6;
  --accent-light: #60a5fa;
}

/* Reusable component classes */
.btn-primary {
  @apply inline-flex items-center gap-2 rounded-lg border px-6 py-3 font-bold text-sm transition;
  border-color: var(--accent-light);
  background-color: var(--accent);
  color: white;
}

.btn-primary:hover {
  background-color: var(--accent-light);
}

.btn-outline {
  @apply rounded-lg border px-5 py-2 text-sm font-semibold transition;
  border-color: var(--border-color);
  color: var(--text-primary);
}

.btn-outline:hover {
  background-color: var(--bg-secondary);
}

.btn-ghost {
  @apply rounded-lg border px-5 py-2 text-sm font-semibold transition;
  border-color: var(--border-color);
  color: var(--text-secondary);
}

.btn-ghost:hover {
  color: var(--text-primary);
  background-color: rgba(59, 130, 246, 0.05);
}

.section-label {
  @apply text-xs font-bold uppercase tracking-[0.1em];
  color: var(--accent-light);
}

.text-gradient {
  @apply bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent;
}

.accent-line {
  @apply h-1 w-16;
  background-color: var(--accent);
}

.skill-bar {
  @apply h-2 rounded-full bg-slate-700;
}

.skill-fill {
  @apply h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-400;
}

.social-icon-btn {
  @apply inline-flex h-11 w-11 items-center justify-center rounded-lg border transition;
  border-color: var(--border-color);
  color: var(--accent);
  background-color: var(--bg-secondary);
}

.social-icon-btn:hover {
  background-color: rgba(59, 130, 246, 0.1);
  color: var(--accent-light);
}

h1,
h2,
h3,
.brand-title {
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

h1,
h2,
h3 {
  line-height: 1.2;
  font-weight: 900;
}
</style>
