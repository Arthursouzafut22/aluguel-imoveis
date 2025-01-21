import * as S from "./Styles";
import { useQueryProperty } from "../../api/propertyService";
import CardsImoveis from "../CardsImoveis/CardsImoveis";
import useMedia from "../../Hooks/UseMedia";

const ImoveisHighlights: React.FC = () => {
  const { data } = useQueryProperty("/destaques");
  const { mobile } = useMedia("(max-width:1273px)");

  return (
    <S.WrapperHighlights>
      <h1>Imóveis em destaque</h1>

      <S.Box mobile={mobile}>
        {data &&
          data?.map((item) => <CardsImoveis key={item.id} item={item} />)}
      </S.Box>
    </S.WrapperHighlights>
  );
};
export default ImoveisHighlights;
