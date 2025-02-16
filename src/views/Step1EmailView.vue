<template>
  <CardForm
    title="Seja bem vindo(a)"
    step="1"
    @handleValidateForm="handleValidateForm"
  >
    <template v-slot:content>
      <MBTextField v-model="email" title="Endereço de email" class="mt-4" />

      <div class="d-flex ga-2">
        <MBInputRadius title="Pessoa física" class="mt-2" />
        <MBInputRadius title="Pessoa Jurídica" class="mt-2" />
      </div>
    </template>
  </CardForm>
</template>

<script setup>
import MBTextField from "@/design_system/components/MBTextField.vue";
import MBInputRadius from "@/design_system/components/MBInputRadius.vue";
import CardForm from "@/components/CardForm.vue";

import { ref } from "vue";

const email = ref();

const handleValidateForm = () => {
  console.log(email.value);
};
</script>
