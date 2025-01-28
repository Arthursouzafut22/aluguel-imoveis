import { UseAuth } from "../../../context/LoginContext/ContexLogin";
import * as S from "./Sttyles";
import { useNavigate } from "react-router-dom";

const ModalUser = ({ closeModal }: { closeModal: () => void }) => {
  const { setUser } = UseAuth();
  const navigate = useNavigate();

  const loGout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const navigateRoutes = (router: string) => {
    navigate(router);
    closeModal();
  };

  return (
    <S.Modal>
      <button onClick={() => navigateRoutes("/profile")}>Perfil</button>
      <button onClick={() => navigateRoutes("/favorites")}>Favoritos</button>
      <button onClick={loGout}>Sair</button>
    </S.Modal>
  );
};

export default ModalUser;
