import React, { useState } from "react";
import { auth, provider } from "../../firebase";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { Link } from "react-router-dom";
import "./Login.scss";
import { useHistory } from "react-router";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [newAccount, setNewAccount] = useState<boolean>(true);
  const history = useHistory();
  console.log(history.push);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };

  const googleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then(() => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };
  const userLogin = async (e) => {
    e.preventDefault();
    let signIn;
    try {
      if (newAccount) {
        signIn = await auth.createUserWithEmailAndPassword(email, password);
      } else {
        signIn = await auth.signInWithEmailAndPassword(email, password);
      }
      console.log(signIn);
    } catch (error) {
      alert(error.message);
    } finally {
      setEmail("");
      setPassword("");
      history.push("/");
    }
  };
  // this is test
  // this is test2
  // this is test3

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
          <button type="submit" onClick={userLogin}>
            {newAccount ? "Creat Account" : "Sign In"}
          </button>
          <button onClick={(e) => googleLogin(e)}>Sign In with Google</button>
          <span className="login__switch" onClick={toggleAccount}>
            {newAccount ? "Sign In" : "Create Account"}{" "}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
