import React from "react";

function Modal({ recepi, setModalOn }) {
  return (
    <div className="modal">
      <div style={{ position: "relative" }}>
        <button onClick={() => setModalOn(false)} className="modal-close">
          X
        </button>
        <h2>{recepi[1]}</h2>
        <p>{recepi[0]}</p>
      </div>
    </div>
  );
}

export default Modal;
