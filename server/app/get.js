const express = require("express");
const router = express.Router();
const books = require("./books");

const getter = (request, response) => {
    const bookId = parseInt(request.params.id);
    const book = books.find((book) => book.id === bookId);
    if (book) {
    response.status(200).json({
        success: true,
        message: `${request.method} - book request received from getter func`,
        data: book
    });
    console.log(`id: ${book.id}\ntitle: ${book.title}`);
    } else {
        response.status(404).json({
            success: false,
            message: "Book not found",
          });
    }
};

module.exports = getter