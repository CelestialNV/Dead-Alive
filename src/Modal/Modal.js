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
            The premiss is as follows : You need to guess the random generated number. The application will tell you if your guess has any digits that are present in the number but its position is false i.e Alive, and if you have any digits that are present and their position is correct in the number i.e Dead.
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