import * as S from "../Styles";
import Input from "../../../components/Input/Input";

type PropsBoxFile = {
  changeFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const BoxFiles = ({ changeFile }: PropsBoxFile) => {
  return (
    <S.BoxFiles>
      <label htmlFor="Imagens (Selecione até 4 imagens)">
        Imagens (Selecione 4 imagens)
      </label>
      <Input
        type="file"
        required={true}
        name="file"
        multiple
        onChange={changeFile}
      />
    </S.BoxFiles>
  );
};

export default BoxFiles;
