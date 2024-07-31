import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "https://www.googleapis.com/books/v1/volumes?";

const Bookathon = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    searchBooks("book");
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        searchBooks(searchTerm);
    }
  }

  // const handleBookClick = (id) => {
  //   window.location.href = `https://www.imdb.com/title/${id}`;
  // }

  const searchBooks = async (title) => {
    const response = await fetch(`${API_URL}&q=${title}`);
    const data = await response.json();
    console.log(data.items);
    setBooks(data.items);
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
      {books?.length > 0 ? (
        <div className="container">
          {books.map((book) => (
            <BookCard book={book}/>
            // <BookCard book={book} onClick={()=>handleBookClick(book.)} />
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

export default Bookathon;