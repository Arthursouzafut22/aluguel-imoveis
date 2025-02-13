import { UseAuth } from "../../context/LoginContext/ContexLogin";
import { useQueryProperty } from "../../services/PropertyService/propertyService";
import { ButtonColor } from "../../Styles/Colors";
import * as S from "./Styles";
import { MenssagesProps } from "./types";

const Messages = () => {
  const { user } = UseAuth();
  const uid = user?.uid as string;
  const { data } = useQueryProperty<MenssagesProps[]>(`/messages/${uid}`);

  return (
    <S.Section>
      <S.Box>
        <h1>Suas Mensagens</h1>

        {data?.length === 0 ? (
          <p>Você não possui nenhuma mensagem</p>
        ) : (
          data &&
          data.map((item) => (
            <S.CardMessages key={item.id}>
              <S.Wrapper>
                <p>
                  <strong>Imóvel: </strong>
                  {item.nome_imovel}
                </p>
                <span>Nova</span>
              </S.Wrapper>
              <p>{item.mensagem}</p>
              <p>
                <strong>Nome: </strong>
                {item.nome}
              </p>
              <p>
                <strong>Email: </strong>
                {item.email}
              </p>
              <p>
                <strong>Telefone: </strong>
                {item.celular}
              </p>
              <p>
                <strong>Enviado: </strong>
                {new Date(item.data_interesse).toLocaleString()}
              </p>
              <S.BoxButtons>
                <S.Button color={ButtonColor}>Marcar como lida</S.Button>
                <S.Button color={"red"}>Apagar</S.Button>
              </S.BoxButtons>
            </S.CardMessages>
          ))
        )}
      </S.Box>
    </S.Section>
  );
};

export default Messages;
