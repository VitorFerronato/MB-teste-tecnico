<template>
  <CardForm
    title="Pessoa Jurídica"
    step="2"
    @handleValidateForm="handleValidateForm"
  >
    <template v-slot:content>
      <MBTextField v-model="businessName" title="Razão social" class="mt-4" />
      <MBTextField v-model="CNPJ" title="CNPJ" class="mt-4" />
      <MBTextField
        v-model="openingDate"
        title="Data de abertura"
        class="mt-4"
      />
      <MBTextField v-model="phoneNumber" title="Telefone" class="mt-4" />
    </template>
  </CardForm>
</template>

<script setup>
import MBTextField from "@/design_system/components/MBTextField.vue";
import CardForm from "@/components/CardForm.vue";

import { ref } from "vue";

const businessName = ref();
const CNPJ = ref();
const openingDate = ref();
const phoneNumber = ref();

const handleValidateForm = () => {
  console.log("validar form");
};
</script>
