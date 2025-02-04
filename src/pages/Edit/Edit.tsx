import * as S from "./Styles";
import FormEdit from "../Edit/FormEdit/FormEdit";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { UseLayout } from "../../context/LayoutContext/ContextLayout";

const Edit = () => {
  const { id } = useParams();
  const { setId } = UseLayout();

  useEffect(() => {
    setId(id || "");
  }, [setId, id]);

  return (
    <S.Section>
      <S.Box>
        <FormEdit id={id}/>
      </S.Box>
    </S.Section>
  );
};

export default Edit;
