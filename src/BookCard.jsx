import React from 'react';
import './App.css';

const BookCard = ({ book }) => {
  const thumbnail = book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/400x600?text=No+Cover';
  const title = book.volumeInfo.title || 'No Title';
  const authors = book.volumeInfo.authors?.join(', ') || 'Unknown Author';
  const description = book.volumeInfo.description
    ? book.volumeInfo.description.length > 120
      ? book.volumeInfo.description.slice(0, 120) + '...'
      : book.volumeInfo.description
    : 'No description available.';
  const published = book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate.slice(0, 4) : 'N/A';
  const categories = book.volumeInfo.categories?.join(', ') || 'General';

  return (
    <div className="card h-100 shadow book-card-hover border-0 rounded-4 bg-gradient-card position-relative">
      <img src={thumbnail} className="card-img-top rounded-top-4" alt={title} style={{height: 240, objectFit: 'cover'}} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-1 fw-semibold text-primary" title={title}>{title.length > 40 ? title.slice(0, 40) + '...' : title}</h5>
        <h6 className="card-subtitle mb-2 text-muted" title={authors}>{authors.length > 40 ? authors.slice(0, 40) + '...' : authors}</h6>
        <div className="mb-1 small text-secondary">
          <span className="me-2"><strong>Year:</strong> {published}</span>
          <span><strong>Category:</strong> {categories.length > 30 ? categories.slice(0, 30) + '...' : categories}</span>
        </div>
        <p className="card-text small text-secondary flex-grow-1" title={description}>{description}</p>
      </div>
    </div>
  );
};

export default BookCard;