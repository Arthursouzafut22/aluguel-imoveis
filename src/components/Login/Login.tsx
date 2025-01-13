import { auth } from "../../../Firebase/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { UseAuth } from "../../context/ContexLogin";

const Login = () => {
  const { setUser } = UseAuth();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
      console.log("Usuário logado:", user);
      alert(`Bem-vindo, ${user.displayName}!`);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Entrar com Google</button>
    </div>
  );
};

export default Login;
