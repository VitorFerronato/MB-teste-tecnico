<template>
  <CardForm title="Senha de acesso" step="3" @formIsValid="teste">
    <template v-slot:content>
      <MBTextField
        v-model="password"
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

import { ref } from "vue";

const password = ref();

const teste = () => {
  console.log("validar form", password.value);
};
</script>
