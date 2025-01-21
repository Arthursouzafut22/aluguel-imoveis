import * as S from "../Styles";
import { PropertProps } from "../../../api/Types";
import { FaBed } from "react-icons/fa";
import { PiBathtubFill } from "react-icons/pi";
import { FaRulerCombined } from "react-icons/fa";
import useMedia from "../../../Hooks/UseMedia";

const WrrapperAreas = ({ item }: { item: PropertProps }) => {
    const {mobile} = useMedia("(max-width:333px)");
    
  return (
    <S.WrrapperAreas mobile={mobile}>
      <S.Box mobile={mobile}>
        <div>
          <FaBed style={{ color: "#6B7280" }} />
          <p>{item.camas}</p>
        </div>
        <span>Camas</span>
      </S.Box>
      <S.Box mobile={mobile}>
        <div>
          <PiBathtubFill style={{ color: "#6B7280" }} />
          <p>{item.banheiros}</p>
        </div>
        <span>Banheiros</span>
      </S.Box>
      <S.Box mobile={mobile}>
        <div>
          <FaRulerCombined style={{ color: "#6B7280" }} />
          <p>{item.metros_quadrados}</p>
        </div>
        <span>m²</span>
      </S.Box>
    </S.WrrapperAreas>
  );
};

export default WrrapperAreas;
