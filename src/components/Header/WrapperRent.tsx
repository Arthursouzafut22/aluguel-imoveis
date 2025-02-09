import Input from "../Input/Input";
import * as S from "./Styles";
import useMedia from "../../Hooks/UseMedia";
import { useLocation } from "react-router-dom";
import Layout from "../../pages/Layout/Layout";
import { useForm } from "react-hook-form";
import { FormSearchProps } from "./types";
import { UseSearch } from "../../context/SearchPropertyContext/SearchPropertyContext";

const WrapperRent = () => {
  const { mobile } = useMedia("(max-width:767px)");
  const location = useLocation();
  const visible = !(
    location.pathname === "/imoveis" || location.pathname === "/search"
  );
  const { register, handleSubmit, setValue } = useForm<FormSearchProps>();
  const { submitPropertySearch } = UseSearch();

  return (
    <Layout>
      <S.Wrapper visible={visible} mobile={mobile}>
        {visible && (
          <>
            <h1>Encontre o aluguel perfeito</h1>
            <p>Descubra o imóvel ideal para atender às suas necessidades.</p>
          </>
        )}
        <form
          onSubmit={handleSubmit((values) =>
            submitPropertySearch(values, setValue)
          )}
        >
          <Input
            type="text"
            placeholder="Digite Sua Pesquisa"
            {...register("name")}
          />
          <select id="Tipo do imóvel *" {...register("type")}>
            <option value="Todos">Todos</option>
            <option value="Apartamento">Apartamento</option>
            <option value="Condominío">Condominío</option>
            <option value="Casa">Casa</option>
          </select>
          <button>Pesquisar</button>
        </form>
      </S.Wrapper>
    </Layout>
  );
};

export default WrapperRent;
