const express = require("express");
const teamController = require("../controllers/team");
const isAdmin = require("../middleware/isAdmin");
const Role = require("../controllers/role");
const authenticate = require("../middleware/auth");
const upload = require("../middleware/upload")
const router = express.Router();

router.post("/create", authenticate, isAdmin, upload.single("image"), teamController.createTeam);
router.get("/get", authenticate,   teamController.getAllTeam);
router.delete("/delete/:id", authenticate, isAdmin, teamController.deleteTeam);
router.put("/update/:1d", authenticate, isAdmin, teamController.createTeam);


module.exports = router;