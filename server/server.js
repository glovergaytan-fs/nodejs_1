// const express = require("express");
// const app = express();
const app = require("./app")

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`); 
})
