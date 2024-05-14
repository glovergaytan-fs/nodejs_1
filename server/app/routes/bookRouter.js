const router = require("express").Router();
const getter = require("../get");
const getAll = require("../getAll")
const poster = require("../poster");
const putter = require("../put");
const deleter = require("../delete");
const delTitle = require("../delTitle");
const putTitle = require("../putTitle")

router.get("/id/:id", getter); //complete

router.get("/", getAll); //complete

router.post("/", poster); //complete

router.put("/id/:id", putter); //complete

router.put("/title/:title", putTitle); //complete

router.delete("/id/:id", deleter); //complete

router.delete("/title/:title", delTitle); //complete


module.exports = router;