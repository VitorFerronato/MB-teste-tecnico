<template>
  <div id="app">
    <Step1EmailView />

    <Step2PeopleView v-if="false" hasReturnButton />

    <Step2CompanyView v-if="false" hasReturnButton />

    <Step3PasswordView v-if="false" hasReturnButton />

    <Step4ReviewView v-if="false" hasReturnButton />
  </div>
</template>

<script setup>
import MBTextField from "@/design_system/components/MBTextField.vue";
import MBInputRadius from "@/design_system/components/MBInputRadius.vue";
import MBButton from "@/design_system/components/MBButton.vue";
import Step1EmailView from "@/views/Step1EmailView.vue";
import Step2PeopleView from "@/views/Step2PeopleView.vue";
import Step2CompanyView from "@/views/Step2CompanyView.vue";
import Step3PasswordView from "@/views/Step3PasswordView.vue";
import Step4ReviewView from "@/views/Step4ReviewView.vue";
</script>

<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
