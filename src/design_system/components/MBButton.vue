<template>
  <button
    :class="[
      'button',
      { 'button--outlined': outlined, 'button--loading': loading },
    ]"
    @click="$emit('click')"
    :disabled="loading"
  >
    <span v-if="!loading">{{ title }}</span>
    <span v-else class="spinner"></span>
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
  loading: {
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
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  position: relative;
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
.button--loading {
  cursor: not-allowed;
  opacity: 0.7;
}

/* Spinner */
.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid white;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
