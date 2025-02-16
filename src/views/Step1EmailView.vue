<template>
  <CardForm
    title="Seja bem vindo(a)"
    step="1"
    @handleValidateForm="handleValidateForm"
  >
    <template v-slot:content>
      <MBTextField
        v-model="email"
        :rules="['rulesEmail']"
        title="Endereço de email"
        class="mt-4"
      />
      <div class="d-flex ga-2">
        <MBInputRadius
          v-model="selectedType"
          name="tipoPessoa"
          title="Pessoa Física"
          class="mt-2"
        />
        <MBInputRadius
          v-model="selectedType"
          name="tipoPessoa"
          title="Pessoa Jurídica"
          class="mt-2"
        />
      </div>
    </template>
  </CardForm>
</template>

<script setup>
import MBTextField from "@/design_system/components/MBTextField.vue";
import MBInputRadius from "@/design_system/components/MBInputRadius.vue";
import CardForm from "@/components/CardForm.vue";

import { ref, defineEmits } from "vue";

const emits = defineEmits(["advanceNextStep"]);

const email = ref();
const selectedType = ref("Pessoa Física");

const handleValidateForm = () => {
  emits("advanceNextStep", {
    email: email.value,
    selectedType: selectedType.value,
    currentStep: "1",
  });
};
</script>
