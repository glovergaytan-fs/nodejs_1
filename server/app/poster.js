const express = require("express");
const router = express.Router();

const books = require("./books");
const poster = (request, response) => {
    console.log('request:', request.body);

    books.push(request.body)
    response.status(200).json({
        success: true,
        message: `${request.method} - book request received from poster func`,
        data: books[books.length - 1]
    });
    console.log(`${request.body.title} - ${request.body.id}`);

};

module.exports = poster