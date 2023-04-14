const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const verifyToken = require("../middelwares/verifyToken");
const isAdmin = require("../middelwares/isAdmin");

// end-points users

/* obtener todos los users */
router.get("/", verifyToken, isAdmin, userController.getAll);

module.exports = router;
