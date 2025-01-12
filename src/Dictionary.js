import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
 let [keyword, setKeyword] = useState("");
 let [results, setResults] = useState(null);

 function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
 }

 function search(event) {
    event.preventDefault();

    // documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "40b5c70t36fead3dof40b74ca69cca04";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
}



function handleKeywordChange(event) {
  setKeyword(event.target.value);
}

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} autoFocus={true} />
                <input type="submit" value="Search" />
            </form>
            <Results results={results} />
        </div>
    )
}
