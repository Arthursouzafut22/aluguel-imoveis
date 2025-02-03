import { useDeleteProperty } from "../../../services/DeleteProperty/DeleteProperty";
import { CardProps } from "../types";
import * as S from "./Styles";
import { toast } from "react-toastify";

type setProps = {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalDelete = ({ item, setDados, setActive }: CardProps & setProps) => {
  const { deleteProperty } = useDeleteProperty();

  const confirmDeletion = () => {
    deleteProperty(item?.id, item?.imagens, setDados);
    toast.success(`Imóvel excluído com sucesso.`);
  };

  return (
    <S.Section>
      <S.Wrapper>
        <S.Modal>
          <p>Deseja excluir este imóvel ?</p>
          <div>
            <S.Button color={"#228B22"} onClick={confirmDeletion}>
              Sim
            </S.Button>
            <S.Button color={"#EF4444"} onClick={() => setActive(false)}>
              Não
            </S.Button>
          </div>
        </S.Modal>
      </S.Wrapper>
    </S.Section>
  );
};

export default ModalDelete;
