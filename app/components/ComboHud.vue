<script setup lang="ts">
const props = defineProps<{
  progressLabel: string
  progressPercent: number
  secondsLeft: number
  isActive: boolean
  badgeUnlocked: boolean
  tokenCount: number
  completionCount: number
  currentStepLabel: string
  dwellRequiredSeconds: number
  dwellElapsedSeconds: number
  dwellProgressPercent: number
  eventText?: string
  eventTone?: 'up' | 'success' | 'fail'
  eventId?: number
}>()

const visibleEvent = ref<string>('')
const visibleTone = ref<'up' | 'success' | 'fail'>('up')
const showEvent = ref(false)
let eventTimeout: ReturnType<typeof setTimeout> | null = null

watch(
  () => props.eventId,
  () => {
    if (!props.eventText) return
    visibleEvent.value = props.eventText
    visibleTone.value = props.eventTone ?? 'up'
    showEvent.value = true

    if (eventTimeout) {
      clearTimeout(eventTimeout)
    }

    eventTimeout = setTimeout(() => {
      showEvent.value = false
    }, 2200)
  }
)

onBeforeUnmount(() => {
  if (eventTimeout) {
    clearTimeout(eventTimeout)
  }
})

const timerClass = computed(() => {
  if (props.secondsLeft <= 10) return 'text-red-300'
  if (props.secondsLeft <= 25) return 'text-amber-300'
  return 'text-emerald-300'
})

const eventToneClass = computed(() => {
  if (visibleTone.value === 'success') return 'combo-toast-success'
  if (visibleTone.value === 'fail') return 'combo-toast-fail'
  return 'combo-toast-up'
})
</script>

<template>
  <div class="combo-root pointer-events-none fixed bottom-5 right-5 z-[70] space-y-3 sm:bottom-7 sm:right-7">
    <Transition name="combo-pop">
      <div
        v-if="showEvent"
        class="combo-toast rounded-md border px-4 py-2 text-xs font-black uppercase tracking-[0.18em] shadow-xl"
        :class="eventToneClass"
      >
        {{ visibleEvent }}
      </div>
    </Transition>

    <div class="combo-panel rounded-md border border-cyan-300/40 bg-zinc-950/92 p-4 shadow-[0_0_24px_rgba(45,212,191,0.18)]">
      <div class="mb-2 flex items-center justify-between gap-3">
        <p class="combo-label">Explorer Combo</p>
        <span
          class="rounded border px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.16em]"
          :class="badgeUnlocked ? 'border-amber-300/70 text-amber-200' : 'border-zinc-600 text-zinc-400'"
        >
          {{ badgeUnlocked ? 'S-Rank Explorer' : 'Rank Locked' }}
        </span>
      </div>

      <div class="grid grid-cols-2 gap-2 text-[11px] uppercase tracking-[0.16em] text-zinc-300">
        <span class="combo-cell">Chain {{ progressLabel }}</span>
        <span class="combo-cell text-right" :class="timerClass">{{ secondsLeft }}s</span>
      </div>

      <div class="mt-3 h-2 rounded-sm bg-zinc-800">
        <div class="h-2 rounded-sm bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-lime-300 transition-all duration-300" :style="`width: ${Math.min(progressPercent, 100)}%`" />
      </div>

      <div class="mt-2 h-1.5 rounded-sm bg-zinc-800/80" v-if="isActive">
        <div class="h-1.5 rounded-sm bg-gradient-to-r from-orange-300 to-yellow-200 transition-all duration-200" :style="`width: ${Math.min(dwellProgressPercent, 100)}%`" />
      </div>

      <p class="mt-2 text-[10px] uppercase tracking-[0.13em] text-zinc-400" v-if="isActive">
        Reading {{ currentStepLabel }}: {{ dwellElapsedSeconds }}/{{ dwellRequiredSeconds }}s
      </p>

      <p class="mt-2 text-[10px] uppercase tracking-[0.13em] text-zinc-400">
        {{ isActive ? 'Route chain active: Projects → Skills → Contact' : 'Start on Projects to trigger combo chain' }}
      </p>

      <p class="mt-1 text-[10px] uppercase tracking-[0.13em] text-cyan-200/90">
        Rewards: {{ tokenCount }} Tokens • {{ completionCount }} Clears
      </p>
    </div>
  </div>
</template>

<style scoped>
.combo-label {
  color: #a7f3d0;
  font-family: 'Press Start 2P', monospace;
  font-size: 10px;
  line-height: 1.25;
  text-shadow: 0 0 10px rgba(52, 211, 153, 0.4);
}

.combo-cell {
  font-family: 'VT323', monospace;
  font-size: 18px;
}

.combo-toast {
  font-family: 'Press Start 2P', monospace;
  max-width: 320px;
}

.combo-toast-up {
  border-color: rgba(103, 232, 249, 0.7);
  background: rgba(22, 78, 99, 0.9);
  color: #a5f3fc;
}

.combo-toast-success {
  border-color: rgba(253, 230, 138, 0.85);
  background: rgba(113, 63, 18, 0.92);
  color: #fef08a;
}

.combo-toast-fail {
  border-color: rgba(252, 165, 165, 0.8);
  background: rgba(127, 29, 29, 0.9);
  color: #fecaca;
}

.combo-pop-enter-active,
.combo-pop-leave-active {
  transition: all 0.2s ease;
}

.combo-pop-enter-from,
.combo-pop-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (max-width: 640px) {
  .combo-root {
    left: 1rem;
    right: 1rem;
  }

  .combo-panel {
    width: 100%;
  }
}
</style>
