<template>
  <div>
    <label class="d-flex align-center cursor-pointer ga-2">
      <input type="radio" />
      <span class="text-small">{{ title }}</span>
    </label>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
input {
  width: 16px;
  height: 16px;
}
</style>
