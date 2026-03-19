type ComboStep = 'projects' | 'skills' | 'contact'
type ComboTone = 'up' | 'success' | 'fail'
type ThemeId = 'default' | 'neon-grid' | 'sunset-drive'
type EffectId = 'default' | 'scanline-plus' | 'bloom-pulse'
type UnlockableId = 'theme-neon-grid' | 'theme-sunset-drive' | 'effect-scanline-plus' | 'effect-bloom-pulse'

type ShopItem = {
  id: UnlockableId
  kind: 'theme' | 'effect'
  title: string
  description: string
  cost: number
  theme?: ThemeId
  effect?: EffectId
}

type ComboEvent = {
  id: number
  text: string
  tone: ComboTone
}

type ComboState = {
  progress: number
  startedAt: number | null
  badgeUnlocked: boolean
  tokens: number
  completions: number
  unlockedItems: UnlockableId[]
  equippedTheme: ThemeId
  equippedEffect: EffectId
  activeStep: ComboStep | null
  activeStepStartedAt: number | null
  lastEvent: ComboEvent | null
}

const COMBO_WINDOW_MS = 60_000
const COMBO_STEPS: ComboStep[] = ['projects', 'skills', 'contact']
const FIRST_STEP: ComboStep = 'projects'
const BADGE_KEY = 'portfolio-s-rank-explorer'
const REWARDS_KEY = 'portfolio-combo-rewards'
const STEP_DWELL_MS: Record<ComboStep, number> = {
  projects: 10_000,
  skills: 14_000,
  contact: 8_000
}

const SHOP_ITEMS: ShopItem[] = [
  {
    id: 'theme-neon-grid',
    kind: 'theme',
    title: 'Neon Grid Theme',
    description: 'A cool cyan-magenta grid vibe for the whole portfolio.',
    cost: 200,
    theme: 'neon-grid'
  },
  {
    id: 'theme-sunset-drive',
    kind: 'theme',
    title: 'Sunset Drive Theme',
    description: 'Warm orange-pink arcade sunset lighting.',
    cost: 260,
    theme: 'sunset-drive'
  },
  {
    id: 'effect-scanline-plus',
    kind: 'effect',
    title: 'Scanline+',
    description: 'Sharper CRT scanlines and phosphor flicker.',
    cost: 120,
    effect: 'scanline-plus'
  },
  {
    id: 'effect-bloom-pulse',
    kind: 'effect',
    title: 'Bloom Pulse',
    description: 'A subtle neon pulse in the scene lighting.',
    cost: 180,
    effect: 'bloom-pulse'
  }
]

type StoredRewards = {
  badgeUnlocked: boolean
  tokens: number
  completions: number
  unlockedItems?: UnlockableId[]
  equippedTheme?: ThemeId
  equippedEffect?: EffectId
}

function isThemeId(value: unknown): value is ThemeId {
  return value === 'default' || value === 'neon-grid' || value === 'sunset-drive'
}

function isEffectId(value: unknown): value is EffectId {
  return value === 'default' || value === 'scanline-plus' || value === 'bloom-pulse'
}

function isUnlockableId(value: unknown): value is UnlockableId {
  return value === 'theme-neon-grid'
    || value === 'theme-sunset-drive'
    || value === 'effect-scanline-plus'
    || value === 'effect-bloom-pulse'
}

function getStepLabel(step: ComboStep): string {
  if (step === 'projects') return 'Projects'
  if (step === 'skills') return 'Skills'
  return 'Contact'
}

function normalizePath(path: string): string {
  if (path === '/') return '/'
  return path.replace(/\/+$/, '')
}

function resolveStep(path: string): ComboStep | null {
  const cleanPath = normalizePath(path)
  if (cleanPath === '/projects' || cleanPath.startsWith('/projects/')) return 'projects'
  if (cleanPath === '/skills' || cleanPath.startsWith('/skills/')) return 'skills'
  if (cleanPath === '/contact' || cleanPath.startsWith('/contact/')) return 'contact'
  return null
}

