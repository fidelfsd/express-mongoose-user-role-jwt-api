const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

// end-points auth

/* registro de usuarios */
router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
