<template>
  <CardForm
    title="Revise suas informações"
    step="4"
    @formIsValid="createUser"
    @handleReturnPage="emits('handleReturnPage', 4)"
  >
    <template v-slot:content>
      <form>
        <MBTextField
          v-model="form.email"
          :rules="['rulesRequired']"
          title="Endereço de email"
          class="mt-4"
        />
        <MBTextField
          v-model="form.name"
          :title="openingType == 'CPF' ? 'Nome' : 'Razão Social'"
          :rules="['rulesRequired']"
          class="mt-4"
        />
        <MBTextField
          v-model="form.registration"
          :title="openingType"
          :rules="[
            'rulesRequired',
            openingType == 'CPF' ? 'rulesCPF' : 'rulesCNPJ',
          ]"
          v-mask="
            openingType == 'CPF' ? '###.###.###-##' : '##.###.###/####-##'
          "
          class="mt-4"
        />
        <MBTextField
          v-model="form.creationDate"
          :title="
            openingType == 'CPF' ? 'Data de nascimento' : 'Data de abertura'
          "
          :rules="['rulesRequired', 'rulesOpeningDate']"
          v-mask="'##/##/####'"
          class="mt-4"
        />
        <MBTextField
          v-model="form.phoneNumber"
          :rules="['rulesRequired', 'rulesPhoneNumber']"
          v-mask="'(##) #####-####'"
          title="Telefone"
          class="mt-4"
        />
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
              class="ml-2 cursor-pointer"
            />
            <img
              v-show="!showPassword"
              src="../assets/tabler--eye-off.svg"
              @click="showPassword = !showPassword"
              class="ml-2 cursor-pointer"
            />
          </template>
        </MBTextField>
      </form>
    </template>
  </CardForm>
</template>

<script setup>
import MBTextField from "@/design_system/components/MBTextField.vue";
import CardForm from "@/components/CardForm.vue";

import { defineProps, defineEmits, computed, onMounted, ref } from "vue";

const props = defineProps({
  registrationData: {
    type: Object,
  },
});

const showPassword = ref(false);

const form = ref({
  email: "",
  name: "",
  registration: "",
});

const emits = defineEmits(["handleReturnPage"]);

const openingType = computed(() => {
  const step1 = props.registrationData.find((el) => el.step == "1");

  return step1.data?.selectedType == "Pessoa Física" ? "CPF" : "CNPJ";
});

const fillInputs = () => {
  form.value = {
    email: props.registrationData[0].data.email,
    name: props.registrationData[openingType.value == "CPF" ? 1 : 2].data.name,
    registration:
      props.registrationData[openingType.value == "CPF" ? 1 : 2].data
        .registration,
    creationDate:
      props.registrationData[openingType.value == "CPF" ? 1 : 2].data
        .creationDate,
    phoneNumber:
      props.registrationData[openingType.value == "CPF" ? 1 : 2].data
        .phoneNumber,
    password: props.registrationData[3].data.password,
  };
};

const createUser = async () => {
  console.log(form.value);
};

onMounted(() => {
  fillInputs();
});
</script>
