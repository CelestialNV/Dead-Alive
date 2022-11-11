import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="Help-button">
        Help
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <center><h2>Welcome to Dead-Alive</h2></center>
            <p>
              The goal of the game is to guess the random 4 digits number. After you enter your guess, you will be given how many digits are present in the number you but their order is not the same i.e Alive, and how many digits are present and their order is right whithin your guess i.e Dead.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}