import React, { useState } from "react";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { Button } from "@material-ui/core";
import Results from "../../components/Results";

interface InputType {
  input: string;
}
interface loadingType {
  input: string;
}
interface resultsType {
  input: object[];
}

function Home() {
  const [input, setInput] = useState<InputType>("");
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  //A user serach action with form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.length > 0) {
      searchWord();
    }
  };

  // get the user input value.
  const updateInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const searchWord = async () => {
    await fetch(`https://wordsapiv1.p.rapidapi.com/words/${input}`, {
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
        setInput(results);
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        setLoading(false);
        setInput("");
      });
  };
  return (
    <div className="Container">
      <div className="navbar">
        <div className="navbar_left">
          <LocalLibraryIcon fontSize="large" style={{ color: "#fff" }} />
          <h5>Won's dictionary</h5>
        </div>
        <div className="navbar_right">
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

      <div className="resultContainer">
        <h1>
          {results?.word} {results?.pronunciation?.all}
        </h1>
        <h1>frequency:{results?.frequency}</h1>
        {/* {results?.results?.map((result:  ) => (
          <Results
            definition={result.definition}
            derivation={result.derivation}
            hasTypes={result.hasTypes}
            partOfspeech={result.partOfspeech}
            synonyms={result.synonyms}
            typeOf={result.typeOf}
            examples={result.examples}
          />
        ))} */}
      </div>
    </div>
  );
}

export default Home;
