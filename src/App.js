// App.js

import React, { useState, useEffect, useRef } from 'react';
import BookCard from './BookCard';
import SearchIcon from './search.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const API_URL = "https://www.googleapis.com/books/v1/volumes?";

const classicBooks = [
  {
    id: 'classic-1',
    volumeInfo: {
      title: 'Animal Farm',
      authors: ['George Orwell'],
      publishedDate: '1945',
      categories: ['Classic', 'Political Satire'],
      description: 'A satirical allegory of Soviet totalitarianism, Animal Farm tells the story of a group of farm animals who overthrow their human farmer.',
      imageLinks: {
        thumbnail: 'https://books.google.com/books/content?id=GhvjsczkdBIC&printsec=frontcover&img=1&zoom=2',
      },
      infoLink: 'https://en.wikipedia.org/wiki/Animal_Farm',
    },
  },
  {
    id: 'classic-2',
    volumeInfo: {
      title: '1984',
      authors: ['George Orwell'],
      publishedDate: '1949',
      categories: ['Classic', 'Dystopian'],
      description: 'A dystopian novel set in a totalitarian society under constant surveillance, 1984 explores themes of truth, freedom, and oppression.',
      imageLinks: {
        thumbnail: 'https://books.google.com/books/content?id=cpAREAAAQBAJ&printsec=frontcover&img=1&zoom=2',
      },
      infoLink: 'https://en.wikipedia.org/wiki/Nineteen_Eighty-Four',
    },
  },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    setHasSearched(false);
    setBooks([]);
    setError(null);
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      doSearch();
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setHasSearched(false);
    setBooks([]);
    setError(null);
    inputRef.current.focus();
  };

  const doSearch = () => {
    setHasSearched(true);
    searchBooks(searchTerm);
  };

  const searchBooks = async (title) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}&q=${title}`);
      const data = await response.json();
      setBooks(data.items || []);
    } catch (err) {
      setError('Failed to fetch books.');
    }
    setLoading(false);
  };

  // Show X only if there is a search term and not loading and not showing results and not hasSearched
  const showClear = searchTerm && !loading && books.length === 0 && !hasSearched;

  return (
    <div className="app bg-light min-vh-100 d-flex flex-column">
      <header className="gradient-header shadow-sm py-4 mb-4 w-100">
        <div className="container text-center d-flex flex-column align-items-center">
          <h1 className="display-4 fw-bold mb-1 headline-text">Book Explorer</h1>
          <div className="lead tagline mb-2">Find your next great read instantly</div>
        </div>
      </header>
      <main className="flex-grow-1 container d-flex flex-column align-items-center">
        <div className="searchbar-slick w-100 d-flex justify-content-center mb-4 mt-2" style={{maxWidth: 600}}>
          <div className="position-relative w-100">
            <input
              ref={inputRef}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Search for a book..."
              className="form-control search-input-slick ps-4 pe-5"
              aria-label="Search for books"
              style={{fontSize: '1.15rem'}}
            />
            {showClear && (
              <button className="btn btn-link position-absolute end-0 top-50 translate-middle-y me-5 p-0" style={{zIndex: 2}} onClick={handleClear} aria-label="Clear search">
                <span style={{fontSize: '1.5rem', color: '#bbb'}}>&times;</span>
              </button>
            )}
            <img
              src={SearchIcon}
              alt="search"
              className="search-icon-hourglass position-absolute end-0 top-50 translate-middle-y me-2"
              style={{width: 22, height: 22, cursor: 'pointer'}}
              onClick={doSearch}
            />
          </div>
        </div>
        {hasSearched ? (
          <>
            {loading && (
              <div className="my-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            {error && (
              <div className="alert alert-danger w-100 text-center" role="alert">{error}</div>
            )}
            {!loading && !error && books.length > 0 ? (
              <div className="row g-4 justify-content-center w-100">
                {books.map((book) => (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" key={book.id}>
                    <BookCard book={book} />
                  </div>
                ))}
              </div>
            ) : null}
            {!loading && !error && books.length === 0 && (
              <div className="empty text-center mt-5">
                <h2 className="fw-normal fs-5">No books found</h2>
              </div>
            )}
          </>
        ) : (
          <div className="empty text-center mt-2">
            <div>
              <p className="lead text-secondary mb-4">
                Search for books by title, author, or keyword to discover your next great read!
              </p>
              <div className="row g-4 justify-content-center">
                {classicBooks.map((book) => (
                  <div className="col-12 col-sm-6 col-md-5 col-lg-4 d-flex" key={book.id}>
                    <BookCard book={book} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <footer className="bg-white text-center py-3 mt-auto shadow-sm small text-muted">
        &copy; {new Date().getFullYear()} Book Explorer &mdash; Powered by Google Books
      </footer>
    </div>
  );
};

export default App;
