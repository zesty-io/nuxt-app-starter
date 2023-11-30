// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [{ src: "~/plugins/vue-app-loader.client.ts", mode: "client" }],
  devServer: {
    host: "myapp.zesty.io",
  },
});
