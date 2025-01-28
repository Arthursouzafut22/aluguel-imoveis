import { UseAuth } from "../../context/LoginContext/ContexLogin";
import * as S from "./Styles";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, setUser } = UseAuth();
  const navigate = useNavigate();

  const loGout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <S.Section>
      <S.Box>
        <h1>Seu perfil</h1>
        <div className="wrapper">
          {user?.photoURL && (
            <img src={user.photoURL} alt="imagem-user" />
          )}
          <div>
            <span>Nome:</span>
            <p>{user?.displayName}</p>
          </div>
          <div>
            <span>Email:</span>
            <p>{user?.email}</p>
            <S.Button onClick={loGout}>Sair da conta</S.Button>
          </div>
        </div>
      </S.Box>
    </S.Section>
  );
};

export default Profile;
