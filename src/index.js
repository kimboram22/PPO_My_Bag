const express = require("express");
const router = express.Router();
const accountRouter = require("./account/account.route");
const boardRouter = require("./board/board.route");

router.get("/", (req, res) => {
    res.render("index.html");
});

router.use("/accounts", accountRouter);
router.use("/boards", boardRouter);

module.exports = router;
