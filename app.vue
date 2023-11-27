<template>
  <div>
    <div v-if="sdk.isAuthenticated.value">
      <p>Token: {{ sdk.token }}</p>
      <button @click="sdk.logout">Logout</button>
    </div>
    <div v-else>
      <p>User is not authenticated</p>
      <button @click="sdk.initiateSSOAuthentication('google')">
        Log in with google
      </button>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";

const sdk = inject("AppLoader");
</script>
