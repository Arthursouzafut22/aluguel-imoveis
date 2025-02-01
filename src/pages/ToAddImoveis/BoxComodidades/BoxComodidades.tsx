import { comodidades } from "../Utils/utils";
import Input from "../../../components/Input/Input";
import * as S from "../Styles";
import { UseFormRegister } from "react-hook-form";
import { AddImoveisProps } from "../types";
import useMedia from "../../../Hooks/UseMedia";

const BoxComodidades = ({
  register,
}: {
  register: UseFormRegister<AddImoveisProps>;
}) => {
  const { mobile } = useMedia("(max-width:767px)");

  return (
    <S.BoxComodidades>
      <label htmlFor="Comodidades">Comodidades</label>
      <S.Container mobile={mobile}>
        {comodidades &&
          comodidades.map((item) => (
            <S.WrapperCheckbox key={item}>
              <Input
                {...register("comodidades", { required: true })}
                type="checkbox"
                label={item}
                id={item}
                value={item}
              />
            </S.WrapperCheckbox>
          ))}
      </S.Container>
    </S.BoxComodidades>
  );
};

export default BoxComodidades;
