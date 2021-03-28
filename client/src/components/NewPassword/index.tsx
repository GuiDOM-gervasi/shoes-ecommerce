import React, { useState } from "react";
import { StyledNewPassword } from "./StyledNewPassword";
import { useHistory } from "react-router-dom";
import { UPDATE_PASSWORD } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";


export default function NewPassword({match}) {

  const history = useHistory();
  const token = match.params.token;

  const [updatePassword] = useMutation(UPDATE_PASSWORD);

  const [form, setForm] = useState({
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let { password } = form;
    try{
      await updatePassword({variables:{password, token}})
      .then(() => history.push("/login"))
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
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Enter your new password..."
        />
        <input className="boton" type="submit" value="Modify Password" />
      </form>
    </StyledNewPassword>
  );
}
