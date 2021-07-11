import React, { Component } from "react";
import HomePresenter from "./HomePresenter";

// assign value type
type myState = {
  results: any;
  inputValue: string;
  loading: boolean;
  error: string;
};

// interface props {
//   handleSubmit: (param: string) => void;
//   updateInputValue: (param: string) => void;
// }
export default class HomeContainer extends Component {
  // setState
  state: myState = {
    results: null,
    inputValue: "",
    loading: false,
    error: "",
  };

  //A user serach action
  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { inputValue } = this.state;
    if (inputValue.length > 0) {
      this.searchWord();
    }
  };

  // get the user input value.
  updateInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ inputValue: (event.target as HTMLInputElement).value });
  };

  // get a word from Word api with fetch.
  searchWord = async () => {
    const { inputValue } = this.state;

    await fetch(`https://wordsapiv1.p.rapidapi.com/words/${inputValue}`, {
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
        console.log(results);
        this.setState({ results: results });
      })
      .catch((err) => {
        this.setState({ error: err });
      })
      .finally(() => {
        this.setState({ loading: false });
        this.setState({ inputValue: "" });
      });
  };

  render() {
    const { results, inputValue, loading, error } = this.state;
    console.log(results);
    return (
      <HomePresenter
        results={results}
        inputValue={inputValue}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
        updateInputValue={this.updateInputValue}
      />
    );
  }
}
