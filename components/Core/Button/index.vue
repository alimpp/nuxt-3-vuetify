<template>
  <v-btn :color="color"> {{ name }} </v-btn>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
});
</script>
