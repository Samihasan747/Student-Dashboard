import React from "react";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <>
      <div id="main-page">
        <div id="welcome">Welcome to SIMT Engineering College</div>
        <div id="container">
          <div id="left-side">
            <div id="left-photo-holder"></div>
            <div id="left-text-holder">
              <span></span>
            </div>
          </div>
          <div id="right-side">
            <div id="signin-box">
              <div id="signin-text">
                <span>Already have an account ?</span>
              </div>
              <div id="signin-btn">
                <button>Sign In</button>
              </div>
            </div>
            <div id="create-acc-box">
              <div id="create-acc-text">
                <span>Create Account</span>
              </div>
              <div id="info-holder">
                <div id="full-name-holder">
                  <input type="text" placeholder="First Name" />
                </div>
                <div id="email-holder">
                  <input type="text" placeholder="Email" />
                </div>
                <div id="student-id-holder">
                  <input type="text" placeholder="Student ID" />
                </div>
              </div>
            </div>
            <div id="forget-pass">
              <span>
                <a href="#">Forgot Password or Username</a>
              </span>
            </div>
            <div id="signup">
              <div id="signup-btn">
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
