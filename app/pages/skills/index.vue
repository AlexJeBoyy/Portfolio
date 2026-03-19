<script setup lang="ts">
useHead({ title: 'Skills' })

const gameDevSkills: [string, number][] = [
  ['C#', 85],
  ['Unity', 80],
  ['Unreal Engine', 65],
  ['Game Design', 75],
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
  ['HTML', 60]
]

const otherLanguages: [string, number][] = [
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
        <p class="section-label">Technical Proficiency</p>
        <h1 class="text-5xl font-black">Technical <span class="text-gradient">Skills</span></h1>
        <div class="accent-line" />
      </div>

      <div class="grid gap-10 md:grid-cols-2">
        <div class="space-y-10">
          <SkillGroup title="Game Development" :skills="gameDevSkills" />
          <SkillGroup title="Other Languages" :skills="otherLanguages" />
        </div>
        <div class="space-y-10">
          <SkillGroup title="Development Tools" :skills="toolsSkills" />
          <SkillGroup title="Web Development" :skills="webSkills" />
        </div>
      </div>
    </div>

    <div id="soft" class="scroll-mt-36 space-y-4 border-t border-zinc-800 pt-12">
      <p class="section-label">People Skills</p>
      <h2 class="text-5xl font-black">Soft <span class="text-gradient">Skills</span></h2>
      <div class="accent-line" />
      <ul class="mt-6 grid list-disc gap-3 pl-5 text-zinc-300 sm:grid-cols-2">
        <li v-for="skill in softSkills" :key="skill" class="font-medium">{{ skill }}</li>
      </ul>
    </div>

    <div id="education" class="scroll-mt-36 space-y-4 border-t border-zinc-800 pt-12">
      <p class="section-label">Background</p>
      <h2 class="text-5xl font-black">Education &amp; <span class="text-gradient">Experience</span></h2>
      <div class="accent-line" />
      <div class="mt-6 space-y-6">
        <div class="space-y-1">
          <p class="font-semibold text-red-300">Sint Lucas</p>
          <p class="text-sm text-zinc-400">Game Development Studies (2023–Present)</p>
        </div>
        <div class="space-y-1">
          <p class="font-semibold text-red-300">Consulink / TimeOn</p>
          <p class="text-sm text-zinc-400">Internship – Software Development (Aug 2025–Jan 2026)</p>
        </div>
      </div>
    </div>
  </section>
</template>
