import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@nuxt/fonts',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  colorMode: {
    classSuffix: '',
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-04-22',
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: [
        '@lucide/vue',
        '@vueuse/core',
        'class-variance-authority',
        'reka-ui',
        'clsx',
        'tailwind-merge',
      ],
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    defaults: {
      subsets: ['latin'],
      styles: ['normal'],
    },
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700], display: 'swap' },
    ],
  },
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },
})
