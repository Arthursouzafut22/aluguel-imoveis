import { useQuery } from "react-query";
import { PropertProps } from "./Types";
import { URL_BASE } from "./base_Urls";

const propertyService = async (
  endPoint: string = ""
): Promise<PropertProps[]> => {
  const response = await fetch(URL_BASE + endPoint);
  if (response.status === 400) throw new Error("Dados não encontrado");
  const json = await response.json();
  return json;
};

export const useQueryProperty = (endPoint: string) => {
  return useQuery<PropertProps[]>(
    ["property", endPoint],
    () => propertyService(endPoint),
    {
      suspense: true,
    }
  );
};
