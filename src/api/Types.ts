export type PropertProps = {
  id: number;
  nome: string;
  tipo: "casa" | "apartamento" | "condominio";
  camas: number;
  banheiros: number;
  metros_quadrados: number;
  imagens: string[];
  mes: string;
  localizacao: string;
  diaria: string;
  semanal: string;
  descricao: string;
  comodidades: string[];
};
