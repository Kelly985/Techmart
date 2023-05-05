import React, { useState, useEffect } from "react";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
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
    } else {
      // Login failed
      setErrorMsg("Incorrect username or password");
    }
  };
  return (
    <div className="login">
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label id="name" htmlFor="username">Username:</label><br></br>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          /><br></br>
        </div>
        <div>
          <label id="password"htmlFor="password">Password:</label><br></br>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          /><br></br>
        </div>
        <button id="login"type="submit">Login</button><br></br>
      </form>
      {errorMsg && <div>{errorMsg}</div>}
    </div>
  );
}
export default LoginPage;