import React, { useState } from "react";
import {GoogleLogin } from "react-google-login"
import { useAuth } from "../../hooks/AuthProvider";
import { StyledLogin } from "./StyledLogin";
import { NavLink, useHistory } from "react-router-dom";


// import { validateChange, check, form } from "../../helpers/validationLogin";


export default function Login() {
  const { login, userId } = useAuth();
  const history = useHistory();
  const [form, setForm] = useState({
    email: "",
		password: "",
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
	
	const responseGoogle = async(response) => {
		try{
				login(response.profileObj.email,"hola",() => history.push("/"))

		}catch(e){
			console.log(e)
		}
		
	}
  
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
      <NavLink to="/forgotpassword">¿Olvidaste tu contraseña?</NavLink>
      </form>
			<GoogleLogin clientId="917872323404-58l60bosf4l28poog0r9bht4mm3683dl.apps.googleusercontent.com" onSuccess={responseGoogle} onFailure={responseGoogle} buttonText="Login with Gmail"/>
    </StyledLogin>
  );
}
