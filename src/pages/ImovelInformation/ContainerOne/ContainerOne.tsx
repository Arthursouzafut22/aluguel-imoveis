import * as S from "../Styles";
import { formatePrice } from "../../../components/FormatePrice/FormatePrice";
import useMedia from "../../../Hooks/UseMedia";
import { FaLocationArrow } from "react-icons/fa";
import { ContainerProps } from "../types";

const ContainerOne = ({ searchProperty }: ContainerProps) => {
  const { mobile } = useMedia("(max-width:1024px)");

  return (
    <S.ContainerOne mobile={mobile}>
      <p>{searchProperty?.tipo}</p>
      <h1>{searchProperty?.nome}</h1>
      <p className={"text-location"}>
        {" "}
        <FaLocationArrow style={{ color: "#C2410C" }} />
        {searchProperty?.localizacao}
      </p>
      <h3>Preços e Opções</h3>
      <S.BoxValues>
        <div>
          <span>Diária:</span>
          <p>{formatePrice(Number(searchProperty?.diaria))}</p>
        </div>
        <div>
          <span>Semanal:</span>
          <p>{formatePrice(Number(searchProperty?.semanal))}</p>
        </div>
        <div>
          <span>Mensal:</span>
          <p>{formatePrice(Number(searchProperty?.semanal))}</p>
        </div>
      </S.BoxValues>
    </S.ContainerOne>
  );
};

export default ContainerOne;
