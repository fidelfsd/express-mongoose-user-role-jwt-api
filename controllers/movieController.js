const { Movie } = require("../models");

const {
   sendSuccsessResponse,
   sendErrorResponse,
} = require("../_util/sendResponse");

const movieController = {};

movieController.getAll = async (req, res) => {
   console.log(req.headers);
   try {
      const movies = await Movie.find();
      sendSuccsessResponse(res, 200, movies);
   } catch (error) {
      sendErrorResponse(res, 500, "Error retreiving movies", error);
   }
};

movieController.getById = async (req, res) => {
   const { id } = req.params;

   try {
      const movie = await Movie.findById({ _id: id });
      if (movie) sendSuccsessResponse(res, 200, movie);
      else sendErrorResponse(res, 404, `Movie '${id}' not found`);
   } catch (error) {
      const code = error.name == "CastError" ? 400 : 500;
      sendErrorResponse(res, code, "Error retreiving movie", error);
   }
};

module.exports = movieController;
