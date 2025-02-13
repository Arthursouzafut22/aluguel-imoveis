import { Suspense, useEffect, useState } from "react";
import { useQueryProperty } from "../../services/PropertyService/propertyService";
import * as S from "./Styles";
import Spinner from "../../components/Spinner/Spinner";
import { sylesSpinner } from "./utils/utils";
import CardMyProperty from "./CardMyProperty";
import { UseAuth } from "../../context/LoginContext/ContexLogin";
import { PropertProps } from "../../services/Types";

const MyProperty = () => {
  const { user } = UseAuth();
  const { data } = useQueryProperty<PropertProps[]>(
    `/my-property/${user?.uid}`
  );
  const [dados, setDados] = useState(data);

  useEffect(() => {
    window.scrollTo({ behavior: "auto", top: 0 });
    setDados(data);
  }, [data]);

  return (
    <S.Section>
      <h1>Meus Imóveis</h1>
      {dados?.length === 0 ? (
        <p>Você não tem imoveis cadastrados.</p>
      ) : (
        <Suspense fallback={<Spinner config={sylesSpinner} />}>
          <S.Box>
            {dados &&
              dados.map((item) => (
                <CardMyProperty key={item.id} item={item} setDados={setDados} />
              ))}
          </S.Box>
        </Suspense>
      )}
    </S.Section>
  );
};

export default MyProperty;
