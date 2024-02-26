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
      v-model="form.mobile"
    />
    <CoreInput
      class="w-100"
      label="Password"
      type="password"
      v-model="form.password"
    />
    <CoreButton class="w-100" name="Login" color="primary" @click="login" />
    <ShareSocial />
    <Version />
    <ThemeSwitcher class="mt-2" />
  </div>
</template>

<script setup>
import { useAuth } from "@/stores/auth/index.ts";

definePageMeta({
  layout: "auth",
});

const Auth = useAuth();
const form = ref({
  mobile: "",
  password: "",
});

const login = async () => {
  const response = await $fetch("/api/auth/login", {
    method: "POST",
    body: form.value,
    server: true,
  });
  console.log(response);
  // await Auth.handleLogin(form.value);
};
</script>

<style scoped lang="scss">
.login-page-content {
  width: 400px;
}
</style>
