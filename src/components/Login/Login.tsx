import * as S from "./Styles";
import { auth } from "../../../Firebase/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { UseAuth } from "../../context/LoginContext/ContexLogin";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { setUser } = UseAuth();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <S.Button onClick={handleGoogleLogin}>
      <FaGoogle />
      Entrar ou Registrar
    </S.Button>
  );
};

export default Login;
