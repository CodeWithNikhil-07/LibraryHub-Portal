require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

const connectDB = require("./db/db");
const bookModel = require("./models/book");


connectDB();

app.get("/",(req,res) => {
    res.send("Hello");
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});