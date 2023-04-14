const express = require("express");
const router = express.Router();

const indexRouter = require("./routes/index");
const moviesRouter = require("./routes/movies");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");

/* home page */
router.use("/", indexRouter);

/* movies */
router.use("/api/movies", moviesRouter);

/* auth */
router.use("/auth", authRouter);

// users
router.use("/api/users", userRouter);
module.exports = router;
