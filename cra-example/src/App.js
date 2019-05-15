import React from 'react';
import logo from './logo.svg';
import './App.css';
const ReactDOMServer = require('react-dom/server');

function App({ repos = []}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {repos.map(repo => (
          <div>{repo.name}</div>
        ))}
      </header>
    </div>
  );
}

console.log(ReactDOMServer.renderToString(<App />));

export default App;
