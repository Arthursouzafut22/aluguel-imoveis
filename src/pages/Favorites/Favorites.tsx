import { Suspense, useEffect, useState } from "react";
import * as S from "./Styles";
import CardsImoveis from "../../components/CardsImoveis/CardsImoveis";
import { PropertProps } from "../../services/Types";
import { config } from "../Imoveis/utils/utils";

const Favorites = () => {
  const [favorites, setFavorites] = useState<PropertProps[]>([]);

  useEffect(() => {
    const item = localStorage.getItem("favorites") || "[]";
    setFavorites(JSON.parse(item));
  }, []);

  return (
    <S.Section>
      <h1>Imóveis favoritos</h1>
      {favorites.length === 0 ? (
        <p>Você não tem imoveis favoritados.</p>
      ) : (
        <S.Box>
          {favorites &&
            favorites.map((item) => (
              <Suspense fallback={<p>Carregando...</p>} key={item.id}>
                <CardsImoveis
                  config={config}
                  flexdirection={"column"}
                  item={item}
                />
              </Suspense>
            ))}
        </S.Box>
      )}
    </S.Section>
  );
};

export default Favorites;
