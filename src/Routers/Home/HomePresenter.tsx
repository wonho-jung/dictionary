import React from "react";

interface Props {
  results: string;
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
  console.log(inputValue);
  return (
    <div>
      test
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search word..."
          value={inputValue}
          onChange={updateInputValue}
        />
      </form>
      <h1>{results}</h1>
    </div>
  );
};

export default HomePresenter;
