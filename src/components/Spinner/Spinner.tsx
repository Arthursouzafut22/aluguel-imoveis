import * as S from "./Styles";
import { PropsSpinner } from "./types";

const Spinner = ({ config }: { config: PropsSpinner }) => {
  return <S.loadRow config={config}></S.loadRow>;
};

export default Spinner;
