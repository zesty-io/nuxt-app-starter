## Overview
Nuxt App Starter is a pre-configured Nuxt.js application that integrates with the Zesty.io Vue SDK Plugin. It serves as a foundation for building applications with features like SSO authentication and SDK state management.

## Features
- __Integrated Zesty.io Vue SDK Plugin__: Pre-configured to work with the Zesty.io Vue SDK.
- __SSO Authentication__: Supports Google, Microsoft, and GitHub for Single Sign-On.
- __Reactive Authentication State__: Easily manage and display authentication states.


## Configuration
The Nuxt App Starter is pre-configured with a default authentication service URL and cookie name. Modify these values in the plugin file to suit your setup.

## Plugin Configuration (plugin file)
```javascript
nuxtApp.vueApp.use(createAppLoader, {
  authServiceUrl: "https://auth.api.dev.zesty.io", // Change this URL
  authCookie: "DEV_APP_SID", // Change cookie name if needed
});
```

## Customizing SSO Providers
You can customize the list of SSO providers in App.vue:

```js
const providers = ref(['google', 'microsoft', 'github']); // Modify as needed
```

