export const estados: string[] = [
  "RO",
  "AC",
  "AM",
  "RR",
  "PA",
  "AP",
  "TO",
  "MA",
  "PI",
  "CE",
  "RN",
  "PB",
  "PE",
  "AL",
  "SE",
  "BA",
  "MG",
  "ES",
  "RJ",
  "SP",
  "PR",
  "SC",
  "RS",
  "MS",
  "MT",
  "GO",
  "DF",
];

export const comodidades: string[] = [
  "Wifi",
  "Elevador",
  "Segurança 24/7",
  "Lava-louças",
  "Área de lazer",
  "Cozinha completa",
  "Piscina",
  "Acessível a deficiêncientes",
  "Academia",
  "Smart TV",
  "Lavanderia",
  "Jacuzzi",
  "Estacionamento Gratuito",
  "Ar-condicionado",
  "Cafeteira",
];

export function validateValue(e: React.ChangeEvent<HTMLInputElement>) {
  const v = Number(e.target.value);
  if (v < 0) return (e.target.value = "0");
}

export const sylesSpinner = {
  width: "1.8rem",
  height: "1.8rem",
  borderTop: "5px solid #fff",
  borderLeft: "5px solid #fff",
};
