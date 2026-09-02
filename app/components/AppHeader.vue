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
  <header class="fixed inset-x-0 top-0 z-50 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-md">
    <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
      <NuxtLink to="/" class="brand-title text-lg font-bold tracking-tight text-slate-100 transition hover:text-blue-400">
        Alex Strikwerda
      </NuxtLink>

      <nav class="flex items-center gap-1" aria-label="Main navigation">
        <NuxtLink
          v-for="module in mainModules"
          :key="module.name"
          :to="module.path"
          class="rounded-lg border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] transition"
          :class="
            isMainModuleActive(module.path)
              ? 'border-blue-500/70 bg-blue-500/20 text-blue-100'
              : 'border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-200 hover:bg-slate-800'
          "
        >
          {{ module.title }}
        </NuxtLink>
      </nav>
    </div>

    <div v-if="tabModules.length > 0" class="border-t border-slate-700/50">
      <div class="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-6 py-3 sm:px-8" aria-label="Sub navigation">
        <NuxtLink
          v-for="tab in tabModules"
          :key="tab.name"
          :to="tab.path"
          class="whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] transition"
          :class="isTabModuleActive(tab.path) ? 'border-blue-500/70 bg-blue-500/20 text-blue-100' : 'border-slate-700 text-slate-400 hover:border-slate-600 hover:text-slate-200'"
        >
          {{ tab.title }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
