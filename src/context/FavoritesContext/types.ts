import { PropertProps } from "../../services/Types";

export type FavoritestProps = {
  favorites: PropertProps[];
  setFavorites: React.Dispatch<React.SetStateAction<PropertProps[]>>;
  addPropertyToFavorites: (propertyTo: PropertProps) => void;
  deletePropertyToFavorites: (propertyTo: number) => void;
  addFavoritesActive: boolean;
};
