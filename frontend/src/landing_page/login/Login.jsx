import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/auth/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      setMessage(res.data.message || "Login successful");
      console.log(res.data);
    } catch (err) {
      console.log(err);

      setMessage(
        err.response?.data?.message ||
          "Something went wrong while logging in"
      );
    }
  };

  return (
    <div className="container p-5 text-center">
      <h1>Login to RCube</h1>

      <p>Enter your account details.</p>

      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default Login;