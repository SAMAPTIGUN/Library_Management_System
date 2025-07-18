const express = require("express");
const router = express.Router();
const {
  addBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controller/bookController");

// All routes should use real function handlers
router.post("/", addBook);           // POST /api/books
router.get("/", getBooks);           // GET /api/books
router.get("/:id", getBookById);     // GET /api/books/:id
router.put("/:id", updateBook);      // PUT /api/books/:id
router.delete("/:id", deleteBook);   // DELETE /api/books/:id

module.exports = router;
