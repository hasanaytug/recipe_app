import React from "react";

function Modal({ recepi, setModalOn }) {
  return (
    <div className="modal">
      <div style={{ position: "relative" }}>
        <button onClick={() => setModalOn(false)} className="modal-close">
          X
        </button>
        <h2 style={{ marginBottom: "20px" }}>{recepi[1].toUpperCase()}</h2>
        <p style={{ marginBottom: "20px" }}>{recepi[0]}</p>
        <a
          style={{ textDecoration: "none", color: "#c7253e" }}
          href={recepi[2]}
          target="_blank"
        >
          Video Recipe
        </a>
      </div>
    </div>
  );
}

export default Modal;
