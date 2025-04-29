import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import Data from "../Data";
import "../App.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      fullname: "",
      isUserLogin: false,
      isAdminLogin: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
  
    let isUserExist = Data.find((user) => user.username === username);
  
    if (isUserExist) {
      if (password === isUserExist.password) {
        if (isUserExist.role === "Admin") {
          localStorage.setItem(
            "AdminToken",
            "AsiaToJapanAdminhbchsdbchsdbjcxjcbdshjoeuwyru"
          );
          this.setState({
            isAdminLogin: true,
            fullname: isUserExist.firstName + " " + isUserExist.lastName,
          });
        } else if (isUserExist.role === "User") {
          localStorage.setItem(
            "UserToken",
            "AsiaToJapanUserhbchsdbchsdbjcxjcbdshjoeuwyru"
          );
          this.setState({
            isUserLogin: true,
            fullname: isUserExist.firstName + " " + isUserExist.lastName,
          });
        }
      } else {
        alert("Wrong Password");
      }
    } else {
      alert("User Not exist");
    }
  }
  
  render() {
    if (this.state.isAdminLogin) {
      return <Navigate to="/admin" state={{ fullname: this.state.fullname }} />;
    }
  
    if (this.state.isUserLogin) {
      return <Navigate to="/user" state={{ fullname: this.state.fullname }} />;
    }

    return (
      <>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              value={this.state.username}
              placeholder="Enter Username"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Enter Password"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="mt-4">
              <h6>Admin Credentials:</h6>
              <p><strong>Username:</strong> admin@test.com</p>
              <p><strong>Password:</strong> admin</p>

              <h6>User Credentials:</h6>
              <p><strong>Username:</strong> user@test.com</p>
              <p><strong>Password:</strong> user</p>
            </div>
      </>
    );
  }
}

export default Login;
