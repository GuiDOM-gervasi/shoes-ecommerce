import React, { useState } from "react";
import { useAuth } from "../../hooks/AuthProvider";
import { StyledPasswordReset } from "./StyledPasswordReset";
import { useHistory } from "react-router-dom";
import { PASSWORD_RESET } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";


export default function PasswordReset() {

  const [
    resetPassword,
    { error: errorPasswordReset, data,loading },
  ] = useMutation(PASSWORD_RESET);

  const [form, setForm] = useState({
    email: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let { email } = form;
    try{
      await resetPassword({variables:{email}});
      alert('Check your email to change the password')
    }
    catch (err) {
      console.log(err);
      return;
    }
  }

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StyledPasswordReset>
      <form onSubmit={handleSubmit}>
        <input
          className="login"
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Enter your email address..."
        />
        <input className="boton" type="submit" value="Reset Password" />
      </form>
    </StyledPasswordReset>
  );
}
