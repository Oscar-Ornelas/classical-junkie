import React, {useState, useEffect} from 'react';

function PlayerFooter(props) {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [progressMs, setProgressMs] = useState(0);
  const [durationMs, setDurationMs] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progressStyles, setProgressStyles] = useState({});

  useEffect(() => {
    setTimeout(() => {
      fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${props.token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        setCurrentlyPlaying(data)
        setDurationMs(data.item.duration_ms)
        setProgressMs(0)
        setProgressMs(data.progress_ms)
        setIsPlaying(data.is_playing)
        console.log(data)
      })
      .catch(err => console.log(err))
    }, 1000)

  }, [props.currentUri])

  useEffect(() => {
    if(currentlyPlaying && progressMs < durationMs && isPlaying) {
      const timeoutId = setTimeout(() => {
        setProgressStyles({width: `${progressMs * 100 / durationMs}%`});
        setProgressMs(prevProgressMs => prevProgressMs + 12);
      }, 10)

      return () => clearTimeout(timeoutId);

    } else {
      setProgressStyles({width: "0%"});
    }
  }, [progressMs, isPlaying])

  function play() {
    fetch("https://api.spotify.com/v1/me/player/play", {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })
    .then(() => setIsPlaying(true))
  }

  function pause() {
    fetch("https://api.spotify.com/v1/me/player/pause", {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })
    .then(() => setIsPlaying(false))
  }

  return (
    <div className="player-footer-container">
      {currentlyPlaying && (
        <>
          <div className="player-footer-progress-container">
            <div className="player-footer-progress" style={progressStyles}></div>
          </div>
          <div className="player-footer">
            <div className="player-footer-main">
              <div className="player-footer-info">
                <p>
                  {currentlyPlaying.item.name}
                  <i className="fas fa-circle"></i>
                  <span className="player-footer-artists">{currentlyPlaying.item.artists.map(artist => artist.name).join(", ")}</span>
                </p>
              </div>
              <img className="player-footer-img" src={currentlyPlaying.item.album.images[1].url}/>
            </div>
            <button onClick={isPlaying ? pause : play} className="player-footer-btn">{isPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}</button>
          </div>
        </>
      )}
    </div>
  )
}

export default PlayerFooter;
