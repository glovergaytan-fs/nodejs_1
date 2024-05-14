const express = require("express");
const router = express.Router();
const books = require("./books");

const deleter = (request, response) => {
    const bookId = Number(request.params.id);
    const index = books.findIndex((book) => book.id === bookId);

    console.log(`book id:' ${bookId}, 'index:' ${index}`)

    if (index !== -1) {
        const deletedBook = books.splice(index, 1);
        response.status(200).json({
            success: true,
            message: `Book with ID ${bookId} deleted`,
            data: deletedBook[0],
        });
        console.log(`Book with ID ${bookId} deleted`)
    } else {
        response.status(404).json({
            success: false,
            message: `Book with ID ${bookId} not found`,
        });
    }
};

module.exports = deleter;
