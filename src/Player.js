import React, {useState, useEffect} from "react";

function Player(props) {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    const {value} = e.target;
    setSearchInput(value);
  }

  function search(e) {
    e.preventDefault();
    fetch(`https://api.spotify.com/v1/search?q=${searchInput.split(" ").join('%20')}%20genre:classical&type=artist,track&limit=3`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }

  return (
    <div className="player">
      <form>
        <input type="text" value={searchInput} onChange={handleChange}/>
        <button onClick={search}>Search</button>
      </form>
    </div>
  );
}

export default Player;
