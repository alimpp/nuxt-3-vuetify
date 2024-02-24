<template>
  <div class="d-flex flex-column">
    <Navbar />
    <v-container>
      <slot />
    </v-container>
  </div>
</template>

<script setup>
import { useTheme } from "@/stores/theme/index.ts";

const Theme = useTheme();

const themeState = computed(() => {
  return Theme.theme;
});
</script>
