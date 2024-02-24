<template>
  <v-text-field
    clearable
    :model-value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :label="label"
    :type="type"
    variant="outlined"
  ></v-text-field>
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