export function useComboChain() {
  const state = useState<ComboState>('combo-chain-state', () => ({
    progress: 0,
    startedAt: null,
    badgeUnlocked: false,
    tokens: 0,
    completions: 0,
    unlockedItems: [],
    equippedTheme: 'default',
    equippedEffect: 'default',
    activeStep: null,
    activeStepStartedAt: null,
    lastEvent: null
  }))

  const eventId = useState<number>('combo-chain-event-id', () => 0)
  const clock = useState<number>('combo-chain-clock', () => Date.now())

  const timeLeftMs = computed(() => {
    if (!state.value.startedAt || state.value.progress >= COMBO_STEPS.length) {
      return COMBO_WINDOW_MS
    }

    const elapsed = clock.value - state.value.startedAt
    return Math.max(COMBO_WINDOW_MS - elapsed, 0)
  })

  const secondsLeft = computed(() => Math.ceil(timeLeftMs.value / 1000))

  const hasActiveCombo = computed(() => state.value.startedAt !== null && state.value.progress < COMBO_STEPS.length)
  const hasComboSession = computed(() => state.value.startedAt !== null)

  const isBadgeUnlocked = computed(() => state.value.badgeUnlocked)
  const tokenCount = computed(() => state.value.tokens)
  const completionCount = computed(() => state.value.completions)
  const unlockedItems = computed(() => state.value.unlockedItems)
  const equippedTheme = computed(() => state.value.equippedTheme)
  const equippedEffect = computed(() => state.value.equippedEffect)
  const shopItems = SHOP_ITEMS

  const progressLabel = computed(() => `${state.value.progress}/${COMBO_STEPS.length}`)
  const progressPercent = computed(() => (state.value.progress / COMBO_STEPS.length) * 100)

  const currentStep = computed(() => state.value.activeStep)
  const currentStepLabel = computed(() => {
    if (!state.value.activeStep) return 'Idle'
    return getStepLabel(state.value.activeStep)
  })

  const dwellRequiredSeconds = computed(() => {
    if (!state.value.activeStep) return 0
    return Math.ceil(STEP_DWELL_MS[state.value.activeStep] / 1000)
  })

  const dwellElapsedSeconds = computed(() => {
    if (!state.value.activeStepStartedAt || !state.value.activeStep) return 0
    const elapsedMs = Math.max(clock.value - state.value.activeStepStartedAt, 0)
    return Math.min(Math.floor(elapsedMs / 1000), dwellRequiredSeconds.value)
  })

  const dwellProgressPercent = computed(() => {
    const required = dwellRequiredSeconds.value
    if (!required) return 0
    return Math.min((dwellElapsedSeconds.value / required) * 100, 100)
  })

  function emit(text: string, tone: ComboTone) {
    eventId.value += 1
    state.value.lastEvent = {
      id: eventId.value,
      text,
      tone
    }
  }

  function resetCombo(showEvent = false, message = 'Combo dropped') {
    state.value.progress = 0
    state.value.startedAt = null
    state.value.activeStep = null
    state.value.activeStepStartedAt = null
    if (showEvent) {
      emit(message, 'fail')
    }
  }

  function startComboSession() {
    const now = Date.now()
    state.value.progress = 0
    state.value.startedAt = now
    state.value.activeStep = FIRST_STEP
    state.value.activeStepStartedAt = now
    emit('Combo started: hold on Projects', 'up')
  }

  function loadBadgeFromStorage() {
    if (!import.meta.client) return
    const rewardsRaw = window.localStorage.getItem(REWARDS_KEY)
    if (rewardsRaw) {
      try {
        const parsed = JSON.parse(rewardsRaw) as StoredRewards
        state.value.badgeUnlocked = !!parsed.badgeUnlocked
        state.value.tokens = Number.isFinite(parsed.tokens) ? Math.max(0, Math.floor(parsed.tokens)) : 0
        state.value.completions = Number.isFinite(parsed.completions)
          ? Math.max(0, Math.floor(parsed.completions))
          : 0
        state.value.unlockedItems = Array.isArray(parsed.unlockedItems)
          ? parsed.unlockedItems.filter((id) => isUnlockableId(id))
          : []
        state.value.equippedTheme = isThemeId(parsed.equippedTheme) ? parsed.equippedTheme : 'default'
        state.value.equippedEffect = isEffectId(parsed.equippedEffect) ? parsed.equippedEffect : 'default'
      } catch {
        // Keep defaults when storage is invalid.
      }
    }

    const unlocked = window.localStorage.getItem(BADGE_KEY) === '1'
    if (unlocked) {
      state.value.badgeUnlocked = true
    }
  }

  function saveRewardsToStorage() {
    if (!import.meta.client) return
    const payload: StoredRewards = {
      badgeUnlocked: state.value.badgeUnlocked,
      tokens: state.value.tokens,
      completions: state.value.completions,
      unlockedItems: state.value.unlockedItems,
      equippedTheme: state.value.equippedTheme,
      equippedEffect: state.value.equippedEffect
    }
    window.localStorage.setItem(REWARDS_KEY, JSON.stringify(payload))
    if (state.value.badgeUnlocked) {
      window.localStorage.setItem(BADGE_KEY, '1')
    } else {
      window.localStorage.removeItem(BADGE_KEY)
    }
  }

  function hasUnlocked(itemId: UnlockableId): boolean {
    return state.value.unlockedItems.includes(itemId)
  }

  function canPurchase(itemId: UnlockableId): boolean {
    const item = SHOP_ITEMS.find((candidate) => candidate.id === itemId)
    if (!item) return false
    return !hasUnlocked(itemId) && state.value.tokens >= item.cost
  }

  function applyItem(item: ShopItem): boolean {
    if (item.kind === 'theme' && item.theme) {
      state.value.equippedTheme = item.theme
      return true
    }

    if (item.kind === 'effect' && item.effect) {
      state.value.equippedEffect = item.effect
      return true
    }

    return false
  }

  function purchaseItem(itemId: UnlockableId): boolean {
    const item = SHOP_ITEMS.find((candidate) => candidate.id === itemId)
    if (!item) {
      emit('Unknown shop item', 'fail')
      return false
    }

    if (hasUnlocked(itemId)) {
      emit(`${item.title} already unlocked`, 'up')
      return false
    }

    if (state.value.tokens < item.cost) {
      emit(`Need ${item.cost - state.value.tokens} more Tokens`, 'fail')
      return false
    }

    state.value.tokens -= item.cost
    state.value.unlockedItems.push(itemId)
    saveRewardsToStorage()
    emit(`Unlocked ${item.title}`, 'success')
    return true
  }

  function equipItem(itemId: UnlockableId): boolean {
    const item = SHOP_ITEMS.find((candidate) => candidate.id === itemId)
    if (!item) return false
    if (!hasUnlocked(itemId)) {
      emit(`Unlock ${item.title} first`, 'fail')
      return false
    }

    const equipped = applyItem(item)
    if (!equipped) return false
    saveRewardsToStorage()
    emit(`Equipped ${item.title}`, 'up')
    return true
  }

  function purchaseAndEquipItem(itemId: UnlockableId): boolean {
    if (hasUnlocked(itemId)) {
      return equipItem(itemId)
    }

    const purchased = purchaseItem(itemId)
    if (!purchased) return false
    return equipItem(itemId)
  }

  function equipDefaults() {
    state.value.equippedTheme = 'default'
    state.value.equippedEffect = 'default'
    saveRewardsToStorage()
    emit('Equipped default loadout', 'up')
  }

  function isItemEquipped(itemId: UnlockableId): boolean {
    const item = SHOP_ITEMS.find((candidate) => candidate.id === itemId)
    if (!item) return false
    if (item.kind === 'theme' && item.theme) {
      return state.value.equippedTheme === item.theme
    }
    if (item.kind === 'effect' && item.effect) {
      return state.value.equippedEffect === item.effect
    }
    return false
  }

  function trackPath(path: string) {
    const step = resolveStep(path)
    if (!step) return

    if (state.value.startedAt && Date.now() - state.value.startedAt > COMBO_WINDOW_MS) {
      resetCombo(true, 'Combo expired')
    }

    if (!state.value.startedAt) {
      if (step === FIRST_STEP) {
        startComboSession()
      }
      return
    }

    if (step === FIRST_STEP && state.value.activeStep !== FIRST_STEP) {
      startComboSession()
      return
    }

    if (step === state.value.activeStep) {
      return
    }

    const activeStep = state.value.activeStep
    if (!activeStep) {
      resetCombo(true, 'Combo desynced')
      return
    }

    const activeIndex = COMBO_STEPS.indexOf(activeStep)
    const activeStepCompleted = state.value.progress > activeIndex

    if (!activeStepCompleted) {
      resetCombo(true, `Too fast. Stay on ${getStepLabel(activeStep)}.`)
      return
    }

    const expectedNextStep = COMBO_STEPS[state.value.progress]
    if (!expectedNextStep) {
      resetCombo(false)
      return
    }

    if (step !== expectedNextStep) {
      resetCombo(true, `Wrong order. Next: ${getStepLabel(expectedNextStep)}.`)
      return
    }

    state.value.activeStep = step
    state.value.activeStepStartedAt = Date.now()
    emit(`Checkpoint entered: ${getStepLabel(step)}`, 'up')
  }

  function completeActiveStep() {
    const activeStep = state.value.activeStep
    if (!activeStep) return

    const activeIndex = COMBO_STEPS.indexOf(activeStep)
    if (activeIndex !== state.value.progress) return

    state.value.progress += 1

    if (state.value.progress >= COMBO_STEPS.length) {
      const completedInTime = !!state.value.startedAt && Date.now() - state.value.startedAt <= COMBO_WINDOW_MS
      if (completedInTime) {
        state.value.badgeUnlocked = true
        state.value.completions += 1
        state.value.tokens += 100
        saveRewardsToStorage()
        emit('S-Rank clear! +100 Tokens', 'success')
      } else {
        emit('Clear failed. Timer expired.', 'fail')
      }
      resetCombo(false)
      return
    }

    const nextStep = COMBO_STEPS[state.value.progress]
    if (!nextStep) {
      resetCombo(false)
      return
    }
    emit(`${getStepLabel(activeStep)} locked. Go ${getStepLabel(nextStep)}.`, 'up')
  }

  function heartbeat() {
    clock.value = Date.now()

    if (state.value.startedAt && state.value.progress < COMBO_STEPS.length) {
      if (clock.value - state.value.startedAt > COMBO_WINDOW_MS) {
        resetCombo(true, 'Combo expired')
      }
    }

    if (!state.value.activeStep || !state.value.activeStepStartedAt) return

    const requiredMs = STEP_DWELL_MS[state.value.activeStep]
    if (!requiredMs) return

    const activeIndex = COMBO_STEPS.indexOf(state.value.activeStep)
    if (activeIndex !== state.value.progress) return

    const dwellMs = clock.value - state.value.activeStepStartedAt
    if (dwellMs >= requiredMs) {
      completeActiveStep()
      if (state.value.activeStep && state.value.progress < COMBO_STEPS.length) {
        state.value.activeStepStartedAt = Date.now()
      }
    }
  }

  return {
    state,
    hasActiveCombo,
    hasComboSession,
    isBadgeUnlocked,
    tokenCount,
    completionCount,
    unlockedItems,
    equippedTheme,
    equippedEffect,
    shopItems,
    progressLabel,
    progressPercent,
    secondsLeft,
    currentStep,
    currentStepLabel,
    dwellRequiredSeconds,
    dwellElapsedSeconds,
    dwellProgressPercent,
    loadBadgeFromStorage,
    hasUnlocked,
    canPurchase,
    purchaseItem,
    equipItem,
    purchaseAndEquipItem,
    equipDefaults,
    isItemEquipped,
    heartbeat,
    trackPath
  }
}
