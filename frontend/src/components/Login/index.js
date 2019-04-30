import React, { useState } from "react";
import { isEmail } from "validator";
import { when } from "ramda";
import { validateFormField } from "../../utils/validateFormField";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
    valid: false
  };

  const [email, setEmail] = useState(initialState.email);
  const [password, setPassword] = useState(initialState.password);
  const [valid, setValid] = useState(initialState.valid);

  const handleEmailChange = e => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
    validateFormField(value, []);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-6 offset-md-3">
          <h3 className="mb-4">Login</h3>

          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
              <div className="invalid-feedaback">Email is wrong</div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
