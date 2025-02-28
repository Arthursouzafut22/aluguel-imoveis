import * as S from "./Styles";
import { formatePrice } from "../FormatePrice/FormatePrice";
import { URL_BASE_IMG } from "../../services/base_Urls";
import WrrapperAreas from "./WrrapperAreas/WrrapperAreas";
import { time } from "./utils/money";
import useMedia from "../../Hooks/UseMedia";
import { CardProps } from "./Types";
import { useNavigate } from "react-router-dom";

const CardsImoveis = ({ item, flexdirection, config }: CardProps) => {
  const { mobile } = useMedia(`(max-width:1273px)`);
  const navigate = useNavigate();

  return (
    <S.CardImoveis
      mobile={mobile}
      flexdirection={flexdirection}
      config={config?.height}
    >
      <S.BoxOne mobile={mobile} config={config}>
        <h2>{formatePrice(Number(item.mes))}/mês</h2>
        {item.imagens && (
          <img src={`${URL_BASE_IMG}${item.imagens[0]}`} alt={item.nome} />
        )}
      </S.BoxOne>
      <S.BoxTwo mobile={mobile} config={config}>
        <S.BoxInfo>
          <p>{item.nome}</p>
          <p>{item.tipo}</p>
        </S.BoxInfo>
        <WrrapperAreas item={item} />
        <S.BoxMoney>
          {time &&
            time.map((i) => (
              <div key={i.time} className="on">
                <span>{i.icon}</span>
                <p>{i.time}</p>
              </div>
            ))}
        </S.BoxMoney>
        <S.BoxLocation mobile={mobile}>
          <span>{item.localizacao}</span>
          <button onClick={() => navigate(`/imoveis/${item.id}`)}>
            Detalhes
          </button>
        </S.BoxLocation>
      </S.BoxTwo>
    </S.CardImoveis>
  );
};

export default CardsImoveis;
