import React, { useState } from "react";
import loginImg from "../../Assets/login.png";
import axios from "axios";
import { useHistory } from "react-router";

export function Login({ setToken }) {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleChange = (event, type) => {
    if (type === "email") {
      setEmail(event.target.value);
    }
    if (type === "password") {
      setPassword(event.target.value);
    }
  };

  const handdleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    axios.post(`http://localhost:8080/login`, user).then((res) => {

      setToken(res.data);
      history.push("/dashboard");
    });
    
  };
  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="app"/>
        </div>
        <form className="form" onSubmit={handdleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => handleChange(e, "email")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => handleChange(e, "password")}
            />
          </div>
          <div className="footer">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
