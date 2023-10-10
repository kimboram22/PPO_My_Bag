const express = require("express");
const router = express.Router();
const accountController = require("./account.controller");

router.get("/signin", accountController.getSignin);
router.post("/signin", accountController.postSignin);

router.get("/signout", accountController.getSignout);

module.exports = router;
