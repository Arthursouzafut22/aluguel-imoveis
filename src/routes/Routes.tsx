import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Favorites from "../pages/Favorites/Favorites";
import Imoveis from "../pages/Imoveis/Imoveis";
import ToAddImoveis from "../pages/ToAddImoveis/ToAddImoveis";
import Messages from "../pages/Messages/Messages";
import Footer from "../components/Footer/Footer";
import ImovelInformation from "../pages/ImovelInformation/ImovelInformation";
import SearchProperty from "../pages/SearchProperty/SearchProperty";
import MyProperty from "../pages/My-property/My-property";
import Layout from "./Layout";
import Edit from "../pages/Edit/Edit";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imoveis" element={<Imoveis />} />
          <Route path="/imoveis/:id" element={<ImovelInformation />} />
          <Route path="/add" element={<ToAddImoveis />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/search" element={<SearchProperty />} />
          <Route path="/my-property" element={<MyProperty />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
