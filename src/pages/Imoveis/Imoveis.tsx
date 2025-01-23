import { useQueryProperty } from "../../api/propertyService";
import * as S from "./Styles";
import CardsImoveis from "../../components/CardsImoveis/CardsImoveis";
import React, { Suspense } from "react";

const Imoveis = () => {
  const { data } = useQueryProperty("/");

  React.useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, []);

  return (
    <S.Section>
      <S.Box>
        {data &&
          data.map((item) => (
            <Suspense fallback={<p>Carregando...</p>} key={item.id}>
              <CardsImoveis flexdirection={"column"} item={item} />
            </Suspense>
          ))}
      </S.Box>
    </S.Section>
  );
};

export default Imoveis;
