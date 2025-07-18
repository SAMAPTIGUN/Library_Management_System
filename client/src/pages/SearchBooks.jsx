import React, { useState } from "react";

const SearchBooks = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Dummy filter – replace with backend API call
    const dummyBooks = [
      { id: 1, title: "Data Structures", author: "Narasimha Karumanchi" },
      { id: 2, title: "Operating System Concepts", author: "Galvin" },
    ];
    const filtered = dummyBooks.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="container mt-5">
      <h3>🔍 Search Books</h3>
      <form className="d-flex my-3" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="Enter book title or author"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      {results.length > 0 && (
        <ul className="list-group">
          {results.map((book) => (
            <li key={book.id} className="list-group-item">
              <strong>{book.title}</strong> — {book.author}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBooks;
