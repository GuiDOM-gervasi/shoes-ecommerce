import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { StyledLogin } from "./StyledLogin";
import { LOGIN_USER } from "../../graphql/mutations";
// import { validateChange, check, form } from "../../helpers/validationLogin";


export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [getLogin] = useMutation(
  LOGIN_USER,
  {
  onCompleted: (data) =>  {
      if (data) {
        localStorage.setItem('access-token', `${data.loginUser.accessToken}`);
        localStorage.setItem('refresh-token',`${data.loginUser.refreshToken}`);
      }
    }
  }
);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("FORM", form.email, form.password)
    let { email, password} = form;
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
