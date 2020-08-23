import React, { useEffect, useState } from 'react';
import Login from './Login';
import Player from './Player';
import './App.css';
import { getTokenFromUrl } from './spotify';
import { useDataLayerValue } from './DataLayer';

import SpotifyWebApi from 'spotify-web-api-js';

// create a new instace of spotify --> which allow us to communicate with spotify app
const spotify = new SpotifyWebApi();



function App() {

  // const [token, setToken] = useState(null);

  // set the token in our datalayer
  const [{ user, token }, dispatch] = useDataLayerValue();

  // Run code based on given condition
  useEffect(() => {
    // code...
    const hash = getTokenFromUrl();

    // clear the access token from url
    window.location.hash = "";

    // _token --here underscore is used means this is temporary token
    const _token = hash.access_token;

    if (_token) {
      // setToken(_token)

      // rathen than doing the setToken we use dispatch
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      // check the connect between our app to spotify app
      // set accessToken key to spotify app
      spotify.setAccessToken(_token);

      // get the user account
      spotify.getMe().then(user => {
        // console.log('person', user)

        dispatch({
          type: 'SET_USER',
          // user: user
          user
        })
      });

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists 
        })
      });

      spotify.getPlaylist('4MPkxilF9mq1vtbGGKSvEC').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      });
    }

    // console.log('I have a token >>>', token);
  }, [])

  // console.log('I have a user >>>', user);
  // console.log('I have a token >>>', token);

  return (
    // BEM
    <div className="app">
      
      {
        token ? (
          <Player spotify={ spotify } />
          // <h1>I am logged in</h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
