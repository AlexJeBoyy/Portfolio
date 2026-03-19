<script setup lang="ts">
import { getCurrentModuleChain, getVisibleModules, navigationModules } from '~/data/navigation'

const route = useRoute()

const mainModules = computed(() => getVisibleModules(navigationModules))
const currentChain = computed(() => getCurrentModuleChain(route.path, navigationModules))

const activeMainModule = computed(() => {
  const chain = currentChain.value
  if (chain.length === 0) return undefined

  return mainModules.value.find((module) => module.name === chain[0]?.name)
})

const tabModules = computed(() => getVisibleModules(activeMainModule.value?.tabModules ?? []))

function isMainModuleActive(modulePath: string) {
  if (modulePath === '/') {
    return route.path === '/'
  }

  return route.path === modulePath || route.path.startsWith(`${modulePath}/`)
}

function isTabModuleActive(modulePath: string) {
  const [pathOnly, hash] = modulePath.split('#')
  const pathMatch = route.path === pathOnly || route.path.startsWith(`${pathOnly}/`)
  if (!hash) {
    return pathMatch
  }

  return pathMatch && route.hash === `#${hash}`
}
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-cyan-400/20 bg-[#050913]/95 backdrop-blur-md">
    <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
      <NuxtLink to="/" class="brand-title text-lg font-black tracking-tighter text-cyan-300 transition hover:text-cyan-200">
        Alex Strikwerda
      </NuxtLink>

      <nav class="flex items-center gap-0.5" aria-label="Main navigation">
        <NuxtLink
          v-for="module in mainModules"
          :key="module.name"
          :to="module.path"
          class="rounded-md border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] transition"
          :class="
            isMainModuleActive(module.path)
              ? 'border-cyan-300/70 bg-cyan-400/20 text-cyan-200 shadow-[0_0_14px_rgba(34,211,238,0.3)]'
              : 'border-zinc-700 text-zinc-400 hover:border-cyan-400/50 hover:text-zinc-200 hover:bg-[#0e1a2f]'
          "
        >
          {{ module.title }}
        </NuxtLink>
      </nav>
    </div>

    <div v-if="tabModules.length > 0" class="border-t border-cyan-500/15">
      <div class="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-6 py-3 sm:px-8" aria-label="Sub navigation">
        <NuxtLink
          v-for="tab in tabModules"
          :key="tab.name"
          :to="tab.path"
          class="whitespace-nowrap rounded-sm border border-zinc-700/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-300 transition"
          :class="isTabModuleActive(tab.path) ? 'border-red-300/80 bg-red-400/15 text-red-200' : 'hover:border-cyan-400/60 hover:text-zinc-100'"
        >
          {{ tab.title }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
