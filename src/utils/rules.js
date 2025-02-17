export default {
  rulesRequired: (v) => !!v || "Obrigatório",
  rulesEmail: (v) => /.+@.+\..+/.test(v) || "E-mail inválido",
  rulesCPF: (v) => {
    if (!v) return "CPF inválido";

    const cpf = v.replace(/\D/g, "");
    if (cpf.length !== 11) return "CPF inválido";

    let sum = 0;
    let remainder;
    for (let i = 1; i <= 9; i++) sum += parseInt(cpf[i - 1]) * (11 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf[9])) return "CPF inválido";

    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf[i - 1]) * (12 - i);
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf[10])) return "CPF inválido";

    return true;
  },
  rulesCNPJ: (v) => {
    if (!v) return "CNPJ inválido";

    const cnpj = v.replace(/\D/g, "");
    if (cnpj.length !== 14) return "CNPJ inválido";

    if (/^(\d)\1+$/.test(cnpj)) return "CNPJ inválido";

    const calcDigit = (cnpj, size) => {
      let sum = 0;
      let pos = size - 7;
      for (let i = size; i >= 1; i--) {
        sum += cnpj[size - i] * pos--;
        if (pos < 2) pos = 9;
      }
      let remainder = sum % 11;
      return remainder < 2 ? 0 : 11 - remainder;
    };

    const digit1 = calcDigit(cnpj, 12);
    const digit2 = calcDigit(cnpj, 13);

    if (parseInt(cnpj[12]) !== digit1 || parseInt(cnpj[13]) !== digit2) {
      return "CNPJ inválido";
    }

    return true;
  },
  rulesBirthDate: (v) => {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(v))
      return "Data inválida (use DD/MM/AAAA)";

    const [day, month, year] = v.split("/").map(Number);
    const birthDate = new Date(year, month - 1, day);
    if (
      birthDate.getFullYear() !== year ||
      birthDate.getMonth() + 1 !== month ||
      birthDate.getDate() !== day
    ) {
      return "Data inválida";
    }

    const today = new Date();
    if (birthDate > today) return "A data não pode estar no futuro";

    return true;
  },
  rulesOpeningDate: (v) => {
    if (!v) return "Data inválida";

    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!regex.test(v)) return "Formato inválido (use DD/MM/AAAA)";

    const [_, day, month, year] = v.match(regex).map(Number);
    const date = new Date(year, month - 1, day);
    const today = new Date();

    if (
      date.getFullYear() !== year ||
      date.getMonth() + 1 !== month ||
      date.getDate() !== day
    ) {
      return "Data inválida";
    }

    if (date > today) {
      return "A data não pode ser futura";
    }

    return true;
  },
  rulesPhoneNumber: (v) => {
    const phone = v.replace(/\D/g, "");
    if (phone.length < 11 || phone.length > 11)
      return "Número de telefone inválido";
    return true;
  },
  rulesPassword: (v) => {
    if (!v) return "A senha é obrigatória";

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-+]).{8,}$/;

    return regex.test(v)
      ? true
      : "A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um símbolo.";
  },
};
