// Popup.js
import React from 'react';
import './Popup.css'; // Import your CSS file

const Popup = ({ isVisible, onClose, message }) => {
  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>

        <p>Number of Nodes : {message.num_nodes}</p>
        <p>Number of Edges : {message.num_edges}</p>
        <p>{message.is_dag?"its directed acyclic graph":"its directed cyclic graph"}</p>

      </div>
    </div>
  );
};

export default Popup;
