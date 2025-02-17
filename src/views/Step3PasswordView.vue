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
        :type="showPassword ? 'text' : 'password'"
        title="Sua senha"
        class="mt-4"
      >
        <template v-slot:icon>
          <img
            v-show="showPassword"
            src="../assets/tabler--eye.svg"
            @click="showPassword = !showPassword"
            class="ml-2 cursor-pointer icon-button"
          />
          <img
            v-show="!showPassword"
            src="../assets/tabler--eye-off.svg"
            @click="showPassword = !showPassword"
            class="ml-2 cursor-pointer icon-button"
          />
        </template>
      </MBTextField>
    </template>
  </CardForm>
</template>

<script setup>
import MBTextField from "@/design_system/components/MBTextField.vue";
import CardForm from "@/components/CardForm.vue";

import { ref, defineEmits } from "vue";

const emits = defineEmits(["advanceNextStep", "handleReturnPage"]);

const showPassword = ref(false);

const form = ref({
  password: "",
});

const advanceNextStep = () => {
  emits("advanceNextStep", { form: form.value, from: "3", to: "4" });
};
</script>
