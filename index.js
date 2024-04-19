// You are tasked with building a simple REST API for managing a collection of books. The API should support the following operations:
// Get all books: Retrieve a list of all books.
// Get a book by ID: Retrieve a specific book by its unique ID.
// Add a new book: Add a new book to the collection.
// Update a book: Update an existing book's details.
// Delete a book: Remove a book from the collection
// Design and implement the REST API using Node.js & Express.js. Ensure proper error handling & validation of inputs

const express = require("express");
const bodParser = require("express-json");

const app = express();
app.use(express.json());
var books = [];
app.post("/books", (req, res) => {
  const data = req.body();
  try {
    const newData = books.save(data);
    res.send(newData);
  } catch (error) {
    console.log(error);
  }
});
// app.get("/books", (req, res) => {});
app.get("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const index = books.findIndex((book) => book.id === bookId);
  if (index > -1) {
    const bookByID = books.filter((book) => book.id === bookByID);
    res.send(bookByID);
  } else {
    res.send("Book not found");
  }
});
app.patch("/books/:id", (req, res) => {
  const bookId = req.body;
  const id = req.params.id;
  const index = books.findIndex((book) => book.id === id);
  if (index > -1) {
    const bookByID = books.save(bookId);
    res.send(bookByID);
  } else {
    res.send("Book not found");
  }
});
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const index = books.findIndex((book) => book.id === bookId);
  if (index > -1) {
    const bookByID = books.splice(1, index);
    res.send("Book is deleted by Id");
  } else {
    res.send("Book not found");
  }
});

app.listen(2410, () => console.log("Port listent at 2410"));
