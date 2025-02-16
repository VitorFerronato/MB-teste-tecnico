<template>
  <div class="d-flex flex-column ga-1">
    <label class="text-label">{{ title }}</label>
    <input
      type="text"
      class="input-field pa-2"
      :value="modelValue"
      @input="handleInput"
    />
    <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
import rules from "@/utils/rules.js"; // Importa as regras de validação

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
});

const emit = defineEmits(["update:modelValue"]);
const errorMessage = ref("");

// Função para validar o input
const validate = (value) => {
  for (let ruleName of props.rules) {
    const rule = typeof ruleName === "function" ? ruleName : rules[ruleName]; // Busca a função pelo nome

    if (!rule) {
      console.warn(
        `Regra de validação "${ruleName}" não encontrada em rules.js`
      );
      continue;
    }

    const result = rule(value);
    if (result !== true) {
      errorMessage.value = result; // Se a regra falhar, exibe a mensagem de erro
      return;
    }
  }
  errorMessage.value = ""; // Se todas as regras passarem, limpa a mensagem de erro
};

// Manipula a entrada do usuário
const handleInput = (event) => {
  const value = event.target.value;
  emit("update:modelValue", value);
  validate(value);
};

// Valida quando `modelValue` muda
watch(
  () => props.modelValue,
  (newValue) => {
    validate(newValue);
  }
);
</script>

<style lang="scss" scoped>
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
