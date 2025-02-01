import * as S from "../Styles";
import Input from "../../../components/Input/Input";
import { validateValue } from "../Utils/utils";
import { UseFormRegister } from "react-hook-form";
import { AddImoveisProps } from "../types";
import useMedia from "../../../Hooks/UseMedia";

const BoxSpecs = ({
  register,
}: {
  register: UseFormRegister<AddImoveisProps>;
}) => {
  const { mobile } = useMedia("(max-width:767px)");
  
  return (
    <S.BoxSpecs mobile={mobile}>
      <div>
        <Input
          {...register("quartos", { required: true })}
          label="Quartos *"
          type="number"
          id="Quartos*"
          onChange={(e) => validateValue(e)}
        />
      </div>
      <div>
        <Input
          {...register("banheiros", { required: true })}
          label="Banheiros *"
          type="number"
          id="Banheiros *"
          onChange={(e) => validateValue(e)}
        />
      </div>
      <div>
        <Input
          {...register("m²", { required: true })}
          label="m² *"
          type="number"
          id="m² *"
          onChange={(e) => validateValue(e)}
        />
      </div>
    </S.BoxSpecs>
  );
};

export default BoxSpecs;
