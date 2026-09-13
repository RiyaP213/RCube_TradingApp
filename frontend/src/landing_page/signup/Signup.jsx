import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/auth/signup",
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      setMessage(res.data.message || "Signup successful");
      console.log(res.data);
    } catch (err) {
      console.log(err);

      setMessage(
        err.response?.data?.message ||
          "Something went wrong while signing up"
      );
    }
  };

  return (
    <div className="container p-5 text-center">
      <h1>Create an RCube Account</h1>

      <p>Sign up to access the RCube trading platform.</p>

      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

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
          Sign Up
        </button>
      </form>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default Signup;