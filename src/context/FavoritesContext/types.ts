import { PropertProps } from "../../services/Types";

export type FavoritestProps = {
  favorites: PropertProps[];
  setFavorites: React.Dispatch<React.SetStateAction<PropertProps[]>>;
  addPropertyToFavorites: (
    propertyTo: PropertProps,
    id: string | undefined
  ) => void;
  deletePropertyToFavorites: (propertyTo: PropertProps) => void;
};
