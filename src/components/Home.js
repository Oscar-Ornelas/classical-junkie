import React from 'react';
import home_background from '../imgs/home_background.PNG';

function Home(props) {
  return (
    <div className="home" style={{backgroundImage: `url(${home_background})`}}>
      <div className="home-container">
        <h1 className="home-header">Classical Junkie</h1>
        <p className="home-subtitle">Scratch your classical music itch and listen to the classics you've been searching for</p>
        <a
          className="home-btn-link"
          href={`${props.authEndpoint}?client_id=${props.clientId}&redirect_uri=${props.redirectUri}&scope=${props.scopes.join("%20")}&response_type=token&show_dialog=true`}
        >
          Login to Spotify
        </a>
        <p className="home-attribution">Powered By the Spotify Web API and Web Playback SDK</p>
      </div>
    </div>
  )
}

export default Home;
