<script setup lang="ts">
import { projects } from '~/data/projects'

useHead({ title: 'Skills' })

const gameDevSkills: [string, number][] = [
  ['C#', 85],
  ['Unity', 80],
  ['Java', 75],
  ['Unreal Engine', 65],
  ['Blockbench', 70],
  ['Aseprite', 70]
]

const toolsSkills: [string, number][] = [
  ['Visual Studio', 90],
  ['Visual Studio Code', 80],
  ['IntelliJ', 60],
  ['GitHub', 75]
]

const webSkills: [string, number][] = [
  ['Vue', 65],
  ['TypeScript', 65],
  ['Tailwind', 65],
  ['Next.js', 70],
  ['React', 60],
  ['HTML', 60]
]

const otherLanguages: [string, number][] = []

const softSkills = [
  'Creativity',
  'Problem Solving',
  'Critical Thinking',
  'Team Collaboration',
  'Ability to work independently',
  'Curiosity',
  'Leadership',
  'Interests in games'
]

// Track which skills are actually used in projects
const usedSkills = computed(() => {
  const techSet = new Set<string>()
  projects.forEach((project) => {
    project.technologies.forEach((tech) => {
      techSet.add(tech.toLowerCase())
    })
  })
  return techSet
})

const selectedSkill = ref<string | null>(null)

const isSkillUsed = (skillName: string): boolean => {
  return usedSkills.value.has(skillName.toLowerCase())
}

const filteredProjects = computed(() => {
  if (!selectedSkill.value) return []
  return projects.filter((project) =>
    project.technologies.some((tech) => tech.toLowerCase() === selectedSkill.value?.toLowerCase())
  )
})
</script>

