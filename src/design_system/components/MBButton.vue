<template>
  <button
    :class="['button', { 'button--outlined': outlined }]"
    @click="$emit('click')"
  >
    {{ title }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },

  outlined: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["click"]);
</script>

<style lang="scss" scoped>
.button {
  background-color: $primary-color;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
}
.button:hover {
  background-color: #e68900;
}
.button--outlined {
  background-color: transparent;
  color: $primary-color;
  border: 2px solid $primary-color;
}
.button--outlined:hover {
  background-color: $primary-color;
  color: white;
}
</style>
