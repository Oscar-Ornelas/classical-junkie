import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import MoreInfoModal from './MoreInfoModal';

function Album(props) {
  const [album, setAlbum] = useState({});
  const {albumId} = useParams();

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/albums/${albumId}`, {
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setAlbum(data)
    })
  }, [])

  return (
    album.name !== undefined && (
      <div className="album-container">
        <div className="album-info">
          <h2 className="album-info-name">{album.name}</h2>
          <p className="album-info-artists">Album by {album.artists.map(artist => artist.name).join(", ")} <i className="fas fa-circle"></i> {album.release_date.slice(0, 4)}</p>
          <img className="album-info-img" src={album.images[1].url}/>
        </div>

        <ul className="track-list">
          {album.tracks.items.map(track => (
            <div key={track.id} className="track-list-item">
              <div className="track-list-item-info" onClick={() => props.play(track.uri)}>
                <p className="track-list-item-name">{track.name}</p>
                <p className="track-list-item-artists">{track.artists.map(artist => artist.name).join(", ")}</p>
              </div>
              <MoreInfoModal
                albumId={album.id}
                artistId={album.artists[0].id}
                token={props.token}
                trackUri={track.uri}
                trackName={track.name}
                trackArtists={track.artists.map(artist => artist.name).join(", ")}
                trackImg={album.images[1].url}
              />
            </div>
          ))}
        </ul>
      </div>
    )
  )
}

export default Album;
