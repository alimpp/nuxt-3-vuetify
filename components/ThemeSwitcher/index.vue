<template>
  <div class="d-flex">
    <v-icon
      class="app_pointer __application_animation"
      @click="HandleChangeTheme"
      v-if="themeState === 'light'"
      >mdi-weather-night</v-icon
    >
    <v-icon
      class="app_pointer __application_animation"
      @click="HandleChangeTheme"
      v-if="themeState === 'dark'"
      >mdi-white-balance-sunny</v-icon
    >
  </div>
</template>

<script setup>
import { useTheme } from "@/stores/theme/index.ts";

const Theme = useTheme();

const themeState = computed(() => {
  return Theme.theme;
});

const HandleChangeTheme = () => {
  Theme.changeThemeStatus();
};
</script>
