import React from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    if (email === "shubham@gmail.com" && password === "123456") {
      localStorage.setItem("access", true);
      window.location.href = "/";
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container">
      <main className="signup-container">
        <h1 className="heading-primary">
          Log in<span className="span-blue">.</span>
        </h1>
        <p className="text-mute">
          Enter your credentials to access your account.
        </p>
        <div className="login-wrapper"></div>
        <form className="signup-form" onSubmit={handleLogin}>
          <label className="inp">
            <input
              type="email"
              className="input-text"
              placeholder="&nbsp;"
              autoFocus="true"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="label">Email</span>
            <span className="input-icon">
              <i className="fa-solid fa-envelope"></i>
            </span>
          </label>
          <label className="inp">
            <input
              type="password"
              className="input-text"
              placeholder="&nbsp;"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <span className="label">Password</span>
            <span className="input-icon input-icon-password" data-password>
              <i className="fa-solid fa-eye"></i>
            </span>
          </label>
          <button className="btn btn-login">Login</button>
        </form>
        <p className="text-mute">
          Not a member? <a href="$">Sign up</a>
        </p>
      </main>
      <div className="welcome-container">
        <h1 className="heading-secondary">
          Welcome to <span className="lg">Travel Advisor</span>
        </h1>
        <img
          src="https://png2.cleanpng.com/sh/82506800d9e08bf14cb0a38d53322fea/L0KzQYm3VsI1N6Rug5H0aYP2gLBuTfxieKV0iJ9taYPzfLLCTfRmfppofZ92dXz3eb7shPliNZ1miOZ4cD3wf7TylgAuPZM3fqNsMEC4RIKAUsQvOmU5SaUBMkm0RYOCWME1OGI7S6Y9NT7zfri=/kisspng-laptop-display-device-multimedia-laptop-mockup-5b2f1c00541724.2441362915298140163445.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
