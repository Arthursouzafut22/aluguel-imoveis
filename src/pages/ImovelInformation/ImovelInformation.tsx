import { useParams } from "react-router-dom";
import * as S from "./Styles";
import { UseLayout } from "../../context/LayoutContext/ContextLayout";
import { useEffect } from "react";
import { useQueryProperty } from "../../api/propertyService";

const ImovelInformation = () => {
  const { setId } = UseLayout();
  const { id } = useParams();
  const { data } = useQueryProperty("/");
  const searchProperty = data?.find(i => i.id === Number(id));
  console.log(searchProperty)

  useEffect(() => {
    setId(id || "");
  }, [id, setId]);

  return (
    <S.Section>
      {searchProperty?.nome} 


    </S.Section>
  );
};

export default ImovelInformation;
