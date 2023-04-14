const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");
const verifyToken = require("../middelwares/verifyToken");

// end-points movies

/* obtener todos los alumnos */
router.get("/", verifyToken, movieController.getAll);

/* obtener movie por id */
router.get("/:id", movieController.getById);

/* obtener alumno por nombre */
// router.get("/nombre/:name", alumnoController.getByName);

/* crear alumno */
// router.post("/", alumnoController.create);

/* borrar alumno por id */
// router.delete("/:id", alumnoController.deleteOne);

/* modificar alumno por id */
// router.put("/:id", alumnoController.update);

module.exports = router;
