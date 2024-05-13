const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is running in ${process.env.NODE_ENV} on port ${PORT}`); 
})