import * as yup from "yup";

export const schema = yup.object({
  nome: yup
    .string()
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "O nome deve conter apenas letras"),
  celular: yup
    .string()
    .matches(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Digite um telefone válido"),
});
