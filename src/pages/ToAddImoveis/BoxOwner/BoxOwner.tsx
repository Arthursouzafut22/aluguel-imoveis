import * as S from "../Styles";
import Input from "../../../components/Input/Input";
import { validateValue } from "../Utils/utils";
import { UseFormRegister } from "react-hook-form";
import { AddImoveisProps } from "../types";

const BoxOwner = ({
  register,
}: {
  register: UseFormRegister<AddImoveisProps>;
}) => {
  return (
    <S.BoxOwner>
      <Input
        {...register("proprietário", { required: true })}
        type="text"
        label="Nome do proprietário"
        id="Nome do proprietário"
        placeholder="Nome"
      />
      <Input
        {...register("email", { required: true })}
        type="email"
        label="E-mail do proprietário"
        id="E-mail do proprietário"
        placeholder="Endereço de e-mail"
      />
      <Input
        {...register("celular", { required: true })}
        type="number"
        label="Celular do proprietário"
        id="Celular do proprietário"
        placeholder="Celular"
        onChange={(e) => validateValue(e)}
      />
    </S.BoxOwner>
  );
};

export default BoxOwner;
