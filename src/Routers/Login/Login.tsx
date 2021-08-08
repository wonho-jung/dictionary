import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);

  const handleSubmit = () => console.log("hello");

  const handleChange = (event) => {
    const target = event.target.name;
    console.log(event.target.name, event.target.value);
    if (target === email) {
      setEmail(event.target.value);
    } else if (target === password) {
      setPassword(event.target.value);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          required
          value={password}
          onChange={handleChange}
        />
        <button type="submit">click</button>
      </form>
    </div>
  );
};

export default Login;
