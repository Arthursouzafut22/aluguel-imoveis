import React from "react";
import * as S from "./Styles";
import { memo } from "react";

type MenuProps = {
  onClick: () => void;
  menuActive: boolean;
};

const MenuMobile: React.FC<MenuProps> = memo(({ onClick, menuActive }) => {
  return (
    <S.ButtonMobile
      onClick={onClick}
      aria-expanded={menuActive ? true : false}
      aria-controls={"menu"}
      aria-label={"Abrir menu"}
    >
      <div></div>
      <div></div>
      <div></div>
    </S.ButtonMobile>
  );
});

export default MenuMobile;
