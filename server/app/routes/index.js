const express = require("express");
const router = express.Router();
const bookRoutes = require("./bookRouter.js")

router.get("/", (request, response)=>{
    if (response.statusCode === 200) {
        response.send("<script>alert('Server is running');</script>");
        // response.status(200).json({ success: 'server is running' });
      } else {
        response.status(404).json({ success: 'Server not running' });
      }
});

router.use("/books", bookRoutes);

module.exports = router;