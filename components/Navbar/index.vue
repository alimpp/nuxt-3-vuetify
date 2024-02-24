<template>
  <div class="w-100 d-flex px-5 py-5 navbar">
    <span class="app-font-size-16 text-primary">
       NUXT 3
    </span>
  </div>
</template>

<script setup>
import { useTheme } from "@/stores/theme/index.ts";

const Theme = useTheme();

const themeState = computed(() => {
  return Theme.theme;
});
</script>

<style lang="scss">
.navbar {
  box-shadow: 1px 0 4px 0 #47464678;
}
</style>
