import React, {useState, useEffect, useRef} from "react";
import ReactPlayer from 'react-player';

function Player(props) {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState({});
  const textRef = useRef(null);

  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(props.token); }
      });

      player.connect()
    };
  }, [])

  function handleChange(e) {
    const {value} = e.target;
    setSearchInput(value);
  }

  function play(uri) {
    fetch("https://api.spotify.com/v1/me/player/play", {
      method: 'PUT',
      body: JSON.stringify({ uris: [uri] }),
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })
    props.setCurrentUri(uri);
  }

  function search(e) {
    e.preventDefault();
    fetch(`https://api.spotify.com/v1/search?q=${searchInput.split(" ").join('%20')}&type=artist,track&limit=5`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data);
    })
  }

  return (
    <div className="search-container container">
      <h1 className="search-header">Search</h1>
      <form className="search-form">
        <input className="search-input" type="text" value={searchInput} onChange={handleChange}/>
        <button className="search-btn" onClick={search}><i className="fas fa-search"></i></button>
      </form>
      <ul className="search-list">
        {data.tracks !== undefined && data.tracks.items.map(item => (
          <div className="search-item" key={item.uri}>
            <div className="search-item-main" onClick={() => play(item.uri)}>
              <div className="search-item-info">
                <p className="search-item-name" ref={textRef}>{item.name}</p>
                <p className="search-item-artists">{item.type === "track" ? "Song" : item.type} <i className="fas fa-circle"></i> {item.artists.map(artist => artist.name).join(", ")}</p>
              </div>
              <img className="search-img" src={item.album.images[1].url}/>
            </div>
            <i onClick={() => console.log("Hello")} className="fas fa-ellipsis-v"></i>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Player;
