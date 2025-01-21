import * as S from "./Styles";
import ContainerCards from "./ContainerCards/ContainerCards";
import ImoveisHighlights from "../../components/imoveisHighlights/imoveisHighlights";
import { Suspense } from "react";

const Home = () => {
  return (
    <S.Main>
      <ContainerCards />
      <Suspense fallback={<p>Carregando....</p>}>
        <ImoveisHighlights />
      </Suspense>
    </S.Main>
  );
};

export default Home;
