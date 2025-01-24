import { useParams } from "react-router-dom";
import * as S from "./Styles";
import { UseLayout } from "../../context/LayoutContext/ContextLayout";
import { useEffect } from "react";
import { useQueryProperty } from "../../api/propertyService";
import Slide from "./Slide/Slide";

const ImovelInformation = () => {
  const { setId } = UseLayout();
  const { id } = useParams();
  const { data } = useQueryProperty("/");
  const searchProperty = data?.find((i) => i.id === Number(id));

  useEffect(() => {
    setId(id || "");
  }, [id, setId]);

  return (
    <S.Section>
      <Slide searchProperty={searchProperty} />
    </S.Section>
  );
};

export default ImovelInformation;
