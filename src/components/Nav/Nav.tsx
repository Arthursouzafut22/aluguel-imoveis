import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/image/logo-white.webp";
import Login from "../Login/Login";
import { FaRegBell } from "react-icons/fa";
import { UseAuth } from "../../context/LoginContext/ContexLogin";
import ModalUser from "./ModalUser/ModalUser";
import React, { useCallback } from "react";
import { useQueryProperty } from "../../services/PropertyService/propertyService";
import { MenssagesProps } from "../../pages/Messages/types";
import * as S from "../Header/Styles";
import useMedia from "../../Hooks/UseMedia";

const Nav = () => {
  const { user } = UseAuth();
  const [activeModal, setActiveModal] = React.useState<boolean>(false);
  const { mobile } = useMedia("(max-width:767px)");
  const { data } = useQueryProperty<MenssagesProps[]>(
    `/messages/${user?.uid as string}`
  );
  if (!data) throw new Error("Erro em data !");

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
          className={({ isActive }) => (isActive ? "active" : "no-active")}
          end
        >
          Início
        </NavLink>
        <NavLink
          to={"/imoveis"}
          className={({ isActive }) => (isActive ? "active" : "no-active")}
        >
          Imóveis
        </NavLink>
        {user && (
          <NavLink
            to={"/add"}
            className={({ isActive }) => (isActive ? "active" : "no-active")}
          >
            Adicionar imóveis
          </NavLink>
        )}
      </S.containerOne>
      <S.containerTwo>
        {user && (
          <Link to={"/messages"} className={"msn"}>
            <FaRegBell />
            {data.length > 0 ? (
              <span className={"quanty-msn"}>{data.length}</span>
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
        {!user && <Login />}
      </S.containerTwo>
    </S.Nav>
  );
};

export default Nav;
