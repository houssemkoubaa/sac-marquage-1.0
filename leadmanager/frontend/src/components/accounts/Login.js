import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    consol.log("submit");
  };
  onChange = (e) => this.setState({ [e.target.name]: [e.target.value] });
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Don't have an account?<Link to="/Register">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;