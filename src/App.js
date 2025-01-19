import React from 'react';
import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className = "App">
      <div className='container'>
        <header className = "App-header">
          <img src={logo} className = "App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="reverie" />
        </main>
        <footer className="App-footer">
          <p>
            This project was coded by
            <a href="https://github.com/MarinaPerezR" target="_blank" rel="noopener noreferrer"> Marina P.R. </a>
            and is open-sourced on
            <a
              href="https://github.com/MarinaPerezR/dictionary-project"
              target="_blank" rel="noopener noreferrer"
            > GitHub </a>
             and hosted on  
            <a
              href="https://mpr-dictionary.netlify.app/"
              target="_blank" rel="noopener noreferrer"
             > Netlify</a>
          </p>
        </footer>
      </div>
    </div>
  );
}


