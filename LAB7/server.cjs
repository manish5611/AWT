const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const BookSchema = new mongoose.Schema({

    title: String,
    author: String

});

// Model
const Book = mongoose.model("Book", BookSchema);


// INSERT
app.post("/books", async (req, res) => {

    const book = new Book(req.body);

    await book.save();

    res.json({
        message: "Book Added Successfully",
        book
    });

});


// DISPLAY
app.get("/books", async (req, res) => {

    const books = await Book.find();

    res.json(books);

});


// UPDATE
app.put("/books/:id", async (req, res) => {

    const book = await Book.findByIdAndUpdate(

        req.params.id,
        req.body,
        { new: true }

    );

    res.json({
        message: "Book Updated",
        book
    });

});


// DELETE
app.delete("/books/:id", async (req, res) => {

    await Book.findByIdAndDelete(req.params.id);

    res.json({

        message: "Book Deleted Successfully"

    });

});

app.listen(process.env.PORT, () => {

    console.log("Server Running on Port 5000");

});
