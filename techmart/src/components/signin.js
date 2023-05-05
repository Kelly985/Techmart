import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch user data from the db.json file
    fetch("https://users-4dn4.onrender.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched user data:", data);
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching user data", error));
  }, []);
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    // Find user with matching username and password in the user data
    const user = users.find((u) => u.name === username && u.password === password);
    if (user) {
      // Successful login
      alert(`Welcome, ${user.name}!`);
      navigate("/products"); // Redirect to the products page
    } else {
      // Login failed
      setErrorMsg("Incorrect username or password");
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {errorMsg && <div>{errorMsg}</div>}
    </div>
  );
}
export default LoginPage;