import CardsImoveis from "../../components/CardsImoveis/CardsImoveis";
import { UseSearch } from "../../context/SearchPropertyContext/SearchPropertyContext";
import { config } from "../Imoveis/utils/utils";
import * as S from "./Styles";

const SearchProperty = () => {
  const { filterProperty, erros } = UseSearch();

  return (
    <S.Section>
      <h1>Resultados da pesquisa</h1>
      {erros && <p>Nenhum resultado encontrado</p>}

      <S.Box>
        {filterProperty &&
          filterProperty.map((item) => (
            <CardsImoveis
              key={item.id}
              config={config}
              flexdirection={"column"}
              item={item}
            />
          ))}
      </S.Box>
    </S.Section>
  );
};

export default SearchProperty;
