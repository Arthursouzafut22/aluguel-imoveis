import * as S from "../Styles";
import { useNavigate } from "react-router-dom";
import useMedia from "../../../Hooks/UseMedia";

const ContainerCards = () => {
  const navigate = useNavigate();
  const { mobile } = useMedia("(max-width:767px)");

  return (
    <S.ContainerCards mobile={mobile}>
      <S.CardsItems mobile={mobile} background={"#ffffff"}>
        <h2>Para inquilinos</h2>
        <p>
          Encontre o aluguel perfeito. Favorite imóveis e entre em contato com
          os proprietários.
        </p>
        <S.Button
          onClick={() => navigate("/imoveis")}
          color={"#ffffff"}
          background={"#000000"}
        >
          Encontre imóveis
        </S.Button>
      </S.CardsItems>{" "}
      <S.CardsItems mobile={mobile} background={"#F0EBFF"}>
        <h2>Para donos de imóveis</h2>
        <p>
          Divulgue seus imóveis e alcance potenciais inquilinos. Alugue como um
          Airbnb ou a longo prazo.
        </p>
        <S.Button
          onClick={() => navigate("/add")}
          color={"#ffffff"}
          background={"#a795ff"}
        >
          Adicione imóveis
        </S.Button>
      </S.CardsItems>
    </S.ContainerCards>
  );
};

export default ContainerCards;
