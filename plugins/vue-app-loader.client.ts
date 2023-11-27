import { createAppLoader } from "@zesty-io/vue-app-loader";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createAppLoader, {
    authServiceUrl: "https://auth.api.dev.zesty.io",
    authCookie: "DEV_APP_SID",
  });
});
