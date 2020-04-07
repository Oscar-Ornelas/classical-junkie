import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';

function ArtistReleases(props) {
  const [releases, setReleases] = useState({albums: [], singles: []});
  const {artistId} = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album`, {
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setReleases(prevReleases => ({...prevReleases, albums: data.items}))
    })
  }, [])

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=single`, {
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setReleases(prevReleases => ({...prevReleases, singles: data.items}))
    })
  }, [])

  return (
    <>
      <i onClick={() => history.push("/search")} className="search fas fa-search"></i>
      <i onClick={() => history.goBack()} className="go-back fas fa-arrow-left"></i>
      <main className="all-releases container">
        {releases.albums !== undefined && (
          <section className="all-releases-albums all-releases-section">
            <h3 className="artist-section-header">Albums</h3>
            <ul className="all-releases-list">
              {releases.albums.map(album => (
                <div className="releases-item" key={album.id} onClick={() => history.push(`/album/${album.id}`)}>
                  <div className="releases-item-info">
                    <p className="releases-item-name">{album.name}</p>
                    <p className="releases-item-year">{album.release_date.slice(0, 4)}</p>
                  </div>
                  <img className="releases-item-img" src={album.images[1].url}/>
                </div>
              ))}
            </ul>
          </section>
        )}

        {releases.singles !== undefined && (
          <section className="all-releases-singles all-releases-section">
            <h3 className="artist-section-header">Singles</h3>
            <ul className="all-releases-list">
              {releases.singles.map(single => (
                <div className="releases-item" key={single.id} onClick={() => history.push(`/album/${single.id}`)}>
                  <div className="releases-item-info">
                    <p className="releases-item-name">{single.name}</p>
                    <p className="releases-item-year">{single.release_date.slice(0, 4)}</p>
                  </div>
                  <img className="releases-item-img" src={single.images[1].url}/>
                </div>
              ))}
            </ul>
          </section>
        )}

      </main>
    </>
  )
}

export default ArtistReleases;
