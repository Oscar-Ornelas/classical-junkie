import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function MoreInfoModal(props) {
  const [modalIsOpen,setIsOpen] = useState(false);
  const history = useHistory();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  function addTrackToQueue() {
    fetch(`https://api.spotify.com/v1/me/player/queue?uri=${props.trackUri}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })
    closeModal();
  }

  function addAlbumToQueue() {
    fetch(`https://api.spotify.com/v1/albums/${props.id}`, {
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      data.tracks.items.forEach(track => (
        fetch(`https://api.spotify.com/v1/me/player/queue?uri=${track.uri}`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${props.token}`
          }
        })
      ))
    })
    closeModal();
  }

  return (
    <div>
      <i onClick={openModal} className="fas fa-ellipsis-v"></i>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal">
          <div className="modal-header">
            <h3 className="modal-header-name">{props.trackName}</h3>
            <p className="modal-header-artists">{props.trackArtists}</p>
            <img className="modal-header-img" src={props.trackImg}/>
          </div>

          <ul className="modal-options">
            <div onClick={props.itemType === "album" ? addAlbumToQueue : addTrackToQueue} className="modal-option">
              <i className="fas fa-layer-group"></i>
              <p className="modal-option-description">Add to Queue</p>
            </div>
            <div onClick={() => history.push(`/album/${props.albumId}`)} className="modal-option">
              <i className="fas fa-compact-disc"></i>
              <p className="modal-option-description">View Album</p>
            </div>
            <div onClick={() => history.push(`/artist/${props.artistId}`)} className="modal-option">
              <i className="fas fa-user"></i>
              <p className="modal-option-description">View Artist</p>
            </div>
          </ul>
        </div>
      </Modal>
    </div>
  )
}

export default MoreInfoModal;
