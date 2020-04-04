import React, {useState, useEffect} from 'react';
import {Switch, Route, useHistory, Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Player from './components/Player';
import PlayerFooter from './components/PlayerFooter';
import Album from './components/Album';
import Artist from './components/Artist';
import ArtistReleases from './components/ArtistReleases'

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
  const [deviceId, setDeviceId] = useState(null);
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

  useEffect(() => {
    if(token) {
      window.onSpotifyWebPlaybackSDKReady = () => {
        const player = new window.Spotify.Player({
          name: 'Classical Junkie Player',
          getOAuthToken: cb => { cb(token); }
        });

        player.connect()

        player.addListener('ready', ({ device_id }) => {
          setDeviceId(device_id);
          player.removeListener('ready');
        })

      }
    }
  }, [token])

  function play(uri) {
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
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
        <Route exact path="/artist/:artistId">
          {(token) ? (
            <Artist play={play} token={token}/>
          ) : <Redirect to="/"/>}
        </Route>
        <Route path="/artist/:artistId/releases">
          {(token) ? (
            <ArtistReleases play={play} token={token}/>
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
