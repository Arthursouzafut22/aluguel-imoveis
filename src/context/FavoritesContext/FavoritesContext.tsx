import { createContext, PropsWithChildren, useContext, useState } from "react";
import { PropertProps } from "../../services/Types";
import { FavoritestProps } from "./types";

const ContexFavorites = createContext<FavoritestProps | null>(null);

export const UseFavorites = () => {
  const context = useContext(ContexFavorites);
  if (!context) throw new Error("Error!!!");
  return context;
};

const FavoritesContext = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<PropertProps[]>([]);
  const [addFavoritesActive, setAddFavoritesActive] = useState<boolean>(false);

  console.log(favorites);

  // Adicionar Imovel aos Favoritos...
  const addPropertyToFavorites = (propertyTo: PropertProps) => {
    // setFavorites([...favorites, propertyTo]);
    const newPropertyTo = { ...propertyTo, saveItem: false };
    setFavorites(() => [...favorites, newPropertyTo]);
    setAddFavoritesActive(true);
  };

  // Remover Imovel dos Favoritos...
  const deletePropertyToFavorites = (propertyTo: number) => {
    const remove = favorites.filter((i) => i.id !== propertyTo);
    setFavorites(remove);
    setAddFavoritesActive(false);
  };

  return (
    <ContexFavorites.Provider
      value={{
        favorites,
        setFavorites,
        addPropertyToFavorites,
        deletePropertyToFavorites,
        addFavoritesActive,
      }}
    >
      {children}
    </ContexFavorites.Provider>
  );
};

export default FavoritesContext;
