const express = require("express");
const router = express.Router();
const books = require("./books");

const getAll = (request, response) => {
    response.status(200).json({
        success: true,
        message: `${request.method} - book request received from getAll func`,
        data: books,
    });
};

module.exports = getAll