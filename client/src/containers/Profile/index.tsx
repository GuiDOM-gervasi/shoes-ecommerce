import React, { useState } from "react";
import { GET_USER_DETAIL } from "../../graphql/queries";
import { useQuery, useMutation } from "@apollo/client";
import { StyledProfile } from "./StyledProfile";
import { PASSWORD_RESET } from "../../graphql/mutations";
import { useAuth } from "../../hooks/AuthProvider";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

export default function Profile() {
  const { userId } = useAuth();
  const [inProfile, setInProfile] = useState(true);
  const [resetPassword] = useMutation(PASSWORD_RESET);
  const { data, loading, error } = useQuery(GET_USER_DETAIL, {
    variables: { id: userId },
  });

  if (loading) return <Loader />;
  if (error) return <span> Error! {error.message} </span>;

  const user = data.user;
  const handleNav = () => {
    setInProfile(!inProfile);
  };

  const handleClick = () => {
    try {
      resetPassword({ variables: { email: user.email } });
      const modal: { style: { display: string } } = document.getElementById(
        "success"
      );
      modal.style.display = "flex";
      setTimeout(() => (modal.style.display = "none"), 5000);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledProfile>
      <div id="success" className="successModal">
        <i className="fas fa-check"></i>
        <h5>Success</h5>
      </div>
      <div className="profile_container">
        <h1>{`${user.firstName} ${user.lastName}`}</h1>
        <h3>
          <label>Username:</label> {user.userName}
        </h3>
        <h5>
          <label>Email:</label> {user.email}
        </h5>
        <button onClick={handleClick} className="boton">
          Change password
        </button>
        <Link to="/history" className="boton history_link">
          Order history <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </StyledProfile>
  );
}
