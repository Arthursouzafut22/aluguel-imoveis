import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/image/logo-white.webp";
import Login from "../Login/Login";
import { FaRegBell } from "react-icons/fa";
import { UseAuth } from "../../context/LoginContext/ContexLogin";
import ModalUser from "./ModalUser/ModalUser";
import React, { useCallback } from "react";
import * as S from "../Header/Styles";
import useMedia from "../../Hooks/UseMedia";
import { UseLayout } from "../../context/LayoutContext/ContextLayout";
import { SetActiveProps } from "../Login/types";

const Nav = ({ setMenuActive }: SetActiveProps) => {
  const { user } = UseAuth();
  const [activeModal, setActiveModal] = React.useState<boolean>(false);
  const { mobile } = useMedia("(max-width:767px)");
  const { dados } = UseLayout();

  const closeModal = useCallback(() => {
    setActiveModal(false);
  }, []);

  return (
    <S.Nav mobile={mobile}>
      <S.containerOne mobile={mobile}>
        <Link to={"/"} className="wrapper-link">
          <img src={Logo} alt="Logo" />
          <span>PropertyPulse</span>
        </Link>
        <NavLink
          to={"/"}
          onClick={() => setActiveModal(false)}
          className={({ isActive }) => (isActive ? "active" : "no-active")}
          end
        >
          Início
        </NavLink>
        <NavLink
          onClick={() => setActiveModal(false)}
          to={"/imoveis"}
          className={({ isActive }) => (isActive ? "active" : "no-active")}
        >
          Imóveis
        </NavLink>
        {user && (
          <NavLink
            onClick={() => setActiveModal(false)}
            to={"/add"}
            className={({ isActive }) => (isActive ? "active" : "no-active")}
          >
            Adicionar imóveis
          </NavLink>
        )}
      </S.containerOne>
      <S.containerTwo>
        {user && (
          <Link
            onClick={() => setActiveModal(false)}
            to={"/messages"}
            className={"msn"}
          >
            <FaRegBell />
            {dados && dados.length > 0 ? (
              <span className={"quanty-msn"}>{dados?.length}</span>
            ) : null}
          </Link>
        )}
        {user && (
          <div className={"wrapper-modal"}>
            <button
              className={"btn-user"}
              onClick={() => setActiveModal(!activeModal)}
            >
              {user.photoURL && <img src={String(user?.photoURL)} alt="logo" />}
            </button>
            {activeModal && <ModalUser closeModal={closeModal} />}
          </div>
        )}
        {!user && <Login setMenuActive={setMenuActive} />}
      </S.containerTwo>
    </S.Nav>
  );
};

export default Nav;
