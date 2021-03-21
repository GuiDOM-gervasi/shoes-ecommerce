import React, { useState } from "react";
import { useAuth } from "../../hooks/AuthProvider";
import { StyledLogin } from "./StyledLogin";
import { useHistory } from "react-router-dom";

// import { validateChange, check, form } from "../../helpers/validationLogin";


export default function Login() {
  const { login } = useAuth();
  const history = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let { email, password} = form;
    login(email,password, () => history.push("/"))
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
