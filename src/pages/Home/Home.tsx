import * as S from "./Styles";
import ContainerCards from "./ContainerCards/ContainerCards";
import ImoveisHighlights from "../../components/imoveisHighlights/imoveisHighlights";
import NewlyAdded from "../../components/NewlyAdded/NewlyAdded ";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <S.Main>
      <ContainerCards />
      <ImoveisHighlights />
      <NewlyAdded />

      <S.ButtonPlus onClick={() => navigate("/imoveis")}>
        Veja todos os imóveis
      </S.ButtonPlus>
    </S.Main>
  );
};

export default Home;
