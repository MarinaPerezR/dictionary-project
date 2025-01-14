import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
 let [keyword, setKeyword] = useState(props.defaultKeyword);
 let [results, setResults] = useState(null);
 let [loaded, setLoaded] = useState(false);

 function handleResponse(response) {
    setResults(response.data);
 }


 function search() {
    // documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "40b5c70t36fead3dof40b74ca69cca04";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
    event.preventDefault();
    search();
}    



function handleKeywordChange(event) {
  setKeyword(event.target.value);
}

function load() {
    setLoaded(true);
    search();
}

if (loaded) {
    return (
        <div className="Dictionary">
            <section>
                <h1>What word do you want to look up?</h1>
              <form onSubmit={handleSubmit}>
                  <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword} autoFocus={true} />
                  <input type="submit" value="Search" />
              </form>
              <div className="hint">
                 e.g., <em>euphoria, incandescent, serendipity, wanderlust...</em>
              </div>
            </section>
            <Results results={results} />
        </div>
    );
} else {
    load();
    return "Loading";
}
}
