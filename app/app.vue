<template>
  <section
    class="relative overflow-hidden h-screen max-h-dvh flex justify-center items-center bg-background text-foreground"
  >
    <div class="absolute inset-0 opacity-50 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:6rem_4rem]" />

    <div class="relative flex flex-col items-center text-center gap-6 sm:gap-8">
      <h2 class="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl md:text-8xl">
        Nuxt4 Minimal Starter
      </h2>

      <p class="max-w-lg font-medium text-muted-foreground text-md sm:text-xl">
        This is a starter template for Nuxt 4 with Tailwind CSS, ShadcnUI, TypeScript, and other useful packages.
      </p>

      <Button>
        <GithubIcon
          class="size-4"
          aria-hidden="true"
        />
        Get Started
      </Button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { GithubIcon } from 'lucide-vue-next'
</script>
