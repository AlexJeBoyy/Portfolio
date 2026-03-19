<script setup lang="ts">
const appThemeClass = 'theme-default'

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
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&family=Rajdhani:wght@500;700&display=swap');

:root {
  --retro-bg: #090d18;
  --retro-surface: #10172a;
  --retro-border: rgba(34, 211, 238, 0.38);
  --retro-text: #dbecff;
  --retro-muted: #7ea3c2;
  --retro-neon: #22d3ee;
  --retro-hot: #f97316;
}

html {
  overflow-y: scroll;
  scrollbar-gutter: stable;
}

body {
  font-family: 'Rajdhani', sans-serif;
  color: var(--retro-text);
  background-color: var(--retro-bg);
}

.space-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(1200px 700px at 12% -5%, rgba(249, 115, 22, 0.17), transparent 60%),
    radial-gradient(1100px 700px at 92% 12%, rgba(34, 211, 238, 0.18), transparent 58%),
    radial-gradient(900px 650px at 50% 110%, rgba(16, 185, 129, 0.12), transparent 62%),
    linear-gradient(180deg, #151022 0%, #0a1222 42%, #060912 100%);
}

.space-glow {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 25%, rgba(34, 211, 238, 0.18) 0 1px, transparent 2px),
    radial-gradient(circle at 75% 35%, rgba(251, 146, 60, 0.16) 0 1px, transparent 2px),
    radial-gradient(circle at 35% 70%, rgba(255, 255, 255, 0.1) 0 1px, transparent 2px),
    radial-gradient(circle at 82% 78%, rgba(16, 185, 129, 0.08) 0 1px, transparent 2px);
  background-size: 220px 220px, 300px 300px, 340px 340px, 360px 360px;
  opacity: 0.52;
  pointer-events: none;
}

.crt-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: repeating-linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.045) 0,
    rgba(255, 255, 255, 0.045) 1px,
    transparent 2px,
    transparent 4px
  );
  mix-blend-mode: soft-light;
  opacity: 0.2;
}

.theme-default {
  --retro-bg: #0a101e;
  --retro-surface: #111b30;
  --retro-border: rgba(56, 189, 248, 0.34);
  --retro-text: #e5efff;
  --retro-muted: #8ca7c2;
  --retro-neon: #38bdf8;
  --retro-hot: #f87171;
}

/* Reusable component classes */
.btn-primary {
  @apply inline-flex items-center gap-2 rounded-md border px-6 py-3 font-bold uppercase tracking-[0.2em] text-zinc-100 transition hover:scale-105 active:scale-95;
  border-color: rgba(34, 211, 238, 0.6);
  background: linear-gradient(90deg, rgba(8, 47, 73, 0.95), rgba(12, 74, 110, 0.92));
  box-shadow: 0 0 18px rgba(34, 211, 238, 0.25);
  font-family: 'Press Start 2P', monospace;
  font-size: 11px;
}

.btn-outline {
  @apply rounded-md border px-5 py-2 text-sm font-semibold transition;
  border-color: rgba(34, 211, 238, 0.5);
  color: #9fe9f5;
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
}

.btn-ghost {
  @apply rounded-md border px-5 py-2 text-sm font-semibold transition;
  border-color: rgba(126, 163, 194, 0.5);
  color: #d5e8ff;
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
}

.section-label {
  @apply text-xs font-black uppercase tracking-[0.24em];
  color: #f87171;
  font-family: 'Press Start 2P', monospace;
}

.text-gradient {
  @apply bg-gradient-to-r from-cyan-300 via-sky-200 to-red-300 bg-clip-text text-transparent;
}

.accent-line {
  @apply h-1 w-24;
  background: linear-gradient(90deg, #22d3ee 0%, #f87171 100%);
}

.skill-bar {
  @apply h-2.5 rounded-sm bg-zinc-900/80;
  border: 1px solid rgba(34, 211, 238, 0.3);
}

.skill-fill {
  @apply h-2.5 rounded-sm bg-gradient-to-r from-cyan-400 to-red-400;
}

.social-icon-btn {
  @apply inline-flex h-11 w-11 items-center justify-center rounded-md border text-cyan-300 transition hover:-translate-y-0.5;
  border-color: rgba(34, 211, 238, 0.55);
  background-color: rgba(8, 47, 73, 0.2);
  box-shadow: inset 0 0 10px rgba(34, 211, 238, 0.1);
}

h1,
h2,
h3,
.brand-title {
  font-family: 'Press Start 2P', monospace;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

h1,
h2,
h3 {
  line-height: 1.2;
}
</style>
