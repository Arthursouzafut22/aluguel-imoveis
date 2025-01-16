import { UseAuth } from "../../../context/LoginContext/ContexLogin";
import * as S from "./Sttyles";
import { useNavigate } from "react-router-dom";

const ModalUser = () => {
  const { setUser } = UseAuth();
  const navigate = useNavigate();

  const loGout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <S.Modal>
      <button onClick={() => navigate("/profile")}>Perfil</button>
      <button onClick={() => navigate("/favorites")}>Favoritos</button>
      <button onClick={loGout}>Sair</button>
    </S.Modal>
  );
};

export default ModalUser;
