export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    '@/assets/scss/main.scss' ,
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css'
  ],
  modules: [
    '@pinia/nuxt',
    'nuxt-bootstrap-icons'
  ],
  bootstrapIcons: {
     renderType: 'component'
  },
  build: {
    transpile: ['vuetify', 'vue-toastification'],
  },
})
