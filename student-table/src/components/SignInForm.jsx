// src/components/SignInForm.jsx
import React, { useState } from "react";

function SignInForm({ onSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo: giả lập kiểm tra email/password
    if (email === "admin@example.com" && password === "123456") {
      // Nếu đúng, gọi callback
      onSignIn();
    } else {
      alert("Email hoặc mật khẩu sai!");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ minWidth: "300px", maxWidth: "400px" }}>
        <h3 className="card-title text-center mb-3">Sign In</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
