import { AuthProvider } from "./context/LoginContext/ContexLogin";
import Router from "./routes/Routes";
import { GlobalStyles } from "./Styles/GlobalStyles";
import LayoutContext from "./context/LayoutContext/ContextLayout";
import FavoritesContext from "./context/FavoritesContext/FavoritesContext";
import Toast from "./components/Toast/Toast";

function App() {
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
}

export default App;
