import { createContext, PropsWithChildren, useContext, useState } from "react";
import { ContextPagesProps } from "./types";
import { PropertyPropsPages } from "../../services/Types";
import { useQueryProperty } from "../../services/PropertyService/propertyService";

const ContextPage = createContext<ContextPagesProps>({} as ContextPagesProps);

export const UsePage = () => {
  const context = useContext(ContextPage);
  if (!context) {
    throw new Error("usePage deve ser usado dentro de um AuthProvider");
  }
  return context;
};

const PageContext = ({ children }: PropsWithChildren) => {
  const { data } = useQueryProperty<PropertyPropsPages>(`/imoveis?page=1`);
  const [currentPage, setCurrentPage] = useState(data?.currentPage as number);
  const [totalPages, setTotalPages] = useState(data?.totalPages as number);

  return (
    <ContextPage.Provider
      value={{ currentPage, setCurrentPage, totalPages, setTotalPages }}
    >
      {children}
    </ContextPage.Provider>
  );
};

export default PageContext;
