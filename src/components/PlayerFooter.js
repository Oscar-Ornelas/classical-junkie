import React, {useState, useEffect} from 'react';

function PlayerFooter(props) {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [progressMs, setProgressMs] = useState(0);
  const [durationMs, setDurationMs] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progressStyles, setProgressStyles] = useState({});

  useEffect(() => {
    getCurrentlyPlaying();
  }, [props.currentUri])

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/me/player/shuffle?state=true`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })
  }, [])

  useEffect(() => {
    if(currentlyPlaying && progressMs < durationMs && isPlaying) {
      const timeoutId = setTimeout(() => {
        setProgressStyles({width: `${progressMs * 100 / durationMs}%`});
        setProgressMs(prevProgressMs => prevProgressMs + 11);
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

  function nextTrack() {
    fetch("https://api.spotify.com/v1/me/player/next", {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })
    .then(() => getCurrentlyPlaying())
  }

  function prevTrack() {
    fetch("https://api.spotify.com/v1/me/player/previous", {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })
    .then(() => getCurrentlyPlaying())
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

  function getCurrentlyPlaying() {
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
      })
      .catch(err => console.log(err))
    }, 1000)
  }

  return (
    <div className="player-footer-container">
      {currentlyPlaying && (
        <>
          <div className="player-footer">

              <div className="player-footer-info">
                <div className="player-footer-controls">
                  <button onClick={prevTrack} className="player-footer-btn"><i className="fas fa-step-backward"></i></button>
                  <button onClick={isPlaying ? pause : play} className="player-footer-btn">{isPlaying ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}</button>
                  <button onClick={nextTrack} className="player-footer-btn"><i className="fas fa-step-forward"></i></button>
                </div>
                <div className="player-footer-progress-container">
                  <div className="player-footer-progress" style={progressStyles}></div>
                </div>
                <div className="player-footer-track">
                  <p className="player-footer-track-info">
                    {currentlyPlaying.item.name}
                    <i className="fas fa-circle"></i>
                    <span className="player-footer-artists">{currentlyPlaying.item.artists.map(artist => artist.name).join(", ")}</span>
                  </p>
                </div>
              </div>

            <img className="player-footer-img" src={currentlyPlaying.item.album.images[1].url}/>
          </div>
        </>
      )}
    </div>
  )
}

export default PlayerFooter;
