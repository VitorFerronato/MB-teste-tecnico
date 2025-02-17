<template>
  <div class="welcome-view">
    <h1 class="title">BEM VINDO!</h1>
    <pre>{{ formattedUser }}</pre>
    <MBButton @click="$emit('returnToForm')" title="Voltar" type="button" />
  </div>
</template>

<script setup>
import MBButton from "@/design_system/components/MBButton.vue";

import { defineProps, defineEmits, computed } from "vue";
const props = defineProps(["user"]);
defineEmits(["returnToForm"]);

const formattedUser = computed(() => {
  return JSON.stringify(props.user, null, 4);
});
</script>

<style lang="scss" scoped>
.welcome-view {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
pre {
  background: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
}
</style>
