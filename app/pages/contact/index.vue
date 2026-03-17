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
  <section class="space-y-10">
    <PageHeader label="Get In Touch" title="Contact" highlight="Me" />

    <div class="space-y-8">
      <p class="max-w-xl text-lg leading-relaxed text-zinc-300">
        Reach out via email or connect with me on social media.
      </p>

      <div class="space-y-2">
        <p class="section-label">Email</p>
        <a href="mailto:alexstrikwerda@hotmail.com" class="text-xl font-bold text-red-400 transition underline decoration-red-600/70 hover:text-red-300">
          alexstrikwerda@hotmail.com
        </a>
      </div>

      <div class="space-y-4">
        <p class="section-label">Follow Me</p>
        <div class="flex gap-4" aria-label="Social links">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noreferrer"
            :aria-label="social.label"
            class="social-icon-btn"
          >
            <SocialIcon :name="social.icon" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
