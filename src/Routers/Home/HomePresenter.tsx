import React from "react";
import "./Home.scss";
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
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search word..."
          value={inputValue}
          onChange={updateInputValue}
        />
      </form>
      <div className="resultContainer">
        <h1>{results?.word}</h1>
        <h1>{results?.pronunciation.all}</h1>
        {results?.results.map((result: any) => console.log(result))}
      </div>
    </div>
  );
};

export default HomePresenter;
