import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello from mac");
    console.log("from window");
  };

  // const handleChange = (event) => {
  //   const target = event.target.name;
  //   console.log(event);
  //   if (target === email) {
  //     setEmail(event.target.value);
  //   } else if (target === password) {
  //     setPassword(event.target.value);
  //   }
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">click</button>
      </form>
    </div>
  );
};

export default Login;
