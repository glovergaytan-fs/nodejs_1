const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.status(200).json({ success: 'tried and tested' });
    res.status(404).json({ success: 'something' });
})

module.exports = router;