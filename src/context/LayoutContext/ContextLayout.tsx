import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { UseAuth } from "../LoginContext/ContexLogin";
import { useQueryProperty } from "../../services/PropertyService/propertyService";
import { MenssagesProps } from "../../pages/Messages/types";

type LayoutProps = {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
  dados: MenssagesProps[] | undefined;
  setDados: React.Dispatch<React.SetStateAction<MenssagesProps[] | undefined>>;
};

const ContextLayout = createContext<LayoutProps | null>(null);

export const UseLayout = () => {
  const context = useContext(ContextLayout);
  if (!context) throw new Error("Error!!!");
  return context;
};

const LayoutContext = ({ children }: PropsWithChildren) => {
  const [id, setId] = useState<string>("");
  const { user } = UseAuth();
  const uid = user?.uid as string;
  const { data } = useQueryProperty<MenssagesProps[]>(`/messages/${uid}`);
  const [dados, setDados] = useState(data);

  useEffect(() => {
    setDados(data);
  }, [data]);

  return (
    <ContextLayout.Provider value={{ id, setId, dados, setDados }}>
      {children}
    </ContextLayout.Provider>
  );
};

export default LayoutContext;
