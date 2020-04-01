import React, {useState, useEffect} from "react";
import "./App.css";
import home_background from './imgs/home_background.PNG';
import Player from "./components/Player";
import PlayerFooter from "./components/PlayerFooter";

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
    }

  }, [])

  return (
    <div className="App">
      <header className="App-header">
      {!token && (
        <div className="home" style={{backgroundImage: `url(${home_background})`}}>
          <div className="home-container">
            <h1 className="home-header">Classical Junkie</h1>
            <p className="home-subtitle">Scratch your classical music itch and listen to the classics you've been searching for</p>
            <a
              className="home-btn-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
            <p className="home-attribution">Powered By the Spotify Web API and Web Playback SDK</p>
          </div>
        </div>
      )}
      {(token) && (
        <Player setCurrentUri={setCurrentUri} token={token}/>
      )}
      </header>
      <footer>
      {(token) && (
        <PlayerFooter currentUri={currentUri} token={token}/>
      )}
      </footer>
    </div>
  );

}
export default App;
