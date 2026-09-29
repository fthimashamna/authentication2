
import { useState, useEffect } from "react";
import axios from "axios";

function Employee() {

    const [employees, setEmployees] = useState([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [position, setPosition] = useState("");

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = async () => {
        const response = await axios.get(
            "http://localhost:3001/employees"
        );

        setEmployees(response.data);
    };

    const addEmployee = async (e) => {
        e.preventDefault();

        const employee = {
            name,
            email,
            department,
            position
        };

        await axios.post(
            "http://localhost:3001/employees",
            employee
        );

        alert("Employee added");

        setName("");
        setEmail("");
        setDepartment("");
        setPosition("");

        getEmployees();
    };

    return (
        <div>

            <h2>Employee Management</h2>

            <h3>Add Employee</h3>

            <form onSubmit={addEmployee}>

                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br />
                <br />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />
                <br />

                <input
                    type="text"
                    placeholder="Department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                />

                <br />
                <br />

                <input
                    type="text"
                    placeholder="Position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                />

                <br />
                <br />

                <button type="submit">
                    Add Employee
                </button>

            </form>

            <hr />

            <h3>Employees</h3>

            {employees.map((employee) => (
                <div key={employee.id}>

                    <h4>{employee.name}</h4>
                    <p>Email: {employee.email}</p>
                    <p>Department: {employee.department}</p>
                    <p>Position: {employee.position}</p>

                    <hr />

                </div>
            ))}

        </div>
    );
}

export default Employee;