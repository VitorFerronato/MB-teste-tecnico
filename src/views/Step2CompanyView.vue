<template>
  <CardForm
    title="Pessoa Jurídica"
    step="2"
    @formIsValid="teste"
    @handleReturnPage="handleReturnPage"
  >
    <template v-slot:content>
      <form>
        <MBTextField
          v-model="form.businessName"
          :rules="['rulesRequired']"
          title="Razão social"
          class="mt-4"
        />
        <MBTextField
          v-model="form.CNPJ"
          :rules="['rulesRequired', 'rulesCNPJ']"
          v-mask="'##.###.###/####-##'"
          title="CNPJ"
          class="mt-4"
        />
        <MBTextField
          v-model="form.openingDate"
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
      </form>
    </template>
  </CardForm>
</template>

<script setup>
import MBTextField from "@/design_system/components/MBTextField.vue";
import CardForm from "@/components/CardForm.vue";

import { ref, defineEmits } from "vue";
const emits = defineEmits(["returnPage"]);

const form = ref({
  businessName: "",
  CNPJ: "",
  openingDate: "",
  phoneNumber: "",
});

const teste = () => {
  console.log("validar form", form.value);
};
</script>
