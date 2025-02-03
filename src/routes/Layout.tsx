import Header from "../components/Header/Header";
import WrapperRent from "../components/Header/WrapperRent";
import { useLocation } from "react-router-dom";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const routes = [
    "/add",
    "/messages",
    "/profile",
    "/favorites",
    "/my-property",
    "/edit",
  ];
  const include = routes.includes(location.pathname);

  return (
    <>
      <Header>{!include && <WrapperRent />}</Header>
      {children}
    </>
  );
};

export default Layout;
