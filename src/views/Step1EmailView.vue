<template>
  <CardForm title="Seja bem vindo(a)" step="1" @formIsValid="advanceNextStep">
    <template v-slot:content>
      <MBTextField
        v-model="form.email"
        :rules="['rulesEmail', 'rulesRequired']"
        title="Endereço de email"
        class="mt-4"
      />
      <div class="d-flex w-100 justify-between ga-2">
        <MBInputRadius
          v-model="form.selectedType"
          name="tipoPessoa"
          title="Pessoa Física"
          class="mt-2"
        />
        <MBInputRadius
          v-model="form.selectedType"
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

const emits = defineEmits(["advanceNextStep", "handleReturnPage"]);

const form = ref({
  email: "",
  selectedType: "Pessoa Física",
});

const advanceNextStep = () => {
  const toStep =
    form.value.selectedType == "Pessoa Física" ? "2-people" : "2-company";

  emits("advanceNextStep", { form: form.value, from: "1", to: toStep });
};
</script>
