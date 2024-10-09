import React, { useState } from 'react';
import './App.css'; // Ensure CSS is correctly imported

const MovieCard = ({ book, onClick, isSelected }) => {
  const [flipped, setFlipped] = useState(false);
  
  const handleClick = () => {
    setFlipped(!flipped);
    if (onClick) onClick(); // Call the onClick prop if needed
  };

  const thumbnail = book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/400';

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
        {flipped ?
              <div>
              <div className='description'>
                <div>
                  <p>{}</p>
                </div>
                <div>
                  <img src={thumbnail} alt={book.volumeInfo.title} />
                </div>
                <div>
                  <span>{'Synopsis'}</span>
                  <h3>{book.volumeInfo.description}</h3>
                </div>
              </div>
            </div>
        : 
      <div>
        <div className='movie'>
          <div>
            <p>{book.volumeInfo.categories?.join(', ')}</p>
          </div>
          <div>
            <img src={thumbnail} alt={book.volumeInfo.title} />
          </div>
          <div>
            <span>{book.volumeInfo.authors?.join(', ')}</span>
            <h3>{book.volumeInfo.title}</h3>
          </div>
        </div>
      </div>
}
    </div>
  );
};

export default MovieCard;
