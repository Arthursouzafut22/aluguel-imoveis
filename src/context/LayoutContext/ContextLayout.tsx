import { createContext, PropsWithChildren, useContext, useState } from "react";

type LayoutProps = {
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
};

const ContextLayout = createContext<LayoutProps | null>(null);

export const UseLayout = () => {
  const context = useContext(ContextLayout);
  if (!context) throw new Error("Error!!!");
  return context;
};

const LayoutContext = ({ children }: PropsWithChildren) => {
  const [id, setId] = useState<string>("");

  return (
    <ContextLayout.Provider value={{ id, setId }}>
      {children}
    </ContextLayout.Provider>
  );
};

export default LayoutContext;
