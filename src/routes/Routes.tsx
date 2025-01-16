import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Favorites from "../pages/Favorites/Favorites";
import Imoveis from "../pages/Imoveis/Imoveis";
import ToAddImoveis from "../pages/ToAddImoveis/ToAddImoveis";
import Messages from "../pages/Messages/Messages";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imoveis" element={<Imoveis />} />
        <Route path="/add" element={<ToAddImoveis />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
