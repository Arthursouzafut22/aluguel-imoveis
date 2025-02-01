import { Suspense } from "react";
import { UseFavorites } from "../../context/FavoritesContext/FavoritesContext";
import * as S from "./Styles";
import CardsImoveis from "../../components/CardsImoveis/CardsImoveis";

const Favorites = () => {
  const { favorites } = UseFavorites();

  return (
    <S.Section>
      <h1>Imóveis favoritos</h1>
      <S.Box>
        {favorites &&
          favorites.map((item) => (
            <Suspense fallback={<p>Carregando...</p>} key={item.id}>
              <CardsImoveis flexdirection={"column"} item={item} />
            </Suspense>
          ))}
      </S.Box>
    </S.Section>
  );
};

export default Favorites;
