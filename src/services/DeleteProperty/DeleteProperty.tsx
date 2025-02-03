import { URL_BASE } from "../base_Urls";
import { PropertProps } from "../Types";

export const useDeleteProperty = () => {
  const deleteProperty = async (
    id: number,
    imagens: string[],
    setDados: React.Dispatch<React.SetStateAction<PropertProps[] | undefined>>
  ) => {
    try {
      const response = await fetch(
        URL_BASE + `/delete-property/${id}/${JSON.stringify(imagens)}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setDados((prev) => prev?.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.error("Error em deletar imovel", error);
    }
  };

  return {
    deleteProperty,
  };
};
