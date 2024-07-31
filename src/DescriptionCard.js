// DescriptionCard.js
import React from 'react';
import './DescriptionCard.css'; // Create this file for styling if needed

const DescriptionCard = ({ book, onClose }) => {
    const { title, authors, description, imageLinks } = book.volumeInfo;
    const thumbnail = imageLinks?.thumbnail || 'https://via.placeholder.com/400';

    return (
        <div className="description-card">
            <button className="close-btn" onClick={onClose}>X</button>
            <img src={thumbnail} alt={title} />
            <h2>{title}</h2>
            <h3>{authors?.join(', ')}</h3>
            <p>{description}</p>
        </div>
    );
};

export default DescriptionCard;
