import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Favorites from "../pages/Favorites/Favorites";
import Imoveis from "../pages/Imoveis/Imoveis";
import ToAddImoveis from "../pages/ToAddImoveis/ToAddImoveis";
import Messages from "../pages/Messages/Messages";
import WrapperRent from "../components/Header/WrapperRent";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const routes = ["/add", "/messages", "/profile", "/favorites"];
  const include = routes.includes(location.pathname);

  return (
    <>
      <Header>{!include && <WrapperRent />}</Header>
      {children}
    </>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imoveis" element={<Imoveis />} />
          <Route path="/add" element={<ToAddImoveis />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
