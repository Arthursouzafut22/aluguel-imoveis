import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { UseLayout } from "../../context/LayoutContext/ContextLayout";

const Layout = ({ children }: { children?: ReactNode }) => {
  const { id } = UseLayout();
  const location = useLocation();
  const visible =
    location.pathname === `/imoveis/${id}` ||
    location.pathname === `/edit/${id}`;

  return <>{!visible && children}</>;
};

export default Layout;
