const express = require("express");
const router = express.Router();
const boardController = require("./board.controller");

router.get("/list", boardController.getList);
router.get("/write", boardController.getWrite);
router.get("/view", boardController.getView);
// router.get("/modify", boardController.getModify);

module.exports = router;
