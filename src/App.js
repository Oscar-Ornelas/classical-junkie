import React, {useState, useEffect} from 'react';
import {Switch, Route, useHistory, Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Player from './components/Player';
import PlayerFooter from './components/PlayerFooter';
import Album from './components/Album';

export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "5ab1ad0488a045ada24732decaec33d3";
const redirectUri = "http://localhost:3000";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-modify-playback-state",
  "streaming",
  "user-read-email",
  "user-read-private"
];

function App() {
  const [currentUri, setCurrentUri] = useState("");
  const [token, setToken] = useState(null);
  const [item, setItem] = useState({
      album: {
        images: [{ url: "" }]
      },
      name: "",
      artists: [{ name: "" }],
      duration_ms: 0
  });
  const history = useHistory();

  useEffect(() => {
    const hash = window.location.hash
      .substring(1)
      .split("&")
      .reduce(function(initial, item) {
        if (item) {
          var parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});

    window.location.hash = "";

    let accessToken = hash.access_token;

    if (accessToken) {
      setToken(accessToken);
      history.push('/search')
    }

  }, [])

  function play(uri) {
    fetch("https://api.spotify.com/v1/me/player/play", {
      method: 'PUT',
      body: JSON.stringify({ uris: [uri] }),
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setCurrentUri(uri);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {!token && (
            <Home
              authEndpoint={authEndpoint}
              clientId={clientId}
              redirectUri={redirectUri}
              scopes={scopes}
            />
          )}
        </Route>
        <Route path="/search">
          {(token) ? (
            <Player play={play} token={token}/>
          ) : <Redirect to="/"/>}
        </Route>
        <Route path="/album/:albumId">
          {(token) ? (
            <Album play={play} token={token}/>
          ) : <Redirect to="/"/>}
        </Route>
      </Switch>
      <footer>
        {(token) && (
          <PlayerFooter currentUri={currentUri} token={token}/>
        )}
      </footer>
    </div>
  );

}
export default App;