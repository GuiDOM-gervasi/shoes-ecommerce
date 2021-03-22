import React, { useState, useMemo, useEffect } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { LOGIN_USER } from "../graphql/mutations";
import { LOGOUT_USER } from "../graphql/queries";

const AuthContext = React.createContext(null);

export function AuthProvider(props) {
  const [user, setUser] = useState(false);
  const [userId, setUserId] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const completeUser = JSON.parse(localStorage.getItem("user"));
    console.log(completeUser);
    completeUser && completeUser.isAdmin
      ? setIsAdmin(completeUser.isAdmin)
      : setIsAdmin(false);
    completeUser && completeUser.id
      ? setUserId(completeUser.id)
      : setUserId(false);
  }, []);

  const [getLogin] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      if (data) {
        localStorage.setItem("access-token", `${data.loginUser.accessToken}`);
        localStorage.setItem("refresh-token", `${data.loginUser.refreshToken}`);
        localStorage.setItem("user", `${JSON.stringify(data.loginUser)}`);
        setUser(data.loginUser);
        setUserId(data.loginUser.id);
        data.loginUser.isAdmin && setIsAdmin(data.loginUser.isAdmin);
      }
    },
    onError:(error) => {
      console.log(error)
    }
  });

  const [logoutUser] = useLazyQuery(LOGOUT_USER, {
    onCompleted: (data) => {
      if (data) {
        localStorage.removeItem("access-token");
        localStorage.removeItem("refresh-token");
        localStorage.removeItem("user");
        setUser(false);
        setUserId(false);
        setIsAdmin(false);
      }
    },
    onError:(error)=>{
        console.log(error)
    }
  });

  function login(email: string, password: string, cb) {
    console.log("Login");
    getLogin({
      variables: {
        email,
        password,
      },
    });
    cb();
  }

  function logout(cb) {
    console.log("Logout");
    logoutUser();
    cb();
  }

  const value = useMemo(() => {
    return {
      user,
      userId,
      isAdmin,
      logout,
      login,
    };
  }, [user, userId, isAdmin]);

  return <AuthContext.Provider value={value} {...props} />;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("No papá, no seas boludo");
  }
  return context;
}
