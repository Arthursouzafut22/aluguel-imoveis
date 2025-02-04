import FavoritesContext from "../../context/FavoritesContext/FavoritesContext";
import LayoutContext from "../../context/LayoutContext/ContextLayout";
import { AuthProvider } from "../../context/LoginContext/ContexLogin";
import Router from "../../routes/Routes";
import { GlobalStyles } from "../../Styles/GlobalStyles";
import Toast from "../Toast/Toast";

const Wrapper = () => {
  return (
    <>
      <AuthProvider>
        <FavoritesContext>
          <LayoutContext>
            <Router />
            <Toast />
            <GlobalStyles />
          </LayoutContext>
        </FavoritesContext>
      </AuthProvider>
    </>
  );
};

export default Wrapper;
