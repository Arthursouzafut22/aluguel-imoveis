import * as S from "./Styles";
import { useQueryProperty } from "../../services/PropertyService/propertyService";
import CardsImoveis from "../CardsImoveis/CardsImoveis";
import useMedia from "../../Hooks/UseMedia";
import { Suspense } from "react";
import { config } from "./utils/utils";
import { PropertProps } from "../../services/Types";

const ImoveisHighlights: React.FC = () => {
  const { data } = useQueryProperty<PropertProps[]>("/destaques");
  const { mobile } = useMedia("(max-width:1273px)");

  return (
    <S.WrapperHighlights>
      <h2>Imóveis em destaque</h2>

      <S.Box mobile={mobile}>
        {data &&
          data?.map((item) => (
            <Suspense fallback={<p>Carregando....</p>} key={item.id}>
              <CardsImoveis config={config} item={item} flexdirection={"row"} />
            </Suspense>
          ))}
      </S.Box>
    </S.WrapperHighlights>
  );
};
export default ImoveisHighlights;
