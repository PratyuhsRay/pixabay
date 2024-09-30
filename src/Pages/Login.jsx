import React,{useState} from "react";
import {Link} from "react-router-dom";
export default function Login(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const storedEmail = sessionStorage.getItem("email");
    const storedPassword = sessionStorage.getItem("password");

    if(storedEmail === email && storedPassword === password){
      alert("Login successful!");
      window.open("/");
    }
      else{
        alert("Invalid email or password.");
      }
  }
    return (
      <div className="login-container">
        <p style={{fontSize:'2.4rem', fontFamily:'Cambria, Cochin, Georgia, Times, Times New Roman, serif', margin:'-20px 0 0 0'}}>Pixabay</p>
        <div id="logIn">
          <span>
            <h1 className="join">Log In</h1>
          </span>
          <span>
          <Link to="/join"><h1 className="join">Join</h1></Link>
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
          
          <form action="" className="needs-validation" noValidate onSubmit={handleSubmit}>
             
          <input
            type="email"
            value={email}
            placeholder="Username or email"
            className="logInput"
            onChange={(e)=>setEmail(e.target.value)}required
            />
          <input
            type="password"
            value={password}
            placeholder="Password"
            className="logInput"
            onChange={(e)=>setPassword(e.target.value)}required
            />
            <Link to="/mainpage">
          <button className="logBtn loginBtn" id="log">
            Log in
          </button>
            </Link>
          <div>
            <p className="reset-link">Reset your password</p>
          </div>
            </form>
        </div>
      </div>
    );
  }