const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory database for Library Management
let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: '1984', author: 'George Orwell' }
];

// GET: Retrieve all books
app.get('/books', (req, res) => {
  res.json(books);
});

// GET: Retrieve a specific book by ID
app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);
  
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.json(book);
});

// POST: Add a new book
app.post('/books', (req, res) => {
  const newBook = {
    id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
    title: req.body.title,
    author: req.body.author
  };
  
  books.push(newBook);
  res.status(201).json({ message: 'Book added successfully', book: newBook });
});

// PUT: Update an existing book
app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);
  
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  
  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;
  
  res.json({ message: 'Book updated successfully', book: book });
});

// DELETE: Remove a book
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex(b => b.id === bookId);
  
  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }
  
  const deletedBook = books.splice(bookIndex, 1);
  res.json({ message: 'Book deleted successfully', book: deletedBook[0] });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Library Management Server is running on http://localhost:${PORT}`);
});
