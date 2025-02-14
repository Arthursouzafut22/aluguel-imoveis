import { MenssagesProps } from "../../pages/Messages/types";
import { URL_BASE } from "../base_Urls";

const deleteMessages = async (
  id: number,
  setDados: React.Dispatch<React.SetStateAction<MenssagesProps[] | undefined>>
) => {
  try {
    const response = await fetch(URL_BASE + `/delete-messages/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      setDados((prev) => prev?.filter((i) => i.id !== id));
    }
    return await response.json();
  } catch (error) {
    console.error("Error em apagar menssagem!", error);
  }
};

export default deleteMessages;
