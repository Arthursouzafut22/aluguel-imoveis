import * as S from "./Styles";
import ContainerCards from "./ContainerCards/ContainerCards";
import ImoveisHighlights from "../../components/imoveisHighlights/imoveisHighlights";
import NewlyAdded from "../../components/NewlyAdded/NewlyAdded ";

const Home = () => {
  return (
    <S.Main>
      <ContainerCards />
      <ImoveisHighlights />
      <NewlyAdded />
    </S.Main>
  );
};

export default Home;
