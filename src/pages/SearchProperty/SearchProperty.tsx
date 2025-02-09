import CardsImoveis from "../../components/CardsImoveis/CardsImoveis";
import { UseSearch } from "../../context/SearchPropertyContext/SearchPropertyContext";
import { config } from "../Imoveis/utils/utils";
import { FaArrowCircleLeft } from "react-icons/fa";
import * as S from "./Styles";
import { useNavigate } from "react-router-dom";

const SearchProperty = () => {
  const { filterProperty, erros } = UseSearch();
  const navigate = useNavigate();

  return (
    <S.Section>
      <S.Wrapper>
        <S.Button onClick={() => navigate("/imoveis")}>
          <FaArrowCircleLeft />
          Voltar para os imóveis
        </S.Button>
        <h1>Resultados da pesquisa</h1>
        <p>{erros}</p>
      </S.Wrapper>

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
