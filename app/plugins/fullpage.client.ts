import fullpage from 'fullpage.js'
import 'fullpage.js/dist/fullpage.min.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('fullpage', fullpage)
})