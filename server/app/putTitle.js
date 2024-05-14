const express = require("express");
const router = express.Router();
const books = require("./books");

const putTitle = (request, response) => {
    const bookTitle = request.params.title.toLowerCase();
    const index = books.findIndex((book) => book.title.toLowerCase() === bookTitle);

    if (index !== -1) {
        const updatedBook = {
            ...books[index],
            ...request.body,
            title: bookTitle,
        };

        books[index] = updatedBook;

        response.status(200).json({
            success: true,
            message: `Book with title "${bookTitle}" updated`,
            data: updatedBook,
        });
    } else {
        response.status(404).json({
            success: false,
            message: `Book with title "${bookTitle}" not found`,
        });
    }
};

module.exports = putTitle;