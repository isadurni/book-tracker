// DescriptionCard.js

import React from 'react';
import './DescriptionCard.css'; // Add specific styles if needed

const DescriptionCard = ({ book, onClose }) => {
  return (
    <div className={`description-card ${book ? 'show' : ''}`}>
      <button onClick={onClose}>Close</button>
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.description}</p>
      {/* Render additional book details */}
    </div>
  );
};

export default DescriptionCard;
