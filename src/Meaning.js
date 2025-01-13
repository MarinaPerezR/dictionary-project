import React from "react";
import Synonyms from "./Synonyms.js";
import Example from "./Example.js";

export default function Meaning(props) {
    return (
        <div className="Meaning">
           <h3>{props.meaning.partOfSpeech}</h3>
           <p>
              <strong>Definition: </strong>{props.meaning.definition}
              <br />
              <Example example={props.meaning.example} />
              <br />
              <Synonyms synonyms={props.meaning.synonyms} />
            </p>
        </div>     
    );

}