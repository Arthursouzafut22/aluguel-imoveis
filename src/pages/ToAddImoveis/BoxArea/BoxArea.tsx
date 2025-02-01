import * as S from "../Styles";
import { UseFormRegister } from "react-hook-form";
import { AddImoveisProps } from "../types";

const BoxArea = ({
  register,
}: {
  register: UseFormRegister<AddImoveisProps>;
}) => {
  return (
    <S.BoxArea>
      <label htmlFor="Descrição">Descrição</label>
      <textarea
        {...register("descrição", { required: true })}
        id="Descrição"
        rows={5}
        placeholder="Adicione uma descrição do seu imóvel"
      ></textarea>
    </S.BoxArea>
  );
};

export default BoxArea;
