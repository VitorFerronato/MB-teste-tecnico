<template>
  <div class="d-flex flex-column ga-1">
    <label class="text-label">{{ title }}</label>
    <input
      type="text"
      class="input-field pa-2"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  modelValue: String,
});

defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.input-field {
  background-color: transparent;
  border-radius: 4px;
}
</style>
