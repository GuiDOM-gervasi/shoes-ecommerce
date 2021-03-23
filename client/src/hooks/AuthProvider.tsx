import React, { useState, useMemo, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, LOGOUT_USER } from "../graphql/mutations";

const AuthContext = React.createContext(null);

export function AuthProvider(props) {
  const [user, setUser] = useState(false);
  const [userId, setUserId] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const completeUser = JSON.parse(localStorage.getItem("user"));
    completeUser && completeUser.isAdmin
      ? setIsAdmin(completeUser.isAdmin)
      : setIsAdmin(false);
    completeUser && completeUser.id
      ? setUserId(completeUser.id)
      : setUserId(0);
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

  const [logoutUser] = useMutation(LOGOUT_USER, {
    onCompleted: (data) => {
      if (data) {
        localStorage.removeItem("access-token");
        localStorage.removeItem("refresh-token");
        localStorage.removeItem("user");
        setUser(false);
        setUserId(0);
        setIsAdmin(false);
      }
    },
    onError:(error)=>{
        console.log(error)
    },
  });

  function login(email: string, password: string, cb) {
    console.log("Login");
  
    getLogin({
      variables: {
        email,
        password,
      },
    }).then(()=>{
      cb();
    })
  }

  function logout(cb) {
    logoutUser({
      variables:{
        id: userId
      }
    })
    .then(()=>{
        cb();
      })
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
