import * as S from "../Styles";
import { FaBed } from "react-icons/fa";
import { PiBathtubFill } from "react-icons/pi";
import { FaRulerCombined } from "react-icons/fa";
import useMedia from "../../../Hooks/UseMedia";
import { ContainerProps } from "../types";

const ContainerTwo = ({ searchProperty }: ContainerProps) => {
  const { mobile } = useMedia("(max-width:1024px)");

  return (
    <S.ContainerTwo mobile={mobile}>
      <h3>Descrição e Detalhes</h3>
      <S.BoxPrices>
        <div>
          <FaBed style={{ color: "#a795ff", fontSize: "20px" }} />
          <p>{searchProperty?.camas}</p>
          <span>Camas</span>
        </div>
        <div>
          <PiBathtubFill style={{ color: "#a795ff", fontSize: "20px" }} />
          <p>{searchProperty?.banheiros}</p>
          <span>Banheiros</span>
        </div>
        <div>
          <FaRulerCombined style={{ color: "#a795ff", fontSize: "20px" }} />
          <p>{searchProperty?.metros_quadrados}</p>
          <span>m²</span>
        </div>
      </S.BoxPrices>
      <p style={{ wordWrap: "break-word" }}>{searchProperty?.descricao}</p>
    </S.ContainerTwo>
  );
};

export default ContainerTwo;
