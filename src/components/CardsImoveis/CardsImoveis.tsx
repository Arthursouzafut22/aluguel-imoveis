import * as S from "./Styles";
// import { formatePrice } from "../FormatePrice/FormatePrice";
import { URL_BASE_IMG } from "../../api/base_Urls";
import WrrapperAreas from "./WrrapperAreas/WrrapperAreas";
import { time } from "./money";
import useMedia from "../../Hooks/UseMedia";
import { CardProps } from "./Types";

const CardsImoveis = ({ item, flexdirection }: CardProps) => {
  const { mobile } = useMedia(`(max-width:1273px)`);

  return (
    <S.CardImoveis mobile={mobile} flexdirection={flexdirection}>
      <div className="filho-one">
        {/* <h2>{formatePrice(Number(item.mes))}/mês</h2> */}
        {item.imagens && (
          <img src={`${URL_BASE_IMG}${item.imagens[0]}`} alt={item.nome} />
        )}
      </div>
      <div className="filho-two">
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
          <button>Detalhes</button>
        </S.BoxLocation>
      </div>
    </S.CardImoveis>
  );
};

export default CardsImoveis;
