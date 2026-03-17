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
  <header class="fixed inset-x-0 top-0 z-50 border-b border-red-600/10 bg-zinc-950/98 backdrop-blur-md">
    <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
      <NuxtLink to="/" class="brand-title text-lg font-black tracking-tighter text-red-500 hover:text-red-400 transition">
        Alex Strikwerda
      </NuxtLink>

      <nav class="flex items-center gap-0.5" aria-label="Main navigation">
        <NuxtLink
          v-for="module in mainModules"
          :key="module.name"
          :to="module.path"
          class="rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition"
          :class="
            isMainModuleActive(module.path)
              ? 'bg-red-600 text-zinc-950 shadow-lg shadow-red-600/50'
              : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
          "
        >
          {{ module.title }}
        </NuxtLink>
      </nav>
    </div>

    <div v-if="tabModules.length > 0" class="border-t border-zinc-800/90">
      <div class="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-6 py-3 sm:px-8" aria-label="Sub navigation">
        <NuxtLink
          v-for="tab in tabModules"
          :key="tab.name"
          :to="tab.path"
          class="whitespace-nowrap rounded-full border border-zinc-700/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-300 transition"
          :class="isTabModuleActive(tab.path) ? 'border-red-500/80 bg-red-600/20 text-red-300' : 'hover:border-zinc-500 hover:text-zinc-100'"
        >
          {{ tab.title }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
