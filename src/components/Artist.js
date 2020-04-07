import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import MoreInfoModal from './MoreInfoModal';

function Artist(props) {
  const [artist, setArtist] = useState({info: {}, releases: [], topTracks: [], relatedArtists:{}});
  const {artistId} = useParams();
  const history = useHistory();

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
    .then(data => setArtist(prevArtist => ({...prevArtist, topTracks: data.tracks})))
  }, [])

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?limit=5`, {
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })
    .then(response => response.json())
    .then(data => setArtist(prevArtist => ({...prevArtist, releases: data.items})))
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
                        <MoreInfoModal
                          albumId={track.album.id}
                          artistId={artistId}
                          token={props.token}
                          trackUri={track.uri}
                          trackName={track.name}
                          trackArtists={track.artists.map(artist => artist.name).join(", ")}
                          trackImg={track.album.images[1].url}
                        />
                      </div>
                    )
                  }
                })}
              </ul>
              </>
            )}
          </section>

          <section className="artist-releases artist-section">
            {artist.releases !== undefined && (
              <>
              <h3 className="artist-section-header">Latest Releases</h3>
              <ul className="releases-list">
                {artist.releases.map(release => (
                  <div className="releases-item" key={release.id} onClick={() => history.push(`/album/${release.id}`)}>
                    <div className="releases-item-info">
                      <p className="releases-item-name">{release.name}</p>
                      <p className="releases-item-year">{release.release_date.slice(0, 4)}<i className="fas fa-circle"></i>{release.type === "track" ? "Song" : release.type}</p>
                    </div>
                    <img className="releases-item-img" src={release.images[1].url}/>
                  </div>
                ))}
              </ul>
              <button onClick={() => history.push(`/artist/${artistId}/releases`)} className="releases-btn"><strong>See Discography</strong></button>
              </>
            )}
          </section>
        </main>

      </div>
    )
  )
}

export default Artist;
