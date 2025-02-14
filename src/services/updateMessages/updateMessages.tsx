import { toast } from "react-toastify";
import { URL_BASE } from "../base_Urls";
import { MenssagesProps } from "../../pages/Messages/types";

export const toggleReadStatus = async (
  id: number,
  setDados: React.Dispatch<React.SetStateAction<MenssagesProps[] | undefined>>
) => {
  try {
    const response = await fetch(URL_BASE + `/update-message/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      setDados((prevDados) =>
        prevDados?.map((msg) =>
          msg.id === id ? { ...msg, lida: !msg.lida } : msg
        )
      );
      toast.success(
        data.lida
          ? "Mensagem marcada como lida."
          : `Mensagem marcada como não lida.`
      );
    }
  } catch (error) {
    console.error("Error em atualizar menssagem", error);
  }
};
