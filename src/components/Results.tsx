import React from "react";
import "./Results.scss";

interface Props {
  definition: string | undefined;
  derivation: string[] | undefined;
  hasTypes: string[];
  partOfSpeech: string;
  synonyms: string[];
  typeOf: string[];
  examples: string[];
}

const Result: React.FC<Props> = ({
  definition,
  derivation,
  hasTypes,
  partOfSpeech,
  synonyms,
  typeOf,
  examples,
}) => {
  console.log(partOfSpeech);
  return (
    <div className="ResultContainer">
      <div className="Results__definition">
        <h2>definition: </h2>
        <p>{definition}</p>
      </div>
      <div className="Results__derivation">
        {derivation && (
          <>
            <h3>derivation: </h3>
            <p>{derivation.map((item: string) => item)}</p>
          </>
        )}
      </div>

      <h3>partOfspeech: {partOfSpeech}</h3>
      {synonyms && <h3>synonyms: {synonyms.map((item: string) => item)}</h3>}
      {typeOf && (
        <h3>
          typeOf:{" "}
          {typeOf.map((item: string, index: number) =>
            index === item.length - 1 ? item : <p>/{item}</p>
          )}
        </h3>
      )}
      {examples && (
        <>
          <h3>examples:</h3>
          <ul>
            {examples.map((item: string) => (
              <>
                <li>{item}</li>
              </>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Result;
