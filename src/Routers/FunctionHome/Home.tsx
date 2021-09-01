import React, { useState } from "react";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { Avatar, Button } from "@material-ui/core";
import Results from "../../components/Results";
import "./Home.scss";
import Sound from "../../components/Sound";
import { auth, db } from "../../firebase";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

interface ResultsItem {
  propsInput: any;
  definition: string | undefined;
  derivation: string[] | undefined;
  examples: string[];
  partOfSpeech: string;
  synonyms: string[];
  typeOf: string[];
  hasTypes: string[];
}
interface Data {
  frequency?: number;
  pronunciation?: { all: string };
  results?: ResultsItem[];
  syllables?: { count: number; list: [] };
  word?: string;
  success?: boolean;
  message?: string;
}
interface Word {
  id: string;
  definition: string | null;
  derivation: string[] | null;
  hasTypes: string[];
  partOfSpeech: string;
  synonyms: string[];
  typeOf: string[];
  examples: string[] | null;
}
interface User {
  user: {
    displayName?: string | null;
    email?: string | null;
    uid?: string | null;
  };
  userCallback: (arg: any) => void;
}
const Home: React.FC<User> = ({ user, userCallback }) => {
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Data>({});
  const [word, setWords] = useState<Word | any>([]);
  const history = useHistory();

  console.log(user);
  useEffect(() => {
    db.collection("words").onSnapshot((snapshot) => {
      const wordArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWords(wordArray);
      console.log();
    });
  }, []);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
      }
    });
  }, []);
  //A user serach action with form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.length > 0) {
      // searchWord(input);
      wordapi();
    }
  };

  // get the user input value.
  const updateInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  //Send Props
  const callbackFunction = (newInput: string) => {
    setInput(newInput);
    searchWord(newInput);
  };
  // get DATA from API with user input.
  const searchWord = (inputvalue: string) => {
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${inputvalue}`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        setData(results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const api = axios.create({
    method: "GET",
    baseURL: "https://wordsapiv1.p.rapidapi.com/words/",
    headers: {
      "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    },
  });
  const wordapi = async () => {
    try {
      const word = await api.get("test");
      console.log(word);
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  const signOut = (e) => {
    e.preventDefault();
    auth.signOut();
    userCallback(null);
    history.push("/login");
  };
  return (
    <div className="Container">
      <div className="navbar">
        <div className="navbar__top">
          <div className="navbar__top__left">
            <LocalLibraryIcon
              className="Home__LocalLibraryIcon"
              fontSize="large"
            />
            <h5>Won's dictionary</h5>
          </div>
          <div className="navbar__top__right">
            {user.displayName && user.email && user.uid ? (
              <Link to="/favorite">
                <Avatar className="avatar" />
              </Link>
            ) : (
              <Link className="avatar" to="/login">
                <Avatar />
              </Link>
            )}

            <Link to="/login">
              {user.email && user.uid ? (
                <button className="loginbutton" onClick={(e) => signOut(e)}>
                  Sign Out
                </button>
              ) : (
                <button className="loginbutton">Sign In</button>
              )}
            </Link>
          </div>
        </div>
        <div className="navbar__bottom">
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Search word..."
              value={input}
              onChange={updateInputValue}
            />
            <Button type="submit">Search</Button>
          </form>
        </div>
      </div>

      <div className="word__container">
        {data.word && data.success !== false && (
          <>
            <h1>
              {data?.word} {data?.pronunciation?.all}
            </h1>
            <Sound input={input} />
            {data.frequency && <h1>frequency: {data?.frequency}/7</h1>}
          </>
        )}
        <div className="results__Container">
          {data?.results?.map((result, index) => (
            <Results
              key={index}
              callback={callbackFunction}
              definition={result.definition}
              derivation={result.derivation}
              hasTypes={result.hasTypes}
              partOfSpeech={result.partOfSpeech}
              synonyms={result.synonyms}
              typeOf={result.typeOf}
              examples={result.examples}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
