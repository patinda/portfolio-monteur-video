// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Pascal - Monteur vidéo professionnel',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Monteur vidéo professionnel. Je transforme vos rushs en vidéos qui captent, qui racontent, qui convertissent. Montage, colorimétrie et motion design.' 
        },
        { 
          name: 'keywords', 
          content: 'monteur vidéo, montage vidéo, colorimétrie, motion design, vidéo professionnelle, montage YouTube, montage corporate' 
        },
        { name: 'author', content: 'Pascal' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Pascal - Monteur vidéo professionnel' },
        { 
          property: 'og:description', 
          content: 'Monteur vidéo professionnel. Je transforme vos rushs en vidéos qui captent, qui racontent, qui convertissent.' 
        },
        { property: 'og:url', content: 'https://votre-site.com' },
        { property: 'og:image', content: 'https://votre-site.com/images/profile.png' },
        { property: 'og:locale', content: 'fr_FR' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Pascal - Monteur vidéo professionnel' },
        { 
          name: 'twitter:description', 
          content: 'Monteur vidéo professionnel. Je transforme vos rushs en vidéos qui captent, qui racontent, qui convertissent.' 
        },
        { name: 'twitter:image', content: 'https://votre-site.com/images/profile.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/fiveico.png' },
        { rel: 'apple-touch-icon', href: '/images/fiveico.png' },
        { rel: 'shortcut icon', type: 'image/png', href: '/images/fiveico.png' }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/image'],
  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700], 
    },
    display: 'swap', 
  },
})