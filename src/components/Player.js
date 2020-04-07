import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';
import {portrait_placeholder} from '../imgs/portrait_placeholder.png';
import MoreInfoModal from './MoreInfoModal';


function Player(props) {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState({});
  const history = useHistory();

  function handleChange(e) {
    const {value} = e.target;
    setSearchInput(value);
  }

  function search(e) {
    e.preventDefault();
    fetch(`https://api.spotify.com/v1/search?q=${searchInput.split(" ").join('%20')}%20genre:classical&type=artist,track,album&limit=2`, {
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
    history.push(`/search/${searchInput}`)
  }

  return (
    <div className="search-container container">
      <h1 className="search-header">Search</h1>
      <form className="search-form">
        <input className="search-input" type="text" value={searchInput} onChange={handleChange}/>
        <button className="search-btn" onClick={search}><i className="fas fa-search"></i></button>
      </form>
      {data.tracks === undefined ? (
        <div className="search-empty">
          <i className="fas fa-search"></i>
          <p className="search-call-to-action">Search Classical Junkie</p>
          <p>Find your favorite classical music and artists.</p>
        </div>
      ) : (
        <ul className="search-list">
          {data.tracks.items !== undefined && data.tracks.items.map(item => (
            <div className="search-item" key={item.id}>
              <div className="search-item-main" onClick={() => props.play(item.uri)}>
                <div className="search-item-info">
                  <p className="search-item-name">{item.name}</p>
                  <p className="search-item-artists">{item.type === "track" ? "Song" : item.type} <i className="fas fa-circle"></i> {item.artists.map(artist => artist.name).join(", ")}</p>
                </div>
                <img className="search-item-img" src={item.album.images[1].url}/>
              </div>
              <MoreInfoModal
                albumId={item.album.id}
                artistId={item.album.artists[0].id}
                token={props.token}
                trackUri={item.uri}
                trackName={item.name}
                trackArtists={item.artists.map(artist => artist.name).join(", ")}
                trackImg={item.album.images[1].url}
              />
            </div>
          ))}
          {data.albums.items !== undefined && data.albums.items.map(item => (
            <div className="search-item" key={item.id}>
              <div className="search-item-main" onClick={() => history.push(`/album/${item.id}`)}>
                <div className="search-item-info">
                  <p className="search-item-name">{item.name}</p>
                  <p className="search-item-artists">{item.type === "track" ? "Song" : item.type} <i className="fas fa-circle"></i> {item.artists.map(artist => artist.name).join(", ")}</p>
                </div>
                <img className="search-item-img" src={item.images[1].url}/>
              </div>
              <MoreInfoModal
                albumId={item.id}
                artistId={item.artists[0].id}
                itemType={item.type}
                token={props.token}
                trackUri={item.uri}
                trackName={item.name}
                trackArtists={item.artists.map(artist => artist.name).join(", ")}
                trackImg={item.images[1].url}
              />
            </div>
          ))}
          {data.artists.items !== undefined && data.artists.items.map(item => (
            <div className="search-item" key={item.id}>
              <div className="search-item-main" onClick={() => history.push(`/artist/${item.id}`)}>
                <div className="search-item-info">
                  <p className="search-item-name">{item.name}</p>
                  <p className="search-item-artists">{item.type === "track" ? "Song" : item.type} <i className="fas fa-circle"></i> {item.name}</p>
                </div>
                <img className="search-item-img search-artist-img" src={item.images[1] === undefined ? portrait_placeholder : item.images[1].url}/>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Player;
