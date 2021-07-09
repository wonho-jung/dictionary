import React, { useEffect } from "react";

function Input() {
  let useState;
  useState = [];
  const api_key = process.env.REACT_APP_API_KEY;

  const getWordapi = () => {
    fetch("https://wordsapiv1.p.rapidapi.com/words/summary", {
      method: "GET",
      headers: {
        "x-rapidapi-key": `${api_key}`,
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson.results);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getWordapi();
  }, []);

  return <div></div>;
}

export default Input;
