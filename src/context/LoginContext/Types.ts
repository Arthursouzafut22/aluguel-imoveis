export type FirebaseUser = {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
};

export type AuthContextType = {
  user: FirebaseUser | null;
  setUser: React.Dispatch<React.SetStateAction<FirebaseUser | null>>;
};
