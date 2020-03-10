import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from 'sideapp/Button'
const LocalButton = React.lazy(() => import("./LocalButton"));
const Button = React.lazy(() => import("sideapp/Button"));



function App() {
  console.log(LocalButton)
  console.log(Button)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <React.Suspense fallback={'loadin local'}>
          <LocalButton />
        </React.Suspense>
        <React.Suspense fallback={'loadin'}>
          <Button />
        </React.Suspense>
      </header>
    </div>
  );
}

export default App;
