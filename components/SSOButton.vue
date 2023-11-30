<template>
  <button class="ssoButton" @click="initiateSSO">
    <img :src="iconUrl" width="24" height="24" :alt="providerName" />
    <span>Continue with {{ providerName }}</span>
  </button>
</template>

<script>
export default {
  props: {
    provider: {
      type: String,
      required: true
    },
  },
  computed: {
    providerName() {
      return this.provider.charAt(0).toUpperCase() + this.provider.slice(1);
    },
    iconUrl() {
      switch (this.provider) {
        case 'google':
          return 'https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA'; // Google Icon URL
        case 'microsoft':
          return 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'; // Microsoft Icon URL
        case 'github':
          return 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'; // GitHub Icon URL
        default:
          return '';
      }
    }
  },
  methods: {
    initiateSSO() {
      this.$emit('initiateSSO', this.provider);
    }
  }
}
</script>

<style scoped>
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

