import React, { useState } from "react";

function Home() {
  const [input, setInput] = useState();
  const [loading, setLoading] = useState();
  const searchWord = async () => {
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
        setInput(results);
      })
      .catch((err) => {
        this.setState({ error: err });
      })
      .finally(() => {
        this.setState({ loading: false });
        this.setState({ inputValue: "" });
      });
  };
  return <div></div>;
}

export default Home;
