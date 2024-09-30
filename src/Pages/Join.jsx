import React, { useState } from "react";
import{Link} from 'react-router-dom';
export default function Join() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  function handleSubmit() {
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
    sessionStorage.setItem("confirmPassword", confirmPassword);
    alert("Username saved in session storage!");
  }
  return (
      <div className="login-container">
        <p style={{fontSize:'2.4rem', fontFamily:'Cambria, Cochin, Georgia, Times, Times New Roman, serif', margin:'-20px 0 0 0'}}>Pixabay</p>
        <div id="logIn">
          <span>
          <Link to="/login"><h1 className="join">Log In</h1></Link>
          </span>
          <span>
            <h1 className="join">Join</h1>
          </span>
        </div>

        <div id="logBox">
          <button className="logBtn googleBtn">
          <i className="icon" class="fa-brands fa-google" ></i>
            Continue with Google
          </button>
          <button className="logBtn facebookBtn">
          <i className="icon" class="fa-brands fa-facebook" ></i>
            Continue with Facebook
          </button>

          <form className="needs-validation" noValidate onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="logInput"
            onChange={(e) => setEmail(e.target.value)}
            required

            />
          <input
            type="password"
            value={password}
            placeholder="Password"
            className="logInput"
            onChange={(e) => setPassword(e.target.value)}
            required
            />
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            className="logInput"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            />
          <Link to="/login">
          <button className="logBtn loginBtn" id="log">
            Join
          </button>
          </Link>
          <div>
            <p className="terms">By joining Pixabay, you agree to our <Link>Terms of Service.</Link></p>
          </div>
            </form>
        </div>
      </div>
    );
  }
