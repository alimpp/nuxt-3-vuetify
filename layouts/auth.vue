<template>
  <div
    class="w-100 h-screen d-flex justify-center align-center"
    :class="{
      'fade-dark': themeState == 'dark',
      'fade-blue': themeState == 'light',
    }"
  >
    <slot />
  </div>
</template>

<script setup>
import { useTheme } from "@/stores/theme/index.ts";

const Theme = useTheme();

const themeState = computed(() => {
  return Theme.theme;
});
</script>
