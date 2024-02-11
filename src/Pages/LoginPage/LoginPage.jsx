import React ,{ useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "./LoginPage.css";
import { Link } from "react-router-dom";



function LoginPage() {

 
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
      
        const handleLogin = async (event) => {
          event.preventDefault();
      
          // Constructing the JSON body
          const requestBody = {
            email: username,
            password: password,
          };
      
          try {
            // Sending POST request
            const response = await fetch("http://localhost:8081/api/v1/auth/scout/authenticate", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                'Origin': 'http://localhost:3000',
                'Content-Length': '<calculated when request is sent>',
                'Host': '<calculated when request is sent>',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
              },
              body: JSON.stringify(requestBody),
            });
      
            // Handle the response here (e.g., redirect or show a message)
            if (response.ok) {
              console.log("Login successful!");
              // Redirect or perform any other action upon successful login
            } else {
              console.error("Login failed");
              // Handle login failure (e.g., show an error message)
            }
          } catch (error) {
            console.error("Error during login:", error);
          }
        };


  return (
    <div className="background">
        <div className="warp">
            <form action="" onSubmit={handleLogin}>
                <h1 className="heading">Login</h1>

                <div className="input-box">
                    <input
                     type="text" 
                     placeholder="Username" 
                     value={username}
                     onChange={(e) => setUsername(e.target.value)} 
                     required />


               <FaUser className="icon" />
                </div>

                <div className="input-box">
                    <input type="password"
                     placeholder="Password" 
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required />
                    <FaLock className="icon"/>
                </div>

                <div className="forgot">
                    <a href="#">Forgot Password?</a>
                </div>

                <button type="submit" className="login">Login</button>

                <div className="signup">
                    <p>
                        Don't have an Account? <br /><br/> <a href="#"><Link className = "btn btn-success" to={'/signup'}>Sign up</Link></a>
                        
                    </p>
                </div>
            </form>
        </div>
    </div>
  );
}


export default LoginPage;