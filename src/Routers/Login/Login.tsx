import React, { useState } from "react";
import "./Login.scss";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<number | string>("");
  const [newAccount, setNewAccount] = useState<boolean>(true);
  console.log(email);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };

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
          <button type="submit">
            {newAccount ? "Creat Account" : "Sign In"}
          </button>
          <button>Sign In with Google</button>
          <span className="login__switch" onClick={toggleAccount}>
            {newAccount ? "Sign In" : "Create Account"}{" "}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
