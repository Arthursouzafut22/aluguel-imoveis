import { URL_BASE } from "../base_Urls";

export const editProperty = async (id: string | undefined) => {
  try {
    const response = await fetch(URL_BASE + `/edit/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("Imóvel atualizado com sucesso!");
    }
  } catch (error) {
    console.error("Error em atualizar imóvel", error);
  }
};
