import React, { useState, useEffect } from "react";
import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { StyledLogin } from "./StyledLogin";
import { LOGIN_USER } from "../../graphql/queries";
// import { validateChange, check, form } from "../../helpers/validationLogin";


export default function Login() {
  const [getLogin, { data: dataLogin, loading: loadingLogin, error: errorLogin, called:calledLogin }] = useLazyQuery(LOGIN_USER);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  useEffect (()=>{
    if (loadingLogin) {
      console.log("LOADING")};
    if (dataLogin) {
      dataLogin.loginUser?console.log("DATOS CORRECTOS"):console.log("DATOS INCORRECTOS");
    }
  }, [calledLogin && loadingLogin])
  function handleSubmit(e) {
    e.preventDefault();
    console.log("FORM", form.email, form.password)
    let { email, password, } = form;
    getLogin({
      variables: {
        email,
        password
      }
    })
  }

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };
  return (
    <StyledLogin>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="email@direccion.com"
        />

        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="password"
        />

        <input type="submit" value="Iniciar sesión" />
      </form>
    </StyledLogin>
  );
}
