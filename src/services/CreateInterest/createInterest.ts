import { FormProps } from "react-router-dom";
import { URL_BASE } from "../base_Urls";

const createInterest = async (data: FormProps & { imovel_id: string }) => {
  try {
    const response = await fetch(URL_BASE + "/interesse", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("Interrese Enviado com sucesso!");
    }

    return await response.json();
  } catch (error) {
    console.error("Error em enviar o interesse!", error);
  }
};
export default createInterest;
