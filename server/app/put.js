const express = require("express");
const router = express.Router();
const books = require("./books");

const putter = (request, response) => {
    const bookId = parseInt(request.params.id);
    const index = books.findIndex((book) => book.id === bookId);

    if (index !== -1) {
        const updatedBook = {
            ...books[index],
            ...request.body,
            id: bookId,
        };

        books[index] = updatedBook;

        response.status(200).json({
            success: true,
            message: `Book with ID ${bookId} updated`,
            data: updatedBook,
        });
    } else {
        response.status(404).json({
            success: false,
            message: `Book with ID ${bookId} not found`,
        });
    }
};

module.exports = putter;