
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Home() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    useEffect(() => {
        const userId = localStorage.getItem("userId");
        if (userId) {
            axios.get(`http://localhost:3001/users/${userId}`)
            .then((response) => {
                 setUser(response.data);
                });
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("userId");
        setUser(null);
        navigate("/login");
    };
    return (
        <div>
            <h2>Welcome Page</h2>
            {user ? (
                <>
                    <h2>Welcome, {user.name}</h2>
                    <p>Email: {user.email}</p>

                    <Link to="/employees">
                        <button>Employees</button>
                    </Link>

                    <br />
                    <br />

                    <button onClick={handleLogout}>
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <Link to="/register">Register</Link>

                    <br />

                    <Link to="/login">Login</Link>
                </>
            )}
        </div>
    );
}

export default Home;