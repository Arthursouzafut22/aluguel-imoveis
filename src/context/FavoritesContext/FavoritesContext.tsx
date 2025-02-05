import { createContext, PropsWithChildren, useContext, useState } from "react";
import { PropertProps } from "../../services/Types";
import { FavoritestProps } from "./types";
import { toast } from "react-toastify";
import { UseAuth } from "../LoginContext/ContexLogin";

const ContexFavorites = createContext<FavoritestProps | null>(null);

export const UseFavorites = () => {
  const context = useContext(ContexFavorites);
  if (!context) throw new Error("Error!!!");
  return context;
};

const FavoritesContext = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<PropertProps[]>([]);
  const { user } = UseAuth();

  // Adicionar Imovel aos Favoritos...
  const addPropertyToFavorites = (
    propertyTo: PropertProps,
    id: string | undefined
  ) => {
    if (!user) {
      return toast.error(`Você precisa estar logado para salvar um imóvel`);
    }

    // Recupera os favoritos existentes do localStorage
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    // Verifica se o imóvel já está salvo
    const alreadySaved = storedFavorites.some(
      (fav: PropertProps) => fav.id === Number(id)
    );

    if (alreadySaved) {
      return toast.warning("Este imóvel já está salvo nos favoritos!");
    }

    // Adiciona o novo imóvel e atualiza o localStorage
    const updatedFavorites = [
      ...storedFavorites,
      { ...propertyTo, save: true },
    ];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    // Atualiza o estado
    setFavorites(updatedFavorites);
  };

  // Remover Imovel dos Favoritos...
  const deletePropertyToFavorites = (propertyTo: PropertProps) => {
    // Recupera os favoritos salvos
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    // Remove apenas o imóvel com o ID correspondente
    const updatedFavorites = storedFavorites.filter(
      (fav: PropertProps) => fav.id !== propertyTo.id
    );

    // Atualiza o estado e o localStorage
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <ContexFavorites.Provider
      value={{
        favorites,
        setFavorites,
        addPropertyToFavorites,
        deletePropertyToFavorites,
      }}
    >
      {children}
    </ContexFavorites.Provider>
  );
};

export default FavoritesContext;
