import axios from "axios";
const BASE_URL = "http://localhost:5000/api/books";
export const addBook = async (data) => {
  try {
    return await axios.post(`${BASE_URL}/add`, data);
  } catch (error) {
    console.error("Error adding book:", error);
  }
};

// Get all books
export const getAllBooks = async () => {
  try {
    return await axios.get(`${BASE_URL}/all`);
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

// Delete book
export const deleteBook = async (id) => {
  try {
    return await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting book:", error);
  }
};

//  Search books
export const searchBooks = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search?query=${query}`);
    console.log("Backend responded with:", response.data);
    return response;
  } catch (error) {
    console.error("Error from backend:", error.response?.data || error.message);
    throw error; // Re-throw so UI can catch it
  }
};