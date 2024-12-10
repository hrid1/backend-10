import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // FOR SIGN UP
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // FOR SIGN IN
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // SET USER
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unSubscribe();
  }, []);

  //   SIGNOUT USER
  const signOutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    createUser,
    signInUser,
    user,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
