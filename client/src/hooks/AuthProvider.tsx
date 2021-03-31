import React, { useState, useMemo, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, LOGOUT_USER } from "../graphql/mutations";
import { LocalPersistence, METHODS } from "../helpers/localPersistence";
import Swal from "sweetalert2";

const AuthContext = React.createContext(null);

export function AuthProvider(props) {
  const existeLocal = JSON.parse(localStorage.getItem("cart"));
  if (!existeLocal) {
    localStorage.setItem("cart", JSON.stringify({ guess: true, items: [] }));
  }
  const [user, setUser] = useState(false);
  const [userId, setUserId] = useState("0");
  const [isAdmin, setIsAdmin] = useState(false);

  const [getLogin] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      if (data) {
        LocalPersistence(
          "access-token",
          METHODS.write,
          data.loginUser.accessToken
        );
        LocalPersistence(
          "refresh-token",
          METHODS.write,
          data.loginUser.refreshToken
        );
        LocalPersistence("user", METHODS.write, data.loginUser);
        setUser(data.loginUser);
        setUserId(data.loginUser.id);
        data.loginUser.isAdmin && setIsAdmin(data.loginUser.isAdmin);
      }
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Bad login",
        text: "Check your email and password combination.",
      });
      return error;
    },
  });

  const [logoutUser] = useMutation(LOGOUT_USER, {
    onCompleted: (data) => {
      if (data) {
        LocalPersistence("access-token", METHODS.remove);
        LocalPersistence("refresh-token", METHODS.remove);
        LocalPersistence("user", METHODS.remove);
        setUser(false);
        setUserId("0");
        setIsAdmin(false);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    LocalPersistence("user", METHODS.get).then((completeUser) => {
      completeUser && completeUser.isAdmin
        ? setIsAdmin(completeUser.isAdmin)
        : setIsAdmin(false);
      completeUser && completeUser.id
        ? setUserId(completeUser.id)
        : setUserId("0");
    });
  }, []);

  function login(email: string, password: string, cb) {
    getLogin({
      variables: {
        email,
        password,
      },
    }).then((e) => {
      if (e) {
        cb();
        Swal.fire({
          icon: "success",
          text: "Good to see you again!",
          title: "Welcome Toni",
        })
      }
    });
  }

  function logout(cb) {
    logoutUser({
      variables: {
        id: userId,
      },
    }).then(() => {
      cb();
    });
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
    throw new Error("Not have use in this component");
  }
  return context;
}
