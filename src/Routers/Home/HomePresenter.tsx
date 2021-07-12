import React from "react";
import "./Home.scss";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { Button } from "@material-ui/core";
import Results from "../../components/Results";

// reassign props
interface Props {
  results: {
    frequency: number;
    pronunciation: { all: string };
    results: object[];
    syllables: {};
    word: string;
  };
  inputValue: string;
  loading: boolean;
  error: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  updateInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const HomePresenter: React.FC<Props> = ({
  results,
  inputValue,
  loading,
  error,
  handleSubmit,
  updateInputValue,
}) => {
  console.log(results);
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
              value={inputValue}
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
        {results?.results?.map((result: any) => (
          <Results
            definition={result.definition}
            derivation={result.derivation}
            hasTypes={result.hasTypes}
            partOfspeech={result.partOfspeech}
            synonyms={result.synonyms}
            typeOf={result.typeOf}
            examples={result.examples}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePresenter;
