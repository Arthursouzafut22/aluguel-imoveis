import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useQueryProperty } from "../../services/PropertyService/propertyService";
import { PropertProps } from "../../services/Types";
import { SearchProps } from "./types";
import { FormSearchProps } from "../../components/Header/types";
import { useNavigate } from "react-router-dom";
import { UseFormSetValue } from "react-hook-form";

const ContextSearch = createContext<SearchProps | null>(null);

export const UseSearch = () => {
  const context = useContext(ContextSearch);
  if (!context) throw new Error("Error!!!");
  return context;
};

const SearchContext = ({ children }: PropsWithChildren) => {
  const [filterProperty, setFilterProperty] = useState([] as PropertProps[]);
  const [erros, setErros] = useState("");
  const { data } = useQueryProperty("/");
  const navigate = useNavigate();

  function submitPropertySearch(
    values: FormSearchProps,
    setValue: UseFormSetValue<FormSearchProps>
  ) {
    const { name, type } = values;
    if (!data) return null;

    if (name.length === 0 && type === "Todos") {
      navigate("/imoveis");
      return;
    }
    //Filtrar pelo nome...
    const filterName = data?.filter(
      ({ nome }) =>
        nome?.toLowerCase() === name?.toLowerCase() && type === "Todos"
    );
    //Filtrar pelo tipo...
    const filterType = data?.filter(
      ({ tipo }) => tipo?.toLowerCase() === type?.toLowerCase()
    );
    //Filtrar pelo nome e tipo...
    const filterTodo = data?.filter(
      ({ nome, tipo }) =>
        nome.toLowerCase() === name.toLowerCase() &&
        tipo.toLowerCase() === type.toLowerCase()
    );

    if (filterName.length > 0) {
      setFilterProperty(filterName);
      setErros("");
      navigate("/search");
      return;
    }

    if (name.length === 0) {
      setFilterProperty(filterType);
      setErros("");
      navigate("/search");
      return;
    }

    if (filterTodo.length > 0) {
      setFilterProperty(filterTodo);
      setErros("");
      navigate("/search");
      return;
    }
    navigate("/search");
    notFound(name, type);
    setValue("name", "");
  }

  function notFound(name: string, type: string) {
    // Filtrar por nomes que não existe...
    const filterName = data?.filter(
      ({ nome }) =>
        nome?.toLowerCase() !== name?.toLowerCase() && type === "Todos"
    );
    // Filtrar por nomes e tipo que não existe...
    const filterTodo = data?.filter(
      ({ nome, tipo }) =>
        nome.toLowerCase() !== name.toLowerCase() &&
        tipo.toLowerCase() === type.toLowerCase()
    );

    if (filterName) {
      setFilterProperty([]);
      setErros("Nenhum resultado encontrado");
      return;
    }
    if (filterTodo) {
      setFilterProperty([]);
      setErros("Nenhum resultado encontrado");
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
