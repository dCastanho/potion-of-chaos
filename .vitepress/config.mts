import { defineConfig } from 'vitepress'
import svgLoader from 'vite-svg-loader'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Potion of Chaos",
  // base: "/potion-of-chaos/",
  description: "Campaign Site",
  vite: {
    plugins: [svgLoader()]
  }

})
