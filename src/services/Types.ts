export type PropertProps = {
  id: number;
  nome: string;
  tipo: "Casa" | "Apartamento" | "Condominío";
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
  rua?: string;
  numero?: string;
  bairro?: string;
  estado?: string;
  cidade?: string;
  cep?: string;
  ["nome_proprietario"]?: string;
  email?: string;
  ["celular_proprietario"]?: string;
  save: boolean;
  uid?: string;
};

export type PropertyPropsPages = {
  currentPage: number;
  totalPages: number;
  totalImoveis: number;
  imoveis: PropertProps[];
};
