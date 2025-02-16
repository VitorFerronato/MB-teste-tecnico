<template>
  <CardForm
    title="Pessoa Física"
    step="2"
    @handleValidateForm="handleValidateForm"
  >
    <template v-slot:content>
      <MBTextField v-model="name" title="Nome" class="mt-4" />
      <MBTextField v-model="CPF" title="CPF" class="mt-4" />
      <MBTextField
        v-model="birthDate"
        title="Data de nascimento"
        class="mt-4"
      />
      <MBTextField v-model="phone" title="Telefone" class="mt-4" />
    </template>
  </CardForm>
</template>

<script setup>
import MBTextField from "@/design_system/components/MBTextField.vue";
import CardForm from "@/components/CardForm.vue";

import { ref } from "vue";

const name = ref();
const CPF = ref();
const birthDate = ref();
const phone = ref();

const handleValidateForm = () => {
  console.log("validar form");
};
</script>
