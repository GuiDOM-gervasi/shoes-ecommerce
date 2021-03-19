import React from "react";
import { useLazyQuery } from "@apollo/client";
import { LOGIN_USER } from "../../graphql/queries";
export default function Nav() {
  const [loginUser,{ data }] = useLazyQuery(
    LOGIN_USER
  );

  const handleClick = () =>{
    const email = "nada@gmail.com";
    const password = "12345";
    loginUser({
      variables: {
        email,
        password,
      },
    })
  }

  return (
    <div>
      <div onClick={handleClick}>{data ? <div>Logout</div> : <div>Login</div>}</div>    </div>
  );
}