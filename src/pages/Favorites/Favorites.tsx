import { Suspense, useEffect, useState } from "react";
import * as S from "./Styles";
import CardsImoveis from "../../components/CardsImoveis/CardsImoveis";
import { PropertProps } from "../../services/Types";

const Favorites = () => {
  const [favorites, setFavorites] = useState<PropertProps[]>([]);

  useEffect(() => {
    const item = localStorage.getItem("favorites") || "[]";
    setFavorites(JSON.parse(item));
  }, []);

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
