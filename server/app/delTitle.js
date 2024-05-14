const express = require("express");
const router = express.Router();
const books = require("./books");


const delTitle = (request, response) => {
    const bookTitle = request.params.title;
    const index = books.findIndex((book) => book.title === bookTitle);

    if (index !== -1) {
        const deletedBook = books.splice(index, 1);
        response.status(200).json({
            success: true,
            message: `Book with title "${bookTitle}" deleted`,
            data: deletedBook[0],
        });
    } else {
        response.status(404).json({
            success: false,
            message: `Book with title "${bookTitle}" not found`,
        });
    }
};

module.exports = delTitle