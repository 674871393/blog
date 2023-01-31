// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@nuxt/content'],
  css: ['@unocss/reset/tailwind.css', '~/styles/main.scss'],
  content: {
    highlight: {
      theme: 'monokai',
      preload: [
        'javascript',
        'typescript',
        'ts',
        'js',
        'json',
        'html',
        'vue',
        'bash',
        'sql',
        'css',
        'scss',
        'yaml',
        'ini',
        'nginx',
        'py',
        'python',
      ],
    },
  },
})
