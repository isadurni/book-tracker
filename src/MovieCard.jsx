// MovieCard.js
import React from 'react';

const MovieCard = ({ book, onClick }) => {
    const thumbnail = book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/400';

    return (
        <div className='movie' onClick={onClick}>
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
    );
};

export default MovieCard;
