import React from "react";
import "./Results.scss";

interface Props {
  definition: string;
  derivation: string[];
  hasTypes: string[];
  partOfspeech: string;
  synonyms: string[];
  typeOf: string[];
  examples: string[];
}

const Result: React.FC<Props> = ({
  definition,
  derivation,
  hasTypes,
  partOfspeech,
  synonyms,
  typeOf,
  examples,
}) => {
  return (
    <div className="ResultContainer">
      <h3>definition: {definition}</h3>
      {derivation && (
        <h3>derivation: {derivation.map((item: string) => item)}</h3>
      )}{" "}
      {examples && <h3>examples:{examples.map((item: string) => item)}</h3>}
      {partOfspeech && <h3>partOfspeech:{partOfspeech}</h3>}
      {synonyms && <h3>synonyms: {synonyms.map((item: string) => item)}</h3>}
      {typeOf && <h3>typeOf: {typeOf.map((item: string) => item)}</h3>}
    </div>
  );
};

export default Result;
