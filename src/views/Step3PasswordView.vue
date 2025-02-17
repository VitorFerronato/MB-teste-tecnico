<template>
  <CardForm
    title="Senha de acesso"
    step="3"
    @formIsValid="advanceNextStep"
    @handleReturnPage="emits('handleReturnPage', 2)"
  >
    <template v-slot:content>
      <MBTextField
        v-model="form.password"
        :rules="['rulesRequired', 'rulesPassword']"
        title="Sua senha"
        type="password"
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
  password: "",
});

const advanceNextStep = () => {
  emits("advanceNextStep", { form: form.value, from: "3", to: "4" });
};
</script>
