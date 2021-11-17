import { User } from "@firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  appSignInWithEmailAndPassword,
  logout,
  getUser as getCurrentUser,
  detectChange,
} from "../utils/firebaseAuth";

function login(email: string, password: string) {
  return appSignInWithEmailAndPassword(email, password);
}

function signOut() {
  return logout();
}
function getUser() {
  return getCurrentUser();
}

interface ContextInterface {
  currentUser: User | null;
  getUser: Function;
  login: Function;
  signOut: Function;
}

const initialContext = {
  currentUser: null,
  getUser: () => null,
  login: () => null,
  signOut: () => null,
};
const AuthContext = createContext<ContextInterface>(initialContext);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: React.PropsWithChildren<{}>) {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);

  // function isAdmin() {
  //     return auth.currentUser.getIdTokenResult()
  //         .then((idTokenResult) => {
  //             if (!!idTokenResult.claims.admin) {
  //                 return true
  //             } else {
  //                 return false
  //             }
  //         })
  // }

  useEffect(() => {
    const unsubscribe = detectChange((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser: currentUser || null,
    getUser,
    login,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
