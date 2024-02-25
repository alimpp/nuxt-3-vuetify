<template>
  <div class="d-flex flex-column">
    <v-text-field
      clearable
      :model-value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :label="label"
      :type="type"
      variant="outlined"
    ></v-text-field>
    <span class="app-font-size-12 text-danger" v-if="error">{{
      messageError
    }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
    required: false,
  },
  type: {
    type: String,
    default: "text",
    required: false,
  },
  error: {
    type: Boolean,
    default: false,
    required: false,
  },
  messageError: {
    type: String,
    default: "",
    required: false,
  },
  modelValue: {
    type: String,
    default: "",
    required: false,
  },
});
</script>
