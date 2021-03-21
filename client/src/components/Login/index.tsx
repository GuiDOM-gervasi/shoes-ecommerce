import React, { useState } from "react";
import { useAuth } from "../../hooks/AuthProvider";
import { StyledLogin } from "./StyledLogin";

// import { validateChange, check, form } from "../../helpers/validationLogin";


export default function Login() {
  const { login } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let { email, password} = form;
    login(email,password)
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
        <input className="login"
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="email@direccion.com"
        />

        <input className="login"
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="password"
        />
        <input className="boton" type="submit" value="Iniciar sesión" />
      </form>
    </StyledLogin>
  );
}
