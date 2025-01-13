import { UseAuth } from "../../context/ContexLogin";
import Login from "../Login/Login";

const Header = () => {
  const { user } = UseAuth();

  return (
    <header>
      {user && <button>{user.displayName}</button>}
      {!user && <Login />}
      <nav>
        
      </nav>
    </header>
  );
};

export default Header;
