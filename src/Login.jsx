import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login(){
    const navigate = useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleLogin = async(e)=>{
        e.preventDefault();
        const response = await axios.get(`http://localhost:3001/users?email=${email}`);
        const user=response.data;
        if(user.length===0){
            alert("user not found");
            return;
        }
        const users=user[0];
        if(users.password===password){
            localStorage.setItem("userId",users.id);
            alert("login succesfull");
            navigate("/");
        }else{
            alert("wrong password");
        }
    }
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email"
                placeholder="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                 />
                 <br /><br />
                 <input type="password"
                 placeholder="password"
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                  />
                  <br /><br />
                  <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;