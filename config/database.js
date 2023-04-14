const mongoose = require("mongoose");

const db = () => {
   mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("Connected to the database");
   });
};

module.exports = db;
