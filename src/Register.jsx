
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        const user = {
            name,
            email,
            password,
            role
        };

        await axios.post("http://localhost:3001/users", user);

        alert("Registration successful");

        navigate("/login");
    };

    return (
        <div>
            <h2>Registration</h2>

            <form onSubmit={handleRegister}>

                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br />
                <br />

                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />
                <br />

                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />
                <br />

                <input
                    type="text"
                    placeholder="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />

                <br />
                <br />

                <button type="submit">
                    Register
                </button>

            </form>
        </div>
    );
}

export default Register;