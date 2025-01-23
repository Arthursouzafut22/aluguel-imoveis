import useMedia from "../../Hooks/UseMedia";
import * as S from "./Styles";
import { ImHome } from "react-icons/im";

const Footer = () => {
  const { mobile } = useMedia("(max-width:767pxpx)");

  return (
    <S.Footer>
      <S.Box mobile={mobile}>
        <div>
          <ImHome
            style={{ color: "#ffffff", fontSize: "20px", display: "block" }}
          />
        </div>
        <p>© 2024. Todos os direitos reservados.</p>
      </S.Box>
    </S.Footer>
  );
};

export default Footer;
