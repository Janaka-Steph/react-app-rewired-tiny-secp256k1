import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import * as ecc from 'tiny-secp256k1';
import { SLIP77Factory } from 'slip77';

const slip77 = SLIP77Factory(ecc);

function App() {
  useEffect(() => {
    const masterBlindingKeyNode = slip77.fromSeed(
      Buffer.from('8cfa98b576ec1fbcedf4264d2396e6c702771520d47b707f850503f38e8a9612')
    );
    console.log('masterBlindingKeyNode', masterBlindingKeyNode);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
