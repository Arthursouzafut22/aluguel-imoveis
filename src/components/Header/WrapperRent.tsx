import Input from "../Input/Input";
import * as S from "./Styles";
import useMedia from "../../Hooks/UseMedia";
import { useLocation } from "react-router-dom";

const WrapperRent = () => {
  const { mobile } = useMedia("(max-width:767px)");
  const location = useLocation();
  const visible = !(location.pathname === "/imoveis");

  return (
    <S.Wrapper visible={visible} mobile={mobile}>
      {visible && (
        <>
          <h1>Encontre o aluguel perfeito</h1>
          <p>Descubra o imóvel ideal para atender às suas necessidades.</p>
        </>
      )}
      <form onSubmit={(e) => e.preventDefault()}>
        <Input type="text" placeholder="Digite Sua Pesquisa" />
        <select name="" id="">
          <option value="Todos">Todos</option>
          <option value="Apartamento">Apartamento</option>
          <option value="Condominío">Condominío</option>
          <option value="Casa">Casa</option>
        </select>
        <button>Pesquisar</button>
      </form>
    </S.Wrapper>
  );
};

export default WrapperRent;
