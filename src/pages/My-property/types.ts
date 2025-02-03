import { PropertProps } from "../../services/Types";

export type CardProps = {
  item: PropertProps;
  setDados: React.Dispatch<React.SetStateAction<PropertProps[] | undefined>>;
};
