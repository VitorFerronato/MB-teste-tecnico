<template>
  <CardForm
    title="Revise suas informações"
    step="4"
    @handleValidateForm="handleValidateForm"
  >
    <template v-slot:content>
      <MBTextField title="Endereço de email" class="mt-4" />
      <MBTextField title="Nome" class="mt-4" />
      <MBTextField title="CPF" class="mt-4" />
      <MBTextField title="Data de nascimento" class="mt-4" />
      <MBTextField title="Telefone" class="mt-4" />
      <MBTextField title="Senha" class="mt-4" />
    </template>
  </CardForm>
</template>

<script setup>
import MBTextField from "@/design_system/components/MBTextField.vue";
import CardForm from "@/components/CardForm.vue";

import { defineProps } from "vue";

const props = defineProps({});
</script>

<style lang="scss" scoped></style>
