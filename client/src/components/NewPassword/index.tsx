import React, { useState } from "react";
import { useAuth } from "../../hooks/AuthProvider";
import { StyledNewPassword } from "./StyledNewPassword";
import { useHistory } from "react-router-dom";
import { UPDATE_PASSWORD } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";


export default function NewPassword({match}) {


  const userId = match.params.userId;
  const token = match.params.token;

  const [
    updatePassword,
    { error: errorPasswordReset, data,loading },
  ] = useMutation(UPDATE_PASSWORD);

  const [form, setForm] = useState({
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let { password } = form;
    try{
      await updatePassword({variables:{userId, password, token}});
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
    <StyledNewPassword>
      <form onSubmit={handleSubmit}>
        <input
          className="login"
          type="text"
          name="password"
          onChange={handleChange}
          placeholder="Enter your new password..."
        />
        <input className="boton" type="submit" value="Modify Password" />
      </form>
    </StyledNewPassword>
  );
}
