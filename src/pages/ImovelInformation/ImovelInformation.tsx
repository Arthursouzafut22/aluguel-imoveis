import { useParams } from "react-router-dom";
import * as S from "./Styles";
import { UseLayout } from "../../context/LayoutContext/ContextLayout";
import { useEffect } from "react";
import { useQueryProperty } from "../../api/propertyService";
import Slide from "./Slide/Slide";
import { FaCheck } from "react-icons/fa";
import { BsBookmarkHeartFill } from "react-icons/bs";
import useMedia from "../../Hooks/UseMedia";
import ContainerOne from "./ContainerOne/ContainerOne";
import ContainerTwo from "./ContainerTwo/ContainerTwo";
import FormProprietary from "./FormProprietary/FormProprietary";
import { UseAuth } from "../../context/LoginContext/ContexLogin";
import SimpleMap from "../../components/Mapa/SimpleMap";

const ImovelInformation = () => {
  const { setId } = UseLayout();
  const { mobile } = useMedia("(max-width:1024px)");
  const { id } = useParams();
  const { data } = useQueryProperty("/");
  const searchProperty = data?.find((i) => i.id === Number(id));
  const { user } = UseAuth();

  useEffect(() => {
    setId(id || "");
    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [id, setId]);

  return (
    <S.Section>
      <Slide searchProperty={searchProperty} />

      <S.WrapperGlobal>
        <S.Box mobile={mobile}>
          <S.WrapperOne mobile={mobile}>
            <ContainerOne searchProperty={searchProperty} />
            <ContainerTwo searchProperty={searchProperty} />

            <S.ContainerComodidades mobile={mobile}>
              <h3>Comodidades</h3>

              <ul>
                {searchProperty?.comodidades.map((i) => (
                  <li key={i}>
                    <FaCheck style={{ color: "#16A34A" }} /> {i}
                  </li>
                ))}
              </ul>
            </S.ContainerComodidades>
          </S.WrapperOne>
          <S.WrapperTwo mobile={mobile}>
            <button>
              <BsBookmarkHeartFill />
              Salvar imóvel
            </button>
            <S.CardOwner>
              {user ? (
                <FormProprietary />
              ) : (
                <>
                  <h3>Fale com o proprietário</h3>
                  <p>Você precisar estar logado para enviar uma mensagem</p>
                </>
              )}
            </S.CardOwner>
          </S.WrapperTwo>
        </S.Box>
      </S.WrapperGlobal>
      <S.MapContainer>
        <SimpleMap />
      </S.MapContainer>
    </S.Section>
  );
};

export default ImovelInformation;
