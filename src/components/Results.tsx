import React, { useState } from "react";
import "./Results.scss";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { db } from "../firebase";

interface Props {
  callback: (newInput: string) => void;
  definition: string | undefined;
  derivation: string[] | undefined;
  hasTypes: string[];
  partOfSpeech: string;
  synonyms: string[];
  typeOf: string[];
  examples: string[];
}

const Result: React.FC<Props> = ({
  callback,
  definition,
  derivation,
  hasTypes,
  partOfSpeech,
  synonyms,
  typeOf,
  examples,
}) => {
  const [favor, setFavor] = useState<boolean>(true);
  //get target.value, send to parents compoent with callback function.
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // This function change parents component state value and it work right away.
    callback((event.target as HTMLButtonElement).value);
  };

  const favoriteBtn = () => {
    setFavor(false);
    db.collection("words")
      .doc()
      .set({
        definition: definition ? definition : null,
        derivation: derivation ? derivation : null,
        partOfSpeech: partOfSpeech,
        synonyms: synonyms,
        typeOf: typeOf,
        examples: examples ? examples : null,
      });
  };

  const undofavoriteBtn = () => {
    setFavor(true);
  };

  return (
    <div className="ResultContainer">
      {favor ? (
        <StarBorderIcon onClick={favoriteBtn} className="" />
      ) : (
        <StarIcon onClick={undofavoriteBtn} className="" />
      )}
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
                key={index}
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
            {typeOf.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
      {examples && (
        <>
          <h3>Examples:</h3>
          <ul>
            {examples.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Result;
