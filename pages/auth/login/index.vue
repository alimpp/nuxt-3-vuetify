<template>
  <div
    class="login-page-content rounded py-10 px-10 d-flex flex-column align-center"
  >
    <div class="d-flex align-center mb-5">
      <BootstrapIconPersonFill />
      <span class="app-font-size-18 px-1 pt-1">Sign in With Nuxt 3</span>
    </div>
    <CoreInput
      class="w-100"
      label="Phone Number"
      type="text"
      v-model="form.phoneNumber"
    />
    <CoreInput
      class="w-100"
      label="Password"
      type="password"
      v-model="form.password"
    />
    <CoreButton class="w-100" name="Login" color="primary" />
    <ShareSocial />
    <Version />
  </div>
</template>

<script setup>
import { useTheme } from "@/stores/theme/index.ts";

definePageMeta({
  layout: "auth",
});

const form = ref({
  phoneNumber: "",
  password: "",
});
const Theme = useTheme();

const themeState = computed(() => {
  return Theme.theme;
});
</script>

<style scoped lang="scss">
.login-page-content {
  width: 400px;
}
</style>
