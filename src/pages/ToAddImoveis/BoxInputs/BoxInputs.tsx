import * as S from "../Styles";
import { UseFormRegister } from "react-hook-form";
import { AddImoveisProps } from "../types";
import Input from "../../../components/Input/Input";

const BoxInputs = ({
  register,
}: {
  register: UseFormRegister<AddImoveisProps>;
}) => {
  return (
    <S.BoxInputs>
      <label htmlFor="Tipo do imóvel *">Tipo do imóvel *</label>
      <select
        id="Tipo do imóvel *"
        style={{ width: "100%" }}
        {...register("tipo")}
      >
        <option value="Apartamento">Apartamento</option>
        <option value="Condominío">Condominío</option>
        <option value="Casa">Casa</option>
      </select>
      <Input
        {...register("nome", { required: true })}
        label="Nome*"
        type="text"
        id="Nome*"
        placeholder="Ex: um lindo apartamento em Recife"
      />
    </S.BoxInputs>
  );
};

export default BoxInputs;
