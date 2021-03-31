import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useMutation } from "@apollo/client";
import { StyledAddUser } from "./StyledAddUser";
import { ADD_USER } from "../../graphql/mutations";
import { validateChange, check, form } from "../../helpers/validationUser";
import { useHistory } from "react-router-dom"
interface AddUserAttributes {
	className: String;
}

export default function AddUser({ className }: AddUserAttributes) {
	const history = useHistory();
	const [createUser, { error: errorMutationUser }] = useMutation(ADD_USER);

  const [form, setForm] = useState<form>({
    firstName: "",
    lastName: "",
    userName: "",
    isAdmin: false,
    email: "",
    password: "",
    nlsuscribe: false,
		isGmail:false,
    error: true,
  });

  if (errorMutationUser) {
    console.log(errorMutationUser);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { firstName, lastName, userName, isAdmin, email, password, nlsuscribe, isGmail} = form;
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
					isGmail:isGmail,
        },
      }).then(
        () => {
          alert("Te registraste correctamente")
          history.push("/login")})
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
      // city: "",
      // country: "",
      // street:"",
      // addressnumber:"",
      // postcode:"",
      nlsuscribe: false,
			isGmail:false,
      error: true,
    });
  };

	const handleChange = async (e: any) => {
		const error = check(e, form);
		setForm(validateChange(e, form, error));
	};

	const responseGoogle = async (response) => {
		try {
			setForm({
				firstName: response.profileObj.givenName,
				lastName: response.profileObj.familyName,
				userName: response.profileObj.name,
				isAdmin: false,
				email: response.profileObj.email,
        password: "",
        // city: "",
        // country: "",
        // street:"",
        // addressnumber:"",
        // postcode:"",
				nlsuscribe: false,
				isGmail: true,
				error: false,
			});
		} catch (e) {
			alert("Su cuenta de Google no es Valida");
		}
	};

  return (
    <StyledAddUser>
      <form onSubmit={handleSubmit}>
        <div className="div_firstName">
          <input className="register"
            type="text"
            name="firstName"
            onChange={handleChange}
            placeholder="First Name"
            value={form.firstName}
          />
          <span className="span_firstName"></span>
        </div>
        <div className="div_lastName">
          <input className="register"
            type="text"
            name="lastName"
            onChange={handleChange}
            placeholder="Last Name"
            value={form.lastName}
          />
          <span className="span_lastName"></span>
        </div>
        <div className="div_userName">
          <input className="register"
            type="text"
            name="userName"
            onChange={handleChange}
            placeholder="Username"
            value={form.userName}
          />
          <span className="span_userName"></span>
        </div>
        <div className="div_email">
          <input className="register"
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="email@address.com"
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
        {/* <div className="div_country">
          <select name="country" onChange={handleChange}>
            <option>CHOOSE YOUR COUNTRY</option>
            {countries.map(country => (
              <option key={country.value} value={country.text}>{country.text}</option>
            ))}
          </select>
          <span className="span_country"></span>
        </div>
        <div className="div_city">
          <input className="register"
            type="text"
            name="city"
            onChange={handleChange}
            placeholder="City"
            value={form.city}
          />
          <span className="span_city"></span>
        </div>
        <div className="div_street">
          <input className="register"
            type="text"
            name="street"
            onChange={handleChange}
            placeholder="Street name"
            value={form.street}
          />
          <span className="span_street"></span>
        </div>
        <div className="div_addressnumber">
          <input className="register"
            type="number"
            min="0"
            name="addressnumber"
            onChange={handleChange}
            value={form.addressnumber}
          />
          <label htmlFor="addressnumber">Street Number</label>
          <span className="span_addressnumber"></span>
        </div>
        <div className="div_postcode">
          <input className="register"
            type="number"
            min="0"
            name="postcode"
            onChange={handleChange}
            value={form.postcode}
          />
          <label htmlFor="postcode">Postcode</label>
          <span className="span_postcode"></span>
        </div> */}
        <div className="div_nlsuscribe">
          <input
            type="checkbox"
            name="nlsuscribe"
            onChange={handleChange}
          />
          <label htmlFor="nlsuscribe">Subscribe to newsletter</label>
          <span className="span_nlsuscribe"></span>
        </div>

				<input
					className="boton"
					type="submit"
					value="Register"
					disabled={form.error}
				/>
				<GoogleLogin
					clientId="917872323404-58l60bosf4l28poog0r9bht4mm3683dl.apps.googleusercontent.com"
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					buttonText="Register with Gmail"
					className='google_login'
					/>
			</form>
		</StyledAddUser>
	);
}
