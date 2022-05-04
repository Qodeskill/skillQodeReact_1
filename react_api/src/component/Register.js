import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", confirmPassword: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      alert("password not match");
      return;
    }
    const data = {
      username: this.state.username,
      password: this.state.password,
    };

    fetch("http://localhost:8082/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      })
      .catch((er) => {
        console.error(er);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username</label>
        <input
          type="email"
          required
          value={this.state.username}
          onChange={(e) => this.setState({ username: e.target.value })}
        />{" "}
        <br />
        <label>Password</label>
        <input
          type="password"
          required
          value={this.state.password}
          onChange={(e) => this.setState({ password: e.target.value })}
        />
        <br />
        <label>Confirm Password</label>
        <input
          type="password"
          required
          value={this.state.confirmPassword}
          onChange={(e) => this.setState({ confirmPassword: e.target.value })}
        />
        <br />
        <button>Register</button>
      </form>
    );
  }
}

export default Register;
