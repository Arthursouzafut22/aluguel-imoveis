import { AddImoveisProps } from "../../pages/ToAddImoveis/types";
import { URL_BASE } from "../base_Urls";

export const editProperty = async (
  id: string | undefined,
  data: AddImoveisProps
) => {
  try {
    const response = await fetch(URL_BASE + `/edit/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("Imóvel atualizado com sucesso!");
    }
  } catch (error) {
    console.error("Error em atualizar imóvel", error);
  }
};
