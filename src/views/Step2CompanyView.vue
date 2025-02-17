<template>
  <CardForm
    title="Pessoa Jurídica"
    step="2"
    @formIsValid="advanceNextStep"
    @handleReturnPage="emits('handleReturnPage', 1)"
  >
    <template v-slot:content>
      <MBTextField
        v-model="form.name"
        :rules="['rulesRequired']"
        title="Razão social"
        class="mt-4"
      />
      <MBTextField
        v-model="form.registration"
        :rules="['rulesRequired', 'rulesCNPJ']"
        v-mask="'##.###.###/####-##'"
        title="CNPJ"
        class="mt-4"
      />
      <MBTextField
        v-model="form.creationDate"
        :rules="['rulesRequired', 'rulesOpeningDate']"
        v-mask="'##/##/####'"
        title="Data de abertura"
        class="mt-4"
      />
      <MBTextField
        v-model="form.phoneNumber"
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
const emits = defineEmits(["advanceNextStep", "handleReturnPage"]);

const form = ref({
  name: "",
  registration: "",
  creationDate: "",
  phoneNumber: "",
});

const advanceNextStep = () => {
  emits("advanceNextStep", { form: form.value, from: "2-company", to: "3" });
};
</script>
