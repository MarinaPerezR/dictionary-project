import React from "react";
import "./Synonyms.css";


export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <ul className="Synonyms">
                <strong><small>Synonyms: </small></strong>{props.synonyms.map(function (synonym, index) {
                    return  <li key={index}>{synonym}</li>;
                })}
            </ul>
        );
    } else {
        return null;
    }
}