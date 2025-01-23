import { AuthProvider } from "./context/LoginContext/ContexLogin";
import Router from "./routes/Routes";
import { GlobalStyles } from "./Styles/GlobalStyles";
import LayoutContext from "./context/LayoutContext/ContextLayout";

function App() {
  return (
    <>
      <AuthProvider>
        <LayoutContext>
          <Router />
          <GlobalStyles />
        </LayoutContext>
      </AuthProvider>
    </>
  );
}

export default App;
