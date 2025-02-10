import FavoritesContext from "../../context/FavoritesContext/FavoritesContext";
import LayoutContext from "../../context/LayoutContext/ContextLayout";
import { AuthProvider } from "../../context/LoginContext/ContexLogin";
import Router from "../../routes/Routes";
import { GlobalStyles } from "../../Styles/GlobalStyles";
import Toast from "../Toast/Toast";
import * as S from "../../Styles/GlobalStyles";
import PageContext from "../../context/PageContext/PageContext";

const Wrapper = () => {
  return (
    <>
      <S.Container>
        <PageContext>
          <AuthProvider>
            <FavoritesContext>
              <LayoutContext>
                <Router />
                <Toast />
                <GlobalStyles />
              </LayoutContext>
            </FavoritesContext>
          </AuthProvider>
        </PageContext>
      </S.Container>
    </>
  );
};

export default Wrapper;
