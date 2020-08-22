import React, { useEffect, useState } from 'react';
import Login from './Login';
import './App.css';
import { getTokenFromUrl } from './spotify';

function App() {

  const [token, setToken] = useState(null);

  // Run code based on given condition
  useEffect(() => {
    // code...
    const hash = getTokenFromUrl();

    // clear the access token from url
    window.location.hash = "";

    // _token --here underscore is used means this is temporary token
    const _token = hash.access_token;

    if (_token) {
      setToken(_token)
    }

    console.log('I have a token >>>', token);
  }, [])

  return (
    // BEM
    <div className="app">
      
      {
        token ? (
          <h1>I am logged in</h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
