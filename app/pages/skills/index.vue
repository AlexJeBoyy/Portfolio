<script setup lang="ts">
useHead({ title: 'Skills' })

const hardSkills = [
  ['C#', 85],
  ['Unity', 80],
  ['Visual Studio', 90],
  ['Visual Studio Code', 80],
  ['Vue', 65],
  ['TypeScript', 65],
  ['Tailwind', 65],
  ['HTML', 60],
  ['Blockbench', 70],
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
  <section class="space-y-10">
    <div id="hard" class="scroll-mt-36">
      <h1 class="text-3xl font-bold">Hard <span class="text-red-500">Skills</span></h1>
      <div class="mt-6 grid gap-4">
        <div v-for="[name, value] in hardSkills" :key="name" class="space-y-1">
          <p class="text-sm font-medium text-zinc-200">{{ name }}</p>
          <div class="h-3 rounded-full bg-zinc-800">
            <div class="h-3 rounded-full bg-red-600" :style="`width: ${value}%`" />
          </div>
        </div>
      </div>
    </div>

    <div id="soft" class="scroll-mt-36">
      <h2 class="text-2xl font-bold">Soft <span class="text-red-500">Skills</span></h2>
      <ul class="mt-4 grid list-disc gap-2 pl-5 text-zinc-300 sm:grid-cols-2">
        <li v-for="skill in softSkills" :key="skill">{{ skill }}</li>
      </ul>
    </div>

    <div id="education" class="scroll-mt-36">
      <h2 class="text-2xl font-bold">Education</h2>
      <p class="mt-3 text-zinc-300">Student at <span class="text-red-400">Sint Lucas</span> (2023-Present)</p>
      <p class="text-zinc-300">Internship at <span class="text-red-400">Consulink/TimeOn</span> (Aug 2025-Jan 2026)</p>
    </div>
  </section>
</template>
