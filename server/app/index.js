const express = require("express");
const morgan = require("morgan");
const app = express();
const routeHandler = require("./routes/index");

app.use(morgan("dev"));
app.use(express.json());

app.use('/', routeHandler);
app.use("*", (request, response) => {
    response.status(404).send({
        success: false,
        message: 'route not found'
    });
});

module.exports = app;