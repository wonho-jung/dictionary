import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import "./Home.scss";
function Home() {
  const getWordapi = () => {
    fetch("https://wordsapiv1.p.rapidapi.com/words/code", {
      method: "GET",
      headers: {
        "x-rapidapi-key": ,
        "my-key"
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson.results);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getWordapi();
  }, []);
  return (
    <div>
      <h1>test</h1>
    </div>
  );
}

export default Home;

const HomeContainer = styled.div;
