import { useQueryProperty } from "../../services/PropertyService/propertyService";
import * as S from "./Styles";
import CardsImoveis from "../../components/CardsImoveis/CardsImoveis";
import React, { Suspense } from "react";
import { config } from "./utils/utils";
import PaginationButtons from "../../components/PaginationButtons/PaginationButtons";
import { PropertyPropsPages } from "../../services/Types";
import { UsePage } from "../../context/PageContext/PageContext";

const Imoveis = () => {
  const { currentPage } = UsePage();
  const { data } = useQueryProperty<PropertyPropsPages>(
    `/imoveis?page=${currentPage}`
  );

  React.useEffect(() => {
    window.scrollTo({ behavior: "auto", top: 0 });
  }, []);

  return (
    <S.Section>
      <S.Box>
        {data &&
          data.imoveis.map((item) => (
            <Suspense fallback={<p>Carregando...</p>} key={item.id}>
              <CardsImoveis
                config={config}
                flexdirection={"column"}
                item={item}
              />
            </Suspense>
          ))}
      </S.Box>
      <PaginationButtons />
    </S.Section>
  );
};

export default Imoveis;
