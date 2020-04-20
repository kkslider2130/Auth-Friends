import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Navbar from "./Navbar";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then(res => {
        window.localStorage.setItem("token", res.data.payload);
        this.props.history.push("/user");
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <>
        <Navbar />
        <div className="login-fom">
          <form onSubmit={this.login}>
            <h1>Log In</h1>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button>Log In</button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
