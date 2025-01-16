import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { FirebaseUser } from "./Types";

type AuthContextType = {
  user: FirebaseUser | null;
  setUser: React.Dispatch<React.SetStateAction<FirebaseUser | null>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<FirebaseUser | null>(() => {
    const getUser = localStorage.getItem("user");
    return getUser ? JSON.parse(getUser) : null;
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
