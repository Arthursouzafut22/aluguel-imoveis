import { AddImoveisProps } from "../../pages/ToAddImoveis/types";
import { URL_BASE } from "../base_Urls";

export const createProperty = async (file: File[], data: AddImoveisProps, uid:string) => {
  const formData = new FormData();
  const newData = {...data, uid};

  file.forEach((image) => {
    formData.append(`file`, image);
  });

  formData.append("data", JSON.stringify(newData));

  try {
    const response = await fetch(URL_BASE + "/cadastrar", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (response.ok) {
      console.log("Enviado com sucesso");
    }
    return data;
  } catch (error) {
    console.error("Error em criar imoveis !", error);
  }
};
