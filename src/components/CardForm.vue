<template>
  <form @submit.prevent="validateForm" class="card">
    <p class="text-caption mb-2">
      Etapa <span class="color-destaq">{{ step }}</span> de 4
    </p>
    <p class="title" style="width: max-content">{{ title }}</p>

    <slot name="content"></slot>

    <div class="d-flex align-center ga-2">
      <MBButton
        v-if="hasReturnButton"
        @click="$emit('handleReturnPage')"
        :class="['mt-4', hasReturnButton ? 'w-50' : 'w-100']"
        title="Voltar"
        outlined
        type="button"
      />
      <MBButton
        :class="['mt-4', hasReturnButton ? 'w-50' : 'w-100']"
        title="Confirmar"
        type="submit"
      />
    </div>
  </form>
</template>

<script setup>
import MBButton from "@/design_system/components/MBButton.vue";

import { defineProps, defineEmits, provide, ref } from "vue";

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
    default: true,
  },
});

const emits = defineEmits(["handleReturnPage", "handleValidateForm"]);

const inputs = ref([]);

const registerInput = (input) => {
  inputs.value.push(input);
};

const validateForm = () => {
  let isValid = true;

  inputs.value.forEach((input) => {
    const valid = input.validate();
    if (!valid) {
      isValid = false;
    }
  });

  if (isValid) emits("formIsValid");
};

provide("registerInput", registerInput);
</script>

<style lang="scss" scoped>
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 300px;
}
</style>
