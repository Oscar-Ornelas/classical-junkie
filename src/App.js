import React, {useState, useEffect} from "react";
import logo from "./logo.svg";
import Player from "./Player";
import "./App.css";
export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "5ab1ad0488a045ada24732decaec33d3";
const redirectUri = "http://localhost:3000";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-modify-playback-state"
];

function App() {
  const [token, setToken] = useState(null);
  const [item, setItem] = useState({
      album: {
        images: [{ url: "" }]
      },
      name: "",
      artists: [{ name: "" }],
      duration_ms: 0
  });
  const [isPlaying, setIsPlaying] = useState("Paused");
  const [progressMs, setProgressMs] = useState(0);

  function getCurrentlyPlaying(token) {
    fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      setItem(data.item);
      setIsPlaying(data.is_playing);
      setProgressMs(data.progress_ms);
    })
  }

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
      getCurrentlyPlaying(accessToken)
    }

  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {!token && (
        <a
          className="btn btn--loginApp-link"
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
        >
          Login to Spotify
        </a>
      )}
      {(token) && (
        <Player
          item={item}
          isPlaying={isPlaying}
          progressMs={progressMs}
        />
      )}
      </header>
    </div>
  );

}
export default App;
