import { toast } from "react-toastify";
import { URL_BASE } from "../base_Urls";
import { MenssagesProps } from "../../pages/Messages/types";
import { UseLayout } from "../../context/LayoutContext/ContextLayout";

export const useReadStatus = () => {
  const { dados } = UseLayout();

  const toggleReadStatus = async (
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

        // setDados(data.lida && dados?.length - 1)

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

  return {
    toggleReadStatus,
  };
};
