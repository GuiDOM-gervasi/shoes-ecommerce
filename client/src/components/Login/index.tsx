import React, { useState } from "react";
import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { StyledLogin } from "./StyledLogin";
import { GET_LOGIN } from "../../graphql/queries";
// import { validateChange, check, form } from "../../helpers/validationLogin";


export default function Login() {
  const [getLogin, { data: dataLogin, loading: loadingLogin, error: errorLogin }] = useLazyQuery(GET_LOGIN);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

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

    if (!loadingLogin && dataLogin) {
      dataLogin.login ? console.log("Datos correctos", dataLogin) : console.log("ERROR", dataLogin)
    }

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

        <input type="submit" value="Registrarse" />
      </form>
    </StyledLogin>
  );
}
