import { UseAuth } from "../../context/LoginContext/ContexLogin";
import { useQueryProperty } from "../../services/PropertyService/propertyService";
import { ButtonColor } from "../../Styles/Colors";
import * as S from "./Styles";
import { MenssagesProps } from "./types";
import deleteMessages from "../../services/DeleteMessages/deleteMessages";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { toggleReadStatus } from "../../services/updateMessages/updateMessages";

const Messages = () => {
  const { user } = UseAuth();
  const uid = user?.uid as string;
  const { data } = useQueryProperty<MenssagesProps[]>(`/messages/${uid}`);
  const [dados, setDados] = useState(data);

  useEffect(() => {
    setDados(data);
  }, [data]);

  return (
    <S.Section>
      <S.Box>
        <h1>Suas Mensagens</h1>

        {dados?.length === 0 ? (
          <p>Você não possui nenhuma mensagem</p>
        ) : (
          dados &&
          dados.map((item) => (
            <S.CardMessages key={item.id}>
              <S.Wrapper>
                <p>
                  <strong>Imóvel: </strong>
                  {item.nome_imovel}
                </p>
                {Boolean(!item.lida) && <span>Nova</span>}
              </S.Wrapper>
              <p style={{ wordWrap: "break-word" }}>{item.mensagem}</p>
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
                <S.Button
                  style={{ background: item.lida ? "#D1D5DB" : ButtonColor }}
                  color={ButtonColor}
                  onClick={async () => {
                    await toggleReadStatus(item.id, setDados);
                  }}
                >
                  {item.lida ? "Marcar como não lida" : "Marcar como lida"}
                </S.Button>
                <S.Button
                  color={"red"}
                  onClick={async () => {
                    await deleteMessages(item.id, setDados);
                    toast.success(`Mensagem apagada.`);
                  }}
                >
                  Apagar
                </S.Button>
              </S.BoxButtons>
            </S.CardMessages>
          ))
        )}
      </S.Box>
    </S.Section>
  );
};

export default Messages;
