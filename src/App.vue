<template>
  <div id="app">
    <Step1EmailView
      v-if="currentStep.step == '1'"
      :hasReturnButton="false"
      @advanceNextStep="updateNextStep"
    />

    <Step2PeopleView
      v-if="currentStep.step == '2-people'"
      @returnPage="returnPage"
    />

    <Step2CompanyView v-if="currentStep.step == '2-company'" />

    <Step3PasswordView v-if="currentStep.step == '3'" />

    <Step4ReviewView v-if="currentStep.step == '4'" />
  </div>
</template>

<script setup>
import Step1EmailView from "@/views/Step1EmailView.vue";
import Step2PeopleView from "@/views/Step2PeopleView.vue";
import Step2CompanyView from "@/views/Step2CompanyView.vue";
import Step3PasswordView from "@/views/Step3PasswordView.vue";
import Step4ReviewView from "@/views/Step4ReviewView.vue";

import { ref } from "vue";

const steps = ref([
  {
    step: "1",
    data: [],
  },
  {
    step: "2-people",
    data: [],
  },
  {
    step: "2-company",
    data: [],
  },
  {
    step: "3",
    data: [],
  },
  {
    step: "4",
    data: [],
  },
]);

const currentStep = ref(steps.value[3]);

const updateNextStep = (data) => {
  const foundedStep = steps.value.find((el) => el.step == data.currentStep);
  foundedStep.data = data;

  if (data.currentStep == "1") currentStep.value = steps.value[1];
};

const returnPage = (to) => {
  console.log("aqui", to);
  currentStep.value = currentStep.value[to];
};
</script>

<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
