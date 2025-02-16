export default {
  rulesRequired: (v) => !!v || "Obrigatório",
  rulesEmail: (v) => /.+@.+\..+/.test(v) || "E-mail inválido",
  rulesCPF: (v) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(v) || "CPF inválido",
  rulesMinLength: (min) => (v) =>
    (v && v.length >= min) || `Mínimo de ${min} caracteres`,
};
