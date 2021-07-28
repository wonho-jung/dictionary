import React, { useState } from "react";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { Button } from "@material-ui/core";
import Results from "../../components/Results";
import "./Home.scss";
import { useEffect } from "react";
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
  frequency: number;
  pronunciation: { all: string };
  results: ResultsItem[];
  syllables: { count: number; list: [] };
  word: string;
}
function Home() {
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Data | null>(null);

  //Update new results of API when input value change but I don't know it's best way. Is there another way to do it?
  useEffect(() => {
    searchWord();
  }, [input]);

  //Send Props
  const callbackFunction = (newInput: string) => {
    setInput(newInput);
  };

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

  // get DATA from API with user input.
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

      <div className="word__container">
        {data && (
          <>
            <h1>
              {data?.word} {data?.pronunciation?.all}
            </h1>
            {data.frequency && <h1>frequency:{data?.frequency}</h1>}
          </>
        )}
        <div className="results__Container">
          {data?.results?.map((result, index) => (
            <Results
              key={index}
              callback={callbackFunction}
              searchWord={searchWord}
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
}

export default Home;
