import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="background">
        <div className="warp">
            <form action="">
                <h1>Login</h1>

                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className="icon" />
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon"/>
                </div>

                <div className="forgot">
                    <a href="#">Forgot Password?</a>
                </div>

                <button type="submit">Login</button>

                <div className="signup">
                    <p>
                        Don't have an Account? <br /> <a href="#">Sign up</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
  );
}

export default LoginPage;
