import React, { useEffect, useState } from "react";
import { auth, provider } from "../../firebase";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { Link } from "react-router-dom";
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

  const googleLogin = () => {
    auth.signInWithPopup(provider);
  };

  return (
    <div className="login">
      <div className="login__form__container">
        <Link to="/">
          <LocalLibraryIcon fontSize="large" />
        </Link>
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
          <button onClick={googleLogin}>Sign In with Google</button>
          <span className="login__switch" onClick={toggleAccount}>
            {newAccount ? "Sign In" : "Create Account"}{" "}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
