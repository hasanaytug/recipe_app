import React from "react";

function Modal({ instructions, setModalOn }) {
  return (
    <div className="modal">
      <div style={{ position: "relative" }}>
        <button onClick={() => setModalOn(false)} className="modal-close">
          X
        </button>
        <p>{instructions}</p>
      </div>
    </div>
  );
}

export default Modal;
