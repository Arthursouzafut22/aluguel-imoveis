import { UseFormSetValue } from "react-hook-form";
import { FormSearchProps } from "../../components/Header/types";
import { PropertProps } from "../../services/Types";

export type SearchProps = {
  filterProperty: PropertProps[];
  erros: string;
  submitPropertySearch: (
    values: FormSearchProps,
    setValue: UseFormSetValue<FormSearchProps>
  ) => void;
};
