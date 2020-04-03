import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Artist(props) {
  const [artist, setArtist] = useState({info: {}, albums: {}, topTracks: [], relatedArtists:{}});
  const {artistId} = useParams();

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })
    .then(response => response.json())
    .then(data => setArtist(prevArtist => ({...prevArtist, info: data})))
  }, [])

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=from_token`, {
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.tracks)
      setArtist(prevArtist => ({...prevArtist, topTracks: data.tracks}))
    })
  }, [])

  return (
    artist.info.images !== undefined && (
      <div className="artist-container">
        <div className="artist-info"
        style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), #111111),
        url(${artist.info.images[0].url})`}}
        >
          <h1 className="artist-info-name">{artist.info.name}</h1>
        </div>

        <main className="container artist-main">
          <section className="artist-popular artist-section">
            {artist.topTracks !== undefined && (
              <>
              <h3 className="artist-section-header">Popular</h3>
              <ul className="artist-track-list">
                {artist.topTracks.map((track, i) => {
                  if(i < 5) {
                    return (
                      <div key={track.id} className="track-list-item">
                        <div className="track-list-item-info artist-track-list-item-info" onClick={() => props.play(track.uri)}>
                          <p className="track-list-item-num">{i + 1}</p>
                          <div>
                            <p className="track-list-item-name">{track.name}</p>
                            <p className="track-list-item-artists">{track.artists.map(artist => artist.name).join(", ")}</p>
                          </div>
                        </div>
                        <i onClick={() => console.log("Hello")} className="fas fa-ellipsis-v"></i>
                      </div>
                    )
                  }
                })}
              </ul>
              </>
            )}
          </section>
        </main>

      </div>
    )
  )
}

export default Artist;