<template>
  <section class="space-y-12">
    <div id="hard" class="scroll-mt-36">
      <div class="mb-10 space-y-3">
        <p class="section-label">Technical Proficiency</p>
        <h1 class="text-5xl font-black">Technical <span class="text-gradient">Skills</span></h1>
        <div class="accent-line" />
        <p class="text-sm text-slate-400">Click on a skill to see related projects</p>
      </div>

      <div class="grid gap-10 md:grid-cols-2">
        <!-- Game Development Skills (Buttons) -->
        <div class="space-y-6">
          <div>
            <h3 class="mb-4 text-lg font-bold text-blue-400">Game Development</h3>
            <div class="flex flex-wrap gap-3">
              <button
                v-for="[name] in gameDevSkills"
                :key="name"
                :disabled="!isSkillUsed(name)"
                @click="selectedSkill = selectedSkill === name ? null : name"
                :class="{
                  'bg-blue-500 text-white border-blue-500 cursor-pointer': selectedSkill === name && isSkillUsed(name),
                  'border-slate-700 text-slate-300 hover:border-blue-500/50 hover:text-slate-100 cursor-pointer': selectedSkill !== name && isSkillUsed(name),
                  'border-slate-700 text-slate-400 cursor-not-allowed': !isSkillUsed(name)
                }"
                class="rounded-lg border px-4 py-2 text-sm font-medium transition"
              >
                {{ name }}
              </button>
            </div>
          </div>

          <!-- Development Tools (Images) -->
          <div>
            <h3 class="mb-4 text-lg font-bold text-blue-400">Development Tools</h3>
            <div class="flex flex-wrap gap-4">
              <div
                v-for="[name] in toolsSkills"
                :key="name"
                :title="name"
                class="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-slate-700 bg-slate-800/50 text-center text-xs font-medium text-slate-400"
              >
                <span class="px-2">{{ name }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Web Development Skills (Buttons) -->
        <div>
          <h3 class="mb-4 text-lg font-bold text-blue-400">Web Development</h3>
          <div class="flex flex-wrap gap-3">
            <button
              v-for="[name] in webSkills"
              :key="name"
              :disabled="!isSkillUsed(name)"
              @click="selectedSkill = selectedSkill === name ? null : name"
              :class="{
                'bg-blue-500 text-white border-blue-500 cursor-pointer': selectedSkill === name && isSkillUsed(name),
                'border-slate-700 text-slate-300 hover:border-blue-500/50 hover:text-slate-100 cursor-pointer': selectedSkill !== name && isSkillUsed(name),
                'border-slate-700 text-slate-400 cursor-not-allowed': !isSkillUsed(name)
              }"
              class="rounded-lg border px-4 py-2 text-sm font-medium transition"
            >
              {{ name }}
            </button>
          </div>
        </div>
      </div>

      <!-- Projects by Selected Skill -->
      <div v-if="selectedSkill && filteredProjects.length > 0" class="mt-12 border-t border-slate-700 pt-8">
        <div class="mb-6">
          <h3 class="text-2xl font-black text-slate-100">
            Projects using <span class="text-blue-400">{{ selectedSkill }}</span>
          </h3>
        </div>
        <div class="grid gap-6 sm:grid-cols-2">
          <div
            v-for="project in filteredProjects"
            :key="project.slug"
            class="rounded-lg border border-slate-700 bg-slate-800/50 p-6 transition hover:border-slate-600 hover:bg-slate-800/70"
          >
            <div class="space-y-3">
              <div class="flex items-start justify-between gap-3">
                <div>
                  <h4 class="text-lg font-bold text-slate-100">{{ project.title }}</h4>
                  <p class="text-xs font-bold uppercase tracking-wide text-blue-400">{{ project.genre }}</p>
                </div>
              </div>
              <p class="text-sm text-slate-400">{{ project.cardSummary }}</p>
              <div class="flex flex-wrap gap-2 pt-2">
                <span
                  v-for="tech in project.technologies.slice(0, 3)"
                  :key="tech"
                  :class="tech === selectedSkill ? 'bg-blue-500/30 text-blue-300 border-blue-500/70' : 'bg-slate-700/50 text-slate-300 border-slate-700'"
                  class="rounded-lg border px-2 py-1 text-xs font-medium"
                >
                  {{ tech }}
                </span>
              </div>
              <NuxtLink :to="`/projects/${project.slug}/`" class="inline-block pt-2 text-sm font-bold text-blue-400 hover:text-blue-300">
                View Project →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div v-if="selectedSkill && filteredProjects.length === 0" class="mt-12 rounded-lg border border-slate-700 bg-slate-800/50 p-6 text-center">
        <p class="text-slate-400">No projects found using <span class="font-bold text-slate-200">{{ selectedSkill }}</span> yet.</p>
      </div>
    </div>

    <div id="soft" class="scroll-mt-36 space-y-4 border-t border-slate-700 pt-12">
      <p class="section-label">People Skills</p>
      <h2 class="text-5xl font-black">Soft <span class="text-gradient">Skills</span></h2>
      <div class="accent-line" />
      <ul class="mt-6 grid list-disc gap-3 pl-5 text-slate-300 sm:grid-cols-2">
        <li v-for="skill in softSkills" :key="skill" class="font-medium">{{ skill }}</li>
      </ul>
    </div>

    <div id="education" class="scroll-mt-36 space-y-4 border-t border-slate-700 pt-12">
      <p class="section-label">Background</p>
      <h2 class="text-5xl font-black">Education &amp; <span class="text-gradient">Experience</span></h2>
      <div class="accent-line" />
      <div class="mt-6 space-y-6">
        <div class="space-y-1">
          <p class="font-semibold text-blue-400">Sint Lucas</p>
          <p class="text-sm text-slate-400">Game Development Studies (2023–Present)</p>
        </div>
        <div class="space-y-1">
          <p class="font-semibold text-blue-400">Consulink / TimeOn</p>
          <p class="text-sm text-slate-400">Internship – Software Development (Aug 2025–Jan 2026)</p>
        </div>
      </div>
    </div>
  </section>
</template>
