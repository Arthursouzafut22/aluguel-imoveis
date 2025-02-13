import { useQuery } from "react-query";
import { URL_BASE } from "../base_Urls";

const propertyService = async <T>(endPoint: string): Promise<T> => {
  const response = await fetch(URL_BASE + endPoint);
  if (response.status === 400) throw new Error("Dados não encontrado");
  const json = await response.json();
  return json;
};

export const useQueryProperty = <T>(endPoint: string) => {
  return useQuery<T>(["property", endPoint], () => propertyService(endPoint), {
    suspense: true,
    onError: (error) => {
      console.error("Erro na requisição:", error);
    },
  });
};
