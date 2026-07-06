require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

const connectDB = require("./db/db");
const bookModel = require("./models/book");


connectDB();

app.get("/books", async (req, res) => {
    const books = await bookModel.find({});

    res.render("books/index", { books });

});

// NEW ROUTE
// Show form to create a new book
app.get("/books/new", (req, res) => {

    res.render("books/new");
});

// CREATE ROUTE
// Save new book
app.post("/books", async (req, res) => {

    const newBook = new bookModel(req.body);

    await newBook.save();

    res.redirect("/books");

});


// SHOW ROUTE
// Show one specific book
app.get("/books/:id", async (req, res) => {

    const { id } = req.params;

    const book = await bookModel.findById(id);

    res.render("books/show", { book });

});


// EDIT ROUTE
// Show edit form
app.get("/books/:id/edit", async (req, res) => {

    const { id } = req.params;

    const book = await bookModel.findById(id);

    res.render("books/edit", { book });

});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});