import React from "react";
import Synonyms from "./Synonyms.js";
import Example from "./Example.js";
import "./Meaning.css";

export default function Meaning(props) {
    return (
        <div className="Meaning">
           <h3>{props.meaning.partOfSpeech}</h3>
             
              <div className="definition">{props.meaning.definition}</div>
              
              <Example example={props.meaning.example} />
            
              <Synonyms synonyms={props.meaning.synonyms} />
        
        </div>     
    );

}