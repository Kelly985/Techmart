import React, { useState } from "react";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = { name, email, password };
    fetch("https://users-4dn4.onrender.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => console.log("New user saved:", data))
      .catch((error) => console.error("Error saving user", error));
  };
  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label id ="name"htmlFor="name">Name:</label><br></br>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div><br></br>
        <div>
          <label id ="email" htmlFor="email">Email:</label><br></br>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div><br></br>
        <div>
          <label id="password"htmlFor="password">Password:</label><br></br>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div><br></br>
        <button id="signup"type="submit">Sign Up</button><br></br>
      </form>
    </div>
  );
}
export default SignUp;