import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageBooks = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "", isbn: "" });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios.get("/api/books")
      .then(res => setBooks(res.data))
      .catch(err => console.error("Error fetching books", err));
  };

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    axios.post("/api/books", newBook)
      .then(() => {
        fetchBooks();
        setNewBook({ title: "", author: "", isbn: "" });
      })
      .catch(err => console.error("Add failed", err));
  };

  const deleteBook = (id) => {
    axios.delete(`/api/books/${id}`)
      .then(() => setBooks(books.filter(book => book._id !== id)))
      .catch(err => console.error("Delete failed", err));
  };

  return (
    <div className="container mt-5">
      <h2>Manage Books</h2>

      <form className="row g-3 mb-4" onSubmit={handleAddBook}>
        <div className="col-md-4">
          <input type="text" className="form-control" name="title" value={newBook.title} onChange={handleChange} placeholder="Book Title" required />
        </div>
        <div className="col-md-4">
          <input type="text" className="form-control" name="author" value={newBook.author} onChange={handleChange} placeholder="Author" required />
        </div>
        <div className="col-md-3">
          <input type="text" className="form-control" name="isbn" value={newBook.isbn} onChange={handleChange} placeholder="ISBN" required />
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-success w-100">Add</button>
        </div>
      </form>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteBook(book._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBooks;
