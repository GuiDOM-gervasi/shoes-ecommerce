import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { StyledProfile } from "./StyledProfile";
import { PASSWORD_RESET } from "../../graphql/mutations";

export default function Profile() {
  const [inProfile, setInProfile] = useState(true);
  const [resetPassword] = useMutation(PASSWORD_RESET);

  const handleNav = () => {
    setInProfile(!inProfile);
  };

  const handleClick = () => {
    resetPassword({ variables: { email: "asd" } });
    const modal: { style: { display: string } } = document.getElementById(
      "success"
    );
    modal.style.display = "flex";
    setTimeout(() => (modal.style.display = "none"), 5000);
  };

  return (
    <StyledProfile>
      <div id="success" className="successModal">
        <i className="fas fa-check"></i>
        <h5>Success</h5>
      </div>
      {inProfile ? (
        <div className="profile_container">
          <h1>Julian Ramirez</h1>
          <h3>
            <label>Username:</label> julignacio{" "}
          </h3>
          <h5>
            <label>Email:</label> ignaciojulianramirez@gmail.com{" "}
          </h5>
          <button onClick={handleClick} className="boton">
            Change password
          </button>
        </div>
      ) : (
        <div className="historial_container"></div>
      )}
    </StyledProfile>
  );
}
