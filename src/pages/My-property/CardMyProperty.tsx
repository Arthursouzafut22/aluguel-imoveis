import { CardProps } from "./types";
import * as S from "./Styles";
import { URL_BASE_IMG } from "../../services/base_Urls";
import ModalDelete from "./ModalDelete/ModalDelete";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CardMyProperty = ({ item, setDados }: CardProps) => {
  const [active, setActive] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <S.CardMyProperty key={item.id}>
      {item.imagens && (
        <img src={`${URL_BASE_IMG}${item.imagens[0]}`} alt={item.nome} />
      )}
      <S.Wrapper>
        <p>{item.nome}</p>
        <span>Endereço: Alameda Jockey Club de Sorocaba, APARECIDA DO RIO</span>
        <p>{item.localizacao}</p>
        <S.BoxButtons>
          <S.Button
            background={"#2563EB"}
            onClick={() => navigate(`/edit/${item.id}`)}
          >
            Editar
          </S.Button>
          <S.Button background={"#EF4444"} onClick={() => setActive(true)}>
            Excluir
          </S.Button>
        </S.BoxButtons>
      </S.Wrapper>
      {active && (
        <ModalDelete item={item} setDados={setDados} setActive={setActive} />
      )}
    </S.CardMyProperty>
  );
};

export default CardMyProperty;
