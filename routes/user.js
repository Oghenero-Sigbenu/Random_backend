const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();


router.post("/signup", userController.signup);
router.post("/signup/:admin?", userController.signup); //admin registration
router.get("/all", userController.getAllUser);

module.exports = router;