import * as S from "./Styles";
import WrapperRent from "./WrapperRent";
import useMedia from "../../Hooks/UseMedia";
import Nav from "../Nav/Nav";
import React from "react";
import MenuMobile from "./MenuMobile/MenuMobile";
import Img from "../../assets/image/logo-white.webp";

const Header = () => {
  const { mobile } = useMedia("(max-width:767px)");
  const [menuActive, setMenuActive] = React.useState<boolean>(false);

  return (
    <S.Header mobile={mobile}>
      {mobile && (
        <div className="wrapper">
          <MenuMobile
            onClick={() => setMenuActive(!menuActive)}
            menuActive={menuActive}
          />
          <img src={Img} alt="Imagem-logo" />
        </div>
      )}

      {!mobile && <Nav />}
      {mobile && menuActive && <Nav />}
      <WrapperRent />
    </S.Header>
  );
};

export default Header;
