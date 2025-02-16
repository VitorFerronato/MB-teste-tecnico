<template>
  <CardForm
    title="Senha de acesso"
    step="3"
    @handleValidateForm="handleValidateForm"
  >
    <template v-slot:content>
      <MBTextField v-model="password" title="Sua senha" class="mt-4" />
    </template>
  </CardForm>
</template>

<script setup>
import MBTextField from "@/design_system/components/MBTextField.vue";
import CardForm from "@/components/CardForm.vue";

import { ref } from "vue";

const password = ref();

const handleValidateForm = () => {
  console.log("validar form");
};
</script>

<style lang="scss" scoped></style>
