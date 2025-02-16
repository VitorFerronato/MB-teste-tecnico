<template>
  <div class="card">
    <p class="text-caption mb-2">
      Etapa <span class="color-destaq">{{ step }}</span> de 4
    </p>
    <p class="title">{{ title }}</p>

    <slot name="content"></slot>

    <div class="d-flex align-center ga-2">
      <MBButton
        v-if="hasReturnButton"
        title="Voltar"
        outlined
        :class="['mt-4', hasReturnButton ? 'w-50' : 'w-100']"
        @click="$emit('handleReturnPage')"
      />
      <MBButton
        title="Confirmar"
        :class="['mt-4', hasReturnButton ? 'w-50' : 'w-100']"
        @click="$emit('handleValidateForm')"
      />
    </div>
  </div>
</template>

<script setup>
import MBButton from "@/design_system/components/MBButton.vue";

import { defineProps, defineEmits } from "vue";

defineProps({
  step: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  hasReturnButton: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["handleReturnPage", "handleValidateForm"]);
</script>

<style lang="scss" scoped>
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 350px;
}
</style>
