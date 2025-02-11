import { useParams } from "react-router-dom";
import * as S from "./Styles";
import { UseLayout } from "../../context/LayoutContext/ContextLayout";
import { useEffect, useState } from "react";
import { useQueryProperty } from "../../services/PropertyService/propertyService";
import Slide from "./Slide/Slide";
import { FaCheck } from "react-icons/fa";
import { BsBookmarkHeartFill } from "react-icons/bs";
import useMedia from "../../Hooks/UseMedia";
import ContainerOne from "./ContainerOne/ContainerOne";
import ContainerTwo from "./ContainerTwo/ContainerTwo";
import FormProprietary from "./FormProprietary/FormProprietary";
import { UseAuth } from "../../context/LoginContext/ContexLogin";
import SimpleMap from "../../components/Mapa/SimpleMap";
import { UseFavorites } from "../../context/FavoritesContext/FavoritesContext";
import { PropertProps } from "../../services/Types";

const ImovelInformation = () => {
  const { setId } = UseLayout();
  const { mobile } = useMedia("(max-width:1024px)");
  const { id } = useParams();
  const { data } = useQueryProperty<PropertProps[]>("/");
  const searchProperty = data?.find((i) => i.id === Number(id));
  const { addPropertyToFavorites, deletePropertyToFavorites } = UseFavorites();
  const { user } = UseAuth();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setId(id || "");
    window.scrollTo({ behavior: "smooth", top: 0 });
    // Pega os favoritos do localStorage
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    // Verifica se o imóvel atual está salvo nos favoritos
    const isPropertySaved = storedFavorites.some(
      (fav: PropertProps) => fav.id === Number(id)
    );

    setIsSaved(isPropertySaved);
  }, [id, setId]);

  if (!searchProperty) return <p>Carregando....</p>;

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
            {user && isSaved ? (
              <button
                style={{ background: "#EF4444" }}
                onClick={() => {
                  deletePropertyToFavorites(searchProperty);
                  setIsSaved(user ? false : true);
                }}
              >
                <BsBookmarkHeartFill />
                Remover dos favoritos
              </button>
            ) : (
              <button
                onClick={() => {
                  addPropertyToFavorites(searchProperty, id);
                  setIsSaved(true);
                }}
              >
                <BsBookmarkHeartFill />
                Salvar imóvel
              </button>
            )}

            <S.CardOwner>
              {user ? (
                <FormProprietary id={id as string} />
              ) : (
                <>
                  <h3>Fale com o proprietário</h3>
                  <p>Você precisar estar logado para enviar uma mensagem</p>
                </>
              )}
            </S.CardOwner>
          </S.WrapperTwo>
        </S.Box>
        <S.MapContainer>
          <SimpleMap />
        </S.MapContainer>
      </S.WrapperGlobal>
    </S.Section>
  );
};

export default ImovelInformation;
