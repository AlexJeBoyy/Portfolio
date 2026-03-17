<script setup lang="ts">
useHead({ title: 'Contact' })

const socials = [
  { label: 'GitHub', icon: 'github' as const, href: 'https://github.com/AlexJeBoyy' },
  { label: 'X', icon: 'x' as const, href: 'https://x.com/alexstrikwerda?s=21&t=eim6HFdSm0mVsEXngFUnIw' },
  {
    label: 'Instagram',
    icon: 'instagram' as const,
    href: 'https://www.instagram.com/alex.strikwerda/profilecard/?igsh=NDRpODN0Z2QzaTdy'
  }
]
</script>

<template>
  <section class="space-y-8">
    <div>
      <h1 class="text-3xl font-bold">Contact <span class="text-red-500">me</span></h1>
    </div>

    <div class="space-y-4">
      <p class="text-zinc-400">Get in touch with me via email or social media.</p>
      <p class="text-lg">
        <a href="mailto:alexstrikwerda@hotmail.com" class="text-red-400 underline decoration-red-600/70 hover:text-red-300">
          alexstrikwerda@hotmail.com
        </a>
      </p>
    </div>

    <div class="space-y-3">
      <p class="text-sm font-medium text-zinc-400">Follow me</p>
      <div class="flex gap-4" aria-label="Social links">
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          target="_blank"
          rel="noreferrer"
          :aria-label="social.label"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-red-600/70 text-red-400 transition hover:-translate-y-0.5 hover:bg-red-600/20 hover:text-red-300"
        >
          <SocialIcon :name="social.icon" />
        </a>
      </div>
    </div>
  </section>
</template>
