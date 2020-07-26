import React from "react";
import loginImg from "../../Assets/login.png";
import axios from "axios";

export class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event, type) => {
    if (type === 'email') {
      this.setState({ email: event.target.value });
    }
    if (type === 'password') {
      this.setState({ password: event.target.value });

    }
  };

  handdleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    axios.post(`http://localhost:8080/login`, user ).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <form className="form" onSubmit={this.handdleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={(e) => this.handleChange(e, 'email')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => this.handleChange(e, 'password')}              />
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
}
