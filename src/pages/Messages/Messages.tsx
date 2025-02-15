import { ButtonColor } from "../../Styles/Colors";
import * as S from "./Styles";
import deleteMessages from "../../services/DeleteMessages/deleteMessages";
import { toast } from "react-toastify";
import { useReadStatus } from "../../services/updateMessages/updateMessages";
import { UseLayout } from "../../context/LayoutContext/ContextLayout";

const Messages = () => {
  const { dados, setDados } = UseLayout();
  const { toggleReadStatus } = useReadStatus();

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
