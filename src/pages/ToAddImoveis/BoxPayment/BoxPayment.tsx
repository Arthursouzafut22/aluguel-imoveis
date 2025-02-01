import Input from "../../../components/Input/Input";
import * as S from "../Styles";
import { validateValue } from "../Utils/utils";
import { UseFormRegister } from "react-hook-form";
import { AddImoveisProps } from "../types";
import useMedia from "../../../Hooks/UseMedia";

const BoxPayment = ({
  register,
}: {
  register: UseFormRegister<AddImoveisProps>;
}) => {
  const { mobile } = useMedia("(max-width:767px)");

  return (
    <S.BoxPayment>
      <label
        htmlFor="Valores (Caso não aplicável, deixe o campo em branco)"
        style={{ marginBottom: "10px" }}
      >
        Valores (Caso não aplicável, deixe o campo em branco)
      </label>
      <S.WrapperPayment mobile={mobile}>
        <Input
          {...register("semanal", {
            required: true,
          })}
          label="Semanal"
          type="number"
          id="Semanal"
          onChange={(e) => validateValue(e)}
        />
        <Input
          {...register("mensal", { required: true })}
          label="Mensal"
          type="number"
          id="Mensal"
          onChange={(e) => validateValue(e)}
        />
        <Input
          {...register("diaria", { required: true })}
          label="Diária"
          type="number"
          id="Diária"
          onChange={(e) => validateValue(e)}
        />
      </S.WrapperPayment>
    </S.BoxPayment>
  );
};

export default BoxPayment;
