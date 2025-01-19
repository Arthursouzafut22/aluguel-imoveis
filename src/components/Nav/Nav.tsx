import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/image/logo-white.webp";
import Login from "../Login/Login";
import { FaRegBell } from "react-icons/fa";
import { UseAuth } from "../../context/LoginContext/ContexLogin";
import ModalUser from "./ModalUser/ModalUser";
import React from "react";

const Nav = () => {
  const { user } = UseAuth();
  const [activeModal, setActiveModal] = React.useState<boolean>(false);

  return (
    <nav>
      <div className="container-1">
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
      </div>
      <div className="container-2">
        {user && (
          <Link to={"/messages"}>
            <FaRegBell />
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
            {activeModal && <ModalUser />}
          </div>
        )}
        {!user && <Login />}
      </div>
    </nav>
  );
};

export default Nav;
