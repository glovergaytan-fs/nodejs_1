const express = require("express");
const router = express.Router();
const bookRoutes = require("./bookRouter.js")

router.get("/", (request, result)=>{
    result.status(200).json({ success: 'tried and tested' });
    result.status(404).json({ success: 'something' });
});

router.use("/books", bookRoutes);

module.exports = router;