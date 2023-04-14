const mongoose = require("mongoose");

const schema = new mongoose.Schema(
   {
      title: {
         type: String,
         require: true,
      },
      genres: {
         type: Array,
         require: true,
      },
      runtime: {
         type: Number,
         require: true,
      },
      rated: {
         type: String,
      },
      year: {
         type: Number,
         require: true,
      },
      directors: {
         type: Array,
         require: true,
      },
      cast: {
         type: Array,
         require: true,
      },
      type: {
         type: String,
      },
   },
   {
      timestamps: true,
      collection: "movies",
   }
);

const Movie = mongoose.model("Movie", schema);

module.exports = Movie;
