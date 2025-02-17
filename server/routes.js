const express = require("express");
const {
  isValidEmail,
  isValidCPF,
  isValidCNPJ,
  isValidDate,
  isValidPhone,
  isValidPassword,
} = require("./validators");

const router = express.Router();

router.post("/registration", (req, res) => {
  const { email, name, registration, creationDate, phoneNumber, password } =
    req.body;

  if (
    !email ||
    !name ||
    !registration ||
    !creationDate ||
    !phoneNumber ||
    !password
  ) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "E-mail inválido!" });
  }

  if (registration.length === 14 && !isValidCPF(registration)) {
    return res
      .status(400)
      .json({ error: "CPF inválido! Formato correto: 000.000.000-00" });
  }

  if (registration.length === 18 && !isValidCNPJ(registration)) {
    return res
      .status(400)
      .json({ error: "CNPJ inválido! Formato correto: 00.000.000/0000-00" });
  }

  if (!isValidDate(creationDate)) {
    return res
      .status(400)
      .json({ error: "Data inválida! Formato correto: DD/MM/YYYY" });
  }

  if (!isValidPhone(phoneNumber)) {
    return res.status(400).json({
      error: "Número de telefone inválido! Formato correto: (XX)XXXXX-XXXX",
    });
  }

  if (!isValidPassword(password)) {
    return res.status(400).json({
      error:
        "A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um símbolo!",
    });
  }

  console.log("Dados válidos recebidos:", req.body);
  res.json({ message: "Cadastro realizado com sucesso!" });
});

module.exports = router;
