<template>
  <CardForm
    title="Pessoa Física"
    step="2"
    @formIsValid="teste"
    @handleReturnPage="handleReturnPage"
  >
    <template v-slot:content>
      <MBTextField
        v-model="form.name"
        :rules="['rulesRequired']"
        title="Nome"
        class="mt-4"
      />
      <MBTextField
        v-model="form.CPF"
        :rules="['rulesRequired', 'rulesCPF']"
        v-mask="'###.###.###-##'"
        title="CPF"
        class="mt-4"
      />
      <MBTextField
        v-model="form.birthDate"
        :rules="['rulesRequired', 'rulesBirthDate']"
        v-mask="'##/##/####'"
        title="Data de nascimento"
        class="mt-4"
      />
      <MBTextField
        v-model="form.phone"
        :rules="['rulesRequired', 'rulesPhoneNumber']"
        v-mask="'(##) #####-####'"
        title="Telefone"
        class="mt-4"
      />
    </template>
  </CardForm>
</template>

<script setup>
import MBTextField from "@/design_system/components/MBTextField.vue";
import CardForm from "@/components/CardForm.vue";

import { ref, defineEmits } from "vue";
const emits = defineEmits(["returnPage"]);

const form = ref({
  name: "",
  CPF: "",
  birthDate: "",
  phone: "",
});

const teste = () => {
  console.log("validar form", form.value);
};
</script>
