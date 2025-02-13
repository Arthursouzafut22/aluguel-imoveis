import { ReactNode } from "react";
import { sylesSpinner } from "../../pages/ToAddImoveis/Utils/utils";
import Spinner from "../Spinner/Spinner";
import * as S from "./styles";

type ButtonProps = {
  text?: string | ReactNode;
  status: boolean;
};

const Button = ({ text, status }: ButtonProps) => {
  return (
    <S.Button>{status ? <Spinner config={sylesSpinner} /> : text}</S.Button>
  );
};

export default Button;
