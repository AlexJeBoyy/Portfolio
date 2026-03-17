<script setup lang="ts">
useHead({ title: 'Skills' })

const gameDevSkills = [
  ['C#', 85],
  ['Unity', 80],
  ['Unreal Engine', 65],
  ['Game Design', 75],
  ['Blockbench', 70],
  ['Aseprite', 70]
]

const toolsSkills = [
  ['Visual Studio', 90],
  ['Visual Studio Code', 80],
  ['IntelliJ', 60],
  ['GitHub', 75]
]

const webSkills = [
  ['Vue', 65],
  ['TypeScript', 65],
  ['Tailwind', 65],
  ['HTML', 60]
]

const otherLanguages = [
  ['Java', 40]
]

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
</script>

<template>
  <section class="space-y-12">
    <div id="hard" class="scroll-mt-36">
      <div class="mb-10 space-y-3">
        <p class="text-xs font-black uppercase tracking-widest text-red-500">Technical Proficiency</p>
        <h1 class="text-5xl font-black">Technical <span class="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">Skills</span></h1>
        <div class="h-1 w-16 bg-gradient-to-r from-red-600 to-red-500" />
      </div>
      
      <div class="space-y-10">
        <div>
          <h3 class="mb-4 text-lg font-bold text-red-400">Game Development</h3>
          <div class="grid gap-4">
            <div v-for="[name, value] in gameDevSkills" :key="name" class="space-y-1.5">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-zinc-200">{{ name }}</p>
                <span class="text-xs text-zinc-500">{{ value }}%</span>
              </div>
              <div class="h-2.5 rounded-full bg-zinc-800/60">
                <div class="h-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-500" :style="`width: ${value}%`" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-bold text-red-400">Development Tools</h3>
          <div class="grid gap-4">
            <div v-for="[name, value] in toolsSkills" :key="name" class="space-y-1.5">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-zinc-200">{{ name }}</p>
                <span class="text-xs text-zinc-500">{{ value }}%</span>
              </div>
              <div class="h-2.5 rounded-full bg-zinc-800/60">
                <div class="h-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-500" :style="`width: ${value}%`" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-bold text-red-400">Web Development</h3>
          <div class="grid gap-4">
            <div v-for="[name, value] in webSkills" :key="name" class="space-y-1.5">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-zinc-200">{{ name }}</p>
                <span class="text-xs text-zinc-500">{{ value }}%</span>
              </div>
              <div class="h-2.5 rounded-full bg-zinc-800/60">
                <div class="h-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-500" :style="`width: ${value}%`" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="mb-4 text-lg font-bold text-red-400">Other Languages</h3>
          <div class="grid gap-4">
            <div v-for="[name, value] in otherLanguages" :key="name" class="space-y-1.5">
              <div class="flex items-center justify-between">
                <p class="text-sm font-medium text-zinc-200">{{ name }}</p>
                <span class="text-xs text-zinc-500">{{ value }}%</span>
              </div>
              <div class="h-2.5 rounded-full bg-zinc-800/60">
                <div class="h-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-500" :style="`width: ${value}%`" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="soft" class="scroll-mt-36 space-y-4">
      <h2 class="text-2xl font-bold">Soft <span class="text-red-500">Skills</span></h2>
      <ul class="mt-6 grid list-disc gap-3 pl-5 text-zinc-300 sm:grid-cols-2">
        <li v-for="skill in softSkills" :key="skill" class="font-medium">{{ skill }}</li>
      </ul>
    </div>

    <div id="education" class="scroll-mt-36 space-y-4 border-t border-zinc-800 pt-12">
      <h2 class="text-2xl font-bold">Education &amp; <span class="text-red-500">Experience</span></h2>
      <div class="space-y-4">
        <div class="space-y-1">
          <p class="font-semibold text-red-400">Sint Lucas</p>
          <p class="text-sm text-zinc-400">Game Development Studies (2023-Present)</p>
        </div>
        <div class="space-y-1">
          <p class="font-semibold text-red-400">Consulink/TimeOn</p>
          <p class="text-sm text-zinc-400">Internship - Software Development (Aug 2025-Jan 2026)</p>
        </div>
      </div>
    </div>
  </section>
</template>
