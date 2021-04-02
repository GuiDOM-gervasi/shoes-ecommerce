import React, { useState } from "react";
import {GoogleLogin } from "react-google-login"
import { useAuth } from "../../hooks/AuthProvider";
import { StyledLogin } from "./StyledLogin";
import { NavLink, useHistory } from "react-router-dom";
import { validateChange, check, form } from "../../helpers/validationLogin";


export default function Login() {
  const { login, userId } = useAuth();
  const history = useHistory();
  const [form, setForm] = useState({
    email: "",
    password: "",
    error: true,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let { email, password} = form;
    login(email,password, () => history.push("/"))
  }

  const handleChange = (e: any) => {
    const error = check(e, form);
    setForm(validateChange(e, form, error));
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
          placeholder="email@address.com"
        />
        <span className="span_email"></span>
        <input className="login"
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="password"
        />
        <span className="span_password"></span>
        <input className="boton" type="submit" value="Sign in" disabled={form.error}/>
      <NavLink to="/forgotpassword">Forgot your password?</NavLink>
      </form>
			<GoogleLogin clientId="917872323404-58l60bosf4l28poog0r9bht4mm3683dl.apps.googleusercontent.com" onSuccess={responseGoogle} onFailure={responseGoogle} buttonText="Login with Gmail"/>
    </StyledLogin>
  );
}
