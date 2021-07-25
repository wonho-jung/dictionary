import { Button } from "@material-ui/core";
import React from "react";
import "./Results.scss";

interface Props {
  propsInput: any;
  definition: string | undefined;
  derivation: string[] | undefined;
  hasTypes: string[];
  partOfSpeech: string;
  synonyms: string[];
  typeOf: string[];
  examples: string[];
}

const Result: React.FC<Props> = ({
  propsInput,
  definition,
  derivation,
  hasTypes,
  partOfSpeech,
  synonyms,
  typeOf,
  examples,
}) => {
  //get target.value, send to
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log((event.target as HTMLButtonElement).value);
  };

  return (
    <div className="ResultContainer">
      <div className="Results__definition">
        <h2>Definition: </h2>
        <p>{definition}</p>
      </div>

      <h3>Part of speech: {partOfSpeech}</h3>
      <div className="Result__synonyms">
        {synonyms && (
          <>
            <h3>synonyms: </h3>

            {synonyms.map((item: string, index: number) => (
              <button
                className="Result__synonym"
                value={item}
                onClick={handleClick}
              >
                {item}
              </button>
            ))}
          </>
        )}
      </div>
      <div className="Results__derivation">
        {derivation && (
          <>
            <h3>Derivation: </h3>
            <p>
              {derivation.map((item: string, index: number) =>
                index === derivation.length - 1 ? item : `${item}, `
              )}
            </p>
          </>
        )}
      </div>
      {typeOf && (
        <>
          <h3>type of:</h3>
          <ul>
            {typeOf.map((item: string) => (
              <li>{item}</li>
            ))}
          </ul>
        </>
      )}
      {examples && (
        <>
          <h3>Examples:</h3>
          <ul>
            {examples.map((item: string) => (
              <li>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Result;
