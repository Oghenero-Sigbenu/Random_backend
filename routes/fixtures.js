const express = require("express");
const fixtureController = require("../controllers/fixtures");
const isAdmin = require("../middleware/isAdmin");
const Role = require("../controllers/role");
const authenticate = require("../middleware/auth");

const router = express.Router();

router.post("/create", authenticate, isAdmin, fixtureController.createFixtures);
router.get("/all",authenticate, fixtureController.getAllFixtures);
router.delete("/delete/:id", authenticate, isAdmin,fixtureController.deleteFixtures);
router.put("/update/:id", authenticate, isAdmin, fixtureController.editFixtures);

module.exports = router;