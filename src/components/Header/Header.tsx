import * as S from "./Styles";
import useMedia from "../../Hooks/UseMedia";
import Nav from "../Nav/Nav";
import React, { ReactNode, useCallback } from "react";
import MenuMobile from "./MenuMobile/MenuMobile";
import Img from "../../assets/image/logo-white.webp";

const Header = ({ children }: { children: ReactNode }) => {
  const { mobile } = useMedia("(max-width:767px)");
  const [menuActive, setMenuActive] = React.useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setMenuActive(!menuActive);
  }, [menuActive]);

  return (
    <S.Header mobile={mobile}>
      {mobile && (
        <div className="wrapper">
          <MenuMobile onClick={toggleMenu} menuActive={menuActive} />
          <img src={Img} alt="Imagem-logo" />
        </div>
      )}

      {!mobile && <Nav />}
      {mobile && menuActive && <Nav />}

      {children}
    </S.Header>
  );
};

export default Header;
