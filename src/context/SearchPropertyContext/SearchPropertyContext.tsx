import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useQueryProperty } from "../../services/PropertyService/propertyService";
import { PropertProps } from "../../services/Types";
import { SearchProps } from "./types";
import { FormSearchProps } from "../../components/Header/types";
import { useNavigate } from "react-router-dom";

const ContextSearch = createContext<SearchProps | null>(null);

export const UseSearch = () => {
  const context = useContext(ContextSearch);
  if (!context) throw new Error("Error!!!");
  return context;
};

const SearchContext = ({ children }: PropsWithChildren) => {
  const [filterProperty, setFilterProperty] = useState<PropertProps[]>([]);
  const [erros, setErros] = useState(false);
  const { data } = useQueryProperty("/");
  const navigate = useNavigate();

  const submitPropertySearch = (values: FormSearchProps) => {
    const { name, type } = values;
    if (!data) return;

    if (name.length === 0 && type === "Todos") {
      navigate("/imoveis");
    }

    const filterName = data?.filter(
      ({ nome }) =>
        nome?.toLowerCase() === name?.toLowerCase() && type === "Todos"
    );
    const filterType = data?.filter(
      ({ tipo }) => tipo?.toLowerCase() === type?.toLowerCase()
    );
    const filterTodo = data?.filter(
      ({ nome, tipo }) =>
        nome.toLowerCase() === name.toLowerCase() &&
        tipo.toLowerCase() === type.toLowerCase()
    );

    if (filterName.length > 0) {
      setFilterProperty(filterName);
      setErros(false);
      return;
    }

    if (name.length === 0) {
      setFilterProperty(filterType);
      setErros(false);
      return;
    }

    if (filterTodo.length > 0) {
      setFilterProperty(filterTodo);
      setErros(false);
      return;
    }
    navigate("/search");
    notFound(name, type);
  };

  function notFound(name: string, type: string) {
    const filterName = data?.filter(
      ({ nome }) =>
        nome?.toLowerCase() !== name?.toLowerCase() && type === "Todos"
    );
    const filterTodo = data?.filter(
      ({ nome, tipo }) =>
        nome.toLowerCase() !== name.toLowerCase() &&
        tipo.toLowerCase() === type.toLowerCase()
    );

    if (filterName) {
      setFilterProperty([]);
      setErros(true);
      return;
    }
    if (filterTodo) {
      setFilterProperty([]);
      setErros(true);
      return;
    }
  }

  return (
    <ContextSearch.Provider
      value={{ filterProperty, submitPropertySearch, erros }}
    >
      {children}
    </ContextSearch.Provider>
  );
};

export default SearchContext;
