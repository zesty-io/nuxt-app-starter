<template>
  <div>
    <div v-if="sdk.isAuthenticated.value">
      <p>Token: {{ sdk.token }}</p>
      <button @click="sdk.logout">Logout</button>
    </div>
    <div v-else>
      <div class="ssoButtonGroup">
        <SSOButton
        v-for="provider in providers"
        :key="provider"
        :provider="provider"
        @initiateSSO="sdk.initiateSSOAuthentication"
      />
    </div>
  </div>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import SSOButton from '~/components/SSOButton.vue';

const sdk = inject("AppLoader");
const providers = ref(['google', 'microsoft', 'github']);
</script>

<style scoped>
.ssoButtonGroup {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
