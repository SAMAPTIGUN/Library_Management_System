import React from "react";

const MyBooks = () => {
  // Sample data – replace with API call
  const books = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin", dueDate: "2025-08-01" },
    { id: 2, title: "You Don't Know JS", author: "Kyle Simpson", dueDate: "2025-08-05" },
  ];

  return (
    <div className="container mt-5">
      <h3>📚 My Borrowed Books</h3>
      {books.length === 0 ? (
        <p>You haven't borrowed any books yet.</p>
      ) : (
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyBooks;
