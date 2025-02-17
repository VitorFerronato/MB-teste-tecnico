<template>
  <div class="d-flex flex-column ga-1">
    <label class="text-label">{{ title }}</label>
    <input
      :value="modelValue"
      :type="type"
      @input="handleInput"
      type="text"
      class="input-field pa-2"
    />
    <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch, inject, onMounted } from "vue";
import rules from "@/utils/rules.js";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  modelValue: String,
  rules: {
    type: Array,
    default: () => [],
  },
  type: {
    type: String,
    default: "text",
  },
});

const emit = defineEmits(["update:modelValue"]);
const errorMessage = ref("");

const validate = () => {
  for (let ruleName of props.rules) {
    const rule = typeof ruleName === "function" ? ruleName : rules[ruleName];

    if (!rule) {
      console.warn(
        `Regra de validação "${ruleName}" não encontrada em rules.js`
      );
      continue;
    }

    const result = rule(props.modelValue);
    if (result !== true) {
      errorMessage.value = result;
      return false;
    }
  }
  errorMessage.value = "";
  return true;
};

const handleInput = (event) => {
  const value = event.target.value;
  emit("update:modelValue", value);
  validate();
};

watch(() => props.modelValue, validate);

const registerInput = inject("registerInput", null);

onMounted(() => {
  if (registerInput) {
    registerInput({ validate });
  }
});
</script>

<style scoped>
.input-field {
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 8px;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}
</style>
