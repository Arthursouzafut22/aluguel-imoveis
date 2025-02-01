import * as S from "../Styles";
import Input from "../../../components/Input/Input";
import { UseFormRegister } from "react-hook-form";
import { AddImoveisProps } from "../types";
import { estados, validateValue } from "../Utils/utils";

const BoxCep = ({
  register,
}: {
  register: UseFormRegister<AddImoveisProps>;
}) => {
  return (
    <S.BoxCep style={{ position: "relative" }}>
      <label htmlFor="Localização">Localização</label>
      <Input
        {...register("rua", { required: true })}
        type="text"
        id="rua"
        placeholder="Rua *"
      />
      <Input
        {...register("numero", { required: true })}
        type="number"
        name="numero"
        id="numero"
        placeholder="Número *"
      />
      <Input
        {...register("bairro", { required: true })}
        type="text"
        name="bairro"
        id="bairro"
        placeholder="Bairro *"
      />
      <select
        {...register("estados", { required: true })}
        id="estados"
        style={{
          width: "100%",
        }}
      >
        {estados &&
          estados.map((estado) => <option key={estado}>{estado}</option>)}
      </select>
      <Input
        {...register("cidade", { required: true })}
        type="text"
        id="cidade"
        placeholder="Cidade *"
      />
      <Input
        {...register("cep", { required: true })}
        type="number"
        id="cep"
        placeholder="CEP *"
        onChange={(e) => validateValue(e)}
      />
    </S.BoxCep>
  );
};

export default BoxCep;
