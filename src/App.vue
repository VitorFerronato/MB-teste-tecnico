<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <div :key="currentStep.step">
        <div v-if="!userCreated">
          <Step1EmailView
            v-if="currentStep.step == '1'"
            :hasReturnButton="false"
            @advanceNextStep="updateNextStep"
          />
          <Step2PeopleView
            v-if="currentStep.step == '2-people'"
            @advanceNextStep="updateNextStep"
            @handleReturnPage="returnPage"
          />
          <Step2CompanyView
            v-if="currentStep.step == '2-company'"
            @advanceNextStep="updateNextStep"
            @handleReturnPage="returnPage"
          />
          <Step3PasswordView
            v-if="currentStep.step == '3'"
            @advanceNextStep="updateNextStep"
            @handleReturnPage="returnPage"
          />
          <Step4ReviewView
            v-if="currentStep.step == '4'"
            :registrationData="steps"
            @handleReturnPage="returnPage"
            @userCreated="showHome"
          />
        </div>

        <WelcomeView v-else :user="userCreated" @returnToForm="returnToForm" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import Step1EmailView from "@/views/Step1EmailView.vue";
import Step2PeopleView from "@/views/Step2PeopleView.vue";
import Step2CompanyView from "@/views/Step2CompanyView.vue";
import Step3PasswordView from "@/views/Step3PasswordView.vue";
import Step4ReviewView from "@/views/Step4ReviewView.vue";
import WelcomeView from "./views/WelcomeView.vue";

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
  },
]);
const currentStep = ref(steps.value[0]);

const userCreated = ref(null);

const updateNextStep = (data) => {
  const currentIndex = steps.value.findIndex((step) => step.step === data.from);

  if (currentIndex !== -1) steps.value[currentIndex].data = data.form;

  const nextStep = steps.value.find((step) => step.step === data.to);

  if (nextStep) currentStep.value = nextStep;
};

// Return page logic ===
const returnPage = (pageTo) => {
  if (!pageTo) return;

  if (pageTo === 2) handlePageTwo();
  else resetStepData(pageTo - 1);
};
const resetStepData = (stepIndex) => {
  steps.value[stepIndex].data = [];
  currentStep.value = steps.value[stepIndex];
};
const handlePageTwo = () => {
  const isPessoaFisica = steps.value[0].data?.selectedType === "Pessoa Física";
  const targetIndex = isPessoaFisica ? 1 : 2;
  resetStepData(targetIndex);
};

const showHome = (data) => {
  userCreated.value = data;
};

const returnToForm = () => {
  userCreated.value = null;
  currentStep.value = steps.value[0];
};
</script>

<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
