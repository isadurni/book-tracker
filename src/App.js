// App.js

import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import './App.css';

const API_URL = "https://www.googleapis.com/books/v1/volumes?";

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState(null);

  useEffect(() => {
    searchBooks('');
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchBooks(searchTerm);
    }
  };

  const searchBooks = async (title) => {
    const response = await fetch(`${API_URL}&q=${title}`);
    const data = await response.json();
    setBooks(data.items || []);
  };

  return (
    <div className="app">
      <h1>Book Search</h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search for books..."
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchBooks(searchTerm)}
        />
      </div>
      {books.length > 0 ? (
        <div className="container">
          {books.map((book) => (
            <MovieCard
              key={book.id}
              book={book}
              isSelected={selectedBookId === book.id}
              onClick={() => setSelectedBookId(book.id === selectedBookId ? null : book.id)}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No books found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
