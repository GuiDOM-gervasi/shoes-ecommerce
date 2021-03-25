import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { StyledAddUser } from "./StyledAddUser";
import { ADD_USER } from "../../graphql/mutations";
import { validateChange, check, form } from "../../helpers/validationUser";
import { useHistory } from "react-router-dom"
interface AddUserAttributes {
  className: String;
}

export default function AddUser({ className }: AddUserAttributes) {
  const history = useHistory();
  const [
    createUser,
    { error: errorMutationUser },
  ] = useMutation(ADD_USER);


  const [form, setForm] = useState<form>({
    firstName: "",
    lastName: "",
    userName: "",
    isAdmin: false,
    email: "",
    password: "",
    nlsuscribe: false,
    error: true,
  });

  if (errorMutationUser) {
    console.log(errorMutationUser);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { firstName, lastName, userName, isAdmin, email, password, nlsuscribe } = form;
    try {
      await createUser({
        variables: {
          firstName,
          lastName,
          userName,
          isAdmin,
          email,
          password,
          nlsuscribe: nlsuscribe && true,
        },
      }).then(() => history.push("/login"))
    } catch (err) {
      console.log(err);
      return;
    }
    setForm({
      firstName: "",
      lastName: "",
      userName: "",
      isAdmin: false,
      email: "",
      password: "",
      nlsuscribe: false,
      error: true,
    });
  };

  const handleChange = async (e: any) => {
    const error = check(e, form);
    setForm(validateChange(e, form, error));
  };

  return (
    <StyledAddUser>
      <form onSubmit={handleSubmit}>
        <div className="div_firstName">
          <input className="register"
            type="text"
            name="firstName"
            onChange={handleChange}
            placeholder="Nombre"
            value={form.firstName}
          />
          <span className="span_firstName"></span>
        </div>
        <div className="div_lastName">
          <input className="register"
            type="text"
            name="lastName"
            onChange={handleChange}
            placeholder="Apellido"
            value={form.lastName}
          />
          <span className="span_lastName"></span>
        </div>
        <div className="div_userName">
          <input className="register"
            type="text"
            name="userName"
            onChange={handleChange}
            placeholder="Nombre de usuario"
            value={form.userName}
          />
          <span className="span_userName"></span>
        </div>
        <div className="div_email">
          <input className="register"
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="email@direccion.com"
            value={form.email}
          />
          <span className="span_email"></span>
        </div>
        <div className="div_password">
          <input className="register"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="password"
            value={form.password}
          />
          <span className="span_password"></span>
        </div>
        <div className="div_nlsuscribe">
          <input
            type="checkbox"
            name="nlsuscribe"
            onChange={handleChange}
          />
          <label htmlFor="nlsuscribe">Recibir newsletter</label>
          <span className="span_nlsuscribe"></span>
        </div>

        <input className="boton" type="submit" value="Registrarse" disabled={form.error} />
      </form>
    </StyledAddUser>
  );
}
