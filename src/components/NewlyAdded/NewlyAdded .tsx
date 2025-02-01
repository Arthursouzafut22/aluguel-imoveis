import * as S from "./Styles";
import { useQueryProperty } from "../../services/PropertyService/propertyService";
import { Suspense } from "react";
import CardsImoveis from "../CardsImoveis/CardsImoveis";
import useMedia from "../../Hooks/UseMedia";
import { config } from "./utils/utils";

const NewlyAdded = () => {
  const { data } = useQueryProperty("/newly");
  const { mobile } = useMedia("(max-width:993px)");

  return (
    <S.WrapperNewlyAdded>
      <h2>Imóveis recém adicionados</h2>

      <S.Box mobile={mobile}>
        {data &&
          data.map((item) => (
            <Suspense fallback={<p>Carregando....</p>} key={item.id}>
              <CardsImoveis
                config={config}
                item={item}
                flexdirection={"column"}
              />
            </Suspense>
          ))}
      </S.Box>
    </S.WrapperNewlyAdded>
  );
};

export default NewlyAdded;
