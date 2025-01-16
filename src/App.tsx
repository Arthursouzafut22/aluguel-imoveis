import { AuthProvider } from "./context/LoginContext/ContexLogin";
import Router from "./routes/Routes";
import { GlobalStyles } from "./Styles/GlobalStyles";

function App() {
  return (
    <>
      <AuthProvider>
        <Router />
        <GlobalStyles/>
      </AuthProvider>
    </>
  );
}

export default App;
