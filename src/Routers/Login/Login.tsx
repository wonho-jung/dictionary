import React, { useState } from "react";
import "./Login.scss";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<number | string>("");
  console.log(email);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    <div className="login">
      <div className="login__form__container">
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
          <button type="submit">Sign In</button>
          <button>Sign In with Google</button>
          <span>Create Account</span>
        </form>
      </div>
    </div>
  );
};

export default Login;
