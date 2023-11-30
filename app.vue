<template>
  <div>
    <div v-if="sdk.isAuthenticated.value">
      <p>Token: {{ sdk.token }}</p>
      <button @click="sdk.logout">Logout</button>
    </div>
    <div v-else>
      <div class="ssoButtonGroup">
      <button
        class="ssoButton"
        @click="sdk.initiateSSOAuthentication('google')"
      >
        <img
          src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
          width="24"
          height="24"
          alt="Google"
        /><span>Continue with Google</span>
      </button>
      <button
        class="ssoButton"
        @click="sdk.initiateSSOAuthentication('microsoft')"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
          width="24"
          height="24"
          alt="Google"
        /><span>Continue with Microsoft</span>
      </button>
      <button
        class="ssoButton"
        @click="sdk.initiateSSOAuthentication('github')"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          width="24"
          height="24"
          alt="Github"
        /><span>Continue with Github</span>
      </button>
    </div>
  </div>
  </div>
</template>

<script setup>
import { inject } from "vue";

const sdk = inject("AppLoader");
</script>

<style scoped>

.ssoButtonGroup {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ssoButton {
  display: inline-flex;
  align-items: center;
  border: 1px solid rgb(242, 244, 247);
  border-radius: 4px;
  color: rgb(71, 84, 103);
  padding: 7px 21px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  gap: 8px;
}
.ssoButton:hover {
  background-color: rgba(16, 24, 40, 0.04);
}
</style>
