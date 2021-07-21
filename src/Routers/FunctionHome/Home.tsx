import React, { useState } from "react";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { Button } from "@material-ui/core";
import Results from "../../components/Results";

interface Data {
  frequency: number;
  pronunciation: { all: string };
  results: {
    definition: string;
    examples: string[];
    partOfspeech: string;
    synonyms: string[];
    typeOf: string[];
  };
  syllables: { count: number; list: [] };
  word: string;
}
function Home() {
  const [input, setInput] = useState<string>("cook");
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Data[]>([]);
  console.log(data.word);
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
        setData(results);
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
        {/* <h1>
          {data?.word} {data?.pronunciation?.all}
        </h1>
        <h1>frequency:{data?.frequency}</h1> */}
        {/* {data?.results?.map((result) => (
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
