import Header from "./components/Header/Header";
import { AuthProvider } from "./context/ContexLogin";


function App() {
  return (
    <>
      <AuthProvider>
        <Header />
      </AuthProvider>
    </>
  );
}

export default App;
