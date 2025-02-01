import { useQueryProperty } from "../../services/PropertyService/propertyService";
import * as S from "./Styles";
import CardsImoveis from "../../components/CardsImoveis/CardsImoveis";
import React, { Suspense } from "react";
import { config } from "./utils/utils";

const Imoveis = () => {
  const { data } = useQueryProperty("/");

  React.useEffect(() => {
    window.scrollTo({ behavior: "auto", top: 0 });
  }, []);

  return (
    <S.Section>
      <S.Box>
        {data &&
          data.map((item) => (
            <Suspense fallback={<p>Carregando...</p>} key={item.id}>
              <CardsImoveis
                config={config}
                flexdirection={"column"}
                item={item}
              />
            </Suspense>
          ))}
      </S.Box>
    </S.Section>
  );
};

export default Imoveis;
